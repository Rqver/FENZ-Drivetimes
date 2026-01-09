import * as turf from "npm:@turf/turf";
import { Station } from "../data/stations.ts";

const ORS_URL = Deno.env.get("OPEN_ROUTE_SERVICE_URL");

export async function calculateResponseTimePolygon(station: Station) {
    if (!ORS_URL) return console.warn("No ORS URL in ENV");

    const res = await fetch(`${ORS_URL}/isochrones/driving-car`, {
        method: "POST",
        body: JSON.stringify({
            locations: [[station.x, station.y]],
            range: [480, 600, 900],
            range_type: "time",
            smoothing: 0,
            intersections: false
        }),
        headers: {
            "Accept": "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
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


