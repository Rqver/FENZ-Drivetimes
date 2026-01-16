import { loadJson, saveJson } from "../util/json.ts";
import { getStations, StationType } from "../data/stations.ts";
import { calculateResponseTimePolygon, globalDeOverLap } from "./isochrones.ts";

type StationTable = { name: string; table: any[]; x: number; y: number };
type GeometryMode = "standard" | "volunteerDelay";
interface Scenario {
    geometry: GeometryMode;
    strike: boolean;
}

const RAW = (g: GeometryMode) => `./cache/isochrones_raw_${g}.json`;
const FINAL = (g: GeometryMode, strike: boolean) => `./cache/isochrones_${strike ? "strike_" : ""}${g}.json`;

async function generateData(s: Scenario) {
    try {
    await Deno.mkdir("./cache", { recursive: true });
    } catch (err) {
        if (!(err instanceof Deno.errors.AlreadyExists)) throw err;
    }

    const finalCache = await loadJson(FINAL(s.geometry, s.strike));
    if (finalCache) return finalCache;

    console.log(`Generating data for scenario: geometry: ${s.geometry}, strike: ${s.strike}`)

    const rawCache = (await loadJson(RAW(s.geometry))) ?? {};
    const perStation: StationTable[] = [];

    for (const st of getStations()) {
        if (s.strike && (st.type === StationType.CAREER || st.type === StationType.COMPOSITE)) continue;

        let table = rawCache[st.name];

        if (!table) {
            console.log(`Generating raw isochrones for ${st.name}`)
            table = await calculateResponseTimePolygon(st, {
                volunteerDelay: s.geometry === "volunteerDelay"
            });

            rawCache[st.name] = table ?? null;
            await saveJson(RAW(s.geometry), rawCache);
        }

        if (!table) continue;

        perStation.push({
            name: st.name,
            table,
            x: st.x,
            y: st.y
        });
    }

    const computed = globalDeOverLap(perStation);
    await saveJson(FINAL(s.geometry, s.strike), computed);
    return computed;
}

export const generateStandardData = () => generateData({ geometry: "standard", strike: false });

export const generateVolunteerDelayData = () => generateData({ geometry: "volunteerDelay", strike: false });

export const generateStrikeData = () => generateData({ geometry: "standard", strike: true });

export const generateStrikeVolunteerDelayData = () => generateData({ geometry: "volunteerDelay", strike: true });

export async function getStationsTable(scenario: Scenario): Promise<StationTable[]> {
  const data = await loadJson(FINAL(scenario.geometry, scenario.strike));
  return data ?? [];
}