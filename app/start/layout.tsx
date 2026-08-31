import type { Metadata } from "next";
import { dict } from "../dict";

const de = dict.de;

// Die Landeseite der Kaltakquise. Sie traegt dieselbe Aussage wie die
// Startseite, nur kuerzer -- deshalb steht sie in robots.ts auf `disallow`
// und hier auf `noindex`. Zwei Seiten mit derselben Aussage im Index sind
// fuer beide schlechter als eine.
//
// Canonical trotzdem gesetzt: wer den Link mit einem Kampagnen-Parameter
// weiterschickt, soll nicht zwei Adressen erzeugen.
const title = de.startPage.title;
const description = de.startPage.body;

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/start" },
  openGraph: { title, description, type: "website", locale: "de_DE", url: "/start" },
};

export default function StartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
