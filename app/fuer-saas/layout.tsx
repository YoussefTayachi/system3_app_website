import type { Metadata } from "next";
import { dict } from "../dict";

const de = dict.de;

// Eigene Metadaten fuer die Route, siehe app/fuer-agenturen/layout.tsx.
export const metadata: Metadata = {
  title: de.saasPage.metaTitle,
  description: de.saasPage.metaDescription,
  openGraph: {
    title: de.saasPage.metaTitle,
    description: de.saasPage.metaDescription,
    type: "website",
    locale: "de_DE",
  },
};

export default function SaasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
