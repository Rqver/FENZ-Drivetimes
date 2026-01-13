import express from "npm:express"
import {initRoutes} from "./handlers/routes.ts";
import {
    generateStandardData,
    generateStrikeData,
    generateStrikeVolunteerDelayData,
    generateVolunteerDelayData
} from "./handlers/data.ts";

const PORT = 6710;

async function main(){
    await generateStandardData();
    await generateVolunteerDelayData();
    await generateStrikeData();
    await generateStrikeVolunteerDelayData();

    console.log("Creating express server");
    const app = express();
    await initRoutes(app, "routes");

    app.listen(PORT);
    console.log(`Listening on http://localhost:${PORT}`)
}

main();