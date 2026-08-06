"use client";
import { useT } from "./language-provider";

/**
 * Die All-in-one-Vergleichstabelle. Ersetzt seit dem 2026-08-06 den Abschnitt
 * #ergaenzt an derselben Stelle.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WARUM UMGEDREHT UND NICHT GESTRICHEN
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Hier stand: "Ihr nutzt Apollo, Hunter oder Instantly bereits? Dann ist das
 * hier KEIN ERSATZ." Gemeint war eine Einwandbehandlung, gewirkt hat eine
 * Selbsteinordnung: wir sind Zubehoer zu dem, was ihr schon habt. Zubehoer
 * ist das Erste, was bei einer Budgetkuerzung gestrichen wird -- und der
 * Satz stand an Position 5, vor jedem einzigen Wort ueber das Produkt.
 *
 * Der Platz ist zu gut zum Streichen. Der Einwand ist real und wird weiter
 * beantwortet, aber in der Gegenrichtung: nicht "wir sind nur eine
 * Ergaenzung", sondern "vier Abos machten das gestern, eines macht es heute".
 * Muster "Comparison Table Focus" (ui-ux-pro-max) -- eigene Spalte
 * hervorgehoben, Wettbewerber neutral, sachlich.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * DREI REGELN, DAMIT DIE TABELLE KEINE ANGRIFFSFLAECHE WIRD
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 1. KEIN "✗" BEI WETTBEWERBERN, nur "—" (nicht vorhanden) und "teilw.".
 *    Ein Kreuz behauptet ein Versagen; ein Strich stellt fest, dass etwas
 *    nicht zum Leistungsumfang gehoert. Nur der zweite Satz ist belegbar.
 * 2. KEIN PREISVERGLEICH in der Tabelle. Tarife aendern sich, die Tabelle
 *    nicht -- eine Preiszeile hier waere in drei Monaten falsch.
 * 3. JEDE ZEILE TRAEGT IHREN BELEG im dict-Kommentar. Wer sie spaeter
 *    nachprueft, soll nicht zehn Haekchen neu recherchieren muessen.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * BARRIEREFREIHEIT
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Der Zustand steht NIE allein in der Farbe (Regel aus ui-ux-pro-max,
 * Kategorie "Charts & Data"): jede Zelle traegt ein eigenes Symbol UND einen
 * ausgeschriebenen Text fuer Screenreader. Ein Farbenblinder und ein
 * Screenreader lesen dasselbe wie das Auge.
 *
 * Unter md kippt die Tabelle auf Karten je Zeile statt auf Querscrollen:
 * eine Tabelle mit sechs Spalten auf 375px ist in beiden Formen unbrauchbar,
 * aber die Kartenform sagt zusaetzlich das Wichtigste zuerst -- naemlich ob
 * es diese Funktion sonst ueberhaupt irgendwo gibt.
 */

/** `boolean | string` statt `boolean | "partial"`: dict.ts traegt kein
 *  `as const`, TypeScript verbreitert "partial" dort zu `string`. Die
 *  Verengung passiert deshalb hier beim Vergleich -- und der Vergleich auf
 *  `true` ist bewusst strikt, damit ein versehentlich anderer String nicht
 *  als Haekchen durchrutscht. */
type Support = boolean | string;
type Row = { id: string; label: string; tools: Support[] };

/** Zellinhalt der Tabelle. aria-hidden am Symbol, sr-only am Text -- sonst
 *  liest ein Screenreader entweder nichts oder das Symbol doppelt. */
function Cell({ state, labels }: { state: Support; labels: { yes: string; no: string; partial: string } }) {
  if (state === "partial") {
    return (
      <>
        <span aria-hidden className="text-[11px] font-medium text-mute">
          {labels.partial}
        </span>
        <span className="sr-only">{labels.partial}</span>
      </>
    );
  }
  if (state === true) {
    return (
      <>
        <svg aria-hidden viewBox="0 0 16 16" className="mx-auto h-4 w-4 text-ink" fill="none">
          <path d="m3 8.5 3.2 3.2L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="sr-only">{labels.yes}</span>
      </>
    );
  }
  return (
    <>
      <span aria-hidden className="text-edge3">
        —
      </span>
      <span className="sr-only">{labels.no}</span>
    </>
  );
}

export function AllInOneCompare() {
  const c = useT().t.compare;
  const labels = { yes: c.yes, no: c.no, partial: c.partial };

  return (
    <div>
      {/* ───────── Tabelle, ab md ───────── */}
      <div className="hidden md:block">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">{c.title}</caption>
          <thead>
            <tr>
              <th scope="col" className="w-[34%] pb-3 text-left text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                {c.featureHeader}
              </th>
              {c.tools.map((tool) => (
                <th
                  key={tool}
                  scope="col"
                  className="pb-3 text-center text-[13px] font-medium text-mute"
                >
                  {tool}
                </th>
              ))}
              {/* Die eigene Spalte traegt die Hervorhebung durchgehend bis zur
                  letzten Zeile, damit das Auge sie als Einheit liest statt als
                  sechs einzeln eingefaerbte Zellen. */}
              <th
                scope="col"
                className="rounded-t-xl border-x border-t border-sky-300/70 bg-sky-50/60 px-3 pb-3 pt-3 text-center text-[13px] font-semibold text-sky-950"
              >
                {c.usLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row: Row, i) => (
              <tr key={row.id} className={i % 2 === 1 ? "bg-panel2/60" : undefined}>
                <th scope="row" className="py-2.5 pr-4 text-left text-[13px] font-normal leading-snug text-soft">
                  {row.label}
                </th>
                {row.tools.map((state, j) => (
                  <td key={c.tools[j]} className="px-2 py-2.5 text-center align-middle">
                    <Cell state={state} labels={labels} />
                  </td>
                ))}
                <td
                  className={
                    "border-x border-sky-300/70 bg-sky-50/60 px-2 py-2.5 text-center align-middle " +
                    (i === c.rows.length - 1 ? "rounded-b-xl border-b" : "")
                  }
                >
                  <Cell state={true} labels={labels} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ───────── Karten, unter md ─────────
          Sagt das Wichtigste zuerst: gibt es diese Funktion sonst irgendwo?
          Genau diese Aussage geht in einer querscrollenden Tabelle verloren. */}
      <ul className="space-y-2.5 md:hidden">
        {c.rows.map((row: Row) => {
          const others = row.tools
            .map((state, j) => (state ? c.tools[j] + (state === "partial" ? ` (${c.partial})` : "") : null))
            .filter(Boolean) as string[];
          return (
            <li key={row.id} className="rounded-xl border border-edge/60 bg-panel p-4">
              <p className="text-[14px] font-medium leading-snug text-ink">{row.label}</p>
              <p className="mt-2 text-[13px] leading-snug text-soft">
                {others.length === 0 ? (
                  <span className="font-medium text-sky-800">{c.onlyUs}</span>
                ) : (
                  <>
                    {c.alsoIn} {others.join(", ")}
                  </>
                )}
              </p>
            </li>
          );
        })}
      </ul>

      {/* ═══════════════════════════════════════════════════════════════
          DIE EHRLICHE RECHNUNG. Neu am 2026-08-06.

          Vorher behauptete die Ueberschrift dieses Abschnitts, aus vier Abos
          wuerde eines. Das stimmte nicht: BYOK heisst, dass Apollo, Instantly,
          Hunter und OpenAI bleiben -- aus vier werden fuenf. Ein
          Agenturinhaber rechnet das in zwanzig Sekunden nach, und auf einer
          Seite mit dem Abschnitt "Was wir dir nicht vormachen" kostet so ein
          Widerspruch mehr, als die Zeile je eingebracht hat.

          Diese zwei Zeilen machen die Rechnung stattdessen selbst auf. Sie
          verkaufen besser als die falsche Zeile, weil sie den Posten nennen,
          der WIRKLICH wegfaellt: das CRM kostet je Sitzplatz, unser Preis
          nicht. Bei sechs Leuten im Team dreht das die Rechnung um.

          Bewusst gruen/grau statt gruen/rot: was bleibt, ist kein Verlust.
          ═══════════════════════════════════════════════════════════════ */}
      <div className="mt-8 rounded-2xl border border-edge2/70 bg-panel2/50 p-5 sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink">{c.ledgerLabel}</p>
        <ul className="mt-3 space-y-2.5">
          <li className="flex gap-3 text-sm leading-relaxed text-soft">
            <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-edge3" />
            {c.ledgerKeep}
          </li>
          <li className="flex gap-3 text-sm leading-relaxed text-soft">
            <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            {c.ledgerDrop}
          </li>
        </ul>
      </div>

      {/* Der Absatz, der den echten Einwand beantwortet. Steht bewusst UNTER
          der Tabelle: erst der Umfang, dann die Antwort auf "dann nehme ich
          die doch gleich selbst". */}
      <p className="mt-6 max-w-[72ch] text-base leading-relaxed text-soft">{c.closing}</p>
      <p className="mt-3 max-w-[72ch] text-xs leading-relaxed text-mute">{c.footnote}</p>
    </div>
  );
}
