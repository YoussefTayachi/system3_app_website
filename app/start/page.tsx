"use client";
import Link from "next/link";
import { Logo, CTAGroup, FactBox, h2Cls, h3Cls, cardTitleCls } from "../_ui";
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

      {/* Die H1 stand hier auf 24/30/36px Space Grotesk und war damit die
          einzige Seitenueberschrift der Website ohne Serife.
          Sie bekommt jetzt die Kapitelstufe (h2Cls, 40/48px) und NICHT die
          Seitenstufe (h1Cls, 36/60/72px) -- zwei Gruende, beide gemessen am
          2026-08-15:
            1. Diese Ueberschrift ist 90 Zeichen lang, fast dreimal so lang
               wie die der Unterseiten. Bei 72px stand sie fuenfzeilig da und
               nahm 360px, also die halbe erste Bildschirmhoehe.
            2. /start ist mit max-w-3xl (768px) die schmalste Seite der
               Website. Dieselbe Schriftgroesse hat hier zwei Drittel des
               Platzes, den sie auf den uebrigen Seiten haette.
          Keine neue Stufe, sondern die naechstkleinere aus derselben Skala:
          die Seite hat keine Kopfleiste und keine zweite Ueberschrift dieser
          Groesse, die Rangfolge bleibt damit eindeutig. */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h1 className={"mx-auto " + h2Cls}>{s.title}</h1>
        <p className="mx-auto mt-6 max-w-[58ch] text-base leading-relaxed text-soft">{s.body}</p>
        <div className="mt-9 flex flex-col items-center gap-3">
          <CTAGroup />
          <span className="text-sm text-mute">{s.ctaNote}</span>
        </div>

        {/* Bis zum 2026-08-06 standen hier dieselben drei Kennzahlen wie auf
            der Startseite (4 Suchwege / 3 Kanaele / 1 Login). Die sind dort
            durch drei Versprechen ersetzt worden, weil niemand Mechanik kauft
            -- und auf dieser Seite gilt das erst recht: wer hier landet, ist
            schon einen Klick weiter und will wissen, was er davon hat. */}
        <div className="mt-14 grid gap-6 border-t border-edge2/70 pt-10 text-left sm:grid-cols-3">
          {t.heroPromises.map((p) => (
            <div key={p.title}>
              <p className={cardTitleCls}>{p.title}</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-edge/60 bg-band">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className={"text-center " + h3Cls}>{s.workspaceHeading}</h2>
          <div className="mt-6">
            <AgencyMockup />
          </div>
          <FactBox fact={s.factCard.fact} sub={s.factCard.sub} source={s.factCard.source} />
        </div>
      </section>

      {/* Der Schluss-CTA bleibt auf h3-Stufe und nicht auf h2: /start hat
          genau eine Aussage, und die steht oben. Zwei gleich grosse
          Ueberschriften auf 2000 Pixeln waeren zwei Anfaenge. */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className={"mx-auto max-w-[24ch] " + h3Cls}>{s.finalHeading}</h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-soft">{s.finalBody}</p>
        <CTAGroup className="mt-8" />
        <p className="mt-8 text-sm text-mute">
          <Link href="/" className="underline hover:text-ink">{s.backLink}</Link>
        </p>
      </section>

      <footer className="border-t border-edge/60">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center text-sm text-mute sm:px-6">
          © {new Date().getFullYear()} Frostbreaker · {t.footer.location}
        </div>
      </footer>
    </div>
  );
}
