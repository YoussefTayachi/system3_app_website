import type { Metadata } from "next";
import { dict } from "../dict";

const de = dict.de;

// Eigene Metadaten fuer die Route. Die Seite selbst ist eine Client-Komponente
// (Sprachumschaltung), kann also kein metadata exportieren -- deshalb dieses
// duenne Layout. Sprache bewusst Deutsch wie im Root-Layout: Titel und
// Beschreibung werden serverseitig zur Buildzeit erzeugt, waehrend die
// Sprachwahl erst im Cookie des Besuchers steht.
export const metadata: Metadata = {
  title: de.featuresPage.metaTitle,
  description: de.featuresPage.metaDescription,
  openGraph: {
    title: de.featuresPage.metaTitle,
    description: de.featuresPage.metaDescription,
    type: "website",
    locale: "de_DE",
  },
};

export default function FunktionenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
