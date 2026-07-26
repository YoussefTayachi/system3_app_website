import type { Metadata } from "next";

// Siehe app/impressum/layout.tsx fuer die Begruendung.
export const metadata: Metadata = { title: "Terms · Frostbreaker" };

export default function AgbLayout({ children }: { children: React.ReactNode }) {
  return children;
}
