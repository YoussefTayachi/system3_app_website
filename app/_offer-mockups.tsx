"use client";
import { useId } from "react";

/**
 * Die beiden Bilder zum Angebot: die Angebotskarte und ein einzelner
 * Coach-Befund.
 *
 * WELCHE ECHTEN BILDSCHIRME DAS SIND
 * ─────────────────────────────────────────────────────────────────────────
 * `OfferMapMockup` bildet `app/offers/offer-map.tsx` der App nach: zwoelf
 * Felder in vier Gruppen, THAW in der Mitte. `CoachFindingMockup` bildet den
 * aufgeklappten Coach-Kasten aus derselben Karte nach (`CoachFinding` aus
 * `lib/copy/coach-prompt.ts`: field, severity, verdict, proposal).
 *
 * NACHGEBAUT, NICHT ABFOTOGRAFIERT
 * ─────────────────────────────────────────────────────────────────────────
 * Wie bei allen Mockups dieser Seite. Im echten Betrieb steht in diesen
 * Feldern das Angebot eines zahlenden Kunden -- sein Preis, seine Referenzen,
 * sein Aufhaenger. Das ist das Geschaeftsgeheimnis der Kunden und gehoert
 * nicht ins Marketing.
 *
 * Die einzige Ausnahme, seit dem 2026-08-13: retaiyn, unser erster Kunde, mit
 * ausdruecklicher Zustimmung des Betreibers und ausschliesslich mit Saetzen,
 * die auf retaiyn.com oeffentlich stehen. Kein Preis, keine Referenz eines
 * Dritten. Es gibt auf dieser Website genau zwei Namen: Frostbreaker und
 * retaiyn -- keine erfundene dritte Firma mehr (BEISPIELE.md).
 *
 * Zweiter Grund: die echte Karte ist erst ab rund 1600 Pixeln Fensterbreite
 * vollstaendig zu sehen (sie misst ihre Knoten zur Laufzeit und zieht
 * Bezierkurven dazwischen). Ein Screenshot davon waere auf Textbreite
 * skaliert unlesbar. Hier ist es deshalb eine VEREINFACHUNG: vier Karten,
 * eine einzige Kante, keine gemessenen Koordinaten.
 *
 * WARUM EINE EIGENE DATEI
 * ─────────────────────────────────────────────────────────────────────────
 * `_app-mockups.tsx` steht bei 968 Zeilen. Ausserdem sind das dort
 * Bildschirme der Lead-BESCHAFFUNG; hier geht es um das, was der Nutzer
 * einmal selbst hinschreibt. Derselbe Rahmen, dieselben Tokens.
 *
 * ALLE TEXTE KOMMEN VON AUSSEN
 * ─────────────────────────────────────────────────────────────────────────
 * Keine sichtbare Zeichenkette steht in dieser Datei fest. Was unten unter
 * `DEMO_*` steht, ist ein PLATZHALTER zum Bauen und Nachsehen und wird durch
 * die Eintraege aus `app/dict.ts` (DE und EN) ersetzt, sobald der Abschnitt
 * eingehaengt wird.
 */

/* ═══════════════════════════════════════════════════════════════════════
   Gemeinsamer Rahmen
   ═══════════════════════════════════════════════════════════════════════ */

/** Bewusst eine dritte Kopie neben `_app-mockups.tsx` und
 *  `_guard-mockups.tsx` statt eines gemeinsamen Bauteils: drei Zeilen Markup
 *  zu teilen lohnt keine vierte Datei, an die sich alle drei binden.
 *
 *  Der Preis dieser Entscheidung: `shadow-screen` und der weggefallene
 *  `border` mussten am 2026-08-15 in allen drei Kopien von Hand nachgezogen
 *  werden. Wer hier etwas am Rahmen aendert, aendert es auch in den beiden
 *  anderen Dateien -- sonst stehen zwei Nachbildungen nebeneinander, von
 *  denen eine auf der Seite liegt und die andere davor steht. */
function AppFrame({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-panel shadow-screen">
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

/* ═══════════════════════════════════════════════════════════════════════
   THAW
   ═══════════════════════════════════════════════════════════════════════ */

/** Breitenkreise in Grad, 0 = Aequator. */
const BREITEN = [58, 29, 0, -29, -58];
/** Laengengrade als Anteil der vollen Kugelbreite. */
const LAENGEN = [1, 0.6, 0.24];
/** Energiefaeden: Winkel, Anfangs- und Endradius, Deckkraft. Fest hinterlegt
 *  statt zufaellig -- und absichtlich ungleichmaessig verteilt: gleiche
 *  Abstaende ergeben einen Stern, und ein Stern liest sich als Ladesymbol. */
const FAEDEN = [
  { a: 8, r0: 5.4, r1: 19.8, o: 0.6 },
  { a: 44, r0: 6.6, r1: 20.4, o: 0.55 },
  { a: 71, r0: 5.6, r1: 15.2, o: 0.34 },
  { a: 104, r0: 6.2, r1: 20.2, o: 0.58 },
  { a: 137, r0: 5.2, r1: 17.4, o: 0.4 },
  { a: 172, r0: 6.4, r1: 20.1, o: 0.56 },
  { a: 206, r0: 5.4, r1: 14.8, o: 0.32 },
  { a: 239, r0: 6.5, r1: 20.4, o: 0.58 },
  { a: 272, r0: 5.1, r1: 19.6, o: 0.5 },
  { a: 307, r0: 6.1, r1: 16.4, o: 0.36 },
  { a: 341, r0: 5.6, r1: 20.0, o: 0.54 },
];
/** Sehnen zwischen zwei Punkten auf der Kugel, die NICHT durch die Mitte
 *  gehen. Ohne sie waeren die Faeden ein Strahlenkranz. */
const SEHNEN = [
  { a1: 18, r1: 18.2, a2: 96, r2: 17.0, o: 0.26 },
  { a1: 112, r1: 17.6, a2: 196, r2: 19.0, o: 0.24 },
  { a1: 214, r1: 19.0, a2: 292, r2: 18.0, o: 0.24 },
  { a1: 314, r1: 18.4, a2: 32, r2: 19.2, o: 0.22 },
];

/**
 * Auf drei Nachkommastellen gerunden, BEVOR die Zahl ins Markup geht.
 *
 * Math.sin und Math.cos sind in der Spezifikation nicht bitgenau festgelegt;
 * Node (Server-Rendering) und Chrome (Hydration) runden das letzte Bit
 * unterschiedlich. Gemessen am 2026-08-14 auf / in der Konsole: derselbe
 * Breitenkreis kam vom Server als cy=15.259530581872152 und im Browser als
 * cy=15.259530581872149. React meldet das als Hydration-Mismatch und
 * verwirft dann den GANZEN Serverbaum, um ihn im Browser neu aufzubauen --
 * das ist kein Schoenheitsfehler, sondern der teuerste Rendervorgang, den
 * die Seite haben kann.
 *
 * Drei Stellen reichen: die Zeichnung laeuft in viewBox 64, ein Tausendstel
 * davon ist bei 108 Pixeln Darstellungsgroesse rund 1,7 Tausendstel Pixel.
 * Nachgemessen: die Figur ist vorher und nachher pixelgleich.
 *
 * NICHT wegkuerzen, auch wenn es nach ueberfluessiger Kosmetik aussieht --
 * ohne die Rundung ist der Hydration-Fehler sofort zurueck.
 */
const r3 = (n: number) => Math.round(n * 1000) / 1000;

const punkt = (grad: number, r: number) => {
  const b = (grad * Math.PI) / 180;
  return [r3(32 + r * Math.cos(b)), r3(32 + r * Math.sin(b))] as const;
};

/**
 * THAW, vereinfacht aus `apps/web/app/thaw.tsx`.
 *
 * Es ist eine FADENKUGEL: ein geschlossenes Drahtgitter aus fuenf Breiten-
 * und drei Laengenkreisen um einen heissen Kern. Ausdrueckliche Entscheidung
 * des Betreibers -- zwei Fassungen wurden dort verworfen und duerfen hier
 * nicht zurueckkommen: kein Auge (schaut zurueck, wirkt unheimlich) und kein
 * einzelner gekippter Reif (liest sich als Saturn, nicht als Technik). Der
 * Unterschied zwischen Kugel und Planet liegt allein in der ANZAHL der
 * Bahnen.
 *
 * Weggelassen gegenueber der App: die vier Zustaende und das wandernde Licht
 * in den Bahnen. Auf einer Verkaufsseite gibt es nur einen Zustand, und eine
 * Dauer-Animation neben Fliesstext ist eine Ablenkung. Der Schwebe-Effekt
 * kommt aus `animate-float-slow` und faellt bei
 * `prefers-reduced-motion: reduce` global weg (globals.css).
 *
 * Alle Farben ueber `currentColor` -- damit gilt die Tailwind-Textfarbe der
 * Elternebene bis in die Verlaufsstopps hinein, und in der Datei steht kein
 * einziger Hex-Wert.
 */
function ThawOrb({ size = 96, farbe = "text-sky-500" }: { size?: number; farbe?: string }) {
  // Eigene IDs je Instanz: zwei gleiche Verlaufs-IDs im selben Dokument
  // lassen die zweite Figur die Fuellung der ersten erben.
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={farbe}
      role="img"
      aria-label="Frostbreaker AI"
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Der heisse Kern. Der weisse Brennpunkt muss klein bleiben: auf
            hellem Grund ist Weiss der Hintergrund, ein grosser weisser Kern
            waere dort ein Loch. */}
        <radialGradient id={`hot-${uid}`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="20%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="52%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`glow-${uid}`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        {/* Ein Hauch Fuellung, damit die Bahnen nicht im Nichts haengen --
            aber wenig: gemeint ist ein Netz, durch das man hindurchsieht. */}
        <radialGradient id={`body-${uid}`} cx="36%" cy="28%" r="76%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
        </radialGradient>
        {/* Die Lichtkante: oben hart, nach unten auslaufend. Rundherum gleich
            hell sieht aus wie ein Aufkleber. */}
        <linearGradient id={`rim-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.75" />
          <stop offset="55%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* Achsneigung: genau senkrecht sieht nach Schulglobus aus. */}
      <g transform="rotate(-14 32 32)">
        <circle cx="32" cy="32" r="21" fill={`url(#body-${uid})`} />

        {/* Laengengrade: volle Hoehe, abnehmende Breite. */}
        {LAENGEN.map((f) => (
          <ellipse
            key={f}
            cx="32"
            cy="32"
            rx={21 * f}
            ry="21"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.55"
            opacity="0.3"
          />
        ))}

        {/* Breitenkreise als GESTAUCHTE Ellipsen, deren Radius zu den Polen
            hin abnimmt. Das ist die ganze Kugelperspektive -- eine Formel,
            keine 3D-Bibliothek. Bei Stauchung 1 waere es eine Zielscheibe,
            bei 0 ein Stapel Striche. */}
        {BREITEN.map((phi, i) => {
          const b = (phi * Math.PI) / 180;
          // r3: siehe oben. Genau diese drei Attribute standen im
          // Hydration-Fehler.
          const rx = r3(21 * Math.cos(b));
          return (
            <ellipse
              key={phi}
              cx="32"
              cy={r3(32 - 21 * Math.sin(b) * 0.94)}
              rx={rx}
              ry={r3(Math.max(rx * 0.34, 1.2))}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.85"
              strokeLinecap="round"
              opacity={i === 2 ? 0.55 : 0.4}
            />
          );
        })}

        {SEHNEN.map((s) => {
          const [x1, y1] = punkt(s.a1, s.r1);
          const [x2, y2] = punkt(s.a2, s.r2);
          return (
            <line
              key={`${s.a1}-${s.a2}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="0.35"
              strokeLinecap="round"
              opacity={s.o}
            />
          );
        })}

        {FAEDEN.map((f) => {
          const [x1, y1] = punkt(f.a, f.r0);
          const [x2, y2] = punkt(f.a, f.r1);
          return (
            <g key={f.a}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="0.45"
                strokeLinecap="round"
                opacity={f.o}
              />
              {/* Nur die langen Faeden bekommen einen Endpunkt -- sonst saesse
                  aussen ein gleichmaessiger Perlenkranz, und der laese sich
                  wieder als Zifferblatt. */}
              {f.r1 > 19 && <circle cx={x2} cy={y2} r="0.62" fill="currentColor" opacity={f.o + 0.25} />}
            </g>
          );
        })}

        <circle cx="32" cy="32" r="21" fill="none" stroke={`url(#rim-${uid})`} strokeWidth="0.9" />
      </g>

      {/* Der Kern zuletzt, damit er in die Bahnen hineinleuchtet. */}
      <circle cx="32" cy="32" r="15" fill={`url(#glow-${uid})`} />
      <circle cx="32" cy="32" r="8.6" fill={`url(#hot-${uid})`} />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   1. Die Angebotskarte
   ═══════════════════════════════════════════════════════════════════════ */

export type OfferMapNode = {
  /** Die Frage, die das Feld stellt. */
  label: string;
  /** Die Antwort darin. */
  value: string;
};

export type OfferMapCorner = {
  /** Ueberschrift der Gruppe, z. B. "Wer schreibt an wen". */
  title: string;
  /** Genau drei Felder. Vier Ecken mal drei Felder sind die zwoelf Fragen,
   *  von denen der Abschnittstext spricht -- weniger waere gelogen. */
  nodes: [OfferMapNode, OfferMapNode, OfferMapNode];
};

export type OfferMapMockupProps = {
  /** Steht klein in der Fensterleiste. */
  frameTitle: string;
  /** Genau vier, im Uhrzeigersinn ab oben links: wer schreibt an wen · woran
   *  haengt der Leser · was hat er davon · worum wird gebeten. */
  corners: [OfferMapCorner, OfferMapCorner, OfferMapCorner, OfferMapCorner];
  hub: {
    /** Der Name der Figur. */
    name: string;
    /** Was sie gerade tut, eine Zeile. */
    state: string;
    /** Beschriftung des Knopfes darunter. */
    button: string;
  };
  /** Die Beschriftung des bernsteinfarbenen Pfeils. Sie MUSS zu den beiden
   *  Knoten passen, zwischen denen er laeuft -- siehe BEFUND unten. */
  findingLabel: string;
  /** Eine Zeile unter der Karte. */
  note: string;
  /** Die Tafel oben links: der ZWEITE KI-Schritt, der aus einer Lead-Liste
   *  vorschlaegt, was am Angebot fuer diese Empfaenger anders klingen muss.
   *  Er fehlte im Bild, obwohl er der Teil ist, der Arbeit abnimmt -- die
   *  Karte zeigte nur die Pruefung. Alle vier Zeilen stehen wortgleich in
   *  der App (apps/web/lib/i18n/dict.ts, offers.fromSearch). */
  listPanel: {
    heading: string;
    subtitle: string;
    button: string;
    hint: string;
  };
};

/**
 * Wo der Befund-Pfeil laeuft.
 *
 * Das ist Aufbau, keine Sprache, und steht deshalb hier und nicht im
 * Woerterbuch: dritte Ecke ("was hat er davon"), vom ersten Knoten
 * (Ergebnis) zum dritten (Beleg). Genau der Fall aus der App vom 2026-08-13
 * -- der Beleg stand im Ergebnisfeld und im Belegfeld ein Wahlspruch.
 * `findingLabel` muss diese beiden Felder benennen.
 */
const BEFUND = { ecke: 2, von: 0, nach: 2 } as const;

/** Ein Feld der Karte, plus die Spur links daneben, in der der Befund-Pfeil
 *  laeuft. Die Spur gehoert zur Zeile und nicht zur Karte, damit sie immer
 *  genau so hoch ist wie der Knoten -- der Pfeil trifft dadurch die Mitte
 *  jedes Knotens, egal wie viele Zeilen sein Text umbricht. */
function MapNode({ node, lane, related }: { node: OfferMapNode; lane: "none" | "von" | "durch" | "nach"; related: boolean }) {
  return (
    <>
      <div className="mb-2 flex h-full flex-col items-center" aria-hidden>
        {lane === "von" && (
          <>
            <span className="flex-1" />
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <span className="w-0 flex-1 border-l-2 border-dashed border-amber-500/70" />
          </>
        )}
        {lane === "durch" && <span className="w-0 flex-1 border-l-2 border-dashed border-amber-500/70" />}
        {lane === "nach" && (
          <>
            <span className="w-0 flex-1 border-l-2 border-dashed border-amber-500/70" />
            {/* Die Spitze sitzt auf der Mitte des Zielknotens. */}
            <svg viewBox="0 0 10 8" className="h-2 w-2.5 shrink-0 text-amber-500" fill="currentColor">
              <path d="M5 8 0 0h10z" />
            </svg>
            <span className="flex-1" />
          </>
        )}
      </div>
      <div
        className={
          "mb-2 rounded-xl border px-3 py-2 " +
          (related ? "border-amber-500/45 bg-amber-500/[0.07]" : "border-edge2/70 bg-panel2/50")
        }
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-mute">{node.label}</p>
        <p className="mt-0.5 text-[12.5px] leading-snug text-soft">{node.value}</p>
      </div>
    </>
  );
}

/**
 * Die Angebotskarte.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WARUM DAS BILD ES WERT IST
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Wegen des bernsteinfarbenen Pfeils. Zwoelf Felder untereinander sehen aus
 * wie zwoelf gleichrangige Fragen; sie sind aber ein Gefuege. Ein Befund, der
 * ZWEI Felder betrifft ("dein Beleg steht im Ergebnisfeld"), laesst sich in
 * einem Formular gar nicht hinschreiben -- er hat dort keinen Ort. Auf einer
 * Karte ist er ein Pfeil. Das ist der Grund, warum die App an dieser Stelle
 * eine Karte zeigt und keine Liste, und deshalb ist der Pfeil das einzige
 * Bernstein auf dem ganzen Bild -- alles Uebrige ist grau, und THAW in der
 * Mitte traegt das Blau der Seite.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * DREI ENTWURFSENTSCHEIDUNGEN
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 1. DOM STATT EINER SVG-ZEICHNUNG mit festem viewBox -- dieselbe
 *    Entscheidung wie in `_system-map.tsx`. Ein SVG skaliert die SCHRIFT mit:
 *    auf 375 Pixeln waeren die Feldtexte unter 8px, und ein querscrollendes
 *    Diagramm ist auf dem Telefon wertlos. Die App misst ihre Knoten zur
 *    Laufzeit nach und zieht Bezierkurven -- das braucht ResizeObserver und
 *    1600 Pixel Fensterbreite. Beides hat auf einer Verkaufsseite nichts
 *    verloren.
 * 2. DIE ECKEN STAPELN AB 52rem NICHT MEHR, sondern liegen ueber Kreuz um
 *    THAW herum: 1 · 2 oben, 4 · 3 unten, THAW in der Mittelspalte ueber
 *    beide Zeilen. Darunter ist es eine Spalte, und THAW steht zwischen
 *    Ecke 2 und Ecke 3 -- also weiterhin in der Mitte. Die Reihenfolge im
 *    Markup ist die Lesereihenfolge; oberhalb verschiebt nur die Platzierung
 *    im Raster.
 *
 *    Der Umbruch haengt an der BREITE DER KARTE, nicht am Fenster
 *    (`@container`, Tailwind v4). Grund: dieses Bild steht laut Plan neben
 *    einem zweiten. In einer halben Spalte auf 1440 waere `lg:` erfuellt und
 *    die Karte trotzdem nur 600 Pixel breit -- dann blieben je Ecke 170
 *    Pixel, und genau daran ist die erste Fassung IN DER APP gescheitert.
 *    52rem sind gemessen: darunter fallen die Fragen auf drei Zeilen.
 * 3. DIE BESCHRIFTUNG DES PFEILS STEHT UNTER SEINEN BEIDEN KNOTEN, nicht an
 *    ihm. Eine Beschriftung an der Spur muesste `whitespace-nowrap` sein und
 *    ragte auf 375 Pixeln aus der Karte -- das ist Querscrollen, und das ist
 *    verboten. Sie traegt denselben Pfeilkopf wie die Spur, damit die
 *    Zuordnung eindeutig bleibt.
 */
export function OfferMapMockup({ frameTitle, corners, hub, findingLabel, note, listPanel }: OfferMapMockupProps) {
  /** Platzierung im Raster ab 52rem Kartenbreite. Index = Reihenfolge im
   *  Markup, also die Lesereihenfolge im Uhrzeigersinn. */
  const PLATZ = [
    "@min-[52rem]:col-start-1 @min-[52rem]:row-start-1",
    "@min-[52rem]:col-start-3 @min-[52rem]:row-start-1",
    "@min-[52rem]:col-start-3 @min-[52rem]:row-start-2",
    "@min-[52rem]:col-start-1 @min-[52rem]:row-start-2",
  ];

  return (
    <AppFrame title={frameTitle}>
      <div className="@container p-4 sm:p-6">
        {/* DER ERSTE VON ZWEI KI-SCHRITTEN. Die Karte zeigte bis zum
            2026-08-15 nur die Pruefung in der Mitte -- also den Teil, der
            Fehler findet. Der Teil, der ARBEIT ABNIMMT, fehlte: dass
            Frostbreaker AI die Firmen einer Lead-Liste liest und daraus
            vorschlaegt, was fuer diese Empfaenger anders klingen muss.

            Violett und nicht Blau, wie in der App: dort unterscheidet die
            Farbe die Herkunft eines Vorschlags (Frost fuer die Website,
            Violett fuer eine Lead-Liste). Die Bedeutung steht hier
            zusaetzlich ausgeschrieben -- eine Farbbedeutung allein muss man
            sich merken, und fuer einen Screenreader ist sie gar nicht da. */}
        <div className="mb-5 rounded-2xl border border-violet-300/60 bg-violet-500/[0.04] p-4 sm:p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-violet-800/80">
            {listPanel.heading}
          </p>
          <div className="mt-2.5 flex items-start gap-3.5">
            <div className="shrink-0 text-violet-500">
              <ThawOrb size={44} farbe="text-violet-500" />
            </div>
            <div className="min-w-0">
              <p className="max-w-[62ch] text-[13px] leading-relaxed text-ink">{listPanel.subtitle}</p>
              <span className="mt-2.5 inline-flex rounded-lg border border-violet-400/60 bg-panel px-3 py-1.5 text-[11px] font-medium text-violet-800">
                {listPanel.button}
              </span>
            </div>
          </div>
          <p className="mt-3 max-w-[70ch] text-[11px] leading-relaxed text-mute">{listPanel.hint}</p>
        </div>

        <div className="grid gap-3 @min-[52rem]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] @min-[52rem]:gap-x-6 @min-[52rem]:gap-y-4">
          {corners.map((corner, ci) => {
            const hatBefund = ci === BEFUND.ecke;
            return (
              <div
                key={corner.title}
                className={
                  // self-start: ohne das ziehen die Rasterzeilen beide Karten
                  // auf dieselbe Hoehe, und unter der kuerzeren stand ein
                  // handbreiter leerer Streifen -- am Standbild bei 1024 und
                  // 1440 gesehen. Gleich hoch muessen sie hier nicht sein: es
                  // sind vier Gruppen nebeneinander, keine Rangfolge.
                  "rounded-2xl border border-edge/60 bg-panel p-4 @min-[52rem]:self-start " +
                  PLATZ[ci] +
                  // Gestapelt steht THAW zwischen Ecke 2 und Ecke 3. Im
                  // Markup steht er hinter allen vier Ecken (Lesereihenfolge);
                  // die order-Klassen schieben ihn nur optisch dazwischen.
                  (ci >= 2 ? " order-3 @min-[52rem]:order-none" : "")
                }
              >
                <div className="flex items-baseline gap-2">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky-500/12 text-[10px] font-bold text-sky-700">
                    {ci + 1}
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-faint">{corner.title}</p>
                </div>

                {/* Erste Spalte ist die Fahrbahn des Befund-Pfeils. Sie steht
                    auf allen vier Karten, auch wo nichts darin laeuft: sonst
                    saessen die Feldkaesten unterschiedlich weit eingerueckt,
                    und gestapelt sieht das nach Fehler aus. */}
                <div className="mt-3 grid grid-cols-[14px_minmax(0,1fr)] gap-x-2">
                  {corner.nodes.map((node, ni) => {
                    const lane =
                      !hatBefund || ni < BEFUND.von || ni > BEFUND.nach
                        ? "none"
                        : ni === BEFUND.von
                          ? "von"
                          : ni === BEFUND.nach
                            ? "nach"
                            : "durch";
                    return (
                      <MapNode
                        key={node.label}
                        node={node}
                        lane={lane}
                        related={hatBefund && (ni === BEFUND.von || ni === BEFUND.nach)}
                      />
                    );
                  })}
                </div>

                {hatBefund && (
                  <p className="mt-1 flex items-start gap-2 rounded-lg border border-amber-500/35 bg-amber-500/[0.06] px-3 py-2">
                    <svg viewBox="0 0 10 8" className="mt-1 h-2 w-2.5 shrink-0 text-amber-500" fill="currentColor" aria-hidden>
                      <path d="M5 8 0 0h10z" />
                    </svg>
                    <span className="text-[12px] leading-relaxed text-soft">{findingLabel}</span>
                  </p>
                )}
              </div>
            );
          })}

          {/* THAW. Steht dort, wo alle vier Ecken hinzeigen, und nicht in
              einer Spalte am Rand: er liest das Ganze, nicht eine Seite
              davon. */}
          <div className="order-2 flex flex-col items-center gap-1 py-2 @min-[52rem]:order-none @min-[52rem]:col-start-2 @min-[52rem]:row-start-1 @min-[52rem]:row-span-2 @min-[52rem]:w-44 @min-[52rem]:self-center">
            <div className="animate-float-slow">
              <ThawOrb size={108} />
            </div>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-ink">{hub.name}</p>
            <p className="max-w-[16rem] text-center text-[12px] leading-snug text-mute">{hub.state}</p>
            <span className="mt-2 rounded-lg bg-ink px-3 py-1.5 text-[11px] font-medium text-surface">
              {hub.button}
            </span>
          </div>
        </div>

        <p className="mt-4 text-[12px] leading-relaxed text-mute">{note}</p>
      </div>
    </AppFrame>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   2. Ein Befund
   ═══════════════════════════════════════════════════════════════════════ */

export type CoachFindingMockupProps = {
  /** Steht klein in der Fensterleiste. */
  frameTitle: string;
  /** Die Gruppe, in der das Feld liegt, z. B. "Worum du bittest". */
  group: string;
  /** Die Frage, die das Feld stellt. */
  fieldLabel: string;
  /** Wie ernst der Befund ist, ein Wort. */
  severity: string;
  /** Ueberschrift ueber dem durchgestrichenen Satz. */
  beforeLabel: string;
  /** Der schwache Satz, so wie er dastand. */
  before: string;
  /** Ueberschrift ueber dem Urteil. */
  verdictLabel: string;
  /** Das Urteil. EIN Satz -- mehr ist keine Beurteilung mehr, sondern ein
   *  Aufsatz, und das Bild lebt davon, dass man es in einem Blick liest. */
  verdict: string;
  /** Ueberschrift ueber dem Ersatztext. */
  proposalLabel: string;
  /** Der fertige Ersatztext. Das groesste Element des Bildes. */
  proposal: string;
  /** Der Knopf, der ihn einsetzt. */
  apply: string;
  /** Der Knopf, der den Befund wegwirft. */
  dismiss: string;
  /** Eine Zeile darunter. */
  note: string;
};

/**
 * Ein einzelner Coach-Befund, gross.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WARUM EINER UND WARUM GROSS
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Das ist der staerkste Einzelbeleg, den die Seite haben kann: ein Werkzeug,
 * das einem widerspricht UND die Arbeit macht. Drei Befunde nebeneinander
 * waeren eine Mangelliste -- man liest sie als Fehlerprotokoll und ueberfliegt
 * sie. Einer, gross, wird gelesen.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * DIE HIERARCHIE IST DIE AUSSAGE
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Drei Stufen, absichtlich ungleich gewichtet:
 *  1. DER ERSATZTEXT ist das groesste Element (17-19px) und das einzige mit
 *     Flaeche. Er ist der Grund, warum es diesen Kasten gibt.
 *     Bis zum 2026-08-15 stand er in der Display-Serife. Seit der Regel
 *     "Fraunces erst ab 24px" traegt er Space Grotesk: eine Serife in 17px
 *     liest sich als Fachtext, und dieser Satz soll wie eine geschriebene
 *     Mail aussehen. Die Groesse und die Flaeche tragen die Hierarchie
 *     weiterhin allein -- er bleibt das groesste Element des Kastens.
 *  2. DAS URTEIL steht in Lesegroesse darueber, in Ink.
 *  3. DER ALTE SATZ steht klein, grau und durchgestrichen. Er ist der
 *     Ausgangspunkt, nicht die Nachricht -- deshalb liest man ihn zuletzt,
 *     obwohl er oben steht.
 *
 * Der Zustand haengt nie allein an der Farbe: neben dem bernsteinfarbenen
 * Rahmen steht das Wort ("Blocker"), und der alte Satz ist zusaetzlich
 * durchgestrichen.
 *
 * Bernstein statt Rot, obwohl es in der App ein Blocker sein kann: Rot heisst
 * auf dieser Seite "geht schief" (siehe `_guard-mockups.tsx`, das Versandtor).
 * Ein Coach-Befund geht nicht schief, er ist eine Einrede. Es ist ausserdem
 * dieselbe Farbe wie der Pfeil in `OfferMapMockup` -- beide Bilder zeigen
 * dieselbe Sache.
 */
export function CoachFindingMockup({
  frameTitle,
  group,
  fieldLabel,
  severity,
  beforeLabel,
  before,
  verdictLabel,
  verdict,
  proposalLabel,
  proposal,
  apply,
  dismiss,
  note,
}: CoachFindingMockupProps) {
  return (
    <AppFrame title={frameTitle}>
      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-faint">{group}</p>
            <p className="mt-1 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-ink sm:text-base">
              {fieldLabel}
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-amber-500/45 bg-amber-500/[0.08] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-amber-700">
            {severity}
          </span>
        </div>

        {/* Der alte Satz. Durchgestrichen UND grau: die Durchstreichung allein
            traegt die Aussage nicht, wenn jemand das Bild ueberfliegt. */}
        <div className="mt-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-mute">{beforeLabel}</p>
          <p className="mt-1.5 rounded-xl border border-edge2/70 bg-panel2/60 px-4 py-3 text-[13px] leading-relaxed text-mute line-through decoration-edge3 decoration-1">
            {before}
          </p>
        </div>
        {/* Die Zeilenlaengen sind gedeckelt (ch statt px): auf 1440 lief das
            Urteil sonst ueber rund 130 Zeichen, und der Ersatztext stand als
            eine einzige lange Zeile da -- geschrieben aussehen soll er, nicht
            gesetzt. */}

        {/* Das Urteil. Kein Kasten, nur eine Kante: zwei Kaesten
            untereinander waeren zwei gleich laute Aussagen, und laut ist hier
            der Ersatztext. */}
        <div className="mt-5 border-l-2 border-amber-500 pl-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-amber-700">{verdictLabel}</p>
          <p className="mt-1 max-w-[68ch] text-[14px] leading-relaxed text-ink sm:text-[15px]">{verdict}</p>
        </div>

        {/* Der Ersatztext -- das eigentliche Bild. */}
        <div className="mt-5 rounded-2xl border border-amber-500/40 bg-amber-500/[0.06] p-4 sm:p-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-amber-700">{proposalLabel}</p>
          <p className="mt-2 max-w-[48ch] text-[17px] font-semibold leading-snug tracking-[-0.01em] text-ink sm:text-[19px]">
            {proposal}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-lg bg-ink px-3.5 py-2 text-[12px] font-semibold text-surface">{apply}</span>
            <span className="rounded-lg border border-edge2 bg-panel px-3.5 py-2 text-[12px] text-soft">
              {dismiss}
            </span>
          </div>
        </div>

        <p className="mt-4 text-[12px] leading-relaxed text-mute">{note}</p>
      </div>
    </AppFrame>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PLATZHALTER
   ═══════════════════════════════════════════════════════════════════════

   Die beiden Objekte unten sind KEIN fertiger Seitentext. Sie stehen hier,
   damit sich die Bauteile beim Entwickeln und beim Nachsehen im Browser
   ueberhaupt anzeigen lassen -- formuliert wird beides vom `copywriter` in
   `app/dict.ts`, auf Deutsch UND Englisch. Beim Einhaengen des Abschnitts in
   `page.tsx` treten die Woerterbuch-Eintraege an diese Stelle; wer sie dann
   hier stehen laesst, hat zwei Wahrheiten.

   Seit dem 2026-08-13 keine erfundene Firma und keine erfundene Zahl mehr
   (BEISPIELE.md): das Angebotsprofil gehoert retaiyn, unserem ersten Kunden,
   Feld fuer Feld aus deren eigenen Saetzen von retaiyn.com. Die Prozentwerte
   sind retaiyns Aussagen ueber sich selbst und duerfen nur deshalb hier
   stehen, weil sie sichtbar in beschrifteten Formularfeldern eines
   Kundenangebots stehen und nicht in einer Auswertung.

   Der Fehler, den das Bild zeigt, entsteht aus diesem Material von allein:
   im Ergebnisfeld steht das Versprechen, im Belegfeld ein Wahlspruch, und
   der eigentliche Beleg (ueber 200 betreute Brands, 2,5 Mio. EUR ARR im
   Portfolio) steht nirgends. Darauf zeigt der bernsteinfarbene Pfeil.

   Die Fassung hier muss mit `offerSection.offerMap` und
   `offerSection.coachFinding` in `app/dict.ts` uebereinstimmen -- sonst
   stehen zwei Wahrheiten in zwei Welten.

   Beim Ausprobieren aufgelaufen (2026-08-13): diese Objekte lassen sich nur
   aus einem Client-Modul heraus benutzen. Diese Datei traegt "use client";
   importiert eine Server-Komponente ein Objekt daraus, bekommt sie nicht die
   Daten, sondern einen Platzhalter des Client-Verweises -- `corners` ist dann
   undefined und die Seite faellt mit "Cannot read properties of undefined"
   um. `app/page.tsx` ist ein Client-Modul, dort ist das kein Thema. */

export const DEMO_OFFER_MAP: OfferMapMockupProps = {
  frameTitle: "Angebot",
  corners: [
    {
      title: "Wer schreibt an wen",
      nodes: [
        { label: "Was verkaufst du?", value: "Customer Experience für E-Commerce: E-Mail, WhatsApp und Support verbunden statt isoliert." },
        { label: "An wen?", value: "E-Commerce-Shops und -Brands, häufig schon mit Klaviyo oder WhatsApp im Einsatz." },
        { label: "Wie soll es klingen?", value: "Beratend und konkret, keine Fachwörter, kein Hype." },
      ],
    },
    {
      title: "Woran der Leser hängt",
      nodes: [
        { label: "Welches Problem hat er vorher?", value: "E-Mail, WhatsApp und Customer Support werden unabhängig voneinander betrachtet." },
        { label: "Woran genau bleibt er hängen?", value: "Brüche in der Customer Journey, ungenutzte Umsatzpotenziale, unnötig hohe operative Aufwände." },
        { label: "Warum lässt das zögern?", value: "Jedes der drei Systeme läuft für sich, deshalb fällt der Bruch dazwischen niemandem zu." },
      ],
    },
    {
      title: "Was er davon hat",
      nodes: [
        { label: "Was ist danach anders?", value: "Bis zu 70 % des Kundensupports automatisiert, bis zu 30 % Mehrumsatz." },
        { label: "Wie entsteht das Ergebnis?", value: "E-Mail, WhatsApp und Support laufen als ein Ablauf statt als drei." },
        { label: "Womit kannst du das belegen?", value: "Mehr als eine klassische Agentur: strategische Beratung mit operativer Exzellenz." },
      ],
    },
    {
      title: "Worum du bittest",
      nodes: [
        { label: "Was schickst du, wenn er Ja sagt?", value: "Eine Übersicht der drei Stellen, an denen E-Mail, WhatsApp und Support bei euch auseinanderlaufen." },
        { label: "Wie lange braucht er dafür?", value: "90 Sekunden" },
        { label: "Die eine Frage", value: "Kostenloses Erstgespräch vereinbaren." },
      ],
    },
  ],
  listPanel: {
    heading: "Auf eine Lead-Liste zuschneiden",
    subtitle:
      "Frostbreaker AI liest die Firmen einer Liste und schlägt vor, was am Angebot für sie anders klingen sollte.",
    button: "Liste wählen",
    hint: "Neu vorgeschlagen: Problem, Stolperstein, Grund, Zielgruppe. Nur umformuliert: Ergebnis und Mechanismus. Zahlen und Beleg bleiben.",
  },
  hub: {
    name: "Frostbreaker AI",
    state: "liest die zwölf Felder gegeneinander",
    button: "Angebot prüfen",
  },
  findingLabel: "Im Ergebnisfeld steht ein Versprechen, im Belegfeld ein Wahlspruch. Der Beleg für das Versprechen steht nirgends.",
  note: "Zwölf Felder, vier Gruppen. Jede Linie dazwischen ist eine Regel, an der geprüft wird. Ausgefüllt mit den eigenen Sätzen unseres ersten Kunden retaiyn, von dessen Website.",
};

export const DEMO_COACH_FINDING: CoachFindingMockupProps = {
  frameTitle: "Angebot · Prüfung",
  group: "Worum du bittest",
  fieldLabel: "Die eine Frage, auf die er Ja oder Nein sagt",
  severity: "Blocker",
  beforeLabel: "Du hattest geschrieben",
  before: "Kostenloses Erstgespräch vereinbaren.",
  verdictLabel: "Frostbreaker AI",
  verdict:
    "Auf einer Website ist der Satz richtig. Am Ende einer ersten Mail ist er eine Terminbitte — die größte Bitte, die sie stellen kann, und deshalb die, die am häufigsten übergangen wird.",
  proposalLabel: "Stattdessen",
  proposal: "Soll ich dir die drei Stellen schicken, an denen E-Mail, WhatsApp und Support bei euch heute auseinanderlaufen?",
  apply: "Übernehmen",
  dismiss: "Passt so",
  note: "Kein Befund ohne Gegenvorschlag: Was Frostbreaker AI bemängelt, schreibt er daneben neu.",
};
