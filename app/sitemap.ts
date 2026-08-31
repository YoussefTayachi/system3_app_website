import type { MetadataRoute } from "next";

import { SEITEN, SITE_URL } from "./site";

/** Die Liste steht in site.ts, damit sie neben robots.ts nur einmal
 *  existiert. Wer eine Seite dazubaut, traegt sie dort ein. */
export default function sitemap(): MetadataRoute.Sitemap {
  const jetzt = new Date();
  return SEITEN.map(({ pfad, prioritaet }) => ({
    url: SITE_URL + pfad,
    lastModified: jetzt,
    priority: prioritaet,
  }));
}
