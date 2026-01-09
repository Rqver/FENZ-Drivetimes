import {loadJson, saveJson} from "../util/json.ts";
import {getStations} from "../data/stations.ts";
import {calculateResponseTimePolygon, globalDeOverLap} from "./isochrones.ts";

const RAW_CACHE_FILE = "./cache/isochrones_raw.json";
const FINAL_CACHE_FILE = "./cache/isochrones.json";

const stationsTable: { name: string; table: any[], x: number, y: number }[] = [];

export async function getOrGenerateData(){
    const finalCache = await loadJson(FINAL_CACHE_FILE);
    if (finalCache) {
        console.log("Using cached data")
        return stationsTable.push(...finalCache)
    }

    const rawCache = (await loadJson(RAW_CACHE_FILE)) ?? {};
    const perStationResults: { name: string; table: any[], x: number, y: number }[] = [];

    for (const s of getStations()){
       let table = rawCache[s.name];

       if (!table) {
           console.log(`Generating initial isochrones for ${s.name}`);
           table = await calculateResponseTimePolygon(s);

           if (!table){
               console.log(`No isochrones for station ${s.name}, skipping?`);
               rawCache[s.name] = null;
               await saveJson(RAW_CACHE_FILE, rawCache)
           }

           rawCache[s.name] = table;
           await saveJson(RAW_CACHE_FILE, rawCache)
       }

       perStationResults.push({
           name: s.name,
           table,
           x: s.x,
           y: s.y
       })
    }

    const computed = globalDeOverLap(perStationResults);
    await saveJson(FINAL_CACHE_FILE, computed);
    stationsTable.push(...computed);
}

export function getStationsTable() {
    return stationsTable;
}