import express from "npm:express";

const PHOTON_URL = Deno.env.get("PHOTON_URL")
export default {
    url: '/api/search',
    type: 'GET',
    callback: async (req: express.Request, res: express.Response) => {
        if (!PHOTON_URL || !req.query.search) return res.json({});
        const query = String(req.query.search || "")

        const fetchRes = await fetch(`${PHOTON_URL}/api?q=${encodeURIComponent(query)}`)
        res.json(await fetchRes.json());
    }
}
