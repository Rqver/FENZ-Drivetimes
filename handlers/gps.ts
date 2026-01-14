import {getStations, StationType} from "../data/stations.ts";
import {haversine} from "../util/geography.ts";

const ORS_URL = Deno.env.get("OPEN_ROUTE_SERVICE_URL");

export function findClosestStations(x: number, y: number, n: number, strike = false){
    let stations = getStations();
    if (strike) stations = stations.filter(s => (s.type !== StationType.CAREER && s.type !== StationType.COMPOSITE));
    stations = stations.filter(s => !(s.type === StationType.INDUSTRY && haversine(x, y, s.x, s.y) > 5.0))

    return stations.map(station => {
        const distance = haversine(x, y, station.x, station.y);
        return {...station, distance}
    }).sort((a, b) => a.distance - b.distance).slice(0, n);
}

interface Point {
    x: number;
    y: number;
}

async function calculateDirections(a: Point, b: Point) {
   if (!ORS_URL) return;

    const fetchURL = `${ORS_URL}/directions/driving-car?start=${a.x},${a.y}&end=${b.x},${b.y}`
    const response = await fetch(fetchURL);
    const json = await response.json();

    let distance;
    let driveTime;
    if (json && json.features){
        distance = json.features[0].properties.summary.distance
        driveTime = json.features[0].properties.summary.duration
    }

    return {distance, driveTime, json}
}

export async function getDriveTimes(x: number, y: number, strike = false, delay = false){
    const closestStations = findClosestStations(x, y, 20, strike);

    const promises = closestStations.map(async (station) => {
        const directions = await calculateDirections({x: station.x, y: station.y}, {x, y});
        if (!directions) return null;

        let driveTime = Math.round(directions.driveTime / 60);
        if (delay && (station.type === StationType.VOLUNTEER || station.type === StationType.RURAL)) driveTime += 3;

        return {
            station,
            driveTime: driveTime,
            distance: directions.distance / 1000,
            directions: directions.json
        }
    })

    const results = await Promise.all(promises);

    return results
        .filter((r): r is NonNullable<typeof r> => r !== null)
        .sort((a, b) => a.driveTime - b.driveTime)
        .slice(0, 9);
}