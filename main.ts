import express from "npm:express"
import {initRoutes} from "./handlers/routes.ts";
import {
    generateStandardData,
    generateStrikeData,
    generateStrikeVolunteerDelayData,
    generateVolunteerDelayData
} from "./handlers/data.ts";

const port = Number(Deno.env.get("PORT") ?? "6710")
const host = Deno.env.get("HOST") || "127.0.0.1"

async function main(){
    await generateStandardData();
    await generateVolunteerDelayData();
    await generateStrikeData();
    await generateStrikeVolunteerDelayData();

    console.log("Creating express server");
    const app = express();
    await initRoutes(app, "routes");

    app.listen(port, host);
    console.log(`Listening on http://${host}:${port}`)
}

main();