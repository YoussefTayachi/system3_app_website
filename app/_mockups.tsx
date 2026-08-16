"use client";
import { useEffect, useRef, useState } from "react";
import { StatTile } from "./_ui";
import { useT } from "./language-provider";

/**
 * Illustrierte, vereinfachte Nachbildung der Workspace-/Branding-UI (kein
 * echter Screenshot), analog zur bestehenden AI-Agent-Mockup-Karte: klein
 * noch lesbar, statt eines dichten echten Screenshots.
 */
export function AgencyMockup() {
  const { t } = useT();
  const m = t.agencyMockup;
  return (
    <div className="rounded-2xl bg-panel p-6 shadow-card">
      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.workspacesLabel}</p>
      <div className="mt-2 space-y-1.5">
        {m.workspaces.map((w) => (
          <div
            key={w.name}
            className={
              "flex items-center gap-2.5 rounded-lg border px-3 py-2 text-sm " +
              (w.active ? "border-sky-500/60 bg-sky-500/10 text-ink" : "border-edge2 text-faint")
            }
          >
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-semibold text-white"
              style={{ backgroundColor: w.color }}
            >
              {(w.name.split(": ")[1] ?? w.name).slice(0, 1)}
            </span>
            {/* w-0 statt min-w-0 -- siehe Messnotiz am Report-Link unten. */}
            <span className="w-0 flex-1 truncate">{w.name}</span>
            {w.active && <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-sky-600">{m.active}</span>}
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">{m.brandingLabel}</p>
      <div className="mt-2 flex items-center gap-3 rounded-lg bg-panel2 px-3 py-2.5">
        <span className="h-5 w-5 shrink-0 rounded-full" style={{ backgroundColor: "#0EA5E9" }} />
        <span className="text-sm text-soft">{m.brandingValue}</span>
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">{m.reportLinkLabel}</p>
      <div className="mt-2 flex items-center gap-2 rounded-lg bg-panel2 px-3 py-2.5">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 text-mute">
          <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="m7.7 11 6.6-3M7.7 13l6.6 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        {/* w-0, nicht min-w-0. Gemessen am 13.08.2026 (Chrome 151, 375px): die
            Karte steht auf der Startseite in einem Raster ohne feste
            Spaltenbreite, und `truncate` heisst white-space:nowrap. min-w-0
            erlaubt dem Kind zwar zu SCHRUMPFEN, senkt aber seinen Beitrag zur
            MINDESTBREITE des Rasters nicht: die Karte forderte 417px, das
            Dokument scrollte dadurch seitlich. Mit w-0 (flex-1 zieht es danach
            wieder auf) faellt der Beitrag auf 0 -- Karte gemessen 187px.
            overflow-hidden am Elternteil hilft hier NICHT (gemessen: weiterhin
            417px), es versteckt den Ueberlauf nur. */}
        <span className="w-0 flex-1 truncate text-xs text-mute">{m.reportUrl}</span>
        <span className="shrink-0 rounded-md border border-edge2 px-2 py-1 text-[11px] font-medium text-soft">{m.copyLabel}</span>
      </div>
    </div>
  );
}

/**
 * Illustrierte Nachbildung des Post-Send-Loops: eine eingeordnete Antwort +
 * die dazugehoerigen Kennzahlen als kompakte Kacheln statt eines vollen,
 * dichten Dashboard-Screenshots.
 */
export function PostSendMockup() {
  const { t } = useT();
  const m = t.postSendMockup;
  return (
    <div className="rounded-2xl bg-panel p-6 shadow-card">
      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.incomingLabel}</p>
      <div className="mt-2 rounded-lg bg-panel2 p-4">
        <p className="text-sm leading-relaxed text-ink">{m.exampleReply}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {m.statusInterested}
        </span>
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">{m.dashboardLabel}</p>
      <div className="mt-2 grid grid-cols-3 gap-2.5">
        {/* Beispielzahlen am 2026-08-06 auf Agenturmassstab gehoben: ein
            Kundenkonto mit einer laufenden Kampagne, nicht ein einzelner
            Nutzer mit einer Testliste. */}
        <StatTile value="23" label={m.meetings} />
        <StatTile value="68.400 €" label={m.pipeline} />
        <StatTile value="1,4 %" label={m.bounce} />
      </div>
    </div>
  );
}

/**
 * Illustrierter Vergleich, warum die Lead-Quelle den Unterschied macht:
 * kleine, rein lokale Betriebe tauchen in klassischen B2B-Firmendatenbanken
 * (LinkedIn-/Firmografie-basiert) kaum auf, wohl aber bei einer direkten
 * Google-Places-Suche. Bewusst als illustrierter Vergleich, keine erfundene
 * Zahl/Studie dazu -- das ist eine strukturelle, nachvollziehbare Beobachtung
 * ueber die jeweilige Datenquelle, keine belegte Statistik.
 */
export function LocalReachMockup() {
  const { t } = useT();
  const m = t.localReachMockup;
  return (
    <div className="rounded-2xl bg-panel p-6 shadow-card">
      {/* min-w-0 an beiden Rasterkindern. Dieselbe Ursache wie an sechs
          anderen Stellen dieser Website: eine Rasterspalte ist von Haus aus
          minmax(auto, 1fr), und "auto" meint die MINDESTBREITE des breitesten
          Kindes.

          Hier kommt eine zweite Ursache dazu, die es sonst nirgends gibt: die
          Firmennamen tragen "truncate", und das setzt white-space: nowrap.
          Damit IST die Mindestbreite die volle Textbreite, egal wie schmal
          das Fenster wird. Das min-w-0 an der Textzeile weiter unten half
          nicht -- es erlaubt nur dem Textkasten zu schrumpfen, nicht der
          Rasterspalte darueber.

          Gemessen am 2026-08-15 auf /funktionen bei 320px Fensterbreite: die
          Seite scrollte bis 339px seitlich, auf Deutsch. Bei 375px und
          darueber war nie etwas zu sehen. */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.typicalLabel}</p>
          <div className="mt-2 space-y-1.5">
            {m.businesses.map((b) => (
              <div key={b.name} className="flex items-center gap-2.5 rounded-lg border border-edge2 px-3 py-2 opacity-60">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-panel2 text-mute">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm text-faint line-through">{b.name}</p>
                  <p className="text-[11px] text-mute">{m.notListed}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.frostbreakerLabel}</p>
          <div className="mt-2 space-y-1.5">
            {m.businesses.map((b) => (
              <div key={b.name} className="flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-600">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{b.name}</p>
                  <p className="text-[11px] text-mute">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Animierte Fassung der Filter-Aussage: die generischen Rollen-Adressen werden
 * nacheinander durchgestrichen, danach klappt der echte Ansprechpartner auf.
 *
 * Ersetzt zwei gestapelte Standbilder: der Vorgang selbst ist die Aussage,
 * dafuer braucht es keine zweite Karte und keine zusaetzliche Seitenhoehe.
 * Laeuft erst los, wenn die Sektion im Viewport steht.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * DREI MESSWERTE, DIE DIESE FASSUNG ERKLAEREN (2026-08-15, Chrome, 1440px)
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 1. DIE KARTE SPRANG VON 267 AUF 410 PIXEL. Der gruene Teil klappte ueber
 *    `max-h-0 -> max-h-72` auf. `max-height` ist eine Layout-Eigenschaft:
 *    der Browser rechnet in jedem Bild die Seite neu, und alles unter der
 *    Karte rutscht 143px nach unten -- mitten im Lesen. Jetzt steht der
 *    gruene Teil von Anfang an im Layout und ist nur unsichtbar
 *    (`.fb-card-enter`, Deckkraft + 8px). Nachgemessen: 410px vor und nach
 *    dem Ablauf, 0px Sprung.
 *    Der Preis dafuer ist ein Stueck leere Flaeche unter der Notiz, solange
 *    der Ablauf laeuft. Das ist der richtige Preis: eine reservierte Luecke
 *    steht still, ein Layoutsprung schiebt den Text weg, den jemand gerade
 *    liest.
 *
 * 2. BIS ZUR POINTE VERGINGEN 2,6 SEKUNDEN (4 Schritte x 650ms). Wer in
 *    normalem Tempo scrollt, ist vorbei, bevor die gruene Karte kommt --
 *    dann hat die Nachbildung drei durchgestrichene Adressen gezeigt und
 *    ihre eigentliche Aussage nicht. 420ms je Schritt macht 1,68s daraus.
 *    Untergrenze ist der Strich selbst: er laeuft 220ms, und der naechste
 *    Schritt darf nicht anfangen, bevor der vorige angekommen ist.
 *
 * 3. `clearInterval` FEHLTE IM AUFRAEUMPFAD. Der Beobachter wurde getrennt,
 *    der Zaehler lief weiter -- nach einem Seitenwechsel setzte er alle
 *    420ms den Zustand einer Komponente, die es nicht mehr gibt.
 */
export function QualifiedLeadAnimation() {
  const { t } = useT();
  const m = t.qualifiedMockup;
  const lead = m.rows[0];
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Bei reduzierter Bewegung direkt der Endzustand: die Aussage steht dann
    // als Standbild da, statt dass sie jemand verpasst.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(m.rows.length + 1);
      return;
    }
    // Ausserhalb des Rueckrufs, damit der Aufraeumpfad ihn auch dann kennt,
    // wenn die Komponente WAEHREND des Ablaufs verschwindet -- vorher lag
    // die Kennung nur im Rueckruf, und der Zaehler lief nach dem Aushaengen
    // weiter.
    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let i = 0;
        timer = setInterval(() => {
          i += 1;
          setStep(i);
          if (i > m.rows.length) clearInterval(timer);
        }, 420);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [m.rows.length]);

  const revealed = step > m.rows.length;

  return (
    <div ref={ref} className="rounded-2xl bg-panel p-6 shadow-card sm:p-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-faint">{m.typicalLabel}</p>
      <ul className="mt-3 space-y-2">
        {m.rows.map((r, i) => {
          const struck = step > i;
          return (
            // `transition-all duration-500` stand an Zeile, Marke und Text.
            // Es aendert sich je genau EINE Eigenschaft; `all` laesst den
            // Browser bei jedem Bild alle vergleichen, und die 500ms passten
            // ohnehin nicht mehr zum 420ms-Takt. Jetzt die tatsaechlich
            // wechselnden Eigenschaften, 220ms wie der Strich daneben.
            <li
              key={r.generic}
              className={
                "flex items-center gap-2.5 rounded-lg border border-edge2 bg-panel2 px-3 py-2 transition-opacity duration-[220ms] ease-out " +
                (struck ? "opacity-45" : "opacity-100")
              }
            >
              <span
                className={
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded transition-colors duration-[220ms] ease-out " +
                  (struck ? "bg-coral-soft text-coral" : "bg-panel text-mute")
                }
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              {/* `fb-strike` statt `line-through` -- siehe globals.css: eine
                  Linie, die durch das Wort laeuft, statt eines Strichs, der
                  von einem Bild aufs andere da ist. */}
              <p
                className={
                  "fb-strike truncate text-xs transition-colors duration-[220ms] ease-out " +
                  (struck ? "fb-strike-on text-faint" : "text-soft")
                }
              >
                {r.generic}
              </p>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-[11px] text-mute">{m.genericNote}</p>

      {/* Kein `overflow-hidden` und kein `max-h-*` mehr: der Platz gehoert
          diesem Teil von der ersten Sekunde an, sichtbar wird nur sein
          Inhalt. `aria-hidden` waere hier falsch -- der Text steht die ganze
          Zeit im Layout und ist auch die ganze Zeit vorlesbar, er ist nur
          noch nicht eingeblendet. */}
      <div className={"mt-5 fb-card-enter " + (revealed ? "fb-card-enter-on" : "")}>
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-emerald-700">{m.frostbreakerLabel}</p>
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4">
          <div className="flex items-center gap-3">
            {/* Initialen in Space Grotesk, nicht in der Display-Serife: 14px
                Fraunces in einem 40px-Kreis las sich als Monogramm auf
                Briefpapier, nicht als Avatar einer Anwendung. Regel seit dem
                2026-08-15: Fraunces erst ab 24px. */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-semibold text-white">
              {lead.name.split(" ").map((p) => p[0]).join("")}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{lead.name}</p>
              <p className="text-xs text-mute">{lead.role}</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="ml-auto h-5 w-5 shrink-0 text-emerald-500">
              <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="mt-3 rounded-lg bg-panel px-3 py-2 text-xs text-soft">{lead.email}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Drei kompakte Feature-Mockups fuer die "Was sonst noch mit drin steckt"-
 * Sektion: Sperrliste, Zustellbarkeits-Check, Kampagnen/Sequenzen. Bewusst
 * kleiner/einfacher als die grossen Hero-Mockups, laufen zu dritt in einem
 * Grid nebeneinander.
 */
export function SuppressionMockup() {
  const { t } = useT();
  const m = t.suppressionMockup;
  return (
    <div className="rounded-2xl bg-panel p-6 shadow-card">
      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.label}</p>
      <div className="mt-3 flex items-center gap-3 rounded-lg border border-edge2 bg-panel2 px-4 py-3 opacity-80">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panel text-mute">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-ink line-through decoration-mute">{m.blocked.name} · {m.blocked.company}</p>
          <p className="text-xs text-mute">{m.blocked.note}</p>
        </div>
      </div>
      <span className="mt-2 inline-block rounded-full bg-sky-500/10 px-2.5 py-1 text-[10px] font-medium text-sky-600">
        {m.blockedTag}
      </span>
      <div className="mt-4 flex items-center gap-3 rounded-lg bg-panel2 px-4 py-3">
        <p className="text-2xl font-semibold text-ink">{m.count}</p>
        <p className="text-xs text-soft">{m.countLabel}</p>
      </div>
    </div>
  );
}

export function DeliverabilityMockup() {
  const { t } = useT();
  const m = t.deliverabilityMockup;
  const rows = [
    { label: m.spf, ok: true },
    { label: m.dkim, ok: true },
    { label: m.dmarc, ok: false },
  ];
  return (
    <div className="rounded-2xl bg-panel p-6 shadow-card">
      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.domainLabel}</p>
      <p className="mt-1 text-sm font-medium text-ink">{m.domain}</p>
      <div className="mt-3 space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between rounded-lg bg-panel2 px-3 py-2 text-sm">
            <span className="text-soft">{r.label}</span>
            <span className={"flex items-center gap-1.5 text-xs font-medium " + (r.ok ? "text-emerald-600" : "text-amber-600")}>
              {r.ok ? (
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5"><path d="M12 9v4M12 16.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /></svg>
              )}
              {r.ok ? m.configured : m.missing}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-faint">{m.volumeLabel}</p>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-panel2">
        <div className="h-full w-[84%] rounded-full bg-sky-500" />
      </div>
      <p className="mt-1.5 text-xs text-mute">{m.volumeNote}</p>
    </div>
  );
}

export function CampaignMockup() {
  const { t } = useT();
  const m = t.campaignMockup;
  return (
    <div className="rounded-2xl bg-panel p-6 shadow-card">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.label}</p>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {m.activeLabel}
        </span>
      </div>
      <div className="relative mt-4 space-y-4 pl-5">
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-edge2" />
        {m.steps.map((s) => (
          <div key={s.title} className="relative flex items-start gap-3">
            <span className="absolute -left-5 top-1 h-3.5 w-3.5 rounded-full border-2 border-sky-500 bg-panel" />
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-mute">{s.day}</p>
              <p className="text-sm font-medium text-ink">{s.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
