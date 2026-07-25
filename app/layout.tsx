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

const title = "Frostbreaker: find, enrich and personally contact leads without paying for four tools";
const description =
  "Frostbreaker finds B2B leads, verifies email addresses, brings the phone number from the public listing along and writes individual icebreakers automatically. All in one tool, with your own API keys instead of an expensive flat rate.";

// metadataBase macht aus dem generierten OG-Bild (app/opengraph-image.tsx)
// eine absolute URL -- ohne das steht beim Teilen ein localhost-Link im
// og:image, den kein Crawler aufloesen kann.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://system3-app-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Frostbreaker",
    url: "/",
  },
  twitter: {
    // summary_large_image statt summary: das generierte Bild ist 1200x630,
    // als "summary" wuerde es auf ein kleines Quadrat beschnitten.
    card: "summary_large_image",
    title,
    description,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Frostbreaker",
  description,
  areaServed: ["US", "GB", "CA", "AU", "DE", "AT", "CH"],
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
