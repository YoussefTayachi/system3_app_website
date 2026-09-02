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
 * `/start` gab es bis zum 2026-09-02 als eigene Landeseite und stand hier
 * auf disallow. Seitdem ist es eine Umleitung auf die Startseite.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: SITE_URL + "/sitemap.xml",
  };
}
