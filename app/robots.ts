import type { MetadataRoute } from "next";

import { SITE_URL } from "./site";

/**
 * Aus der Abnahmeliste (Website_Business/Lehren/checkliste.md): jede
 * ausgelieferte Seite braucht eine robots-Auskunft und eine Sitemap, und
 * beides fehlte hier.
 *
 * ANDERS ALS BEI EINEM ENTWURF FUER EINEN LEAD. Dort steht `noindex`, und
 * zwar zweifach -- ein veroeffentlichter Prototyp der Website eines Fremden
 * hat in keinem Index etwas verloren. Das hier ist die eigene Seite: sie
 * soll gefunden werden.
 *
 * `/start` bleibt draussen. Die Seite ist die Landeseite der Kaltakquise und
 * traegt dieselbe Aussage wie die Startseite, nur kuerzer. Zwei Seiten mit
 * derselben Aussage im Index sind fuer beide schlechter als eine.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/start",
    },
    sitemap: SITE_URL + "/sitemap.xml",
  };
}
