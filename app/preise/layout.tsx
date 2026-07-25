import type { Metadata } from "next";
import { dict } from "../dict";

const de = dict.de;

// Eigene Metadaten fuer die Route, siehe app/funktionen/layout.tsx.
export const metadata: Metadata = {
  title: de.pricingPage.metaTitle,
  description: de.pricingPage.metaDescription,
  openGraph: {
    title: de.pricingPage.metaTitle,
    description: de.pricingPage.metaDescription,
    type: "website",
    locale: "de_DE",
  },
};

export default function PreiseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
