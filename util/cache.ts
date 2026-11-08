import { join } from "jsr:@std/path";

// Where generated isochrone files are stored. Defaults to ./cache relative to
// the working directory; set CACHE_DIR to keep the cache outside the code
// directory (for example, when the code directory is read-only).
export const CACHE_DIR = Deno.env.get("CACHE_DIR") || "./cache";

export function cachePath(fileName: string): string {
    return join(CACHE_DIR, fileName);
}
