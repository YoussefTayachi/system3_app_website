import type { Metadata } from "next";
import { dict } from "../dict";

const de = dict.de;

// Diese Seite hatte bis zum 2026-08-31 gar kein eigenes metadata: sie erbte
// Titel und Beschreibung des PRODUKTS aus dem Root-Layout, obwohl sie den
// Entstehungsweg der App erzaehlt und als Beleg fuer Auftragsentwicklung
// verschickt wird. Aus der Abnahmeliste: Canonical auf jeder Seite, und jede
// zeigt auf sich selbst.
//
// Titel und Beschreibung kommen aus dem deutschen Block, wie bei den vier
// anderen Unterseiten-Layouts: die Seite selbst ist zweisprachig, `metadata`
// wird aber serverseitig einmal erzeugt und kennt das Sprach-Cookie nicht.
const title = de.caseStudyPage.title + " · Frostbreaker";
const description = de.caseStudyPage.intro;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/case-study" },
  openGraph: { title, description, type: "article", locale: "de_DE", url: "/case-study" },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
