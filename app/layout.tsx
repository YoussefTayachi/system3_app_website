import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { getLangServer } from "./lang";
import { LanguageProvider } from "./language-provider";

// Bewusst weg von Inter (die mit Abstand haeufigste SaaS-Schrift, null
// Wiedererkennung) hin zu einem Pairing mit mehr Charakter: Space Grotesk
// fuer Fliesstext/UI, Fraunces als Display-Serife fuer Headline-Akzente
// (z. B. hervorgehobene Zahlen/Woerter in H1). Als @fontsource-variable-Pakete
// eingebunden (selbst gehostet, im Bundle) statt ueber next/font/google, weil
// letzteres beim Build einen Live-Fetch zu Google Fonts braucht -- in
// manchen CI/Sandbox-Umgebungen ohne Netzwerkzugriff blockiert das den
// gesamten Build. @fontsource ist dadurch robuster, ohne Nachteile bei
// Performance (Variable Fonts, wird trotzdem vollstaendig subsettet/gecacht).

const title = "Frostbreaker: Leads finden, anreichern und persönlich kontaktieren, ohne vier Tools zu bezahlen";
const description =
  "Frostbreaker findet B2B-Leads, verifiziert E-Mails und schreibt individuelle Icebreaker automatisch, alles in einem Tool, mit eigenen API-Keys statt teurer Pauschale.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Frostbreaker",
  description,
  areaServed: "DE-AT-CH",
  founder: { "@type": "Person", name: "Youssef Tayachi" },
};

// Sprache kommt aus einem Cookie (siehe app/lang.ts), wird hier serverseitig
// gelesen und als Startwert an den LanguageProvider durchgereicht -- der
// erste Client-Render ist dadurch identisch zum Server-Render, kein
// Hydration-Mismatch/Flackern beim Umschalten.
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getLangServer();
  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider lang={lang}>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
