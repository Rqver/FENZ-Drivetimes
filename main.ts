import express from "npm:express"
import {initRoutes} from "./handlers/routes.ts";
import {stations} from "./data/stations.ts";
import {loadJson, saveJson} from "./util/json.ts";
import {calculateResponseTimePolygon} from "./handlers/isochrones.ts";

const PORT = 6710;

const RAW_CACHE_FILE = "./cache/isochrones_raw.json";

async function getOrGenerateData(){
    const rawCache = (await loadJson(RAW_CACHE_FILE)) ?? {};

    for (const s of stations){
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
    }
}

async function main(){
    getOrGenerateData();

    return
    console.log("Creating express server");
    const app = express();
    await initRoutes(app, "routes");

    app.listen(PORT);
    console.log(`Listening on http://localhost:${PORT}`)
}

main();