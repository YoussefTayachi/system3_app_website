import type { Metadata } from "next";

// Siehe app/impressum/layout.tsx fuer die Begruendung.
export const metadata: Metadata = {
  title: "Privacy policy · Frostbreaker",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzLayout({ children }: { children: React.ReactNode }) {
  return children;
}
