"use client";
import Link from "next/link";
import { CTAButton, SiteHeader, SiteFooter, BOOKING_URL, h1Cls, cardTitleCls, sectionPad } from "../_ui";
import { useT } from "../language-provider";

const EMAIL = "youssef.tayachi@frostbreaker.app";
const PHONE = "+43 676 9004865";
const PHONE_HREF = "+436769004865";

export default function KontaktPage() {
  const { t } = useT();
  const c = t.contactPage;
  return (
    // pb-16 sm:pb-0 wie auf den uebrigen sechs Seiten: die feste Leiste
    // unten wuerde sonst den Fuss verdecken.
    <div className="min-h-screen pb-16 sm:pb-0">
      {/* Kopf und Fuss kommen aus _ui.tsx. Bis zum 14.08.2026 stand das
          Markup hier ausgeschrieben, mit einer eigenen Zusammenstellung:
          diese Seite trug zusaetzlich "/#vergleich" und dafuer nicht
          "Kontakt" -- sie IST die Kontaktseite. Genau solche Abweichungen
          entstehen, wenn dieselbe Leiste achtmal kopiert dasteht; der
          Vergleichs-Anker ist mit dem gemeinsamen Kopf entfallen, weil er auf
          sieben der acht Seiten ohnehin nicht stand. */}
      <SiteHeader />

      {/* ═══════════════════════════════════════════════════════════════
          DIE ZWEITE SEITE, DIE TYPOGRAFISCH NICHT DAZUGEHOERTE.

          Gemessen am 2026-08-15: kein einziges Fraunces auf der ganzen
          Seite. Die H1 war Space Grotesk in 30px -- kleiner als jede
          Kapitelueberschrift der Startseite und ohne die Serife, die auf
          allen anderen sieben Seiten sagt, dass hier etwas anfaengt. Die
          h2 darunter standen auf 18px.

          Dazu dasselbe Breitenproblem wie auf /case-study: max-w-3xl unter
          einem max-w-6xl-Kopf, Inhalt bei x=352, Logo bei x=160. Jetzt
          aeusserer Rahmen max-w-6xl, Textspalte auf 68ch, und die
          Kontaktkarte behaelt ihre 768px -- sie ist ein Raster mit Foto und
          drei Knoepfen, kein Satz, und in voller Rahmenbreite waeren die
          Zeilen darin doppelt so lang wie noetig.
          ═══════════════════════════════════════════════════════════════ */}
      <section className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-faint">{c.eyebrow}</p>
        <h1 className={"max-w-[20ch] " + h1Cls}>{c.title}</h1>
        <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-soft sm:text-lg">{c.intro}</p>

        <div className="mt-12 grid max-w-3xl gap-8 rounded-2xl border border-edge/60 bg-panel p-6 sm:p-8 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/team/youssef-tayachi.png"
              alt={c.name}
              className="aspect-square w-full max-w-[220px] rounded-2xl object-cover shadow-sm"
            />
            {/* Kartentitel-Stufe: der Name ist die Ueberschrift der Karte,
                nicht ein Kapitel der Seite. Fraunces faengt erst bei 24px
                an, und ein Personenname in Display-Serife waere ein
                Buchtitel. */}
            <h2 className={"mt-4 " + cardTitleCls}>{c.name}</h2>
            <p className="mt-0.5 text-sm text-mute">{c.role}</p>
          </div>

          <div className="lg:col-span-3">
            {/* Der laengste Fliesstext der Seite und ihr eigentlicher Inhalt
                -- deshalb 16px und nicht die 15px der uebrigen
                Karteninhalte. */}
            <p className="text-base leading-relaxed text-soft">{c.bio}</p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 rounded-lg border border-edge2 px-4 py-3 text-[15px] text-ink transition-colors hover:border-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-mute">
                  <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* min-w-0 + break-all: "youssef.tayachi@frostbreaker.app"
                    ist 32 Zeichen ohne Trennstelle und rund 230px breit.
                    Auf einem 320px-Fenster bleiben im Kasten 225px -- die
                    Zeile stand ueber den Rand hinaus und schob die ganze
                    Seite 54px zur Seite (gemessen 2026-08-15). Ein flex-Kind
                    schrumpft ohne min-w-0 nicht unter seinen Inhalt. */}
                <span className="min-w-0 break-all">
                  <span className="block text-xs text-mute">{c.emailLabel}</span>
                  {EMAIL}
                </span>
              </a>

              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-3 rounded-lg border border-edge2 px-4 py-3 text-[15px] text-ink transition-colors hover:border-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-mute">
                  <path d="M5 4h3.5l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5V19a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                <span className="min-w-0">
                  <span className="block text-xs text-mute">{c.phoneLabel}</span>
                  {PHONE}
                </span>
              </a>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-ink px-4 py-3 text-sm font-medium text-surface shadow-sm transition-all hover:opacity-85"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
                  <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M4 9h16M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                {c.calendlyLabel}
              </a>
              <p className="text-sm text-mute">{c.calendlyNote}</p>
            </div>
          </div>
        </div>

        {/* Linksbuendig statt mittig, wie auf /case-study: der Rueckweg
            gehoert an dieselbe Kante wie alles darueber. */}
        <p className="mt-10 text-sm text-mute">
          <Link href="/" className="underline hover:text-ink">{c.backLabel}</Link>
        </p>
      </section>

      <SiteFooter />

      {/* Neu am 2026-08-15. Der Knopf in der Kopfleiste faengt jetzt erst bei
          sm an (Begruendung dort); auf dem Telefon braucht diese Seite den
          Weg genauso wie die sechs, die die Leiste schon hatten. */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" />
      </div>
    </div>
  );
}
