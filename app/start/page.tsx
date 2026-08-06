"use client";
import Link from "next/link";
import { Logo, CTAGroup, FactBox } from "../_ui";
import { AgencyMockup } from "../_mockups";
import { useT } from "../language-provider";

/**
 * Schlanke, navigationsfreie Landingpage speziell fuer Klicks aus der eigenen
 * Kaltakquise (E-Mail/Anruf). Bewusst kein Nav, keine Vergleichstabelle,
 * keine FAQ: wer hierher klickt, hat den Haken aus der Mail schon im Kopf
 * und soll in Sekunden bestaetigt sehen, dass das hier genau das ist
 * ("Message Match"). Die volle Seite mit allen Belegen bleibt unter / fuer
 * alle anderen Besucher (organisch, weitergeleitet, etc.).
 */
export default function StartPage() {
  const { t } = useT();
  const s = t.startPage;
  return (
    <div className="min-h-screen">
      <header className="border-b border-edge/60">
        <div className="mx-auto flex max-w-3xl items-center justify-center px-4 py-6 sm:px-6">
          <Logo />
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <h1 className="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
          {s.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-soft">{s.body}</p>
        <div className="mt-7 flex flex-col items-center gap-3">
          <CTAGroup />
          <span className="text-xs text-mute">{s.ctaNote}</span>
        </div>

        {/* Bis zum 2026-08-06 standen hier dieselben drei Kennzahlen wie auf
            der Startseite (4 Suchwege / 3 Kanaele / 1 Login). Die sind dort
            durch drei Versprechen ersetzt worden, weil niemand Mechanik kauft
            -- und auf dieser Seite gilt das erst recht: wer hier landet, ist
            schon einen Klick weiter und will wissen, was er davon hat. */}
        <div className="mt-10 grid gap-6 text-left sm:grid-cols-3">
          {t.heroPromises.map((p) => (
            <div key={p.title}>
              <p className="font-display text-base font-semibold leading-snug tracking-[-0.015em] text-ink">
                {p.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="text-center text-lg font-semibold tracking-tight text-ink">{s.workspaceHeading}</h2>
          <div className="mt-6">
            <AgencyMockup />
          </div>
          <FactBox fact={s.factCard.fact} sub={s.factCard.sub} source={s.factCard.source} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{s.finalHeading}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-soft">{s.finalBody}</p>
        <CTAGroup className="mt-6" />
        <p className="mt-6 text-xs text-mute">
          <Link href="/" className="underline hover:text-ink">{s.backLink}</Link>
        </p>
      </section>

      <footer className="border-t border-edge/60">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center text-xs text-mute sm:px-6">
          © {new Date().getFullYear()} Frostbreaker · {t.footer.location}
        </div>
      </footer>
    </div>
  );
}
