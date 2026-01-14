import express from "npm:express";
import {getDriveTimes} from "../../handlers/gps.ts";

export default {
    url: '/api/get-directions/:x/:y',
    type: 'GET',
    callback: async (req: express.Request, res: express.Response) => {
        const { strike, delay } = req.query;

        res.json(await getDriveTimes(Number(req.params.x), Number(req.params.y), !!(strike && strike === "true"), !!(delay && delay === "true")))
    }
}
