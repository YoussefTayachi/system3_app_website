/**
 * Die eine Stelle, an der die Adresse dieser Website steht.
 *
 * Sie stand bis zum 2026-08-31 nur in app/layout.tsx, und robots.ts sowie
 * sitemap.ts haetten sie ein zweites und drittes Mal gebraucht. Drei Kopien
 * einer Domain laufen beim ersten Umzug auseinander, und der Fehlerfall ist
 * still: eine Sitemap, die auf die alte Adresse zeigt, meldet niemand.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://system3-app-website.vercel.app";

/**
 * Jede Seite dieser Website, mit ihrem Gewicht fuer die Sitemap.
 *
 * Die Reihenfolge ist die der Navigation, nicht die des Dateisystems: wer
 * eine Seite dazubaut, soll sie an der Stelle eintragen, an der ein Leser
 * sie erwartet. Rechtsseiten am Ende und mit niedriger Prioritaet -- sie
 * muessen auffindbar sein, sie muessen nicht gefunden werden.
 *
 * `/start` fehlt bewusst, siehe robots.ts.
 */
export const SEITEN: { pfad: string; prioritaet: number }[] = [
  { pfad: "/", prioritaet: 1 },
  { pfad: "/funktionen", prioritaet: 0.9 },
  { pfad: "/fuer-agenturen", prioritaet: 0.9 },
  { pfad: "/fuer-saas", prioritaet: 0.8 },
  { pfad: "/kunden/retaiyn", prioritaet: 0.7 },
  { pfad: "/eigene-software", prioritaet: 0.7 },
  { pfad: "/case-study", prioritaet: 0.6 },
  { pfad: "/kontakt", prioritaet: 0.6 },
  { pfad: "/impressum", prioritaet: 0.2 },
  { pfad: "/datenschutz", prioritaet: 0.2 },
  { pfad: "/agb", prioritaet: 0.2 },
  { pfad: "/avv", prioritaet: 0.2 },
];
