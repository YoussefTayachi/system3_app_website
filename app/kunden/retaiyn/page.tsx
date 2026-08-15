"use client";
import { CTAButton, SectionHeading, SiteHeader, SiteFooter, BOOKING_URL } from "../../_ui";
import { OfferMapMockup, CoachFindingMockup, type OfferMapMockupProps } from "../../_offer-mockups";
import { ChainMockup } from "../../_guard-mockups";
import { CustomerStrip } from "../../_customers";
import { Reveal } from "../../reveal";
import { CheckIcon } from "../../_icons";
import { useT } from "../../language-provider";

/**
 * Die Kundenseite, nach dem Muster der Segmentseiten (/fuer-saas).
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WARUM RETAIYN IM PFAD STEHEN DARF
 * ═══════════════════════════════════════════════════════════════════════
 *
 * VEREINFACHUNG.md nennt als offene Frage O3, ob der Kundenname in der
 * Adresse stehen darf -- ohne schriftliche Freigabe waere die Route
 * /kunden/erster-kunde. Der Betreiber hat die Freigabe von retaiyn fuer
 * Name und Logo am 14.08.2026 bestaetigt, deshalb der Name.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WARUM HIER BILDER WIEDERVERWENDET WERDEN UND AUF /fuer-saas NICHT
 * ═══════════════════════════════════════════════════════════════════════
 *
 * `OfferMapMockup` und `CoachFindingMockup` ziehen ihren gesamten Text aus
 * `t.offerSection.*`, und das ist retaiyns echtes Angebotsprofil (zwoelf
 * Felder aus retaiyn.com). Auf /fuer-saas waere dasselbe Bild ein fremdes
 * Beispiel gewesen und blieb deshalb weg (Begruendung dort im Kopf). Hier
 * ist retaiyn der Fall -- dasselbe Bild ist an dieser Stelle der Beleg.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * DREI ABSCHNITTE OHNE BILD, UND ZWAR MIT ABSICHT
 * ═══════════════════════════════════════════════════════════════════════
 *
 * `who`, `role` und `fit` bekommen keins. Fuenf Abschnitte mit fuenf
 * Bildern waeren eine Galerie, und die drei tragen Aussagen, zu denen es
 * kein Bild gibt (wer retaiyn ist, welche fuenf Antworten keine Website
 * hergibt, fuer wen das sonst noch passt). Ein Mockup dazu waere
 * Dekoration.
 */
export default function CustomerRetaiynPage() {
  const { t } = useT();
  const c = t.customerPage;

  /**
   * Ein Bild in der halben Spalte: die Kette mit ihren vier Stufen neben dem
   * Sequenz-Abschnitt. Sie ist das einzige vorhandene Bild, das die Stufen
   * einer Folge als eine Kette zeigt (Erstmail, Nachfassen, LinkedIn,
   * Anruf) -- und der Abschnittstext spricht von genau dieser Reihenfolge,
   * samt der LinkedIn-Nachricht aus derselben Quelle.
   *
   * ACHTUNG, offene Textfrage: `guardMockups.chain` beschriftet die
   * Nachfass-Wellen mit "Tag 3, 7 und 12", `customerPage.sections[2]` mit
   * Tag drei, fuenf und sieben. Beides steht damit auf dieser Seite
   * nebeneinander. Der Widerspruch ist gemeldet; er gehoert im Woerterbuch
   * aufgeloest, nicht hier durch ein anderes Bild verdeckt.
   */
  const visuals: Record<string, React.ReactNode> = {
    sequence: <ChainMockup />,
  };

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <SiteHeader />

      <section className="hero-wash border-b border-edge/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-sky-700">{c.eyebrow}</p>
          <h1 className="font-display max-w-[22ch] text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-soft sm:text-lg">{c.intro}</p>
          {/* Das Wortzeichen als schmaler Streifen, dasselbe Bauteil wie im
              Hero der Startseite. Ein eigener Logo-Kasten waere hier ein
              zweites Bauteil fuer denselben Zweck -- und die Verlinkung auf
              retaiyn.com steckt bereits darin. */}
          <CustomerStrip className="mt-8" />
          <div className="mt-8">
            <CTAButton href={BOOKING_URL} label={c.ctaLabel} />
          </div>
        </div>
      </section>

      {c.sections.map((sec, i) => {
        const flipped = i % 2 === 1;
        const visual = visuals[sec.id];
        // Der Angebots-Abschnitt bekommt zwei Bilder, und beide in voller
        // Breite statt in einer halben Spalte: die Angebotskarte legt sich
        // erst ab 52rem Kartenbreite ueber Kreuz (sonst ist sie eine
        // Spalte), und der Coach-Befund ist der staerkste Einzelbeleg
        // dieser Seite -- in einer halben Spalte waere er ein Kaertchen.
        // Dieselbe Begruendung wie auf der Startseite in #angebot.
        const wide = sec.id === "offer";
        return (
          <section
            key={sec.id}
            id={sec.id}
            className={"scroll-mt-20 border-b border-edge/60 " + (flipped ? "bg-panel2" : "")}
          >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
              <div className={visual ? "grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14" : ""}>
                <div
                  className={
                    visual ? "lg:col-span-2 " + (flipped ? "lg:order-2" : "") : "max-w-3xl"
                  }
                >
                  <SectionHeading eyebrow={sec.eyebrow} title={sec.title} />
                  <p className="-mt-4 text-sm leading-relaxed text-soft sm:text-base">{sec.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-soft">
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

              {wide && (
                <>
                  {/* Die Zusicherung ist noetig, nicht kosmetisch: `corners`
                      ist im Bauteil ein 4-Tupel und `nodes` ein 3-Tupel,
                      `type Dictionary = typeof de` leitet aus den Literalen
                      in dict.ts aber gewoehnliche Arrays ab. Ohne das `as`
                      bricht `npx tsc --noEmit` mit TS2322 ab -- ausfuehrlich
                      begruendet an derselben Stelle in app/page.tsx. */}
                  <Reveal className="mt-12">
                    <OfferMapMockup {...(t.offerSection.offerMap as OfferMapMockupProps)} />
                  </Reveal>
                  {/* coachFinding besteht nur aus Zeichenketten -- hier
                      braucht es keine Zusicherung. */}
                  <Reveal className="mt-10">
                    <CoachFindingMockup {...t.offerSection.coachFinding} />
                  </Reveal>
                </>
              )}
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink text-balance sm:text-3xl">
          {c.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-soft sm:text-base">{c.ctaBody}</p>
        <CTAButton className="mt-9" href={BOOKING_URL} label={c.ctaLabel} />
      </section>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" href={BOOKING_URL} label={c.ctaLabel} />
      </div>
    </div>
  );
}
