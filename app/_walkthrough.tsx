"use client";
import { useT } from "./language-provider";
import { BOOKING_URL } from "./_ui";
import { Reveal } from "./reveal";
import { LeadsTableMockup, AiAgentMockup, CopyCheckMockup, PipelineMockup } from "./_app-mockups";
import { CopyOutcomesMockup, ChainMockup } from "./_guard-mockups";

/**
 * Der Rundgang in sechs Schritten -- das Herzstueck der Startseite
 * (POSITIONIERUNG.md Abschnitt 4).
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WARUM SECHS SCHRITTE UND NICHT VIER
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Der Bogen ist der Dreiklang aus dem Hero: finden (1) -- kontaktieren
 * (2 bis 4) -- gewinnen (5) -- und dann besser werden (6). Vier Schritte
 * wuerden entweder die Qualitaetspruefung (3) oder die Kette (4)
 * verschlucken, und genau die beiden hat sonst niemand.
 *
 * SCHRITT 6 IST DER HOEHEPUNKT, NICHT DER ANHANG. Der Rundgang endet nicht
 * beim Versand, sondern bei der Frage, die kein Wettbewerber beantwortet:
 * welcher Text hat Termine gebracht.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * GESTALTUNGSREGELN (Muster "Funnel / 3-Step Conversion")
 * ═══════════════════════════════════════════════════════════════════════
 *
 * - ABWECHSELND BILD LINKS / BILD RECHTS. Sechs gleich gebaute Bloecke
 *   untereinander lesen sich wie eine Tabelle; der Wechsel haelt das Auge
 *   wach.
 * - DIE SCHRITTNUMMER IST EIN GROSSES ELEMENT, keine kleine Ziffer. Auf
 *   einer langen Seite ist sie die Orientierung, nicht Dekoration.
 * - FORTSCHRITTSSPUR AB lg: eine durchgehende Linie, auf der die Nummern
 *   sitzen. Bewusst OHNE Scroll-Verfolgung: das braeuchte einen zweiten
 *   IntersectionObserver, und die Spur soll auch dann etwas aussagen, wenn
 *   JavaScript spaet oder gar nicht laeuft. Unter lg faellt sie weg, statt
 *   zu schrumpfen.
 * - MINI-CTA JE SCHRITT, Haupt-CTA erst nach Schritt 6.
 * - KEIN AUTO-KARUSSELL. Sechs Schritte, die von allein weiterspringen,
 *   nimmt niemand auf -- und eine gescrollte Liste ist barrierefrei ohnehin
 *   die bessere Wahl.
 *
 * Als <ol> ausgezeichnet, nicht als <div>-Folge: es IST eine Reihenfolge,
 * und ein Screenreader soll "1 von 6" sagen koennen.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WELCHES BILD ZU WELCHEM SCHRITT
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Bewusst sechs Bildschirme, die auf der Startseite sonst NICHT vorkommen.
 * UnifiedSearchMockup waere fuer Schritt 1 naheliegend, steht aber auf
 * /funktionen#find -- LeadsTableMockup zeigt statt der Suchmaske ihr
 * ERGEBNIS, und das ist fuer "Entscheider raus" ohnehin der bessere Beleg.
 *
 * Schritt 4 trug bis zum 2026-08-14 LinkedInMockup. Seit der Abschnitt
 * #kette gefallen ist (VEREINFACHUNG.md 1.2), steht ChainMockup hier: der
 * Schritt beschreibt die ganze Kette (Mail schweigt, LinkedIn kommt, dann
 * der Anruf), nicht nur die LinkedIn-Nachricht, und das Bild soll sagen,
 * was der Text sagt. LinkedInMockup ist dafuer auf /funktionen#send
 * gewandert, wo die Kampagne beschrieben wird.
 */
const MOCKUPS = [
  LeadsTableMockup,
  AiAgentMockup,
  CopyCheckMockup,
  ChainMockup,
  PipelineMockup,
  CopyOutcomesMockup,
];

export function StepWalkthrough() {
  const w = useT().t.walkthrough;

  return (
    <div>
      {/* relative als Bezug fuer die Fortschrittsspur. Die Linie liegt auf der
          Liste statt in jedem Schritt: so bricht sie zwischen den Schritten
          nicht auf und endet sauber am letzten Marker. */}
      <ol className="relative">
        <span
          aria-hidden
          className="absolute left-7 top-8 hidden w-px bg-edge2 lg:block"
          style={{ bottom: "3.5rem" }}
        />

        {w.steps.map((step, i) => {
          const Mockup = MOCKUPS[i];
          const imageRight = i % 2 === 0;
          return (
            <li key={step.title} className="relative pb-16 last:pb-0 lg:pl-24">
              {/* Die Nummer. Ab lg als Marker auf der Spur, darunter als
                  Zeile ueber der Ueberschrift -- ein 64px-Kreis ueber einem
                  Text auf 375px waere nur Platzverbrauch. */}
              <span
                aria-hidden
                className="font-display absolute left-0 top-0 hidden h-14 w-14 items-center justify-center rounded-full border border-edge2 bg-panel text-2xl font-semibold text-ink lg:flex"
              >
                {i + 1}
              </span>

              {/* min-w-0 an beiden Rasterkindern: eine Rasterspalte ist von
                  Haus aus minmax(auto, 1fr), und `auto` heisst hier die
                  MINDESTBREITE des breitesten Kindes. Unter lg liegen Text und
                  Mockup in derselben Spur -- ein Mockup mit 578px Mindestbreite
                  zog die Spur (und damit auch den Text) auf 578px auf, und das
                  Dokument scrollte auf 375px Fenster bis 594px seitlich
                  (Chrome 151, 13.08.2026). Mit min-w-0 darf die Spur schmaler
                  werden als ihr Inhalt; was dann nicht passt, regelt jedes
                  Mockup selbst. */}
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <div className={"min-w-0 " + (imageRight ? "" : "lg:order-2")}>
                  {/* Ohne `font-display` (14px, die Serife traegt erst ab
                      24px) und in `text-mute` statt `text-edge3`: edge3 ist
                      eine Rahmenfarbe. Auf --c-band gerechnet kam sie als
                      Schrift auf rund 2,3:1 -- verlangt sind 4,5:1, und
                      "Schritt 3 / 6" ist Inhalt, keine Zierlinie. */}
                  <p className="mb-2 text-sm font-semibold text-mute lg:hidden">
                    {w.stepLabel} {i + 1} / {w.steps.length}
                  </p>
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[1.75rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[48ch] text-base leading-relaxed text-soft">{step.body}</p>

                  {/* Das hervorgehobene Detail: je Schritt genau EINE Sache,
                      die ein Wettbewerber nicht sagen kann. Ohne sie waere
                      der Rundgang eine Funktionsliste. */}
                  <p className="mt-4 max-w-[48ch] border-l-2 border-coral pl-4 text-sm leading-relaxed text-soft">
                    {step.detail}
                  </p>

                  <a
                    href={BOOKING_URL}
                    className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-soft transition-colors hover:text-ink"
                  >
                    {step.cta}
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>

                <Reveal className={"min-w-0 " + (imageRight ? "" : "lg:order-1")}>
                  <Mockup />
                </Reveal>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
