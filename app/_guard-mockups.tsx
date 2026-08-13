"use client";
import { useT } from "./language-provider";

/**
 * Die drei Bildschirme, die Frostbreaker von jedem Versandwerkzeug trennen:
 * der Torwart vor dem Start, die Kette ueber drei Kanaele, und die Ansicht,
 * die eine Zahl weglaesst statt sie zu erfinden.
 *
 * Eigene Datei neben _app-mockups.tsx, weil das dort gewachsene Bildschirme
 * der Lead-Beschaffung sind; hier geht es um das, was NACH dem Suchen
 * passiert. Derselbe Rahmen, dieselben Marken-Tokens, damit die Seite eine
 * Welt bleibt.
 *
 * Wie ueberall hier: nachgebaut, nicht abfotografiert. Im echten Betrieb
 * stehen dort Namen realer Personen mit Rolle und Arbeitgeber, die ohne
 * Einwilligung nicht ins Marketing gehoeren -- erst recht nicht auf einer
 * Seite, die mit Datensparsamkeit wirbt.
 */

function AppFrame({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-edge2/70 bg-panel shadow-xl shadow-ink/[0.07]">
      <div className="flex items-center gap-1.5 border-b border-edge/70 bg-panel2/60 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-edge3/50" />
        <span className="h-2 w-2 rounded-full bg-edge3/35" />
        <span className="h-2 w-2 rounded-full bg-edge3/25" />
        {title && <span className="ml-2 text-[11px] text-mute">{title}</span>}
      </div>
      {children}
    </div>
  );
}

type Severity = "blocker" | "warning" | "ok";

const SEVERITY: Record<Severity, { dot: string; box: string }> = {
  blocker: { dot: "bg-red-500", box: "border-red-500/40 bg-red-500/[0.06]" },
  warning: { dot: "bg-amber-500", box: "border-amber-500/35 bg-amber-500/[0.06]" },
  ok: { dot: "bg-emerald-500", box: "border-edge/60" },
};

/**
 * Der Torwart.
 *
 * Zeigt bewusst BEIDE Stufen: zwei rote Blocker und zwei gelbe Hinweise. Nur
 * rot zu zeigen wuerde die Sache als Schikane lesbar machen; der ganze Punkt
 * ist, dass die App zwischen "geht schief" und "waere besser" unterscheidet.
 */
export function GateMockup() {
  const { t } = useT();
  const m = t.guardMockups.gate;

  return (
    <AppFrame title={m.frameTitle}>
      <div className="space-y-2 p-4 sm:p-5">
        {m.checks.map((c) => {
          const style = SEVERITY[c.severity as Severity];
          return (
            <div key={c.title} className={"flex gap-2.5 rounded-xl border px-3.5 py-3 " + style.box}>
              <span className={"mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full " + style.dot} />
              <div className="min-w-0">
                <p className="text-[13px] font-medium leading-snug text-ink">{c.title}</p>
                {c.body && <p className="mt-0.5 text-[11px] leading-relaxed text-faint">{c.body}</p>}
              </div>
            </div>
          );
        })}

        {/* Kein dark:-Gegenstueck. Diese Website ist hell und nur hell --
            globals.css setzt color-scheme: light und es gibt keine dunklen
            Tokens. Die dark:-Variante feuert in Tailwind v4 aber trotzdem, sie
            haengt an prefers-color-scheme. Wer sein System auf dunkel stellt,
            bekam dadurch helle Schrift auf der weiterhin weissen Flaeche:
            text-red-400 auf dem Panel gemessen 2,6:1, text-sky-400 sogar 2,0:1
            (13.08.2026). Verlangt sind 4,5:1. */}
        <div className="rounded-xl border border-red-500/40 bg-red-500/[0.08] px-3.5 py-2.5 text-[12px] font-semibold text-red-600">
          {m.blocked}
        </div>

        {/* Abgeschalteter Knopf statt eines fehlenden: der Besucher soll
            sehen, dass der Start existiert und gerade nicht geht. */}
        <div className="pt-1">
          <span className="inline-block cursor-not-allowed rounded-lg bg-edge2/70 px-4 py-2 text-[12px] font-semibold text-mute">
            {m.button}
          </span>
        </div>
      </div>
    </AppFrame>
  );
}

/**
 * Die Kette ueber drei Kanaele.
 *
 * Die senkrechte Linie traegt die Aussage: es ist EIN Vorgang, nicht drei
 * Listen. Deshalb liegt sie hinter den Knoten und nicht zwischen den Karten.
 */
export function ChainMockup() {
  const { t } = useT();
  const m = t.guardMockups.chain;

  return (
    <AppFrame title={m.frameTitle}>
      <div className="p-5 sm:p-6">
        <ol className="relative m-0 list-none p-0">
          <span
            aria-hidden
            className="absolute left-[15px] top-3 bottom-3 w-px bg-edge2"
          />
          {m.steps.map((s, i) => (
            <li key={s.title} className={"relative pl-11 " + (i < m.steps.length - 1 ? "pb-6" : "")}>
              <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border-2 border-sky-500/70 bg-panel text-[11px] font-bold text-sky-600">
                {i + 1}
              </span>
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-sky-600">{s.day}</p>
              <p className="mt-0.5 text-[14px] font-semibold text-ink">{s.title}</p>
              <p className="mt-1 text-[12px] leading-relaxed text-soft">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 border-t border-edge/60 pt-4 text-[11px] leading-relaxed text-mute">{m.note}</p>
      </div>
    </AppFrame>
  );
}

/**
 * Die Wirkungs-Ansicht.
 *
 * Der Kern sind die zwei unteren Zeilen: Balken leer, statt "zu wenig" eine
 * Zahl zu erfinden. Wer das Bild ueberfliegt, sieht zuerst die Luecke, und
 * genau die ist das Verkaufsargument.
 */
export function EffectMockup() {
  const { t } = useT();
  const m = t.guardMockups.effect;

  return (
    <AppFrame title={m.frameTitle}>
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-baseline gap-x-7 gap-y-2 border-b border-edge/60 pb-4">
          {m.stats.map((s) => (
            <div key={s.label}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-mute">{s.label}</p>
              <p className={"tabular-nums " + (s.strong ? "text-xl font-semibold text-ink" : "text-xl text-soft")}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {m.rows.map((r) => (
            <div key={r.label} className="flex items-center gap-3">
              <span className="w-[104px] shrink-0 truncate text-[12px] text-ink sm:w-[132px]">{r.label}</span>
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-chip">
                {r.percent !== null && (
                  <span
                    className="block h-full rounded-full bg-sky-500"
                    style={{ width: Math.min(100, r.percent * 5) + "%" }}
                  />
                )}
              </span>
              <span
                className={
                  "w-[92px] shrink-0 text-right text-[11px] tabular-nums " +
                  (r.percent === null ? "text-mute" : "text-soft")
                }
              >
                {r.value}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-mute">{m.note}</p>
      </div>
    </AppFrame>
  );
}

/**
 * Die Ansicht "Nach Text" -- das Bild, das es bis zum 2026-08-06 nirgends auf
 * der Website gab, obwohl es die einzige Funktion zeigt, die kein
 * Wettbewerber hat.
 *
 * Instantly sieht die Antwort, hat den Text aber nicht geschrieben. Apollo
 * schreibt weder Text noch sieht es die Antwort. Frostbreaker hat beide
 * Haelften -- es erzeugt den Aufhaenger UND sieht, was zurueckkommt. Seit
 * Migration 0076 ist die Zuordnung Antwort -> Schritt -> Textfassung gebaut.
 *
 * â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
 * DREI DINGE, DIE DAS BILD ABSICHTLICH ZEIGT
 * â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
 *
 * 1. DIE AUSZEICHNUNG HAENGT AN TERMINEN, NICHT AN ANTWORTEN. In der App
 *    fiel genau das am 06.08. auf: der "beste Schritt" stand gruen ueber
 *    einer Zeile mit zwei Absagen und null Interessierten, weil die Auswahl
 *    auf "mehr Antworten gewinnt" zurueckfiel. Der Rueckfall ist raus, und
 *    das Bild hier zeigt den korrigierten Zustand: ausgezeichnet wird die
 *    Fassung mit Terminen, nicht die mit der hoechsten Quote.
 * 2. EINE ZEILE OHNE ZAHL. Schritt 3 hat 24 Kontakte und zeigt deshalb
 *    "24 -- zu wenig" statt einer Prozentzahl. Dieselbe 30er-Schwelle wie im
 *    EffectMockup darueber, und dieselbe Aussage: eine Zahl, die nichts
 *    bedeutet, wird nicht gezeigt.
 * 3. DIE WARNUNG STEHT UEBER DER TABELLE, nicht darunter. Sie ist nicht das
 *    Kleingedruckte, sondern die Lesehilfe fuer alles darunter.
 *
 * Balken fuenffach ueberhoeht, wie im EffectMockup: ein massstabsgetreuer
 * Balken fuer 3 % ist ein unsichtbarer Strich. Sie taugen zum VERGLEICHEN
 * zweier Zeilen, nicht zum Ablesen -- die Zahl steht daneben.
 *
 * Zahlen erfunden, aber an den echten Schwellen gewaehlt (30 Kontakte, und
 * Quoten im Bereich, den das eigene Konto tatsaechlich zeigt).
 */
export function CopyOutcomesMockup() {
  const { t } = useT();
  const m = t.guardMockups.copyOutcomes;
  const rows = m.rows;

  return (
    <AppFrame title={m.frameTitle}>
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex gap-2.5 rounded-xl border border-amber-500/35 bg-amber-500/[0.06] px-3.5 py-2.5">
          <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
          <p className="text-[12px] leading-relaxed text-soft">{m.warning}</p>
        </div>

        <div className="flex items-baseline justify-between border-b border-edge/60 pb-2.5">
          <p className="text-[13px] font-medium text-ink">{m.campaign}</p>
          <p className="text-[12px] text-mute">{m.campaignCount}</p>
        </div>

        <div className="divide-y divide-edge/60">
          {rows.map((r) => (
            <div key={r.step + r.variant} className="py-3">
              <div className="flex items-center gap-2.5">
                <span className="w-[80px] shrink-0 text-[13px] text-ink">{r.step}</span>
                {/* Die Fassungs-Marke traegt bewusst den Buchstaben und nicht
                    nur eine Farbe -- A und B muessen auch dann unterscheidbar
                    sein, wenn die Farbe wegfaellt. */}
                <span
                  className={
                    "w-6 shrink-0 rounded text-center text-[11px] font-bold " +
                    (r.variant ? "rounded border border-edge2 bg-chip text-soft" : "text-transparent")
                  }
                >
                  {r.variant || "Â·"}
                </span>
                {/* Die Kontaktzahl steht in der Unterzeile, nicht als eigene
                    Spalte. Im Rundgang sitzt dieses Bild in einer halben
                    Spaltenbreite; mit fuenf festen Spalten blieben dem Balken
                    keine 60px, und ein Balken, den man nicht vergleichen kann,
                    ist nur Dekoration. min-w, damit er auch im schmalsten Fall
                    eine Laenge hat, die etwas aussagt. */}
                <span className="h-2 min-w-[70px] flex-1 overflow-hidden rounded-full bg-chip">
                  {r.percent !== null && (
                    <span
                      className="block h-full rounded-full bg-sky-500"
                      style={{ width: Math.min(100, r.percent * 5) + "%" }}
                    />
                  )}
                </span>
                <span
                  className={
                    "w-[92px] shrink-0 text-right text-[12px] tabular-nums " +
                    (r.percent === null ? "text-mute" : "text-soft")
                  }
                >
                  {r.replies}
                </span>
                {/* Die Termin-Spalte ist die einzige mit Farbe und Gewicht.
                    Sie ist der Grund, warum es diese Ansicht gibt. */}
                <span
                  className={
                    "w-[82px] shrink-0 text-right text-[12px] tabular-nums " +
                    (r.meetings ? "font-semibold text-emerald-700" : "text-edge3")
                  }
                >
                  {r.meetings || "0"}
                </span>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 pl-[113px] text-[11px] text-mute">
                <span>
                  {r.contacts} {m.contactsWord}
                </span>
                <span>{r.interested}</span>
                <span>{r.rejections}</span>
                {r.best && (
                  <span className="rounded-full bg-emerald-500/12 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                    {m.bestLabel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[12px] leading-relaxed text-mute">{m.note}</p>
      </div>
    </AppFrame>
  );
}

/**
 * Dieselben Daten fuer den Hero -- aber als zwei grosse Vergleichskarten
 * statt als Tabellenzeilen.
 *
 * â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
 * WARUM NICHT EINFACH DIE TABELLE VON OBEN, NUR KUERZER
 * â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
 *
 * Genau das war der erste Versuch, und es war der falsche. Eine
 * Tabellenzeile mit 11px-Zahlen funktioniert IM RUNDGANG, wo man liest und
 * vergleicht -- im Hero ist sie eine Briefmarke: zu klein, um von selbst
 * gelesen zu werden, und zu unauffaellig, um jemanden zum Lesen zu bringen.
 *
 * Das erste Bild der Seite hat genau eine Aufgabe: in zwei Sekunden zeigen,
 * dass wir etwas messen, das andere nicht messen koennen. Dafuer braucht es
 * einen Vergleich mit ZWEI Seiten und eine Zahl, die man aus drei Metern
 * Abstand sieht.
 *
 * Deshalb:
 * - DIE TERMINZAHL IST DAS GROESSTE ELEMENT (Display-Schrift, 4xl). Sie ist
 *   der Grund, warum es diese Ansicht gibt. Antwortquote und Balken stehen
 *   daneben, in Lesegroesse statt in Kleingedruckt-Groesse.
 * - DIE GEWINNERKARTE TRAEGT RAHMEN UND FLAECHE in Gruen, plus die Marke
 *   "Beste Fassung". Der Zustand steht nie allein in der Farbe: die Marke
 *   sagt dasselbe in Worten.
 * - NEBENEINANDER AB sm, darunter gestapelt. Zwei Karten mit je einer
 *   grossen Zahl vertragen sich auch untereinander -- der Vergleich bleibt
 *   lesbar, weil beide Zahlen an derselben Stelle der Karte sitzen.
 *
 * Gruen ist bewusst dieselbe Farbe wie "Meeting gebucht" in den uebrigen
 * Mockups, damit die Seite eine Welt bleibt.
 */
export function CopyOutcomesHighlight() {
  const { t } = useT();
  const m = t.guardMockups.copyOutcomes;
  const rows = m.rows.filter((r) => r.variant);

  return (
    <AppFrame title={m.frameTitle}>
      <div className="p-5 sm:p-7">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="text-[15px] font-medium text-ink">{m.campaign}</p>
          <p className="text-[13px] text-mute">{m.campaignCount}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {rows.map((r) => (
            <div
              key={r.variant}
              className={
                "rounded-2xl border p-5 " +
                (r.best ? "border-emerald-500/45 bg-emerald-500/[0.06]" : "border-edge2/80 bg-panel2/50")
              }
            >
              {/* Die Kontaktzahl steht auf BEIDEN Karten, nicht nur auf der
                  Verliererkarte. Sonst laesst sich der Vergleich nicht
                  nachpruefen -- und "B hat mehr Termine" waere wertlos, wenn
                  B doppelt so viele Kontakte gehabt haette. Feste Hoehe der
                  Kopfzeile, damit die Marke auf der Gewinnerkarte die beiden
                  Karten nicht gegeneinander verschiebt. */}
              <div className="flex min-h-[28px] items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-medium text-ink">
                    {m.versionLabel} {r.variant}
                  </p>
                  {r.best && (
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                      {m.bestLabel}
                    </span>
                  )}
                </div>
                <span className="shrink-0 text-[12px] text-mute">
                  {r.contacts} {m.contactsWord}
                </span>
              </div>

              {/* Antwortquote: Balken plus Zahl, aber sichtbar untergeordnet.
                  Sie ist der Kontext, nicht die Aussage. */}
              <div className="mt-4">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[13px] text-soft">
                    {r.repliesNum} {m.repliesWord}
                  </span>
                  <span className="text-[13px] tabular-nums text-mute">{r.repliesPct}</span>
                </div>
                <span className="mt-2 block h-2 overflow-hidden rounded-full bg-chip">
                  <span
                    className={"block h-full rounded-full " + (r.best ? "bg-emerald-500" : "bg-sky-500")}
                    style={{ width: Math.min(100, (r.percent ?? 0) * 8) + "%" }}
                  />
                </span>
              </div>

              {/* Die eigentliche Aussage. */}
              <div className="mt-5 flex items-baseline gap-2.5 border-t border-edge/60 pt-4">
                <span
                  className={
                    "font-display text-4xl font-semibold leading-none tabular-nums " +
                    (r.best ? "text-emerald-700" : "text-ink")
                  }
                >
                  {r.meetingsNum}
                </span>
                <span className={"text-[15px] " + (r.best ? "font-medium text-emerald-800" : "text-soft")}>
                  {r.meetingsWord}
                </span>
              </div>

              <p className="mt-2.5 text-[12px] leading-relaxed text-mute">
                {r.interested} Â· {r.rejections}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[13px] leading-relaxed text-soft">{m.noteShort}</p>
      </div>
    </AppFrame>
  );
}

/**
 * Die LinkedIn-Arbeitsliste.
 *
 * Der Satz, den dieses Bild belegen muss: DIE NACHRICHT STEHT, BEVOR DU
 * LINKEDIN OEFFNEST. Nicht eine Vorlage zum Ausfuellen -- die eingesetzte,
 * versandfertige Nachricht.
 *
 * Der Aufhaenger steht als eigener, hervorgehobener Absatz. Das ist der
 * eigentliche Punkt: es ist DERSELBE Aufhaenger wie in der Mail, schon
 * erzeugt und bezahlt. In der App trugen 214 von 230 Kontakten, die nur ein
 * LinkedIn-Profil haben, bereits einen -- er lag nur nirgends sichtbar.
 *
 * Dass ein Mensch sendet, ist kein Mangel, sondern das Verkaufsargument:
 * LinkedIn bietet fuer Nachrichten keine API. Jedes Werkzeug, das trotzdem
 * automatisch sendet, steuert einen Browser fern und riskiert die Sperrung --
 * bei einem verkauften Produkt also die Konten der Kunden. Deshalb zeigt das
 * Bild drei Knoepfe und keinen "Senden"-Knopf, und der Text daneben
 * formuliert das als Schutz.
 */
export function LinkedInMockup() {
  const { t } = useT();
  const m = t.guardMockups.linkedin;

  return (
    <AppFrame title={m.frameTitle}>
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-2 border-b border-edge/60 pb-3">
          <div>
            <p className="text-[13px] font-medium text-ink">{m.name}</p>
            <p className="text-[11px] text-mute">{m.role}</p>
          </div>
          <span className="rounded-full border border-edge2 bg-chip px-2.5 py-1 text-[10px] text-soft">
            {m.template}
          </span>
        </div>

        <div className="mt-3 space-y-2.5 rounded-xl border border-edge2/70 bg-panel2/60 p-3.5">
          <p className="text-[12px] leading-relaxed text-soft">{m.greeting}</p>
          {/* Der Aufhaenger als eigener Absatz mit Marke: er ist das, was
              diese Nachricht von einem Serienbrief unterscheidet, und er
              stammt aus derselben Recherche wie die Mail. */}
          <div className="rounded-lg border border-coral/30 bg-coral-soft px-3 py-2.5">
            <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.1em] text-ink">{m.hookLabel}</p>
            <p className="text-[12px] leading-relaxed text-soft">{m.hook}</p>
          </div>
          <p className="text-[12px] leading-relaxed text-soft">{m.pitch}</p>
          <p className="text-[12px] leading-relaxed text-soft">{m.signoff}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-lg bg-ink px-3 py-1.5 text-[11px] font-medium text-surface">{m.buttons[0]}</span>
          {m.buttons.slice(1).map((b) => (
            <span key={b} className="rounded-lg border border-edge2 bg-panel px-3 py-1.5 text-[11px] text-soft">
              {b}
            </span>
          ))}
        </div>

        <p className="mt-3.5 text-[11px] leading-relaxed text-mute">{m.note}</p>
      </div>
    </AppFrame>
  );
}
