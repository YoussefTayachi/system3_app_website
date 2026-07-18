import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thaw — Leads finden, anreichern und persönlich kontaktieren, ohne vier Tools zu bezahlen",
  description:
    "Thaw findet B2B-Leads, verifiziert E-Mails und schreibt individuelle Icebreaker automatisch — alles in einem Tool, mit eigenen API-Keys statt teurer Pauschale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
