import type { Metadata } from "next";
// ══════════════════════════════════════════════════════════════════════
// WIX MADEFOR, seit dem 2026-08-31.
//
// Youssef: "nutz die schriftart von Wix ... also mach schriftart ueberall wie
// die von Wix bzw jz von der website marketing.frostbreaker.app."
//
// Nachgesehen am 2026-08-31 im Browser auf marketing.frostbreaker.app:
//   Ueberschriften   Wix Madefor Display Variable
//   Fliesstext       Wix Madefor Text Variable
// Es sind zwei Schnitte derselben Familie, nicht zwei Familien. Genau das
// macht den Unterschied zum vorigen Paar: Space Grotesk und Fraunces waren
// eine Grotesk und eine Serife, also zwei Stimmen. Madefor Display und Text
// sind eine Stimme in zwei Lautstaerken.
//
// WAS DAS FUER DIE UEBERSCHRIFTEN HEISST. Fraunces hatte eine echte
// Kanzleikursive, und der Akzent in der H1 war kursiv gesetzt. Madefor
// Display hat ueberhaupt keinen kursiven Schnitt (metadata.json: styles
// ["normal"]). Der Akzent traegt deshalb jetzt nur noch Farbe -- so wie er
// es auf marketing.frostbreaker.app auch tut ("before they call" in Blau,
// nicht kursiv).
//
// `font-optical-sizing: auto` ist mit Fraunces gefallen: Madefor hat keine
// opsz-Achse, nur wght von 400 bis 800.
//
// Weiter als @fontsource-variable und nicht ueber next/font/google: der Bau
// soll keinen Live-Abruf zu Google Fonts brauchen. Begruendung unveraendert.
// ══════════════════════════════════════════════════════════════════════
import "@fontsource-variable/wix-madefor-text";
import "@fontsource-variable/wix-madefor-display";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { getLangServer, getThemeServer } from "./lang";
import { SITE_URL } from "./site";
import { LanguageProvider } from "./language-provider";

// Was hier vorher stand: Space Grotesk fuer Fliesstext und Fraunces als
// Display-Serife. Das Paar hatte Charakter und war fuer diese Website nie
// falsch -- es passte nur nicht mehr zu den anderen Seiten unter derselben
// Marke. marketing.frostbreaker.app laeuft auf Wix Madefor, und zwei Seiten
// desselben Absenders mit zwei Schriftpaaren lesen sich wie zwei Absender.

const title = "Frostbreaker: customer acquisition that keeps running without you";
const description =
  "You say who you want to reach. Frostbreaker finds the decision-makers, reads their website, writes the email and follows up. One tool, on your own API keys.";
const siteUrl = SITE_URL;

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
  const theme = await getThemeServer();
  return (
    <html lang={lang} data-theme={theme} style={{ colorScheme: theme }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider lang={lang} theme={theme}>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
