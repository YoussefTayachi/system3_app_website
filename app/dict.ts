import type { Lang } from "./lang";

// Zentrale Copy-/Daten-Quelle fuer die gesamte Website, zweisprachig (DE/EN).
// Icons sind sprachunabhaengig und leben in _icons.tsx, hier nur Text/Zahlen.
// Beide Sprachversionen muessen exakt dieselbe Form haben (type Dictionary =
// typeof de erzwingt das fuer en) -- gleiches Prinzip wie lib/i18n/dict.ts in
// der Haupt-App.

const de = {
  nav: {
    // Onepager seit dem 2026-09-02: vier Anker statt drei Menues. Was hier
    // nicht steht, wird im Gespraech geklaert.
    links: [
      { label: "Ablauf", href: "/#ablauf" },
      { label: "Für wen", href: "/#fuer-wen" },
      { label: "Funktionen", href: "/#funktionen" },
      { label: "Preis", href: "/#kosten" },
    ],
    kontakt: "Kontakt",
    custom: "Eigene Software",
    themeLight: "Helles Design",
    themeDark: "Dunkles Design",
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
    // Kurzfassung fuer die Startseite. trialNote ist 24 Woerter lang und steht
    // dort unter dem Hauptknopf, also an der teuersten Stelle der Seite. Die
    // lange Fassung bleibt: die Unterseiten haben das Wortbudget dafuer.
    trialShort: "30 Minuten, kein Verkaufsgespräch.",
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
    // Stand bis zum 2026-08-15 auf "Fuer Agenturen, die Outbound fuer ihre
    // Kunden machen" -- das widersprach der eigenen Navigation (dort stehen
    // drei Tueren: fuer euch selbst, fuer eure Kunden, neu im Kanal) und
    // schloss in Zeile eins alle aus, die keine Agentur sind. Der Betreiber
    // hat entschieden, die Startseite nicht mehr einzuschraenken
    // (KONZENTRATION.md): drei Lagen statt einer Branche. "wollen" traegt die
    // ganze Arbeit der Zeile -- es schliesst auch die ein, die E-Mail als
    // Kanal gerade erst aufmachen, ohne sie eigens zu nennen. Bewusst "per
    // E-Mail" und nicht "auf jedem Kanal", obwohl die Ueberschrift direkt
    // darunter von jedem Kanal spricht: der Leser kommt wegen E-Mail und
    // erfaehrt eine Zeile spaeter, dass es mehr gibt. Die drei Lagen stehen
    // konkret im Abschnitt `whoFor` weiter unten. Grossbuchstaben kommen aus
    // der CSS-Klasse (uppercase tracking-[0.14em]), der String bleibt deshalb
    // in normaler Schreibung -- unter 50 Zeichen, sonst bricht die Zeile um.
    eyebrow: "Für alle, die Kunden per E-Mail gewinnen wollen",
    // Die eine Zeile ueber der Ueberschrift, seit dem 2026-09-02: sagt, WER
    // gemeint ist, bevor die Ueberschrift sagt, was er bekommt.
    pill: "Für Agenturen und B2B-Teams",
    // ══════════════════════════════════════════════════════════════════
    // AUF ERGEBNIS UMGESTELLT, 2026-08-31.
    //
    // Vorher: "Entscheider finden. Auf jedem Kanal erreichen. Zu Kunden
    // machen." Das sind drei Faehigkeiten des Werkzeugs, hintereinander
    // aufgezaehlt -- eine Zeile auf FUNKTIONSEBENE.
    //
    // Youssef zur alten Fassung: "bei landing page musst du auf
    // motivationsebene denken und nicht auf feature ebene." Der Leser dieser
    // Seite betreut den ganzen Tag Kunden; sein Problem ist nicht, dass er
    // keine Entscheider FINDEN kann, sondern dass er keine Zeit hat, sie
    // anzuschreiben. Die neue Zeile nennt genau das Ergebnis.
    //
    // Sie steht wortnah an `customer.mirror`, dem Spiegel-Block der
    // Kundenseite: "Die eigene Akquise ist das, was passiert, sobald wieder
    // Luft ist. Es wird nie Luft." Der Held gibt darauf die Antwort.
    // ══════════════════════════════════════════════════════════════════
    h1Pre: "Kundengewinnung, die ",
    h1Accent: "auch ohne dich",
    h1Post: " weiterläuft.",
    // Die Kurzfassung von `body` fuer die Startseite, seit dem 2026-08-31.
    // `body` nennt in 37 Woertern sieben Dinge; das Kennzahlenband direkt
    // darunter zeigt sechs davon als Zahl mit Piktogramm. Zwei Aufzaehlungen
    // uebereinander sind eine zu viel, und die mit den Bildern gewinnt.
    // `body` bleibt stehen: die Metabeschreibung und /start lesen es.
    short: "Du sagst, wen du erreichen willst. Finden, anschreiben und nachfassen passiert von allein.",
    // Nennt alle drei Kanaele beim Namen, weil genau das der Unterschied zu
    // jedem Sendetool ist. "Geprueft" bezieht sich bewusst nur auf die
    // E-Mail-Adresse -- Telefonnummern kommen aus oeffentlichen Eintraegen
    // und werden nicht verifiziert.
    body: "Ein Werkzeug von der Nische bis zum Auftrag: geprüfte Entscheider, ein eigener Aufhänger für jeden, die E-Mail-Sequenz, die LinkedIn-Nachricht und die Telefonnummer. Je Kunde ein eigener Workspace mit seinem Branding, alles im selben CRM.",
    // `factBadge` und `factSource` sind am 2026-08-14 gefallen: „42 € zurueck
    // fuer jeden Euro" ist eine geliehene Litmus-Zahl ueber E-Mail-Marketing
    // allgemein, auf einer Seite, deren Selbstverstaendnis ausdruecklich
    // lautet, keine Zahl zu zeigen, die man nicht selbst nachrechnen kann.
    dashboardAlt:
      // Muss zu den Zahlen im Dashboard-Mockup passen (appMockups.dashboard).
      // Stand vorher auf einem aelteren Zahlensatz -- Screenreader und
      // Suchmaschinen bekamen dadurch andere Werte als das Auge.
      "Frostbreaker-Dashboard: 800 gefundene Firmen, 2.000 Kontakte, 1.327 mit E-Mail-Adresse, rund 267 Stunden gesparte Recherche bei 30,40 US-Dollar Abfragekosten",
  },
  // ══════════════════════════════════════════════════════════════════════
  // DAS KENNZAHLENBAND UNTER DEM HELDEN, neu am 2026-08-31.
  //
  // Anlass ist Runde 3 der Mentor-Rueckmeldung am CTS-Fall: "For the metrics
  // below the hero section add an icon for each." Es gab hier bis heute gar
  // kein Kennzahlenband -- an seiner Stelle standen `heroPromises`, drei
  // Ueberschriften mit je einem Satz, die am 2026-08-15 gefallen sind und
  // seither von niemandem gelesen werden.
  //
  // WELCHE ZAHL HIER STEHEN DARF. Nur Mechanik, und nur, was im App-Repo
  // nachzaehlbar ist. Keine Terminquote, keine Stundenersparnis, kein
  // Prozentwert ueber Ergebnisse -- dieselbe Regel, an der schon der Rechner
  // und das Litmus-Abzeichen gescheitert sind. Nachgesehen am 2026-08-31:
  //
  //   3 Kanaele    channels.cards
  //   6 Beruehrungen  4 Mails (PLAYBOOK_DELAYS) + LinkedIn + Anruf
  //   8 Texte      4 Stufen mal 2 Fassungen
  //   12 Pruefungen  campaign-readiness.ts, zwoelf checks.push
  //   4 Stufen     systemMap.stages plus die Rueckkopplung
  //   0 % Aufschlag  costs.note, unveraendert seit dem ersten Tag
  //
  // "0 %" steht bewusst am Ende: es ist die einzige Zahl im Band, die kein
  // Bauteil zaehlt, sondern eine Zusage macht -- und die letzte, die man
  // liest, bevor der Blick weiterzieht.
  // ══════════════════════════════════════════════════════════════════════
  // ══════════════════════════════════════════════════════════════════════
  // WAS AN DIESER STELLE GESTANDEN HAT, und warum es weg ist.
  //
  // `facts` (sechs Kennzahlen), `sequenceChart` (Wortobergrenzen je Stufe),
  // `readiness` (zwoelf Startpruefungen) und `offerFlow` (zwoelf Felder, acht
  // Mails). Alle vier waren am 2026-08-31 neu, alle vier sind am selben Tag
  // wieder gefallen.
  //
  // Youssef zum Sequenzdiagramm: "es ist extrem unnoetig die regel der email
  // sequenz bezueglich wortzahl zu zeigen, weil das ueberhaupt keine relevanz
  // hat. der kunde kann selbst aussuchen wie viele woerter er fuers template
  // nutzt und wichtig ist die wortanzahl auch nicht und sowieso ists kein
  // verkaufsargument."
  //
  // Er hat bei allen vieren recht, und der Grund ist derselbe: es sind
  // Angaben ueber die MECHANIK. Zwoelf Pruefungen, acht Mails, vier Stufen,
  // 90 Woerter -- das interessiert jemanden, der das Werkzeug schon benutzt,
  // und niemanden, der ueberlegt, ob er es braucht. Eine Landeseite
  // beantwortet "was habe ich davon", nicht "wie ist es gebaut".
  //
  // Die Zahlen sind nicht falsch und nicht verloren: sie stehen auf
  // /funktionen, wo genau die Frage gestellt wird, die sie beantworten.
  // ══════════════════════════════════════════════════════════════════════

  // Die vier Handgriffe, die wegfallen. Bewusst in der Ich-Form des Lesers
  // formuliert und ohne ein einziges Produktwort: was hier steht, macht er
  // heute selbst, und er erkennt jeden der vier Punkte an seinem eigenen
  // Dienstag wieder.
  // ══════════════════════════════════════════════════════════════════════
  // DIE NACHBILDUNG IM HELDEN, neu am 2026-09-02. Zeigt das Versprechen
  // der Ueberschrift als Bild: eine Liste, die sich von allein fuellt, ein
  // Aufhaenger, der gerade geschrieben wird, eine Antwort, die eintrifft.
  // Keine Firmennamen, nur Rolle und Stadtteil -- dieselbe Regel wie im
  // Ablauf darunter.
  //
  // DIE AUFHAENGER HANDELN VON DER FIRMA, NICHT VON IHRER WEBSITE, seit dem
  // 2026-09-05. Vorher standen hier Website-Maengel (Ladezeit, Formular,
  // Nummer als Bild), und die Seite las sich, als waere Frostbreaker ein
  // Werkzeug fuer Webdesigner. Youssef: "es geht prinzipiell darum dass man
  // sich deren unternehmen anschaut, personalisierung schreibt und dann
  // outreached, nicht nur website pains um dann eine website loesung
  // anzubieten." Ein Aufhaenger ist also etwas, das nur auf diese Firma
  // passt: neuer Standort, Stellenanzeige, was Bewertungen sagen. Was der
  // Absender verkauft, steht nicht drin, denn das ist bei jedem Nutzer
  // ein anderes.
  // ══════════════════════════════════════════════════════════════════════
  heroVisual: {
    workspace: "Zahnarztpraxen München",
    nav: ["Leads", "Kampagnen", "Antworten", "Pipeline"],
    listTitle: "Neue Leads",
    count: "312 Firmen durchsucht",
    columns: ["Firma", "Entscheider", "Aufhänger", "Status"],
    rows: [
      { firma: "Zahnarztpraxis, Schwabing", rolle: "Praxisinhaberin", aufhaenger: "Glückwunsch zur zweiten Praxis in Bogenhausen, das Team ist seit März dreimal so groß.", status: "kontaktiert" },
      { firma: "Kieferorthopädie, Bogenhausen", rolle: "Praxisleitung", aufhaenger: "Ihr sucht laut Anzeige seit Juni eine dritte Kraft für die Anmeldung.", status: "kontaktiert" },
      { firma: "Zahnarztpraxis, Pasing", rolle: "Inhaber", aufhaenger: "", status: "neu" },
      { firma: "Zahnklinik, Haidhausen", rolle: "Geschäftsführer", aufhaenger: "Eure Bewertungen loben das Team, drei fragen nach Terminen am Abend.", status: "neu" },
    ],
    typing: "Ihr habt im Frühjahr die Kinderzahnheilkunde dazugenommen, und die Warteliste steht schon auf der Seite.",
    status: { neu: "Neu", kontaktiert: "Kontaktiert", termin: "Termin" },
    replyLabel: "Antwort eingegangen",
    reply: "Das ist genau unser Engpass gerade. Dienstag früh?",
    replyFrom: "Praxisinhaberin, Schwabing",
  },
  strikeList: {
    title: "Das machst du nicht mehr von Hand",
    items: [
      "Listen aus vier Werkzeugen zusammensuchen",
      "Jede erste Zeile selbst schreiben",
      "Nachfassen im Kalender führen",
      "Am Monatsende zusammentragen, was gelaufen ist",
    ],
    note: "Es läuft weiter, während du an Kundenprojekten sitzt.",
  },

  // ══════════════════════════════════════════════════════════════════════
  // DER WEG. Das Kernstueck der Startseite, neu am 2026-08-31.
  //
  // Youssef: "bau die animation weiter aus. und zwar wirklich konkret.
  // schreib nix technisches. zeig wie der CEO gefunden wird, zeig dass seine
  // website gescannt wird, zeig dann wie email template aufgesetzt wird, und
  // zeig wie der lead auf die personalisierte email antwortet und einen call
  // ausmacht, dann zeig wie ein call laeuft und ein deal geclosed wird."
  //
  // KEIN TECHNISCHES WORT. In diesem ganzen Block steht kein Werkzeugname,
  // keine Schnittstelle, keine Einstellung und keine Abkuerzung. Was
  // dasteht, koennte ein Mensch ueber seinen eigenen Dienstag erzaehlen.
  //
  // DREI NISCHEN, weil der Besucher waehlt und jede Wahl bis zum Schluss
  // durchzieht: Rolle, Firma, Befunde, Mailtext, Antwort, Termin und Notizen
  // sind je Nische eigene Saetze. Eine vierte Nische kostet denselben
  // vollstaendigen Satz noch einmal, in zwei Sprachen, und eine halbfertige
  // waere im Ablauf sofort zu sehen.
  //
  // DIE ZAHLEN. `firmen` ist die einzige, und sie steht in einer Buehne, die
  // als Beispiel gekennzeichnet ist -- sie zeigt, wie ein Suchergebnis
  // aussieht, und behauptet kein Ergebnis. Sonst steht hier keine Zahl:
  // keine Antwortquote, keine Zeitersparnis, kein Umsatz. Der Abschluss-Akt
  // endet deshalb mit einem Satz und nicht mit einem Betrag.
  // ══════════════════════════════════════════════════════════════════════
  // AKT ZWEI LIEST DIE FIRMA, NICHT NUR IHRE WEBSITE, seit dem 2026-09-05.
  // Die drei Befunde je Nische waren Website-Maengel, die Mail bot deren
  // Behebung an, und der ganze Ablauf sah aus wie das Drehbuch eines
  // Webdesigners. Youssef: "nicht nur website pains um dann eine website
  // loesung anzubieten." Jetzt sind die drei Befunde Dinge, die nur auf
  // diese Firma zutreffen (neuer Standort, Stellenanzeige, Bewertungen),
  // die Mail greift eines davon auf und stellt eine Frage, und was der
  // Absender verkauft, bleibt offen: das ist bei jedem Nutzer ein anderes.
  //
  // Der Titel hiess bis zum 2026-09-05 "Eine Nische rein. Ein Kunde raus."
  // Youssefs Mentor: "Change this title because it doesn't make sense."
  // Jetzt steht da, was der Abschnitt zeigt: der Weg von der Nische zum
  // Kunden in sechs Schritten. Der Schlusssatz je Nische (`abschluss`) hat
  // dasselbe Bild getragen und ist mitgezogen.
  journey: {
    title: "Von der Nische zum Kunden, in sechs Schritten.",
    body: "Sechs Schritte, und du machst nur den ersten. Wähle eine Nische und sieh zu.",
    sampleNote: "Beispielansicht",
    frage: "Welche Nische?",
    hinweis: "Wähle eine. Alles danach passiert ohne dich.",
    // Ein Satz je Akt, unter dem Rahmen. Nischenunabhaengig, damit er beim
    // Wechsel der Nische stehen bleiben kann.
    untertitel: [
      "Nische durchsucht, Adresse geprüft.",
      "Firma gelesen, drei Dinge, die nur auf sie passen.",
      "Eine Mail, die nur hierhin passt.",
      "Antwort da, Status springt auf Termin.",
      "Gespräch läuft, Notizen im CRM.",
      "Kunde. Die nächste Nische läuft schon.",
    ],
    akte: [
      "Entscheider gefunden",
      "Firma angesehen",
      "Mail geschrieben",
      "Antwort da",
      "Gespräch läuft",
      "Kunde",
    ],
    firmenLabel: "Firmen durchsucht",
    gefundenLabel: "Entscheider",
    geprueft: ["E-Mail geprüft", "Telefon", "LinkedIn"],
    scanLabel: "Was sich über die Firma finden ließ",
    // Woher die drei Befunde kommen: drei Chips unter dem Fenster im Akt.
    quellen: ["Website", "Stellenanzeigen", "Bewertungen"],
    anLabel: "An",
    betreffLabel: "Betreff",
    schreibtLabel: "schreibt …",
    antwortLabel: "Antwort eingegangen",
    statusVorher: "Kontaktiert",
    statusNachher: "Termin",
    notizenLabel: "Notizen aus dem Gespräch",
    spalten: ["Neu", "Kontaktiert", "Termin", "Kunde"],
    wiederholen: "Nochmal ansehen",
    neuWaehlen: "Andere Nische",
    nischen: [
      {
        id: "sanitaer",
        label: "Sanitärbetriebe",
        suche: "Sanitärbetriebe in Wien",
        firmen: 247,
        rolle: "Inhaber",
        segment: "Sanitärbetrieb, 30 Mitarbeitende",
        befunde: [
          "Seit Juli Notdienst rund um die Uhr, auch am Wochenende",
          "Sucht laut Stellenanzeige zwei weitere Monteure",
          "Bewertungen loben die Pünktlichkeit, bemängeln die Erreichbarkeit",
        ],
        betreff: "Euer Notdienst seit Juli",
        mail: [
          "Ihr habt im Juli auf Notdienst rund um die Uhr umgestellt und sucht gerade zwei Monteure dazu.",
          "Wer nimmt nachts ab, wenn alle vier unterwegs sind?",
          "Zehn Minuten am Donnerstag, dann zeig ich euch, wie andere Betriebe das lösen?",
        ],
        antwort: "Gute Frage, genau das ist gerade unser Thema. Donnerstag um 14 Uhr?",
        termin: "Donnerstag, 14:00",
        notizen: [
          "Nachts landen Anrufe auf zwei privaten Handys",
          "Sucht seit Mai, findet keine Monteure",
          "Entscheidet allein, kein Gremium",
        ],
        abschluss: "Eine Nische, ein neuer Kunde.",
      },
      {
        id: "zahnarzt",
        label: "Zahnarztpraxen",
        suche: "Zahnarztpraxen in München",
        firmen: 312,
        rolle: "Praxisinhaberin",
        segment: "Zahnarztpraxis, 12 Mitarbeitende",
        befunde: [
          "Zweiter Standort in Bogenhausen, eröffnet im März",
          "Schwerpunkt Kinderzahnheilkunde, Team von vier auf zwölf gewachsen",
          "Bewertungen: freundlich, aber am Telefon schwer zu erreichen",
        ],
        betreff: "Euer zweiter Standort",
        mail: [
          "Glückwunsch zum zweiten Standort in Bogenhausen, das Team ist seit März dreimal so groß.",
          "Läuft die Terminvergabe für beide Praxen noch über ein Telefon?",
          "Soll ich euch zeigen, wie zwei Praxen mit einer Anmeldung auskommen?",
        ],
        antwort: "Das ist genau unser Engpass gerade. Dienstag früh?",
        termin: "Dienstag, 08:30",
        notizen: [
          "Zwei Kräfte hängen halbtags am Telefon",
          "Beide Standorte sollen eine Anmeldung teilen",
          "Budget steht ab dem vierten Quartal",
        ],
        abschluss: "Eine Nische, eine neue Kundin.",
      },
      {
        id: "shopify",
        label: "Shopify-Marken",
        suche: "Shopify-Marken in Deutschland",
        firmen: 189,
        rolle: "Gründerin",
        segment: "Shopify-Marke, 14 Mitarbeitende",
        befunde: [
          "Dritte Kollektion in diesem Jahr, seit September im Shop",
          "Versendet aus dem eigenen Lager in Leipzig",
          "Bewertungen loben die Verpackung und fragen, wann was wieder da ist",
        ],
        betreff: "Eure dritte Kollektion",
        mail: [
          "Drei Kollektionen in einem Jahr, und ihr verschickt alles selbst aus Leipzig.",
          "Wie haltet ihr die Nachbestellungen im Griff, wenn eine Größe ausverkauft ist?",
          "Soll ich euch zeigen, was drei Marken in eurer Größe dafür nutzen?",
        ],
        antwort: "Oh, das trifft einen Nerv. Freitag um 11?",
        termin: "Freitag, 11:00",
        notizen: [
          "Wer nach einer Größe fragt, bekommt eine Mail von Hand",
          "Zwei Leute im Team, niemand entwickelt",
          "Will vor dem Weihnachtsgeschäft fertig sein",
        ],
        abschluss: "Eine Nische, eine neue Kundin.",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // DIE ANBINDUNG AN CLAUDE, neu am 2026-08-31 und der neue Hauptgrund.
  //
  // Youssef: "die claude mcp integration ist ein viel besserer verkaufsargument
  // denn der kunde kann alle seine agent skills und automations dazu
  // integrieren."
  //
  // WAS DIE ANBINDUNG WIRKLICH KANN, nachgesehen am 2026-08-31 in
  // apps/web/lib/mcp/tool-descriptions.ts: 23 Werkzeuge, lesend ueber
  // Workspaces, Listen, Leads, Angebot, Sequenz, Zahlen und Antworten;
  // schreibend ueber Aufhaenger, Website-Befund, Kontaktstatus, Notizen und
  // Angebotsfelder; dazu Kampagne anlegen, Sequenz setzen und zu Instantly
  // veroeffentlichen.
  //
  // WAS SIE NICHT KANN, und was deshalb hier nicht behauptet wird: eine Suche
  // starten und eine Mail senden. Beides ist ausdruecklich so gebaut ("No tool
  // here sends an email, starts a search, activates or pauses a campaign, or
  // deletes anything, and that boundary is deliberate"), und eine Suche legt
  // Youssef in seinen eigenen Abläufen per SQL-INSERT an, nicht ueber die
  // Anbindung. Wer hier "suchen" oder "senden" hineinschreibt, laesst die
  // Seite etwas versprechen, das der erste Interessent im Gespraech widerlegt.
  //
  // DIE ZAHL IM ERGEBNIS ist unser eigener Lauf vom 27.08.2026 und steht so
  // im Ablauf-Drehbuch: 1.227 Leads, 883 Website-Befunde, sechs Kampagnen.
  // Sie ist ausdruecklich als UNSER Lauf formuliert, nicht als Kundenergebnis.
  // ══════════════════════════════════════════════════════════════════════
  claudeStage: {
    title: "Sag es Claude, statt es zu klicken",
    body: "Frostbreaker hängt sich als Anbindung in Claude. Deine eigenen Abläufe und Skills greifen darauf zu.",
    auftrag: "Geh die neue Liste durch, schreib die Aufhänger und leg die Kampagne an.",
    schritte: [
      { name: "list_workspaces", text: "Öffnet den Workspace des Kunden" },
      { name: "get_leads", text: "Liest die neue Liste" },
      { name: "set_lead_icebreakers", text: "Schreibt fünfzig eigene Aufhänger auf einmal, mit Vorschau und Rückgängig" },
      { name: "create_campaign", text: "Legt die Kampagne mit ihrer Sequenz an" },
      { name: "publish_campaign", text: "Veröffentlicht sie zu Instantly, ohne Abgemeldete und Sperrliste" },
    ],
    ergebnis: "So sind bei uns am 27. August 1.227 Leads durchgelaufen: 883 Website-Befunde, sechs Kampagnen, an einem Tag.",
    grenze: "Suchen startet die Anbindung nicht, und senden auch nicht. Die Kampagne liegt fertig bei Instantly und wartet auf deinen Startknopf.",
    wiederholen: "Nochmal ansehen",
  },
  // ══════════════════════════════════════════════════════════════════════
  // DIE FUNKTIONEN ALS TAFEL, seit dem 2026-09-02. Neun Zeilen, je ein Name
  // und ein Satz; die Seite /funktionen mit ihren Nachbildungen ist gefallen.
  // Was jemand genauer wissen will, wird im Gespraech geklaert.
  // ══════════════════════════════════════════════════════════════════════
  featureTable: {
    title: "Was drin ist",
    body: "Ein Werkzeug, eure eigenen Zugänge.",
    rows: [
      { id: "find", name: "Lead Finder", text: "Google Maps, Apollo und Hunter in einer Liste" },
      { id: "enrich", name: "Decision Maker Finder", text: "Die richtige Person, Adresse geprüft" },
      { id: "personalize", name: "Aufhänger", text: "Ein eigener je Empfänger, aus dem, was sich über ihn finden lässt" },
      { id: "write", name: "Sequenz", text: "Acht Mails aus eurem Angebot" },
      { id: "check", name: "Textprüfung", text: "Zwölf Prüfungen vor dem Versand" },
      { id: "send", name: "Kampagnen", text: "Versand über Instantly, Postfächer im Blick" },
      { id: "protect", name: "Sperrliste", text: "Was nicht rausgehen darf, geht nicht raus" },
      { id: "pipeline", name: "Pipeline", text: "Jede Antwort in der richtigen Spalte" },
      { id: "claude", name: "Claude-Anbindung", text: "Deine Abläufe bedienen das Werkzeug" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // "FUER WEN", neu am 2026-08-15 (KONZENTRATION.md, Auftrag 2). Die
  // konkrete Haelfte der Antwort auf "fuer wen ist das": oben im Hero das
  // breite Versprechen, hier drei Tueren mit Namen. Ersetzt auf der
  // Startseite den Abschnitt `agency` weiter unten, der nur Agenturen zeigt.
  //
  // Drei Lagen, keine Branchen -- wortgleich mit dem Hero: fuer euch selbst,
  // fuer eure Kunden, oder E-Mail als neuer Kanal. Karte "self" und "clients"
  // tragen dabei auch das Automatisierungsversprechen (Gruppe 1 des
  // Betreibers: schon dabei, will es automatisieren) -- deshalb bei beiden
  // ausdruecklich "statt in vieren" / "automatisiert statt von Hand".
  // ══════════════════════════════════════════════════════════════════════
  whoFor: {
    eyebrow: "Für wen",
    // Umformuliert 2026-08-15 (KLARTEXT.md): ", nicht" gestrichen, Titel
    // benennt jetzt die drei Karten darunter statt sich gegen "Branche"
    // abzugrenzen.
    title: "Für wen",
    cards: [
      {
        id: "self",
        title: "Ihr gewinnt Kunden für euch selbst",
        body: "Ihr wisst, wen ihr braucht, und schreibt selbst an. Der ganze Weg dahin läuft in einem Werkzeug statt in vieren.",
        linkLabel: "Wie das für euch aussieht",
      },
      {
        id: "clients",
        // Der Link zeigt bewusst auf /fuer-agenturen und traegt dieselbe
        // Formulierung wie `agency.pageLink` -- derselbe Ort, dieselbe
        // Zusage, keine zweite Wortwahl fuer dasselbe Versprechen.
        title: "Ihr gewinnt Kunden für andere",
        body: "Ihr übernehmt die Akquise für eure Kunden, automatisiert statt von Hand. Je Kunde ein eigener Workspace in seinem Branding, mit getrennten Sperrlisten.",
        linkLabel: "Wie das im Agenturalltag aussieht",
      },
      {
        id: "new",
        title: "E-Mail ist bei euch neu",
        body: "Ihr wollt den Kanal aufmachen und wisst noch nicht, wo ihr anfangt. Die erste Suche läuft am selben Tag, die erste Kampagne nach zwei bis vier Wochen Warmup.",
        linkLabel: "Alle Funktionen ansehen",
      },
    ],
  },
  // ══════════════════════════════════════════════════════════════════════
  // DER ERSTE GENANNTE KUNDE, neu am 2026-08-09.
  //
  // Bis hierher belegte die Seite alles mit eigenen Bildern und eigenen
  // Zahlen. Genau das ist die Luecke, die KONVERSION.md benennt: niemand
  // ausser dem Gruender bestaetigt, dass es funktioniert.
  //
  // retaiyn ist dafuer der Idealfall, aber NICHT aus dem naheliegenden
  // Grund. Sie betreiben kein Outbound fuer ihre Kunden -- sie richten
  // WhatsApp-Marketing und CRMs ein, damit die BESTANDSKUNDEN von
  // E-Commerce-Marken wiederkommen. Ihr eigenes Problem war das Gegenteil
  // ihres Geschaefts: Neukundengewinnung, fuer die neben der laufenden
  // Betreuung keine Zeit blieb. Diese Umkehrung ist der ganze Wert des
  // Abschnitts, denn sie ist der Normalfall jeder Agentur.
  //
  // Deshalb haengt unter dem Kundenteil ein zweiter Block (`mirror`), der
  // den Leser direkt anspricht. Ohne ihn waere das hier eine nette
  // Kundenkarte; mit ihm ist es der Moment, in dem eine fremde Agentur ihr
  // eigenes Problem beschrieben sieht. Die Kundenkarte liefert den Beleg,
  // der Spiegel die Uebertragung.
  //
  // Bewusst KEINE Ergebniszahl und KEIN Zitat. Die Zusammenarbeit ist neu,
  // gemessen ist noch nichts, und eine Zahl ohne Messung dahinter macht auf
  // dieser Seite alles andere unglaubwuerdig -- dieselbe Begruendung wie bei
  // why.earlyAccess. Alles Uebrige laesst sich auf retaiyn.com nachpruefen.
  // `pending` haelt den Platz fuer die echten Zahlen frei und macht aus der
  // Luecke ein Argument statt einer Verlegenheit.
  // ══════════════════════════════════════════════════════════════════════
  customer: {
    // Kurzform fuer den Hero: klein, aber ueber der Falz.
    stripLabel: "Im Einsatz bei",
    // Seit dem 2026-09-02 zwei Namen: retaiyn und Frostbreaker Marketing,
    // Youssefs Website-Angebot fuer lokale Betriebe, das seine Kunden ueber
    // Frostbreaker findet.
    logosTitle: "Wer damit Kunden gewinnt",
    logos: [
      { id: "retaiyn", name: "retaiyn", url: "https://www.retaiyn.com", urlLabel: "retaiyn.com", descriptor: "Customer Experience für E-Commerce-Marken", sucht: "Sucht Entscheider bei E-Commerce-Marken", href: "/kunden/retaiyn" },
      { id: "marketing", name: "frostbreaker marketing", url: "https://marketing.frostbreaker.app", urlLabel: "marketing.frostbreaker.app", descriptor: "Websites für lokale Betriebe", sucht: "Sucht Betriebe, deren Website keine Anrufe bringt", href: "" },
    ],
    // Der Weg zur ausfuehrlichen Fallbeschreibung. Neu am 2026-08-31: die
    // Startseite zeigt den Beleg nur noch kurz, der Fall selbst steht auf
    // /kunden/retaiyn und braucht von dort einen benannten Weg.
    pageLink: "Den ganzen Fall lesen",
    eyebrow: "Kunde",
    // Umformuliert 2026-08-15 (KLARTEXT.md): der Gegensatz "Kundenbindung
    // .../ Kundengewinnung war" bestand die Deckprobe nicht -- er beschreibt
    // ein Problem, nennt aber nicht, wofuer Frostbreaker bei retaiyn sorgt.
    // Die neue Zeile benennt Kunde und Kanaele direkt.
    title: "retaiyn: Kundengewinnung über E-Mail und LinkedIn",
    name: "retaiyn",
    url: "https://www.retaiyn.com",
    urlLabel: "retaiyn.com",
    logoAlt: "Logo der Agentur retaiyn",
    // Sachkorrektur am 2026-08-13 (BEISPIELE.md, Abschnitt 3): hier stand
    // "CRMs". Auf retaiyn.com steht an dieser Stelle Customer Experience, AI
    // Support, WhatsApp und E-Mail -- von CRM-Aufbau steht dort nichts. Ein
    // Kundenabschnitt, dessen erste Tatsachenbehauptung der Kunde selbst nicht
    // unterschreiben wuerde, ist schlimmer als gar keiner.
    descriptor: "Customer Experience für E-Commerce-Marken",
    body: [
      "retaiyn verbindet E-Mail-Marketing, WhatsApp und Customer Support für E-Commerce-Marken, damit die Kunden dieser Marken wiederkommen. Das füllt den Arbeitstag vollständig. Die eigene Neukundengewinnung war das, was danach käme, und danach kam nie etwas.",
      "Dabei war die Zielgruppe nie die Frage: Entscheider bei E-Commerce-Marken. Nur das Erreichen war Handarbeit. Recherchieren, schreiben, nachfassen, für jeden einzeln. Genau das läuft heute über Frostbreaker: die richtigen Entscheider finden, über E-Mail und LinkedIn ansprechen, automatisch nachfassen. Die Stunden bleiben da, wo sie den Umsatz sichern: bei den Kunden, die schon da sind.",
    ],
    facts: [
      { label: "Agentur für", value: "Customer Experience, AI Support, WhatsApp und E-Mail für E-Commerce-Marken" },
      { label: "Sucht", value: "Entscheider bei E-Commerce-Marken" },
      { label: "Über", value: "E-Mail und LinkedIn, mit automatischem Nachfassen" },
      { label: "Als Nächstes", value: "Dieselbe Mechanik für die Kunden der Agentur" },
    ],
    // Der Spiegel. Bewusst in der zweiten Person und ohne den Kundennamen:
    // ab hier geht es nicht mehr um retaiyn, sondern um den Leser.
    mirror: {
      title: "Und in eurer Agentur?",
      body: [
        "Agenturen leben von laufender Betreuung. Die Stunden gehören den Kunden, die schon da sind. Die eigene Akquise ist das, was passiert, sobald wieder Luft ist. Es wird nie Luft.",
        "Eine Agentur, die nur wächst, wenn jemand Zeit übrig hat, wächst nicht planbar. Frostbreaker macht aus der Akquise etwas, das nebenherläuft: Entscheider in eurer Zielgruppe finden, über E-Mail und LinkedIn ansprechen, nachfassen, ohne dass jemand dafür einen Tag freiräumt.",
      ],
      cta: "Dreißig Minuten über eure Zielgruppe",
    },
    pending:
      "Was das bei retaiyn gebracht hat, steht hier, sobald genug gemessen ist. Wir schreiben keine Zahl hin, die wir nicht selbst nachrechnen können.",
  },
  // ══════════════════════════════════════════════════════════════════════
  // "WAS ES KOSTET", neu am 2026-08-15 (KONZENTRATION.md, Auftrag 3). Die
  // Antwort stand vorher bei 93% Scrolltiefe, zugeklappt in der FAQ, und
  // zweimal. Sie zieht als eigener Abschnitt nach vorn -- entschieden OHNE
  // Zahl: kein Betrag, keine Spanne, kein Ab-Preis. Was sich aendert, ist die
  // Stelle und die Klarheit, nicht das Geschaeftsmodell. Die beiden
  // FAQ-Eintraege "Was brauche ich, und was kostet es?" und "Was kostet das?"
  // sind deshalb unten zu einem geworden, der hierher zurueckverweist statt
  // sich zu wiederholen.
  // ══════════════════════════════════════════════════════════════════════
  costs: {
    // Am 2026-08-15 von Ueberschrift, Einleitung, VIER Karten und Schlusssatz
    // auf drei Saetze eingedampft (KORREKTUR.md Punkt 6). Der Betreiber:
    // "wuerde ich es sogar kuerzer machen [...] nicht soviel drum reden."
    //
    // Rund 740 Pixel fuer eine Auskunft, die in drei Saetze passt. Was die
    // vier Karten sagten, steht jetzt in zweien davon; die dritte haelt die
    // beiden Einwaende fest, die sonst im Gespraech kommen.
    //
    // NICHT uebernommen wurde der Vorschlag "massgeschneiderte Loesung fuer
    // deine Beduerfnisse". Den Satz schreibt jede Agentur der Welt, er
    // besteht die Wettbewerberprobe nicht, und er sagt weniger als "haengt an
    // eurer Kundenzahl". Die Absicht -- kuerzer, kein Drumherum -- ist
    // umgesetzt, nur ohne den Leersatz.
    eyebrow: "Kosten",
    title: "Den Preis legen wir gemeinsam fest",
    body: "Er hängt an eurer Kundenzahl, nicht an Leads und nicht an Workspaces. Genannt im ersten Gespräch, monatlich kündbar, ohne Einrichtungsgebühr.",
    note: "Die Abfragen laufen über eure eigenen Zugänge, zum Selbstkostenpreis. Wir schlagen nichts auf.",
  },
  // ══════════════════════════════════════════════════════════════════════
  // Am 2026-08-14 von 17 auf 8 Eintraege gekuerzt (VEREINFACHUNG.md 1.4).
  // Der Fliesstext der FAQ war laenger als der jedes anderen Abschnitts, und
  // acht der siebzehn Antworten standen wortnah schon weiter oben auf der
  // Seite. Gefallen sind: die Agentur-Frage (steht im Agentur-Band zwanzig
  // Zeilen darueber), die zweite Apollo/Hunter-Frage (dieselbe Frage wie die
  // erste, nur mit vertauschten Anbieternamen), info@-Filter und
  // Adresspruefung (Rundgang Schritt 1 und 3), Sperrliste (stand damals in
  // #startklar, seit dessen Streichung am 14.08.2026 in
  // featuresPage.groups.protect),
  // SPF/DKIM (#torwart) und "Kampagnen in einem zweiten Tool" (Zeile `send`
  // in der Vergleichstabelle). Drei Kostenfragen sind zu einer geworden.
  //
  // Der neunte Platz bleibt bewusst frei: er gehoert der Frage, die im
  // Verkaufsgespraech tatsaechlich am haeufigsten kommt.
  //
  // NACHTRAG 2026-08-15 (KONZENTRATION.md, Auftrag 4): von 8 auf 7 Eintraege.
  // "Was brauche ich, und was kostet es?" und "Was kostet das?" waren zwei
  // Fragen, die sich ueberlappten -- fuer den Leser das Signal, dass es
  // kompliziert ist. Sie sind jetzt eine: die Dienste-Liste bleibt (steht
  // sonst nirgends vollstaendig), der Monatsbetrag zieht in den neuen
  // Abschnitt `costs` um, hier bleibt nur der Verweis dorthin.
  // ══════════════════════════════════════════════════════════════════════
  faq: {
    title: "Häufige Fragen",
    items: [
      // Die Apollo-Antwort ist bewusst umgedreht formuliert -- nicht "wir sind
      // nur eine Ergaenzung", sondern was wir zusaetzlich tun.
      { q: "Warum nicht gleich direkt zu Apollo oder Hunter?", a: "Weil die Adresse der Anfang ist, nicht das Ergebnis. Apollo liefert Entscheider samt gepruefter Adresse. Danach faengt die Arbeit an: ein eigener Aufhaenger je Kontakt, die Pruefung des Textes, der Abgleich mit Sperrliste und Bestandskunden, der Versand, die LinkedIn-Nachricht und der Anruf, wenn der Lead nicht antwortet, und am Ende die Frage, welche Textfassung Termine gebracht hat. Genau das liegt zwischen Apollo und Instantly, und genau das macht Frostbreaker." },
      { q: "Was brauche ich, um loszulegen?", a: "Eigene Zugänge bei den Diensten, die im Hintergrund laufen: Google für die Kartensuche, OpenAI für die Recherche, Hunter und Apollo für Adressen und Entscheider, Prospeo als weitere Quelle, NeverBounce für die Verifizierung und Instantly für den Versand. Die Schlüssel hinterlegt ihr einmal in den Einstellungen, verschlüsselt gespeichert. Danach laufen alle Abfragen auf euren eigenen Konten, zum Selbstkostenpreis, wir schlagen keinen Cent auf. Nach jeder Suche steht im Dashboard auf den Cent genau, was sie gekostet hat. Was der monatliche Betrag kostet, steht weiter oben auf dieser Seite." },
      { q: "Kann ich jederzeit kündigen?", a: "Ja, monatlich, keine Mindestlaufzeit, keine Kündigungsfrist über den laufenden Monat hinaus." },
      // Die beiden Einwaende, die der Angebot-Abschnitt auf der Startseite
      // ausloest. Beide werden beantwortet und nicht ausgesessen: wer sie
      // erst im Gespraech beantwortet bekommt, stellt sie gar nicht erst.
      { q: "Klingen dann nicht alle Mails gleich?", a: "Gleich ist das Gerüst, verschieden ist die Zeile, die zählt. Die Eröffnung entsteht je Empfänger aus dem, was über diese Firma recherchiert wurde, und nicht aus einem Platzhalter. Dazu gibt es je Stufe zwei Fassungen, und die müssen sich im Ansatz unterscheiden: anderer Blickwinkel, andere Frage, anderer erster Satz. Zwei Fassungen, die sich in zwei Wörtern unterscheiden, meldet die App als ein und denselben Text. Und was aus deinem Angebot wörtlich in die Mail rutscht, fällt beim Nachmessen auf, denn dann liest der Empfänger die Stichpunkte eines Fremden." },
      { q: "Kann ich den Text noch ändern?", a: "Ja. Nichts geht raus, bevor du es gesehen hast: die acht Texte stehen im Kampagnenformular und warten dort. Du kannst jede Stufe überschreiben oder sie mit einer Anweisung nachschärfen, also kürzer, direkter, oder mach daraus eine Abschiedsmail, und zwar Stufe für Stufe statt für die ganze Sequenz auf einmal. Was du nicht anfasst, bleibt so stehen, wie es ist. Bevor ein Text an tausend Adressen geht, hat ihn ein Mensch gelesen." },
      { q: "Wie schnell bin ich startklar?", a: "Die erste Suche läuft am selben Tag. Bis die erste Kampagne rausgeht, vergehen zwei bis vier Wochen. So lange brauchen frische Postfächer Warmup, und daran führt kein Werkzeug vorbei. Genau deshalb gibt es keine 14-Tage-Testphase: sie wäre kürzer als die Einrichtung. Wir richten stattdessen im Gespräch gemeinsam ein und begleiten die erste Kampagne." },
      { q: "Was passiert mit meinen Daten, wenn ich kündige?", a: "Eure Daten werden nach Vertragsende gelöscht oder auf Wunsch zurückgegeben, geregelt im AVV. Es gibt keine automatische Weiternutzung nach Kündigung." },
    ],
  },
  finalCta: {
    // Umformuliert 2026-08-15 (KLARTEXT.md): benennt jetzt, was im Gespraech
    // passiert, statt eine allgemeine Aufforderung zu sein.
    title: "Dreißig Minuten, danach läuft die erste Suche",
    body: "Wir schauen gemeinsam auf eure Kundenstruktur, richten den ersten Workspace ein und verbinden die API-Zugänge. Danach läuft die erste Suche noch am selben Tag. Kein Verkaufsgespräch, keine Kreditkarte.",
  },
  // Die Auffangseite. Aus der Abnahmeliste: "Jedes Linkziel existiert.
  // Fusszeile, Navigation, Anker. Auffangseite steht." Bis heute stand hier
  // die Standardseite von Next -- schwarze Systemschrift auf Weiss, ohne
  // Kopfleiste, ohne Weg zurueck.
  notFound: {
    title: "Diese Seite gibt es nicht",
    body: "Vielleicht ist der Link alt. Drei Wege zurück:",
    links: [
      { label: "Zur Startseite", href: "/" },
      { label: "Der Ablauf", href: "/#ablauf" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  footer: {
    location: "Wien, Österreich",
    impressum: "Impressum",
    datenschutz: "Datenschutzerklärung",
    agb: "AGB",
    // Am 2026-08-14 aus dem Vertrauens-Abschnitt hierher gezogen. Der
    // Abschnitt ist gefallen (VEREINFACHUNG.md 1.2), und der AVV war der
    // einzige seiner drei Rechtslinks, den der Fuss noch nicht hatte. Eine
    // Seite, die an DSGVO-empfindliche Kaeufer verkauft, darf ihn nicht mit
    // dem Abschnitt verlieren.
    avv: "AVV",
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
  // Zweites Angebot neben dem Produkt: Individualentwicklung. Eigene Seite
  // statt einer Sektion auf der Startseite, weil sich die Zielgruppen nicht
  // ueberschneiden -- wer das Produkt sucht, soll nicht ueber Auftragsarbeit
  // stolpern, und wer einen Entwickler sucht, nicht ueber Trial-Buttons.
  // Ansprache bewusst "du" wie auf /kontakt (dort spricht ebenfalls Youssef
  // persoenlich), nicht "ihr" wie auf der Agenturseite.
  customPage: {
    eyebrow: "Eigene Software",
    title: "Willst du eine eigene App für dein Unternehmen?",
    intro: "Ich bin der Entwickler hinter Frostbreaker. Was bei dir an einer Tabelle hängt oder an fünf Tools per Copy-paste, baue ich als ein System, das dir gehört.",
    // Die neue Seite seit dem 2026-09-02: Person, Schmerz als Bild,
    // Versprechen. Kein Verweis auf eine Fallstudie mehr.
    pill: "Für Betriebe, die an Tabellen und fünf Tools hängen",
    flow: {
      today: "Heute",
      after: "Mit eigener Software",
      manual: "von Hand",
      steps: [
        { label: "Anfrage per Mail", manual: false },
        { label: "Tabelle", manual: false },
        { label: "CRM", manual: true },
        { label: "Rechnung", manual: true },
      ],
      one: "Ein System, das dir gehört",
    },

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
    proofBody: "Diese Seite und die App dahinter kommen von mir. Ich baue die Art von Software, die ich täglich selbst benutze.",
    proofStats: [
      { value: "3 Wochen", label: "von der Idee zum laufenden System" },
      { value: "800+", label: "verarbeitete Firmen im Live-Betrieb" },
      { value: "6", label: "angebundene externe Dienste" },
    ],
    proofLinkLabel: "Die ganze Entstehung nachlesen",
    ctaTitle: "Erzähl mir von deinem Ablauf",
    ctaBody: "30 Minuten, ohne Präsentation. Lohnt sich der Aufwand nicht, sage ich dir das auch.",
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
    links: [
      { label: "How it works", href: "/#ablauf" },
      { label: "Who it's for", href: "/#fuer-wen" },
      { label: "Features", href: "/#funktionen" },
      { label: "Pricing", href: "/#kosten" },
    ],
    kontakt: "Contact",
    custom: "Custom software",
    themeLight: "Light mode",
    themeDark: "Dark mode",
  },
  cta: {
    primary: "Book a call",
    secondary: "Or ask a question first",
    trialNote: "30 minutes, not a sales pitch. We look at your client setup together and set up the first workspace.",
    trialShort: "30 minutes, not a sales pitch.",
  },
  hero: {
    // Geschrieben, nicht uebersetzt -- siehe die Begruendung im de-Block.
    eyebrow: "For anyone who wants to win customers over email",
    pill: "For agencies and B2B teams",
    h1Pre: "Customer acquisition that ",
    h1Accent: "keeps running",
    h1Post: " without you.",
    short: "You say who you want to reach. Finding, writing and following up happens on its own.",
    body: "One tool from a niche to a signed deal: verified decision-makers, a personal opener for each one, the email sequence, the LinkedIn message and the phone number. One workspace per client in their branding, all in the same CRM.",
    dashboardAlt:
      "Frostbreaker dashboard: 800 companies found, 2,000 contacts, 1,327 with an email address, around 267 hours of research saved at 30.40 US dollars in lookup cost",
  },
  heroVisual: {
    workspace: "Dental practices Munich",
    nav: ["Leads", "Campaigns", "Replies", "Pipeline"],
    listTitle: "New leads",
    count: "312 companies searched",
    columns: ["Company", "Decision-maker", "Opener", "Status"],
    rows: [
      { firma: "Dental practice, Schwabing", rolle: "Practice owner", aufhaenger: "Congratulations on the second practice in Bogenhausen, the team has tripled since March.", status: "kontaktiert" },
      { firma: "Orthodontics, Bogenhausen", rolle: "Practice manager", aufhaenger: "Your job ad has been looking for a third person at reception since June.", status: "kontaktiert" },
      { firma: "Dental practice, Pasing", rolle: "Owner", aufhaenger: "", status: "neu" },
      { firma: "Dental clinic, Haidhausen", rolle: "Managing director", aufhaenger: "Your reviews praise the team, three of them ask for evening appointments.", status: "neu" },
    ],
    typing: "You added paediatric dentistry in spring, and the waiting list is already on the site.",
    status: { neu: "New", kontaktiert: "Contacted", termin: "Booked" },
    replyLabel: "Reply is in",
    reply: "That is exactly our bottleneck right now. Tuesday morning?",
    replyFrom: "Practice owner, Schwabing",
  },
  strikeList: {
    title: "You stop doing this by hand",
    items: [
      "Pulling lists together out of four tools",
      "Writing every opening line yourself",
      "Keeping follow-ups in your calendar",
      "Piecing together at month end what actually happened",
    ],
    note: "It keeps running while you sit in client work.",
  },
  journey: {
    title: "From a niche to a customer, in six steps.",
    body: "Six steps, and you only take the first. Pick a niche and watch.",
    sampleNote: "Example view",
    frage: "Which niche?",
    hinweis: "Pick one. Everything after that happens without you.",
    untertitel: [
      "Niche searched, address verified.",
      "Company read, three things that fit only them.",
      "One email that fits only here.",
      "Reply is in, status jumps to booked.",
      "Call running, notes in the CRM.",
      "Customer. The next niche is already running.",
    ],
    akte: [
      "Decision-maker found",
      "Company looked at",
      "Email written",
      "Reply is in",
      "Call running",
      "Customer",
    ],
    firmenLabel: "companies searched",
    gefundenLabel: "Decision-maker",
    geprueft: ["Email verified", "Phone", "LinkedIn"],
    scanLabel: "What could be found about the company",
    quellen: ["Website", "Job ads", "Reviews"],
    anLabel: "To",
    betreffLabel: "Subject",
    schreibtLabel: "writing …",
    antwortLabel: "Reply received",
    statusVorher: "Contacted",
    statusNachher: "Meeting",
    notizenLabel: "Notes from the call",
    spalten: ["New", "Contacted", "Meeting", "Customer"],
    wiederholen: "Play again",
    neuWaehlen: "Another niche",
    nischen: [
      {
        id: "sanitaer",
        label: "Plumbing firms",
        suche: "Plumbing firms in Vienna",
        firmen: 247,
        rolle: "Owner",
        segment: "Plumbing firm, 30 staff",
        befunde: [
          "Round-the-clock emergency service since July, weekends included",
          "Job ad is looking for two more fitters",
          "Reviews praise punctuality, complain about reachability",
        ],
        betreff: "Your emergency service since July",
        mail: [
          "You switched to a round-the-clock emergency service in July and are hiring two more fitters.",
          "Who picks up at night when all four are out on jobs?",
          "Ten minutes on Thursday, and I show you how other firms handle it?",
        ],
        antwort: "Good question, that is exactly what we are dealing with. Thursday at two?",
        termin: "Thursday, 14:00",
        notizen: [
          "Night calls land on two private phones",
          "Hiring since May, cannot find fitters",
          "Decides alone, no committee",
        ],
        abschluss: "One niche, one new customer.",
      },
      {
        id: "zahnarzt",
        label: "Dental practices",
        suche: "Dental practices in Munich",
        firmen: 312,
        rolle: "Practice owner",
        segment: "Dental practice, 12 staff",
        befunde: [
          "Second location in Bogenhausen, opened in March",
          "Focus on paediatric dentistry, team grown from four to twelve",
          "Reviews: friendly, but hard to reach by phone",
        ],
        betreff: "Your second location",
        mail: [
          "Congratulations on the second location in Bogenhausen, the team has tripled since March.",
          "Is booking for both practices still running through one phone?",
          "Shall I show you how two practices get by with one front desk?",
        ],
        antwort: "That is exactly our bottleneck right now. Tuesday morning?",
        termin: "Tuesday, 08:30",
        notizen: [
          "Two people on the phone half the day",
          "Both locations should share one front desk",
          "Budget from the fourth quarter",
        ],
        abschluss: "One niche, one new customer.",
      },
      {
        id: "shopify",
        label: "Shopify brands",
        suche: "Shopify brands in Germany",
        firmen: 189,
        rolle: "Founder",
        segment: "Shopify brand, 14 staff",
        befunde: [
          "Third collection this year, in the shop since September",
          "Ships from its own warehouse in Leipzig",
          "Reviews praise the packaging and ask when items are back in stock",
        ],
        betreff: "Your third collection",
        mail: [
          "Three collections in one year, and you ship everything yourselves from Leipzig.",
          "How do you keep restocks under control when a size sells out?",
          "Shall I show you what three brands your size use for that?",
        ],
        antwort: "Oh, that hits a nerve. Friday at eleven?",
        termin: "Friday, 11:00",
        notizen: [
          "Whoever asks about a size gets an email written by hand",
          "Two people on the team, nobody codes",
          "Wants it done before the Christmas season",
        ],
        abschluss: "One niche, one new customer.",
      },
    ],
  },
  claudeStage: {
    title: "Tell Claude instead of clicking it",
    body: "Frostbreaker plugs into Claude as a connector. Your own workflows and skills reach it from there.",
    auftrag: "Go through the new list, write the openers and set up the campaign.",
    schritte: [
      { name: "list_workspaces", text: "Opens that client's workspace" },
      { name: "get_leads", text: "Reads the new list" },
      { name: "set_lead_icebreakers", text: "Writes fifty personal openers at once, with a preview and an undo" },
      { name: "create_campaign", text: "Sets up the campaign with its sequence" },
      { name: "publish_campaign", text: "Publishes it to Instantly, minus opt-outs and the suppression list" },
    ],
    ergebnis: "That is how 1,227 leads ran through here on 27 August: 883 website findings, six campaigns, in one day.",
    grenze: "The connector does not start a search and it does not send. The campaign sits ready in Instantly and waits for you to press start.",
    wiederholen: "Play again",
  },
  featureTable: {
    title: "What's inside",
    body: "One tool, your own API keys.",
    rows: [
      { id: "find", name: "Lead Finder", text: "Google Maps, Apollo and Hunter in one list" },
      { id: "enrich", name: "Decision Maker Finder", text: "The right person, address verified" },
      { id: "personalize", name: "Openers", text: "One per recipient, from what can be found about them" },
      { id: "write", name: "Sequence", text: "Eight emails written from your offer" },
      { id: "check", name: "Copy check", text: "Twelve checks before anything sends" },
      { id: "send", name: "Campaigns", text: "Sending via Instantly, inboxes in view" },
      { id: "protect", name: "Suppression list", text: "What must not go out does not go out" },
      { id: "pipeline", name: "Pipeline", text: "Every reply lands in the right column" },
      { id: "claude", name: "Claude connector", text: "Your workflows operate the tool" },
    ],
  },

  whoFor: {
    eyebrow: "Who it's for",
    title: "Who it's for",
    cards: [
      {
        id: "self",
        title: "You're winning customers for yourselves",
        body: "You know who you need and reach out yourselves. The whole path from there runs in one tool instead of four.",
        linkLabel: "See how it looks for you",
      },
      {
        id: "clients",
        title: "You're winning customers for others",
        body: "You run acquisition for your clients, automated instead of by hand. One workspace per client in their branding, with separate suppression lists.",
        linkLabel: "What that looks like day to day",
      },
      {
        id: "new",
        title: "Email is new to you",
        body: "You want to open the channel and don't know where to start yet. The first search runs the same day, the first campaign after two to four weeks of warmup.",
        linkLabel: "See all features",
      },
    ],
  },
  customer: {
    stripLabel: "Working with",
    logosTitle: "Who wins customers with it",
    logos: [
      { id: "retaiyn", name: "retaiyn", url: "https://www.retaiyn.com", urlLabel: "retaiyn.com", descriptor: "Customer experience for e-commerce brands", sucht: "Looking for decision-makers at e-commerce brands", href: "/kunden/retaiyn" },
      { id: "marketing", name: "frostbreaker marketing", url: "https://marketing.frostbreaker.app", urlLabel: "marketing.frostbreaker.app", descriptor: "Websites for local businesses", sucht: "Looking for businesses whose website brings no calls", href: "" },
    ],
    pageLink: "Read the whole case",
    eyebrow: "Client",
    title: "retaiyn: winning customers over email and LinkedIn",
    name: "retaiyn",
    url: "https://www.retaiyn.com",
    urlLabel: "retaiyn.com",
    logoAlt: "Logo of the agency retaiyn",
    descriptor: "Customer experience for e-commerce brands",
    body: [
      "retaiyn connects email marketing, WhatsApp and customer support for e-commerce brands, so the customers those brands already have keep coming back. That fills the working day completely. Winning their own new clients was the thing that would happen afterwards, and afterwards never came.",
      "The target group was never in question: decision-makers at e-commerce brands. Reaching them was the manual part: research, write, follow up, one at a time. That is exactly what now runs on Frostbreaker: find the right decision-makers, reach them over email and LinkedIn, follow up automatically. The hours stay where they protect revenue, with the clients already on the books.",
    ],
    facts: [
      { label: "Agency for", value: "Customer experience, AI support, WhatsApp and email for e-commerce brands" },
      { label: "Looking for", value: "Decision-makers at e-commerce brands" },
      { label: "Through", value: "Email and LinkedIn, with automatic follow-up" },
      { label: "Next up", value: "The same mechanism for the agency's own clients" },
    ],
    mirror: {
      title: "And in your agency?",
      body: [
        "Agencies live on ongoing work. The hours belong to the clients already on the books. Your own acquisition is what happens once there is room again. There is never room.",
        "An agency that only grows when someone has time to spare doesn't grow predictably. Frostbreaker turns acquisition into something that runs alongside: find decision-makers in your target group, reach them over email and LinkedIn, follow up, without anyone clearing a day for it.",
      ],
      cta: "Thirty minutes about your target group",
    },
    pending:
      "What this produced for retaiyn goes here as soon as there is enough to measure. We don't put up a figure we can't recalculate ourselves.",
  },
  costs: {
    eyebrow: "Pricing",
    title: "We set the price together",
    body: "It depends on your client count, not on your leads and not on your workspaces. Named on the first call, cancel monthly, no setup fee.",
    note: "Lookups run through your own accounts, at cost price. We add not a cent.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Why not go straight to Apollo or Hunter myself?", a: "Because the address is the start, not the result. Apollo delivers decision makers with a verified address. The work begins after that: an opener per contact, a check on the copy, a match against your suppression list and existing customers, the sending, the LinkedIn message and the call when the lead doesn't reply, and finally the question of which copy version booked meetings. All of that sits between Apollo and Instantly, and that is what Frostbreaker does." },
      { q: "What do I need to get started?", a: "Your own accounts with the services running in the background: Google for the map search, OpenAI for the research, Hunter and Apollo for addresses and decision-makers, Prospeo as a further source, NeverBounce for verification and Instantly for sending. You enter the keys once in settings, stored encrypted. After that every lookup runs on your own accounts, at cost, and we add not a cent. After every search the dashboard shows to the cent what it cost. What the monthly amount itself costs sits further up this page." },
      { q: "Can I cancel anytime?", a: "Yes, monthly, no minimum term, no notice period beyond the current month." },
      { q: "Won't every email sound the same then?", a: "The frame is the same, the line that matters is not. The opener is written per recipient out of what was researched about that particular company, not dropped in from a placeholder. On top of that, every step comes in two versions, and they have to differ in approach: different angle, different question, different opening sentence. Two versions that differ by two words get flagged as one and the same. And anything lifted word for word out of your offer is caught when the copy is measured, because at that point the recipient is reading a stranger's bullet points." },
      { q: "Can I still change the copy?", a: "Yes. Nothing goes out before you have seen it: the eight pieces of copy sit in the campaign form and wait there. You can overwrite any step or refine it with a plain instruction, so shorter, more direct, or turn this into a break-up email, one step at a time rather than the whole sequence at once. Whatever you leave alone stays exactly as it is. Before any copy goes to a thousand addresses, a person has read it." },
      { q: "How fast can I get started?", a: "The first search runs the same day. Two to four weeks pass before the first campaign goes out. That is how long fresh mailboxes need to warm up, and no tool gets around it. That is exactly why there is no 14-day trial: it would be shorter than the setup. We set things up together on the call and stay with you through the first campaign." },
      { q: "What happens to my data if I cancel?", a: "Your data is deleted after the contract ends, or returned on request, as governed by the DPA. There's no automatic continued use after cancellation." },
    ],
  },
  finalCta: {
    title: "Thirty minutes, then the first search runs",
    body: "We look at your client setup together, set up the first workspace and connect the API accounts. After that the first search runs the same day. Not a sales pitch, no credit card.",
  },
  notFound: {
    title: "This page does not exist",
    body: "The link may be old. Three ways back:",
    links: [
      { label: "Home", href: "/" },
      { label: "How it works", href: "/#ablauf" },
      { label: "Contact", href: "/kontakt" },
    ],
  },
  footer: {
    location: "Vienna, Austria",
    impressum: "Legal notice",
    datenschutz: "Privacy policy",
    agb: "Terms",
    avv: "DPA",
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
  customPage: {
    eyebrow: "Custom Software",
    title: "Want your own app for your business?",
    intro: "I'm the developer behind Frostbreaker. What runs on a spreadsheet at your company, or on five tools held together by copy-paste, I build as one system you own.",
    pill: "For businesses running on spreadsheets and five tools",
    flow: {
      today: "Today",
      after: "With your own software",
      manual: "by hand",
      steps: [
        { label: "Request by email", manual: false },
        { label: "Spreadsheet", manual: false },
        { label: "CRM", manual: true },
        { label: "Invoice", manual: true },
      ],
      one: "One system you own",
    },

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
    proofBody: "This site and the app behind it came from me. I build the kind of software I use myself every day.",
    proofStats: [
      { value: "3 weeks", label: "from idea to a running system" },
      { value: "800+", label: "companies processed in production" },
      { value: "6", label: "external services integrated" },
    ],
    proofLinkLabel: "Read how it was built",
    ctaTitle: "Tell me about your process",
    ctaBody: "30 minutes, no slide deck. If it isn't worth building, I'll tell you that too.",
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
