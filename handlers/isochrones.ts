import * as turf from "npm:@turf/turf";
import {Station, StationType} from "../data/stations.ts";
import {haversine, safeDifference} from "../util/geography.ts";

const ORS_URL = Deno.env.get("OPEN_ROUTE_SERVICE_URL");


export async function calculateResponseTimePolygon(station: Station, opts?: { volunteerDelay?: boolean }) {
    if (!ORS_URL) return console.warn("No ORS URL in ENV");

    const isIndustry = station.type === StationType.INDUSTRY;
    const isVolunteer = ((station.type === StationType.VOLUNTEER) || (station.type === StationType.RURAL)) && opts?.volunteerDelay;

    const DELAY = isVolunteer ? 180 : 0;

    const baseRanges = isIndustry ? [380] : [480, 600, 900];

    const ranges = baseRanges.map(r => Math.max(0, r - DELAY));

    const res = await fetch(`${ORS_URL}/isochrones/driving-car`, {
        method: "POST",
        body: JSON.stringify({
            locations: [[station.x, station.y]],
            range: ranges,
            range_type: "time",
            smoothing: 0,
            intersections: false
        }),
        headers: {
            Accept: "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
            "Content-Type": "application/json; charset=utf-8"
        }
    });

    const data = await res.json();
    const features: any[] = data.features;

    if (!Array.isArray(features) || features.length < 3) return features ?? [];

    const sorted = [...features].sort(
        (a, b) => Number(a.properties.value) - Number(b.properties.value)
    );

    const [layer1, layer2, layer3] = sorted;

    const mid = turf.difference(turf.featureCollection([layer2, layer1]));
    const out = turf.difference(turf.featureCollection([layer3, layer2]));

    return [
        layer1,
        mid ? { ...layer2, geometry: mid.geometry } : layer2,
        out ? { ...layer3, geometry: out.geometry } : layer3
    ];
}


interface Entry {
        station: string;
        time: number;
        feature: any;
        centerLat: number;
        centerLon: number;
}

export function globalDeOverLap(stationsTable: Array<{ name: string, table: any[], x: number, y: number}>){
    const all: Entry[] = [];

    for (const s of stationsTable){
        for (const f of s.table){
            if (!f) continue;
            all.push({
                station: s.name,
                time: Number(f.properties.value),
                feature: f,
                centerLat: s.y,
                centerLon: s.x
            })
        }
    }

    all.sort((a, b) => a.time - b.time);

    const kept: Entry[] = [];

    const total = all.length;
    let processed = 0;
    let diffOps = 0;
    let skipped = 0;
    const start = Date.now();

    const log = () => {
        const pct = ((processed / total) * 100).toFixed(1);
        console.log(`Progress ${pct}% | ${processed}/${total} | diffOps=${diffOps} | skipped=${skipped} | ${((Date.now()-start)/1000).toFixed(1)}s`);
    };


    console.log(`Starting to de-overlap ${total} polygons...`);

    for (const entry of all) {
        let current = entry.feature;

        // you would not believe the problems Mosgiel has caused me
        // I think it's something to do with its road in/road out situation and that a lot of the Dunedin-based trucks ended up with polygons on the same road
        // I don't know how this doesn't occur anywhere else, but it doesn't and simplifying the polygon fixes it so /shrug
        if (entry.station === "Mosgiel"){
            current = turf.simplify(current, { tolerance: 0.00001, highQuality: true });
        }

        for (const prev of kept) {
            const distance = haversine(entry.centerLat, entry.centerLon, prev.centerLat, prev.centerLon);
            if (distance > 40 || distance < 0.5) {
                skipped++;
                continue;
            }

            if (prev.time > entry.time) continue;

            diffOps++;
            const diff = safeDifference(current, prev.feature);
            if (!diff) {
                current = null;
                break;
            }

            current = { type: "Feature", properties: current.properties, geometry: diff.geometry };
        }

        if (current) {
            kept.push({
                station: entry.station,
                time: entry.time,
                feature: current,
                centerLat: entry.centerLat,
                centerLon: entry.centerLon
            })
        }

        processed++;
        if (processed % 100 == 0 || processed === total) log();
    }

    const map = new Map<String, any[]>();
    for (const k of kept){
        if (!map.has(k.station)) {
            map.set(k.station, []);
        }

        map.get(k.station)!.push(k.feature);
    }

    return [...map.entries()].map(([name, table]) => ({ name, table }));
}



