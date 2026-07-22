// Zentrale Copy-/Daten-Quelle für die Homepage und die schlanke /start-Seite.
// Reine Inhalte, keine Logik -- damit beide Seiten dieselben Bausteine
// wiederverwenden können, ohne Text doppelt pflegen zu müssen.

export const navLinks = [
  { href: "#produkt", label: "Produkt" },
  { href: "#agenturen", label: "Für Agenturen" },
  { href: "#preise", label: "Preise" },
  { href: "#vergleich", label: "Vergleich" },
  { href: "#faq", label: "FAQ" },
];

// Agentur-first formuliert: pro Kunde/Workspace statt pro einzelnem Nutzer,
// plus ein expliziter fünfter Painpoint zum Multi-Kunden-Chaos.
export const painPoints = [
  {
    title: "Für jeden Kunden ein eigenes Tool-Chaos",
    body: "Ein Login für die Recherche, eins für den Versand, eine Tabelle fürs Reporting, pro Kunde von vorne. Am Monatsende wird der Report von Hand zusammengeschustert.",
  },
  {
    title: "Stunden im Research versenkt",
    body: "Google, LinkedIn, Impressum-Suche, E-Mail raten: Bevor die erste Mail für einen Kunden überhaupt raus ist, ist schon der halbe Tag weg.",
  },
  {
    title: "Vier Abos für einen Workflow",
    body: "Ein Tool für Kontakte, eins für Verifizierung, eins für Personalisierung, eins für den Versand, dazwischen CSV-Dateien von Hand exportiert, für jeden Kunden erneut.",
  },
  {
    title: "Bounce-Raten, die die Domain ruinieren",
    body: "Ungeprüfte Adressen killen die Zustellrate. Bei mehreren Kunden-Domains gleichzeitig merkt man's oft erst, wenn bei einem Kunden die Antwortquote plötzlich einbricht.",
  },
  {
    title: "Generische Mails, die jeder erkennt",
    body: "„Hi {{Firstname}}, ich hab gesehen dass {{Company}}...“ mit Textbaustein-Personalisierung performt schlechter als gar keine, und schadet der eigenen Kundenbindung.",
  },
  {
    title: "Info@ statt echtem Ansprechpartner",
    body: "Die Hälfte der „gefundenen“ Adressen landet in einem geteilten Postfach, das niemand konsequent liest. Cold Mail an info@ ist kaum besser als gar keine Mail.",
  },
];

// Vier-Saeulen-Rahmen (Geld/Umsatz/Zeit/Risiko): jede Karte mit genau einer
// belegten Zahl statt Fliesstext, gleiches Verdichtungsprinzip wie die
// heroStatTiles/StatTile-Kacheln weiter unten. Herleitung der Zahlen: 8 Min.
// manuelle Recherche/Lead, 45 EUR/Std., ~6,5 Ct. API-Kosten/Lead, 5 % Antwort-
// quote x 25 % positiv x 50 % -> Meeting -- dieselben Annahmen, die schon in
// der bestehenden Skalierungspotenzial-Rechnung auf der Seite offen gelegt sind.
export const pillars = [
  {
    title: "Geld sparen",
    stat: "≈ 65 €",
    statLabel: "API-Kosten für 1.000 qualifizierte Leads",
    body: "BYOK statt Tool-Pauschale: ihr zahlt eure echten API-Kosten, keine Aufschläge. Kein Bundle aus mehreren Abos für 270–700 $/Monat.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.5 9.2c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2-1.1 2-2.5 2-2.5.9-2.5 2 1.1 2 2.5 2 2.5-.9 2.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 6v1.4M12 16.6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Umsatz steigern",
    stat: "≈ 6",
    statLabel: "Meetings/Monat rechnerisch, bei 1.000 versendeten Mails",
    body: "Echte Personalisierung statt Textbausteine, jede Mail erreicht eine echte Person statt eine Rollen-Adresse.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 20V10m6 10V4m6 16v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Zeit sparen",
    stat: "≈ 133 Std.",
    statLabel: "manuelle Recherche gespart, pro 1.000 Leads",
    body: "Keine manuelle Suche, kein Adressraten, kein CSV-Jonglieren zwischen mehreren Tools.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Risiko sparen",
    stat: "3-fach",
    statLabel: "Verifizierung, Zustellbarkeits-Check und Blockliste eingebaut",
    body: "Schützt Sender-Reputation und Domain, bevor es zum Problem wird, nicht danach. EU-Hosting, verschlüsselte Zugangsdaten.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m8.5 12 2.3 2.3L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const steps = [
  { n: "1", title: "Suchen", body: "Nische und Ort eingeben, Frostbreaker findet automatisch passende Unternehmen, für jeden Kunden im eigenen Workspace." },
  { n: "2", title: "Finden", body: "Entscheider:innen mit Namen werden automatisch ermittelt, keine info@- oder office@-Treffer." },
  { n: "3", title: "Verifizieren", body: "Jede Adresse wird geprüft, bevor sie in eine Kampagne geht. Zusätzlich prüft Frostbreaker SPF, DKIM und DMARC eurer Sende-Domain, bevor überhaupt eine Kampagne live geht." },
  { n: "4", title: "Personalisieren & Versenden", body: "Eine KI schreibt pro Lead eine individuelle Icebreaker-Zeile. Sequenz, Zeitplan und Aktivierung laufen danach direkt in Frostbreaker, kein Tool-Wechsel mehr nötig." },
];

export const usps = [
  {
    title: "Alles in einem Tool, pro Kunde getrennt",
    body: "Suche, Anreicherung, Verifizierung, Personalisierung und Export laufen in einem einzigen Workflow, je Kunden-Workspace sauber getrennt. Kein CSV-Hin-und-Her zwischen vier Abos mehr.",
  },
  {
    title: "Individuelle KI-Zusammenfassung pro Lead",
    body: "Für jedes Unternehmen wird automatisch eine faktenbasierte Zusammenfassung erstellt, Grundlage für einen Icebreaker, der wirklich nach Recherche klingt. Ton, Regeln und verbotene Wörter sind vollständig einstellbar.",
    fact: "Persönliche E-Mails bekommen etwa doppelt so oft eine Antwort wie 08/15-Mails.",
    sub: "Fast niemand macht das von Hand, weil es zu lange dauert. Frostbreaker übernimmt das für euch, bei jeder einzelnen E-Mail.",
    source: "Woodpecker, Auswertung von über 20 Mio. E-Mails, 2026",
  },
  {
    title: "E-Mail-Verifizierung eingebaut",
    body: "Jede gefundene Adresse wird geprüft, bevor sie in eine Kampagne geht. Das schützt eure Sender-Reputation, ohne ein zusätzliches Tool.",
    fact: "Geprüfte E-Mail-Adressen kommen etwa doppelt so oft an wie ungeprüfte.",
    sub: "Zu viele falsche Adressen und eure Mails landen im Spam statt im Postfach.",
    source: "Branchen-Benchmarks E-Mail-Zustellbarkeit, 2026",
  },
  {
    title: "Bring Your Own Key: volle Kostentransparenz",
    body: "Ihr zahlt die tatsächlichen API-Kosten, keine versteckten Aufschläge. Im Dashboard seht ihr live, was eine Suche tatsächlich gekostet hat.",
  },
  {
    title: "DSGVO-bewusst gebaut",
    body: "EU-Hosting, verschlüsselte Speicherung von Zugangsdaten, Datensparsamkeit von Grund auf mitgedacht.",
  },
  {
    title: "Direkter Draht zum Team",
    body: "Kein Ticket-System. Ihr sprecht direkt mit den Leuten, die das Tool gebaut haben, inklusive echter Anpassungen auf Wunsch.",
  },
  {
    title: "Filtert nach echten Pain Points, nicht nur nach Branche und Ort",
    body: "Google-Bewertung und ob überhaupt eine Website existiert fließen direkt in die Suche ein. Der Icebreaker bezieht dieses Signal automatisch mit ein, zum Beispiel wenn ein Unternehmen seit Jahren keine aktuelle Bewertung oder gar keine Website hat, statt nur Firmenname und Branche zu kennen.",
  },
  {
    title: "Fertige Branchen-Playbooks statt eigenem Trial-and-Error",
    body: "Vorgefertigte Kombinationen aus Suchkriterien, Pain-Point-Filter und Personalisierungs-Hinweis für gängige Nischen, etwa Restaurants ohne aktuelle Website oder Handwerksbetriebe ohne Terminbuchung. Ein Klick statt tagelangem Herumprobieren mit Suchbegriffen.",
  },
];

export const integrations = [
  { name: "Instantly", note: "Vollständig natives Kampagnen-Management, kein CSV-Export nötig" },
  { name: "Smartlead", note: "CSV-Import" },
  { name: "Lemlist", note: "CSV-Import" },
  { name: "HubSpot", note: "CSV-Import" },
  { name: "Pipedrive", note: "CSV-Import" },
  { name: "Salesforce", note: "CSV-Import" },
  { name: "Excel / Sheets", note: "Excel-CSV" },
  { name: "Zapier", note: "geplant" },
];

export const trustBadges = [
  {
    title: "EU-Hosting",
    body: "Server in Frankfurt, keine Datenübertragung außerhalb der EU.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m8.5 12 2.3 2.3L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Verschlüsselte API-Keys",
    body: "Eure Zugangsdaten werden verschlüsselt gespeichert, nie im Klartext.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "BYOK-Kostenkontrolle",
    body: "Volle Transparenz über eure tatsächlichen API-Kosten, live im Dashboard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.5 9.2c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2-1.1 2-2.5 2-2.5.9-2.5 2 1.1 2 2.5 2 2.5-.9 2.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 6v1.4M12 16.6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const postSendFeatures = [
  {
    title: "Antworten lesen und direkt beantworten",
    body: "Jede eingehende Antwort landet mit vollem Text in Frostbreaker, KI ordnet sie sofort ein (interessiert, kein Interesse, Rückfrage). Direkt aus der App heraus antworten, kein Wechsel zu einem separaten Tool.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Umsatzbezogenes Dashboard statt nur Öffnungsrate",
    body: "Gebuchte Meetings, geschätzter Pipeline-Wert und Kosten pro Opportunity, direkt im selben Dashboard wie die Lead-Suche.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 20V10m6 10V4m6 16v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Lead-Status pro Kontakt, ohne separates CRM",
    body: "Kontaktiert, geantwortet, Meeting gebucht, Kunde geworden, alles direkt in der Leads-Tabelle nachvollziehbar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "SPF, DKIM, DMARC: geprüft, bevor ihr sendet",
    body: "Frostbreaker prüft eure Sende-Domain live per DNS-Abfrage und zeigt in Klartext, was zu tun ist, kein separates Tool nötig. Dazu Tagesvolumen pro Postfach auf einen Blick, mit Warnung bei riskant hohem Sendevolumen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 8v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="15.7" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export const agencyFeatures = [
  {
    title: "Ein Login, ein Workspace pro Kunde",
    body: "Leads, Kampagnen und Kontakte laufen pro Kunde sauber getrennt, ohne für jeden ein eigenes Abo abzuschließen. Workspaces lassen sich in Sekunden anlegen, umbenennen oder wieder entfernen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="14" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3" y="15" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="14" y="15" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Branding pro Kunden-Workspace",
    body: "Name, Logo und Akzentfarbe lassen sich je Workspace hinterlegen, damit das, was der Endkunde sieht, nach der Agentur aussieht, nicht nach einem fremden Tool im Hintergrund.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 17.5 14.5 7 17 9.5 6.5 20H4v-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m13 8.5 2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Teilbarer Report-Link, ohne Login für den Endkunden",
    body: "Ein Link pro Workspace zeigt aggregierte Kennzahlen im Look des jeweiligen Kunden, ganz ohne dass der einen eigenen Account braucht. Einzelne Kontaktdaten sieht der Endkunde dabei bewusst nicht.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="m8.1 10.8 7.8-3.6M8.1 13.2l7.8 3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

// Reale Zahl (33 Std. / $2,75), aus dem eigenen Account, bewusst mehrfach auf
// der Seite verwendet (chatarmin-Prinzip: dieselbe belegte Zahl öfter zeigen),
// hier als kompakte 3er-Kachel-Reihe statt eines einzelnen Fließtext-Absatzes.
export const heroStatTiles = [
  { value: "≈ 33 Std.", label: "manuelle Recherche gespart, pro Suche" },
  { value: "$2,75", label: "tatsächliche API-Kosten dafür" },
  { value: "1 Tool", label: "statt vier einzelne Abos" },
];

// Selfserve-Preise, identisch zu lib/plans.ts in der App (dort die
// technische Quelle der Wahrheit, hier bewusst kompakt fuer die Landingpage
// formuliert -- weniger Feature-Zeilen, gleiche Kernaussagen).
export const pricingPlans = [
  {
    id: "starter",
    label: "Starter",
    price: "99 €",
    priceNote: "/ Monat",
    features: [
      "1 Workspace",
      "Bis 5.000 qualifizierte Leads/Monat",
      "Nur personenbezogene E-Mails, kein info@",
      "Native Instantly-Kampagnen",
      "Zustellbarkeits-Check & Antwortverwaltung",
    ],
    highlighted: false,
  },
  {
    id: "agency",
    label: "Agentur",
    price: "199 €",
    priceNote: "/ Monat",
    features: [
      "Mehrere Workspaces, 1 pro Kunde",
      "Unlimitierte qualifizierte Leads",
      "Alles aus Starter",
      "Whitelabel-Reports mit eigenem Branding",
      "Priority Support",
    ],
    highlighted: true,
  },
];

// Realistisches Starter-Beispiel (1.000 qualifizierte Leads/Monat, deutlich
// unter dem 5.000er-Cap), gleiche Annahmen wie bei den pillars/dem
// Skalierungspotenzial-Block weiter unten -- nicht die "Vollgas"-Zahl,
// sondern eine Zahl, die ein einzelner Starter-Kunde realistisch erreicht.
export const starterExampleTiles = [
  { value: "≈ 133 Std.", label: "Recherchezeit gespart / Monat" },
  { value: "≈ 6.000 €", label: "Arbeitszeit-Gegenwert dafür" },
  { value: "≈ 204 €", label: "Gesamtkosten (Frostbreaker + Versand + APIs)" },
];

// Vergleichsspalte beschreibt jetzt den realen Alternativ-Stack einer Agentur
// mit mehreren Kunden, nicht den Stack einer einzelnen Person.
export const comparisonRows: [string, string, string][] = [
  ["Lokale Kleinunternehmen finden", "Ja, direkt über Google Places/Maps", "Meist nicht gelistet, da kein LinkedIn-Profil oder strukturierte Firmendaten"],
  ["Alles in einem Workflow", "Ja", "Nein, separates Recherche-Tool + Sende-Tool + eigenes Reporting"],
  ["Mehrere Kunden verwalten", "Eigener Workspace pro Kunde inklusive", "Meist ein separat bepreistes White-Label-Add-on"],
  ["Reporting für den Endkunden", "Teilbarer Report-Link im Look des Kunden", "Von Hand aus mehreren Tools zusammengebaut"],
  ["KI-Personalisierung pro Lead", "Ja, mit einstellbaren Regeln", "Teilweise, oft separates Tool nötig"],
  ["E-Mail-Verifizierung eingebaut", "Ja", "Separates Tool nötig"],
  ["EU-Hosting", "Ja", "Unterschiedlich, meist US-Anbieter"],
  ["Nur echte Ansprechpartner, kein info@", "Automatisch gefiltert", "Meist ungefiltert"],
  ["Preistransparenz", "Feste Preise, 14 Tage kostenlos testen", "Meist individuelles Angebot, keine Testphase"],
  ["Support", "Direkter Draht zum Gründerteam", "Ticket-System"],
];

export const faqs = [
  {
    q: "Ist das DSGVO-konform?",
    a: "Die App selbst ist datenschutzbewusst gebaut (EU-Hosting, Verschlüsselung, Datensparsamkeit). Wie ihr die gefundenen Kontakte anschreibt, unterliegt weiterhin den für euch geltenden Regeln zur Direktwerbung. Dazu beraten wir euch im Gespräch gerne konkret für eure Situation.",
  },
  {
    q: "Kann ich das als Agentur für mehrere Kunden gleichzeitig nutzen?",
    a: "Ja, dafür gibt es eigene Workspaces pro Kunde, inklusive eigenem Namen, Logo und Akzentfarbe. Für jeden Workspace lässt sich ein Report-Link teilen, der eurem Endkunden aggregierte Kennzahlen im eigenen Look zeigt, ganz ohne dass der einen eigenen Account braucht.",
  },
  {
    q: "Was kostet das?",
    a: "99 € im Monat für den Starter-Plan (1 Workspace, bis 5.000 qualifizierte Leads), 199 € für den Agentur-Plan (mehrere Workspaces, unlimitiert). 14 Tage kostenlos testen, danach monatlich kündbar. Dazu kommen eure eigenen, transparent im Dashboard einsehbaren API-Kosten.",
  },
  {
    q: "Kann ich jederzeit kündigen?",
    a: "Ja, monatlich, keine Mindestlaufzeit, keine Kündigungsfrist über den laufenden Monat hinaus.",
  },
  {
    q: "Woher weiß ich, dass eine gefundene E-Mail wirklich zu einer Person gehört?",
    a: "Frostbreaker filtert generische Adressen wie info@ oder office@ automatisch heraus. Nur E-Mails, die eindeutig einer Person zugeordnet sind, landen in eurer Leads-Liste.",
  },
  {
    q: "Brauche ich eigene API-Keys? Ist das kompliziert?",
    a: "Einmal in den Einstellungen hinterlegt, läuft alles automatisch. In der kostenlosen Testphase führt euch die App Schritt für Schritt durch das Setup.",
  },
  {
    q: "Wie unterscheidet sich das von Apollo/Hunter/Instantly?",
    a: "Die machen jeweils einen Teil des Workflows gut, mischen dabei aber meist personenbezogene und generische Adressen. Frostbreaker verbindet Suche, Anreicherung, Verifizierung und Personalisierung, filtert dabei automatisch auf echte Ansprechpartner, und bleibt auch nach dem Versand im Bild: Antworten lassen sich direkt in der App beantworten, das Dashboard zeigt gebuchte Meetings und Pipeline-Wert, nicht nur Öffnungsraten.",
  },
  {
    q: "Wie schnell bin ich startklar?",
    a: "Account anlegen, API-Keys eintragen, erste Suche starten, alles direkt selbst in der App. Wer das lieber einmal live gezeigt bekommt, kann stattdessen auch einen Call buchen.",
  },
  {
    q: "Woher kommen die Zahlen zum Skalierungspotenzial?",
    a: "Aus einer offen gelegten Beispielrechnung, nicht aus einer Zusicherung: Versandkapazität nach Instantly-Hypergrowth-Plan, Recherchezeit und Antwortquote nach branchenüblichen Annahmen. Die Rechnung samt Annahmen steht direkt neben den Zahlen.",
  },
  {
    q: "Was passiert mit meinen Daten, wenn ich kündige?",
    a: "Eure Daten werden nach Vertragsende gelöscht oder auf Wunsch zurückgegeben, geregelt im AVV. Es gibt keine automatische Weiternutzung nach Kündigung.",
  },
];
