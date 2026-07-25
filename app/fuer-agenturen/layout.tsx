import type { Metadata } from "next";
import { dict } from "../dict";

const de = dict.de;

// Eigene Metadaten fuer die Route, siehe app/funktionen/layout.tsx.
export const metadata: Metadata = {
  title: de.agencyPage.metaTitle,
  description: de.agencyPage.metaDescription,
  openGraph: {
    title: de.agencyPage.metaTitle,
    description: de.agencyPage.metaDescription,
    type: "website",
    locale: "de_DE",
  },
};

export default function AgenturenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
