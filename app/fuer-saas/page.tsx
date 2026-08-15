"use client";
import {
  CTAButton,
  SectionHeading,
  SiteHeader,
  SiteFooter,
  BOOKING_URL,
  h1Cls,
  h2Cls,
  sectionPad,
} from "../_ui";
import { TechFilterMockup } from "../_app-mockups";
import { CopyOutcomesMockup } from "../_guard-mockups";
import { Reveal } from "../reveal";
import { CheckIcon } from "../_icons";
import { useT } from "../language-provider";

/**
 * Die zweite Segmentseite, nach dem Muster von /fuer-agenturen.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WARUM EIGENE SEITE UND KEIN ABSCHNITT AUF DER STARTSEITE
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Die Startseite spricht in ihrer ersten Zeile Agenturen an
 * (`hero.eyebrow`). Ein SaaS-Abschnitt an Position 9 einer Seite, deren
 * erste Zeile jemand anderen meint, verliert den Leser in den ersten
 * Sekunden -- der Befund aus KONVERSION.md 1, nur mit vertauschten Rollen.
 * Ausserdem ist eine Segmentseite ein Ziel fuer Kaltmails und Anzeigen; ein
 * Anker mitten in einer 12.000px-Seite ist es nicht.
 * (Begruendung in voller Laenge: ANGEBOT-VERMARKTUNG.md 3.3.)
 *
 * ═══════════════════════════════════════════════════════════════════════
 * DER HOEHEPUNKT IST ABSCHNITT 3, NICHT ABSCHNITT 1
 * ═══════════════════════════════════════════════════════════════════════
 *
 * `learning` ist das eine Argument, das fuer diese Gruppe STAERKER ist als
 * fuer Agenturen: wer immer dasselbe verkauft, stapelt die Daten zur selben
 * Sequenz, und erst dadurch lohnt sich die Auswertung. Eine Agentur mit
 * wechselnden Nischen faengt jedes Mal von vorn an. Deshalb bekommt dieser
 * Abschnitt das staerkste Bild und nicht der Angebots-Abschnitt.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * KEIN KUNDENBELEG AUF DIESER SEITE
 * ═══════════════════════════════════════════════════════════════════════
 *
 * /fuer-agenturen zeigt CustomerStrip und CustomerSection mit der
 * ausdruecklichen Begruendung, dass der Leser dort selbst eine Agentur ist
 * und den Namen als „jemand wie ich“ liest. Genau diese Begruendung traegt
 * hier nicht: die bisherigen Kunden sind keine SaaS-Anbieter. Ein Beleg,
 * der als „jemand wie ich“ gemeint ist und als „irgendein Kunde“ gelesen
 * wird, ist schwaecher als keiner. Kommt zurueck, sobald ein SaaS-Kunde
 * genannt werden darf.
 */
export default function SaasPage() {
  const { t } = useT();
  const s = t.saasPage;

  /**
   * Zwei der vier Abschnitte haben ein Bild, beide liegen fertig im Repo:
   * `TechFilterMockup` lag bis jetzt ungenutzt in _app-mockups.tsx,
   * `CopyOutcomesMockup` traegt auf /fuer-agenturen denselben Gedanken.
   * Beide holen ihre Texte selbst aus dem Dictionary und brauchen hier
   * nichts weiter als den Aufruf.
   *
   * `offer` bleibt vorerst ohne Bild, obwohl `OfferMapMockup` aus Stufe 2
   * inzwischen existiert: die Komponente ist props-getrieben und bekommt auf
   * der Startseite ihren gesamten Text aus `t.offerSection.offerMap`.
   * `saasPage` hat keine eigenen Mockup-Texte, und dieselbe Angebotskarte
   * ein zweites Mal mit demselben Beispiel (Shopware-Haendler,
   * Anfrageformular) zu zeigen, waere fuer einen SaaS-Anbieter eine
   * Wiederholung mit dem falschen Beispiel. Sobald `saasPage` einen eigenen
   * `offerMap`-Block bekommt, gehoert er hier hinein -- kein Fehler, sondern
   * eine offene Textluecke.
   *
   * `limits` bleibt dauerhaft ohne Bild: eine Abgrenzung, und ein Mockup
   * dazu waere Dekoration. Dasselbe galt fuer `multi`, den vierten
   * Abschnitt -- der ist am 2026-08-14 ganz gefallen (EINHEITLICH.md S3,
   * Begruendung in dict.ts an der Stelle, an der er stand).
   *
   * FLAECHENFOLGE, nach der Streichung nachgesehen: der Ton haengt unten an
   * `i % 2 === 1`, also an der POSITION in der Schleife -- eine Streichung
   * kippt alles dahinter. Hier zum Guten: `limits` liegt jetzt auf panel2
   * statt auf hell und stoesst damit nicht mehr an den hellen Schluss-CTA.
   * Die Naht, die vorher am Seitenende sass, ist weg.
   */
  const visuals: Record<string, React.ReactNode> = {
    icp: <TechFilterMockup />,
    learning: <CopyOutcomesMockup />,
  };

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <SiteHeader />

      <section className="hero-wash border-b border-edge/60">
        {/* Mittiger Hero, Begruendung ausgeschrieben in funktionen/page.tsx. */}
        <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:py-32">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-sky-700">{s.eyebrow}</p>
          <h1 className={"mx-auto max-w-[24ch] " + h1Cls}>{s.title}</h1>
          <p className="mx-auto mt-6 max-w-[58ch] text-base leading-relaxed text-soft sm:text-lg">{s.intro}</p>
          <div className="mt-9">
            <CTAButton href={BOOKING_URL} label={s.ctaLabel} />
          </div>
        </div>
      </section>

      {s.sections.map((sec, i) => {
        const flipped = i % 2 === 1;
        const visual = visuals[sec.id];
        return (
          <section
            key={sec.id}
            id={sec.id}
            className={"scroll-mt-20 border-b border-edge/60 " + (flipped ? "bg-band" : "")}
          >
            <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
              <div className={visual ? "grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14" : ""}>
                <div className={visual ? "lg:col-span-2 " + (flipped ? "lg:order-2" : "") : "max-w-3xl"}>
                  <SectionHeading eyebrow={sec.eyebrow} title={sec.title} lead={sec.body} />
                  <ul className="space-y-2.5">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-soft">
                        <CheckIcon />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                {visual && (
                  <div className={"lg:col-span-3 " + (flipped ? "lg:order-1" : "")}>
                    <Reveal>{visual}</Reveal>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <section className={"mx-auto max-w-3xl px-4 text-center sm:px-6 " + sectionPad}>
        <h2 className={"mx-auto " + h2Cls}>{s.ctaTitle}</h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-soft">{s.ctaBody}</p>
        <CTAButton className="mt-9" href={BOOKING_URL} label={s.ctaLabel} />
      </section>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" href={BOOKING_URL} label={s.ctaLabel} />
      </div>
    </div>
  );
}
