import type { Metadata } from "next";

// Siehe app/impressum/layout.tsx fuer die Begruendung.
export const metadata: Metadata = {
  title: "Terms · Frostbreaker",
  alternates: { canonical: "/agb" },
};

export default function AgbLayout({ children }: { children: React.ReactNode }) {
  return children;
}
