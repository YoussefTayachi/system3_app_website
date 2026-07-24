import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next sucht die Projektwurzel anhand der naechstgelegenen Lockfile und geht
  // dabei auch nach oben. Liegt oberhalb dieses Ordners ein weiteres
  // package-lock.json (etwa weil das Repo in einem anderen Node-Projekt
  // ausgecheckt wurde), waehlt Next dessen Ordner als Wurzel -- im Dev-Server
  // zeigen die Chunk-Pfade dann ins Leere und die Seite bleibt ohne
  // Interaktivitaet: Rechner tot, Scroll-Reveals unsichtbar, alles nur noch
  // statisches HTML. Der Build laeuft trotzdem durch, weshalb es leicht
  // unbemerkt bleibt. Explizit gesetzt kann das nicht mehr passieren.
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
