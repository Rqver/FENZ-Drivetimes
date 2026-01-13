import express from "npm:express";
import {getDriveTimes} from "../../handlers/gps.ts";

export default {
    url: '/api/get-directions/:x/:y/:strike',
    type: 'GET',
    callback: async (req: express.Request, res: express.Response) => {
        res.json(await getDriveTimes(Number(req.params.x), Number(req.params.y), (req.params.strike === "true")))
    }
}
