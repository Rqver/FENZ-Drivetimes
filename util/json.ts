import { dirname } from "jsr:@std/path";

export async function loadJson(path: string): Promise<any | null> {
    try {
        return JSON.parse(await Deno.readTextFile(path));
    } catch {
        return null;
    }
}

export async function saveJson(path: string, data: any): Promise<void> {
    await Deno.mkdir(dirname(path), { recursive: true });
    await Deno.writeTextFile(path, JSON.stringify(data));
}