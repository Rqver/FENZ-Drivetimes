import express from "npm:express";

const PHOTON_URL = Deno.env.get("PHOTON_URL")
export default {
    url: '/api/search',
    type: 'GET',
    callback: async (req: express.Request, res: express.Response) => {
        if (!PHOTON_URL || !req.query.search) return {};

        const fetchRes = await fetch(`${PHOTON_URL}/api?q=${encodeURIComponent(req.query.search as string)}`)
        res.json(await fetchRes.json());
    }
}
