import type { Metadata } from "next";

// page.tsx ist "use client" (braucht useT() fuer DE/EN) -- Next.js erlaubt
// metadata-Export nur aus Server-Komponenten, deshalb hier ausgelagert,
// gleiches Muster wie app/preise/layout.tsx.
export const metadata: Metadata = { title: "Legal notice · Frostbreaker" };

export default function ImpressumLayout({ children }: { children: React.ReactNode }) {
  return children;
}
