import type { Metadata } from "next";

// Die Seite selbst ist "use client" (Sprachumschaltung ueber useT) und kann
// deshalb kein metadata exportieren -- dafuer dieses Layout. Ohne das erbt sie
// den Produkt-Titel aus dem Root-Layout ("Frostbreaker: find, enrich and
// personally contact leads..."), was bei genau dieser Seite in die Irre
// fuehrt: Sie wird als Link in der Kaltakquise fuer Auftragsentwicklung
// verschickt, und in Slack/LinkedIn stuende dann eine Vorschau ueber ein
// SaaS-Produkt, das der Empfaenger gar nicht angeboten bekommt.
//
// Bewusst auf Englisch: Zielgruppe dieser Seite sind US-Empfaenger (siehe
// docs/KALTAKQUISE-VORLAGEN.md in der App). Der Seiteninhalt selbst bleibt
// ueber den Sprachumschalter zweisprachig.
const title = "Custom software development · Youssef Tayachi, Frostbreaker";
const description =
  "I build internal tools, AI pipelines and customer-facing apps as one system you own, instead of five subscriptions wired together. Frostbreaker is the proof: built solo, running in production.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/eigene-software" },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Frostbreaker",
    url: "/eigene-software",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function EigeneSoftwareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
