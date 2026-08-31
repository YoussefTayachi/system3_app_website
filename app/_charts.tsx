"use client";
import { useState } from "react";
import { channelIcons } from "./_icons";

/**
 * ══════════════════════════════════════════════════════════════════════
 * DIE BILDER MIT ZAHLEN, neu am 2026-08-31.
 * ══════════════════════════════════════════════════════════════════════
 *
 * Anlass sind zwei Punkte aus der dritten Rueckmeldungsrunde des Mentors am
 * CTS-Fall (Website_Business/Lehren/cts-cement/mentor.md):
 *
 *   "Make the chart interactble where if you hover you have a tooltip that
 *    shows the metric on the y axis."
 *   "Ein Diagramm in einer Spalte ist ein Diagramm mit unleserlicher
 *    Beschriftung. Volle Breite, Kopf darueber."
 *
 * WELCHE ZAHLEN HIER STEHEN DUERFEN. Nur nachpruefbare aus dem App-Repo,
 * nachgesehen am 2026-08-31:
 *
 *   PLAYBOOK_DELAYS  = [0, 3, 2, 2]        apps/web/lib/copy/playbook.ts L54
 *   STEP_MAX_WORDS   = [90, 70, 50, 35]    apps/web/lib/copy/playbook.ts L66
 *   zwoelf Pruefungen, vier davon Blocker  apps/web/lib/campaign-readiness.ts
 *
 * Die Pruefungen standen auf dieser Website bis heute mit ELF da. Das war
 * beim Schreiben richtig und ist es seit `websiteFindingMissing` nicht mehr;
 * nachgezaehlt wurden die zwoelf `checks.push`-Aufrufe und die vier Zweige,
 * die "blocker" zurueckgeben (leads, spf, dkim, bounce).
 *
 * KEIN SVG MIT FESTEM viewBox FUER DIE SCHRIFT. Dieselbe Entscheidung wie in
 * _system-map.tsx: ein skalierendes viewBox skaliert die Beschriftung mit und
 * setzt sie auf 375 px unter 10 px. Die Saeulen sind Elemente mit
 * Prozenthoehe; im ganzen Diagramm steht kein Wort in einem SVG.
 */

// ══════════════════════════════════════════════════════════════════════
// DAS SEQUENZDIAGRAMM
// ══════════════════════════════════════════════════════════════════════

export type SequenceStep = {
  id: string;
  day: string;
  label: string;
  /** Wortobergrenze. Fehlt bei LinkedIn und Anruf, und das ist der Punkt:
   *  dort misst die App keine Woerter, weil sie nicht sendet. Eine erfundene
   *  Zahl waere hier bequemer und falsch. */
  words?: number;
  note: string;
};

export type SequenceChartProps = {
  title: string;
  axisLabel: string;
  autoLabel: string;
  manualLabel: string;
  wordUnit: string;
  hint: string;
  steps: readonly SequenceStep[];
};

/** Die hoechste Saeule bestimmt die Skala, nicht eine gesetzte Konstante:
 *  wer STEP_MAX_WORDS im App-Repo aendert, soll hier nichts nachziehen.
 *
 *  Bodensatz 18 %: eine Saeule, die kuerzer ist als ihre eigene Zahl, kann
 *  die Zahl nicht mehr tragen. Bei 35 von 90 sind es 39 % -- der Bodensatz
 *  greift heute nicht und faengt nur einen kuenftigen Wert ab. */
function anteil(words: number, max: number) {
  return Math.max(18, Math.round((words / max) * 100));
}

export function SequenceChart(props: SequenceChartProps) {
  const { title, axisLabel, autoLabel, manualLabel, wordUnit, hint, steps } = props;
  // Die erste Stufe steht beim Laden im Ablesefeld. Ein leeres Feld waere auf
  // dem Telefon ein 68 px hohes Nichts, und wer nichts zeigt, verraet nie,
  // dass es etwas zu zeigen gibt.
  const [aktiv, setAktiv] = useState(0);
  const max = Math.max(...steps.map((s) => s.words ?? 0));
  const gewaehlt = steps[aktiv];
  const mitWorten = steps.filter((s) => s.words != null).length;

  return (
    <figure className="m-0">
      {/* Kopf ueber dem Diagramm, nicht daneben: das Diagramm bekommt die
          volle Breite des Rahmens. */}
      <figcaption className="flex flex-col gap-2 border-b border-edge/70 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="max-w-[26ch] text-lg font-semibold leading-snug text-ink sm:text-xl">{title}</h3>
        <p className="shrink-0 text-[15px] text-mute">{axisLabel}</p>
      </figcaption>

      {/* ═══════════════════════════════════════════════════════════════
          DAS ABLESEFELD STEHT FEST, NICHT SCHWEBEND.

          Erster Versuch war die Fassung aus der Mentor-Rueckmeldung: ab sm
          schwebend ueber der angewaehlten Spalte, darunter als Leiste. Im
          Browser nachgesehen (1440 px): der Kasten legte sich ueber die
          Ueberschrift des Diagramms und schnitt sie mitten im Wort ab --
          "Vier Mails, jede kuerzer als die" statt "... als die davor". Der
          Grund ist der Kasten selbst: seine Hoehe haengt an der Laenge der
          Notiz, und die ist je Stufe verschieden. Ein schwebendes Element,
          dessen Hoehe der Inhalt bestimmt, braucht ueber sich einen
          Freiraum, den niemand kennt.

          Statt den Abstand zu raten, steht das Feld jetzt fest zwischen Kopf
          und Diagramm -- eine Bauform fuer alle Breiten, mit fester
          Mindesthoehe, damit der Wechsel nichts verschiebt. Es beantwortet
          dieselbe Frage ("was steht auf der senkrechten Achse") und kann
          nichts mehr verdecken.
          ═══════════════════════════════════════════════════════════ */}
      <div className="mt-5 flex min-h-[76px] flex-col justify-center rounded-xl border border-edge/70 bg-panel px-4 py-3 shadow-card sm:mt-6 sm:min-h-[64px] sm:flex-row sm:items-center sm:justify-start sm:gap-4 sm:py-3.5">
        <p className="shrink-0 text-[13px] font-medium uppercase tracking-[0.1em] text-sky-700">
          {gewaehlt.label}
          {gewaehlt.words != null && (
            <span className="text-mute">
              {" · "}
              {gewaehlt.words} {wordUnit}
            </span>
          )}
        </p>
        <p className="mt-1.5 text-[15px] leading-snug text-soft sm:mt-0">{gewaehlt.note}</p>
      </div>

      <div className="mt-8">
        {/* Die Trennung automatisch/von Hand ist eine Aussage, keine Zierde:
            links misst die App Woerter, rechts sendet sie nicht. */}
        <div className="mb-3 grid grid-cols-6 gap-1.5 sm:gap-3">
          <p className="col-span-4 text-xs font-medium uppercase tracking-[0.12em] text-sky-700">{autoLabel}</p>
          <p className="col-span-2 text-xs font-medium uppercase tracking-[0.12em] text-mute">{manualLabel}</p>
        </div>

        <div className="grid h-[188px] grid-cols-6 items-end gap-1.5 sm:h-[240px] sm:gap-3">
          {steps.map((s, i) => {
            const ist = i === aktiv;
            const hatWort = s.words != null;
            return (
              <button
                key={s.id}
                type="button"
                onMouseEnter={() => setAktiv(i)}
                onFocus={() => setAktiv(i)}
                onClick={() => setAktiv(i)}
                aria-pressed={ist}
                // Die ganze Spalte ist die Trefferflaeche, nicht die Saeule:
                // bei 375 px ist die letzte Saeule 46 px breit und 66 px hoch,
                // die Spalte darueber leer. Wer daneben tippt, soll nicht ins
                // Nichts tippen.
                className="group flex h-full flex-col justify-end rounded-t-lg outline-none"
              >
                <span
                  className={
                    "mb-1.5 block text-center text-[13px] font-semibold tabular-nums transition-colors sm:text-sm " +
                    (hatWort ? (ist ? "text-ink" : "text-soft") : "text-transparent")
                  }
                >
                  {hatWort ? s.words : "0"}
                </span>
                {hatWort ? (
                  <span
                    style={{ height: anteil(s.words as number, max) + "%" }}
                    className={
                      "block w-full rounded-t-[6px] transition-[background-color,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 " +
                      (ist ? "bg-sky-600" : "bg-sky-600/35")
                    }
                  />
                ) : (
                  // Kein Balken, sondern das Kanalzeichen auf einer
                  // gestrichelten Flaeche. Ein Balken ohne Wert waere eine
                  // erfundene Hoehe, eine leere Spalte ein Loch.
                  <span
                    className={
                      "flex w-full items-center justify-center rounded-t-[6px] border border-b-0 border-dashed pb-4 pt-5 transition-colors " +
                      (ist ? "border-edge3 bg-panel2 text-ink" : "border-edge2 bg-panel2/50 text-faint")
                    }
                  >
                    {channelIcons[s.id]}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Die Grundlinie traegt die Zeitachse. Eigenes Element statt
            border-bottom am Raster: die gestrichelten Felder darueber haben
            schon eine Kante, und zwei Linien uebereinander sehen aus wie ein
            Versehen. */}
        <div className="h-px w-full bg-edge2" />
        <div className="mt-2.5 grid grid-cols-6 gap-1.5 sm:gap-3">
          {steps.map((s, i) => (
            <span
              key={s.id}
              className={
                "text-center text-xs transition-colors sm:text-[13px] " +
                (i === aktiv ? "font-medium text-ink" : "text-mute")
              }
            >
              {s.day}
            </span>
          ))}
        </div>

      </div>

      <p className="mt-5 text-[13px] text-mute">{hint.replace("{n}", String(mitWorten))}</p>
    </figure>
  );
}

// ══════════════════════════════════════════════════════════════════════
// DIE STARTPRUEFUNG
// ══════════════════════════════════════════════════════════════════════

export type ReadinessProps = {
  blockerLabel: string;
  warnLabel: string;
  items: readonly { id: string; label: string; blocker?: boolean }[];
};

/** Zwoelf Pruefungen als Bild statt als Liste. Vier davon halten den Start
 *  auf, und genau das ist die Aussage des Abschnitts -- sie muss sichtbar
 *  sein, ohne dass ein Satz gelesen wird. */
export function ReadinessGrid({ blockerLabel, warnLabel, items }: ReadinessProps) {
  const blocker = items.filter((i) => i.blocker).length;
  return (
    <div>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((it) => (
          <li
            key={it.id}
            className={
              "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[15px] leading-snug " +
              (it.blocker
                ? "border border-coral/40 bg-coral-soft font-medium text-ink"
                : "border border-edge/70 bg-panel text-soft")
            }
          >
            {it.blocker ? (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[18px] w-[18px] shrink-0 text-coral">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8.2 8.2 15.8 15.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[18px] w-[18px] shrink-0 text-edge3">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            )}
            {it.label}
          </li>
        ))}
      </ul>
      <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-mute">
        <span className="flex items-center gap-2">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-coral" />
          {blockerLabel.replace("{n}", String(blocker))}
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full border border-edge3" />
          {warnLabel.replace("{n}", String(items.length - blocker))}
        </span>
      </p>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// DAS KENNZAHLENBAND
// ══════════════════════════════════════════════════════════════════════

export type FactStripProps = {
  items: readonly { id: string; value: string; label: string }[];
  icons: Record<string, React.ReactNode>;
  className?: string;
};

/** Sechs Kennzahlen mit Piktogramm, direkt unter dem Helden.
 *
 *  BEWUSST KEINE KARTEN. Sechs Kaesten in einer Reihe waeren die dritte
 *  Kartenreihe der Seite und schnitten das Band von dem Helden ab, zu dem es
 *  gehoert. Getrennt wird ueber Haarlinien im Raster: die Zahl steht auf dem
 *  Grund des Helden, nicht auf einer eigenen Flaeche.
 *
 *  JEDE ZAHL IST MECHANIK, KEIN ERGEBNIS. Keine Terminquote, keine
 *  Zeitersparnis, kein Prozentwert -- die gaebe es nur erfunden. Was hier
 *  steht, laesst sich im App-Repo nachzaehlen. */
export function FactStrip({ items, icons, className = "" }: FactStripProps) {
  return (
    <dl className={"grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4 " + className}>
      {items.map((f) => (
        <div key={f.id} className="lg:border-l lg:border-edge2 lg:pl-4 lg:first:border-l-0 lg:first:pl-0">
          <span className="block text-sky-600">{icons[f.id]}</span>
          <dd className="mt-3 font-display text-[2rem] font-medium leading-none tracking-[-0.03em] text-ink">
            {f.value}
          </dd>
          <dt className="mt-2 text-[15px] leading-snug text-soft">{f.label}</dt>
        </div>
      ))}
    </dl>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ZWOELF FELDER, ACHT MAILS
// ══════════════════════════════════════════════════════════════════════

export type OfferFlowProps = {
  fieldsValue: string;
  fieldsLabel: string;
  fromSite: string;
  fromYou: string;
  hub: string;
  outValue: string;
  outLabel: string;
  outNote: string;
};

/**
 * Der Angebot-Abschnitt trug bis zum 2026-08-31 `OfferMapMockup`, die
 * Nachbildung des Angebotsbildschirms: vier Ecken, zwoelf Feldfragen, eine
 * Tafel fuer den Listen-Zuschnitt, ein Befundpfeil. Gemessen 268 sichtbare
 * Woerter -- fast ein Drittel der ganzen Startseite in EINEM Bild, und der
 * Abschnitt war damit teurer als jeder Textabschnitt, den er ersetzen sollte.
 *
 * Das Bild ist nicht schlecht, es ist am falschen Ort. Es zeigt einen
 * BILDSCHIRM, und ein Bildschirm beantwortet "wie bedient man das". Die
 * Startseite beantwortet "was passiert da", und das sind drei Zahlen:
 * zwoelf Felder hinein, eine Pruefung, acht Mails hinaus.
 *
 * `OfferMapMockup` steht unveraendert auf /funktionen#write, wo die Tiefe
 * hingehoert und das Wortbudget dafuer da ist.
 *
 * ALLE DREI ZAHLEN SIND NACHZAEHLBAR, Stand 2026-08-31:
 *   12  OFFER_TEXT_FIELDS          apps/web/lib/offers.ts L36
 *    7  davon SUGGESTED_FIELDS     offer-from-website.ts, 12 minus die
 *                                  fuenf in NICHT_VORSCHLAGEN
 *    8  4 Stufen mal 2 Fassungen   PLAYBOOK_DELAYS hat vier Eintraege
 */
export function OfferFlow(p: OfferFlowProps) {
  // Sieben von zwoelf: die Reihenfolge ist die von OFFER_TEXT_FIELDS, die
  // fuenf nicht vorgeschlagenen sind tone, preview_asset, review_time,
  // friction_reason und cta -- verteilt, nicht am Ende gesammelt, weil sie
  // im Formular auch verteilt stehen.
  const AUS_WEBSITE = [true, true, true, false, true, true, true, true, false, false, false, false];

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
      {/* ZWOELF FELDER */}
      <div className="rounded-2xl border border-edge/60 bg-panel p-6 sm:p-7">
        <div className="grid grid-cols-4 gap-2" aria-hidden>
          {AUS_WEBSITE.map((vorbelegt, i) => (
            <span
              key={i}
              className={
                "h-9 rounded-md border sm:h-10 " +
                (vorbelegt ? "border-sky-500/30 bg-sky-500/15" : "border-dashed border-edge2 bg-panel2/60")
              }
            />
          ))}
        </div>
        <p className="mt-6 font-display text-[2rem] font-medium leading-none tracking-[-0.03em] text-ink">
          {p.fieldsValue}
        </p>
        <p className="mt-2 text-[17px] leading-snug text-soft">{p.fieldsLabel}</p>
        <p className="mt-4 flex flex-col gap-1.5 text-[15px] text-mute">
          <span className="flex items-center gap-2.5">
            <span aria-hidden className="h-3 w-3 shrink-0 rounded-sm border border-sky-500/30 bg-sky-500/15" />
            {p.fromSite}
          </span>
          <span className="flex items-center gap-2.5">
            <span aria-hidden className="h-3 w-3 shrink-0 rounded-sm border border-dashed border-edge2" />
            {p.fromYou}
          </span>
        </p>
      </div>

      {/* DIE PRUEFUNG DAZWISCHEN.
          Der Pfeil dreht sich mit dem Umbruch: ab lg waagerecht, darunter
          senkrecht -- dieselbe Regel wie in _system-map.tsx, und aus
          demselben Grund. Zwei gezeichnete Pfeile statt eines gedrehten: eine
          Rotation drehte die Strichstaerke mit und franst auf schmalen
          Geraeten aus.

          UND DIE ACHSE DES KASTENS DREHT MIT. Erste Fassung stand auf
          `lg:flex-col` und damit genau falsch herum: ab lg standen die zwei
          waagerechten Pfeile UEBEREINANDER, also zwei Pfeile, die nach rechts
          zeigen und dabei nach unten gestapelt sind. Im Browser
          nachgesehen. */}
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <svg viewBox="0 0 16 34" className="h-8 w-4 shrink-0 text-faint lg:hidden" fill="none" aria-hidden>
          <path d="M8 0v26" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2.5 21 8 28l5.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg viewBox="0 0 34 16" className="hidden h-4 w-8 shrink-0 text-faint lg:block" fill="none" aria-hidden>
          <path d="M0 8h26" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 2.5 28 8l-7 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="whitespace-nowrap rounded-full border border-coral/40 bg-coral-soft px-4 py-2 text-[15px] font-medium text-ink">
          {p.hub}
        </span>
        <svg viewBox="0 0 16 34" className="h-8 w-4 shrink-0 text-faint lg:hidden" fill="none" aria-hidden>
          <path d="M8 0v26" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2.5 21 8 28l5.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg viewBox="0 0 34 16" className="hidden h-4 w-8 shrink-0 text-faint lg:block" fill="none" aria-hidden>
          <path d="M0 8h26" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 2.5 28 8l-7 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* ACHT MAILS. Vier Spalten mal zwei Zeilen, damit "vier Stufen, je
          zwei Fassungen" als Form dasteht und nicht nur als Bildunterschrift.
          Die Zeilen sind angedeutete Textzeilen, keine leeren Kaesten: ein
          leerer Kasten ist ein Platzhalter, drei Striche sind eine Mail. */}
      <div className="rounded-2xl border border-edge/60 bg-panel p-6 sm:p-7">
        <div className="grid grid-cols-4 gap-2" aria-hidden>
          {Array.from({ length: 8 }, (_, i) => (
            <span
              key={i}
              className="flex h-9 flex-col justify-center gap-1 rounded-md border border-edge2 bg-panel2/60 px-1.5 sm:h-10"
            >
              <span className="h-[3px] w-full rounded-full bg-edge3/60" />
              <span className="h-[3px] w-3/4 rounded-full bg-edge3/45" />
              <span className="h-[3px] w-1/2 rounded-full bg-edge3/30" />
            </span>
          ))}
        </div>
        <p className="mt-6 font-display text-[2rem] font-medium leading-none tracking-[-0.03em] text-ink">
          {p.outValue}
        </p>
        <p className="mt-2 text-[17px] leading-snug text-soft">{p.outLabel}</p>
        <p className="mt-4 text-[15px] text-mute">{p.outNote}</p>
      </div>
    </div>
  );
}
