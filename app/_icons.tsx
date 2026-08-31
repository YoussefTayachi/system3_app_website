// Icons sind sprachunabhaengig, deshalb getrennt von dict.ts gehalten und per
// stabiler id referenziert (id kommt aus dem jeweiligen dict-Eintrag), statt
// pro Sprache dupliziert zu werden.

/** Bestaetigung in der Vergleichstabelle. aria-hidden, weil die Zelle den
 *  Sachverhalt daneben ausformuliert -- das Icon ist reine Lesehilfe. */
export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600">
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path d="m8.2 12.3 2.6 2.6 5-5.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Gegenstueck fuer die Spalte "typischer Alternativ-Stack". */
export function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-edge3">
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path d="m9 9 6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// `trustIcons` (Schloss und Muenze) ist am 2026-08-14 mit dem
// Vertrauens-Abschnitt der Startseite gefallen -- er war die einzige
// Fundstelle. Die uebrigen Icon-Saetze in dieser Datei haben ihre Abschnitte
// frueher verloren und liegen unabhaengig davon hier.

export const postSendIcons: Record<string, React.ReactNode> = {
  replies: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4 20V10m6 10V4m6 16v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  status: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  deliverability: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 8v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15.7" r="1" fill="currentColor" />
    </svg>
  ),
};

export const workflowIcons: Record<string, React.ReactNode> = {
  "1": (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m19 19-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  "2": (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="10" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 19c1-3.3 3.3-5 5.5-5s4.5 1.7 5.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m16.5 8.5 1.6 1.6 3-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "3": (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m8.5 12 2.3 2.3L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "4": (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M19 15.5 19.7 17l1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7.7-1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
};

/** Kategorie-Icons fuer die Integrationsliste. Bewusst keine echten
 *  Markenlogos: die duerfen nur nach den jeweiligen Brand Guidelines verwendet
 *  werden und wuerden neben den eigenen Strichzeichnungen ohnehin fremd wirken. */
export const integrationIcons: Record<string, React.ReactNode> = {
  sending: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M21 3 10.5 13.5M21 3l-6.8 18-3.7-7.5L3 9.8 21 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.8 16c.6-1.7 1.8-2.5 3.2-2.5s2.6.8 3.2 2.5M14.5 9.5h4M14.5 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  sheet: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9.5h18M9.5 9.5V20M15 9.5V20" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M13 2 4 13.5h6L11 22l9-11.5h-6L13 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
};

export const agencyIcons: Record<string, React.ReactNode> = {
  workspaces: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="15" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="15" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  branding: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4 17.5 14.5 7 17 9.5 6.5 20H4v-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m13 8.5 2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  reportLink: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8.1 10.8 7.8-3.6M8.1 13.2l7.8 3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

export const featureIcons: Record<string, React.ReactNode> = {
  suppression: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  deliverability: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m8.5 12.5 2.3 2.3L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  campaigns: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="5.5" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 8.3 10.5 10.7M13.5 13.3 17 15.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

// ══════════════════════════════════════════════════════════════════════
// PIKTOGRAMME FUER DIE STARTSEITE, neu am 2026-08-31.
//
// Anlass ist die dritte Rueckmeldungsrunde des Mentors am CTS-Fall
// (Website_Business/Lehren/cts-cement/mentor.md): "For the metrics below the
// hero section add an icon for each" und "for the cards add icons in front of
// the title". Ohne sie ist ein Kennzahlenband eine Tabelle und eine
// Kartenreihe eine Liste.
//
// ZWEI REGELN, die fuer jedes Zeichen hier unten gelten:
//
// 1. GEPRUEFT BEI 26 PIXELN. Das ist die Groesse im Kennzahlenband, und es
//    ist die kleinste, in der eines dieser Zeichen vorkommt. Was bei 26 px
//    zu einem grauen Fleck zusammenlaeuft, wird vereinfacht, nicht verkleinert.
//    Praktisch heisst das: hoechstens vier Striche, keine Flaeche unter 2 px,
//    kein Detail naeher als 1,5 Einheiten am naechsten.
// 2. EIN STRICH FUER ALLE. 24er-Raster, Strichstaerke 1.6, runde Enden,
//    currentColor. Dieselben Werte wie die vier Saetze darueber -- ein
//    zweites Strichgewicht faellt in einer Reihe sofort auf.
// ══════════════════════════════════════════════════════════════════════

/** Gemeinsame Huelle. `className` kommt von der Aufrufstelle, damit dasselbe
 *  Zeichen im Kennzahlenband (26 px) und vor einer Kartenueberschrift (22 px)
 *  ohne zweite Fassung auskommt. */
function Ikon({ children, className = "h-[26px] w-[26px]" }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
    >
      {children}
    </svg>
  );
}

/** Die sechs Zeichen des Kennzahlenbands unter dem Helden. Schluessel sind die
 *  ids aus `dict.facts.items` -- wer dort umsortiert, dreht hier nichts mit. */
export const factIcons: Record<string, React.ReactNode> = {
  // Drei Kanaele: drei Bahnen, die auf denselben Punkt zulaufen.
  channels: (
    <Ikon>
      <path d="M3 5h7M3 12h7M3 19h7" />
      <path d="M10 5c5 0 6 7 11 7M10 12h11M10 19c5 0 6-7 11-7" opacity="0.45" />
      <circle cx="21" cy="12" r="1.6" />
    </Ikon>
  ),
  // Sechs Beruehrungen: sechs Marken auf einer Linie, die letzten zwei offen.
  touches: (
    <Ikon>
      <path d="M3 12h18" opacity="0.45" />
      <circle cx="4.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="8" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="11.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="12" r="1.6" />
      <circle cx="21.8" cy="12" r="1.6" />
    </Ikon>
  ),
  // Acht Texte aus zwoelf Feldern: ein Formular, aus dem Zeilen herauslaufen.
  texts: (
    <Ikon>
      <rect x="3" y="4" width="9" height="16" rx="2" />
      <path d="M6 8.5h3M6 12h3M6 15.5h3" opacity="0.55" />
      <path d="M15 8h6M15 12h6M15 16h4" />
    </Ikon>
  ),
  // Zwoelf Pruefungen: ein Schild mit Haken.
  checks: (
    <Ikon>
      <path d="M12 2.5 4 6v6c0 4.6 3.4 8 8 9.5 4.6-1.5 8-4.9 8-9.5V6l-8-3.5Z" />
      <path d="m8.6 12.2 2.4 2.4 4.4-4.8" />
    </Ikon>
  ),
  // Vier Stufen, eine Datenbasis: vier Kaesten auf einem Sockel.
  stages: (
    <Ikon>
      <rect x="3" y="5" width="4" height="4" rx="1" />
      <rect x="10" y="5" width="4" height="4" rx="1" />
      <rect x="17" y="5" width="4" height="4" rx="1" />
      <path d="M5 9v3h14V9" opacity="0.45" />
      <rect x="3" y="15" width="18" height="5" rx="1.6" />
    </Ikon>
  ),
  // Kein Aufschlag: eine Muenze mit durchgestrichenem Aufschlagspfeil.
  markup: (
    <Ikon>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M9.6 9.6h4.2a1.9 1.9 0 0 1 0 3.8h-3.6a1.9 1.9 0 0 0 0 3.8h4.2" opacity="0.85" />
      <path d="m4.8 19.2 14.4-14.4" />
    </Ikon>
  ),
};

/** Vor den drei Kanalkarten. */
export const channelIcons: Record<string, React.ReactNode> = {
  email: (
    <Ikon className="h-[22px] w-[22px]">
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="m3.8 7 8.2 6 8.2-6" />
    </Ikon>
  ),
  linkedin: (
    <Ikon className="h-[22px] w-[22px]">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.2v.1" />
      <path d="M11.5 17v-6.5M11.5 13.2c0-1.6 1-2.7 2.4-2.7s2.6 1 2.6 2.9V17" />
    </Ikon>
  ),
  phone: (
    <Ikon className="h-[22px] w-[22px]">
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C11.6 19.2 4.8 12.4 4.3 5.7A2 2 0 0 1 6.5 3.5Z" />
    </Ikon>
  ),
};

/** Vor den drei Karten im Abschnitt "Fuer wen". */
export const whoForIcons: Record<string, React.ReactNode> = {
  // Fuer euch selbst: eine Zielscheibe.
  self: (
    <Ikon className="h-[22px] w-[22px]">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" opacity="0.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </Ikon>
  ),
  // Fuer andere: mehrere Flaechen uebereinander.
  clients: (
    <Ikon className="h-[22px] w-[22px]">
      <rect x="7" y="3.5" width="13.5" height="13.5" rx="2.4" />
      <path d="M17 20.5H6.2A2.7 2.7 0 0 1 3.5 17.8V7" opacity="0.55" />
    </Ikon>
  ),
  // Neu im Kanal: ein Trieb.
  new: (
    <Ikon className="h-[22px] w-[22px]">
      <path d="M12 21v-7.5" />
      <path d="M12 13.5C12 9.6 15 6.5 19.5 6.5c0 4-2.8 7-7.5 7Z" />
      <path d="M11 15C8 15 5.5 12.8 5.5 9.8c2.9 0 5.5 2 5.5 5.2Z" opacity="0.55" />
    </Ikon>
  ),
};

/** Vor den Stufenueberschriften der Systemkarte. */
export const stageIcons: Record<string, React.ReactNode> = {
  find: (
    <Ikon className="h-[22px] w-[22px]">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m19 19-4.3-4.3" />
    </Ikon>
  ),
  contact: (
    <Ikon className="h-[22px] w-[22px]">
      <path d="M20.5 3.5 10 14" />
      <path d="M20.5 3.5 14 20.5 10.5 13.5 3.5 10l17-6.5Z" />
    </Ikon>
  ),
  win: (
    <Ikon className="h-[22px] w-[22px]">
      <path d="M4 19V9.5M10 19V4.5M16 19v-6M4 19h16" />
    </Ikon>
  ),
};

/** Der eine Satz ueber den Menschen vor dem Versand, und die Preiszeile. */
export const noteIcons: Record<string, React.ReactNode> = {
  human: (
    <Ikon className="h-[22px] w-[22px]">
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 20c1.1-3.9 3.6-5.9 6.5-5.9s5.4 2 6.5 5.9" />
    </Ikon>
  ),
  price: (
    <Ikon className="h-[22px] w-[22px]">
      <path d="M3.5 10.5 11 3h6.5a3 3 0 0 1 3 3V12l-7.5 7.5a2.2 2.2 0 0 1-3.1 0l-6.4-6.4a2.2 2.2 0 0 1 0-3.1Z" />
      <circle cx="16.4" cy="7.6" r="1.3" />
    </Ikon>
  ),
};
