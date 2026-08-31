import type { Metadata } from "next";
import { dict } from "../dict";

const de = dict.de;

// Bis zum 2026-08-31 ohne eigenes metadata, siehe die Begruendung in
// app/case-study/layout.tsx.
const title = de.contactPage.title + " · Frostbreaker";
const description = de.contactPage.intro;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/kontakt" },
  openGraph: { title, description, type: "profile", locale: "de_DE", url: "/kontakt" },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}
