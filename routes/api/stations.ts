import express from "npm:express";
import {getStationsTable} from "../../handlers/data.ts";

export default {
    url: '/api/stations',
    type: 'GET',
    callback: async (_: express.Request, res: express.Response) => {
        res.json(getStationsTable());
    }
}
