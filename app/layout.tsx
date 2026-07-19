import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/inter";
import "./globals.css";

const title = "Thaw: Leads finden, anreichern und persönlich kontaktieren, ohne vier Tools zu bezahlen";
const description =
  "Thaw findet B2B-Leads, verifiziert E-Mails und schreibt individuelle Icebreaker automatisch, alles in einem Tool, mit eigenen API-Keys statt teurer Pauschale.";

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
  name: "Thaw",
  description,
  areaServed: "DE-AT-CH",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
