import express from "npm:express"
import {initRoutes} from "./handlers/routes.ts";
import {getOrGenerateData} from "./handlers/data.ts";

const PORT = 6710;

async function main(){
    await getOrGenerateData();

    console.log("Creating express server");
    const app = express();
    await initRoutes(app, "routes");

    app.listen(PORT);
    console.log(`Listening on http://localhost:${PORT}`)
}

main();