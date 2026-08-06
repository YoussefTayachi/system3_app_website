import type { Lang } from "./lang";

// Zentrale Copy-/Daten-Quelle fuer die gesamte Website, zweisprachig (DE/EN).
// Icons sind sprachunabhaengig und leben in _icons.tsx, hier nur Text/Zahlen.
// Beide Sprachversionen muessen exakt dieselbe Form haben (type Dictionary =
// typeof de erzwingt das fuer en) -- gleiches Prinzip wie lib/i18n/dict.ts in
// der Haupt-App.

const de = {
  nav: {
    produkt: "Produkt",
    // Absolute Pfade mit Anker, damit die Eintraege auch von Unterseiten aus
    // funktionieren -- ein reines "#produkt" wuerde auf /funktionen ins Leere
    // zeigen.
    // Ziele am 2026-08-06 nachgezogen. Der Workflow-Abschnitt (#produkt) und
    // der Personalisierungs-Abschnitt sind von der Startseite verschwunden --
    // beides steckt jetzt im Rundgang bzw. auf /funktionen. Ein Nav-Eintrag,
    // der ins Leere zeigt, ist schlimmer als keiner.
    produktItems: [
      { label: "Alle Funktionen", href: "/funktionen" },
      { label: "Rundgang", href: "/#rundgang" },
      { label: "Drei Kanäle", href: "/#kanaele" },
      { label: "Personalisierung", href: "/funktionen#personalize" },
      { label: "Integrationen", href: "/#integrationen" },
    ],
    // "Funktionen" als eigenes Dropdown statt eines einzelnen Links: jeder
    // Eintrag zeigt direkt auf den passenden Anker auf /funktionen (siehe
    // scroll-mt-20-Sektionen dort, id = groups[].id). Absolute Pfade, deshalb
    // -- anders als bei produktItems -- keine Praefix-Anpassung pro Seite noetig.
    // Namen bewusst wie Produktnamen behandelt (unuebersetzt, identisch in
    // beiden Sprachversionen), nicht wie generische Fachbegriffe -- nach
    // Feedback, dass "Enrichment"/"Suppression List" fuer den Durchschnitts-
    // nutzer zu technisch klingen. "Personalisierung"/"Personalization"
    // bleibt bewusst uebersetzt (kein Produktname wie die anderen).
    funktionenItems: [
      { label: "Alle Funktionen", href: "/funktionen" },
      { label: "Lead Finder", href: "/funktionen#find" },
      { label: "Technologie-Filter", href: "/funktionen#tech" },
      { label: "Decision Maker Finder", href: "/funktionen#enrich" },
      { label: "Personalisierung", href: "/funktionen#personalize" },
      { label: "Email Copy Coach", href: "/funktionen#check" },
      { label: "Kampagnen", href: "/funktionen#send" },
      { label: "Sperrliste", href: "/funktionen#protect" },
      { label: "Pipeline", href: "/funktionen#pipeline" },
    ],
    agenturen: "Für Agenturen",
    preise: "Preise",
    vergleich: "Vergleich",
    faq: "FAQ",
    kontakt: "Kontakt",
    // Zweites, eigenstaendiges Angebot (Individualentwicklung) neben dem
    // Produkt. Bewusst ein kurzes Substantiv wie die uebrigen Nav-Punkte --
    // die einladende Frage steht als H1 auf der Zielseite, wo sie wirkt.
    custom: "Eigene Software",
  },
  // Eigene Agenturseite. Agenturen sind die wertvollere Zielgruppe (199 € statt
  // 99 €, mehrere Workspaces, laengere Bindung), bekamen auf der Startseite
  // aber eine Sektion unter zwanzig anderen.
  agencyPage: {
    metaTitle: "Für Agenturen: ein Login, ein Workspace pro Kunde",
    metaDescription:
      "Betreut mehrere Kunden in getrennten Workspaces, mit eigenem Branding und teilbaren Reports ohne Login. Ein Abo statt eines pro Kunde.",
    eyebrow: "Für Agenturen",
    title: "Ein Login. Ein Workspace pro Kunde. Kein neues Abo für jeden.",
    intro:
      "Pro Kunde ein Zugang, pro Kunde ein Abo, am Monatsende ein Report von Hand. Genau dafür ist der Agentur-Plan gebaut.",
    sections: [
      {
        id: "workspaces",
        eyebrow: "Getrennt",
        title: "Jeder Kunde in seinem eigenen Bereich",
        body: "Leads, Kampagnen und Sperrlisten laufen pro Kunde getrennt. Umschalten im selben Login, neue Kunden in Sekunden angelegt.",
        bullets: [
          "Unbegrenzte Workspaces im Plan enthalten",
          "Name, Logo und Akzentfarbe je Workspace",
          "Sperrliste pro Kunde, keine Überschneidungen",
        ],
      },
      {
        id: "report",
        eyebrow: "Vorzeigbar",
        title: "Der Report, den ihr weiterreichen könnt",
        body: "Ein Link zeigt die Kennzahlen im Look des Kunden, ganz ohne Account. Ersetzt die Tabelle, die sonst am Monatsende von Hand entsteht.",
        bullets: [
          "Kein Login für den Endkunden nötig",
          "Im Branding des jeweiligen Kunden",
          "Kontaktdaten bleiben bei euch",
        ],
      },
      {
        id: "costs",
        eyebrow: "Kalkulierbar",
        title: "Was ein Kunde euch kostet",
        body: "Der Plan ist fix, die Abfragekosten hängen am Volumen. Was ihr euren Kunden berechnet, bleibt eure Entscheidung.",
        bullets: [
          "199 € im Monat, unabhängig von der Kundenzahl",
          "≈ 65 € Abfragekosten je 1.000 Leads",
          "Kein Aufpreis pro angelegtem Workspace",
        ],
      },
    ],
    contrastTitle: "Was Multi-Kunden-Verwaltung sonst kostet",
    contrastBody:
      "Bei reinen Versand-Tools ist Multi-Kunden-Verwaltung meist ein Zusatzmodul mit eigenem Preis pro Kundenkonto, und deckt dann nur den Versand ab. Recherche und Reporting kommen obendrauf. Hier ist beides von Anfang an dabei.",
    ctaTitle: "Sprecht kurz mit uns über eure Kundenstruktur",
    ctaBody:
      "Beim Agentur-Plan richten wir Workspaces und Branding gemeinsam ein, deshalb steht am Anfang ein kurzes Gespräch statt einer Selbstanmeldung. 30 Minuten, keine Präsentation.",
    ctaLabel: "Gespräch buchen",
  },
  // Eigene Preisseite. "Preise" ist der meistgeklickte Navigationspunkt, landete
  // aber mitten in einer sehr langen Startseite zwischen zwei anderen Themen.
  pricingPage: {
    metaTitle: "Preise: 99 € oder 199 € im Monat, plus die tatsächlichen Abfragekosten",
    metaDescription:
      "Feste Monatspreise ohne Vertragsbindung, dazu die Abfragekosten zum Selbstkostenpreis. Eingerichtet wird gemeinsam im Gespräch, monatlich kündbar.",
    eyebrow: "Preise",
    title: "Alle Preise im Einzelnen",
    intro:
      "Ihr zahlt den Plan und die Abfragen, die eure Suchen tatsächlich auslösen. Sonst nichts. Keine Einrichtungsgebühr, keine Mindestlaufzeit, kein Credit-Paket, das am Monatsende verfällt.",
    breakdownTitle: "Woraus sich eure Rechnung zusammensetzt",
    breakdownIntro:
      "Damit niemand von der ersten Abrechnung überrascht wird, hier beide Posten offen nebeneinander.",
    breakdown: [
      {
        id: "plan",
        label: "Fester Monatspreis",
        value: "99 € oder 199 €",
        body: "Je nach Plan. Monatlich kündbar, keine Mindestlaufzeit, keine Einrichtungsgebühr.",
      },
      {
        id: "usage",
        label: "Abfragen, zum Selbstkostenpreis",
        value: "≈ 4 $ / 100 Firmen",
        body: "Rechnet ihr über eure eigenen Zugänge direkt ab. Was eine Suche gekostet hat, steht danach im Dashboard.",
      },
    ],
    breakdownExample:
      "Beispiel: 1.000 qualifizierte Leads im Monat auf dem Starter-Plan ergeben rund 99 € plus etwa 65 € Abfragekosten.",
    faqTitle: "Fragen zum Preis",
    faq: [
      { q: "Wie läuft der Einstieg ab?", a: "In dreißig Minuten schauen wir gemeinsam auf eure Kundenstruktur, richten den ersten Workspace ein und verbinden die API-Zugänge. Zahlungsdaten braucht es dafür nicht — die kommen erst, wenn ihr weitermachen wollt." },
      { q: "Was passiert, wenn ich nicht weitermache?", a: "Ohne aktives Abo pausiert der Account, gelöscht wird nichts. Ihr entscheidet, ob und mit welchem Plan ihr weitermacht." },
      { q: "Kann ich zwischen den Plänen wechseln?", a: "Ja, in beide Richtungen. Der Wechsel wirkt zum nächsten Abrechnungszeitraum, Workspaces und Leads bleiben erhalten." },
      { q: "Was zählt beim Starter-Plan gegen die 5.000 Leads?", a: "Nur qualifizierte Leads, also personenbezogene Adressen. Generische Adressen wie info@ zählen nicht mit, und eine Firma zählt einmal, auch wenn mehrere Personen gefunden werden." },
      { q: "Kann ich jederzeit kündigen?", a: "Ja, monatlich, ohne Frist über den laufenden Monat hinaus und ohne Mindestlaufzeit." },
      { q: "Was passiert mit meinen Daten, wenn ich kündige?", a: "Eure Daten werden nach Vertragsende gelöscht oder auf Wunsch zurückgegeben, geregelt im AVV. Es gibt keine Sperrfrist und keine Exportgebühr." },
    ],
  },
  // Eigene Funktionsseite: auf der Startseite standen die Detailfunktionen
  // verteilt ueber zwoelf Sektionen. Wer wissen will, was drinsteckt, findet
  // es jetzt an einem Ort, ohne die Startseite weiter zu verlaengern.
  featuresPage: {
    metaTitle: "Funktionen: von der Suche bis zur beantworteten Mail",
    metaDescription:
      "Alle Funktionen von Frostbreaker im Überblick: Lead-Suche über Google Maps, Firmendatenbank und Entscheider-Datenbank mit Technologie-Filter, Entscheider-Recherche, E-Mail-Verifizierung, KI-Personalisierung, Kampagnen, Zustellbarkeit und Sperrliste.",
    eyebrow: "Funktionen",
    title: "Von der Suche bis zur beantworteten Mail",
    intro:
      "Was in anderen Setups vier Abos und drei CSV-Exporte braucht, läuft hier in einem Durchgang. Diese Seite zeigt jeden Schritt einzeln.",
    groups: [
      {
        id: "find",
        eyebrow: "Finden",
        // "Drei Quellen" stand hier noch, als Prospeo (seit 2026-08-05) schon
        // der vierte Weg war.
        title: "Vier Quellen, eine Liste",
        body: "Lokale Betriebe über Google Maps, Unternehmen über Hunters Firmendatenbank, Entscheider samt verifizierter Adresse über Apollo, oder über Prospeo nach dem Anlass: wer gerade Stellen ausschreibt, wie viel Website-Traffic eine Firma hat und wie schnell er wächst. Playbooks bringen fertige Kombinationen aus Suchbegriff und Filtern mit, das Lead-Abo lässt eine Liste wöchentlich oder täglich von allein weiterwachsen.",
        bullets: [
          "Umkreissuche mit Radius in Metern",
          "Filter auf fehlende Website oder schwache Bewertung",
          "Branchen-Playbooks für gängige Nischen",
          "Lead-Abo: einmalig, wöchentlich oder täglich",
        ],
      },
      // Neue Gruppe am 2026-08-06. Der Technologie-Filter hatte auf der
      // Startseite einen eigenen Abschnitt und ist dort einer von vier kurzen
      // Karten gewichen. Fuer Interessenten mit klarer Nische (Shopify-Agentur,
      // Shopware-Dienstleister) ist er der eigentliche Kaufgrund -- die Tiefe
      // gehoert deshalb hierher und nicht ins Nichts.
      {
        id: "tech",
        eyebrow: "Eingrenzen",
        title: "Firmen an ihrer Technik finden, nicht an Stichwörtern",
        body: "Ein Stichwort trifft, worüber eine Firma redet. Die eingesetzte Technik zeigt, was sie betreibt: ein Shopify-Shop hat Shopify im Quelltext, egal was auf der Über-uns-Seite steht. Wer Shopify-Apps baut, Shopware-Migrationen macht oder Klaviyo einrichtet, verkauft nicht an eine Branche, sondern an eine Technik.",
        bullets: [
          "Über 10.000 Technologien im Katalog",
          "Shopsysteme, Zahlung, CMS und Vertriebs-Tools",
          "Auch die im DACH-Raum üblichen: Shopware, JTL, Oxid, PlentyMarkets",
          "Der Aufhänger für die erste Zeile kommt aus derselben Erkennung",
        ],
      },
      {
        id: "enrich",
        eyebrow: "Anreichern",
        title: "Die richtige Person statt der Zentrale",
        body: "Die Frostbreaker-Recherche ermittelt, wer den Betrieb tatsächlich führt, und gleicht das mit den Adressen der Firmendomain ab. Rollen-Adressen wie info@ oder office@ werden automatisch aussortiert und zählen nicht als Lead.",
        bullets: [
          "Name und Rolle der Entscheider:innen",
          "E-Mail-Verifizierung direkt in der Tabelle",
          "Telefonnummer aus dem öffentlichen Google-Eintrag",
          "Generische Adressen werden herausgefiltert",
        ],
      },
      {
        id: "personalize",
        eyebrow: "Personalisieren",
        title: "Der Icebreaker gehört euch",
        body: "Der System-Prompt ist vollständig editierbar, bis zu fünf eigene Vorlagen sind möglich. Ihr legt Datenquelle, Wortlimit und verbotene Wörter fest und testet an einer echten Firma, bevor irgendetwas gespeichert wird.",
        bullets: [
          "Firmenbeschreibung, Website-Text oder beides",
          "Bis zu fünf eigene Vorlagen",
          "Wortlimit und Sperrliste für Floskeln",
          "Live-Test vor dem Speichern",
        ],
      },
      {
        id: "check",
        eyebrow: "Prüfen",
        title: "Bevor die Mail rausgeht, nicht danach",
        body: "Direkt im Sequenz-Editor: Lesbarkeit im Hemingway-Stil, klassische Spam-Trigger-Wörter und ein Hinweis, wenn der Text zu sehr nach KI klingt. Alles läuft beim Tippen im Browser, ohne ein zusätzliches Tool und ohne dass eure Texte irgendwohin geschickt werden.",
        bullets: [
          "Lesbarkeits-Score inkl. Schulstufe, Deutsch und Englisch",
          "Spam-Trigger-Wörter direkt im Text markiert",
          "Erkennt liegen gebliebene Platzhalter wie „[Firma]“",
          "„Klingt nach KI“-Hinweis, klar als Heuristik gekennzeichnet",
        ],
      },
      {
        id: "send",
        eyebrow: "Versenden",
        title: "Kampagnen, Postfächer, Zustellbarkeit",
        body: "Sequenzen mit Zeitplan und Follow-ups laufen nativ im Tool. Postfächer lassen sich per Massen-Upload verbinden, Warmup und Tagesvolumen sind pro Postfach sichtbar. SPF, DKIM und DMARC werden live per DNS geprüft.",
        bullets: [
          "Sequenzen starten und pausieren",
          "Postfächer im Massen-Upload verbinden",
          "Warmup und Tagesvolumen im Blick",
          "SPF, DKIM und DMARC live geprüft",
        ],
      },
      {
        id: "protect",
        eyebrow: "Absichern",
        title: "Was nicht rausgehen darf, geht nicht raus",
        body: "Bestandskunden und Abmeldungen landen auf der Sperrliste und werden vor jedem Versand automatisch abgeglichen. API-Schlüssel liegen verschlüsselt gespeichert.",
        bullets: [
          "Sperrliste für Kontakte und ganze Domains",
          "Automatischer Abgleich vor jedem Versand",
          "API-Schlüssel verschlüsselt gespeichert",
        ],
      },
      {
        id: "pipeline",
        eyebrow: "Nachverfolgen",
        title: "Jede Antwort landet automatisch in der richtigen Spalte",
        body: "Ein Kanban-Board für Antworten statt einer Tabelle mit Status-Spalte: Kontakte per Drag & Drop von Neu bis Kunde verschieben. Jeder Kontakt hat eigene Deals mit Wert und Stufe, dazu Notizen, Anrufe und Aufgaben in einer Zeitleiste – damit bei vielen parallelen Gesprächen nichts durchrutscht. Antworten aus Instantly werden automatisch einsortiert.",
        bullets: [
          "Sechs Stufen von Neu bis Kunde, per Drag & Drop",
          "Antworten aus Instantly werden automatisch einsortiert",
          "Deals mit Wert und Stufe direkt am Kontakt",
          "Notizen, Anrufe und Aufgaben in einer Zeitleiste",
        ],
      },
    ],
    ctaTitle: "Am schnellsten versteht man es beim Ausprobieren",
    ctaBody: "Dreißig Minuten, gemeinsam eingerichtet, monatlich kündbar.",
  },
  // Die Seite argumentierte an prominenter Stelle gegen klassische
  // Firmendatenbanken, obwohl die App genau das auch kann (Corporate-Modus
  // ueber Hunter: Branche, Land, Mitarbeiterzahl). Wer B2B-Software an
  // Mittelstaendler verkauft, las "nur fuer Handwerker" und ging wieder.
  // Hiess bis zur Apollo-Integration "twoWays". Der Name ist mitgewandert,
  // weil ein Schluessel, der "zwei" heisst und drei Eintraege haelt, beim
  // naechsten Ausbau garantiert jemanden in die Irre fuehrt.
  // Die vier Beschaffungs-Themen, die am 2026-08-06 ihre eigenen Abschnitte
  // verloren haben (Technologie-Filter, lokale Betriebe, keine info@-Adressen,
  // Adresspruefung). Sie standen als vier volle Abschnitte zwischen Hero und
  // Produkt -- gemeinsam mit den Suchwegen waren das fuenf Abschnitte ueber
  // Beschaffung, also vier zu viel. Als kurze Karten unter den Suchwegen
  // bleiben sie belegbar, ohne die Gewichtung der Seite zu kippen.
  // Die Tiefe dazu gehoert auf /funktionen.
  sourcesExtra: {
    title: "Was mit jeder Suche mitläuft",
    linkLabel: "Alles im Einzelnen auf der Funktionsseite",
    items: [
      {
        id: "tech",
        label: "Technologie-Filter",
        title: "Firmen an ihrer Technik finden, nicht an Stichwörtern",
        body: "Ein Stichwort trifft, worüber eine Firma redet. Die eingesetzte Technik zeigt, was sie betreibt: ein Shopify-Shop hat Shopify im Quelltext, egal was auf der Über-uns-Seite steht.",
      },
      {
        id: "local",
        label: "Lokale Betriebe",
        title: "Auch die, die in keiner B2B-Datenbank stehen",
        body: "Klassische Datenbanken bauen auf LinkedIn-Profilen auf. Wer keins pflegt, existiert dort nicht. Über Google Places ist praktisch jeder Betrieb mit Adresse zu finden.",
      },
      {
        id: "person",
        label: "Keine info@-Adressen",
        title: "Jeder Lead ist eine Person, die man erreichen kann",
        body: "Adressen wie info@, office@ oder kontakt@ werden aussortiert. In die Lead-Liste kommt nur, was eindeutig einer Person zugeordnet ist.",
      },
      {
        id: "verify",
        label: "Adressprüfung",
        title: "Geprüft, bevor eine Adresse der Domain schadet",
        body: "Eine ungültige Adresse kostet nicht einen Lead, sie kostet Ruf. Die Prüfung läuft automatisch vor jedem Versand, ohne zweites Werkzeug.",
      },
    ],
  },
  searchModes: {
    // Seit dem 2026-08-05 vier statt drei Wege: Prospeo ist in der App live
    // (SEARCH_SOURCE_LABELS im App-Repo kennt maps, corporate, apollo,
    // prospeo). "Drei Wege" stand hier noch, als der vierte schon lief.
    eyebrow: "Woher die Leads kommen",
    title: "Vier Wege, ein Ergebnis: Menschen mit Namen und geprüfter Adresse",
    body: "Ihr entscheidet pro Suche, woher die Firmen kommen. Alle vier Wege münden in dieselbe Liste, dieselbe Anreicherung und denselben Versand.",
    modes: [
      {
        // Benannt nach dem, WAS gesucht wird (Ort, Firma, Person), mit dem
        // Anbieter dahinter. "Lokal/Corporate/Massen-Leads" beschrieb keinen
        // Unterschied: "Corporate" sagt nichts, und "Massen-Leads" klang billig,
        // obwohl es der hochwertigste Weg ist (Person samt gepruefter Adresse).
        id: "local",
        label: "Vor Ort",
        title: "Über Google Maps",
        body: "Der Suchbegriff ist ein freies Feld: Fahrschule, Yogastudio, Tierarztpraxis, Autohaus, Hotel. Wenn es auf der Karte einen Eintrag hat, findet Frostbreaker es, unabhängig davon, wie digital der Betrieb aufgestellt ist.",
        points: [
          "Freier Suchbegriff, keine feste Branchenliste",
          "Umkreis in Metern rund um jeden Ort",
          "Nur Betriebe ohne eigene Website",
          "Nur Betriebe unter einer Bewertungsschwelle",
          "Telefonnummer aus dem Karteneintrag",
        ],
      },
      {
        id: "corporate",
        label: "Firmen",
        title: "Über Hunters Firmendatenbank",
        body: "487 Branchen, 9 Länder und 8 Größenklassen lassen sich frei kombinieren, dazu Stadt und eigene Stichwörter. Die Firmensuche selbst kostet nichts, die Adressen kommen anschließend geprüft von Hunter.",
        points: [
          "487 Branchen von Software bis Zahnmedizin",
          "9 Länder in Europa und den USA",
          "8 Größenklassen von 1 bis über 10.000 Mitarbeitende",
          "Stadt, US-Bundesstaat und freie Stichwörter",
          "Adressen von Hunter geprüft, statt aus Namensmustern geraten",
        ],
      },
      {
        id: "apollo",
        label: "Entscheider",
        title: "Über Apollos Entscheider-Datenbank",
        body: "Firma und Entscheider samt bereits verifizierter E-Mail in einem Schritt. Die angefragte Zahl ist hier die Zahl der Leads, keine Schätzung: bei den anderen Wegen wird die Adresse nachträglich recherchiert.",
        points: [
          "Entscheider und verifizierte Adresse in einem Schritt",
          "Filter nach eingesetzter Technik, etwa Shopify",
          "11 Hierarchiestufen vom Inhaber bis zur Fachkraft",
          "Freie Jobtitel, Länder und Firmengröße",
          "Bis zu 1.000 Leads pro Suche",
        ],
      },
      {
        // Steht bewusst NACH Apollo, obwohl es derselbe Suchtyp ist: die
        // Reihenfolge folgt dem Umfang der Filter, und der Anlass-Filter
        // ("schreibt gerade Stellen aus") ist das staerkste Argument der
        // ganzen Sektion -- er gehoert ans Ende, wo er haengen bleibt.
        // Tarifhinweise stehen dabei, weil sie an Prospeos Tarifen haengen,
        // nicht an unseren: Technik und Stellen ab Starter, Traffic ab Pro
        // (siehe lib/prospeo-query.ts im App-Repo).
        id: "prospeo",
        label: "Anlass",
        title: "Über Prospeos Entscheider-Datenbank",
        body: "Wie Apollo — Firma, Entscheider und geprüfte Adresse in einem Lauf. Der Unterschied sind die Filter: wer gerade Stellen ausschreibt, wie viel Website-Traffic eine Firma hat und wie schnell er wächst.",
        points: [
          "Schreibt gerade Stellen aus für eine bestimmte Rolle",
          "Website-Traffic: Besuche pro Monat, Wachstum, Herkunftsländer",
          "Eingesetzte Technik, erkannt über Wappalyzer",
          "Umsatzklasse und Mitarbeiterzahl",
          "Trefferzahl vorab prüfbar, bevor Credits fließen",
        ],
      },
    ],
  },
  // Steht bewusst DIREKT hinter den vier Suchwegen: sobald dort "Hunter" und
  // "Apollo" stehen, denkt jeder Fachkundige sofort "dann nehme ich die doch
  // gleich selbst". Diesen Einwand erst in der FAQ zu beantworten, hiesse ihn
  // die halbe Seite lang unbeantwortet mitlaufen zu lassen.
  // Der Einwand "ich habe Apollo und Instantly doch schon" laesst sich nicht
  // mit Eigenschaften beantworten, sondern nur damit, wie ein Monat wirklich
  // aussieht. Deshalb hier keine Feature-Liste, sondern zwei Ablaeufe
  // nebeneinander: die Laenge der linken Spalte IST das Argument.
  //
  // Bewusst ohne Gesamtpreis im Text: die Tarife der Anbieter aendern sich,
  // eine Zahl hier waere in drei Monaten falsch. Die Preise stehen an genau
  // einer Stelle, im Preis-Abschnitt.
  dailyDiff: {
    eyebrow: "Der Unterschied im Alltag",
    title: "Derselbe Monat, einmal mit und einmal ohne",
    body: "Apollo findet Entscheider, Instantly verschickt zuverlässig. Beides bleibt. Die Frage ist, was zwischen den beiden passiert, und wie viel davon ihr von Hand macht.",
    manualBadge: "Handarbeit",
    before: {
      label: "Heute: Apollo + Instantly",
      countLabel: "Schritte",
      count: "8",
      manualLabel: "davon von Hand",
      manualCount: "4",
      steps: [
        { text: "In Apollo filtern und 250 Leads als CSV exportieren.", manual: false },
        { text: "Abmeldungen und Bestandskunden aus der CSV entfernen. Apollo kennt beides nicht, Instantly meldet es nicht zurück.", manual: true },
        { text: "Für jeden Lead eine persönliche Zeile schreiben, oder auf generische Platzhalter ausweichen, die schlechter abschneiden als gar keine Personalisierung.", manual: true },
        { text: "CSV bei Instantly hochladen und die Spalten zuordnen.", manual: false },
        { text: "Kampagne und Nachfass-Sequenz aufbauen.", manual: false },
        { text: "Antworten in Instantly lesen, Ergebnisse an anderer Stelle notieren.", manual: true },
        { text: "Zahlen für den Kunden aus zwei Tools in einer Tabelle zusammensetzen.", manual: true },
        { text: "Nächsten Monat von vorn. Apollo weiß nicht, wen ihr letzten Monat schon angeschrieben habt.", manual: false },
      ],
    },
    after: {
      label: "Mit Frostbreaker",
      countLabel: "Schritte",
      count: "4",
      manualLabel: "davon von Hand",
      manualCount: "0",
      steps: [
        "Eine Suche starten, mit denselben Filtern wie in Apollo, zusätzlich nach eingesetzter Technik.",
        "Läuft von allein durch: Sperrliste geprüft, Adresse verifiziert, persönliche Zeile pro Firma geschrieben.",
        "Kampagne direkt aus derselben Liste starten, ohne Export und ohne Spalten zuzuordnen.",
        "Antworten, Meetings und der Kundenreport stehen im selben Dashboard.",
      ],
    },
    note: "Frostbreaker ersetzt weder Apollo noch Instantly. Es ersetzt die Handarbeit dazwischen, und das CRM-Abo, das sonst als drittes dazukäme.",
  },
  // ══════════════════════════════════════════════════════════════════════
  // DIE VERGLEICHSTABELLE, neu am 2026-08-06. Ersetzt an Ort und Stelle den
  // Abschnitt #ergaenzt ("Dann ist das hier kein Ersatz").
  //
  // Zu jeder Zeile der Beleg, damit sie beim naechsten Nachpruefen nicht neu
  // recherchiert werden muss. "false" heisst durchgehend "gehoert nicht zum
  // Leistungsumfang", nicht "funktioniert schlecht" -- nur der erste Satz
  // ist belegbar, und nur er steht als "—" in der Tabelle.
  // ══════════════════════════════════════════════════════════════════════
  compare: {
    // Hier stand "Vier Abos machten das gestern. Eines macht es heute." Das
    // war die staerkste Zeile der Seite und leider nicht wahr: BYOK heisst,
    // dass Apollo, Instantly, Hunter und OpenAI BLEIBEN. Aus vier Abos werden
    // fuenf, und ein Agenturinhaber rechnet das in zwanzig Sekunden nach --
    // ausgerechnet auf einer Seite, die einen ganzen Abschnitt darauf
    // verwendet, keine Zahl zu schoenen.
    //
    // Die wahre Aussage verkauft besser als die falsche: wir bitten niemanden,
    // seinen Stack auszureissen, und wir nennen genau den Posten, der
    // tatsaechlich wegfaellt. Das CRM-Abo kostet je SITZPLATZ -- bei sechs
    // Leuten im Team ist das der groessere Betrag, nicht unserer.
    eyebrow: "Was bleibt, was wegfällt",
    title: "Behalte Apollo. Behalte Instantly. Kündige dein CRM.",
    body: "Jede Zeile ist ein Arbeitsschritt zwischen „ich kenne meine Nische“ und „ich habe einen Termin“. Die Frage ist nicht, welches Werkzeug das beste ist, sondern wer die Schritte macht, für die es keins gibt.",
    featureHeader: "Arbeitsschritt",
    tools: ["Apollo", "Hunter", "Instantly", "Pipedrive"],
    usLabel: "Frostbreaker",
    yes: "vorhanden",
    no: "gehört nicht zum Leistungsumfang",
    partial: "teilw.",
    onlyUs: "Gibt es sonst in keinem der vier.",
    alsoIn: "Auch in:",
    rows: [
      // Apollo und Hunter sind beides Entscheider- bzw. Firmendatenbanken --
      // das ist ihr Kerngeschaeft und steht so auf der Seite darueber.
      { id: "find", label: "Entscheider mit Namen und Rolle finden", tools: [true, true, false, false] },
      { id: "verify", label: "E-Mail-Adresse verifizieren", tools: [true, true, false, false] },
      // Kein Anbieter schreibt einen Aufhaenger aus recherchierten Fakten
      // ZUR FIRMA. Platzhalter-Serienbriefe ({{company}}) koennen alle -- die
      // Zeile ist deshalb bewusst eng formuliert.
      { id: "opener", label: "Einen eigenen Aufhänger je Lead aus recherchierten Fakten schreiben", tools: [false, false, false, false] },
      { id: "copycheck", label: "Den Text prüfen, bevor er rausgeht: Länge, Spam-Wörter, KI-Klang, nur ein CTA", tools: [false, false, false, false] },
      { id: "send", label: "Kampagne und Sequenz starten", tools: [false, false, true, false] },
      // Instantly waermt Postfaecher auf und zeigt Zustellbarkeit an, haelt
      // den Start aber nicht auf. "Erzwingen" ist der Unterschied, deshalb
      // teilw. statt vorhanden.
      { id: "gate", label: "Den Start aufhalten, wenn SPF, DKIM oder die Bounce-Quote nicht stimmen", tools: [false, false, "partial", false] },
      { id: "linkedin", label: "LinkedIn-Nachricht je Kontakt fertig einsetzen", tools: [false, false, false, false] },
      // Pipedrive hat Aktivitaeten und Anrufe, aber ohne den recherchierten
      // Kontext aus der Kaltakquise -- deshalb teilw.
      { id: "calls", label: "Anrufliste mit Nummer, Kontext und Fälligkeit", tools: [false, false, false, "partial"] },
      { id: "chain", label: "E-Mail, LinkedIn und Telefon als eine Kette mit genau einem nächsten Schritt", tools: [false, false, false, false] },
      // Instantly kann A/B testen und zeigt die Antwortquote je Fassung. Bis
      // zum TERMIN reicht die Zuordnung dort nicht -- genau darum teilw.,
      // nicht "—". Die Zeile waere sonst angreifbar.
      { id: "outcomes", label: "Eine Antwort ihrer Textfassung zuordnen, bis zum Termin statt bis zur Antwort", tools: [false, false, "partial", false] },
      { id: "crm", label: "Deals, Aufgaben und Notizen am Kontakt", tools: [false, false, false, true] },
    ],
    closing:
      "Apollo liefert Adressen. Instantly liefert Zustellung. Beide sagen dir, was passiert ist, keiner sagt dir warum. Frostbreaker schreibt den Text, verschickt ihn und sieht die Antwort darauf — auf deinen eigenen Zugängen, zu deinen Konditionen, ohne einen Cent Aufschlag.",
    ledgerLabel: "Die Rechnung, ehrlich",
    ledgerKeep: "Bleibt: Apollo, Hunter, Instantly, OpenAI — auf deinen Konten, zu deinen Konditionen. Wir schlagen nichts auf.",
    ledgerDrop: "Fällt weg: das CRM-Abo je Sitzplatz und die Handarbeit dazwischen. Bei sechs Leuten im Team ist das der größere Posten, nicht unserer.",
    footnote:
      "Stand August 2026, geprüft an den öffentlichen Leistungsbeschreibungen der Anbieter. „Teilweise“ heißt: vorhanden, aber nicht in dem Umfang, den die Zeile beschreibt. Ein Strich heißt „gehört nicht zum Leistungsumfang“, nicht „funktioniert schlecht“.",
  },
  // Wird seit dem 2026-08-06 nicht mehr gerendert: der Abschnitt #ergaenzt ist
  // der Vergleichstabelle gewichen. Der Inhalt bleibt bis Stufe 5 stehen, weil
  // die FAQ-Antwort auf "ich habe Apollo doch schon" daraus entsteht
  // (POSITIONIERUNG.md Abschnitt 7).
  worksWith: {
    eyebrow: "Ergänzt euren Stack",
    title: "Ihr nutzt Apollo, Hunter oder Instantly bereits? Dann ist das hier kein Ersatz",
    body: "Frostbreaker bringt keine eigene Datenbank und kein eigenes Postfach mit. Es läuft auf euren Zugängen, zum Selbstkostenpreis, und schließt die Lücken zwischen den Werkzeugen, die ihr ohnehin bezahlt.",
    // Die ehrliche Fassung: erst sagen, was die Werkzeuge gut koennen, dann
    // die Luecke benennen. Wer seine eigenen Tools schlechtgeredet bekommt,
    // glaubt dem Rest der Seite nicht mehr.
    rows: [
      {
        tool: "Apollo",
        good: "Liefert Entscheider samt verifizierter Adresse und den Technologie-Filter.",
        gap: "Schreibt keine individuelle Zeile pro Lead und weiß nichts von eurer Sperrliste oder davon, wer letzten Monat schon angeschrieben wurde.",
      },
      {
        tool: "Hunter",
        good: "Findet Adressen zu einer Domain und hat eine brauchbare Firmendatenbank.",
        gap: "Kennt keine lokalen Betriebe ohne Datenbank-Eintrag: Handwerk, Gastronomie und Praxen fehlen dort schlicht.",
      },
      {
        tool: "Instantly",
        good: "Verschickt zuverlässig, wärmt Postfächer auf und rotiert sie sauber.",
        gap: "Recherchiert nicht und personalisiert nicht. Was ihr hineingebt, entscheidet ihr woanders.",
      },
    ],
    bridgeLabel: "Was Frostbreaker dazwischen erledigt",
    bridge: [
      "Eine Suche statt drei Oberflächen, mit demselben Ergebnis in einer Liste",
      "Eine individuelle Eröffnungszeile pro Lead, aus der Recherche zur Firma",
      "Sperrliste und Bestandskunden werden vor jeder Suche und jedem Versand geprüft",
      "Antworten, Bounces und Meetings fließen in dasselbe Dashboard zurück",
      "Pro Kunde ein eigener Workspace, ohne für jeden ein neues Abo zu buchen",
    ],
    note: "Alle Abfragen laufen über eure eigenen Zugänge. Frostbreaker schlägt nichts auf die Abfragekosten auf.",
  },
  // Der Technologie-Filter ist das staerkste Argument fuer eine konkrete
  // Zielgruppe: er verwandelt "irgendwas mit E-Commerce" in eine belegbare
  // Liste. Bewusst eine eigene Sektion statt eines Stichpunkts oben, weil er
  // fuer Interessenten mit klarer Nische der Kaufgrund ist.
  techFilter: {
    eyebrow: "Technologie-Filter",
    title: "Finde Firmen an der Technik, die sie wirklich einsetzen",
    body: "Wer E-Commerce-Kunden sucht, tippt sonst „ecommerce\" als Stichwort ein und bekommt Agenturen, Blogs und Berater, die über E-Commerce schreiben. Der Technologie-Filter geht den umgekehrten Weg: Er erkennt am Shop selbst, welches System darunter läuft.",
    points: [
      {
        title: "Stichwort rät, Technik belegt",
        body: "Ein Stichwort trifft, worüber eine Firma spricht. Die eingesetzte Technik zeigt, was sie tatsächlich betreibt: ein Shopify-Shop hat Shopify im Quelltext, unabhängig davon, was auf der Über-uns-Seite steht.",
      },
      {
        title: "Der Aufhänger für die erste Zeile",
        body: "Wer weiß, dass ein Shop auf Shopware läuft und Klarna anbietet, schreibt eine erste Zeile, die nur zu dieser Firma passt. Genau daran erkennt ein Empfänger den Unterschied zwischen Serienmail und gemeinter Nachricht.",
      },
      {
        title: "Passt zu dem, was ihr verkauft",
        body: "Ihr baut Shopify-Apps, macht Shopware-Migrationen oder Klaviyo-Setups? Dann ist eure Zielgruppe keine Branche, sondern eine Technologie. Der Filter bildet genau das ab.",
      },
    ],
    scaleLabel: "Katalog-Umfang",
    scaleValue: "über 10.000 Technologien",
    scaleNote: "Von den großen Shopsystemen bis zu einzelnen Zahlungs- und Bewertungs-Tools. Auf der Oberfläche steht eine kuratierte Auswahl, die für E-Commerce zählt.",
    dachLabel: "Für den DACH-Markt",
    dachValue: "Shopware, JTL, Oxid, PlentyMarkets",
    dachNote: "Nicht nur die US-Systeme: die im deutschsprachigen Raum verbreiteten Shopsysteme sind genauso erfasst.",
  },
  // Der zweite Kanal. Stand bisher nirgends auf der Seite, obwohl er das
  // Argument gegen reine Versand-Tools ist: wer schon eines hat, kauft kein
  // zweites, aber er kauft den Kanal, den sein jetziges Werkzeug nicht kann.
  /**
   * Die drei Abschnitte, die Frostbreaker von einem Versandwerkzeug trennen.
   *
   * Alle drei beschreiben etwas, das die App TUT, nicht etwas, das sie
   * verspricht -- deshalb stehen ueberall Zahlen und Schwellen statt
   * Adjektiven. Wer eine davon aendert, muss sie in der App nachschlagen:
   * lib/campaign-readiness.ts, Migration 0074, lib/report/effectiveness.ts.
   */
  /**
   * Inhalte der drei neuen Nachbildungen (_guard-mockups.tsx).
   *
   * Die Zahlen sind erfunden, aber im Bereich echter Werte gewaehlt: eine
   * Bounce-Quote von 6,4 % liegt knapp ueber der Blocker-Schwelle von 5 %,
   * die 29 % ungeprueften Adressen knapp ueber der Hinweis-Schwelle von 25 %.
   * Wer die Schwellen in lib/campaign-readiness.ts aendert, sollte hier
   * nachziehen, sonst zeigt das Bild eine Regel, die es nicht mehr gibt.
   */
  guardMockups: {
    gate: {
      frameTitle: "Vor dem Start",
      blocked: "2 Sachen verhindern den Start",
      button: "Kampagne anlegen",
      checks: [
        {
          severity: "blocker",
          title: "SPF fehlt: send.muster-gmbh.de",
          body: "Ohne SPF kann der Empfänger nicht prüfen, ob die Mail wirklich von dieser Domain kommt. Sie landet im Spam.",
        },
        {
          severity: "blocker",
          title: "Bounce-Quote bei 6,4 % (32 von 500)",
          body: "Ab 5 % greifen die Schutzmechanismen der Empfänger-Provider, und der Ruf der Domain trägt das dauerhaft mit.",
        },
        {
          severity: "warning",
          title: "118 von 406 Adressen (29 %) wurden nie geprüft",
          body: "Ungeprüfte Adressen sind die häufigste Ursache für Bounces.",
        },
        {
          severity: "warning",
          title: "Erste Mail ist 164 Wörter lang (empfohlen: unter 90)",
          body: "Der personalisierte Aufhänger ist mitgezählt.",
        },
        { severity: "ok", title: "DKIM ist für alle Absender-Domains gesetzt", body: "" },
      ],
    },
    chain: {
      frameTitle: "Ein Lead, drei Kanäle",
      note: "Es entsteht immer nur ein nächster Schritt. Wer antwortet, fällt sofort aus der Kette.",
      steps: [
        {
          day: "Tag 0",
          title: "Die Mail geht raus",
          body: "Personalisierter Aufhänger, geprüfte Adresse, deine eigenen Postfächer.",
        },
        {
          day: "Tag 3, 7 und 12",
          title: "Drei Follow-ups laufen nach",
          body: "Dieselbe Sequenz, dieselben Postfächer. Wer antwortet, fällt sofort raus.",
        },
        {
          day: "Tag 15 · keine Antwort",
          title: "LinkedIn-Aufgabe erscheint",
          body: "Nur wo ein Profil hinterlegt ist. Landet in der LinkedIn-Liste, nicht in einer Tabelle.",
        },
        {
          day: "Tag 20 · immer noch still",
          title: "Der Anruf steht in der Anrufliste",
          body: "Nur wo eine Nummer da ist, und erst wenn die LinkedIn-Aufgabe erledigt ist.",
        },
      ],
    },
    effect: {
      frameTitle: "Wirkung · nach Lead-Liste",
      note: "Gemessen an Kontakten, nicht an Mails: eine Sequenz schickt mehrere Mails an dieselbe Person.",
      stats: [
        { label: "Angeschrieben", value: "2.840", strong: false },
        { label: "Geantwortet", value: "214", strong: false },
        { label: "Antwortquote", value: "7,5 %", strong: true },
      ],
      rows: [
        { label: "Shopify-Brands DACH", value: "11,4 % · 68/598", percent: 11.4 },
        { label: "SaaS Series A, US", value: "8,2 % · 61/744", percent: 8.2 },
        { label: "E-Com ab 1 Mio Umsatz", value: "6,6 % · 57/861", percent: 6.6 },
        { label: "Fintech DACH", value: "27 — zu wenig", percent: null },
        { label: "Agenturen AT", value: "21 — zu wenig", percent: null },
      ],
    },
    // Die Ansicht "Nach Text". Zahlen erfunden, aber an den echten Schwellen:
    // die 30er-Grenze fuer "zu wenig" ist dieselbe wie in der App, und die
    // Quoten liegen in dem Bereich, den das eigene Konto tatsaechlich zeigt.
    // Wichtig fuer spaetere Aenderungen: Fassung B fuehrt bei den TERMINEN,
    // nicht bei der Antwortquote -- genau darum geht es in der Warnung
    // darueber. Wer die Zahlen anfasst, muss diese Reihenfolge erhalten.
    copyOutcomes: {
      frameTitle: "Wirkung · nach Text",
      warning:
        "Die Antwortquote allein ist die falsche Zielgröße: eine Fassung kann führen und trotzdem nur Absagen sammeln. Die Spalte, die zählt, sind Termine.",
      campaign: "Kunde: Nordwind Coffee · Wiederverkäufer DACH",
      campaignCount: "964 Kontakte",
      bestLabel: "Beste Fassung",
      versionLabel: "Fassung",
      contactsWord: "Kontakte",
      repliesWord: "Antworten",
      rows: [
        {
          step: "Schritt 1",
          variant: "A",
          contacts: "482",
          percent: 6.0,
          replies: "29 · 6,0 %",
          repliesNum: "29",
          repliesPct: "6,0 %",
          meetings: "6 Termine",
          meetingsNum: "6",
          meetingsWord: "Termine",
          interested: "11 Interessiert",
          rejections: "8 Absagen",
          best: false,
        },
        {
          step: "Schritt 1",
          variant: "B",
          contacts: "482",
          percent: 10.6,
          replies: "51 · 10,6 %",
          repliesNum: "51",
          repliesPct: "10,6 %",
          meetings: "17 Termine",
          meetingsNum: "17",
          meetingsWord: "Termine",
          interested: "24 Interessiert",
          rejections: "6 Absagen",
          best: true,
        },
        {
          step: "Schritt 2",
          variant: "",
          contacts: "831",
          percent: 2.6,
          replies: "22 · 2,6 %",
          repliesNum: "22",
          repliesPct: "2,6 %",
          meetings: "4 Termine",
          meetingsNum: "4",
          meetingsWord: "Termine",
          interested: "7 Interessiert",
          rejections: "5 Absagen",
          best: false,
        },
        {
          step: "Schritt 3",
          variant: "",
          contacts: "26",
          percent: null,
          replies: "26 — zu wenig",
          repliesNum: "",
          repliesPct: "",
          meetings: "",
          meetingsNum: "",
          meetingsWord: "",
          interested: "— Interessiert",
          rejections: "— Absagen",
          best: false,
        },
      ],
      note: "Die Zuordnung kommt aus dem Versand selbst: eine Antwort trägt den Schritt der Mail, auf die sie antwortet. Unter 30 Kontakten steht keine Prozentzahl.",
      // Kurzfassung fuer den Hero: dort steht nur die Pointe (zwei Fassungen,
      // eine mit Terminen), und die braucht einen Satz, keine Methodik.
      noteShort: "Zwei Fassungen desselben Schritts. B hat weniger Absagen und drei Termine — das sieht man nur, wenn dasselbe Werkzeug den Text schreibt und die Antwort empfängt.",
    },
    // Die LinkedIn-Arbeitsliste. Der Aufhaenger ist bewusst derselbe Ton wie
    // die erzeugten Aufhaenger in der App: eine Beobachtung aus der Recherche,
    // keine Schmeichelei, kein "ich bewundere". Die Verbotswoerter-Liste im
    // AiAgentMockup nennt genau die Woerter, die hier nicht vorkommen duerfen.
    linkedin: {
      frameTitle: "LinkedIn · Nachricht steht",
      name: "Brian Marver",
      role: "Co-Founder & CEO · 5 Star Nutrition",
      template: "Vorlage: Standard ★",
      greeting: "Hi Brian,",
      hookLabel: "Aufhänger, je Kontakt erzeugt",
      hook: "Dass ihr den Versand 2024 auf drei Lager umgestellt habt und trotzdem bei Lieferung am Folgetag geblieben seid, ist der Grund für diese Nachricht.",
      pitch:
        "Ich baue Software, die Firmen wie 5 Star Nutrition die Arbeit abnimmt, die sonst zwischen fünf Werkzeugen liegen bleibt. Kein Pitch, ich wollte mich erst mal vernetzen.",
      signoff: "Beste Grüße, Youssef",
      buttons: ["Kopieren", "Profil öffnen ↗", "Als gesendet vermerken"],
      note: "Derselbe Aufhänger wie in der Mail, schon erzeugt und bezahlt. Gesendet wird von dir: LinkedIn hat keine Schnittstelle für Nachrichten, und ein Werkzeug, das trotzdem automatisch sendet, riskiert dein Konto.",
    },
  },
  guard: {
    eyebrow: "Bevor du sendest",
    title: "Das einzige Werkzeug für Kaltakquise, das dir Nein sagt",
    body:
      "Elf Prüfungen laufen, bevor eine Kampagne starten kann. Vier davon können sie aufhalten: fehlendes SPF oder DKIM, eine Bounce-Quote über fünf Prozent, eine Liste ohne sendbare Adresse. Das kostet dich nicht eine Kampagne, das kostet dich die Domain.",
    points: [
      {
        title: "Blocker und Hinweise sind zweierlei",
        body: "Ein Blocker ist etwas, das mit Sicherheit schiefgeht und dessen Schaden bleibt. Ein Hinweis macht schlechter, aber weder sicher noch dauerhaft. Diese Linie halten wir streng: eine Warnung, die auch mal nur eine Meinung ist, klickt man beim dritten Mal weg — und die echte gleich mit.",
      },
      {
        title: "Du kannst trotzdem starten",
        body: "Mit einem bewussten zweiten Klick, und du siehst vorher, was du in Kauf nimmst. Ein Torwart, an dem man nicht vorbeikommt, führt nur dazu, dass die Kampagne woanders angelegt wird.",
      },
      {
        title: "Danach schaut jemand weiter hin",
        body: "Täglich prüfen wir die DNS-Einträge jeder Absender-Domain. Klettert die Bounce-Quote im Betrieb über fünf Prozent, hält die App die Kampagne an und schreibt dir warum.",
      },
    ],
  },
  // Die drei Kanaele als EIN Abschnitt, neu am 2026-08-06. Zieht den frueheren
  // Telefon-Abschnitt (phone) hier herein: der stand als eigener Abschnitt
  // weit unten, und LinkedIn kam ueberhaupt nur als eine Zeile in der Kette
  // vor. Wenn der Hauptpunkt der App ist, dass man Entscheider ueber drei
  // Kanaele erreicht, muessen die drei nebeneinander und gleich breit stehen.
  //
  // Aufbau je Karte bewusst "Was die App tut" / "Was du tust": die einzige
  // ehrliche Art, den Unterschied zwischen den Kanaelen zu zeigen, ohne bei
  // LinkedIn und Telefon eine Automatik zu behaupten, die es nicht gibt und
  // aus gutem Grund nicht geben wird.
  channels: {
    eyebrow: "Drei Kanäle, ein Kontakt",
    title: "Nicht drei Werkzeuge nebeneinander, sondern ein Vorgang",
    body:
      "Der Unterschied zwischen den Kanälen ist nicht, wie gut sie sind, sondern wie viel davon von allein läuft. Bei zweien bereitet die App alles vor und du drückst den letzten Knopf — das ist Absicht, nicht Lücke.",
    appLabel: "Was die App tut",
    youLabel: "Was du tust",
    cards: [
      {
        id: "email",
        label: "E-Mail",
        title: "Sequenz mit eigenem Aufhänger je Kontakt",
        app: [
          "Adresse geprüft, bevor sie in die Kampagne kommt",
          "Ein Aufhänger je Kontakt aus der Recherche zur Firma",
          "Erstmail und drei Follow-ups über deine eigenen Postfächer",
        ],
        you: "Nichts. Dieser Kanal läuft von allein.",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        title: "Die Nachricht steht, bevor du LinkedIn öffnest",
        app: [
          "Dieselben Platzhalter wie in der Mail-Kampagne",
          "Derselbe Aufhänger, schon erzeugt und bezahlt",
          "Mehrere benannte Vorlagen, eine davon als Standard",
        ],
        you: "Kopieren, Profil öffnen, einfügen, senden.",
      },
      {
        id: "phone",
        label: "Telefon",
        title: "Vorbereitet statt kalt erwischt",
        app: [
          "Nummer aus dem öffentlichen Eintrag, kein Nachschlagen",
          "Rolle, Firmenzusammenfassung und Gesprächsnotiz daneben",
          "Nach Dringlichkeit sortiert: überfällig, heute, später",
        ],
        you: "Anrufen. Das Ergebnis bleibt am Kontakt.",
      },
    ],
    protectionLabel: "Warum LinkedIn und Telefon nicht von allein senden",
    protectionBody:
      "LinkedIn bietet für Nachrichten keine Schnittstelle. Jedes Werkzeug, das trotzdem automatisch sendet, steuert einen Browser fern, verstößt gegen die Nutzungsbedingungen und riskiert die Sperrung — bei einem verkauften Produkt also die Konten der Kunden. Wir bereiten alles vor, den Absendeknopf drückst du. Dieselbe Haltung wie beim Torwart: lieber ein Schritt von Hand als ein verbranntes Konto.",
    phoneNote:
      "Angerufen wird mit deinem eigenen Telefon: Frostbreaker ist keine Telefonanlage und rechnet keine Gesprächsminuten ab.",
  },
  // Eyebrow und Titel geaendert am 2026-08-06: der Abschnitt #kanaele direkt
  // darueber traegt jetzt "Drei Kanaele, ein Kontakt". Zwei benachbarte
  // Abschnitte, die beide mit "Drei Kanaele" anfangen, liest man als
  // Wiederholung und ueberspringt den zweiten. Dieser hier handelt nicht von
  // den Kanaelen, sondern von der Reihenfolge zwischen ihnen.
  chain: {
    eyebrow: "Die Kette",
    title: "Kein Lead bleibt liegen, und keiner bekommt zwei Aufgaben",
    body:
      "Instantly kennt dein Telefon nicht. Lemlist hat kein CRM. Pipedrive hat keine Kampagne. Hier ist es ein Vorgang, und er läuft, ohne dass du daran denken musst.",
    points: [
      {
        title: "Immer genau ein nächster Schritt",
        body: "Kein Lead bekommt gleichzeitig eine LinkedIn-Aufgabe und einen Anruf. Der Anruf entsteht erst, wenn die LinkedIn-Anfrage abgehakt ist.",
      },
      {
        title: "Wer antwortet, fällt sofort raus",
        body: "Die Kette gilt nur für Kontakte, die angeschrieben wurden und geschwiegen haben. Eine Antwort beendet sie im selben Moment.",
      },
      {
        title: "Nur wo es etwas zu tun gibt",
        body: "LinkedIn nur mit hinterlegtem Profil, Anruf nur mit Nummer. Eine Aufgabe ohne Adresse ist eine Recherche-Aufgabe, und die gehört nicht in eine Arbeitsliste.",
      },
    ],
  },
  honesty: {
    eyebrow: "Was wir dir nicht vormachen",
    title: "Eine Zahl, die nichts bedeutet, zeigen wir nicht",
    body:
      "Zwölf Mails und eine Antwort sind nicht „8,3 %“. Das sind zwölf Mails und eine Antwort. Unter dreißig angeschriebenen Kontakten schreiben wir „zu wenig“ statt einer Prozentzahl, und der Balken bleibt leer.",
    points: [
      {
        title: "Dieselbe Regel beim A/B-Test",
        body: "Kein Gewinner, solange nicht jede Fassung 50 Sendungen hinter sich hat und der Abstand einem Zufallstest standhält. Jedes andere Dashboard erklärt dir bei neun Antworten begeistert, Variante B habe deine Quote verdreifacht.",
      },
      {
        title: "Gemessen an Kontakten, nicht an Mails",
        body: "Eine Sequenz schickt drei bis vier Mails an dieselbe Person. Die eine Antwort darauf gehört nicht durch vier geteilt.",
      },
      {
        title: "Abwesenheitsnotizen zählen nicht",
        body: "Ein Autoresponder ist kein Mensch, der reagiert hat. Ihn mitzuzählen würde die Quote nach oben verfälschen — also genau in die Richtung, in die man sich gern täuschen lässt.",
      },
    ],
  },
  phone: {
    eyebrow: "Zweiter Kanal",
    title: "Wenn die Mail nicht reicht, steht die Nummer schon da",
    body: "Kaltakquise endet nicht bei der E-Mail. Wer nach zwei Nachfassmails nicht antwortet, ist oft trotzdem erreichbar, nur eben am Telefon. Frostbreaker plant diese Anrufe an derselben Stelle, an der der Lead entstanden ist.",
    points: [
      {
        title: "Vorbereitet statt kalt erwischt",
        body: "Jede Zeile trägt die Nummer, die Rolle der Person und die Firmenzusammenfassung aus der Recherche. Ihr wisst vor dem Wählen, mit wem ihr sprecht und warum.",
      },
      {
        title: "Nach Dringlichkeit sortiert",
        body: "Überfällig, heute, später. Ein zugesagter Rückruf geht nicht mehr unter, weil er in einer Tabelle stand, die niemand geöffnet hat.",
      },
      {
        title: "Das Ergebnis bleibt am Lead",
        body: "Gesprächsnotiz und Ausgang werden am Kontakt gespeichert und setzen den Status. Der nächste Schritt steht damit im selben Verlauf wie die verschickten Mails.",
      },
    ],
    note: "Gewählt wird mit dem eigenen Telefon: Frostbreaker ist keine Telefonanlage und rechnet keine Gesprächsminuten ab.",
  },
  // Die beiden Gruende, aus denen ein Interessent NICHT kauft: "zu kompliziert
  // fuer mich" und "rechtlich zu heikel". Beide sind in der App laengst
  // beantwortet, standen auf der Website aber nur als Nebensatz.
  safeStart: {
    eyebrow: "Ohne Vorwissen starten",
    title: "Genau die zwei Dinge, an denen Kaltakquise sonst scheitert, sind eingebaut",
    cards: [
      {
        id: "guide",
        label: "Anleitung",
        title: "Die Anleitung sitzt im Werkzeug, nicht in einem PDF",
        body: "Zehn Kapitel erklären den ganzen Ablauf: warum Postfächer zwei bis vier Wochen aufgewärmt werden müssen, was SPF, DKIM und DMARC im Klartext bedeuten, welcher Suchweg zu welcher Zielgruppe passt. Dazu eine Checkliste, die zeigt, was noch fehlt.",
        points: [
          "Warnung vor dem teuersten Anfängerfehler: sofort loslegen ohne Warmup",
          "Kaltakquise gehört nie auf die Hauptdomain, mit Begründung",
          "Jede Seite verlinkt in das passende Kapitel",
        ],
      },
      {
        id: "optout",
        label: "Rechtssicherheit",
        title: "Der Abmeldelink ist Teil der Kampagne, kein Nachgedanke",
        body: "Jede Kampagnenmail enthält einen Abmeldelink. Ein Klick trägt die Adresse dauerhaft in eure Sperrliste ein, und die wird vor jeder weiteren Suche und jeder weiteren Kampagne abgeglichen. Ihr müsst dafür nichts pflegen und nichts nachtragen.",
        points: [
          "Abgemeldete Empfänger tauchen in keiner neuen Suche mehr auf",
          "Bestandskunden lassen sich per CSV auf einmal ausschließen",
          "Der Abgleich läuft vor dem Versand, nicht danach",
        ],
      },
    ],
  },
  // Nachbildungen echter App-Screens. Bewusst keine Screenshots aus dem
  // laufenden Betrieb: dort stehen Namen realer Personen mit Rolle und
  // Arbeitgeber, die ohne Einwilligung nicht ins Marketing gehoeren. Die
  // Firmen hier sind erfunden und dieselben wie in den uebrigen Mockups.
  appMockups: {
    // Beispielansicht nach einigen Monaten Betrieb, kein echter Account. Die
    // Zahlen sind bewusst untereinander stimmig gerechnet: 2.430 Kontakte zu
    // denselben rund 1,5 Cent ergeben die 36,90 $, und 15 Meetings aus 2.430
    // versendeten Mails entsprechen der Quote, mit der die Seite an anderer
    // Stelle rechnet. So wirkt die Ansicht motivierend, ohne der eigenen
    // Kostenaussage zu widersprechen.
    dashboard: {
      title: "Dashboard",
      subtitle: "Überblick über deine Lead-Pipeline",
      sampleBadge: "Beispielansicht",
      stats: [
        { label: "Suchen", value: "62" },
        { label: "Firmen", value: "890" },
        { label: "Kontakte", value: "2.430" },
        { label: "Mit E-Mail", value: "1.612" },
        { label: "Antworten", value: "168", accent: true },
        { label: "Meetings", value: "15", accent: true },
      ],
      costLabel: "Abfragekosten gesamt",
      costValue: "36,90 $",
      savings: {
        strong: "≈ 324 Stunden",
        rest: "manuelle Recherche gespart",
        cost: "entspricht rund 14.500 € Personalkosten",
      },
      chartTitle: "Neue Leads und Antworten",
      chartRange: "letzte 14 Tage",
      chartLegend: ["Neue Leads", "Antworten"],
      // Paarweise: Balkenhoehe Leads, darin Anteil Antworten (jeweils 0-100).
      chartBars: [
        [34, 8], [46, 11], [41, 9], [58, 16], [52, 13], [67, 19], [61, 17],
        [74, 22], [69, 20], [83, 27], [78, 24], [91, 31], [86, 29], [100, 36],
      ],
    },
    // Bewusst Fahrschule statt eines Handwerksbetriebs: die Handwerker-Nische
    // taucht in den uebrigen Mockups schon auf, und der freie Suchbegriff soll
    // sichtbar machen, dass hier nach praktisch allem gesucht werden kann.
    search: {
      title: "Neue Suche",
      subtitle: "Suchbegriff und Ort eingeben, der Rest läuft automatisch.",
      playbookLabel: "Branchen-Playbook",
      playbookValue: "Kein Playbook, frei eingestellt",
      // Diese Liste steuert die Reiterleiste der Suchmaske auf der Startseite.
      // Vierter Reiter seit dem 2026-08-06: die Karten darueber nennen vier
      // Suchwege, das Bild zeigte weiter drei.
      tabs: ["Vor Ort (Maps)", "Firmen (Hunter)", "Entscheider (Apollo)", "Anlass (Prospeo)"],
      fields: [
        { label: "Suchbegriff", value: "Fahrschule" },
        { label: "Ort", value: "Hamburg" },
        { label: "Umkreis", value: "10.000 m" },
      ],
      filterLabel: "Zielgruppen-Filter",
      filters: ["Ohne eigene Website", "Bewertung unter 4,0"],
      subscriptionLabel: "Lead-Abo",
      subscriptionValue: "Wöchentlich",
      subscriptionNote: "Neue Treffer landen automatisch in derselben Liste.",
      cta: "Suche starten",
    },
    corporateSearch: {
      title: "Neue Suche",
      subtitle: "Branche, Größe und Land kombinieren.",
      // Vierter Reiter seit dem 2026-08-06: die Karten darueber nennen vier
      // Suchwege, das Bild zeigte weiter drei.
      tabs: ["Vor Ort (Maps)", "Firmen (Hunter)", "Entscheider (Apollo)", "Anlass (Prospeo)"],
      fields: [
        { label: "Branche", value: "Marketing Services" },
        { label: "Land", value: "Deutschland" },
        { label: "Stadt", value: "Berlin" },
        { label: "Mitarbeitende", value: "11–50" },
      ],
      keywordsLabel: "Stichwörter",
      keywordsValue: "Performance, E-Commerce",
      noteLabel: "Was zurückkommt",
      noteValue: "Firmen aus der Datenbank, Adressen anschließend von Hunter geprüft",
      cta: "Suche starten",
    },
    apolloSearch: {
      title: "Neue Suche",
      subtitle: "Zielgruppe, Entscheider und Technik in einem Schritt.",
      // Vierter Reiter seit dem 2026-08-06: die Karten darueber nennen vier
      // Suchwege, das Bild zeigte weiter drei.
      tabs: ["Vor Ort (Maps)", "Firmen (Hunter)", "Entscheider (Apollo)", "Anlass (Prospeo)"],
      fields: [
        { label: "Zielgruppe", value: "Nahrungsergänzung" },
        { label: "Firmengröße", value: "11–50" },
        { label: "Ziel: Leads mit E-Mail", value: "250" },
      ],
      titlesLabel: "Entscheider-Titel",
      titlesValue: "Founder, Geschäftsführer, E-Commerce Manager",
      chipsLabel: "Hierarchiestufe",
      chips: ["Inhaber", "Founder", "C-Level", "Geschäftsführung"],
      techLabel: "Eingesetzte Technik",
      techChips: ["Shopify", "Klaviyo"],
      noteLabel: "Was zurückkommt",
      noteValue: "Firma, Entscheider und verifizierte E-Mail in einem Schritt",
      cta: "Suche starten",
    },
    // Gruppierung und Bezeichnungen aus apps/web/app/calls/ der App.
    // Firmen und Nummern erfunden, wie in allen Mockups hier.
    calls: {
      title: "Anrufliste",
      subtitle: "Alles Fällige über alle Leads, mit Nummer und Vorbereitung.",
      noteLabel: "Notiz zur Planung",
      groups: [
        {
          label: "Überfällig",
          overdue: true,
          count: "1",
          rows: [
            {
              name: "Schreinerei Huber",
              role: "Markus Huber · Inhaber",
              phone: "+43 662 884213",
              note: "Hat auf die zweite Mail geantwortet, wollte Rückruf am Vormittag.",
            },
          ],
        },
        {
          label: "Heute",
          overdue: false,
          count: "2",
          rows: [
            {
              name: "Zahnarztpraxis Dr. Berger",
              role: "Julia Berger · Praxisinhaberin",
              phone: "+43 1 5324110",
              note: "Termin bestätigt, Angebot zur Terminvergabe vorbereiten.",
            },
            {
              name: "Café Sonnenblick",
              role: "Elena Roth · Geschäftsführung",
              phone: "+43 316 771902",
              note: "Keine Website, Interesse an Online-Bestellung geäußert.",
            },
          ],
        },
      ],
    },
    // Die Bezeichnungen stammen 1:1 aus lib/technologies.ts der App. Bewusst
    // eine Auswahl statt aller Einträge: die Kachelwand soll überzeugen, nicht
    // erschlagen. Die Zahl darunter nennt den vollen Umfang.
    techFilter: {
      title: "Eingesetzte Technik",
      subtitle: "Wähle die Systeme, an denen sich deine Zielgruppe erkennen lässt.",
      badge: "Anklickbar",
      or: "oder",
      groups: [
        {
          label: "Shopsysteme",
          items: [
            { id: "shopify", label: "Shopify" },
            { id: "shopware", label: "Shopware" },
            { id: "woocommerce", label: "WooCommerce" },
            { id: "magento", label: "Magento" },
            { id: "jtl", label: "JTL-Shop" },
            { id: "oxid", label: "Oxid eShop" },
            { id: "plentymarkets", label: "PlentyMarkets" },
            { id: "prestashop", label: "PrestaShop" },
          ],
        },
        {
          label: "Tools, Zahlung & CMS",
          items: [
            { id: "klaviyo", label: "Klaviyo" },
            { id: "gorgias", label: "Gorgias" },
            { id: "klarna", label: "Klarna" },
            { id: "recharge", label: "Recharge" },
            { id: "trustedshops", label: "Trusted Shops" },
            { id: "hubspot", label: "HubSpot" },
            { id: "webflow", label: "Webflow" },
          ],
        },
        {
          label: "Vertrieb & Lead-Gen",
          items: [
            { id: "apollo_io", label: "Apollo.io" },
            { id: "outreach", label: "Outreach.io" },
            { id: "salesloft", label: "SalesLoft" },
            { id: "lemlist_tool", label: "lemlist" },
            { id: "zoominfo", label: "ZoomInfo" },
          ],
        },
      ],
      resultLabel: "Deine Zielgruppe",
      resultEmpty: "Wähle oben mindestens ein System aus.",
      result: (list: string) => `Firmen, die nachweislich ${list} einsetzen.`,
      // Bewusst ohne "Shopsystem": seit die Vertriebs-Tools waehlbar sind,
      // waere der Satz bei einer Auswahl wie Apollo.io + Outreach.io falsch.
      orNote: "Mehrfachauswahl gilt als ODER: eine Suche deckt damit mehrere Systeme auf einmal ab, statt eine Suche pro System zu brauchen.",
    },
    leads: {
      title: "Alle Leads",
      toolbar: { count: "97 Firmen · 259 Kontakte", verify: "E-Mails verifizieren", export: "In Kampagne übernehmen", csv: "Excel-CSV" },
      rows: [
        { name: "Schreinerei Huber", domain: "schreinerei-huber.at", contacts: "3 Kontakte", withMail: "3 mit E-Mail", color: "#0EA5E9" },
        { name: "Zahnarztpraxis Dr. Berger", domain: "zahnarzt-berger.at", contacts: "2 Kontakte", withMail: "2 mit E-Mail", color: "#8B5CF6" },
        { name: "Café Sonnenblick", domain: "cafe-sonnenblick.at", contacts: "1 Kontakt", withMail: "1 mit E-Mail", color: "#F59E0B" },
        { name: "Friseur Kaiser", domain: "friseur-kaiser.at", contacts: "2 Kontakte", withMail: "1 mit E-Mail", color: "#10B981" },
      ],
    },
    leadDetail: {
      label: "Aufgeklappter Lead",
      person: "Markus Huber",
      role: "Inhaber",
      company: "Schreinerei Huber",
      emailLabel: "E-Mail",
      email: "m.huber@schreinerei-huber.at",
      emailBadge: "verifiziert",
      phoneLabel: "Telefon",
      phone: "+43 1 5550142",
      phoneBadge: "aus Google-Eintrag",
      icebreakerLabel: "Icebreaker",
      icebreaker:
        "Fünf Mitarbeitende, eigene Werkstatt, aber Terminanfragen laufen weiter über das Kontaktformular.",
    },
    // Der Report aus Sicht des Endkunden: eigener Name, eigene Akzentfarbe,
    // kein Login noetig. Fuer eine Agentur ist genau das der Kaufgrund, und
    // bisher gab es dafuer kein Bild.
    report: {
      badge: "Ansicht für den Endkunden",
      client: "Muster GmbH",
      period: "Bericht · Oktober",
      stats: [
        { label: "Angeschrieben", value: "1.240" },
        { label: "Antworten", value: "86" },
        { label: "Meetings", value: "9" },
      ],
      progressLabel: "Ziel für den Monat",
      progressValue: "9 von 10 Meetings",
      progressPercent: 90,
      urlLabel: "Teilbarer Link, ohne Login",
      url: "report.frostbreaker.app/muster-gmbh",
      note: "Einzelne Kontaktdaten sieht der Endkunde bewusst nicht.",
    },
    mailboxes: {
      title: "Postfächer",
      subtitle: "Warmup und Tagesvolumen pro Postfach",
      rows: [
        { address: "markus@eure-agentur.at", state: "Warmup aktiv", volume: "28 / 50", ok: true },
        { address: "office@eure-agentur.at", state: "Warmup aktiv", volume: "42 / 50", ok: true },
        { address: "hallo@eure-agentur.de", state: "Aufwärmphase", volume: "12 / 50", ok: false },
      ],
    },
    // Vorher/Nachher statt eines einzelnen Beispiels: ein einzelner Satz mit
    // einem Treffer beweist nicht, dass das Werkzeug etwas bringt -- ein
    // erkennbar schwacher KI-Entwurf mit vielen echten Fundstellen daneben
    // gegen eine kurze, konkrete Mail mit sauberem Befund schon. Die
    // Firma "Schreinerei Huber" ist dieselbe wie im Lead-Detail-Mockup, damit
    // die Seite eine durchgehende Beispielwelt bleibt statt neue Namen ohne
    // Zusammenhang einzufuehren. Alle Markierungen sind Phrasen, die die
    // echte Pruefung auch tatsaechlich findet (siehe lib/email-quality in der
    // App), keine erfundenen Beispiele.
    copyCheck: {
      title: "Copy Check",
      subtitle: "Lesbarkeit, Spam-Risiko und KI-Klang direkt am Text",
      badLabel: "Unbearbeiteter Entwurf",
      goodLabel: "Nach dem Copy Check",
      bad: {
        subject: [
          { text: "Kostenlos", mark: "warning" },
          { text: ": " },
          { text: "Jetzt handeln", mark: "warning" },
          { text: " für mehr Anfragen" },
          { text: "!!!", mark: "warning" },
        ],
        body: [
          { text: "In der heutigen schnelllebigen Welt", mark: "warning" },
          { text: " ist es für Handwerksbetriebe " },
          { text: "eigentlich", mark: "info" },
          { text: " wichtiger denn je, online sichtbar zu sein, und genau dabei kann Ihnen unser Tool " },
          { text: "garantiert", mark: "warning" },
          { text: " helfen, mehr Anfragen zu bekommen, ohne dass Sie dafür selbst noch etwas tun müssen.\n\nDie komplette Kampagne " },
          { text: "wird dabei vollautomatisch für Sie erstellt", mark: "warning" },
          { text: ". " },
          { text: "Nur heute", mark: "warning" },
          { text: " gibt es das Angebot.\n\nMit freundlichen Grüßen,\n" },
          { text: "[Name einfügen]", mark: "danger" },
        ],
        stats: [
          { label: "Lesbarkeit", value: "Schwer" },
          { label: "Spam-Risiko", value: "Hoch" },
          { label: "KI-Klang", value: "Auffällig" },
        ],
      },
      good: {
        subject: [{ text: "Kurze Frage zu eurem Fuhrpark" }],
        body: [
          {
            text:
              "Hallo Markus,\n\nich habe gesehen, dass ihr bei der Schreinerei Huber aktuell drei Fahrzeuge im Einsatz habt. Wir liefern Ersatzteile innerhalb von 24 Stunden, meist günstiger als der Vertragshändler.\n\nLohnt sich ein kurzer Call nächste Woche?\n\nViele Grüße,\nJulia",
          },
        ],
        stats: [
          { label: "Lesbarkeit", value: "Leicht" },
          { label: "Spam-Risiko", value: "Gering" },
          { label: "KI-Klang", value: "Unauffällig" },
        ],
      },
      note: "Läuft beim Tippen mit, ganz ohne zusätzliches Tool.",
    },
    // Dieselben Personen/Firmen wie in heroIllustration.replies, damit die
    // Beispielwelt der Seite zusammenhaengend bleibt -- erzaehlt nebenbei eine
    // kleine Fortschrittsgeschichte ueber die Spalten hinweg. Nur vier von
    // sechs echten Stufen gezeigt (Platzgruende in der Spaltenbreite), Farben
    // und Reihenfolge stimmen mit lib/crm/stages.ts (STAGE_DOT_CLS) in der App
    // ueberein. Karten zeigen nur, was das echte Board auch zeigt (Avatar,
    // Name, Firma) -- keine erfundenen Deal-Werte pro Spalte.
    pipeline: {
      title: "Pipeline",
      subtitle: "Antworten per Drag & Drop von Neu bis Kunde verschieben",
      columns: [
        { stage: "new", label: "Neu", cards: [{ initial: "S", name: "Sophie Wagner", company: "Fitnessstudio Wagner" }] },
        { stage: "contacted", label: "Kontaktiert", cards: [{ initial: "E", name: "Elena Roth", company: "Café Sonnenblick" }] },
        { stage: "replied", label: "Geantwortet", cards: [{ initial: "J", name: "Julia Berger", company: "Zahnarztpraxis Berger" }] },
        { stage: "customer", label: "Kunde", cards: [{ initial: "M", name: "Markus Huber", company: "Schreinerei Huber" }] },
      ],
      // Begriffe 1:1 aus der echten App uebernommen (lib/i18n/dict.ts:
      // dealsHeading, dealsEmpty, timelineHeading, notePlaceholder, noteSave),
      // keine erfundene Terminologie -- zeigt, dass hinter der Karte ein
      // Kontakt mit Deals, Verlauf und Notizen steckt, nicht nur ein Status.
      detailLabel: "Julia Berger",
      detailSub: "Zahnarztpraxis Berger",
      dealsHeading: "Deals",
      dealsEmpty: "Noch kein Deal für diese Firma.",
      historyHeading: "Verlauf",
      history: [{ tag: "Status", text: "Neu → Geantwortet" }],
      notePlaceholder: "Was war das Ergebnis? Was ist der nächste Schritt?",
      noteSave: "Notiz speichern",
      note: "Antworten aus Instantly werden automatisch einsortiert.",
    },
  },
  // Nachgebaut, nicht abfotografiert. Zahlen erfunden, aber an den Schwellen
  // gewaehlt, die das eigene Konto zeigt -- deshalb steht die
  // Beispiel-Kennzeichnung sichtbar im Rahmen.
  heroIllustration: {
    inboxLabel: "Posteingang",
    exampleLabel: "Beispielansicht",
    featured: {
      // Personas am 2026-08-06 auf die Zielgruppe umgestellt: eine Agentur
      // gewinnt hier ihren EIGENEN Kunden. Vorher standen dort eine
      // Zahnarztpraxis und eine Schreinerei -- lokale Betriebe passen weder
      // zum Eyebrow noch zu einem Deal in dieser Groesse.
      initials: "LV",
      name: "Lena Vogt",
      company: "Head of Growth · Nordwind Coffee",
      message: "„Ja, gerne! Passt euch Dienstag um 14 Uhr? Schickt mir vorher kurz, wie ihr das bei ähnlichen Marken aufgesetzt habt.“",
      outcome: "Termin gebucht",
      when: "Di, 14:00",
      dealNote: "Deal angelegt · 18.000 € · nächster Schritt: Angebot bis Freitag",
    },
    others: [
      { initials: "MS", name: "Marc Sillner", company: "Gründer · Sabo Athletics", status: "reply" },
      { initials: "TR", name: "Tobias Reiter", company: "CMO · Klarwerk Studios", status: "meeting" },
    ],
    replyLabel: "Antwort",
    meetingLabel: "Termin",
    footer: "Alle Postfächer in einem Eingang, alle fünf Minuten abgeglichen. Jede Antwort wird eingestuft und dem Kontakt zugeordnet.",
  },
  calculator: {
    eyebrow: "Interaktiv",
    title: "Berechne dein Sparpotenzial",
    subtitle: "Wie viele qualifizierte Leads willst du pro Monat erreichen? Wir rechnen live vor, was das für dich bedeutet.",
    sliderLabel: "Qualifizierte Leads / Monat",
    hoursUnit: "Std.",
    hoursLabel: "manuelle Recherche gespart / Monat",
    laborLabel: "Arbeitszeit-Gegenwert dafür",
    planPrefix: "Dafür passt der",
    apiCostPrefix: "ca.",
  },
  cta: {
    // Die Testphase ist am 2026-08-06 ersatzlos entfallen (Begruendung im Kopf
    // von _ui.tsx). Damit gibt es nur noch einen Weg, und der Sekundaer-Link
    // darf nicht mehr auf dasselbe Ziel zeigen wie der Hauptknopf -- er nennt
    // jetzt, was im Gespraech passiert, statt es zu wiederholen.
    primary: "Gespräch buchen",
    secondary: "Oder erst Fragen stellen",
    // Der Lead-Deckel der Testphase steht hier bewusst mit drin: die App
    // erzwingt ihn hart (lib/plans.ts, TRIAL_LEAD_CAP = 500). Wer ihn erst
    // beim Anschlagen bemerkt, erlebt genau den Moment, den diese Seite sonst
    // vermeiden will.
    trialNote: "30 Minuten, kein Verkaufsgespräch. Wir schauen gemeinsam auf eure Kundenstruktur und richten den ersten Workspace ein.",
  },
  // ══════════════════════════════════════════════════════════════════════
  // NEUER HERO, 2026-08-06 (POSITIONIERUNG.md Abschnitt 2, Variante A)
  //
  // Vorher stand hier: "Mindestens 1.000 E-Mails pro Woche an echte
  // Entscheider, vollautomatisch." Diese Zeile war erprobt und wurde am
  // 05.08. bewusst behalten. Sie faellt jetzt aus drei Gruenden, die alle
  // erst mit der neuen Positionierung entstanden sind:
  //
  //   1. Sie ist EINKANALIG. LinkedIn und Telefon kommen nicht vor -- genau
  //      die beiden sind aber der Grund, warum die Kette funktioniert.
  //   2. "Vollautomatisch" widerspricht dem eigenen Produkt. Der Torwart
  //      haelt dich absichtlich auf, bei LinkedIn drueckst DU den
  //      Absendeknopf (keine API, siehe #kanaele), angerufen wird von Hand.
  //      Die Seite erklaert das zwei Abschnitte weiter unten ausfuehrlich.
  //   3. Sie verkauft VOLUMEN -- und der Abschnitt "Wo die Grenze liegt"
  //      nennt Volumen selbst als Engpass. 1.000/Woche sind ~143/Tag, also
  //      mindestens drei aufgewaermte Postfaecher.
  //
  // Der Dreiklang "finden - erreichen - gewinnen" ist gleichzeitig die
  // Gliederung der ganzen Startseite. Wer nur die Ueberschrift liest, hat
  // die Struktur darunter schon verstanden.
  //
  // Der Eyebrow nannte vorher einen Rang ("Die #1 Plattform"). Auf einer
  // Seite, deren Unterscheidungsmerkmal Ehrlichkeit ist, ist ein unbelegter
  // Superlativ dieselbe Sorte Problem wie die 5-%-Quote im Rechner. Er nennt
  // jetzt die Kategorie statt des Rangs -- und die Kategorie ist das, was
  // wir besetzen wollen.
  // ══════════════════════════════════════════════════════════════════════
  hero: {
    // Nennt seit dem 2026-08-06 die Zielgruppe statt der Taetigkeit. Das Wort
    // "Agentur" tauchte vorher zum ersten Mal in der Navigation auf und dann
    // erst wieder an Abschnitt 12 -- wer aus einer Kaltmail kommt, entscheidet
    // aber in den ersten Sekunden, ob die Seite ihn meint.
    eyebrow: "Für Agenturen, die Outbound für ihre Kunden machen",
    h1Pre: "Entscheider finden. Auf ",
    h1Accent: "jedem Kanal",
    h1Post: " erreichen. Zu Kunden machen.",
    // Nennt alle drei Kanaele beim Namen, weil genau das der Unterschied zu
    // jedem Sendetool ist. "Geprueft" bezieht sich bewusst nur auf die
    // E-Mail-Adresse -- Telefonnummern kommen aus oeffentlichen Eintraegen
    // und werden nicht verifiziert.
    body: "Ein Werkzeug von der Nische bis zum Auftrag: geprüfte Entscheider, ein eigener Aufhänger für jeden, die E-Mail-Sequenz, die LinkedIn-Nachricht und die Telefonnummer. Je Kunde ein eigener Workspace mit seinem Branding, alles im selben CRM.",
    factBadge: "Agenturen bekommen im Schnitt 42 € zurück für jeden Euro, den sie in E-Mails stecken.",
    factSource: "Quelle: Litmus, State of Email 2025",
    screenshotAlt: "Frostbreaker Leads-Tabelle mit Firmen-Logos, Kontaktanzahl und E-Mail-Status",
    dashboardAlt:
      // Muss zu den Zahlen im Dashboard-Mockup passen (appMockups.dashboard).
      // Stand vorher auf einem aelteren Zahlensatz -- Screenreader und
      // Suchmaschinen bekamen dadurch andere Werte als das Auge.
      "Frostbreaker-Dashboard: 890 gefundene Firmen, 2.430 Kontakte, 1.612 mit E-Mail-Adresse, rund 324 Stunden gesparte Recherche bei 36,90 US-Dollar Abfragekosten",
  },
  // Die drei Zeilen unter dem Hero. Sie standen bis zum 2026-08-06 auf
  // "4 Suchwege / 3 Kanaele / 1 Login" -- alles nachzaehlbar, aber alles
  // MECHANIK. Niemand kauft vier Suchwege. Auf der wichtigsten Flaeche der
  // wichtigsten Seite muss stehen, was man davon hat.
  //
  // Bewusst weiter ohne erfundene Ergebniszahl: eine Terminquote koennten wir
  // nicht belegen, und die Seite hat gerade erst den Rechner davon befreit.
  // Ein Versprechen in Worten ist etwas anderes als eine erfundene Zahl --
  // jedes der drei ist unten auf der Seite mit einem Bild belegt.
  heroPromises: [
    {
      title: "Vom Suchbegriff zum Termin",
      body: "Finden, anschreiben, nachfassen, abschließen — je Kundenkonto getrennt. Ohne das Werkzeug zu wechseln und ohne eine CSV dazwischen.",
    },
    {
      title: "Kein Lead bleibt liegen",
      body: "Schweigt die Mail, kommt LinkedIn. Schweigt LinkedIn, kommt der Anruf. Wer antwortet, fällt sofort raus.",
    },
    {
      title: "Du weißt, was Termine bringt",
      body: "Welche Textfassung wirklich funktioniert hat, kann dir sonst niemand sagen — wir schreiben sie und sehen die Antwort.",
    },
  ],
  // Die Systemkarte, neu am 2026-08-06. Steht als zweiter Abschnitt, direkt
  // nach dem Hero: sie beantwortet "wie gross ist das hier?" auf einen Blick,
  // bevor irgendetwas im Einzelnen erklaert wird.
  systemMap: {
    eyebrow: "Das ganze Bild",
    title: "Von der Nische bis zum Auftrag, ohne das Werkzeug zu wechseln",
    body: "Drei Stufen und eine Rückkopplung. Alles darunter auf dieser Seite ist eine dieser vier Kästen im Einzelnen.",
    stages: [
      {
        id: "find",
        label: "Finden",
        title: "Entscheider statt info@-Adressen",
        items: ["Google Maps", "Hunter", "Apollo", "Prospeo"],
        note: "Name, Rolle, geprüfte E-Mail-Adresse, Telefonnummer und LinkedIn-Profil, soweit öffentlich vorhanden.",
      },
      {
        id: "contact",
        label: "Kontaktieren",
        title: "Drei Kanäle als eine Kette",
        items: [
          "E-Mail-Sequenz mit eigenem Aufhänger je Lead",
          "LinkedIn-Nachricht, fertig eingesetzt",
          "Anrufliste mit Nummer und Vorbereitung",
        ],
        note: "Wer nicht antwortet, rutscht zum nächsten Kanal. Wer antwortet, fällt sofort raus.",
      },
      {
        id: "win",
        label: "Gewinnen",
        title: "Alles landet im selben CRM",
        items: [
          "Deals und gewichtete Prognose",
          "Aufgaben mit genau einem nächsten Schritt",
          "Notizen, Anrufe und Mails in einer Historie",
        ],
        note: "Der Anruf von gestern und die Mail von vor drei Wochen stehen untereinander, nicht in zwei Werkzeugen.",
      },
    ],
    arrows: ["Name, Adresse, Nummer", "Antwort, Termin"],
    loop: {
      label: "Und beim nächsten Mal besser",
      title: "Was zurückkommt, schreibt die nächste Kampagne",
      body: "Jede Antwort trägt den Schritt und die Textfassung, auf die sie geantwortet hat. Damit lässt sich beantworten, was ein Sendetool nicht wissen kann und eine Lead-Datenbank nie zu sehen bekommt: welcher Text tatsächlich Termine gebracht hat.",
      items: [
        "Fassung A gegen B",
        "Wochentag",
        "Uhrzeit",
        "Lead-Liste",
        "Copy-Check vor dem Senden",
        "SPF, DKIM, DMARC",
      ],
    },
  },
  // Der Rundgang. Reihenfolge = der Dreiklang aus dem Hero: finden (1),
  // kontaktieren (2-4), gewinnen (5), besser werden (6). Wer die Schritte
  // umsortiert, bricht diesen Bogen -- und die Bilder in _walkthrough.tsx
  // haengen an der Reihenfolge dieses Arrays, nicht an einer id.
  walkthrough: {
    eyebrow: "In sechs Schritten",
    title: "Was zwischen deiner Nische und dem ersten Termin passiert",
    body: "Für jemanden, der die App nie gesehen hat. Jeder Schritt mit dem Bildschirm, auf dem er stattfindet.",
    stepLabel: "Schritt",
    steps: [
      {
        title: "Nische rein, Entscheider raus",
        body: "Branche, Ort, Größe, eingesetzte Technik, oder wer gerade Stellen ausschreibt. Was zurückkommt, ist keine Firmenliste, sondern eine Liste von Menschen: Name, Rolle, geprüfte Adresse, Telefonnummer.",
        detail: "Rollen-Adressen wie info@ oder office@ fallen automatisch raus. An eine Adresse, für die niemand zuständig ist, schreibt man nicht kalt an.",
        cta: "So sieht es in echt aus",
      },
      {
        title: "Jeder bekommt seinen eigenen ersten Satz",
        body: "Aus der Recherche zur Firma entsteht ein Aufhänger je Kontakt. Du bestimmst die Quelle, den Ton und die Wörter, die nicht vorkommen dürfen — und testest an einer echten Firma, bevor etwas gespeichert wird.",
        detail: "Kein Serienbrief mit dem Firmennamen an der richtigen Stelle. Platzhalter-Personalisierung schneidet messbar schlechter ab als gar keine.",
        cta: "Den Agenten ansehen",
      },
      {
        title: "Zwei lesen gegen, bevor etwas rausgeht",
        body: "Der Copy-Check prüft Länge, Spam-Wörter, KI-Klang und ob wirklich nur eine Handlungsaufforderung drinsteht. Der Torwart prüft danach die Technik: SPF, DKIM, Bounce-Quote, sendbare Adressen.",
        detail: "Vier der elf Prüfungen können den Start aufhalten. Das kostet dich nicht eine Kampagne, das kostet dich sonst die Domain.",
        cta: "Die Prüfungen ansehen",
      },
      {
        title: "Wenn die Mails schweigen, steht die Nachricht schon",
        body: "Nach Erstmail und drei Follow-ups erscheint eine LinkedIn-Aufgabe, aber nur dort, wo ein Profil hinterlegt ist. Die Nachricht ist bereits eingesetzt, mit demselben Aufhänger wie die Mail. Bleibt es weiter still, kommt der Anruf, mit Nummer und Vorbereitung.",
        detail: "Immer genau ein nächster Schritt, nie zwei gleichzeitig. Wer antwortet, fällt im selben Moment aus der Kette.",
        cta: "Die Kette ansehen",
      },
      {
        title: "Die Antwort landet im CRM, nicht im Postfach",
        body: "Jede Antwort wird eingestuft und dem Kontakt zugeordnet. Daraus wird ein Deal mit Wert und Wahrscheinlichkeit, eine Aufgabe mit Fälligkeit, eine Notiz nach dem Anruf.",
        detail: "Der Anruf von gestern und die Mail von vor drei Wochen stehen in derselben Historie. Ohne ein zweites Abo dafür.",
        cta: "Die Pipeline ansehen",
      },
      {
        title: "Und jetzt weißt du, was funktioniert hat",
        body: "Je Schritt und je Textfassung: wie viele geantwortet haben, wie viele abgesagt haben, und wie viele daraus einen Termin gemacht haben. Dazu Wochentag und Uhrzeit.",
        detail: "Instantly sieht die Antwort, hat den Text aber nicht geschrieben. Apollo schreibt weder Text noch sieht es die Antwort. Diese Ansicht kann es nur geben, wenn beide Hälften im selben Werkzeug liegen.",
        // Bewusst NICHT "Kostenlos testen": der Haupt-CTA direkt darunter sagt
        // genau das, und zwei gleiche Knoepfe untereinander lesen sich als
        // Versehen.
        cta: "Die Auswertung ansehen",
      },
    ],
  },
  localReachMockup: {
    typicalLabel: "Typische B2B-Datenbank",
    frostbreakerLabel: "Frostbreaker, über Google Places",
    notListed: "nicht gelistet",
    businesses: [
      { name: "Frisör Kaiser", sub: "Einzelsalon, 1 Standort" },
      { name: "Schreinerei Huber", sub: "Handwerksbetrieb, 6 Mitarbeitende" },
      { name: "Zahnarztpraxis Dr. Berger", sub: "Einzelpraxis" },
    ],
  },
  // Eigene Sektion statt eines Bullets unter sieben in "Warum Frostbreaker":
  // ein Sales-Kontakt fand das Feature stark, aber erst live in der App, nicht
  // beim Lesen der Website -- dasselbe Muster wie beim Kostenargument vorher.
  // Direkt nach qualifiedLeads platziert: dort ist das Publikum schon im
  // Thema Kontaktqualität, der naechste Schritt ist "und die Adresse geht
  // auch wirklich zu".
  verification: {
    eyebrow: "Bevor eine Adresse eurer Domain schadet",
    title: "Jede E-Mail wird geprüft, bevor sie in eine Kampagne geht",
    body: "Eine ungültige Adresse kostet nicht nur einen Lead. Sie beschädigt eure Sender-Reputation, über alle Postfächer und alle Kunden hinweg, und das lässt sich nicht einfach zurückdrehen. Deshalb läuft die Prüfung automatisch vor jedem Versand, ohne ein zusätzliches Tool und ohne dass ihr manuell etwas anstoßen müsst.",
    // Illustrative Zahlen (Beispielansicht, siehe reportBadge), konsistent
    // mit der Groessenordnung der uebrigen Mockups auf der Seite.
    reportBadge: "Beispielansicht",
    reportLabel: "Ergebnis der letzten Prüfung",
    reportChecked: "E-Mails geprüft",
    reportCheckedValue: "105",
    reportInvalid: "als ungültig erkannt und entfernt",
    reportInvalidValue: "12",
    reportRate: "Zustellrate danach",
    reportRateValue: "96 %",
    reportNote: "Automatisch vor jedem Versand, kein Extra-Tool nötig.",
    fact: "Geprüfte E-Mail-Adressen kommen etwa doppelt so oft an wie ungeprüfte.",
    factSub: "Zu viele falsche Adressen und eure Mails landen im Spam statt im Postfach.",
    factSource: "Branchen-Benchmarks E-Mail-Zustellbarkeit, 2026",
  },
  qualifiedMockup: {
    typicalLabel: "Typisches Tool",
    frostbreakerLabel: "Frostbreaker",
    genericNote: "Rollen-Adresse, niemand konkret zuständig",
    rows: [
      { generic: "info@schreinerei-huber.de", name: "Markus Huber", role: "Inhaber", email: "m.huber@schreinerei-huber.de" },
      { generic: "office@zahnarzt-berger.at", name: "Dr. Anna Berger", role: "Praxisinhaberin", email: "a.berger@zahnarzt-berger.at" },
      { generic: "kontakt@frisoer-kaiser.de", name: "Julia Kaiser", role: "Salonleitung", email: "j.kaiser@frisoer-kaiser.de" },
    ],
  },
  // Fachbegriffe, die im Fliesstext vorkommen und einer Erklaerung beim
  // Hovern bekommen (siehe GlossaryText in _ui.tsx). Bewusst kurz gehalten:
  // ein Satz, den auch jemand ohne E-Mail-Technik-Hintergrund versteht.
  glossary: {
    SPF: "SPF: ein Eintrag in eurer Domain, der festlegt, welche Server in eurem Namen E-Mails verschicken dürfen.",
    DKIM: "DKIM: eine digitale Signatur auf jeder E-Mail, an der der Empfänger erkennt, dass sie unterwegs nicht verändert wurde.",
    DMARC: "DMARC: die Regel, was ein Empfänger mit E-Mails tun soll, die SPF oder DKIM nicht bestehen.",
  },
  agency: {
    eyebrow: "Für Agenturen",
    title: "Mehrere Kunden verwalten, ohne für jeden ein neues Abo aufzumachen",
    body: "Betreut ihr Lead-Gen oder Cold Outreach für eure eigenen Kunden? Dann läuft jeder Kunde in einem eigenen, sauber getrennten Workspace, im Look dieses Kunden, unter einem einzigen Login für euer Team.",
    features: [
      { id: "workspaces", title: "Ein Login, ein Workspace pro Kunde", body: "Leads, Kampagnen und Kontakte laufen pro Kunde sauber getrennt, ohne für jeden ein eigenes Abo abzuschließen. Workspaces lassen sich in Sekunden anlegen, umbenennen oder wieder entfernen." },
      { id: "branding", title: "Branding pro Kunden-Workspace", body: "Name, Logo und Akzentfarbe lassen sich je Workspace hinterlegen, damit das, was der Endkunde sieht, nach der Agentur aussieht, nicht nach einem fremden Tool im Hintergrund." },
      { id: "reportLink", title: "Teilbarer Report-Link, ohne Login für den Endkunden", body: "Ein Link pro Workspace zeigt aggregierte Kennzahlen im Look des jeweiligen Kunden, ganz ohne dass der einen eigenen Account braucht. Einzelne Kontaktdaten sieht der Endkunde dabei bewusst nicht." },
    ],
    note: "Bei reinen Versand-Tools ist eine Multi-Kunden-Verwaltung meist ein separat bepreistes Zusatzmodul, oft mit einem eigenen Preis pro angelegtem Kunden-Workspace, obendrauf auf ein Tool, das nur den Versand übernimmt. Bei Frostbreaker ist das von Anfang an Teil des Produkts.",
  },
  agencyMockup: {
    workspacesLabel: "Workspaces",
    active: "aktiv",
    workspaces: [
      { name: "Kunde: Muster GmbH", color: "#0EA5E9", active: true },
      { name: "Kunde: Beispiel AG", color: "#8B5CF6", active: false },
      { name: "Kunde: Nordwind KG", color: "#F59E0B", active: false },
    ],
    brandingLabel: "Branding dieses Workspaces",
    brandingValue: "Muster GmbH · Akzentfarbe #0EA5E9",
    reportLinkLabel: "Report-Link für den Endkunden",
    copyLabel: "Kopieren",
  },
  // Hiess bis zum 2026-08-06 "Mehr als Lead-Suche. Die meisten Tools hoeren
  // auf, sobald die Mail raus ist." Das war gegen die Wettbewerber formuliert
  // statt fuer die eigene Sache -- und ein Abschnitt, der mit dem Mangel
  // anderer beginnt, verkauft den Mangel, nicht das Produkt. Er traegt jetzt
  // die vierte Saeule: was aus einer Antwort wird.
  postSend: {
    eyebrow: "Nach dem Ja",
    title: "Aus einer Antwort wird ein Vorgang, nicht eine Mail im Postfach",
    body: "Jede Antwort wird eingeordnet und dem Kontakt zugeordnet. Daraus entsteht ein Deal mit Wert und Wahrscheinlichkeit, eine Aufgabe mit Fälligkeit, eine Notiz nach dem Anruf. Der Anruf von gestern und die Mail von vor drei Wochen stehen in derselben Historie.",
    features: [
      { id: "replies", title: "Ein Posteingang für alle Postfächer", body: "Alle verbundenen Postfächer laufen in einem Posteingang zusammen, alle fünf Minuten synchronisiert, mit Zähler für Ungelesenes. Jede Antwort kommt mit vollem Text an, die KI ordnet sie ein (interessiert, kein Interesse, Rückfrage), und geantwortet wird direkt aus der App. Instantly müsst ihr dafür nicht mehr öffnen." },
      { id: "dashboard", title: "Umsatz-Forecast statt nur Öffnungsrate", body: "Offene Pipeline, mit der Abschlusswahrscheinlichkeit gewichteter Forecast, gewonnen und verloren der letzten 30 Tage, dazu fällige und überfällige Aufgaben. Für die meisten Agenturen ersetzt das ein eigenes CRM-Abo." },
      { id: "status", title: "Lead-Status pro Kontakt, ohne separates CRM", body: "Kontaktiert, geantwortet, Meeting gebucht, Kunde geworden, alles direkt in der Leads-Tabelle nachvollziehbar." },
      { id: "deliverability", title: "SPF, DKIM, DMARC: geprüft, bevor ihr sendet", body: "Frostbreaker prüft eure Sende-Domain live per DNS-Abfrage und zeigt in Klartext, was zu tun ist, kein separates Tool nötig. Dazu Tagesvolumen pro Postfach auf einen Blick, mit Warnung bei riskant hohem Sendevolumen." },
    ],
  },
  postSendMockup: {
    incomingLabel: "Eingehende Antwort, automatisch eingeordnet",
    exampleReply: "„Klingt interessant, können wir nächste Woche kurz telefonieren?“",
    statusInterested: "Interessiert",
    dashboardLabel: "Fiktives Beispiel-Dashboard",
    meetings: "Meetings gebucht",
    pipeline: "Pipeline-Wert",
    bounce: "Bounce-Rate",
  },
  personalization: {
    eyebrow: "Personalisierung",
    title: "Der KI-Agent ist keine Blackbox",
    body: "Die meisten Tools spucken einen Icebreaker aus, ohne dass ihr wisst, worauf er sich stützt oder wie er klingt. Bei Frostbreaker stellt ihr das selbst ein: pro Nische, pro Kampagne, so oft ihr wollt.",
    bullets: [
      { label: "Datenquelle wählen:", body: "Firmenbeschreibung, Website-Text oder beides kombiniert." },
      { label: "System-Prompt vollständig editierbar:", body: "ihr bestimmt Ton, Regeln und Struktur, kein starres Template." },
      { label: "Verbotene Wörter definieren:", body: "damit kein Icebreaker nach generischer KI klingt." },
      { label: "Live-Test an einer echten, recherchierten Firma:", body: "bevor irgendetwas gespeichert oder verschickt wird." },
    ],
    dataSourceLabel: "Datenquelle",
    sourceOptions: ["Firmenbeschreibung", "Website-Text", "Beides kombiniert"],
    promptLabel: "System-Prompt",
    promptLines: [
      "- Nutze ausschließlich überprüfbare Fakten aus der Recherche.",
      "- Kein Name, keine Begrüßung, keine Floskeln.",
      "- Direkt, konkret, wie eine Beobachtung vor einer Vertriebsfrage.",
    ],
    forbiddenLabel: "Verbotene Wörter",
    forbiddenWords: ["Respekt", "bewundern", "stolz", "Lob", "begeistert"],
  },
  integrations: {
    eyebrow: "Passt in euren Stack",
    title: "Liest aus euren Quellen, schreibt in eure Werkzeuge",
    // Die Sektion zeigte bisher nur Ziele. Apollo, Hunter und Google fehlten
    // deshalb komplett -- dabei ist genau das die Aussage: Frostbreaker sitzt
    // zwischen den Diensten, die ihr ohnehin habt, und ersetzt keinen davon.
    sourcesLabel: "Quellen, auf euren Zugängen",
    sources: [
      { name: "Google Maps", note: "Lokale Betriebe samt Telefonnummer" },
      { name: "Hunter", note: "Firmendatenbank und Adressen zur Domain" },
      { name: "Apollo", note: "Entscheider, verifizierte Adresse, Technologie-Filter" },
      { name: "OpenAI", note: "Entscheider-Recherche und Eröffnungszeile" },
      { name: "NeverBounce", note: "Adressprüfung vor dem Versand, optional" },
    ],
    targetsLabel: "Ziele",
    items: [
      { id: "instantly", name: "Instantly", note: "Vollständig natives Kampagnen-Management, kein CSV-Export nötig" },
      { id: "sending", name: "Smartlead", note: "CSV-Import" },
      { id: "sending", name: "Lemlist", note: "CSV-Import" },
      { id: "crm", name: "HubSpot", note: "CSV-Import" },
      { id: "crm", name: "Pipedrive", note: "CSV-Import" },
      { id: "crm", name: "Salesforce", note: "CSV-Import" },
      { id: "sheet", name: "Excel / Sheets", note: "Excel-CSV" },
      { id: "automation", name: "Zapier", note: "geplant" },
    ],
  },
  features: {
    eyebrow: "Mehr als nur Leads finden",
    title: "Was sonst noch mit drin steckt",
    items: [
      { id: "suppression", title: "Bestandskunden und Opt-outs bleiben geschützt", body: "Einmal auf der Sperrliste, für immer ausgeschlossen: Frostbreaker prüft automatisch dagegen, bevor irgendjemand angeschrieben wird, egal ob neue Suche oder neue Kampagne." },
      { id: "deliverability", title: "Zustellbarkeit prüfen, bevor es zum Problem wird", body: "SPF, DKIM und DMARC eurer Sende-Domain live per DNS geprüft, in Klartext erklärt, dazu eine Warnung bei riskant hohem Tagesvolumen pro Postfach." },
      { id: "campaigns", title: "Kampagnen und Sequenzen direkt im Tool", body: "Sequenz, Zeitplan, Anzahl der Follow-ups und Aktivierung, alles nativ in Frostbreaker. Kein Tool-Wechsel, kein CSV-Export." },
    ],
  },
  suppressionMockup: {
    label: "Automatisch geprüft, bevor versendet wird",
    blocked: { name: "Maria Fenninger", company: "Café Feinkost", note: "bereits Kunde" },
    blockedTag: "Automatisch übersprungen",
    countLabel: "Kontakte auf der Sperrliste",
    count: "312",
  },
  deliverabilityMockup: {
    domainLabel: "Sende-Domain",
    domain: "eure-agentur-domain.de",
    spf: "SPF",
    dkim: "DKIM",
    dmarc: "DMARC",
    configured: "konfiguriert",
    missing: "fehlt noch",
    volumeLabel: "Tagesvolumen pro Postfach",
    volumeNote: "42 von 50, im sicheren Bereich",
  },
  campaignMockup: {
    label: "Sequenz",
    steps: [
      { day: "Tag 0", title: "Icebreaker-Mail" },
      { day: "Tag 3", title: "Follow-up 1" },
      { day: "Tag 7", title: "Follow-up 2, Break-up" },
    ],
    activeLabel: "Aktiv",
  },
  trustBadges: [
    { id: "encryption", title: "Verschlüsselte API-Keys", body: "Eure Zugangsdaten werden verschlüsselt gespeichert, nie im Klartext." },
    { id: "byok", title: "BYOK-Kostenkontrolle", body: "Volle Transparenz über eure tatsächlichen API-Kosten, live im Dashboard." },
  ],
  pricing: {
    eyebrow: "Preise",
    title: "Feste Preise, sofort einsehbar, sofort startbar",
    agencyBadge: "Für Agenturen",
    note: "Eingerichtet wird gemeinsam im Gespräch, danach monatlich kündbar und ohne Mindestlaufzeit. Zusätzlich nur eure eigenen API-Kosten, live im Dashboard einsehbar.",
    // Drei Stufen statt zwei, und der Agenturpreis steht ausgeschrieben da.
    // Vorher: "ab 199 € -- dafür sprechen wir kurz miteinander". Fuer einen
    // Agenturinhaber ist das ein Signal, dass es teuer wird und verhandelt
    // werden muss; er rechnet dann mit dem Schlimmsten und klickt weg. Ein
    // ausgeschriebener Preis kostet ein bisschen Verhandlungsspielraum und
    // spart jedes Gespraech, das nur der Preisfrage wegen stattfindet.
    plans: [
      {
        id: "starter",
        label: "Einzelplatz",
        price: "99 €",
        priceNote: "/ Monat",
        features: [
          "1 Workspace",
          "Für den eigenen Vertrieb",
          "Alle vier Suchwege, alle drei Kanäle",
          "CRM, Pipeline und Auswertung",
          "Zustellbarkeits-Check und Torwart",
        ],
        ctaLabel: "Gespräch buchen",
        highlighted: false,
      },
      {
        id: "agency",
        label: "Agentur",
        price: "199 €",
        priceNote: "/ Monat",
        features: [
          "Bis 5 Kunden-Workspaces",
          "Whitelabel-Reports je Kunde",
          "Kunden-Branding: Name, Logo, Akzentfarbe",
          "Alles aus Einzelplatz",
          "Gemeinsame Einrichtung je Kunde",
        ],
        ctaLabel: "Gespräch buchen",
        highlighted: true,
      },
      {
        id: "agencyPlus",
        label: "Agentur Plus",
        price: "349 €",
        priceNote: "/ Monat",
        features: [
          "Bis 12 Kunden-Workspaces",
          "Alles aus Agentur",
          "Mehrere Team-Zugänge",
          "Priority Support",
          "Ab 13 Kunden sprechen wir über eine Staffel",
        ],
        ctaLabel: "Gespräch buchen",
        highlighted: false,
      },
    ],
  },
  comparison: {
    title: "Im Vergleich",
    headerFrostbreaker: "Frostbreaker",
    headerOther: "Typischer Alternativ-Stack einer Agentur",
    rows: [
      ["Lokale Kleinunternehmen finden", "Ja, direkt über Google Places/Maps", "Meist nicht gelistet, da kein LinkedIn-Profil oder strukturierte Firmendaten"],
      ["Alles in einem Workflow", "Ja", "Nein, separates Recherche-Tool + Sende-Tool + eigenes Reporting"],
      ["Mehrere Kunden verwalten", "Eigener Workspace pro Kunde inklusive", "Meist ein separat bepreistes White-Label-Add-on"],
      ["Reporting für den Endkunden", "Teilbarer Report-Link im Look des Kunden", "Von Hand aus mehreren Tools zusammengebaut"],
      ["KI-Personalisierung pro Lead", "Ja, mit einstellbaren Regeln", "Teilweise, oft separates Tool nötig"],
      ["E-Mail-Verifizierung eingebaut", "Ja", "Separates Tool nötig"],
      ["Nur echte Ansprechpartner, kein info@", "Automatisch gefiltert", "Meist ungefiltert"],
      ["Preistransparenz", "Feste Preise, im Gespräch eingerichtet", "Meist individuelles Angebot"],
      ["Support", "Direkter Draht zum Gründerteam", "Ticket-System"],
    ] as [string, string, string][],
  },
  trust: {
    title: "Datenschutz ist keine Checkbox, sondern Teil der Architektur",
    links: { datenschutz: "Datenschutzerklärung", agb: "AGB", avv: "AVV" },
  },
  why: {
    title: "Warum es Frostbreaker gibt",
    body: "Outbound-Teams kombinieren heute meist vier bis fünf einzelne Tools, um vom ersten Suchbegriff bis zur personalisierten, verifizierten E-Mail zu kommen. Frostbreaker reduziert diesen Workflow auf ein einziges Tool, mit voller Kostentransparenz statt Pauschal-Abos und ohne CSV-Hin-und-Her zwischen Anbietern.",
    // Stand vorher auf "Frueher Zugang STATT grosser Kundenliste" -- das las
    // sich wie eine Entschuldigung dafuer, keine Kunden zu haben, und genau so
    // kommt es bei einem Fachkaeufer an. Dieselbe Tatsache, als Angebot
    // formuliert: was er davon HAT, dass wir noch klein sind. Ohne erfundene
    // Zahl, weil eine erfundene Zahl auf dieser Seite alles kaputtmacht.
    earlyAccess: { title: "Ihr redet mit dem, der es baut", body: "Wir arbeiten gerade mit einer kleinen Zahl von Agenturen, jede eng begleitet. Das heißt für euch: die Einrichtung machen wir gemeinsam, ihr habt eine direkte Leitung statt eines Ticketsystems, und was euch fehlt, steht im nächsten Sprint statt auf einer Roadmap. Diese Nähe gibt es nur, solange die Gruppe klein ist." },
    founderLabel: "Vom Gründer",
    founderQuote: "„Ich wollte schon immer etwas Eigenes aufbauen. Das größte Hindernis war nie die Idee, sondern Kunden zu finden: Kaltakquise per Hand, endlose Anrufe und E-Mails, ohne je zu wissen, ob es sich lohnt. Also habe ich mir selbst das Werkzeug gebaut, das mir gefehlt hat, seitdem geht mir der nächste Ansprechpartner nie mehr aus.“",
    founderName: "Youssef Tayachi",
    founderRole: "Gründer & CEO, Frostbreaker",
    poweredBy: {
      title: "Ein Werkzeug statt vier",
      body: "Suche, Recherche, Verifizierung, Personalisierung und Versand greifen ineinander, statt über CSV-Dateien verbunden zu werden.",
      chips: ["Suchen", "Recherchieren", "Verifizieren", "Personalisieren", "Versenden"],
    },
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      { q: "Kann ich das als Agentur für mehrere Kunden gleichzeitig nutzen?", a: "Ja, dafür gibt es eigene Workspaces pro Kunde, inklusive eigenem Namen, Logo und Akzentfarbe. Für jeden Workspace lässt sich ein Report-Link teilen, der eurem Endkunden aggregierte Kennzahlen im eigenen Look zeigt, ganz ohne dass der einen eigenen Account braucht." },
      // Drei Fragen am 2026-08-06 dazugekommen. Sie beantworten die Einwaende,
      // die vorher eigene Abschnitte hatten: der Kostenbeweis (1,5 Cent), der
      // BYOK-Abschnitt und "dann nehme ich Apollo doch gleich selbst". Als
      // Abschnitte standen sie vor dem Produkt und haben die Gewichtung
      // gekippt; als FAQ-Antwort sind sie da, wo jemand tatsaechlich danach
      // sucht. Die Apollo-Antwort ist bewusst umgedreht formuliert -- nicht
      // "wir sind nur eine Ergaenzung", sondern was wir zusaetzlich tun.
      { q: "Warum nicht gleich direkt zu Apollo oder Hunter?", a: "Weil die Adresse der Anfang ist, nicht das Ergebnis. Apollo liefert Entscheider samt gepruefter Adresse. Danach faengt die Arbeit an: ein eigener Aufhaenger je Kontakt, die Pruefung des Textes, der Abgleich mit Sperrliste und Bestandskunden, der Versand, die LinkedIn-Nachricht und der Anruf, wenn es still bleibt, und am Ende die Frage, welche Textfassung Termine gebracht hat. Genau das liegt zwischen Apollo und Instantly, und genau das macht Frostbreaker." },
      { q: "Was kostet eine Abfrage wirklich?", a: "Rund 4 US-Dollar auf 100 Firmen mit etwa 260 Kontakten, also ungefaehr 1,5 Cent pro Kontakt. Die Zahl stammt aus einer echten Suche in unserem eigenen Konto (3,94 $ fuer 97 Firmen mit 259 Kontakten) und ist keine Zusage: euer Wert haengt an Nische und Trefferquote. Nach jeder Suche steht im Dashboard auf den Cent genau, was sie gekostet hat. Die vollstaendige Aufstellung steht auf der Preisseite." },
      { q: "Muss ich eigene API-Schluessel mitbringen?", a: "Ja, und das ist Absicht. Die Abfragen laufen auf euren eigenen Zugaengen, ihr zahlt sie zum Selbstkostenpreis, wir schlagen nichts auf. Wer schon mit Apollo oder Instantly arbeitet, behaelt Konto und Konditionen und aendert nur, was dazwischen passiert. Die Schluessel werden verschluesselt gespeichert, und wir richten sie im ersten Gespraech gemeinsam ein — das ist der Teil, an dem sonst die meisten haengenbleiben." },
      { q: "Was kostet das?", a: "99 € im Monat für einen Workspace, 199 € für bis zu fünf Kunden, 349 € für bis zu zwölf. Monatlich kündbar, keine Einrichtungsgebühr. Dazu kommen eure eigenen, transparent im Dashboard einsehbaren API-Kosten — wir schlagen darauf nichts auf. Es gibt keine Selbstbedienungs-Testphase: wir richten den ersten Workspace im Gespräch gemeinsam ein." },
      { q: "Kann ich jederzeit kündigen?", a: "Ja, monatlich, keine Mindestlaufzeit, keine Kündigungsfrist über den laufenden Monat hinaus." },
      { q: "Woher weiß ich, dass eine gefundene E-Mail wirklich zu einer Person gehört?", a: "Frostbreaker filtert generische Adressen wie info@ oder office@ automatisch heraus. Nur E-Mails, die eindeutig einer Person zugeordnet sind, landen in eurer Leads-Liste." },
      { q: "Was passiert, wenn ich aus Versehen an eine ungültige Adresse schreibe?", a: "Jede Adresse wird vor dem Versand geprüft, ungültige werden automatisch aussortiert. Das ist kein Nice-to-have: eine hohe Bounce-Rate beschädigt eure Sender-Reputation über alle Postfächer und alle Kunden hinweg, nicht nur die eine Kampagne. Die Prüfung läuft automatisch mit, ihr müsst nichts manuell anstoßen." },
      { q: "Welche Dienste laufen im Hintergrund, und brauche ich dort eigene Zugänge?", a: "Frostbreaker greift für die Kartensuche auf Google, für die Recherche auf OpenAI und für den Domain-Abgleich auf Hunter zu, für die Entscheider-Suche samt Technologie-Filter auf Apollo, optional NeverBounce für die Verifizierung und Instantly für den Versand. Ihr legt dort eigene Zugänge an und hinterlegt die Schlüssel einmal in den Einstellungen, verschlüsselt gespeichert. Genau deshalb zahlt ihr die Abfragen zum Selbstkostenpreis statt eines Aufschlags. Das Einrichten machen wir im ersten Gespräch gemeinsam." },
      { q: "Warum nicht gleich direkt zu Hunter oder Apollo?", a: "Weil keiner dieser Dienste den ganzen Weg abdeckt, und weil Frostbreaker sie gar nicht ersetzen will: Hunter und Apollo laufen als Datenquellen darin, mit euren eigenen Zugängen und zum Selbstkostenpreis. Der Unterschied liegt in dem, was davor und danach passiert. Hunter findet Adressen zu einer Domain, aber keine lokalen Betriebe ohne Firmendatenbank-Eintrag. Apollo liefert Entscheider samt verifizierter Adresse, schreibt aber keine individuelle Zeile pro Lead. Versand-Tools versenden, recherchieren aber nicht. Wer das selbst zusammensteckt, zahlt drei bis vier Abos, exportiert CSV-Dateien hin und her und baut das Reporting von Hand. Frostbreaker ist die Verbindung dazwischen: eine Suche, eine Liste, ein Versand, ein Dashboard, inklusive Antworten und gebuchten Meetings." },
      { q: "Was passiert, wenn ich aus Versehen einen Bestandskunden oder jemanden anschreibe, der sich abgemeldet hat?", a: "Genau dafür gibt es die eingebaute Sperrliste: einmal eingetragen, schließt Frostbreaker diese Kontakte und Domains automatisch aus jeder zukünftigen Suche und jedem Versand aus, ganz ohne dass ihr das bei jeder Kampagne manuell prüfen müsst. Bestandskunden und Opt-outs bleiben zuverlässig geschützt." },
      { q: "Kann ich prüfen, ob meine Versand-Domain überhaupt zustellfähig ist?", a: "Ja, direkt in der App: Frostbreaker prüft SPF, DKIM und DMARC eurer Sende-Domain per Live-DNS-Abfrage und zeigt in Klartext, was noch fehlt, dazu eine Warnung, wenn das Tagesvolumen pro Postfach riskant hoch wird. Kein separates Zustellbarkeits-Tool nötig." },
      { q: "Muss ich meine E-Mail-Kampagnen und Sequenzen in einem separaten Tool bauen?", a: "Nein. Kampagnen, Sequenzen inklusive Zeitplan und Anzahl der Follow-ups, und die Aktivierung laufen direkt in Frostbreaker. Ihr wechselt für den Versand nicht in ein zweites Tool und müsst nichts per CSV hin- und herschieben." },
      { q: "Wie schnell bin ich startklar?", a: "Die erste Suche läuft am selben Tag. Bis die erste Kampagne rausgeht, vergehen zwei bis vier Wochen — so lange brauchen frische Postfächer Warmup, und daran führt kein Werkzeug vorbei. Genau deshalb gibt es keine 14-Tage-Testphase: sie wäre kürzer als die Einrichtung. Wir richten stattdessen im Gespräch gemeinsam ein und begleiten die erste Kampagne." },
      { q: "Was passiert mit meinen Daten, wenn ich kündige?", a: "Eure Daten werden nach Vertragsende gelöscht oder auf Wunsch zurückgegeben, geregelt im AVV. Es gibt keine automatische Weiternutzung nach Kündigung." },
    ],
  },
  finalCta: {
    title: "Lasst uns eure Kaltakquise automatisieren.",
    body: "Dreißig Minuten, in denen wir gemeinsam auf eure Kundenstruktur schauen, den ersten Workspace einrichten und die API-Zugänge verbinden. Danach läuft die erste Suche noch am selben Tag. Kein Verkaufsgespräch, keine Kreditkarte.",
  },
  footer: {
    location: "Wien, Österreich",
    impressum: "Impressum",
    datenschutz: "Datenschutzerklärung",
    agb: "AGB",
    kontakt: "Kontakt",
  },
  contactPage: {
    eyebrow: "Kontakt",
    title: "Wer hinter Frostbreaker steckt",
    intro: "Kein Ticket-System, kein anonymes Support-Postfach. Wer bei Frostbreaker anfragt, spricht direkt mit mir.",
    name: "Youssef Tayachi",
    role: "Gründer & CEO, Frostbreaker",
    bio: "Ich wollte schon immer etwas Eigenes aufbauen, aber die größte Hürde war nie die Idee, sondern echte Kunden zu finden. Also habe ich Kaltakquise gemacht, von Hand: Listen zusammengesucht, Nummern angerufen, E-Mails einzeln getippt, oft ohne zu wissen, ob am anderen Ende überhaupt der richtige Ansprechpartner sitzt. Irgendwann war klar, wie viel Zeit und Geld dabei einfach verpufft, also habe ich angefangen, mir selbst Werkzeuge zu bauen, die diesen Prozess automatisieren. Daraus wurde Frostbreaker, seitdem geht mir nie mehr die Möglichkeit aus, die richtigen Menschen zu erreichen, und genau das will ich jetzt auch anderen Agenturen und Selbstständigen geben. Wenn du Fragen zum Produkt, zu Preisen oder zu eurem konkreten Use Case hast, meld dich einfach direkt.",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    calendlyLabel: "30 Minuten Call buchen",
    calendlyNote: "Kein Verkaufsgespräch von der Stange, sondern ein echtes Gespräch über eure Nische.",
    backLabel: "Zurück zur Startseite",
  },
  caseStudyPage: {
    eyebrow: "Case Study",
    title: "Wie Frostbreaker in drei Wochen von der Idee zum laufenden System wurde",
    intro: "Ich wollte selbst B2B-Kaltakquise betreiben, ohne dafür vier verschiedene Tools zu abonnieren und zu verkabeln. Also habe ich das System selbst gebaut. Das ist die Geschichte dahinter, mit echten Zahlen aus dem laufenden Betrieb.",
    problemHeading: "Die Ausgangslage",
    problemBody: "Kaltakquise über eine Kontaktdatenbank, einen E-Mail-Finder, ein Verifizierungstool und einen Sequencer zu betreiben kostet leicht 150-300 € im Monat und bleibt trotzdem fragmentiert: Daten liegen in vier Systemen, niemand hat die volle Kontrolle. Ich habe das System stattdessen selbst gebaut, und zwar so, dass es nicht nur für mich funktioniert, sondern als eigenständige App für jeden nutzbar ist.",
    whatHeading: "Was ich gebaut habe",
    whatBody: "Eine durchgehende Pipeline: Google-Maps-Suche nach Nische und Ort, KI-Recherche der Entscheider pro Firma, automatisches Finden und Verifizieren der E-Mail-Adresse, KI-Personalisierung pro Kontakt, Versand über eigene Postfächer, Antwort-Tracking und ein CRM mit Pipeline, Notizen und Aktivitäten-Timeline. Alles BYOK: jeder Nutzer hinterlegt eigene API-Keys, verschlüsselt gespeichert, kein Anbieter-Lock-in.",
    techHeading: "Technik",
    techItems: [
      "Next.js-Frontend, FastAPI-Backend, eigener Python-Worker mit Postgres-basierter Job-Queue",
      "Supabase (Postgres, Auth, Row-Level-Security), EU-Hosting in Frankfurt",
      "Verschlüsselte Speicherung nutzerspezifischer API-Keys, sechs angebundene Drittanbieter-Dienste",
      "Stripe-Abo-System, CRM-Modul mit Pipeline/Kanban-Board",
    ],
    statsHeading: "Stand heute, live aus dem Betrieb",
    stats: {
      businesses: { value: "800+", label: "durchsuchte Firmen" },
      contacts: { value: "2.000+", label: "identifizierte Kontakte" },
      withEmail: { value: "350+", label: "gefundene & verifizierte E-Mails" },
      migrations: { value: "50", label: "Datenbank-Iterationen in drei Wochen" },
    },
    honestNote: "Ehrlich dazu: Dieses Projekt ist der Beweis für die technische Umsetzung, nicht für ein fertig skaliertes Geschäft. Was hier steht, lässt sich live nachvollziehen, nicht nur behaupten.",
    ctaHeading: "Was das für dich bedeutet",
    ctaBody: "Genau dieses Tempo und diese Bandbreite, Datenmodellierung, KI-Integration, Zahlungsanbindung, Sicherheitsarchitektur, saubere Anbindung mehrerer Drittanbieter-APIs, bringe ich auch für deine Anforderungen mit. Ob interne Automatisierung, Kunden-App oder Erweiterung eines bestehenden Systems.",
    ctaButtonLabel: "30 Minuten Call buchen",
    backLabel: "Zurück zur Startseite",
  },
  // Zweites Angebot neben dem Produkt: Individualentwicklung. Eigene Seite
  // statt einer Sektion auf der Startseite, weil sich die Zielgruppen nicht
  // ueberschneiden -- wer das Produkt sucht, soll nicht ueber Auftragsarbeit
  // stolpern, und wer einen Entwickler sucht, nicht ueber Trial-Buttons.
  // Ansprache bewusst "du" wie auf /kontakt (dort spricht ebenfalls Youssef
  // persoenlich), nicht "ihr" wie auf der Agenturseite.
  customPage: {
    eyebrow: "Eigene Software",
    title: "Willst du eine eigene App für dein Unternehmen?",
    intro: "Ich bin der Entwickler hinter Frostbreaker. Wenn bei dir ein Teil der Arbeit an einer Tabelle hängt, an einem Schritt, den jemand von Hand abtippt, oder an fünf Tools, die per Copy-paste zusammengehalten werden: Genau das baue ich als ein System, das dir gehört.",
    ctaLabel: "30 Minuten Call buchen",
    sections: [
      {
        id: "build",
        eyebrow: "Was ich baue",
        title: "Ein System statt fünf Behelfslösungen",
        body: "Kein Baukasten und keine Vorlage, die nachträglich passend gebogen wird. Ich schaue mir an, wie bei dir tatsächlich gearbeitet wird, und baue die Software darum herum.",
        bullets: [
          "Interne Werkzeuge, die eine Tabelle und das Übertragen von Hand zwischen zwei Systemen ersetzen",
          "KI-Abläufe für Recherche, Anreicherung und Personalisierung, also die Arbeit, für die heute jemand liest und tippt",
          "Kundenfähige Apps mit echtem Login, Abrechnung und Datenbank dahinter, kein Prototyp",
          "Ein System, das dir gehört, statt mehrerer Abos, die über Zapier zusammenhängen",
        ],
      },
      {
        id: "ablauf",
        eyebrow: "Wie wir zusammenarbeiten",
        title: "Erst Klarheit, dann Angebot, dann Code",
        body: "Der teuerste Fehler bei eigener Software ist, mit dem Bauen anzufangen, bevor klar ist, worin das Problem eigentlich besteht. Deshalb steht am Anfang ein Gespräch und kein Vertrag.",
        bullets: [
          "Ein Gespräch über deinen Ablauf: was heute wie lange dauert und wo es hakt",
          "Ein schriftlicher Vorschlag mit festem Umfang und Preis, bevor ich anfange",
          "Regelmäßig etwas Lauffähiges zum Anschauen, statt einer großen Übergabe am Ende",
          "Code und Daten gehören dir, auch wenn wir danach getrennte Wege gehen",
        ],
      },
    ],
    proofEyebrow: "Der Beweis",
    proofTitle: "Frostbreaker habe ich für mich selbst gebaut, nicht als Portfolio-Stück",
    proofBody: "Diese Seite, die App dahinter und alles, was du hier siehst, kommt von mir. Ich entwickle also nicht nach einem Briefing für Software, die ich selbst nie benutzt habe: Ich baue die Art von Software, die ich täglich verwende, und merke deshalb früh, welche Stelle einen echten Nutzer später stört.",
    proofStats: [
      { value: "3 Wochen", label: "von der Idee zum laufenden System" },
      { value: "800+", label: "verarbeitete Firmen im Live-Betrieb" },
      { value: "6", label: "angebundene externe Dienste" },
    ],
    proofLinkLabel: "Die ganze Entstehung nachlesen",
    ctaTitle: "Erzähl mir von deinem Ablauf",
    ctaBody: "30 Minuten, ohne Präsentation. Wenn sich der Aufwand für dich nicht lohnt, sage ich dir das auch.",
  },
  customMockups: {
    workaround: {
      beforeLabel: "Heute",
      // Ein Ablauf, den fast jeder Betrieb wiedererkennt -- bewusst nicht
      // "Tool A/Tool B", das waere abstrakt geblieben.
      beforeSteps: [
        { label: "Anfrage per Mail", manual: false },
        { label: "Tabelle", manual: false },
        { label: "CRM", manual: true },
        { label: "Rechnung", manual: true },
      ],
      manualLabel: "von Hand",
      beforeNote: "Vier Stationen, zwei davon tippt jemand ab. Die Daten liegen an vier Orten.",
      afterLabel: "Mit eigenem System",
      afterTitle: "Ein Ablauf, eine Datenbank",
      afterNote: "Ein Login, ein Ort für die Daten. Die Schritte dazwischen passieren automatisch.",
    },
    process: {
      label: "Vom ersten Gespräch bis zur Übergabe",
      steps: [
        { when: "Schritt 1", title: "Gespräch über deinen Ablauf", note: "30 Minuten, unverbindlich" },
        { when: "Schritt 2", title: "Angebot mit festem Umfang und Preis", note: "schriftlich, bevor ich anfange" },
        { when: "Schritt 3", title: "Bauen in sichtbaren Zwischenständen", note: "regelmäßig etwas Lauffähiges zum Anschauen" },
        { when: "Schritt 4", title: "Übergabe", note: "Code und Daten gehören dir" },
      ],
    },
    stack: {
      label: "Ein System, sechs angebundene Dienste",
      services: ["Google Maps", "OpenAI", "Hunter", "NeverBounce", "Instantly", "Stripe"],
      coreLabel: "Frostbreaker",
      coreNote: "Next.js · FastAPI · Postgres",
      footnote: "Zugangsschlüssel verschlüsselt pro Nutzer, Hosting in der EU.",
    },
  },
  startPage: {
    title: "Lead-Gen und Cold Outreach für alle eure Kunden, aus einem Tool, unter eurem eigenen Namen.",
    body: "Ein eigener Workspace pro Kunde, ein teilbarer Report-Link im Look des jeweiligen Kunden, und ein Dashboard, das gebuchte Meetings und Pipeline-Wert zeigt, nicht nur Öffnungsraten.",
    ctaNote: "Dreißig Minuten, kein Verkaufsgespräch. Monatlich kündbar.",
    workspaceHeading: "Ein Login, ein Workspace pro Kunde",
    factCard: { fact: "Bei reinen Versand-Tools ist Multi-Kunden-Verwaltung meist ein separat bepreistes Zusatzmodul.", sub: "Bei Frostbreaker ist das von Anfang an Teil des Produkts, weil Lead-Suche, Personalisierung und Reporting sowieso pro Kunde getrennt laufen müssen.", source: "Marktvergleich White-Label-Cold-Email-Tools, 2026" },
    finalHeading: "30 Minuten, wir zeigen es live an eurer eigenen Nische",
    finalBody: "Kein Verkaufsgespräch von der Stange, sondern eine echte Suche mit euren eigenen Kriterien.",
    backLink: "Lieber erst alle Details ansehen?",
  },
  legal: {
    back: "Zurück zur Startseite",
    footerLine: (year: number) => `© ${year} Frostbreaker · Wien, Österreich`,
    impressumPage: {
      updated: "Stand: Juli 2026",
      identityHeading: "Angaben gemäß § 5 ECG, § 25 Mediengesetz",
      identityLines: [
        "Youssef Tayachi",
        "Einzelunternehmer",
        "Gewerbe: Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik",
        "Bernoullistraße 4/17",
        "1220 Wien, Österreich",
      ],
      authorityHeading: "Gewerbebehörde",
      authorityText: "Magistrat der Stadt Wien, Magistratisches Bezirksamt für den 22. Bezirk.",
      chamberHeading: "Kammerzugehörigkeit",
      chamberText:
        "Mitglied der Wirtschaftskammer Österreich (WKO), Fachgruppe Unternehmensberatung, Buchhaltung und Informationstechnologie (UBIT), Landesgremium Wien. Anwendbare Rechtsvorschrift: Gewerbeordnung 1994 (GewO), abrufbar unter ris.bka.gv.at.",
      taxHeading: "Umsatzsteuer",
      taxText: "Kleinunternehmer im Sinne des § 6 Abs. 1 Z 27 UStG. Es wird daher keine Umsatzsteuer ausgewiesen.",
      contactHeading: "Kontakt",
      contactEmailLabel: "E-Mail:",
      purposeHeading: "Unternehmensgegenstand",
      purposeText: "Entwicklung und Betrieb von Software zur B2B-Lead-Recherche und -Anreicherung.",
      liabilityHeading: "Haftungshinweis",
      liabilityText:
        "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
    },
    privacyPage: {
      updated: "Stand: Juli 2026",
      controllerHeading: "1. Verantwortlicher",
      controllerText: "Youssef Tayachi, Bernoullistraße 4/17, 1220 Wien, Österreich.",
      controllerContactLabel: "Kontakt für Datenschutzanfragen:",
      dataHeading: "2. Welche Daten wir verarbeiten",
      dataText:
        "Beim Besuch dieser Website verarbeiten wir technisch notwendige Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite) für Betrieb und Sicherheit der Seite. Ein Kontaktformular gibt es nicht: E-Mail auf der Kontaktseite ist ein direkter mailto-Link, der euer eigenes E-Mail-Programm öffnet, dabei werden keine Daten an uns übermittelt.",
      cookiesHeading: "3. Cookies",
      cookiesText:
        "Diese Website setzt ein einziges, technisch notwendiges Cookie (lang) zur Sprachspeicherung, ein Jahr gültig. Keine Analyse, keine Werbung, keine Einwilligung erforderlich.",
      analyticsHeading: "4. Reichweitenmessung",
      analyticsText:
        "Wir nutzen Vercel Web Analytics zur anonymisierten, cookie-freien Auswertung von Seitenaufrufen. Keine IP-Adressen oder sonstigen identifizierenden Daten werden gespeichert.",
      calendlyHeading: "5. Terminbuchung über Calendly",
      calendlyText:
        "Der Button „Call buchen“ führt zu Calendly (Calendly LLC, USA), das in einem neuen Tab öffnet. Für dort eingegebene Daten gilt Calendlys Datenschutzerklärung, nicht diese hier.",
      hostingHeading: "6. Hosting",
      hostingText:
        "Diese Website wird bei Vercel Inc. (USA) gehostet. Die Übermittlung erfolgt datenschutzkonform über Standardvertragsklauseln der EU-Kommission.",
      retentionHeading: "7. Speicherdauer",
      retentionText:
        "Server-Logs werden automatisiert für einen kurzen, zur Fehleranalyse notwendigen Zeitraum gespeichert und danach gelöscht. Das Sprach-Cookie bleibt höchstens ein Jahr gespeichert.",
      rightsHeading: "8. Eure Rechte",
      rightsText:
        "Ihr habt das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wendet euch dazu an uns (Kontakt oben). Außerdem habt ihr das Recht, euch bei der österreichischen Datenschutzbehörde (dsb.gv.at) zu beschweren.",
    },
    termsPage: {
      updated: "Stand: Juli 2026",
      scopeHeading: "1. Geltungsbereich",
      scopeText:
        "Diese AGB gelten für alle Verträge zwischen Youssef Tayachi („Frostbreaker“, „wir“) und Unternehmern (B2B) über die Nutzung der Software Frostbreaker zur Recherche, Anreicherung, Verifizierung und Personalisierung von B2B-Kontaktdaten.",
      formationHeading: "2. Vertragsschluss",
      formationText:
        "Für den Starter-Plan kommt ein Vertrag zustande, indem der Kunde ein Konto registriert und den Plan über die in der Software integrierte Zahlungsabwicklung abschließt. Für den Agentur-Plan kommt der Vertrag durch ein im Anschluss an ein Beratungsgespräch erstelltes individuelles Angebot und dessen schriftliche Annahme (auch per E-Mail) zustande.",
      scopeOfServiceHeading: "3. Leistungsumfang",
      scopeOfServiceText:
        "Frostbreaker stellt eine Software bereit, mit der Kunden Unternehmen recherchieren, Ansprechpartner samt E-Mail-Adressen ermitteln, diese verifizieren und automatisiert personalisierte Textbausteine erstellen lassen können. Die nutzbaren Datenquellen (z. B. Google Places, Hunter) können sich ändern.",
      byokHeading: "4. Bring Your Own Key (BYOK)",
      byokText:
        "Kunden hinterlegen eigene API-Zugangsdaten Dritter (z. B. Kartendienste, E-Mail-Anreicherung, KI-Textgenerierung) und tragen die dabei anfallenden Kosten selbst. Zusätzlich fällt die Nutzungsgebühr für den gewählten Frostbreaker-Plan an (Starter zum jeweils aktuellen Listenpreis, Agentur gemäß individuellem Angebot), siehe frostbreaker.app/preise.",
      customerDutyHeading: "5. Pflichten des Kunden",
      customerDutyText:
        "Der Kunde ist allein dafür verantwortlich, recherchierte Kontakte im Einklang mit den für ihn geltenden Regeln zur Direktwerbung zu kontaktieren (u. a. TKG in Österreich, UWG in Deutschland). Frostbreaker stellt ein Werkzeug bereit, prüft aber nicht die rechtliche Zulässigkeit einzelner Kampagnen.",
      availabilityHeading: "6. Verfügbarkeit",
      availabilityText:
        "Wir bemühen uns um hohe Verfügbarkeit, sichern jedoch keine bestimmte Uptime zu. Für die Verfügbarkeit von Drittanbieter-Diensten (z. B. Hunter, OpenAI) übernehmen wir keine Gewähr.",
      liabilityHeading: "7. Haftung",
      liabilityText:
        "Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie nach zwingenden gesetzlichen Vorschriften. Im Übrigen ist die Haftung auf den vertragstypisch vorhersehbaren Schaden begrenzt.",
      termHeading: "8. Laufzeit und Kündigung",
      termText:
        "Verträge laufen monatlich und sind zum Ende des laufenden Monats ohne Kündigungsfrist und ohne Mindestlaufzeit kündigbar, sofern im individuellen Angebot für den Agentur-Plan nichts anderes vereinbart wird.",
      finalHeading: "9. Schlussbestimmungen",
      finalText: "Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist, soweit gesetzlich zulässig, Wien.",
    },
  },
};

const en: typeof de = {
  nav: {
    produkt: "Product",
    produktItems: [
      { label: "All features", href: "/funktionen" },
      { label: "Walkthrough", href: "/#rundgang" },
      { label: "Three channels", href: "/#kanaele" },
      { label: "Personalization", href: "/funktionen#personalize" },
      { label: "Integrations", href: "/#integrationen" },
    ],
    funktionenItems: [
      { label: "All features", href: "/funktionen" },
      { label: "Lead Finder", href: "/funktionen#find" },
      { label: "Technology filter", href: "/funktionen#tech" },
      { label: "Decision Maker Finder", href: "/funktionen#enrich" },
      { label: "Personalization", href: "/funktionen#personalize" },
      { label: "Email Copy Coach", href: "/funktionen#check" },
      { label: "Campaigns", href: "/funktionen#send" },
      { label: "Suppression list", href: "/funktionen#protect" },
      { label: "Pipeline", href: "/funktionen#pipeline" },
    ],
    agenturen: "For Agencies",
    preise: "Pricing",
    vergleich: "Comparison",
    faq: "FAQ",
    kontakt: "Contact",
    custom: "Custom Software",
  },
  agencyPage: {
    metaTitle: "For agencies: one login, one workspace per client",
    metaDescription:
      "Run several clients in separate workspaces, with their own branding and shareable reports that need no login. One subscription instead of one per client.",
    eyebrow: "For agencies",
    title: "One login. One workspace per client. No new subscription for each.",
    intro:
      "One login per client, one subscription per client, a hand-built report at month's end. That's what the Agency plan is for.",
    sections: [
      {
        id: "workspaces",
        eyebrow: "Separated",
        title: "Every client in their own space",
        body: "Leads, campaigns and suppression lists stay separated per client. Switch inside the same login, new clients set up in seconds.",
        bullets: [
          "Unlimited workspaces included in the plan",
          "Name, logo and accent colour per workspace",
          "Suppression list per client, no overlap",
        ],
      },
      {
        id: "report",
        eyebrow: "Presentable",
        title: "The report you can hand over",
        body: "One link shows the numbers in that client's look, no account needed. Replaces the spreadsheet that otherwise gets built by hand each month.",
        bullets: [
          "No login needed for the end client",
          "In the branding of that client",
          "Contact details stay with you",
        ],
      },
      {
        id: "costs",
        eyebrow: "Predictable",
        title: "What a client costs you",
        body: "The plan is fixed, lookup costs follow volume. What you charge your clients for it stays your decision.",
        bullets: [
          "€199 a month, regardless of client count",
          "≈ €65 in lookup cost per 1,000 leads",
          "No surcharge per workspace created",
        ],
      },
    ],
    contrastTitle: "What multi-client management usually costs",
    contrastBody:
      "With pure sending tools, multi-client management is usually a separately priced add-on with its own price per client account, and then it only covers sending. Research and reporting come on top. Here both are included from the start.",
    ctaTitle: "Talk to us briefly about your client setup",
    ctaBody:
      "On the Agency plan we set up workspaces and branding together, which is why a short call comes first rather than a self-service signup. 30 minutes, no slide deck.",
    ctaLabel: "Book a call",
  },
  pricingPage: {
    metaTitle: "Pricing: €99 or €199 per month, plus your actual lookup cost",
    metaDescription:
      "Fixed monthly prices with no lock-in, plus lookup costs at cost price. Setup happens together on a call, cancel monthly.",
    eyebrow: "Pricing",
    title: "All prices in detail",
    intro:
      "You pay for the plan and for the lookups your searches actually trigger. Nothing else. No setup fee, no minimum term, no credit bundle that expires at the end of the month.",
    breakdownTitle: "What your invoice is made of",
    breakdownIntro: "So nobody is surprised by the first invoice, here are both items side by side.",
    breakdown: [
      {
        id: "plan",
        label: "Fixed monthly price",
        value: "€99 or €199",
        body: "Depending on the plan. Cancel monthly, no minimum term, no setup fee.",
      },
      {
        id: "usage",
        label: "Lookups, at cost",
        value: "≈ $4 / 100 companies",
        body: "Settled directly through your own accounts. What a search cost appears in the dashboard afterwards.",
      },
    ],
    breakdownExample:
      "Example: 1,000 qualified leads a month on the Starter plan comes to roughly €99 plus about €65 in lookup cost.",
    faqTitle: "Pricing questions",
    faq: [
      { q: "How does getting started work?", a: "In thirty minutes we look at your client setup together, set up the first workspace and connect the API accounts. No payment details needed for that — those only come when you decide to continue." },
      { q: "What happens if I do not continue?", a: "Without an active subscription the account pauses, nothing is deleted. You decide whether and on which plan to continue." },
      { q: "Can I switch between plans?", a: "Yes, in both directions. The change takes effect at the next billing period, workspaces and leads are kept." },
      { q: "What counts towards the 5,000 leads on Starter?", a: "Only qualified leads, meaning person-specific addresses. Generic addresses like info@ don't count, and a company counts once even if several people are found." },
      { q: "Can I cancel any time?", a: "Yes, monthly, with no notice beyond the current month and no minimum term." },
      { q: "What happens to my data if I cancel?", a: "Your data is deleted after the contract ends, or returned on request, as set out in the DPA. There is no lock-in period and no export fee." },
    ],
  },
  featuresPage: {
    metaTitle: "Features: from search to answered email",
    metaDescription:
      "Every Frostbreaker feature at a glance: lead search via Google Maps, company database and a decision-maker database with technology filter, decision-maker research, email verification, AI personalization, campaigns, deliverability and suppression list.",
    eyebrow: "Features",
    title: "From search to answered email",
    intro:
      "What takes four subscriptions and three CSV exports elsewhere runs here in one pass. This page walks through every step.",
    groups: [
      {
        id: "find",
        eyebrow: "Find",
        title: "Four sources, one list",
        body: "Local businesses via Google Maps, companies via Hunter's database, decision makers with a verified address via Apollo, or via Prospeo by trigger: who is hiring right now, how much website traffic a company gets and how fast it is growing. Playbooks bring ready-made combinations of search term and filters, and a lead subscription keeps a list growing weekly or daily on its own.",
        bullets: [
          "Radius search in metres",
          "Filter for missing website or weak rating",
          "Industry playbooks for common niches",
          "Lead subscription: once, weekly or daily",
        ],
      },
      {
        id: "tech",
        eyebrow: "Narrow down",
        title: "Find companies by what they run, not by keywords",
        body: "A keyword matches what a company talks about. The technology it runs shows what it actually operates: a Shopify shop has Shopify in its source code, whatever the about page says. If you build Shopify apps, do Shopware migrations or set up Klaviyo, your audience is not an industry, it is a technology.",
        bullets: [
          "Over 10,000 technologies in the catalogue",
          "Shop systems, payment, CMS and sales tools",
          "Including the ones common in German-speaking markets: Shopware, JTL, Oxid, PlentyMarkets",
          "The hook for your first line comes from the same detection",
        ],
      },
      {
        id: "enrich",
        eyebrow: "Enrich",
        title: "The right person, not the switchboard",
        body: "The Frostbreaker research works out who actually runs the business and matches that against the addresses on the company domain. Role addresses like info@ or office@ are filtered out automatically and don't count as leads.",
        bullets: [
          "Name and role of the decision-maker",
          "Email verification right in the table",
          "Phone number from the public Google listing",
          "Generic addresses filtered out",
        ],
      },
      {
        id: "personalize",
        eyebrow: "Personalize",
        title: "The icebreaker is yours",
        body: "The system prompt is fully editable and you can keep up to five templates. You set the data source, the word limit and the banned words, and test against a real company before anything is saved.",
        bullets: [
          "Company description, website text or both",
          "Up to five custom templates",
          "Word limit and banned-phrase list",
          "Live test before saving",
        ],
      },
      {
        id: "check",
        eyebrow: "Check",
        title: "Caught before it sends, not after",
        body: "Right in the sequence editor: Hemingway-style readability, classic spam-trigger words, and a flag when the copy reads too much like AI. Everything runs in the browser while you type, no extra tool and nothing you write gets sent anywhere.",
        bullets: [
          "Readability score incl. grade level, German and English",
          "Spam-trigger words highlighted directly in the text",
          "Catches leftover placeholders like “[Company]”",
          "“Sounds like AI” flag, clearly marked as a heuristic",
        ],
      },
      {
        id: "send",
        eyebrow: "Send",
        title: "Campaigns, mailboxes, deliverability",
        body: "Sequences with schedule and follow-ups run natively in the tool. Mailboxes connect via bulk upload, warmup and daily volume are visible per mailbox. SPF, DKIM and DMARC are checked live via DNS.",
        bullets: [
          "Start and pause sequences",
          "Connect mailboxes in bulk",
          "Warmup and daily volume at a glance",
          "SPF, DKIM and DMARC checked live",
        ],
      },
      {
        id: "protect",
        eyebrow: "Protect",
        title: "What must not go out, doesn't go out",
        body: "Existing clients and opt-outs land on the suppression list and are checked automatically before every send. API keys are stored encrypted.",
        bullets: [
          "Suppression list for contacts and whole domains",
          "Automatic check before every send",
          "API keys stored encrypted",
        ],
      },
      {
        id: "pipeline",
        eyebrow: "Follow-up",
        title: "Every reply lands in the right column automatically",
        body: "A kanban board for replies instead of a table with a status column: drag contacts from New to Customer. Every contact has its own deals with value and stage, plus notes, calls and tasks in a timeline – so nothing slips through when you're juggling a lot of conversations. Replies from Instantly are sorted in automatically.",
        bullets: [
          "Six stages from New to Customer, drag and drop",
          "Replies from Instantly are sorted in automatically",
          "Deals with value and stage right on the contact",
          "Notes, calls and tasks in a timeline",
        ],
      },
    ],
    ctaTitle: "The fastest way to understand it is to try it",
    ctaBody: "Thirty minutes, set up together, cancel monthly.",
  },
  sourcesExtra: {
    title: "What runs along with every search",
    linkLabel: "All of it in detail on the features page",
    items: [
      {
        id: "tech",
        label: "Technology filter",
        title: "Find companies by what they run, not by keywords",
        body: "A keyword matches what a company talks about. The technology it runs shows what it actually operates: a Shopify shop has Shopify in its source code, whatever the about page says.",
      },
      {
        id: "local",
        label: "Local businesses",
        title: "Including the ones no B2B database lists",
        body: "Classic databases are built on LinkedIn profiles. A business that keeps none does not exist to them. Via Google Places, practically every business with an address is findable.",
      },
      {
        id: "person",
        label: "No info@ addresses",
        title: "Every lead is a person you can actually reach",
        body: "Addresses like info@, office@ or contact@ are filtered out. Only what is clearly assigned to a real person makes it into the leads list.",
      },
      {
        id: "verify",
        label: "Address check",
        title: "Verified before an address hurts your domain",
        body: "An invalid address does not cost you one lead, it costs reputation. The check runs automatically before every send, with no second tool.",
      },
    ],
  },
  searchModes: {
    eyebrow: "Where the leads come from",
    title: "Four routes, one result: people with a name and a verified address",
    body: "You decide per search where the companies come from. All four routes end up in the same list, the same enrichment and the same sending.",
    modes: [
      {
        id: "local",
        label: "On location",
        title: "Via Google Maps",
        body: "The search term is a free text field: driving school, yoga studio, veterinary practice, car dealership, hotel. If it has a listing on the map, Frostbreaker finds it, no matter how digital the business is.",
        points: [
          "Free search term, no fixed industry list",
          "Radius in metres around any location",
          "Only businesses without their own website",
          "Only businesses below a rating threshold",
          "Phone number from the map listing",
        ],
      },
      {
        id: "corporate",
        label: "Companies",
        title: "Via Hunter's company database",
        body: "487 industries, 9 countries and 8 size bands combine freely, plus city and your own keywords. The company search itself is free; the addresses then come verified from Hunter.",
        points: [
          "487 industries from software to dentistry",
          "9 countries across Europe and the US",
          "8 size bands from 1 to over 10,000 employees",
          "City, US state and free-text keywords",
          "Addresses verified by Hunter, not guessed from name patterns",
        ],
      },
      {
        id: "apollo",
        label: "Decision-makers",
        title: "Via Apollo's decision-maker database",
        body: "Company and decision maker with an already verified email in one step. Here the number you ask for is the number of leads, not an estimate: on the other routes the address is researched afterwards.",
        points: [
          "Decision maker and verified address in one step",
          "Filter by the technology they run, such as Shopify",
          "11 seniority levels from owner to individual contributor",
          "Free-text job titles, countries and company size",
          "Up to 1,000 leads per search",
        ],
      },
      {
        id: "prospeo",
        label: "Trigger",
        title: "Via Prospeo's decision-maker database",
        body: "Like Apollo — company, decision maker and verified address in one run. The difference is the filters: who is hiring right now, how much website traffic a company gets, and how fast it is growing.",
        points: [
          "Currently hiring for a specific role",
          "Website traffic: visits per month, growth, countries of origin",
          "Technology in use, detected via Wappalyzer",
          "Revenue band and headcount",
          "Match count checkable up front, before credits are spent",
        ],
      },
    ],
  },
  dailyDiff: {
    eyebrow: "The difference in practice",
    title: "The same month, once with and once without",
    body: "Apollo finds decision makers, Instantly sends reliably. Both stay. The question is what happens between the two, and how much of it you do by hand.",
    manualBadge: "By hand",
    before: {
      label: "Today: Apollo + Instantly",
      countLabel: "Steps",
      count: "8",
      manualLabel: "of those by hand",
      manualCount: "4",
      steps: [
        { text: "Filter in Apollo and export 250 leads as a CSV.", manual: false },
        { text: "Remove opt-outs and existing customers from the CSV. Apollo knows about neither, and Instantly never reports them back.", manual: true },
        { text: "Write a personal line for every lead, or fall back to generic placeholders that perform worse than no personalisation at all.", manual: true },
        { text: "Upload the CSV to Instantly and map the columns.", manual: false },
        { text: "Build the campaign and the follow-up sequence.", manual: false },
        { text: "Read replies in Instantly, record outcomes somewhere else.", manual: true },
        { text: "Assemble the client's numbers from two tools into one spreadsheet.", manual: true },
        { text: "Next month, start over. Apollo does not know who you contacted last month.", manual: false },
      ],
    },
    after: {
      label: "With Frostbreaker",
      countLabel: "Steps",
      count: "4",
      manualLabel: "of those by hand",
      manualCount: "0",
      steps: [
        "Start one search, with the same filters as in Apollo, plus the technology they run.",
        "It runs on its own: blocklist checked, address verified, a personal line written per company.",
        "Start the campaign straight from that same list, no export and no column mapping.",
        "Replies, meetings and the client report sit in the same dashboard.",
      ],
    },
    note: "Frostbreaker replaces neither Apollo nor Instantly. It replaces the manual work between them, and the CRM subscription that would otherwise be the third one.",
  },
  compare: {
    eyebrow: "What stays, what goes",
    title: "Keep Apollo. Keep Instantly. Cancel your CRM.",
    body: "Every row is a step of work between “I know my niche” and “I have a meeting booked”. The question is not which tool is best, but who does the steps no tool covers.",
    featureHeader: "Step of work",
    tools: ["Apollo", "Hunter", "Instantly", "Pipedrive"],
    usLabel: "Frostbreaker",
    yes: "included",
    no: "not part of the product",
    partial: "partly",
    onlyUs: "None of the four does this.",
    alsoIn: "Also in:",
    rows: [
      { id: "find", label: "Find decision-makers with a name and a role", tools: [true, true, false, false] },
      { id: "verify", label: "Verify the email address", tools: [true, true, false, false] },
      { id: "opener", label: "Write an opener per lead from researched facts", tools: [false, false, false, false] },
      { id: "copycheck", label: "Check the copy before it goes out: length, spam words, AI tone, one CTA only", tools: [false, false, false, false] },
      { id: "send", label: "Start the campaign and the sequence", tools: [false, false, true, false] },
      { id: "gate", label: "Hold the start back when SPF, DKIM or the bounce rate are off", tools: [false, false, "partial", false] },
      { id: "linkedin", label: "Prepare the LinkedIn message per contact, ready to send", tools: [false, false, false, false] },
      { id: "calls", label: "Call list with number, context and due date", tools: [false, false, false, "partial"] },
      { id: "chain", label: "Email, LinkedIn and phone as one chain with exactly one next step", tools: [false, false, false, false] },
      { id: "outcomes", label: "Attribute a reply to its copy version, through to the meeting rather than the reply", tools: [false, false, "partial", false] },
      { id: "crm", label: "Deals, tasks and notes on the contact", tools: [false, false, false, true] },
    ],
    closing:
      "Apollo delivers addresses. Instantly delivers deliverability. Both tell you what happened, neither tells you why. Frostbreaker writes the copy, sends it and sees the reply to it — on your own accounts, at your own rates, without a cent of markup.",
    ledgerLabel: "The honest ledger",
    ledgerKeep: "Stays: Apollo, Hunter, Instantly, OpenAI — on your accounts, at your rates. We add no markup.",
    ledgerDrop: "Goes: the per-seat CRM subscription and the manual work in between. On a team of six, that is the bigger line item, not ours.",
    footnote:
      "As of August 2026, checked against the providers' public product descriptions. “Partly” means: present, but not to the extent the row describes. A dash means “not part of the product”, not “works badly”.",
  },
  worksWith: {
    eyebrow: "Complements your stack",
    title: "Already using Apollo, Hunter or Instantly? Then this is not a replacement",
    body: "Frostbreaker brings no database and no mailbox of its own. It runs on your accounts, at cost, and closes the gaps between the tools you already pay for.",
    rows: [
      {
        tool: "Apollo",
        good: "Delivers decision makers with a verified address, plus the technology filter.",
        gap: "Doesn't write an individual line per lead, and knows nothing about your blocklist or who you already contacted last month.",
      },
      {
        tool: "Hunter",
        good: "Finds addresses for a domain and has a usable company database.",
        gap: "Doesn't know local businesses without a database entry: trades, hospitality and practices are simply missing there.",
      },
      {
        tool: "Instantly",
        good: "Sends reliably, warms mailboxes up and rotates them cleanly.",
        gap: "Doesn't research and doesn't personalise. What you feed it is decided somewhere else.",
      },
    ],
    bridgeLabel: "What Frostbreaker does in between",
    bridge: [
      "One search instead of three interfaces, with the result in a single list",
      "An individual opening line per lead, from the research on that company",
      "Blocklist and existing customers are checked before every search and every send",
      "Replies, bounces and meetings flow back into the same dashboard",
      "One workspace per client, without booking a new subscription for each",
    ],
    note: "Every lookup runs on your own accounts. Frostbreaker adds no markup to lookup costs.",
  },
  techFilter: {
    eyebrow: "Technology filter",
    title: "Find companies by the technology they actually run",
    body: "Looking for e-commerce clients, you would normally type \"ecommerce\" as a keyword and get agencies, blogs and consultants who write about e-commerce. The technology filter works the other way round: it recognises from the shop itself which system is running underneath.",
    points: [
      {
        title: "A keyword guesses, technology proves",
        body: "A keyword matches what a company talks about. The technology it runs shows what it actually operates: a Shopify shop has Shopify in its source code, whatever the about page says.",
      },
      {
        title: "The hook for your opening line",
        body: "Knowing a shop runs on Shopware and offers Klarna lets you write a first line that fits only that company. That is exactly how a recipient tells a mass mail from a message meant for them.",
      },
      {
        title: "Matches what you actually sell",
        body: "Building Shopify apps, doing Shopware migrations or Klaviyo setups? Then your audience is not an industry, it is a technology. This filter maps precisely that.",
      },
    ],
    scaleLabel: "Catalogue size",
    scaleValue: "over 10,000 technologies",
    scaleNote: "From the major shop systems down to individual payment and review tools. The interface shows a curated selection of what matters for e-commerce.",
    dachLabel: "For the DACH market",
    dachValue: "Shopware, JTL, Oxid, PlentyMarkets",
    dachNote: "Not just the US systems: the shop platforms common in German-speaking markets are covered too.",
  },
  guardMockups: {
    gate: {
      frameTitle: "Before you start",
      blocked: "2 things block the start",
      button: "Create campaign",
      checks: [
        {
          severity: "blocker",
          title: "SPF missing: send.acme-labs.com",
          body: "Without SPF the recipient cannot verify the mail really comes from this domain. It lands in spam.",
        },
        {
          severity: "blocker",
          title: "Bounce rate at 6.4% (32 of 500)",
          body: "Past 5% the recipient providers' protections kick in, and the domain carries that permanently.",
        },
        {
          severity: "warning",
          title: "118 of 406 addresses (29%) were never verified",
          body: "Unverified addresses are the most common cause of bounces.",
        },
        {
          severity: "warning",
          title: "First mail is 164 words long (recommended: under 90)",
          body: "The personalised icebreaker is counted in.",
        },
        { severity: "ok", title: "DKIM is set for every sending domain", body: "" },
      ],
    },
    chain: {
      frameTitle: "One lead, three channels",
      note: "There is always exactly one next step. Anyone who replies drops out of the chain immediately.",
      steps: [
        {
          day: "Day 0",
          title: "The email goes out",
          body: "Personalised icebreaker, verified address, your own mailboxes.",
        },
        {
          day: "Days 3, 7 and 12",
          title: "Three follow-ups run after it",
          body: "The same sequence, the same mailboxes. Anyone who replies drops out immediately.",
        },
        {
          day: "Day 15 · no reply",
          title: "LinkedIn task appears",
          body: "Only where a profile is on file. Lands in the LinkedIn list, not in a spreadsheet.",
        },
        {
          day: "Day 20 · still quiet",
          title: "The call goes into the call list",
          body: "Only where a number exists, and only once the LinkedIn task is done.",
        },
      ],
    },
    effect: {
      frameTitle: "Effect · by lead list",
      note: "Measured per contact, not per mail: a sequence sends several mails to the same person.",
      stats: [
        { label: "Contacted", value: "2,840", strong: false },
        { label: "Replied", value: "214", strong: false },
        { label: "Reply rate", value: "7.5%", strong: true },
      ],
      rows: [
        { label: "Shopify brands DACH", value: "11.4% \u00b7 68/598", percent: 11.4 },
        { label: "SaaS Series A, US", value: "8.2% \u00b7 61/744", percent: 8.2 },
        { label: "E-com from €1m revenue", value: "6.6% \u00b7 57/861", percent: 6.6 },
        { label: "Fintech DACH", value: "27 \u2014 too few", percent: null },
        { label: "Agencies AT", value: "21 \u2014 too few", percent: null },
      ],
    },
    copyOutcomes: {
      frameTitle: "Effect \u00b7 by copy",
      warning:
        "Reply rate alone is the wrong target: a version can lead and still collect nothing but rejections. The column that counts is meetings.",
      campaign: "Client: Nordwind Coffee \u00b7 resellers DACH",
      campaignCount: "964 contacts",
      bestLabel: "Best version",
      versionLabel: "Version",
      contactsWord: "contacts",
      repliesWord: "replies",
      rows: [
        {
          step: "Step 1",
          variant: "A",
          contacts: "482",
          percent: 6.0,
          replies: "29 \u00b7 6.0%",
          repliesNum: "29",
          repliesPct: "6.0%",
          meetings: "6 meetings",
          meetingsNum: "6",
          meetingsWord: "meetings",
          interested: "11 interested",
          rejections: "8 rejections",
          best: false,
        },
        {
          step: "Step 1",
          variant: "B",
          contacts: "482",
          percent: 10.6,
          replies: "51 \u00b7 10.6%",
          repliesNum: "51",
          repliesPct: "10.6%",
          meetings: "17 meetings",
          meetingsNum: "17",
          meetingsWord: "meetings",
          interested: "24 interested",
          rejections: "6 rejections",
          best: true,
        },
        {
          step: "Step 2",
          variant: "",
          contacts: "831",
          percent: 2.6,
          replies: "22 \u00b7 2.6%",
          repliesNum: "22",
          repliesPct: "2.6%",
          meetings: "4 meetings",
          meetingsNum: "4",
          meetingsWord: "meetings",
          interested: "7 interested",
          rejections: "5 rejections",
          best: false,
        },
        {
          step: "Step 3",
          variant: "",
          contacts: "26",
          percent: null,
          replies: "26 \u2014 too few",
          repliesNum: "",
          repliesPct: "",
          meetings: "",
          meetingsNum: "",
          meetingsWord: "",
          interested: "\u2014 interested",
          rejections: "\u2014 rejections",
          best: false,
        },
      ],
      note: "The attribution comes from the sending itself: a reply carries the step of the mail it answers. Below 30 contacts no percentage is shown.",
      noteShort: "Two versions of the same step. B has fewer rejections and three meetings — you only see that when the same tool writes the copy and receives the reply.",
    },
    linkedin: {
      frameTitle: "LinkedIn \u00b7 message ready",
      name: "Brian Marver",
      role: "Co-Founder & CEO \u00b7 5 Star Nutrition",
      template: "Template: Default \u2605",
      greeting: "Hi Brian,",
      hookLabel: "Opener, generated per contact",
      hook: "You moved fulfilment onto three warehouses in 2024 and still kept next-day delivery, which is why I am writing.",
      pitch:
        "I build software that takes off companies like 5 Star Nutrition the work that otherwise gets stuck between five separate tools. No pitch, I just wanted to connect first.",
      signoff: "Best, Youssef",
      buttons: ["Copy", "Open profile \u2197", "Mark as sent"],
      note: "The same opener as in the email, already generated and paid for. You send it: LinkedIn has no messaging API, and a tool that sends anyway puts your account at risk.",
    },
  },
  guard: {
    eyebrow: "Before you send",
    title: "The only cold outreach tool that tells you no",
    body:
      "Eleven checks run before a campaign can start. Four of them can stop it: missing SPF or DKIM, a bounce rate above five percent, a list with nothing sendable in it. Those do not cost you a campaign, they cost you the domain.",
    points: [
      {
        title: "Blockers and notes are not the same thing",
        body: "A blocker is something that will certainly go wrong and whose damage stays. A note makes things worse, but neither certainly nor permanently. We keep that line strict: a warning that is sometimes just an opinion gets clicked away by the third time, and the real one goes with it.",
      },
      {
        title: "You can still start",
        body: "With a deliberate second click, and you see what you are taking on first. A gate you cannot pass only means the campaign gets built somewhere else.",
      },
      {
        title: "Someone keeps looking afterwards",
        body: "Every sending domain's DNS records are checked daily. If the bounce rate climbs past five percent in flight, the app pauses the campaign and tells you why.",
      },
    ],
  },
  channels: {
    eyebrow: "Three channels, one contact",
    title: "Not three tools side by side, but one process",
    body:
      "The difference between the channels is not how good they are, but how much of each runs on its own. On two of them the app prepares everything and you press the last button — that is deliberate, not a gap.",
    appLabel: "What the app does",
    youLabel: "What you do",
    cards: [
      {
        id: "email",
        label: "Email",
        title: "A sequence with its own opener per contact",
        app: [
          "Address verified before it enters the campaign",
          "One opener per contact, from the research on that company",
          "First mail and three follow-ups through your own mailboxes",
        ],
        you: "Nothing. This channel runs on its own.",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        title: "The message is written before you open LinkedIn",
        app: [
          "The same placeholders as in the email campaign",
          "The same opener, already generated and paid for",
          "Several named templates, one of them the default",
        ],
        you: "Copy, open the profile, paste, send.",
      },
      {
        id: "phone",
        label: "Phone",
        title: "Prepared instead of caught cold",
        app: [
          "Number from the public listing, no looking it up",
          "Role, company summary and call note next to it",
          "Sorted by urgency: overdue, today, later",
        ],
        you: "Call. The outcome stays on the contact.",
      },
    ],
    protectionLabel: "Why LinkedIn and phone do not send on their own",
    protectionBody:
      "LinkedIn offers no API for messages. Any tool that sends anyway drives a browser remotely, breaks the terms of service and risks suspension — in a product you sell, that means your customers' accounts. We prepare everything, you press send. The same stance as the gate: better one step by hand than a burnt account.",
    phoneNote:
      "You dial with your own phone: Frostbreaker is not a phone system and does not bill call minutes.",
  },
  chain: {
    eyebrow: "The chain",
    title: "No lead is left behind, and none gets two tasks at once",
    body:
      "Instantly does not know your phone. Lemlist has no CRM. Pipedrive has no campaign. Here it is one process, and it runs without you remembering it.",
    points: [
      {
        title: "Always exactly one next step",
        body: "No lead gets a LinkedIn task and a call queued at the same time. The call only appears once the LinkedIn task is done.",
      },
      {
        title: "Anyone who replies drops out immediately",
        body: "The chain only applies to contacts who were mailed and stayed quiet. A reply ends it the same moment.",
      },
      {
        title: "Only where there is something to do",
        body: "LinkedIn only with a profile on file, a call only with a number. A task without an address is a research task, and that does not belong in a work list.",
      },
    ],
  },
  honesty: {
    eyebrow: "What we will not fake",
    title: "A number that means nothing does not get shown",
    body:
      "Twelve mails and one reply is not \u201c8.3%\u201d. It is twelve mails and one reply. Below thirty contacted people we print \u201ctoo few\u201d instead of a percentage, and the bar stays empty.",
    points: [
      {
        title: "Same rule for A/B tests",
        body: "No winner until every version has 50 sends and the gap survives a chance test. Every other dashboard will happily tell you variant B tripled your reply rate off nine replies.",
      },
      {
        title: "Measured per contact, not per mail",
        body: "A sequence sends three or four mails to the same person. The one reply should not be divided by four.",
      },
      {
        title: "Out-of-office replies do not count",
        body: "An autoresponder is not a person who reacted. Counting it would push the rate up, which is exactly the direction people like to be fooled in.",
      },
    ],
  },
  phone: {
    eyebrow: "Second channel",
    title: "When email isn't enough, the number is already there",
    body: "Cold outreach doesn't end at email. Someone who ignores two follow-ups is often still reachable, just by phone. Frostbreaker plans those calls in the same place the lead came from.",
    points: [
      {
        title: "Prepared, not caught cold",
        body: "Every row carries the number, the person's role and the company summary from the research. You know who you are talking to, and why, before you dial.",
      },
      {
        title: "Sorted by urgency",
        body: "Overdue, today, later. A promised callback no longer slips because it sat in a spreadsheet nobody opened.",
      },
      {
        title: "The outcome stays with the lead",
        body: "Call note and result are saved on the contact and set its status. The next step then sits in the same history as the emails you sent.",
      },
    ],
    note: "You dial with your own phone: Frostbreaker is not a phone system and does not bill call minutes.",
  },
  safeStart: {
    eyebrow: "Start without prior knowledge",
    title: "The two things cold outreach usually fails on are built in",
    cards: [
      {
        id: "guide",
        label: "Guide",
        title: "The guide lives in the tool, not in a PDF",
        body: "Ten chapters cover the whole flow: why mailboxes need two to four weeks of warmup, what SPF, DKIM and DMARC mean in plain language, which search route fits which audience. Plus a checklist showing what is still missing.",
        points: [
          "A warning about the most expensive beginner mistake: sending before warmup",
          "Cold outreach never belongs on your main domain, with the reasoning",
          "Every page links into the matching chapter",
        ],
      },
      {
        id: "optout",
        label: "Legal safety",
        title: "The opt-out link is part of the campaign, not an afterthought",
        body: "Every campaign email contains an opt-out link. One click adds the address to your blocklist permanently, and that list is checked before every further search and every further campaign. Nothing to maintain, nothing to add by hand.",
        points: [
          "Opted-out recipients no longer appear in any new search",
          "Existing customers can be excluded in bulk via CSV",
          "The check runs before sending, not after",
        ],
      },
    ],
  },
  appMockups: {
    dashboard: {
      title: "Dashboard",
      subtitle: "Overview of your lead pipeline",
      sampleBadge: "Example view",
      stats: [
        { label: "Searches", value: "62" },
        { label: "Companies", value: "890" },
        { label: "Contacts", value: "2,430" },
        { label: "With email", value: "1,612" },
        { label: "Replies", value: "168", accent: true },
        { label: "Meetings", value: "15", accent: true },
      ],
      costLabel: "Total lookup cost",
      costValue: "$36.90",
      savings: {
        strong: "≈ 324 hours",
        rest: "of manual research saved",
        cost: "equals around €14,500 in labour cost",
      },
      chartTitle: "New leads and replies",
      chartRange: "last 14 days",
      chartLegend: ["New leads", "Replies"],
      chartBars: [
        [34, 8], [46, 11], [41, 9], [58, 16], [52, 13], [67, 19], [61, 17],
        [74, 22], [69, 20], [83, 27], [78, 24], [91, 31], [86, 29], [100, 36],
      ],
    },
    search: {
      title: "New search",
      subtitle: "Enter search term and location, the rest runs automatically.",
      playbookLabel: "Industry playbook",
      playbookValue: "No playbook, set manually",
      tabs: ["On location (Maps)", "Companies (Hunter)", "Decision-makers (Apollo)", "Triggers (Prospeo)"],
      fields: [
        { label: "Search term", value: "Driving school" },
        { label: "Location", value: "Hamburg" },
        { label: "Radius", value: "10,000 m" },
      ],
      filterLabel: "Audience filters",
      filters: ["Without own website", "Rating below 4.0"],
      subscriptionLabel: "Lead subscription",
      subscriptionValue: "Weekly",
      subscriptionNote: "New matches land in the same list automatically.",
      cta: "Start search",
    },
    corporateSearch: {
      title: "New search",
      subtitle: "Combine industry, size and country.",
      tabs: ["On location (Maps)", "Companies (Hunter)", "Decision-makers (Apollo)", "Triggers (Prospeo)"],
      fields: [
        { label: "Industry", value: "Marketing Services" },
        { label: "Country", value: "Germany" },
        { label: "City", value: "Berlin" },
        { label: "Employees", value: "11–50" },
      ],
      keywordsLabel: "Keywords",
      keywordsValue: "Performance, e-commerce",
      noteLabel: "What comes back",
      noteValue: "Companies from the database, addresses then verified by Hunter",
      cta: "Start search",
    },
    apolloSearch: {
      title: "New search",
      subtitle: "Audience, decision makers and technology in one step.",
      tabs: ["On location (Maps)", "Companies (Hunter)", "Decision-makers (Apollo)", "Triggers (Prospeo)"],
      fields: [
        { label: "Audience", value: "Supplements" },
        { label: "Company size", value: "11–50" },
        { label: "Target: leads with email", value: "250" },
      ],
      titlesLabel: "Decision-maker titles",
      titlesValue: "Founder, Managing Director, E-Commerce Manager",
      chipsLabel: "Seniority",
      chips: ["Owner", "Founder", "C-suite", "Managing Director"],
      techLabel: "Technology used",
      techChips: ["Shopify", "Klaviyo"],
      noteLabel: "What comes back",
      noteValue: "Company, decision maker and verified email in one step",
      cta: "Start search",
    },
    calls: {
      title: "Call list",
      subtitle: "Everything due across all leads, with number and prep.",
      noteLabel: "Planning note",
      groups: [
        {
          label: "Overdue",
          overdue: true,
          count: "1",
          rows: [
            {
              name: "Huber Joinery",
              role: "Markus Huber · Owner",
              phone: "+43 662 884213",
              note: "Replied to the second email, asked for a callback in the morning.",
            },
          ],
        },
        {
          label: "Today",
          overdue: false,
          count: "2",
          rows: [
            {
              name: "Dr. Berger Dental",
              role: "Julia Berger · Practice owner",
              phone: "+43 1 5324110",
              note: "Meeting confirmed, prepare the online booking offer.",
            },
            {
              name: "Café Sonnenblick",
              role: "Elena Roth · Managing director",
              phone: "+43 316 771902",
              note: "No website, expressed interest in online ordering.",
            },
          ],
        },
      ],
    },
    techFilter: {
      title: "Technology used",
      subtitle: "Pick the systems your audience can be recognised by.",
      badge: "Clickable",
      or: "or",
      groups: [
        {
          label: "Shop systems",
          items: [
            { id: "shopify", label: "Shopify" },
            { id: "shopware", label: "Shopware" },
            { id: "woocommerce", label: "WooCommerce" },
            { id: "magento", label: "Magento" },
            { id: "jtl", label: "JTL-Shop" },
            { id: "oxid", label: "Oxid eShop" },
            { id: "plentymarkets", label: "PlentyMarkets" },
            { id: "prestashop", label: "PrestaShop" },
          ],
        },
        {
          label: "Tools, payment & CMS",
          items: [
            { id: "klaviyo", label: "Klaviyo" },
            { id: "gorgias", label: "Gorgias" },
            { id: "klarna", label: "Klarna" },
            { id: "recharge", label: "Recharge" },
            { id: "trustedshops", label: "Trusted Shops" },
            { id: "hubspot", label: "HubSpot" },
            { id: "webflow", label: "Webflow" },
          ],
        },
        {
          label: "Sales & lead gen",
          items: [
            { id: "apollo_io", label: "Apollo.io" },
            { id: "outreach", label: "Outreach.io" },
            { id: "salesloft", label: "SalesLoft" },
            { id: "lemlist_tool", label: "lemlist" },
            { id: "zoominfo", label: "ZoomInfo" },
          ],
        },
      ],
      resultLabel: "Your audience",
      resultEmpty: "Pick at least one system above.",
      result: (list: string) => `Companies provably running ${list}.`,
      orNote: "Multiple selections act as OR, so one search covers several systems at once instead of needing one search per system.",
    },
    leads: {
      title: "All leads",
      toolbar: { count: "97 companies · 259 contacts", verify: "Verify emails", export: "Add to campaign", csv: "Excel CSV" },
      rows: [
        { name: "Huber Carpentry", domain: "huber-carpentry.at", contacts: "3 contacts", withMail: "3 with email", color: "#0EA5E9" },
        { name: "Dr. Berger Dental", domain: "berger-dental.at", contacts: "2 contacts", withMail: "2 with email", color: "#8B5CF6" },
        { name: "Café Sonnenblick", domain: "cafe-sonnenblick.at", contacts: "1 contact", withMail: "1 with email", color: "#F59E0B" },
        { name: "Kaiser Hair", domain: "kaiser-hair.at", contacts: "2 contacts", withMail: "1 with email", color: "#10B981" },
      ],
    },
    leadDetail: {
      label: "Expanded lead",
      person: "Markus Huber",
      role: "Owner",
      company: "Huber Carpentry",
      emailLabel: "Email",
      email: "m.huber@huber-carpentry.at",
      emailBadge: "verified",
      phoneLabel: "Phone",
      phone: "+43 1 5550142",
      phoneBadge: "from Google listing",
      icebreakerLabel: "Icebreaker",
      icebreaker:
        "Five employees, own workshop, yet appointment requests still run through the contact form.",
    },
    report: {
      badge: "What the end client sees",
      client: "Muster GmbH",
      period: "Report · October",
      stats: [
        { label: "Contacted", value: "1,240" },
        { label: "Replies", value: "86" },
        { label: "Meetings", value: "9" },
      ],
      progressLabel: "Goal for the month",
      progressValue: "9 of 10 meetings",
      progressPercent: 90,
      urlLabel: "Shareable link, no login",
      url: "report.frostbreaker.app/muster-gmbh",
      note: "Individual contact details are deliberately hidden from the end client.",
    },
    mailboxes: {
      title: "Mailboxes",
      subtitle: "Warmup and daily volume per mailbox",
      rows: [
        { address: "markus@your-agency.at", state: "Warmup active", volume: "28 / 50", ok: true },
        { address: "office@your-agency.at", state: "Warmup active", volume: "42 / 50", ok: true },
        { address: "hello@your-agency.de", state: "Warming up", volume: "12 / 50", ok: false },
      ],
    },
    copyCheck: {
      title: "Copy Check",
      subtitle: "Readability, spam risk and AI-sounding, right on the text",
      badLabel: "Unedited draft",
      goodLabel: "After Copy Check",
      bad: {
        subject: [
          { text: "Free", mark: "warning" },
          { text: ": " },
          { text: "Act now", mark: "warning" },
          { text: " for more leads" },
          { text: "!!!", mark: "warning" },
        ],
        body: [
          { text: "In today's fast-paced world", mark: "warning" },
          { text: ", it's " },
          { text: "actually", mark: "info" },
          { text: " more important than ever for trade businesses to be visible online, and that's exactly where our tool can " },
          { text: "guarantee", mark: "warning" },
          { text: " more inquiries, without you having to lift a finger yourself.\n\nYour entire campaign " },
          { text: "is built for you", mark: "warning" },
          { text: " fully automatically. " },
          { text: "Call now", mark: "warning" },
          { text: ", this offer is " },
          { text: "today only", mark: "warning" },
          { text: ".\n\nBest regards,\n" },
          { text: "[Insert name]", mark: "danger" },
        ],
        stats: [
          { label: "Readability", value: "Hard" },
          { label: "Spam risk", value: "High" },
          { label: "AI-sounding", value: "Noticeable" },
        ],
      },
      good: {
        subject: [{ text: "Quick question about your fleet" }],
        body: [
          {
            text:
              "Hi Mark,\n\nI noticed Huber Carpentry currently runs three vehicles. We deliver spare parts within 24 hours, usually cheaper than the dealership.\n\nWorth a quick call next week?\n\nBest,\nJulia",
          },
        ],
        stats: [
          { label: "Readability", value: "Easy" },
          { label: "Spam risk", value: "Low" },
          { label: "AI-sounding", value: "Unremarkable" },
        ],
      },
      note: "Runs while you type, no extra tool needed.",
    },
    pipeline: {
      title: "Pipeline",
      subtitle: "Drag replies from New to Customer",
      columns: [
        { stage: "new", label: "New", cards: [{ initial: "S", name: "Sophie Wagner", company: "Wagner Fitness Studio" }] },
        { stage: "contacted", label: "Contacted", cards: [{ initial: "E", name: "Elena Roth", company: "Café Sonnenblick" }] },
        { stage: "replied", label: "Replied", cards: [{ initial: "J", name: "Julia Berger", company: "Berger Dental Practice" }] },
        { stage: "customer", label: "Customer", cards: [{ initial: "M", name: "Markus Huber", company: "Huber Joinery" }] },
      ],
      detailLabel: "Julia Berger",
      detailSub: "Berger Dental Practice",
      dealsHeading: "Deals",
      dealsEmpty: "No deal for this company yet.",
      historyHeading: "History",
      history: [{ tag: "Status", text: "New → Replied" }],
      notePlaceholder: "What was the outcome? What is the next step?",
      noteSave: "Save note",
      note: "Replies from Instantly are sorted in automatically.",
    },
  },
  heroIllustration: {
    inboxLabel: "Inbox",
    exampleLabel: "Example view",
    featured: {
      initials: "LV",
      name: "Lena Vogt",
      company: "Head of Growth · Nordwind Coffee",
      message: "“Yes, happy to! Does Tuesday at 2pm work? Send me a short note on how you set this up for similar brands.”",
      outcome: "Meeting booked",
      when: "Tue, 2:00pm",
      dealNote: "Deal created · €18,000 · next step: proposal by Friday",
    },
    others: [
      { initials: "MS", name: "Marc Sillner", company: "Founder · Sabo Athletics", status: "reply" },
      { initials: "TR", name: "Tobias Reiter", company: "CMO · Klarwerk Studios", status: "meeting" },
    ],
    replyLabel: "Reply",
    meetingLabel: "Meeting",
    footer: "Every mailbox in one inbox, synced every five minutes. Every reply is classified and attached to the contact.",
  },
  calculator: {
    eyebrow: "Interactive",
    title: "Calculate your savings potential",
    subtitle: "How many qualified leads do you want to reach per month? We'll calculate live what that means for you.",
    sliderLabel: "Qualified leads / month",
    hoursUnit: "hrs",
    hoursLabel: "manual research saved / month",
    laborLabel: "labor cost equivalent for that",
    planPrefix: "That fits the",
    apiCostPrefix: "approx.",
  },
  cta: {
    primary: "Book a call",
    secondary: "Or ask a question first",
    trialNote: "30 minutes, not a sales pitch. We look at your client setup together and set up the first workspace.",
  },
  hero: {
    eyebrow: "FOR AGENCIES RUNNING OUTBOUND FOR THEIR CLIENTS",
    h1Pre: "Find decision-makers. Reach them on ",
    h1Accent: "every channel",
    h1Post: ". Turn them into clients.",
    body: "One tool from a niche to a signed deal: verified decision-makers, a personal opener for each one, the email sequence, the LinkedIn message and the phone number. One workspace per client in their branding, all in the same CRM.",
    factBadge: "Agencies get an average of $42 back for every dollar they spend on email.",
    factSource: "Source: Litmus, State of Email 2025",
    screenshotAlt: "Frostbreaker leads table with company logos, contact count and email status",
    dashboardAlt:
      "Frostbreaker dashboard: 890 companies found, 2,430 contacts, 1,612 with an email address, around 324 hours of research saved at 36.90 US dollars in lookup cost",
  },
  heroPromises: [
    {
      title: "From a search term to a meeting",
      body: "Find, write, follow up, close — separately per client account. Without switching tools and without a CSV in between.",
    },
    {
      title: "No lead is left behind",
      body: "Email goes quiet, LinkedIn follows. LinkedIn goes quiet, the call does. Anyone who replies drops out at once.",
    },
    {
      title: "You know what books meetings",
      body: "Which copy version actually worked is something nobody else can tell you — we write it and we see the reply.",
    },
  ],
  systemMap: {
    eyebrow: "The whole picture",
    title: "From a niche to a signed deal, without switching tools",
    body: "Three stages and one feedback loop. Everything further down this page is one of those four boxes in detail.",
    stages: [
      {
        id: "find",
        label: "Find",
        title: "Decision-makers, not info@ addresses",
        items: ["Google Maps", "Hunter", "Apollo", "Prospeo"],
        note: "Name, role, verified email address, phone number and LinkedIn profile, as far as they are publicly available.",
      },
      {
        id: "contact",
        label: "Contact",
        title: "Three channels as one chain",
        items: [
          "Email sequence with its own opener per lead",
          "LinkedIn message, already written out",
          "Call list with number and prep",
        ],
        note: "Anyone who stays quiet moves to the next channel. Anyone who replies drops out immediately.",
      },
      {
        id: "win",
        label: "Win",
        title: "Everything lands in the same CRM",
        items: [
          "Deals and a weighted forecast",
          "Tasks with exactly one next step",
          "Notes, calls and emails in one history",
        ],
        note: "Yesterday's call and the email from three weeks ago sit under one another, not in two tools.",
      },
    ],
    arrows: ["Name, address, number", "Reply, meeting"],
    loop: {
      label: "And better next time",
      title: "What comes back writes the next campaign",
      body: "Every reply carries the step and the copy version it answered. That answers what a sending tool cannot know and a lead database never gets to see: which copy actually booked meetings.",
      items: [
        "Version A against B",
        "Weekday",
        "Time of day",
        "Lead list",
        "Copy check before sending",
        "SPF, DKIM, DMARC",
      ],
    },
  },
  walkthrough: {
    eyebrow: "In six steps",
    title: "What happens between your niche and the first meeting",
    body: "For someone who has never seen the app. Every step with the screen it happens on.",
    stepLabel: "Step",
    steps: [
      {
        title: "Niche in, decision-makers out",
        body: "Industry, location, size, the technology they run, or who is hiring right now. What comes back is not a list of companies but a list of people: name, role, verified address, phone number.",
        detail: "Role addresses like info@ or office@ are filtered out automatically. You do not cold-email an address nobody is responsible for.",
        cta: "See it for real",
      },
      {
        title: "Everyone gets their own first sentence",
        body: "An opener per contact, written from the research on that company. You set the source, the tone and the words that must not appear — and test it on a real company before anything is saved.",
        detail: "Not a mail merge with the company name in the right slot. Placeholder personalisation measurably performs worse than none at all.",
        cta: "See the agent",
      },
      {
        title: "Two of them read it before anything goes out",
        body: "The copy check looks at length, spam words, AI tone and whether there really is only one call to action. The gate then checks the technical side: SPF, DKIM, bounce rate, sendable addresses.",
        detail: "Four of the eleven checks can hold the start back. That does not cost you a campaign, it otherwise costs you the domain.",
        cta: "See the checks",
      },
      {
        title: "When the emails stay quiet, the message is already written",
        body: "After the first mail and three follow-ups a LinkedIn task appears, but only where a profile is on file. The message is already filled in, with the same opener as the email. If it stays quiet after that, the call comes up, with number and prep.",
        detail: "Always exactly one next step, never two at once. Anyone who replies drops out of the chain the same moment.",
        cta: "See the chain",
      },
      {
        title: "The reply lands in the CRM, not in an inbox",
        body: "Every reply is classified and attached to the contact. It becomes a deal with a value and a probability, a task with a due date, a note after the call.",
        detail: "Yesterday's call and the email from three weeks ago sit in the same history. Without a second subscription for it.",
        cta: "See the pipeline",
      },
      {
        title: "And now you know what actually worked",
        body: "Per step and per copy version: how many replied, how many said no, and how many turned into a meeting. Plus weekday and time of day.",
        detail: "Instantly sees the reply but did not write the copy. Apollo neither writes the copy nor sees the reply. This view can only exist when both halves sit in the same tool.",
        cta: "See the analysis",
      },
    ],
  },
  localReachMockup: {
    typicalLabel: "Typical B2B database",
    frostbreakerLabel: "Frostbreaker, via Google Places",
    notListed: "not listed",
    businesses: [
      { name: "Kaiser Hair Salon", sub: "Single location salon" },
      { name: "Huber Joinery", sub: "Trades business, 6 employees" },
      { name: "Dr. Berger Dental", sub: "Solo practice" },
    ],
  },
  verification: {
    eyebrow: "Before an address hurts your domain",
    title: "Every email is checked before it enters a campaign",
    body: "An invalid address doesn't just cost you one lead. It damages your sender reputation, across every mailbox and every client, and that's not easy to undo. That's why the check runs automatically before every send, no extra tool, nothing to trigger manually.",
    reportBadge: "Example view",
    reportLabel: "Result of the last check",
    reportChecked: "emails checked",
    reportCheckedValue: "105",
    reportInvalid: "flagged invalid and removed",
    reportInvalidValue: "12",
    reportRate: "delivery rate afterwards",
    reportRateValue: "96%",
    reportNote: "Automatic before every send, no extra tool needed.",
    fact: "Verified email addresses arrive roughly twice as often as unverified ones.",
    factSub: "Too many bad addresses and your emails land in spam instead of the inbox.",
    factSource: "Industry benchmarks, email deliverability, 2026",
  },
  qualifiedMockup: {
    typicalLabel: "Typical tool",
    frostbreakerLabel: "Frostbreaker",
    genericNote: "role address, nobody specifically responsible",
    rows: [
      { generic: "info@huberjoinery.com", name: "Mark Huber", role: "Owner", email: "m.huber@huberjoinery.com" },
      { generic: "office@bergerdental.com", name: "Dr. Anna Berger", role: "Practice Owner", email: "a.berger@bergerdental.com" },
      { generic: "contact@kaisersalon.com", name: "Julia Kaiser", role: "Salon Manager", email: "j.kaiser@kaisersalon.com" },
    ],
  },
  glossary: {
    SPF: "SPF: a record on your domain that defines which servers are allowed to send email in your name.",
    DKIM: "DKIM: a digital signature on every email that lets the recipient verify it wasn't altered in transit.",
    DMARC: "DMARC: the rule telling recipients what to do with email that fails SPF or DKIM.",
  },
  agency: {
    eyebrow: "For agencies",
    title: "Manage multiple clients without opening a new subscription for each one",
    body: "Running lead-gen or cold outreach for your own clients? Each client runs in its own, cleanly separated workspace, in that client's look, under a single login for your team.",
    features: [
      { id: "workspaces", title: "One login, one workspace per client", body: "Leads, campaigns and contacts run cleanly separated per client, without a separate subscription for each one. Workspaces can be created, renamed or removed in seconds." },
      { id: "branding", title: "Branding per client workspace", body: "Name, logo and accent color can be set per workspace, so what the client sees looks like the agency's own tool, not something foreign in the background." },
      { id: "reportLink", title: "Shareable report link, no login required for the client", body: "A link per workspace shows aggregated metrics in that client's look, without them needing their own account. Individual contact data is deliberately not shown to the client." },
    ],
    note: "With pure sending tools, multi-client management is usually a separately priced add-on, often with its own price per client workspace, on top of a tool that only handles sending. With Frostbreaker, that's part of the product from day one.",
  },
  agencyMockup: {
    workspacesLabel: "Workspaces",
    active: "active",
    workspaces: [
      { name: "Client: Acme Inc.", color: "#0EA5E9", active: true },
      { name: "Client: Example Co.", color: "#8B5CF6", active: false },
      { name: "Client: Northwind LLC", color: "#F59E0B", active: false },
    ],
    brandingLabel: "This workspace's branding",
    brandingValue: "Acme Inc. · Accent color #0EA5E9",
    reportLinkLabel: "Report link for the client",
    copyLabel: "Copy",
  },
  postSend: {
    eyebrow: "After the yes",
    title: "A reply becomes a case, not an email in an inbox",
    body: "Every reply is classified and attached to the contact. It becomes a deal with a value and a probability, a task with a due date, a note after the call. Yesterday's call and the email from three weeks ago sit in the same history.",
    features: [
      { id: "replies", title: "One inbox for every mailbox", body: "All connected mailboxes come together in one inbox, synced every five minutes, with an unread counter. Every reply arrives with full text, AI classifies it (interested, not interested, question), and you reply straight from the app. You no longer need to open Instantly for this." },
      { id: "dashboard", title: "Revenue forecast, not just open rate", body: "Open pipeline, a forecast weighted by close probability, won and lost over the last 30 days, plus due and overdue tasks. For most agencies that replaces a separate CRM subscription." },
      { id: "status", title: "Lead status per contact, no separate CRM needed", body: "Contacted, replied, meeting booked, became a customer, all trackable directly in the leads table." },
      { id: "deliverability", title: "SPF, DKIM, DMARC: checked before you send", body: "Frostbreaker checks your sending domain live via DNS lookup and shows in plain language what to fix, no separate tool needed. Plus daily volume per mailbox at a glance, with a warning at risky send volumes." },
    ],
  },
  postSendMockup: {
    incomingLabel: "Incoming reply, automatically classified",
    exampleReply: "\"Sounds interesting, can we hop on a quick call next week?\"",
    statusInterested: "Interested",
    dashboardLabel: "Illustrative example dashboard",
    meetings: "Meetings booked",
    pipeline: "Pipeline value",
    bounce: "Bounce rate",
  },
  personalization: {
    eyebrow: "Personalization",
    title: "The AI agent isn't a black box",
    body: "Most tools spit out an icebreaker without you knowing what it's based on or how it sounds. With Frostbreaker, you configure it yourself: per niche, per campaign, as often as you like.",
    bullets: [
      { label: "Choose a data source:", body: "company description, website text, or both combined." },
      { label: "Fully editable system prompt:", body: "you set tone, rules and structure, no rigid template." },
      { label: "Define forbidden words:", body: "so no icebreaker sounds like generic AI." },
      { label: "Live-test on a real, researched company:", body: "before anything is saved or sent." },
    ],
    dataSourceLabel: "Data source",
    sourceOptions: ["Company description", "Website text", "Both combined"],
    promptLabel: "System prompt",
    promptLines: [
      "- Use only verifiable facts from the research.",
      "- No name, no greeting, no filler phrases.",
      "- Direct, concrete, like an observation before a sales question.",
    ],
    forbiddenLabel: "Forbidden words",
    forbiddenWords: ["respect", "admire", "proud", "praise", "thrilled"],
  },
  integrations: {
    eyebrow: "Fits into your stack",
    title: "Reads from your sources, writes into your tools",
    sourcesLabel: "Sources, on your own accounts",
    sources: [
      { name: "Google Maps", note: "Local businesses including phone number" },
      { name: "Hunter", note: "Company database and addresses per domain" },
      { name: "Apollo", note: "Decision makers, verified address, technology filter" },
      { name: "OpenAI", note: "Decision-maker research and opening line" },
      { name: "NeverBounce", note: "Address check before sending, optional" },
    ],
    targetsLabel: "Destinations",
    items: [
      { id: "instantly", name: "Instantly", note: "Fully native campaign management, no CSV export needed" },
      { id: "sending", name: "Smartlead", note: "CSV import" },
      { id: "sending", name: "Lemlist", note: "CSV import" },
      { id: "crm", name: "HubSpot", note: "CSV import" },
      { id: "crm", name: "Pipedrive", note: "CSV import" },
      { id: "crm", name: "Salesforce", note: "CSV import" },
      { id: "sheet", name: "Excel / Sheets", note: "Excel/CSV" },
      { id: "automation", name: "Zapier", note: "planned" },
    ],
  },
  features: {
    eyebrow: "More than just finding leads",
    title: "What else is built in",
    items: [
      { id: "suppression", title: "Existing customers and opt-outs stay protected", body: "Add someone to the suppression list once, and they're excluded for good: Frostbreaker automatically checks against it before anyone gets contacted, whether from a new search or a new campaign." },
      { id: "deliverability", title: "Check deliverability before it becomes a problem", body: "SPF, DKIM and DMARC for your sending domain, checked live via DNS and explained in plain language, plus a warning if your daily volume per mailbox gets risky." },
      { id: "campaigns", title: "Campaigns and sequences right in the tool", body: "Sequence, schedule, number of follow-ups and activation, all natively in Frostbreaker. No switching tools, no CSV export." },
    ],
  },
  suppressionMockup: {
    label: "Automatically checked before sending",
    blocked: { name: "Maria Fenninger", company: "Café Feinkost", note: "already a customer" },
    blockedTag: "Automatically skipped",
    countLabel: "contacts on the suppression list",
    count: "312",
  },
  deliverabilityMockup: {
    domainLabel: "Sending domain",
    domain: "your-agency-domain.com",
    spf: "SPF",
    dkim: "DKIM",
    dmarc: "DMARC",
    configured: "configured",
    missing: "still missing",
    volumeLabel: "Daily volume per mailbox",
    volumeNote: "42 of 50, within the safe range",
  },
  campaignMockup: {
    label: "Sequence",
    steps: [
      { day: "Day 0", title: "Icebreaker email" },
      { day: "Day 3", title: "Follow-up 1" },
      { day: "Day 7", title: "Follow-up 2, break-up" },
    ],
    activeLabel: "Active",
  },
  trustBadges: [
    { id: "encryption", title: "Encrypted API keys", body: "Your credentials are stored encrypted, never in plain text." },
    { id: "byok", title: "BYOK cost control", body: "Full transparency over your actual API costs, live in the dashboard." },
  ],
  pricing: {
    eyebrow: "Pricing",
    title: "Fixed prices, visible immediately, ready to start immediately",
    agencyBadge: "For agencies",
    note: "Setup happens together on a call, then cancel monthly with no minimum term. On top, only your own API costs, visible live in the dashboard.",
    plans: [
      {
        // Stand auf "$99", waehrend die beiden Agentur-Stufen in Euro
        // ausgezeichnet sind -- zwei Waehrungen in einer Preistabelle liest
        // sich als Fehler und laesst an allen drei Zahlen zweifeln.
        id: "starter",
        label: "Single seat",
        price: "€99",
        priceNote: "/ month",
        features: [
          "1 workspace",
          "For your own sales",
          "All four search routes, all three channels",
          "CRM, pipeline and analysis",
          "Deliverability check and the gate",
        ],
        ctaLabel: "Book a call",
        highlighted: false,
      },
      {
        id: "agency",
        label: "Agency",
        price: "€199",
        priceNote: "/ month",
        features: [
          "Up to 5 client workspaces",
          "White-label reports per client",
          "Client branding: name, logo, accent colour",
          "Everything in Single seat",
          "Guided setup per client",
        ],
        ctaLabel: "Book a call",
        highlighted: true,
      },
      {
        id: "agencyPlus",
        label: "Agency Plus",
        price: "€349",
        priceNote: "/ month",
        features: [
          "Up to 12 client workspaces",
          "Everything in Agency",
          "Multiple team logins",
          "Priority support",
          "From 13 clients we talk about a tier",
        ],
        ctaLabel: "Book a call",
        highlighted: false,
      },
    ],
  },
  comparison: {
    title: "Comparison",
    headerFrostbreaker: "Frostbreaker",
    headerOther: "Typical alternative stack for an agency",
    rows: [
      ["Finding local small businesses", "Yes, directly via Google Places/Maps", "Usually not listed, no LinkedIn profile or structured company data"],
      ["Everything in one workflow", "Yes", "No, separate research tool + sending tool + own reporting"],
      ["Managing multiple clients", "Own workspace per client included", "Usually a separately priced white-label add-on"],
      ["Client-facing reporting", "Shareable report link in the client's look", "Manually assembled from multiple tools"],
      ["AI personalization per lead", "Yes, with configurable rules", "Partial, often a separate tool needed"],
      ["Built-in email verification", "Yes", "Separate tool needed"],
      ["Only real decision-makers, no info@", "Automatically filtered", "Usually unfiltered"],
      ["Price transparency", "Fixed prices, set up on a call", "Usually a custom quote"],
      ["Support", "Direct line to the founder", "Ticket system"],
    ] as [string, string, string][],
  },
  trust: {
    title: "Privacy isn't a checkbox, it's part of the architecture",
    links: { datenschutz: "Privacy Policy", agb: "Terms", avv: "DPA" },
  },
  why: {
    title: "Why Frostbreaker exists",
    body: "Outbound teams today usually combine four to five separate tools to get from the first search term to a personalized, verified email. Frostbreaker reduces this workflow to a single tool, with full cost transparency instead of flat-rate subscriptions and no CSV back-and-forth between providers.",
    earlyAccess: { title: "You talk to the person building it", body: "We work with a small number of agencies right now, each one closely supported. For you that means: we do the setup together, you get a direct line instead of a ticket system, and what you are missing goes into the next sprint rather than onto a roadmap. That closeness only exists while the group is small." },
    founderLabel: "From the founder",
    founderQuote: "\"I always wanted to build something of my own. The hardest part was never the idea, it was finding clients: cold calls and emails by hand, hours of research, never knowing if any of it would land. So I built the tool I wish I'd had, and I've never run out of real decision-makers to reach since.\"",
    founderName: "Youssef Tayachi",
    founderRole: "Founder & CEO, Frostbreaker",
    poweredBy: {
      title: "One tool instead of four",
      body: "Search, research, verification, personalization and sending interlock instead of being wired together through CSV files.",
      chips: ["Search", "Research", "Verify", "Personalize", "Send"],
    },
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Can I use this as an agency for multiple clients at once?", a: "Yes, there are separate workspaces per client, including their own name, logo and accent color. Each workspace can share a report link that shows your client aggregated metrics in their own look, without them needing their own account." },
      { q: "Why not go straight to Apollo or Hunter myself?", a: "Because the address is the start, not the result. Apollo delivers decision makers with a verified address. The work begins after that: an opener per contact, a check on the copy, a match against your suppression list and existing customers, the sending, the LinkedIn message and the call when it stays quiet, and finally the question of which copy version booked meetings. All of that sits between Apollo and Instantly, and that is what Frostbreaker does." },
      { q: "What does a lookup actually cost?", a: "Around 4 US dollars per 100 companies with roughly 260 contacts, so about 1.5 cents per contact. That figure comes from a real search in our own account ($3.94 for 97 companies with 259 contacts) and is not a promise: your number depends on niche and hit rate. After every search the dashboard shows to the cent what it cost. The full breakdown is on the pricing page." },
      { q: "Do I have to bring my own API keys?", a: "Yes, and that is deliberate. The lookups run on your own accounts, you pay them at cost, we add no markup. If you already work with Apollo or Instantly, you keep the account and the terms and only change what happens in between. Keys are stored encrypted, and we set them up together on the first call — that is the step most people get stuck on." },
      { q: "What does it cost?", a: "€99/month for one workspace, €199 for up to five clients, €349 for up to twelve. Cancel monthly, no setup fee. On top come your own API costs, transparently visible in the dashboard — we add no markup. There is no self-service trial: we set up the first workspace together on the call." },
      { q: "Can I cancel anytime?", a: "Yes, monthly, no minimum term, no notice period beyond the current month." },
      { q: "How do I know a found email really belongs to a person?", a: "Frostbreaker automatically filters out generic addresses like info@ or office@. Only emails clearly assigned to a person make it into your leads list." },
      { q: "What happens if I accidentally send to an invalid address?", a: "Every address is checked before sending, invalid ones are filtered out automatically. This isn't a nice-to-have: a high bounce rate damages your sender reputation across every mailbox and every client, not just the one campaign. The check runs automatically, nothing to trigger manually." },
      { q: "Which services run in the background, and do I need my own accounts there?", a: "Frostbreaker uses Google for the map search, OpenAI for the research and Hunter for the domain match, Apollo for bulk leads including the technology filter, optionally NeverBounce for verification and Instantly for sending. You create your own accounts there and enter the keys once in settings, stored encrypted. That is exactly why you pay for lookups at cost instead of a markup. During the trial the app walks you through setup step by step." },
      { q: "Why not go straight to Hunter or Apollo?", a: "Because none of them covers the whole path, and because Frostbreaker does not try to replace them: Hunter and Apollo run inside it as data sources, on your own accounts and at cost. The difference is what happens before and after. Hunter finds addresses for a domain, but not local businesses that aren't in a company database. Apollo returns decision makers with a verified address but doesn't write an individual line per lead. Sending tools send but don't research. Stitching that together yourself means three or four subscriptions, CSV files going back and forth, and reporting built by hand. Frostbreaker is the connection in between: one search, one list, one send, one dashboard, including replies and booked meetings." },
      { q: "What happens if I accidentally email an existing customer or someone who's opted out?", a: "That's exactly what the built-in suppression list is for: once added, Frostbreaker automatically excludes those contacts and domains from every future search and send, no manual checking required for every campaign. Existing customers and opt-outs stay reliably protected." },
      { q: "Can I check whether my sending domain is actually deliverable?", a: "Yes, directly in the app: Frostbreaker checks SPF, DKIM and DMARC for your sending domain via a live DNS lookup and shows in plain language what's still missing, plus a warning if your daily volume per mailbox gets risky. No separate deliverability tool needed." },
      { q: "Do I need to build my email campaigns and sequences in a separate tool?", a: "No. Campaigns, sequences including schedule and number of follow-ups, and activation all happen directly in Frostbreaker. You don't switch to a second tool to send, and there's no CSV shuffling." },
      { q: "How fast can I get started?", a: "The first search runs the same day. Two to four weeks pass before the first campaign goes out — that is how long fresh mailboxes need to warm up, and no tool gets around it. That is exactly why there is no 14-day trial: it would be shorter than the setup. We set things up together on the call and stay with you through the first campaign." },
      { q: "What happens to my data if I cancel?", a: "Your data is deleted after the contract ends, or returned on request, as governed by the DPA. There's no automatic continued use after cancellation." },
    ],
  },
  finalCta: {
    title: "Let's automate your cold outreach.",
    body: "Thirty minutes in which we look at your client setup together, set up the first workspace and connect the API accounts. After that the first search runs the same day. Not a sales pitch, no credit card.",
  },
  footer: {
    location: "Vienna, Austria",
    impressum: "Legal notice",
    datenschutz: "Privacy policy",
    agb: "Terms",
    kontakt: "Contact",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Who's behind Frostbreaker",
    intro: "No ticket system, no anonymous support inbox. If you reach out to Frostbreaker, you talk to me directly.",
    name: "Youssef Tayachi",
    role: "Founder & CEO, Frostbreaker",
    bio: "I always wanted to build something of my own, but the biggest hurdle was never the idea, it was finding real clients. So I did cold outreach by hand: building lists, dialing numbers, typing out emails one by one, often without even knowing if the right person was on the other end. At some point it was obvious how much time and money that was quietly burning, so I started building my own tools to automate the process. That became Frostbreaker, and I've never run out of ways to reach the right people since, and that's exactly what I want to give other agencies and freelancers too. If you have questions about the product, pricing, or your specific use case, just reach out.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    calendlyLabel: "Book a 30-minute call",
    calendlyNote: "No off-the-shelf sales pitch, just a real conversation about your niche.",
    backLabel: "Back to homepage",
  },
  caseStudyPage: {
    eyebrow: "Case Study",
    title: "How Frostbreaker went from idea to a working system in three weeks",
    intro: "I wanted to run my own B2B cold outreach without subscribing to and wiring together four different tools. So I built the system myself. Here's the story behind it, with real numbers from the live system.",
    problemHeading: "The starting point",
    problemBody: "Running cold outreach through a contact database, an email finder, a verification tool, and a sequencer easily costs 150-300 dollars a month and still stays fragmented: data sits in four systems, nobody has full control. I built the system myself instead, and built it so it doesn't just work for me, it works as a standalone app for anyone.",
    whatHeading: "What I built",
    whatBody: "An end-to-end pipeline: Google Maps search by niche and location, AI research to find each company's decision-maker, automatic email finding and verification, AI personalization per contact, sending through your own mailboxes, reply tracking, and a CRM with pipeline, notes, and an activity timeline. All BYOK: every user brings their own API keys, stored encrypted, no vendor lock-in.",
    techHeading: "Tech stack",
    techItems: [
      "Next.js frontend, FastAPI backend, a custom Python worker with a Postgres-based job queue",
      "Supabase (Postgres, Auth, Row-Level Security), EU hosting in Frankfurt",
      "Encrypted storage of per-user API keys, six connected third-party services",
      "Stripe subscription billing, a CRM module with a pipeline/kanban board",
    ],
    statsHeading: "Where it stands today, live from production",
    stats: {
      businesses: { value: "800+", label: "companies searched" },
      contacts: { value: "2,000+", label: "contacts identified" },
      withEmail: { value: "350+", label: "emails found & verified" },
      migrations: { value: "50", label: "database iterations in three weeks" },
    },
    honestNote: "To be upfront: this project is proof of the technical execution, not of a fully scaled business yet. Everything here can be checked live, not just claimed.",
    ctaHeading: "What that means for you",
    ctaBody: "That same speed and range, data modeling, AI integration, payment integration, security architecture, clean integration of several third-party APIs, is what I bring to your own requirements. Whether that's internal automation, a customer-facing app, or extending an existing system.",
    ctaButtonLabel: "Book a 30-minute call",
    backLabel: "Back to homepage",
  },
  customPage: {
    eyebrow: "Custom Software",
    title: "Want your own app for your business?",
    intro: "I'm the developer behind Frostbreaker. If part of your work runs on a spreadsheet, on a step someone retypes by hand, or on five tools held together by copy-paste: that's exactly what I build as one system you own.",
    ctaLabel: "Book a 30-minute call",
    sections: [
      {
        id: "build",
        eyebrow: "What I build",
        title: "One system instead of five workarounds",
        body: "No page builder and no template bent into shape afterwards. I look at how the work actually happens at your company and build the software around that.",
        bullets: [
          "Internal tools that replace a spreadsheet and the manual copying between two systems",
          "AI pipelines for research, enrichment and personalization, the work that today needs someone reading and typing",
          "Customer-facing apps with real logins, billing and a database behind them, not a prototype",
          "One system that belongs to you, instead of several subscriptions wired together through Zapier",
        ],
      },
      {
        id: "ablauf",
        eyebrow: "How we'd work together",
        title: "Clarity first, then a quote, then code",
        body: "The most expensive mistake in custom software is starting to build before anyone knows what the problem actually is. So this starts with a conversation, not a contract.",
        bullets: [
          "A conversation about your process: what takes how long today and where it breaks",
          "A written proposal with fixed scope and price before I start",
          "Something working to look at regularly, instead of one big handover at the end",
          "The code and the data are yours, even if we go separate ways afterwards",
        ],
      },
    ],
    proofEyebrow: "The proof",
    proofTitle: "I built Frostbreaker for myself, not as a portfolio piece",
    proofBody: "This site, the app behind it, and everything you see here came from me. So I'm not building from a brief for software I've never used myself: I build the kind of software I use daily, which is why I notice early which part will quietly annoy a real user later.",
    proofStats: [
      { value: "3 weeks", label: "from idea to a running system" },
      { value: "800+", label: "companies processed in production" },
      { value: "6", label: "external services integrated" },
    ],
    proofLinkLabel: "Read how it was built",
    ctaTitle: "Tell me about your process",
    ctaBody: "30 minutes, no slide deck. If it isn't worth building for you, I'll tell you that too.",
  },
  customMockups: {
    workaround: {
      beforeLabel: "Today",
      beforeSteps: [
        { label: "Email enquiry", manual: false },
        { label: "Spreadsheet", manual: false },
        { label: "CRM", manual: true },
        { label: "Invoice", manual: true },
      ],
      manualLabel: "by hand",
      beforeNote: "Four stations, two of them retyped by a person. The data lives in four places.",
      afterLabel: "With your own system",
      afterTitle: "One process, one database",
      afterNote: "One login, one place for the data. The steps in between happen on their own.",
    },
    process: {
      label: "From the first call to handover",
      steps: [
        { when: "Step 1", title: "A conversation about your process", note: "30 minutes, no obligation" },
        { when: "Step 2", title: "A proposal with fixed scope and price", note: "in writing, before I start" },
        { when: "Step 3", title: "Building in visible increments", note: "something working to look at, regularly" },
        { when: "Step 4", title: "Handover", note: "the code and the data are yours" },
      ],
    },
    stack: {
      label: "One system, six connected services",
      services: ["Google Maps", "OpenAI", "Hunter", "NeverBounce", "Instantly", "Stripe"],
      coreLabel: "Frostbreaker",
      coreNote: "Next.js · FastAPI · Postgres",
      footnote: "Access keys encrypted per user, hosted in the EU.",
    },
  },
  startPage: {
    title: "Lead-gen and cold outreach for all your clients, from one tool, under your own name.",
    body: "A dedicated workspace per client, a shareable report link in that client's look, and a dashboard that shows booked meetings and pipeline value, not just open rates.",
    ctaNote: "Thirty minutes, not a sales pitch. Cancel anytime.",
    workspaceHeading: "One login, one workspace per client",
    factCard: { fact: "With pure sending tools, multi-client management is usually a separately priced add-on.", sub: "With Frostbreaker it's part of the product from day one, because lead search, personalization and reporting have to run separately per client anyway.", source: "Market comparison, white-label cold email tools, 2026" },
    finalHeading: "30 minutes, we'll show it live for your own niche",
    finalBody: "No off-the-shelf sales pitch, just a real search with your own criteria.",
    backLink: "Prefer to see all the details first?",
  },
  legal: {
    back: "Back to homepage",
    footerLine: (year: number) => `© ${year} Frostbreaker · Vienna, Austria`,
    impressumPage: {
      updated: "Last updated: July 2026",
      identityHeading: "Information pursuant to § 5 ECG, § 25 Austrian Media Act",
      identityLines: [
        "Youssef Tayachi",
        "Sole proprietor (Einzelunternehmer)",
        "Trade: software development and data-processing services",
        "Bernoullistraße 4/17",
        "1220 Vienna, Austria",
      ],
      authorityHeading: "Regulating authority",
      authorityText: "City of Vienna, District Authority for the 22nd district (Magistratisches Bezirksamt für den 22. Bezirk).",
      chamberHeading: "Chamber membership",
      chamberText:
        "Member of the Austrian Federal Economic Chamber (WKO), professional section for management consultancy, accounting and information technology (UBIT), Vienna division. Governing law: Austrian Trade Act 1994 (Gewerbeordnung, GewO), available at ris.bka.gv.at.",
      taxHeading: "VAT",
      taxText: "Small business exempt from VAT under § 6 (1) 27 of the Austrian VAT Act (UStG); no VAT is shown on invoices.",
      contactHeading: "Contact",
      contactEmailLabel: "Email:",
      purposeHeading: "Business purpose",
      purposeText: "Development and operation of software for B2B lead research and enrichment.",
      liabilityHeading: "Liability notice",
      liabilityText:
        "Despite careful review, we assume no liability for the content of external links. Sole responsibility for linked pages lies with their respective operators.",
    },
    privacyPage: {
      updated: "Last updated: July 2026",
      controllerHeading: "1. Data controller",
      controllerText: "Youssef Tayachi, Bernoullistraße 4/17, 1220 Vienna, Austria.",
      controllerContactLabel: "Contact for privacy questions:",
      dataHeading: "2. What data we process",
      dataText:
        "Visiting this site processes technically necessary access data (e.g. IP address, time of access, page requested) to operate and secure the site. There is no contact form: the email on the contact page is a plain mailto link that opens your own email client, no data is sent to us.",
      cookiesHeading: "3. Cookies",
      cookiesText:
        "This site sets a single, technically necessary cookie (lang) to remember your language choice, valid for one year. No analytics, no advertising, no consent required.",
      analyticsHeading: "4. Analytics",
      analyticsText:
        "We use Vercel Web Analytics for anonymized, cookie-free evaluation of page views. No IP addresses or other identifying data are stored.",
      calendlyHeading: "5. Booking a call via Calendly",
      calendlyText:
        "The \"Book a call\" button leads to Calendly (Calendly LLC, USA), opening in a new tab. Data you enter there is governed by Calendly's own privacy policy, not this one.",
      hostingHeading: "6. Hosting",
      hostingText:
        "This site is hosted by Vercel Inc. (USA). Transfers are safeguarded via the EU Commission's Standard Contractual Clauses.",
      retentionHeading: "7. Retention",
      retentionText:
        "Server logs are kept automatically for a short period needed for troubleshooting, then deleted. The language cookie is kept for at most one year.",
      rightsHeading: "8. Your rights",
      rightsText:
        "You have the right to access, rectification, erasure, restriction of processing, data portability, and objection. Contact us (see above) to exercise these. You also have the right to lodge a complaint with the Austrian data protection authority (dsb.gv.at).",
    },
    termsPage: {
      updated: "Last updated: July 2026",
      scopeHeading: "1. Scope",
      scopeText:
        "These terms apply to all contracts between Youssef Tayachi (\"Frostbreaker\", \"we\") and business customers (B2B) regarding use of the Frostbreaker software for researching, enriching, verifying, and personalizing B2B contact data.",
      formationHeading: "2. Formation of contract",
      formationText:
        "For the Starter plan, a contract is formed when the customer registers an account and completes checkout for the plan through the payment processing built into the software. For the Agency plan, the contract is formed by an individual offer issued after a consultation call, accepted in writing by the customer (including by email).",
      scopeOfServiceHeading: "3. Scope of service",
      scopeOfServiceText:
        "Frostbreaker provides software that lets customers research companies, identify contacts with email addresses, verify them, and generate personalized copy automatically. The data sources used (e.g. Google Places, Hunter) may change.",
      byokHeading: "4. Bring Your Own Key (BYOK)",
      byokText:
        "Customers provide their own third-party API credentials (e.g. mapping, email enrichment, AI text generation) and bear the resulting third-party costs themselves. The usage fee for the chosen Frostbreaker plan applies in addition (Starter at the current list price, Agency per individual offer), see frostbreaker.app/preise.",
      customerDutyHeading: "5. Customer obligations",
      customerDutyText:
        "The customer is solely responsible for contacting researched leads in line with the direct-marketing rules that apply to them. Frostbreaker provides a tool but does not review the legal permissibility of individual customer campaigns.",
      availabilityHeading: "6. Availability",
      availabilityText:
        "We aim for high availability but do not guarantee any specific uptime. We give no warranty for the availability of third-party services (e.g. Hunter, OpenAI).",
      liabilityHeading: "7. Liability",
      liabilityText:
        "We are liable without limitation for intent and gross negligence and under mandatory statutory provisions. Otherwise, liability is limited to damage typically foreseeable under the contract.",
      termHeading: "8. Term and termination",
      termText:
        "Contracts run monthly and can be cancelled as of the end of the current month, with no notice period and no minimum term, unless the individual offer for the Agency plan states otherwise.",
      finalHeading: "9. Final provisions",
      finalText: "Austrian law applies, excluding the UN Convention on the International Sale of Goods. Venue is Vienna, to the extent permitted by law.",
    },
  },
};

export type Dictionary = typeof de;
export const dict: Record<Lang, Dictionary> = { de, en };
