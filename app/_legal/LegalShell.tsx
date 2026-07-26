"use client";
import Link from "next/link";
import { useT, LanguageToggle } from "../language-provider";

// "Entwurf, noch nicht anwaltlich geprueft" (draft, not yet legally reviewed)
// stand hier bewusst, solange die Seite nicht live ging. Jetzt entfernt, da die
// Seite live gehen soll -- das ersetzt aber keine echte rechtliche Pruefung
// (z.B. WKO Gruenderservice), nur weil der Hinweis weg ist.
export function LegalShell({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  const { t } = useT();
  return (
    <div className="min-h-screen">
      <header className="border-b border-edge/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-3xl font-extrabold tracking-tighter text-[#0EA5E9]">frostbreaker</span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link href="/" className="text-sm text-soft hover:text-ink">{t.legal.back}</Link>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h1>
        <p className="mt-2 text-xs text-mute">{updated}</p>
        <div className="legal-content mt-8 text-sm leading-relaxed text-soft">{children}</div>
      </main>
      <footer className="border-t border-edge/60">
        <div className="mx-auto max-w-3xl px-4 py-8 text-xs text-mute sm:px-6">
          {t.legal.footerLine(new Date().getFullYear())}
        </div>
      </footer>
    </div>
  );
}
