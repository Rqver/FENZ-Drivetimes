import express from "npm:express";

const NOMINATIM_URL = Deno.env.get("NOMINATIM_URL")

export default {
    url: '/api/reverse/:lon/:lat',
    type: 'GET',
    callback: async (req: express.Request, res: express.Response) => {
        if (!NOMINATIM_URL) return {};

        const fetchRes = await fetch(`${NOMINATIM_URL}/reverse?lat=${req.params.lat}&lon=${req.params.lon}&format=json`)
        res.json(await fetchRes.json());
    }
}
