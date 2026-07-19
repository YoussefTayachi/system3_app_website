// Zentrale Copy-/Daten-Quelle für die Homepage und die schlanke /start-Seite.
// Reine Inhalte, keine Logik -- damit beide Seiten dieselben Bausteine
// wiederverwenden können, ohne Text doppelt pflegen zu müssen.

export const navLinks = [
  { href: "#produkt", label: "Produkt" },
  { href: "#agenturen", label: "Für Agenturen" },
  { href: "#integrationen", label: "Integrationen" },
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
];

export const steps = [
  { n: "1", title: "Suchen", body: "Nische und Ort eingeben, Thaw findet automatisch passende Unternehmen, für jeden Kunden im eigenen Workspace." },
  { n: "2", title: "Finden", body: "Entscheider:innen und E-Mail-Adressen werden automatisch ermittelt." },
  { n: "3", title: "Verifizieren", body: "Jede Adresse wird geprüft, bevor sie in eine Kampagne geht." },
  { n: "4", title: "Personalisieren & Exportieren", body: "Eine KI schreibt pro Lead eine individuelle Icebreaker-Zeile, danach direkt exportierbar, auch im Instantly-fertigen Format." },
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
    sub: "Fast niemand macht das von Hand, weil es zu lange dauert. Thaw übernimmt das für euch, bei jeder einzelnen E-Mail.",
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
  { name: "Instantly", note: "CSV-Export + native Sync für Antworten & Kennzahlen" },
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
    title: "Antworten automatisch einordnen",
    body: "Jede eingehende Antwort wird per KI in interessiert, kein Interesse oder Rückfrage sortiert, direkt sichtbar am jeweiligen Kontakt.",
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
    title: "Zustellbarkeit im Blick, bevor es zum Problem wird",
    body: "Tagesvolumen pro Postfach auf einen Blick, mit Warnung bei riskant hohem Sendevolumen, besonders wichtig bei mehreren Kunden-Domains gleichzeitig.",
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

// Vergleichsspalte beschreibt jetzt den realen Alternativ-Stack einer Agentur
// mit mehreren Kunden, nicht den Stack einer einzelnen Person.
export const comparisonRows: [string, string, string][] = [
  ["Preismodell", "Nur tatsächliche API-Kosten (BYOK)", "Mehrere Pauschal-Abos, teils zusätzlich pro Kunden-Workspace"],
  ["Alles in einem Workflow", "Ja", "Nein, separates Recherche-Tool + Sende-Tool + eigenes Reporting"],
  ["Mehrere Kunden verwalten", "Eigener Workspace pro Kunde inklusive", "Meist ein separat bepreistes White-Label-Add-on"],
  ["Reporting für den Endkunden", "Teilbarer Report-Link im Look des Kunden", "Von Hand aus mehreren Tools zusammengebaut"],
  ["KI-Personalisierung pro Lead", "Ja, mit einstellbaren Regeln", "Teilweise, oft separates Tool nötig"],
  ["E-Mail-Verifizierung eingebaut", "Ja", "Separates Tool nötig"],
  ["EU-Hosting", "Ja", "Unterschiedlich, meist US-Anbieter"],
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
    q: "Was kostet das wirklich?",
    a: "Ihr zahlt eure eigenen API-Kosten, transparent im Dashboard sichtbar, plus eine feste Nutzungsgebühr, die wir im Gespräch für eure Größe festlegen. Keine versteckten Aufschläge auf die API-Nutzung.",
  },
  {
    q: "Brauche ich eigene API-Keys? Ist das kompliziert?",
    a: "Einmal in den Einstellungen hinterlegt, läuft alles automatisch. Wir zeigen es euch in der Demo in unter 5 Minuten.",
  },
  {
    q: "Wie unterscheidet sich das von Apollo/Hunter/Instantly?",
    a: "Die machen jeweils einen Teil des Workflows gut. Thaw verbindet Suche, Anreicherung, Verifizierung und Personalisierung, damit ihr nicht zwischen mehreren Tools hin- und herexportiert. Zusätzlich bleibt Thaw auch nach dem Versand im Bild: Antworten werden automatisch eingeordnet, und das Dashboard zeigt gebuchte Meetings und Pipeline-Wert, nicht nur Öffnungsraten.",
  },
  {
    q: "Wie schnell bin ich startklar?",
    a: "API-Keys eintragen, erste Suche starten, beides gemeinsam in einer Demo machbar.",
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
