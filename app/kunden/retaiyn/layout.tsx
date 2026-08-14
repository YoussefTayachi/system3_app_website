import type { Metadata } from "next";
import { dict } from "../../dict";

const de = dict.de;

// Eigene Metadaten fuer die Route, siehe app/fuer-saas/layout.tsx.
export const metadata: Metadata = {
  title: de.customerPage.metaTitle,
  description: de.customerPage.metaDescription,
  openGraph: {
    title: de.customerPage.metaTitle,
    description: de.customerPage.metaDescription,
    type: "website",
    locale: "de_DE",
  },
};

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
