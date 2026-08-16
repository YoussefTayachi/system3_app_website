import type { Lang } from "./lang";

// Zentrale Copy-/Daten-Quelle fuer die gesamte Website, zweisprachig (DE/EN).
// Icons sind sprachunabhaengig und leben in _icons.tsx, hier nur Text/Zahlen.
// Beide Sprachversionen muessen exakt dieselbe Form haben (type Dictionary =
// typeof de erzwingt das fuer en) -- gleiches Prinzip wie lib/i18n/dict.ts in
// der Haupt-App.

const de = {
  nav: {
    produkt: "Product",
    // Absolute Pfade mit Anker, damit die Eintraege auch von Unterseiten aus
    // funktionieren -- ein reines "#produkt" wuerde auf /funktionen ins Leere
    // zeigen.
    // Ziele am 2026-08-06 nachgezogen. Der Workflow-Abschnitt (#produkt) und
    // der Personalisierungs-Abschnitt sind von der Startseite verschwunden --
    // beides steckt jetzt im Rundgang bzw. auf /funktionen. Ein Nav-Eintrag,
    // der ins Leere zeigt, ist schlimmer als keiner.
    produktItems: [
      { label: "All features", href: "/funktionen" },
      { label: "Walkthrough", href: "/#rundgang" },
      // Gehoert zu den Startseiten-Ankern, nicht zu den /funktionen-Ankern
      // darunter: der Abschnitt steht direkt hinter dem Rundgang. Bewusst ohne
      // "THAW" -- die Figur darf auf der Seite auftauchen, aber kein
      // Menuepunkt und keine Ueberschrift traegt ihren Namen.
      { label: "Your offer", href: "/#angebot" },
      { label: "How retaiyn uses it", href: "/kunden/retaiyn" },
      { label: "Three channels", href: "/#kanaele" },
      { label: "Personalization", href: "/funktionen#personalize" },
      // Der Punkt "Integrationen" ist am 2026-08-14 mit seinem Abschnitt
      // gefallen (VEREINFACHUNG.md 1.2). Ein Menuepunkt, der ins Leere zeigt,
      // ist schlimmer als keiner -- die Anbieterliste steht auf /funktionen.
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
      { label: "All features", href: "/funktionen" },
      { label: "Lead Finder", href: "/funktionen#find" },
      { label: "Technology filter", href: "/funktionen#tech" },
      { label: "Decision Maker Finder", href: "/funktionen#enrich" },
      { label: "Personalization", href: "/funktionen#personalize" },
      // Neu am 2026-08-13, zur Gruppe `write`. Wieder eine Beschreibung statt
      // eines Produktnamens, aus demselben Grund wie beim Punkt darunter.
      { label: "Copy from your offer", href: "/funktionen#write" },
      // Hiess bis zum 2026-08-13 "Email Copy Coach" und wurde damit fuer die
      // Schreibfunktion gehalten, die seither im Angebot steckt. Dieser Punkt
      // ist etwas anderes: die Pruefung im Browser waehrend des Tippens.
      // Deshalb hier eine Beschreibung statt eines Produktnamens -- dieselbe
      // Ausnahme wie bei "Personalisierung".
      { label: "Copy check as you type", href: "/funktionen#check" },
      { label: "Campaigns", href: "/funktionen#send" },
      { label: "Suppression list", href: "/funktionen#protect" },
      { label: "Pipeline", href: "/funktionen#pipeline" },
    ],
    vergleich: "Comparison",
    kontakt: "Contact",
    // Zweites, eigenstaendiges Angebot (Individualentwicklung) neben dem
    // Produkt. Bewusst ein kurzes Substantiv wie die uebrigen Nav-Punkte --
    // die einladende Frage steht als H1 auf der Zielseite, wo sie wirkt.
    custom: "Custom Software",
    // Hier standen bis zum 14.08.2026 `agenturen`, `saas` und `kunde` als
    // einzelne Beschriftungen. Sie sind mit dem Fuer-wen-Menue unten in
    // fuerWenItems aufgegangen; `preise` und `faq` waren schon laenger tot
    // (Seiten dazu gibt es nicht mehr). Alle fuenf per grep ueber app/ als
    // unbenutzt bestaetigt, bevor sie gefallen sind.
    // ────────────────────────────────────────────────────────────────────
    // Drei Zielgruppen-Links waren einer zu viel
    // ────────────────────────────────────────────────────────────────────
    //
    // Am 14.08.2026 nachgemessen (Chrome, Deutsch, natuerliche Breite der
    // Leiste gegen ihren Kasten): ab 1152px waechst der Platz nicht mehr mit,
    // weil `max-w-6xl` deckelt -- verfuegbar bleiben 697px. Mit "Unser Kunde"
    // brauchte die Leiste 696 bis 723px. Auf vier der sieben Seiten brachen
    // die Beschriftungen zweizeilig um ("Fuer / Agenturen"), auf /kontakt und
    // /case-study kamen bei 1024px zusaetzlich 4px Querscrollen dazu.
    //
    // Ein hoeherer Breakpoint half nicht: der Deckel gilt ab 1152px fuer jede
    // Fensterbreite. Deshalb wandern die drei Zielgruppen-Seiten in EIN
    // Aufklappmenue -- drei Links plus Abstaende sind 311px, das Menue rund
    // 96px. Das spart etwa 215px und heilt nebenbei einen Umbruch, den
    // /kontakt schon vorher hatte.
    fuerWen: "Who it's for",
    // Der dritte Eintrag ist bewusst anders gebaut. "Für Agenturen" und "Für
    // SaaS-Anbieter" beantworten die Frage der Ueberschrift, "Unser Kunde"
    // nicht -- das ist kein Publikum, sondern ein Beleg. Als Verbform gelesen
    // ("So nutzt es ...") steht er nicht mehr als dritte Zielgruppe da,
    // sondern als die eine echte Antwort auf "und benutzt das jemand".
    fuerWenItems: [
      { label: "Winning customers for others", href: "/fuer-agenturen" },
      { label: "Winning customers for yourselves", href: "/fuer-saas" },
    ],
  },
  // ══════════════════════════════════════════════════════════════════════
  // DIE AGENTURSEITE. Am 2026-08-06 von drei auf sechs Abschnitte plus einen
  // Ehrlichkeits-Block ausgebaut.
  //
  // Agenturen sind die Hauptzielgruppe -- der Hero der Startseite sagt das
  // seit heute auch. Die eigene Seite bestand aber aus Workspaces, Report und
  // Kosten: drei Eigenschaften, kein Alltag. Ein Inhaber mit zehn Leuten
  // fragt sich nicht "gibt es Workspaces", sondern "wie sieht damit mein
  // Montagmorgen aus, wie schnell ist ein neuer Kunde drin, und was passiert
  // am Monatsende".
  //
  // Der Ehrlichkeits-Block ist der wichtigste Teil: Team-Zugaenge gibt es
  // NICHT. workspaces.owner_id = auth.uid() ist im App-Repo die einzige
  // Zugriffsregel, eine Mitglieder-Tabelle existiert nicht. Fuer ein Team von
  // zehn ist das der entscheidende Punkt, und wer ihn erst im Gespraech
  // erfaehrt, fuehlt sich hereingelegt. Auf einer Seite mit dem Abschnitt
  // "Was wir dir nicht vormachen" gibt es dazu ohnehin keine Alternative.
  // ══════════════════════════════════════════════════════════════════════
  agencyPage: {
    metaTitle: "Für Agenturen: Kaltakquise für mehrere Kunden in einem Werkzeug",
    metaDescription:
      "Für Agenturen, die täglich E-Mail, LinkedIn und Telefon für ihre Kunden bespielen: ein Workspace je Kunde, getrennte Sperrlisten, Reports ohne Login und die Auswertung, welche Textfassung Termine gebracht hat.",
    eyebrow: "Für Agenturen",
    title: "Acht Kunden. Drei Kanäle. Jeden Tag.",
    intro:
      "Ihr macht Kaltakquise für andere. Das heißt jeden Morgen: mehrere Postfächer, mehrere Sperrlisten, mehrere Zielgruppen, und am Monatsende eine Tabelle, die jemand von Hand baut. Diese Seite handelt von diesem Alltag, nicht von Funktionen.",
    ctaLabel: "Gespräch buchen",
    sections: [
      {
        id: "day",
        eyebrow: "Der Montagmorgen",
        title: "Eine Arbeitsliste statt acht offener Tabs",
        body: "Wer heute anzurufen ist, wem eine LinkedIn-Nachricht fehlt, wer geantwortet hat. Je Kunde eine Liste, sortiert nach Dringlichkeit statt nach Eingang. Jede Person im Team arbeitet mit ihrem eigenen Zugang darin, und kein Kontakt bekommt zwei Aufgaben gleichzeitig.",
        bullets: [
          "Anrufliste mit Nummer, Rolle und Gesprächsnotiz aus der Recherche",
          "LinkedIn-Nachricht fertig eingesetzt: kopieren, öffnen, senden",
          "Überfällig, heute, später statt einer Liste von allem",
          "Wer antwortet, bekommt im selben Moment keine weiteren Nachrichten mehr",
        ],
      },
      {
        id: "workspaces",
        eyebrow: "Getrennt",
        title: "Kunde A erfährt nie von Kunde B",
        body: "Leads, Kampagnen und Sperrlisten laufen je Kunde getrennt. Das ist keine Bequemlichkeit, sondern Haftung: ein Bestandskunde von A, der eine Kaltmail für B bekommt, kostet euch A.",
        bullets: [
          "Eigener Zugang je Person, mit Rolle: Admin oder Mitglied",
          "Sperrliste je Kunde, keine Überschneidung",
          "Name, Logo und Akzentfarbe je Workspace",
          "Unbegrenzt Workspaces im jeweiligen Plan",
        ],
      },
      {
        id: "onboarding",
        eyebrow: "Am ersten Tag",
        title: "Ein neuer Kunde ist am selben Tag startklar",
        body: "Was heute Tage dauert, also Konten anlegen, Listen übertragen, Sequenzen nachbauen, ist hier eine Checkliste. Die erste Suche läuft sofort. Bis die erste Kampagne rausgeht, wartet ihr das Postfach-Warmup ab, und das dauert zwei bis vier Wochen. Daran führt kein Werkzeug vorbei, unseres auch nicht.",
        bullets: [
          "Workspace anlegen und Branding setzen: zwei Minuten",
          "Bestandskunden des Kunden per CSV in die Sperrliste",
          "Zielgruppe als gespeicherte Suche, nicht als Briefing-Dokument",
          "Lead-Abo: die Liste wächst wöchentlich von allein weiter",
        ],
      },
      {
        id: "report",
        eyebrow: "Am Monatsende",
        title: "Der Bericht baut sich selbst",
        body: "Ein Link je Kunde, im Look des Kunden, ohne Account. Er zeigt Kontaktiert, Antworten und Termine, und keine einzige Kontaktadresse.",
        bullets: [
          "Kein Login für den Endkunden nötig",
          "Kontaktdaten bleiben bei euch, nicht beim Kunden",
          "Ersetzt die Tabelle, die sonst am Monatsende entsteht",
          "Jederzeit aktuell statt zum Stichtag",
        ],
      },
      {
        id: "learning",
        eyebrow: "Der Vorteil, den nur ihr habt",
        title: "Nach dem dritten Kunden wisst ihr, was in einer Nische wirkt",
        body: "Für jede Kampagne steht da, welche Textfassung Termine gebracht hat. Nicht Antworten, sondern Termine. Ein Sendetool kann das nicht sagen, weil es den Text nicht geschrieben hat, und eine Lead-Datenbank sieht die Antwort nie. Nach ein paar Kunden habt ihr etwas, das keine Agentur kaufen kann: eine Sammlung von Eröffnungen, von denen ihr wisst, dass sie Termine gebracht haben.",
        bullets: [
          "Je Schritt und Textfassung: Antworten, Absagen, Termine",
          "Dazu Wochentag, Uhrzeit und Lead-Liste",
          "Was bei einem Kunden funktioniert hat, nehmt ihr zum nächsten mit",
          "Unter 30 Kontakten zeigen wir keine Quote, auch euch nicht",
        ],
      },
      {
        id: "costs",
        eyebrow: "Kalkulierbar",
        title: "Was ein Kunde euch kostet, und was ihr ihm berechnet",
        body: "Ein fester Monatsbetrag, der zu eurer Kundenzahl passt. Wir legen ihn im Gespräch gemeinsam fest. Die Abfragekosten laufen daneben über eure eigenen Zugänge, zum Selbstkostenpreis. Was ihr euren Kunden dafür berechnet, bleibt eure Entscheidung: wir sehen es nicht und schlagen nichts auf.",
        bullets: [
          "Ein Betrag, unabhängig davon, wie viele Workspaces ihr anlegt",
          "Kein Aufpreis je Workspace, kein Aufpreis je Report",
          "Abfragekosten zum Selbstkostenpreis, live im Dashboard sichtbar",
          "Was wegfällt: das CRM-Abo, das je Sitzplatz kostet",
        ],
      },
    ],
    contrastTitle: "Was ein reines Sendetool an dieser Stelle verlangt",
    contrastBody:
      "Mehrere Kundenkonten sind dort meist ein eigener Posten, oft je Workspace bepreist, auf einem Werkzeug, das nur versendet. Recherche, Personalisierung, Anrufe und der Bericht kommen dann noch dazu. Hier ist das ein Plan.",
    ctaTitle: "Reden wir über eure Kundenstruktur",
    ctaBody:
      "Dreißig Minuten: wie viele Kunden, welche Zielgruppen, wie euer Team heute arbeitet. Wir richten den ersten Workspace gemeinsam ein. Kein Verkaufsgespräch, keine Folien.",
  },
  // ══════════════════════════════════════════════════════════════════════
  // DIE SAAS-SEITE (ANGEBOT-VERMARKTUNG.md, Stufe 5). Zweite Segmentseite
  // neben /fuer-agenturen, gleiche Form, anderer Leser.
  //
  // ANREDE: "du". Die Agenturseite sagt "ihr", weil dort ein Team gemeint
  // ist; hier sitzt in aller Regel der Gruender selbst am Formular -- das ist
  // der ganze Punkt des Abschnitts `offer`. Dieselbe Ansprache wie auf
  // /kontakt und /eigene-software.
  //
  // `learning` IST DER GRUND FUER DIE SEITE, nicht `offer`.
  // Es ist das eine Argument, das fuer diese Gruppe STAERKER ist als fuer
  // Agenturen: wer immer dasselbe verkauft, stapelt die Daten zur selben
  // Sequenz. Eine Agentur wechselt die Nische und faengt jedes Mal bei null
  // an. Deshalb darf dieser Abschnitt der beste der Seite sein.
  //
  // KEINE FORMULIERUNG VON `agencyPage` WIEDERHOLEN. Zwei Segmentseiten, die
  // dasselbe sagen, sind schlechter als eine. Betroffen sind vor allem die
  // beiden `learning`-Abschnitte: die 30er-Schwelle steht auf beiden Seiten,
  // aber mit anderen Worten und aus anderer Richtung.
  //
  // BEISPIELE: nur Frostbreaker selbst oder retaiyn (erster Kunde, Agentur
  // fuer Customer Experience im E-Commerce). Keine dritte Firma, keine
  // erfundene Branche -- Vorgabe des Betreibers vom 2026-08-13. Auf DIESER
  // Seite traegt Frostbreaker die Beispiele, wo es um SaaS geht (`multi`),
  // und retaiyn dort, wo ein Angebotsprofil gezeigt wird (`icp`): retaiyn ist
  // eine Agentur, kein SaaS-Anbieter, und darf hier nicht als "jemand wie du"
  // gelesen werden.
  // ══════════════════════════════════════════════════════════════════════
  saasPage: {
    metaTitle: "Kaltakquise fürs eigene Produkt, aus einem Angebot, das du einmal hinterlegst",
    metaDescription:
      "Für SaaS-Anbieter ohne eigenes Vertriebsteam: zwölf Fragen zum Angebot, sieben davon aus der eigenen Website vorgeschlagen. Wunschkunden über die eingesetzte Technik finden, mehrere Angebote in einem Konto, und je Stufe und Fassung sehen, was zurückkam.",
    eyebrow: "Kunden für euch selbst",
    title: "Ein Produkt, eine Zielgruppe, kein Vertriebsteam.",
    intro:
      "Dein Produkt kennst du besser als jeder, den du dafür einstellen könntest. Was dir fehlt, ist nicht das Wissen, sondern der Apparat, der es jede Woche ausschreibt: neue Empfänger, vier Mails pro Empfänger, und jede so, als hätte vorher jemand nachgesehen. Diese Seite zeigt, wie das aussieht, wenn niemand im Haus Vertrieb gelernt hat.",
    ctaLabel: "Gespräch buchen",
    sections: [
      {
        id: "offer",
        eyebrow: "Wer es ausfüllt",
        title: "Das Angebot füllt der aus, der das Produkt gebaut hat",
        body: "Zwölf Fragen stehen zwischen dir und acht fertigen Mails. Sieben Antworten liest die App aus deiner eigenen Website und legt sie dir einzeln zur Bestätigung vor. Die übrigen fünf weiß nur, wer das Produkt kennt, und das bist du. Damit ist die Einstiegshürde hier die kleinste, die es überhaupt geben kann: kein Briefing, keine Einarbeitung, keine zweite Person, die dein Produkt erst begreifen muss.",
        bullets: [
          "Zwölf Felder, einmal beantwortet statt vor jeder Kampagne neu",
          "Sieben Vorschläge aus deiner eigenen Website, einzeln zu bestätigen",
          "Keine Übergabe an jemanden, der sich ein halbes Jahr einarbeitet",
          "Aus demselben Profil entstehen die vier Stufen und die LinkedIn-Vorlage",
        ],
      },
      {
        id: "icp",
        eyebrow: "Wen du meinst",
        title: "Dein Wunschkunde hängt an einer Technik, nicht an einer Branche",
        body: "Für ein Softwareprodukt trifft die Branchenliste selten. Was trifft, ist die Technik daneben: das Shopsystem, das Mail-Tool, der Support-Kanal. Unser erster Kunde retaiyn verkauft Customer Experience an E-Commerce-Marken, und eine Marke kommt für ihn genau dann infrage, wenn sie Klaviyo, WhatsApp oder eine Supportlösung im Einsatz hat. Dazu der Anlass: wer gerade eine Stelle dafür ausschreibt oder dessen Besucherzahlen steigen, hat das Problem nicht irgendwann, sondern jetzt.",
        bullets: [
          "Über 10.000 Technologien, vom Shopsystem bis zum Mail-Tool",
          "Stellenausschreibungen als Anlass: wer sucht, hat die Lücke zugegeben",
          "Besucherzahlen und deren Wachstum als eigener Filter",
          "Die Trefferzahl steht da, bevor Credits fließen, nicht danach",
        ],
      },
      {
        id: "learning",
        eyebrow: "Warum es diese Seite gibt",
        title: "Ein Angebot heißt: die Zahlen stapeln sich",
        body: "Wer die Nische alle zwei Monate wechselt, fängt beim Messen jedes Mal von vorn an. Du verkaufst nächsten Monat dasselbe wie diesen, also fallen alle Antworten auf dieselben acht Texte. Nach ein paar Durchgängen steht je Stufe und je Fassung da, was zurückkam: wie viele geantwortet haben, wie viele Interesse hatten, woraus ein Termin wurde. Die Fassung, die vorn liegt, schreibst du fort, und der nächste Durchgang beginnt nicht mehr bei null.",
        bullets: [
          "Aufgeschlüsselt nach Stufe eins bis vier und nach Fassung A oder B",
          "Termine zählen an dem Text, aus dem sie entstanden sind",
          "Unter 30 Kontakten je Fassung bleibt das Prozentfeld leer: eine Quote aus zwölf Mails ist ein Münzwurf mit Nachkommastelle",
          "Abwesenheitsnotizen stehen getrennt und gehen nicht als Antwort durch",
        ],
      },
      // Der Abschnitt `multi` ("Zwei Zielgruppen" / "Zwei Angebote, ein
      // Konto") stand bis zum 2026-08-14 hier. Gefallen (EINHEITLICH.md S3):
      // er widersprach der Ueberschrift seiner eigenen Seite -- saasPage.title
      // sagt "Ein Produkt, eine Zielgruppe, kein Vertriebsteam". Wer diese
      // Seite betritt, HAT eine Zielgruppe; ihm auf halber Strecke zu
      // erklaeren, dass man auch zwei fuehren kann, ist eine Mechanik-Auskunft
      // fuer einen Bestandskunden, keine Kaufentscheidung.
      //
      // OFFEN: die Aussage steht damit nirgends mehr auf der Website. Der
      // Plan schlaegt einen FAQ-Eintrag oder einen Bullet in
      // featuresPage.groups.write vor -- beides braucht formulierten Text in
      // de und en und ist Sache des copywriter.
      {
        id: "limits",
        eyebrow: "Wo es aufhört",
        title: "Nach außen, an Leute, die dich noch nicht kennen",
        body: "Damit du es nicht erst im Gespräch erfährst: die App kennt dein Produkt aus zwölf Feldern, nicht aus deiner Datenbank. Alles, was innerhalb deiner Anwendung passiert, bleibt außen vor. Das ist keine Lücke, die wir noch schließen, sondern die Grenze der Sache.",
        bullets: [
          "Kein Werkzeug für Bestandskunden: Onboarding, Rückgewinnung und Kündigerstrecken laufen woanders",
          "Kein In-App-Messaging, keine Banner, keine Produkt-Tour",
          "Keine Produktdaten: was jemand in deiner App tut, sieht Frostbreaker nicht",
          "Ein Kanal nach draußen, keine Kommunikation nach innen",
        ],
      },
    ],
    ctaTitle: "Bring dein Produkt mit, wir füllen das Angebot gemeinsam aus",
    ctaBody:
      "Dreißig Minuten an deinem echten Produkt: die zwölf Felder, die Technik, an der deine Käufer hängen, und die erste Suche. Danach steht ein ausgefülltes Angebot in deinem Konto. Kein Pitch, kein PDF hinterher.",
  },
  // ══════════════════════════════════════════════════════════════════════
  // DIE KUNDENSEITE /kunden/retaiyn (VEREINFACHUNG.md Punkt 6). Kein
  // "Case Study" -- die Seite ist ein Kundenportraet, keine belegte
  // Fallstudie: es gibt keine einzige Zahl darueber, was retaiyn MIT
  // Frostbreaker erreicht hat. Die 70 % und 30 % in Abschnitt `offer` sind
  // retaiyns eigene Aussage ueber IHR Angebot gegenueber IHREN Kunden, nicht
  // Frostbreakers Wirkung -- deshalb dort ausdruecklich zugeordnet, nie in
  // einer Kennzahlenkachel.
  //
  // Die Seite zeigt deshalb den ABLAUF ("so arbeiten sie damit"), nicht ein
  // ERGEBNIS ("das kam dabei heraus"). Die Leerstelle fuer die spaetere
  // gemessene Zahl ist `customer.pending`, bereits vorhanden -- dort wird
  // sie prominent platziert, nicht hier neu erfunden. Sobald der Betreiber
  // liefert: Startdatum, angeschriebene Kontakte und Antworten (zwei
  // absolute Zahlen, keine Quote unter 30), Termine absolut, und die
  // schriftliche Freigabe von retaiyn fuer Name/Logo/Zitat in dieser Form.
  //
  // ANSPRACHE: retaiyn in dritter Person (wie `customer`), der Leser als
  // "ihr" (wie `agencyPage`) -- diese Seite spiegelt eine Agentur.
  //
  // KEINE FORMULIERUNG VON `saasPage`, `agencyPage` ODER `offerSection`
  // WOERTLICH WIEDERHOLEN. Fakten (zwoelf Felder, vier Wellen, die
  // schrumpfenden Stufen) sind dieselben wie dort -- der Satzbau, in dem sie
  // stehen, ist es bewusst nicht.
  // ══════════════════════════════════════════════════════════════════════
  customerPage: {
    metaTitle: "retaiyn: wie eine Agentur ihr eigenes Angebot in eine Sequenz übersetzt",
    metaDescription:
      "Ein Kundenporträt, kein Erfolgsbericht: wie retaiyn, unser erster Kunde, aus dem eigenen Angebot acht Mails macht — von der Nische über das Angebot bis zur Sequenz, ohne eine Zahl, die wir nicht selbst nachrechnen können.",
    eyebrow: "Unser erster Kunde",
    title: "retaiyn: Kundengewinnung über E-Mail und LinkedIn",
    intro:
      "retaiyn ist unser erster Kunde: eine Agentur für Customer Experience im E-Commerce. Diese Seite zeigt, wie deren Angebot durch Frostbreaker läuft — von der Nische über das Angebot bis zur fertigen Sequenz. Was das an Terminen gebracht hat, steht hier noch nicht: das tragen wir nach, sobald genug gemessen ist, nicht vorher.",
    ctaLabel: "Gespräch buchen",
    sections: [
      {
        id: "who",
        eyebrow: "Wer sie sind",
        title: "Die Nische stand fest — nur erreicht hat sie niemand",
        body: "retaiyn beschreibt sich selbst als „mehr als eine klassische Agentur“: Customer Experience & AI Support, WhatsApp-Marketing und E-Mail-Marketing laufen dort als ein Ablauf, nicht als drei getrennte Leistungen. Verkauft wird das an E-Commerce-Shops und -Brands, die meisten davon schon mit Klaviyo, WhatsApp oder einer eigenen Supportlösung im Einsatz. Wer verkauft und an wen: Diese Frage stand bei retaiyn fest, bevor überhaupt eine Mail geschrieben wurde. Genau dort beginnt jedes Angebot in Frostbreaker.",
        bullets: [
          "Customer Experience & AI Support, WhatsApp-Marketing, E-Mail-Marketing — ein Ablauf statt drei getrennte Leistungen",
          "Zielgruppe: E-Commerce-Shops und -Brands",
          "Meist schon mit Klaviyo, WhatsApp oder einer eigenen Supportlösung im Einsatz",
          "Das Problem, das retaiyn dort löst: E-Mail, WhatsApp und Support laufen unabhängig voneinander",
        ],
      },
      {
        id: "offer",
        eyebrow: "Das Angebot",
        title: "Was auf der eigenen Website steht, ist noch keine Kaltmail",
        body: "Dasselbe Profil, das die Startseite als Beispiel zeigt, gehört retaiyn: zwölf Felder, gefüllt mit deren eigenen Sätzen von retaiyn.com — auch die zwei Zahlen darin, bis zu 70 % automatisierter Support, bis zu 30 % Mehrumsatz. Das ist retaiyns Versprechen an die eigenen Kunden, nicht Frostbreakers Ergebnis bei retaiyn. Am letzten Feld wird der Unterschied sichtbar: retaiyns heutiger Handlungsaufruf lautet „Kostenloses Erstgespräch vereinbaren“. Auf der Website ist das der richtige Satz. In einer ersten Mail an einen Fremden verlangt er zu viel auf einmal, und genau das markiert die Prüfung im Angebot, mit einem fertigen Ersatzsatz daneben.",
        bullets: [
          "Zwölf Felder, sieben aus retaiyn.com vorgeschlagen, fünf von retaiyn selbst beantwortet",
          "Bis zu 70 % automatisierter Support, bis zu 30 % Mehrumsatz: retaiyns Aussage über das eigene Angebot, nicht über Frostbreaker",
          "Handlungsaufruf auf der Website: „Kostenloses Erstgespräch vereinbaren“",
          "In der Sequenz markiert die Prüfung genau diesen Satz als zu große Bitte",
        ],
      },
      {
        id: "sequence",
        eyebrow: "Die Sequenz",
        title: "Aus dem Profil werden acht Mails, die kleiner bitten statt größer",
        body: "Die App verschickt in vier Wellen: heute, dann nach drei, fünf und sieben Tagen, mit demselben Betreff über die ganze Folge. Jede Welle ist kürzer als die davor. Aus der Terminbitte auf retaiyns Website wurde in der ersten Mail eine kleine Frage: Soll ich dir die drei Stellen schicken, an denen E-Mail, WhatsApp und Support bei euch heute auseinanderlaufen? Dieselbe Quelle liefert daneben auch die LinkedIn-Nachricht.",
        bullets: [
          "Vier Wellen, heute plus Tag drei, fünf und sieben, ein Betreff für alle",
          "Jede Welle kürzer als die vorherige",
          "Aus der Terminbitte wird eine kleine Frage, aus retaiyns eigener Problembeschreibung geformt",
          "Die LinkedIn-Nachricht entsteht aus demselben Angebot",
        ],
      },
      {
        id: "role",
        eyebrow: "Was nur retaiyn wusste",
        title: "Fünf Felder, die keine Website hergibt",
        body: "Was nach einem Ja verschickt wird, wie lange die Sichtung dauert, die eine Frage am Ende, warum Käufer zögern, und der Ton der Mails: Diese fünf Antworten kannte nur retaiyn, keine Recherche schlägt sie vor. Blieb ein Belegfeld leer, schreibt die App an der Stelle nichts hinzu, das sich nicht belegen lässt. Und bevor die acht Texte verschickt werden, liegen sie im Kampagnenformular: Dort liest jemand bei retaiyn sie zuerst und ändert, was nicht passt.",
        bullets: [
          "Was nach dem Ja kommt, die Dauer der Sichtung, die eine Frage, das Zögern der Käufer, der Ton: fünf Antworten nur von retaiyn selbst",
          "Ohne Beleg keine Behauptung — nichts, was sich nicht nachprüfen lässt",
          "Die acht Texte landen zuerst im Kampagnenformular, nicht direkt im Versand",
          "Ein Mensch bei retaiyn liest sie, bevor sie rausgehen",
        ],
      },
      {
        id: "fit",
        eyebrow: "Und bei euch?",
        title: "Dieselbe Mechanik für jede Agentur mit einer festen Nische",
        body: "retaiyn hatte kein Vertriebsteam, sondern eine klare Nische und keine Zeit, sie anzuschreiben. Genau für diese Ausgangslage ist Frostbreaker gebaut. Was hier über retaiyn steht, gilt für jede Agentur oder jeden Anbieter mit einer festen Zielgruppe: das Angebot einmal ausfüllen, den Rest aus derselben Quelle schreiben lassen. Wie das bei euch aussieht, ist eine Frage von dreißig Minuten, kein eigenes Projekt.",
        bullets: [
          "Passt, wenn eure Nische feststeht und niemand Zeit hat, sie anzuschreiben",
          "Passt, wenn ihr für Kunden verkauft, nicht in einen anonymen Markt",
          "Füllt bei euch jemand selbst aus, wie bei retaiyn — kein Vertriebsteam nötig",
          "Der erste Schritt ist derselbe: euer Angebot, einmal beantwortet",
        ],
      },
    ],
    ctaTitle: "Redet mit uns über eure Nische, nicht über retaiyns Zahlen",
    ctaBody:
      "Dreißig Minuten: euer Angebot, eure Zielgruppe, die erste Suche. Kein Pitch mit fremden Prozentzahlen — die von retaiyn gehören retaiyn.",
  },
  // Eigene Funktionsseite: auf der Startseite standen die Detailfunktionen
  // verteilt ueber zwoelf Sektionen. Wer wissen will, was drinsteckt, findet
  // es jetzt an einem Ort, ohne die Startseite weiter zu verlaengern.
  featuresPage: {
    metaTitle: "Funktionen: von der Suche bis zur beantworteten Mail",
    metaDescription:
      "Alle Funktionen von Frostbreaker im Überblick: Lead-Suche über Google Maps, Firmendatenbank und Entscheider-Datenbank mit Technologie-Filter, Entscheider-Recherche, E-Mail-Verifizierung, KI-Personalisierung, Kampagnen, Zustellbarkeit und Sperrliste.",
    eyebrow: "Features",
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
      // Neue Gruppe am 2026-08-13, im Ablauf zwischen Personalisierung und
      // Textcheck: erst die Zeile je Empfaenger, dann der Text drumherum, dann
      // die Pruefung beim Tippen.
      //
      // Hier stehen die Regeln IM DETAIL -- auf der Startseite steht dafuer nur
      // die Kurzfassung (`offerSection`), und in der Vergleichstabelle seit
      // heute gar keine mehr (die Zeile `rulecheck` ist auf 80 Zeichen
      // gekuerzt). Jede Zahl kommt aus dem App-Repo: Tag 0/3/5/7
      // (PLAYBOOK_DELAYS) · 90/70/50/35 Woerter (STEP_MAX_WORDS) · hoechstens
      // fuenf Befunde (MAX_FINDINGS in lib/copy/coach-prompt.ts) · 12 Felder,
      // davon 7 vorgeschlagen (SUGGESTED_FIELDS in lib/copy/offer-from-
      // website.ts). Keine Ergebniszahl, keine Stundenersparnis.
      //
      // retaiyn steht hier als Beispiel fuer eine Terminbitte, nicht als
      // Fehler: "Kostenloses Erstgespraech vereinbaren" ist auf einer Website
      // richtig und am Ende einer Kaltmail die groesste denkbare Bitte. Genau
      // dieser Unterschied ist der Abschnitt.
      {
        id: "write",
        eyebrow: "Schreiben",
        title: "Acht Mails, geschrieben aus zwölf Feldern",
        body: "Die KI schreibt die Sequenz aus deinem Angebot, nach dem, was bei Kaltakquise funktioniert. Auch wenn du noch nie kalt geschrieben hast, steht danach ein Entwurf da, den du abschicken kannst. Der Aufbau ist unser Vorschlag, keine Vorschrift: Stufen kannst du ergänzen, Abstände ändern, jeden Text überschreiben. Am Schluss steht bewusst eine kleine Frage statt einer Terminbitte — „Kostenloses Erstgespräch vereinbaren“ steht auf fast jeder Website, bei unserem ersten Kunden retaiyn genauso, und am Ende einer Kaltmail ist das die größte Bitte, die es gibt.",
        bullets: [
          "Zwölf Felder, sieben davon aus deiner Website vorgeschlagen und einzeln zu bestätigen",
          "Höchstens fünf Befunde, und jeder bringt einen fertigen Ersatzsatz mit",
          "Die zwei Fassungen einer Stufe müssen sich im Ansatz unterscheiden, nicht in zwei Wörtern",
          "Jede Stufe einzeln nachschärfen; die LinkedIn-Vorlage kommt aus demselben Angebot",
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
        body: "Ein Kanban-Board für Antworten statt einer Tabelle mit Status-Spalte: Kontakte per Drag & Drop von Neu bis Kunde verschieben. Jeder Kontakt hat eigene Deals mit Wert und Stufe, dazu Notizen, Anrufe und Aufgaben in einer Zeitleiste, damit bei vielen parallelen Gesprächen nichts durchrutscht. Antworten aus Instantly werden automatisch einsortiert.",
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
  // ══════════════════════════════════════════════════════════════════════
  // DIE VERGLEICHSTABELLE, neu am 2026-08-06. Ersetzt an Ort und Stelle den
  // Abschnitt #ergaenzt ("Dann ist das hier kein Ersatz").
  //
  // Zu jeder Zeile der Beleg, damit sie beim naechsten Nachpruefen nicht neu
  // recherchiert werden muss. "false" heisst durchgehend "gehoert nicht zum
  // Leistungsumfang", nicht "funktioniert schlecht" -- nur der erste Satz
  // ist belegbar, und nur er steht als leerer Kreis in der Tabelle.
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
      // Alle drei koennen Sequenztexte per KI erzeugen -- deshalb teilw. und
      // nicht der leere Kreis. Der Unterschied steht in den beiden Haelften
      // der Zeile: EIN dauerhaft hinterlegtes Angebot als Quelle, und ZWEI
      // eigenstaendige Fassungen je Stufe. Geprueft am 2026-08-13:
      //  - Apollo: knowledge.apollo.io/hc/en-us/articles/4409231193101-Create-a-Sequence
      //    schreibt "AI-assisted ... using information set in the content
      //    center". Die zweite Fassung ist Handarbeit --
      //    .../4410749683597-Use-an-A-B-Test-in-a-Sequence sagt woertlich
      //    "copy your initial email to version B and make tweaks".
      //  - Hunter: help.hunter.io/en/articles/11999872-using-the-ai-writing-
      //    assistant-in-hunter-s-email-sequences erzeugt Folgemails; A/B
      //    schliesst dort die Personalisierung aus.
      //  - Instantly: instantly.ai/blog/instantly-features/ (AI Sequence
      //    Generator); Variation entsteht ueber Spintax, nicht als zweite
      //    eigenstaendige Fassung.
      //  - Pipedrive: pipedrive.com/en/products/ai-crm/ai-email-writer
      //    schreibt eine Einzelmail aus einem Prompt -- keine Sequenz, keine
      //    Fassungen. Deshalb als einziges der Strich.
      { id: "sequence", label: "Aus einem einmal hinterlegten Angebot alle vier Stufen schreiben, je zwei eigenständige Fassungen", tools: ["partial", "partial", "partial", false] },
      // Die enge Formulierung ist der ganze Punkt. "Prueft den Text, bevor er
      // rausgeht" waere fuer Instantly falsch -- deren AI Spam Words Checker
      // sitzt genau dort (help.instantly.ai/en/articles/9921051-ai-spam-words-
      // checker, geprueft 2026-08-13). Was keiner der vier macht, ist das
      // NACHMESSEN gegen feste Sequenzregeln samt Benennung des Verstosses.
      // Ein Prompt sagt bitte, eine Pruefung sagt nein (lib/copy/playbook.ts
      // im App-Repo). Die vier genannten Regeln stehen dort als Funktionen.
      // Gekuerzt am 2026-08-13 von 205 auf 80 Zeichen. Gemessen: die lange
      // Fassung lief bei 1024px ueber fuenf Zeilen (2,7-mal so hoch wie die
      // Grundzeile), bei 768px ueber sieben -- die Haekchen daneben schwebten
      // mittig in einem Absatz. Die vier Regeln im Einzelnen stehen in
      // `offerSection` und in der Gruppe `write` auf /funktionen; was NUR hier
      // steht und die Zeile traegt, ist "nachmessen und den Verstoss
      // benennen".
      { id: "rulecheck", label: "Den erzeugten Text gegen feste Sequenzregeln nachmessen und den Verstoß benennen", tools: [false, false, false, false] },
      // Instantly stand hier bis zum 2026-08-13 auf dem Strich. Das war nicht
      // mehr haltbar: der AI Spam Words Checker sitzt im Sequenz-Editor
      // (help.instantly.ai/en/articles/9921051-ai-spam-words-checker) und
      // deckt damit einen der vier genannten Punkte ab. Eine Zeile, die ein
      // Fachkaeufer mit einem Klick kippt, kostet die Glaubwuerdigkeit ALLER
      // Zeilen -- auch der beiden sauber belegten darueber.
      { id: "copycheck", label: "Den Text prüfen, bevor er rausgeht: Länge, Spam-Wörter, KI-Klang, nur ein CTA", tools: [false, false, "partial", false] },
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
      // nicht der leere Kreis. Die Zeile waere sonst angreifbar.
      { id: "outcomes", label: "Eine Antwort ihrer Textfassung zuordnen, bis zum Termin statt bis zur Antwort", tools: [false, false, "partial", false] },
      { id: "crm", label: "Deals, Aufgaben und Notizen am Kontakt", tools: [false, false, false, true] },
    ],
    closing:
      "Apollo liefert Adressen. Instantly liefert Zustellung. Beide sagen dir, was passiert ist, keiner sagt dir warum. Frostbreaker schreibt den Text, verschickt ihn und sieht die Antwort darauf, auf deinen eigenen Zugängen, zu deinen Konditionen, ohne einen Cent Aufschlag.",
    ledgerLabel: "Die Rechnung, ehrlich",
    ledgerKeep: "Bleibt: Apollo, Hunter, Instantly, OpenAI, auf deinen Konten, zu deinen Konditionen. Wir schlagen nichts auf.",
    ledgerDrop: "Fällt weg: das CRM-Abo je Sitzplatz und die Handarbeit dazwischen. Bei sechs Leuten im Team ist das der größere Posten, nicht unserer.",
    // Bewusst ohne Links: eine Adresse veraltet schneller als der Befund, und
    // eine tote Adresse unter einer Vergleichstabelle liest sich wie ein
    // zurueckgezogener Beleg. Die Quellen stehen als Kommentar an der
    // jeweiligen Zeile.
    footnote:
      "Geprüft am 13. August 2026 an den öffentlichen Leistungsbeschreibungen und Hilfecentern der Anbieter. „Teilweise“ heißt: vorhanden, aber nicht in dem Umfang, den die Zeile beschreibt. Ein Strich heißt „gehört nicht zum Leistungsumfang“, nicht „funktioniert schlecht“. Apollo, Hunter und Instantly erzeugen Sequenztexte per KI. „Teilweise“ heißt in der Schreibzeile deshalb: eine Sequenz entsteht, aber nicht zwei eigenständige Fassungen je Stufe aus einem dauerhaft hinterlegten Angebot.",
  },
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
          // Zweite Person statt einer erfundenen Firmendomain (vorher
          // "send.muster-gmbh.de"). Frostbreakers echte Sende-Subdomain ist
          // eine offene Frage an den Betreiber (BEISPIELE.md, Abschnitt 10.3),
          // und eine geratene Domain ist unter der neuen Regel dasselbe
          // Problem wie eine geratene Firma: sie kann jemandem gehoeren.
          title: "SPF fehlt: send.deine-domain.de",
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
      note: "Es entsteht immer nur ein nächster Schritt. Wer antwortet, bekommt sofort keine weiteren Nachrichten mehr.",
      steps: [
        {
          day: "Tag 0",
          title: "Die Mail geht raus",
          body: "Personalisierter Aufhänger, geprüfte Adresse, deine eigenen Postfächer.",
        },
        {
          // Tag 3, 5 und 7 -- nicht 3, 7 und 12. Die alten Abstaende stammen
          // aus der Zeit vor dem Playbook. Massgeblich ist PLAYBOOK_DELAYS in
          // apps/web/lib/copy/playbook.ts der App: [0, 3, 2, 2], also Tag 0,
          // 3, 5, 7 -- schrumpfende Abstaende, weil ein Nachfassen nach zwoelf
          // Tagen ein neuer Erstkontakt ist und nicht mehr dieselbe Mail.
          // Bis zum 14.08.2026 widersprach dieses Bild dem Text daneben.
          day: "Tag 3, 5 und 7",
          title: "Drei Follow-ups laufen nach",
          body: "Dieselbe Sequenz, dieselben Postfächer. Wer antwortet, bekommt sofort keine weiteren Nachrichten.",
        },
        {
          day: "Tag 10 · keine Antwort",
          title: "LinkedIn-Aufgabe erscheint",
          body: "Nur wo ein Profil hinterlegt ist. Landet in der LinkedIn-Liste, nicht in einer Tabelle.",
        },
        {
          day: "Tag 14 · immer noch still",
          title: "Der Anruf steht in der Anrufliste",
          body: "Nur wo eine Nummer da ist, und erst wenn die LinkedIn-Aufgabe erledigt ist.",
        },
      ],
    },
    effect: {
      // "Beispielansicht" seit dem 2026-08-13 im Rahmentitel (BEISPIELE.md,
      // Abschnitt 6). Die beiden Wirkungs-Bilder waren die einzigen grossen
      // Zahlenbilder der Seite ohne diese Marke, waehrend Dashboard,
      // Posteingang und Verifizierungs-Report je eine tragen. Der Rahmen hat
      // keinen Platz fuer eine eigene Marke, der Titel ist die sichtbarste
      // Stelle, die ohne Umbau des Bauteils erreichbar ist. Die Listennamen
      // unten bleiben: das sind Segmente, keine Firmen.
      frameTitle: "Wirkung · nach Lead-Liste · Beispielansicht",
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
        { label: "Fintech DACH", value: "27, zu wenig", percent: null },
        { label: "Agenturen AT", value: "21, zu wenig", percent: null },
      ],
    },
    // Die Ansicht "Nach Text". Zahlen erfunden, aber an den echten Schwellen:
    // die 30er-Grenze fuer "zu wenig" ist dieselbe wie in der App, und die
    // Quoten liegen in dem Bereich, den das eigene Konto tatsaechlich zeigt.
    // Wichtig fuer spaetere Aenderungen: Fassung B fuehrt bei den TERMINEN,
    // nicht bei der Antwortquote -- genau darum geht es in der Warnung
    // darueber. Wer die Zahlen anfasst, muss diese Reihenfolge erhalten.
    copyOutcomes: {
      // Marke im Rahmentitel, gleiche Begruendung und gleiche Stelle wie bei
      // effect darueber. Laut POSITIONIERUNG.md ist das hier das wichtigste
      // Bild der Seite -- und es war das einzige grosse Zahlenbild ohne
      // Kennzeichnung.
      frameTitle: "Wirkung · nach Text · Beispielansicht",
      warning:
        "Die Antwortquote allein ist die falsche Zielgröße: eine Fassung kann führen und trotzdem nur Absagen sammeln. Die Spalte, die zählt, sind Termine.",
      // Vorher: "Kunde: Nordwind Coffee · Wiederverkäufer DACH". Kein
      // Kundenname mehr ueber einer Ergebnistabelle -- jeder Name dort macht
      // die Zahlen darunter zu SEINEM Ergebnis. Auch nicht "Frostbreaker":
      // die Zahlen sind erfunden, und der eigene Name daneben waere eine
      // erfundene eigene Fallstudie.
      campaign: "Kampagne mit zwei Textfassungen",
      campaignCount: "964 Kontakte",
      bestLabel: "Beste Fassung",
      contactsWord: "Kontakte",
      rows: [
        {
          step: "Schritt 1",
          variant: "A",
          contacts: "482",
          percent: 6.0,
          replies: "29 · 6,0 %",
          meetings: "6 Termine",
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
          meetings: "17 Termine",
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
          meetings: "4 Termine",
          interested: "7 Interessiert",
          rejections: "5 Absagen",
          best: false,
        },
        {
          step: "Schritt 3",
          variant: "",
          contacts: "26",
          percent: null,
          replies: "26, zu wenig",
          meetings: "",
          interested: "0 Interessiert",
          rejections: "0 Absagen",
          best: false,
        },
      ],
      note: "Die Zuordnung kommt aus dem Versand selbst: eine Antwort trägt den Schritt der Mail, auf die sie antwortet. Unter 30 Kontakten steht keine Prozentzahl.",
      // Kurzfassung fuer den Hero: dort steht nur die Pointe (zwei Fassungen,
      // eine mit Terminen), und die braucht einen Satz, keine Methodik.
    },
    // Die LinkedIn-Arbeitsliste. Der Aufhaenger ist bewusst derselbe Ton wie
    // die erzeugten Aufhaenger in der App: eine Beobachtung aus der Recherche,
    // keine Schmeichelei, kein "ich bewundere". Die Verbotswoerter-Liste im
    // AiAgentMockup nennt genau die Woerter, die hier nicht vorkommen duerfen.
    // Am 2026-08-13 ausgetauscht, dringend (BEISPIELE.md, Abschnitt 5.3 und
    // Reihenfolge Punkt 1). Vorher stand hier "Brian Marver · Co-Founder & CEO
    // · 5 Star Nutrition" -- dieselbe Firma taucht in der echten App als Lead
    // auf, es ist also aller Wahrscheinlichkeit nach eine reale Person, die
    // ohne Einwilligung als Empfaenger einer Kaltakquise-Nachricht auf einer
    // Marketingseite stand, die drei Abschnitte weiter mit Datensparsamkeit
    // wirbt.
    //
    // Jetzt retaiyn, unser erster Kunde, der genau so gewonnen wurde. Firma
    // und Rolle, KEIN Personenname: die Zustimmung des Betreibers betrifft
    // retaiyn als Firma; ob der dort genannte Ansprechpartner damit
    // einverstanden ist, in fremder Werbung als Empfaenger einer Kaltmail zu
    // stehen, ist eine zweite Frage und liegt nicht vor. Deshalb auch die
    // Anrede ohne Vornamen. Erst mit schriftlicher Antwort darf hier ein Name
    // stehen.
    linkedin: {
      frameTitle: "LinkedIn · Nachricht steht",
      name: "retaiyn",
      role: "Customer Experience für E-Commerce",
      template: "Vorlage: Standard ★",
      greeting: "Hallo,",
      hookLabel: "Aufhänger, je Kontakt erzeugt",
      hook: "Dass ihr E-Mail, WhatsApp und Support als ein Angebot führt und nicht als drei nebeneinander, ist der Grund für diese Nachricht.",
      pitch:
        "Ich baue Software, die Agenturen wie retaiyn die Arbeit abnimmt, die sonst zwischen fünf Werkzeugen unerledigt bleibt. Kein Pitch, ich wollte mich erst mal vernetzen.",
      signoff: "Beste Grüße, Youssef",
      buttons: ["Kopieren", "Profil öffnen ↗", "Als gesendet vermerken"],
      note: "Derselbe Aufhänger wie in der Mail, schon erzeugt und bezahlt. Gesendet wird von dir: LinkedIn hat keine Schnittstelle für Nachrichten, und ein Werkzeug, das trotzdem automatisch sendet, riskiert dein Konto.",
    },
  },
  // ══════════════════════════════════════════════════════════════════════
  // EIN ABSCHNITT AUS ZWEIEN, seit dem 2026-08-14 (VEREINFACHUNG.md 1.2).
  //
  // `guard` ("die App sagt Nein, bevor du sendest") und `honesty` ("die App
  // beschoenigt keine Zahl, nachdem du gesendet hast") sind zwei Haelften
  // derselben Haltung und standen als zwei volle Abschnitte mit je drei
  // Karten und je einem Bild direkt hintereinander -- beide auf bg-panel2,
  // also auch optisch nicht auseinanderzuhalten. `guard` traegt jetzt
  // Augenbraue, Ueberschrift und Einleitung des gemeinsamen Abschnitts,
  // `honesty` die Zwischenueberschrift der zweiten Haelfte. `honesty.eyebrow`
  // ist damit entfallen.
  //
  // Von sechs Karten sind vier geblieben. Gefallen ist "Du kannst trotzdem
  // starten" -- der Einwand, den die Ueberschrift ausloest, gehoert in die
  // Einleitung und nicht in eine eigene Karte, deshalb steht er jetzt im
  // letzten Satz von `body`. Gefallen ist ausserdem "Abwesenheitsnotizen
  // zaehlen nicht", die feinste der drei Ehrlichkeitsregeln.
  // ══════════════════════════════════════════════════════════════════════
  guard: {
    // Umformuliert 2026-08-15 (KLARTEXT.md, Auftrag 2): "Bevor du sendest,
    // und danach" nannte einen Zeitpunkt, keine Sache. "Prüfungen" ordnet
    // den Abschnitt ein, wie im Titel darunter.
    eyebrow: "Zustellbarkeit",
    // Umformuliert 2026-08-15 (KLARTEXT.md): "das einzige Werkzeug, das dir
    // Nein sagt" bestand weder Deckprobe noch Wettbewerberprobe -- jedes Tool
    // kann das behaupten. Die Substanz (elf Pruefungen, vier davon Blocker)
    // steht unveraendert in body/points, nur die Verpackung faellt.
    title: "Deine Absender-Domain überlebt die Kampagne",
    body:
      "Fehlendes SPF, eine Bounce-Quote über fünf Prozent, eine Liste voller ungeprüfter Adressen: danach landet auch die Mail an den richtigen Kontakt im Spam, und zwar dauerhaft. Eine verbrannte Domain kostet nicht eine Kampagne, sie kostet jede künftige. Elf Prüfungen laufen deshalb vor dem Start, vier davon halten ihn auf, und danach wird täglich weitergeprüft.",
    points: [
      {
        // Umformuliert 2026-08-15 (KLARTEXT.md): benennt jetzt, wie viele der
        // elf Pruefungen halten koennen, statt nur die Kategorie zu erklaeren.
        title: "Aufhalten heißt nicht sperren",
        body: "Ein Blocker ist etwas, das mit Sicherheit schiefgeht und dessen Schaden bleibt. Ein Hinweis macht schlechter, aber weder sicher noch dauerhaft. Diese Linie halten wir streng: eine Warnung, die auch mal nur eine Meinung ist, klickt man beim dritten Mal weg, und die echte gleich mit.",
      },
      {
        title: "Tägliche DNS-Prüfung im laufenden Betrieb",
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
    eyebrow: "Kanäle",
    // Umformuliert 2026-08-15 (KLARTEXT.md, Teil 0): Titel und Body
    // beantworteten bisher "wie viel Arbeit ist das" (Automatisierungsgrad).
    // Der Leser fragt an dieser Stelle aber "wie oft komme ich an diesen
    // Menschen heran" -- der Automatisierungs-Punkt bleibt trotzdem stehen,
    // naemlich in der Zeile "Was du tust" auf jeder Karte unten.
    title: "Sechs Berührungen, ein eingekaufter Lead",
    // Nachtrag vom Betreiber, waehrend der Umsetzung: "wenn er da nicht
    // antwortet" wörtlich benennen, keine Metapher wie "still bleiben"
    // oder "ins Leere laufen". Deshalb "wenn der Lead auf die vorige nicht
    // geantwortet hat" statt einer Umschreibung.
    body:
      "Wer einmal mailt und keine Antwort bekommt, hat einen Versuch gemacht. Vier Mails, eine LinkedIn-Nachricht und ein Anruf sind sechs — an derselben Person, jede nur dann, wenn der Lead auf die vorige nicht geantwortet hat. Das erhöht die Chance auf eine Antwort erheblich, und es kostet keinen zweiten Lead: eingekauft wird einmal, das Profil und die Nummer liegen danach ohnehin vor.",
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
        // Umformuliert 2026-08-15 (KLARTEXT.md): "statt" ersetzt, Titel
        // benennt jetzt, was auf dem Screen zu sehen ist.
        title: "Gesprächsnotiz und Nummer vor dem Anruf",
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
      "LinkedIn bietet für Nachrichten keine Schnittstelle. Jedes Werkzeug, das trotzdem automatisch sendet, steuert einen Browser fern, verstößt gegen die Nutzungsbedingungen und riskiert die Sperrung, bei einem verkauften Produkt also die Konten der Kunden. Wir bereiten alles vor, den Absendeknopf drückst du. Dieselbe Haltung wie bei der Startprüfung: lieber ein Schritt von Hand als ein verbranntes Konto.",
    phoneNote:
      "Angerufen wird mit deinem eigenen Telefon: Frostbreaker ist keine Telefonanlage und rechnet keine Gesprächsminuten ab.",
  },
  honesty: {
    // Vom Betreiber selbst gewaehlt (KLARTEXT.md), nachdem mein erster
    // Entwurf ("Kein Gewinner unter 50 Sendungen je Fassung") mit einer
    // Verneinung anfing -- genau das Muster, das diese Umstellung verbietet.
    title: "Du siehst, welche Fassung Termine bringt",
    body:
      "Zwei Fassungen laufen, eine funktioniert besser. Ohne Auswertung merkst du das nach Wochen, wenn überhaupt. Die App misst je Fassung mit und sagt dir, welche vorn liegt: du setzt auf die, die Termine bringt, statt weiter zu raten. Und sie sagt es erst, wenn genug Antworten da sind — zwölf Mails und eine Antwort sind nicht „8,3 %“, das sind zwölf Mails und eine Antwort.",
    points: [
      {
        title: "Dieselbe Regel beim A/B-Test",
        body: "Kein Gewinner, solange nicht jede Fassung 50 Sendungen hinter sich hat und der Abstand einem Zufallstest standhält. Jedes andere Dashboard erklärt dir bei neun Antworten begeistert, Variante B habe deine Quote verdreifacht.",
      },
      {
        // Umformuliert 2026-08-15 (KLARTEXT.md): ", nicht" gestrichen.
        title: "Antwortquote je Kontakt",
        body: "Eine Sequenz schickt drei bis vier Mails an dieselbe Person. Die eine Antwort darauf gehört nicht durch vier geteilt.",
      },
    ],
  },
  // `safeStart` stand bis zum 2026-08-14 hier: die zwei Karten des
  // Abschnitts #startklar ("die Anleitung sitzt im Werkzeug", "der
  // Abmeldelink ist Teil der Kampagne"). Mit dem Abschnitt gefallen
  // (EINHEITLICH.md S1) -- beide Aussagen stehen anderswo: die erste in
  // why.earlyAccess, die zweite in featuresPage.groups.protect.
  //
  // OFFEN: der Plan will die zwei Saetze als EINEN FAQ-Eintrag retten; der
  // neunte Platz in faq.items ist dafuer bewusst frei. Das braucht
  // formulierten Text in de und en und ist Sache des copywriter.

  // Nachbildungen echter App-Screens. Bewusst keine Screenshots aus dem
  // laufenden Betrieb: dort stehen Namen realer Personen mit Rolle und
  // Arbeitgeber, die ohne Einwilligung nicht ins Marketing gehoeren.
  //
  // Seit dem 2026-08-13 (BEISPIELE.md) tragen diese Bildschirme KEINE
  // erfundenen Firmen mehr. Es gibt genau zwei Namen auf dieser Website:
  // Frostbreaker und retaiyn. Das gezeigte Konto ist Frostbreakers eigenes,
  // der gezeigte Lead ist retaiyn -- unser erster Kunde, ueber genau diesen
  // Weg gewonnen. Alle uebrigen Zeilen tragen ihr Segment statt eines Namens.
  // Wer hier eine dritte Firma einsetzt, egal wie offensichtlich erfunden,
  // macht die Regel wieder kaputt.
  appMockups: {
    // Beispielansicht nach einigen Monaten Betrieb, kein echter Account; die
    // Marke dafuer steht im Bild (sampleBadge). Die Zahlen sind untereinander
    // gerechnet: 2.000 Kontakte zu rund 1,5 Cent ergeben die 30,40 $, acht
    // Minuten Recherche je Kontakt ergeben die 267 Stunden, und 12 Meetings
    // aus 2.000 Kontakten entsprechen der Quote, mit der die Seite an anderer
    // Stelle rechnet.
    //
    // DIE OBERGRENZE, am 2026-08-13 gesetzt (BEISPIELE.md, Abschnitt 6):
    // Firmen und Kontakte liegen auf den echten Zahlen aus
    // caseStudyPage.stats (800+ durchsuchte Firmen, 2.000+ Kontakte). Vorher
    // stand hier 890 und 2.430 -- das erfundene Bild wies also MEHR aus als
    // das echte Konto zwei Seiten weiter. Wer die Zahlen anfasst, darf diese
    // Grenze nicht wieder ueberschreiten: ein Mockup, das die eigene Case
    // Study ueberbietet, macht aus beiden Seiten eine unglaubwuerdige.
    dashboard: {
      title: "Dashboard",
      subtitle: "Überblick über deine Lead-Pipeline",
      sampleBadge: "Beispielansicht",
      stats: [
        { label: "Suchen", value: "56" },
        { label: "Firmen", value: "800" },
        { label: "Kontakte", value: "2.000" },
        { label: "Mit E-Mail", value: "1.327" },
        { label: "Antworten", value: "138", accent: true },
        { label: "Meetings", value: "12", accent: true },
      ],
      costLabel: "Abfragekosten gesamt",
      costValue: "30,40 $",
      savings: {
        strong: "≈ 267 Stunden",
        rest: "manuelle Recherche gespart",
        // Vorher: "entspricht rund 14.500 € Personalkosten". Der
        // Lohnkostenvergleich ist am 2026-08-13 gefallen -- er stand schon in
        // ANGEBOT-VERMARKTUNG.md unter "Was ich bewusst weglasse", und der
        // Rechner hat ihn am 2026-08-06 aus demselben Grund verloren. Statt
        // eines erfundenen Gegenwerts steht jetzt die Rechengrundlage da:
        // damit ist die Stundenzahl nachrechenbar statt behauptet.
        cost: "gerechnet mit 8 Minuten Recherche je Kontakt",
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
    // "Fahrschule" bleibt bewusst der Ausreisser, obwohl alle uebrigen
    // Suchmasken auf E-Commerce stehen. Der Maps-Weg existiert auf dieser
    // Seite genau dafuer, dass das Suchfeld frei ist und auch Betriebe
    // findet, die in keiner B2B-Datenbank stehen. Mit einer E-Commerce-Marke
    // im Feld verschwindet das Argument. Dieser Kommentar steht hier, damit
    // die naechste Person den Ausreisser nicht "vereinheitlicht".
    // Suchbegriffe sind uebrigens keine Firmennamen und fallen nicht unter
    // die Zwei-Namen-Regel.
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
        { label: "Mitarbeitende", value: "11 bis 50" },
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
      // Zielgruppe auf E-Commerce-Marken gestellt (vorher "Nahrungsergänzung",
      // BEISPIELE.md 5.5). Shopify und Klaviyo standen schon im Technikfeld --
      // das IST die Zielgruppe von retaiyn und damit auch die von Frostbreaker.
      // Nur das Zielgruppenfeld ist gewandert, der Rest stand schon richtig da.
      fields: [
        { label: "Zielgruppe", value: "E-Commerce-Marken" },
        { label: "Firmengröße", value: "11 bis 50" },
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
    // Vierter Suchweg, seit dem 2026-08-05 (siehe Kommentar bei der
    // Tab-Liste). Steht neben Apollo, weil Apollos API am Tarif haengt:
    // im kostenlosen und im Basic-Tarif kein Zugang, der Schluessel ist an
    // die Organization-Stufe gebunden. Prospeo laesst den Schluessel schon
    // im kostenlosen Tarif anlegen und rechnet je Konto statt je Sitz ab.
    // Die Felder unten bilden nicht Groesse oder Branche ab, sondern die
    // vier Filter, die es sonst nirgends gibt: offene Stellen,
    // Website-Traffic samt Wachstum, Kaufabsicht je Thema, erkannte
    // Technik. Genau das traegt die Reiterbeschriftung "Anlass".
    // Quelle: apps/worker/worker/pipelines/prospeo.py,
    // get_businesses.py::run_prospeo.
    prospeoSearch: {
      title: "Neue Suche",
      subtitle: "Anlass, Kaufabsicht und Technik in einem Schritt.",
      // Vierter Reiter seit dem 2026-08-06: die Karten darueber nennen vier
      // Suchwege, das Bild zeigte weiter drei.
      tabs: ["Vor Ort (Maps)", "Firmen (Hunter)", "Entscheider (Apollo)", "Anlass (Prospeo)"],
      fields: [
        { label: "Zielgruppe", value: "E-Commerce-Marken" },
        { label: "Firmengröße", value: "11 bis 50" },
        { label: "Website-Traffic", value: "wächst" },
      ],
      titlesLabel: "Offene Stellen",
      titlesValue: "E-Commerce Manager, Performance Marketing",
      chipsLabel: "Kaufabsicht",
      chips: ["Marketing Automation", "E-Commerce-Plattform", "Kundenservice-Software"],
      techLabel: "Eingesetzte Technik",
      techChips: ["Shopify", "Klaviyo"],
      noteLabel: "Was zurückkommt",
      noteValue: "Firma und Entscheider in einem Lauf, samt Firmenbeschreibung — läuft weiter, sobald das Tageskontingent sich erneuert",
      cta: "Suche starten",
    },
    // Gruppierung und Bezeichnungen aus apps/web/app/calls/ der App.
    //
    // Ohne Firmennamen und ohne Telefonnummern, seit dem 2026-08-13:
    //   - Eine erfundene Nummer neben einem echten Firmennamen kann eine
    //     fremde, echte Nummer treffen. Deshalb steht dort eine erkennbare
    //     Maske und keine Ziffernfolge, die jemand waehlen kann.
    //   - retaiyn steht hier bewusst NICHT, obwohl BEISPIELE.md eine Zeile
    //     dafuer vorsah: die Anrufliste behauptet einen Anruf mit Datum und
    //     Gespraechsnotiz. Dass retaiyn ueber E-Mail und LinkedIn gewonnen
    //     wurde, steht im Kundenabschnitt; ein Telefonat steht dort nicht, und
    //     eine Notiz daneben waere eine Tatsachenbehauptung ueber einen echten
    //     Kunden.
    // Die Aussage des Bildes ist die Gruppierung (ueberfaellig/heute) und die
    // Vorbereitungsnotiz. Beides traegt ohne einen einzigen Namen.
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
              name: "E-Commerce-Marke, Shopify",
              role: "Geschäftsführung · Name in diesem Bild weggelassen",
              phone: "+·· ··· ······",
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
              name: "Onlineshop, Shopware",
              role: "Inhaberin · Name in diesem Bild weggelassen",
              phone: "+·· ··· ······",
              note: "Termin bestätigt, Angebot vorbereiten.",
            },
            {
              name: "Agentur, Wien",
              role: "Geschäftsführung · Name in diesem Bild weggelassen",
              phone: "+·· ··· ······",
              note: "Auf LinkedIn geantwortet, um Rückruf gebeten.",
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
      // Kennzeichnung wie im Dashboard (`dashboard.sampleBadge`) und im
      // Report (`report.badge`): dieses Bild trug als einziges der grossen
      // Zahlenbilder gar keine. Ohne sie liest sich eine Menge in einer
      // Beispielansicht wie eine Ergebniszahl.
      sampleBadge: "Beispielansicht",
      // Summe der vier Zeilen: 120 + 80 + 60 + 45. Wer eine Zeile aendert,
      // muss diese Zahl mitrechnen -- eine Werkzeugleiste, die nicht zur
      // Tabelle darunter passt, faellt jedem auf, der nachzaehlt.
      toolbar: { count: "4 Nischen · 305 Leads", verify: "E-Mails verifizieren", export: "In Kampagne übernehmen", csv: "Excel-CSV" },
      // Bis zum 2026-08-14 standen hier vier Firmen, zwei davon mit "Name
      // weggelassen" als Domain. Die Regel dahinter kennt ein Website-Besucher
      // nicht, und ohne sie ist die Zeile nur ein Raetsel. Jetzt eine Zeile je
      // NISCHE mit einer Menge -- damit gibt es auch nichts mehr zu erfinden
      // und niemanden mehr um Zustimmung zu bitten.
      //
      // Die zweite Zahl ist nie gleich der ersten: "120 Leads mit 120
      // E-Mails" waere eine behauptete Trefferquote von 100 %, und die gibt
      // es nicht. Die Luecke ist je Nische verschieden, und zwar in die
      // richtige Richtung -- lokale Betriebe (Restaurants, Makler) haben eine
      // schlechtere Adressabdeckung als Shopify-Marken und Agenturen. Damit
      // sagt die Spalte nebenbei etwas Wahres, statt Platz zu fuellen.
      rows: [
        { name: "E-Commerce", domain: "Shopify-Shops, DACH", contacts: "120 Leads", withMail: "112 mit E-Mail", color: "#8B5CF6" },
        { name: "Marketingagenturen", domain: "10 bis 50 Mitarbeiter", contacts: "80 Leads", withMail: "71 mit E-Mail", color: "#0EA5E9" },
        { name: "Restaurants", domain: "Wien und Umgebung", contacts: "60 Leads", withMail: "38 mit E-Mail", color: "#F59E0B" },
        { name: "Immobilienmakler", domain: "München, Hamburg, Berlin", contacts: "45 Leads", withMail: "34 mit E-Mail", color: "#10B981" },
      ],
    },
    // Firma und Rolle, kein Personenname und keine Klaradresse: die Zustimmung
    // betrifft retaiyn als Firma, nicht den dort genannten Ansprechpartner
    // (BEISPIELE.md, Warnung in Abschnitt 5.3 und offene Frage 10.1). Die
    // Telefonnummer ist maskiert -- eine erfundene Nummer neben einem echten
    // Firmennamen kann eine fremde, echte Nummer treffen.
    leadDetail: {
      label: "Aufgeklappter Lead",
      person: "retaiyn",
      role: "Geschäftsführung",
      company: "Customer Experience für E-Commerce",
      emailLabel: "E-Mail",
      email: "····@retaiyn.com",
      emailBadge: "verifiziert",
      phoneLabel: "Telefon",
      phone: "+·· ··· ······",
      phoneBadge: "aus Google-Eintrag",
      icebreakerLabel: "Icebreaker",
      icebreaker:
        "E-Mail, WhatsApp und Support stehen bei euch als ein Angebot auf der Seite, nicht als drei nebeneinander.",
    },
    // Der Report aus Sicht des Endkunden: eigener Name, eigene Akzentfarbe,
    // kein Login noetig. Fuer eine Agentur ist genau das der Kaufgrund, und
    // bisher gab es dafuer kein Bild.
    report: {
      // Die Marke steht seit dem 2026-08-13 vor der Rolle (BEISPIELE.md,
      // Abschnitt 6): 1.240 angeschrieben, 86 Antworten, 9 von 10 Meetings
      // sind erfundene Ergebnisse, und dieses Bild trug als einziges der
      // grossen Zahlenbilder gar keine Kennzeichnung.
      badge: "Beispielansicht · für den Endkunden",
      // Ohne Firmennamen (BEISPIELE.md, offene Frage 10.2): dieser Bildschirm
      // zeigt die Ansicht, die eine Agentur ihrem Endkunden gibt. Frostbreaker
      // hat diese Rolle nicht, und retaiyns Kunden sind Dritte, die niemand
      // nennen darf. "Kunde 1" ist dieselbe Bezeichnung wie im agencyMockup,
      // damit die Seite eine Welt bleibt.
      client: "Kunde 1",
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
      url: "report.frostbreaker.app/kunde-1",
      note: "Einzelne Kontaktdaten sieht der Endkunde bewusst nicht.",
    },
    mailboxes: {
      title: "Postfächer",
      subtitle: "Warmup und Tagesvolumen pro Postfach",
      // Ohne Namensteil vor dem @: Frostbreakers echte Postfachstruktur ist
      // eine offene Frage (BEISPIELE.md, 10.3), und die Aussage des Bildes ist
      // ohnehin Warmup und Tagesvolumen, nicht wer das Postfach benutzt. Die
      // Domain bleibt in zweiter Person -- sie gehoert dem Leser, nicht uns.
      rows: [
        { address: "hallo@eure-agentur.at", state: "Warmup aktiv", volume: "28 / 50", ok: true },
        { address: "office@eure-agentur.at", state: "Warmup aktiv", volume: "42 / 50", ok: true },
        { address: "kontakt@eure-agentur.de", state: "Aufwärmphase", volume: "12 / 50", ok: false },
      ],
    },
    // Vorher/Nachher statt eines einzelnen Beispiels: ein einzelner Satz mit
    // einem Treffer beweist nicht, dass das Werkzeug etwas bringt -- ein
    // erkennbar schwacher KI-Entwurf mit vielen echten Fundstellen daneben
    // gegen eine kurze, konkrete Mail mit sauberem Befund schon. Alle
    // Markierungen sind Phrasen, die die echte Pruefung auch tatsaechlich
    // findet (siehe lib/email-quality in der App), keine erfundenen Beispiele.
    //
    // Die gute Fassung ist seit dem 2026-08-13 Frostbreakers eigene Mail an
    // retaiyn, Absender Youssef -- dieselbe Sorte Mail, aus der der erste
    // Kunde entstanden ist. Der schlechte Entwurf daneben traegt keine Namen
    // und muss auch keine tragen. Anrede ohne Vornamen, aus demselben Grund
    // wie im LinkedIn-Bild.
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
          { text: " ist es für Onlineshops " },
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
        subject: [{ text: "Kurze Frage zu eurer eigenen Akquise" }],
        body: [
          {
            text:
              "Hallo,\n\nbei euch stehen E-Mail, WhatsApp und Support als ein Angebot auf der Seite, nicht als drei nebeneinander. Für die eigene Neukundengewinnung bleibt dabei erfahrungsgemäß wenig Zeit übrig.\n\nGenau dafür bauen wir ein Werkzeug: Entscheider bei E-Commerce-Marken finden, anschreiben, nachfassen.\n\nSoll ich dir schicken, wie das für eure Zielgruppe aussieht?\n\nViele Grüße,\nYoussef",
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
    // Nur vier von sechs echten Stufen gezeigt (Platzgruende in der
    // Spaltenbreite), Farben und Reihenfolge stimmen mit lib/crm/stages.ts
    // (STAGE_DOT_CLS) in der App ueberein. Karten zeigen nur, was das echte
    // Board auch zeigt -- keine erfundenen Deal-Werte pro Spalte.
    //
    // retaiyn steht in der Spalte "Kunde", und das stimmt buchstaeblich: das
    // Board gehoert Frostbreaker, und retaiyn ist dort angekommen. Die drei
    // uebrigen Karten tragen ihr Segment statt eines Namens. Die aufgeklappte
    // Karte unten ist absichtlich die anonyme aus "Geantwortet" und nicht
    // retaiyn: dort stehen Verlauf und "noch kein Deal", und beides waere
    // neben einem echten Kundennamen eine Behauptung ueber dessen Vorgang.
    pipeline: {
      title: "Pipeline",
      subtitle: "Antworten per Drag & Drop von Neu bis Kunde verschieben",
      columns: [
        { stage: "new", label: "Neu", cards: [{ initial: "E", name: "E-Commerce-Marke, Shopify", company: "Name weggelassen" }] },
        { stage: "contacted", label: "Kontaktiert", cards: [{ initial: "O", name: "Onlineshop, Shopware", company: "Name weggelassen" }] },
        { stage: "replied", label: "Geantwortet", cards: [{ initial: "A", name: "Agentur, Wien", company: "Name weggelassen" }] },
        { stage: "customer", label: "Kunde", cards: [{ initial: "R", name: "retaiyn", company: "Customer Experience für E-Commerce" }] },
      ],
      // Begriffe 1:1 aus der echten App uebernommen (lib/i18n/dict.ts:
      // dealsHeading, dealsEmpty, timelineHeading, notePlaceholder, noteSave),
      // keine erfundene Terminologie -- zeigt, dass hinter der Karte ein
      // Kontakt mit Deals, Verlauf und Notizen steckt, nicht nur ein Status.
      detailLabel: "Agentur, Wien",
      detailSub: "Name weggelassen",
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
      // Am 2026-08-13 auf retaiyn gestellt (BEISPIELE.md, 5.1). Der Posteingang
      // gehoert Frostbreaker, der antwortende Lead ist unser erster Kunde --
      // damit ist der einzige Bildschirm der Startseite, auf dem ein Name
      // steht, in beide Richtungen wahr.
      //
      // Das Antwortzitat ist raus: es gibt keinen freigegebenen Satz von
      // retaiyn, und ein erfundenes Zitat neben einem echten Namen ist eine
      // untergeschobene Aussage. Statt eines Zitats steht dort die Einstufung,
      // die die App tatsaechlich vergibt. `when` ist leer, weil wir den
      // Termin nicht kennen -- nicht, weil das Feld ueberfluessig waere. Erst
      // wieder fuellen, wenn ein Datum vorliegt, das jemand belegen kann.
      initials: "R",
      name: "retaiyn",
      company: "Customer Experience für E-Commerce",
      message: "Antwort eingestuft: interessiert. Aus dieser einen Antwort ist der erste Kunde von Frostbreaker geworden.",
      outcome: "Termin gebucht",
      when: "",
      // Der Deal-Wert (vorher "18.000 €") ist am 2026-08-13 ersatzlos gefallen
      // (BEISPIELE.md, Abschnitt 6). Neben einem erfundenen Namen war er eine
      // Attrappe; neben dem echten Namen, der hier steht, waere er eine
      // Behauptung darueber, was ein namentlich genannter Kunde bezahlt. Auch
      // "Angebot bis Freitag" ist raus: eine Faelligkeit ist eine Tatsache
      // ueber diesen Vorgang, und wir kennen sie nicht. Was bleibt, ist die
      // Mechanik -- und die ist der Punkt des Bildes.
      dealNote: "Deal angelegt · der nächste Schritt steht als Aufgabe im CRM, nicht in einer Tabelle",
    },
    // Zwei weitere Antworten, ohne Namen: der Zweck dieser beiden Zeilen ist
    // "mehrere Postfaecher laufen in einem Eingang zusammen, und jede Antwort
    // wird eingestuft". Das traegt die Marke rechts, nicht die Firma links.
    others: [
      { initials: "··", name: "E-Commerce-Marke, Shopify", company: "Name weggelassen", status: "reply" },
      { initials: "··", name: "Agentur, Wien", company: "Name weggelassen", status: "meeting" },
    ],
    replyLabel: "Antwort",
    meetingLabel: "Termin",
    footer: "Alle Postfächer in einem Eingang, alle fünf Minuten abgeglichen. Jede Antwort wird eingestuft und dem Kontakt zugeordnet.",
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
    h1Pre: "Entscheider finden. Auf ",
    h1Accent: "jedem Kanal",
    h1Post: " erreichen. Zu Kunden machen.",
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
      body: "Finden, anschreiben, nachfassen, abschließen, je Kundenkonto getrennt. Ohne das Werkzeug zu wechseln und ohne eine CSV dazwischen.",
    },
    {
      title: "Kein Lead bleibt ohne nächsten Schritt",
      body: "Antwortet der Lead nicht auf die Mail, kommt LinkedIn. Antwortet er auf LinkedIn nicht, kommt der Anruf. Wer antwortet, bekommt sofort keine weiteren Nachrichten.",
    },
    {
      title: "Du weißt, was Termine bringt",
      body: "Welche Textfassung wirklich funktioniert hat, kann dir sonst niemand sagen. Wir schreiben sie und sehen die Antwort.",
    },
  ],
  // Die Systemkarte, neu am 2026-08-06. Steht als zweiter Abschnitt, direkt
  // nach dem Hero: sie beantwortet "wie gross ist das hier?" auf einen Blick,
  // bevor irgendetwas im Einzelnen erklaert wird.
  systemMap: {
    // Umformuliert 2026-08-15 (KLARTEXT.md, Auftrag 2): "Das ganze Bild"
    // sagte nicht, wovon. "Der Ablauf" ordnet die vier Stufen als das ein,
    // was sie sind.
    eyebrow: "Der Ablauf",
    // Zweimal geaendert am 2026-08-14. Zuerst hiess die Ueberschrift "Von der
    // Nische bis zum Auftrag, ohne das Werkzeug zu wechseln" -- fast woertlich
    // wie `hero.body` einen Abschnitt darueber. Dann "Drei Stufen und eine
    // Rueckkopplung": nicht mehr doppelt, aber die reine Mechanik, und die
    // steht als Bild ohnehin darunter.
    //
    // Was die Karte dem Leser wirklich verspricht, ist dieser Satz: die Daten
    // aus Stufe 1 stehen in Stufe 2 schon drin, die Antwort aus Stufe 2 steht
    // in Stufe 3 schon drin, und die Rueckkopplung legt der naechsten Kampagne
    // die Textfassung hin, die beim letzten Mal Termine gebracht hat. Er gilt
    // fuer alle vier Kaesten und wiederholt keinen anderen Satz der Seite.
    // Umformuliert 2026-08-15 (KLARTEXT.md): "Kein Schritt faengt bei null
    // an" bestand die Wettbewerberprobe nicht -- jedes Tool kann behaupten,
    // effizient zu sein. Die neue Zeile benennt konkret, was die Karte zeigt:
    // vier Stufen, die dieselbe Datenbasis weiterreichen.
    title: "Vier Stufen, eine Datenbasis",
    body: "Alles Weitere auf dieser Seite ist einer dieser vier Kästen im Einzelnen.",
    stages: [
      {
        // Die vier Anbieternamen standen bis zum 2026-08-14 als Kacheln hier
        // und machten aus einer Ablaufskizze eine Zutatenliste -- an der
        // prominentesten Stelle der Karte, und damit direkt neben der Frage
        // "warum gehe ich dann nicht gleich dorthin?". Jetzt stehen sie im
        // Fliesstext der Notiz, wo sie Argument sind statt Auslage.
        id: "find",
        label: "Finden",
        title: "Entscheider statt info@-Adressen",
        items: [
          "Nische, Ort, Größe, eingesetzte Technik oder offene Stellen",
          "Name, Rolle, geprüfte E-Mail, Telefon und LinkedIn, soweit öffentlich",
          "Oder deine eigene Liste als CSV",
        ],
        // Bewusst ein Leistungsversprechen, keine Zustandsbehauptung: heute
        // angebunden sind Google Maps, Hunter, Apollo und Prospeo. Clay ist es
        // NICHT -- der Name steht deshalb im zweiten Satz ("bring es mit"),
        // nie im ersten ("angebunden sind"). Wer diese Grenze verschiebt,
        // laesst die Seite behaupten, Clay sei integriert, und der erste
        // Interessent, der danach fragt, hoert eine andere Antwort.
        note: "Angebunden sind heute Google Maps, Hunter, Apollo und Prospeo. Arbeitest du mit etwas anderem, mit Clay etwa, bring es mit — wir binden es an. Und wenn du nicht weißt, welche Quelle zu deiner Nische passt, beraten wir dich.",
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
        note: "Wer nicht antwortet, bekommt die nächste Nachricht über den nächsten Kanal. Wer antwortet, bekommt sofort keine weiteren Nachrichten.",
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
    body: "Für jemanden, der die App nie gesehen hat.",
    stepLabel: "Schritt",
    steps: [
      {
        title: "Aus einer Nische wird eine Liste mit Namen",
        body: "Branche, Ort, Größe, eingesetzte Technik, oder wer gerade Stellen ausschreibt. Was zurückkommt, ist keine Firmenliste, sondern eine Liste von Menschen: Name, Rolle, geprüfte Adresse, Telefonnummer.",
        detail: "Rollen-Adressen wie info@ oder office@ fallen automatisch raus. An eine Adresse, für die niemand zuständig ist, schreibt man nicht kalt an.",
        cta: "So sieht es in echt aus",
      },
      {
        title: "Jede Nachricht ist personalisiert",
        body: "Aus der Recherche zur Firma entsteht ein Aufhänger je Kontakt. Du bestimmst die Quelle, den Ton und die Wörter, die nicht vorkommen dürfen, und testest an einer echten Firma, bevor etwas gespeichert wird.",
        // Bis zum 2026-08-13 stand hier der Satz gegen Platzhalter-
        // Personalisierung. Der stimmt weiter, liess den Schritt aber wie die
        // ganze Schreibfunktion aussehen -- gemeint ist die EINE Zeile, die je
        // Firma verschieden ist. Der Verweis auf den Angebot-Abschnitt steht
        // als Text und nicht als Link: `detail` wird in _walkthrough.tsx als
        // reiner String gerendert.
        detail: "Es ist die eine Zeile, die je Firma verschieden ist, kein Serienbrief mit dem Firmennamen an der richtigen Stelle. Was danach kommt — Problem, Nutzen, die eine Frage — steht in deinem Angebot, gleich im Abschnitt darunter.",
        cta: "Den Agenten ansehen",
      },
      {
        title: "Text und Technik werden geprüft, bevor etwas rausgeht",
        body: "Der Copy-Check prüft Länge, Spam-Wörter, KI-Klang und ob wirklich nur eine Handlungsaufforderung drinsteht. Die Startprüfung prüft danach die Technik: SPF, DKIM, Bounce-Quote, sendbare Adressen.",
        detail: "Vier der elf Prüfungen können den Start aufhalten. Das kostet dich nicht eine Kampagne, das kostet dich sonst die Domain.",
        cta: "Die Prüfungen ansehen",
      },
      {
        title: "Antwortet der Lead nicht, ist die LinkedIn-Nachricht schon fertig",
        body: "Nach Erstmail und drei Follow-ups erscheint eine LinkedIn-Aufgabe, aber nur dort, wo ein Profil hinterlegt ist. Die Nachricht ist bereits eingesetzt, mit demselben Aufhänger wie die Mail. Antwortet der Lead auch auf die LinkedIn-Nachricht nicht, kommt der Anruf, mit Nummer und Vorbereitung.",
        detail: "Immer genau ein nächster Schritt, nie zwei gleichzeitig. Wer antwortet, bekommt im selben Moment keine weiteren Nachrichten mehr.",
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
  // ══════════════════════════════════════════════════════════════════════
  // DER ANGEBOT-ABSCHNITT. Gehoert auf die Startseite zwischen Rundgang und
  // Agentur-Band; eingehaengt wird er in page.tsx unter dem Anker #angebot.
  //
  // Der Aufhaenger ist nicht ausgedacht, er steht woertlich so in Migration
  // 0090 des App-Repos: die App wusste alles ueber den Empfaenger und nichts
  // ueber den Absender. Das ist die ehrlichste Zeile, die dieser Abschnitt
  // haben kann -- sie gibt eine Luecke zu, bevor sie das Gegenmittel zeigt.
  //
  // WELCHE ZAHLEN HIER STEHEN DUERFEN
  //
  // Nur die sechs, die MECHANIK beschreiben und kein Ergebnis versprechen,
  // und alle stehen so im Code des App-Repos: 12 Felder, davon 7
  // vorgeschlagen (SUGGESTED_FIELDS in lib/copy/offer-from-website.ts) · 4
  // Stufen mit je 2 Fassungen · Tag 0/3/5/7 (PLAYBOOK_DELAYS) · 90/70/50/35
  // Woerter (STEP_MAX_WORDS) · hoechstens 5 Befunde (MAX_FINDINGS in
  // lib/copy/coach-prompt.ts). KEINE Stundenersparnis, kein Gehaltsvergleich,
  // keine Prozentangabe -- die gaebe es nur erfunden, und der Abschnitt
  // daneben verspricht ausdruecklich, nichts zu behaupten, was nicht belegt
  // ist.
  //
  // `limits` ist der wichtigste Teil und darf beim Setzen nicht kleiner
  // werden als `points`. Ein Werkzeug, das seine eigenen Grenzen nennt, wird
  // beim Rest geglaubt.
  // ══════════════════════════════════════════════════════════════════════
  offerSection: {
    eyebrow: "Dein Angebot",
    // Vom Betreiber selbst gewaehlt (KLARTEXT.md), nachdem meine ersten
    // Entwuerfe verworfen wurden: benennt das Angebotsprofil als das, was es
    // ist -- eine Vorlage, aus der die Mails entstehen.
    title: "Dein Angebot als Vorlage für jede Mail",
    body: "Firma, Rolle, eingesetzte Technik, recherchierte Beschreibung: über den Empfänger stand alles in der Datenbank. Was du verkaufst, stand nirgends. Also fing jede Kampagne mit vier leeren Textfeldern an, und für die meisten endet Akquise genau dort. Seit es das Angebot gibt, beantwortest du das einmal, und die Mails entstehen daraus.",
    points: [
      {
        title: "Zwölf Fragen, einmal beantwortet",
        body: "Was du verkaufst, an wen, woran dein Käufer hängen bleibt, was er davon hat, worum du bittest. Sieben der zwölf Antworten liest die App aus deiner eigenen Website und schlägt sie dir vor — du bestätigst sie einzeln, statt sie abzutippen. Fünf bleiben leer, und zwar mit Absicht.",
      },
      {
        title: "Die App prüft dein Angebot und schreibt einen besseren Satz daneben",
        body: "Höchstens fünf Befunde, und keiner ohne Gegenvorschlag. Nicht „das ist zu vage“, sondern der fertige Ersatztext mit einem Knopf, der ihn einsetzt. Sind zwei Felder vertauscht — dein Beleg steht im Ergebnisfeld —, zieht die Karte einen Pfeil zwischen beide. Ein Formular hat für so einen Befund keinen Ort.",
      },
      {
        title: "Ein Entwurf, den du abschicken kannst",
        body: "Die KI schreibt die Sequenz aus deinem Angebot: mehrere Stufen, je zwei eigenständige Fassungen, ein Betreff über alle. Jede Stufe ist kürzer als die vorherige, denn wer nach einer ausbleibenden Antwort mehr schreibt, läuft hinterher. Abstände und Anzahl sind unser Vorschlag und lassen sich ändern. Die LinkedIn-Nachricht kommt aus derselben Quelle.",
      },      {
        title: "Je Lead-Liste ein eigener Zuschnitt",
        body: "Was du verkaufst, bleibt gleich, egal wen du anschreibst. Woran deine Empfänger hängen, nicht. Die KI liest jede Lead-Liste einzeln — die Filter der Suche und die recherchierten Firmenbeschreibungen — und schlägt dafür die Felder vor, die sich von Liste zu Liste unterscheiden. Zwei Zielgruppen brauchen damit nicht zwei Angebote, sondern ein Angebot und zwei Zuschnitte.",
      },

    ],
    limitsTitle: "Was sie dir nicht abnimmt",
    limits: [
      {
        title: "Die fünf Felder, die eine Website nicht hergibt",
        body: "Was du nach einem Ja schickst, wie lange das Ansehen dauert, deine eine Frage, warum Käufer zögern, und der Ton: diese fünf schlägt die App absichtlich nicht vor. Auf fast jeder Website steht an dieser Stelle „Termin buchen“ — und genau das ist die kleine Frage nicht, um die es geht. Ein Vorschlag wäre geraten, und geraten hieße: es steht etwas in deinem Angebot, das niemand entschieden hat.",
      },
      {
        // Umformuliert 2026-08-15 (KLARTEXT.md): "Ohne..." als Verneinung am
        // Satzanfang gestrichen.
        title: "Leeres Belegfeld heißt: keine Zahl in der Mail",
        body: "Lässt du das Belegfeld leer, wird daraus eine ausdrückliche Anweisung, in der Mail nichts zu behaupten: kein Kunde, keine Zahl, kein Jahr. Ein Junior improvisiert an dieser Stelle. Eine erfundene Referenz fällt nicht dir auf, sondern dem Empfänger, und dann ist der Kontakt verbrannt.",
      },
      {
        title: "Der Entwurf wartet im Kampagnenformular",
        body: "Die acht Texte stehen danach im Kampagnenformular. Dort liest ein Mensch sie, bevor sie an tausend Adressen gehen, und ändert, was ihm nicht passt. Die Startprüfung prüft danach die Technik wie bisher.",
      },
    ],
    closing: "Das ist die Arbeit, für die man sonst jemanden im Vertrieb einstellt und ein halbes Jahr einarbeitet: das Angebot verstehen, es in vier Mails übersetzen, jede Stufe zweimal schreiben und keine Behauptung aufstellen, die nicht trägt. Wie viele Stunden dich das spart, sagen wir nicht — wir haben es nicht gemessen. Was die App tut, steht hier, Regel für Regel.",
    // Steht ÜBER der Angebotskarte, nicht darunter. Die Einordnung gab es
    // vorher schon, aber in `offerMap.note` -- also unter zwoelf Feldern und
    // hinter der Zahl "bis zu 70 %", die in Ecke 3 weit darueber steht. Wer
    // von oben liest, hatte die 70 % laengst als Frostbreakers Zahl verbucht,
    // bevor er erfuhr, wessen Angebot das ist. Deshalb zuerst der Absender,
    // dann die Zahlen. `retaiyn` durchgehend klein, das ist deren eigene
    // Schreibweise.
    humanCheck: "Bevor ein Text an tausend Adressen geht, hat ihn ein Mensch gelesen.",
    caseIntro:
      "Das Angebot unten gehört retaiyn, unserem ersten Kunden: Customer Experience für E-Commerce-Marken, also AI-Support, WhatsApp- und E-Mail-Marketing als ein Ablauf statt als drei. Die Felder sind mit deren eigenen Sätzen gefüllt — auch die Prozentzahlen darin sind retaiyns Aussagen über sich selbst, nicht unsere.",
    // ────────────────────────────────────────────────────────────────────
    // Die Texte der beiden Bilder (_offer-mockups.tsx).
    //
    // Seit dem 2026-08-13 steht hier das Angebotsprofil von retaiyn, unserem
    // ersten Kunden, Feld fuer Feld aus deren eigenen Saetzen von retaiyn.com.
    // Das ist die einzige Stelle der Website, an der die Rollen sich umdrehen:
    // sonst ist das gezeigte Konto Frostbreakers und retaiyn der Lead, hier
    // ist retaiyn der Kontoinhaber -- weil dieser Bildschirm ausdruecklich das
    // Angebot eines NUTZERS zeigt.
    //
    // Nur deshalb duerfen die 70 %, die 30 %, die 200 Brands und die 2,5 Mio.
    // hier stehen: sie sind retaiyns Aussagen ueber sich selbst, und sie
    // stehen sichtbar in beschrifteten Formularfeldern eines Kundenangebots.
    // In einer Kennzahlenkachel, einem Balken oder einer Auswertung waeren
    // dieselben Zeichen eine Behauptung ueber Frostbreakers Wirkung und damit
    // erfunden. Diese Grenze nicht verschieben.
    //
    // Der Glueckfall an diesem Material: der Fehler, den das Bild zeigen soll,
    // entsteht von allein. Im Ergebnisfeld steht retaiyns Versprechen (richtig
    // platziert), im Belegfeld steht deren Wahlspruch "mehr als eine
    // klassische Agentur" (ein Wahlspruch, kein Beleg), und der eigentliche
    // Beleg -- ueber 200 betreute Brands, 2,5 Mio. EUR ARR im Portfolio --
    // steht an keiner Stelle, an der er wirkt. Genau darauf zeigt der
    // bernsteinfarbene Pfeil. Er ist im Bauteil fest auf Ecke 3, Knoten 1 →
    // Knoten 3 verdrahtet: die dritte Ecke muss in der Reihenfolge Ergebnis,
    // Mechanismus, Beleg stehen bleiben, sonst zeigt der Pfeil ins Leere.
    //
    // Fuenf der zwoelf Felder stehen so nicht auf retaiyn.com (Tonfall,
    // Zoegern, Mechanismus, Beilage, Dauer). Sie sind aus deren eigenen
    // Saetzen umgestellt, nicht dazuerfunden -- keines davon behauptet etwas
    // Neues ueber die Firma. Wer sie anfasst, muss diese Linie halten.
    // ────────────────────────────────────────────────────────────────────
    offerMap: {
      frameTitle: "Angebot · Beispiel",
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
        state: "füllt aus Website und Lead-Liste vor, dann liest sie die zwölf Felder gegeneinander",
        button: "Angebot prüfen",
      },
      // Muss genau die beiden Felder benennen, die der Pfeil verbindet:
      // Knoten 1 der dritten Ecke (Ergebnis) und Knoten 3 (Beleg).
      findingLabel: "Im Ergebnisfeld steht ein Versprechen, im Belegfeld ein Wahlspruch. Der Beleg für das Versprechen steht nirgends.",
      // Der Herkunftssatz ist am 2026-08-14 nach oben in `caseIntro`
      // gewandert. Unten bleibt nur die Mechanik -- zweimal dieselbe Auskunft
      // ueber und unter demselben Bild ist einmal zu viel.
      note: "Zwölf Felder, vier Gruppen. Jede Linie dazwischen ist eine Regel, an der geprüft wird.",
    },
    coachFinding: {
      frameTitle: "Angebot · Prüfung",
      group: "Worum du bittest",
      fieldLabel: "Die eine Frage, auf die er Ja oder Nein sagt",
      severity: "Blocker",
      beforeLabel: "Du hattest geschrieben",
      // Der Befund kommt aus dem Angebot darueber: "Kostenloses Erstgespräch
      // vereinbaren" ist retaiyns heutiger Handlungsaufruf, woertlich von
      // deren Seite. Das ist kein Fehler auf einer Website -- dort ist der
      // Satz richtig. Am Ende einer Kaltmail ist er die groesste denkbare
      // Bitte, und genau dieser Unterschied ist das ganze Bild. Der
      // Gegenvorschlag ist aus retaiyns eigener Problembeschreibung geformt
      // und nichts dazuerfunden.
      before: "Kostenloses Erstgespräch vereinbaren.",
      verdictLabel: "Der Befund",
      verdict:
        "Auf einer Website ist der Satz richtig. Am Ende einer ersten Mail ist er eine Terminbitte — die größte Bitte, die sie stellen kann, und deshalb die, die am häufigsten übergangen wird.",
      proposalLabel: "Stattdessen",
      proposal: "Soll ich dir die drei Stellen schicken, an denen E-Mail, WhatsApp und Support bei euch heute auseinanderlaufen?",
      apply: "Übernehmen",
      dismiss: "Passt so",
      note: "Kein Befund ohne Gegenvorschlag, und höchstens fünf. Mehr wäre eine Mängelliste und keine Beurteilung.",
    },
  },
  localReachMockup: {
    typicalLabel: "Typische B2B-Datenbank",
    frostbreakerLabel: "Frostbreaker, über Google Places",
    notListed: "nicht gelistet",
    // Gestrichen statt ersetzt (BEISPIELE.md, Abschnitt 7.1): die Aussage ist
    // "lokale Betriebe, die in keiner B2B-Datenbank stehen". Weder
    // Frostbreaker noch retaiyn ist so ein Betrieb, und die Kategorie traegt
    // das Argument vollstaendig. Die Namensspalte hat es nie getragen.
    businesses: [
      { name: "Einzelsalon, 1 Standort", sub: "Google-Eintrag mit Website und Telefonnummer" },
      { name: "Handwerksbetrieb, 6 Mitarbeitende", sub: "Google-Eintrag, Website vorhanden" },
      { name: "Einzelpraxis", sub: "Google-Eintrag, Telefonnummer vorhanden" },
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
    // fact/factSub/factSource am 2026-08-13 gestrichen (BEISPIELE.md, Abschnitt
    // 6). Dort stand "etwa doppelt so oft", belegt mit "Branchen-Benchmarks
    // E-Mail-Zustellbarkeit, 2026" -- eine Quellenangabe, die niemanden nennt,
    // weil es die Studie nicht gibt. Die Zahl trug nur diese Quelle; ohne sie
    // faellt sie mit. Der Absatz "body" darueber sagt dieselbe Sache ohne Zahl.
    // Kein Ersatz einsetzen, bevor eine Quelle vorliegt, die man nachlesen kann.
  },
  qualifiedMockup: {
    typicalLabel: "Typisches Tool",
    frostbreakerLabel: "Frostbreaker",
    genericNote: "Rollen-Adresse, niemand konkret zuständig",
    // Gestrichen statt ersetzt (BEISPIELE.md, Abschnitt 7.2): die Aussage ist
    // die FORM der Adresse, nicht die Firma. Domains auf .example, weil das
    // die einzige Endung ist, die niemandem gehoeren kann (RFC 2606) -- eine
    // geratene Domain ist eine Tatsachenbehauptung ueber deren Inhaber.
    rows: [
      { generic: "info@betrieb.example", name: "Inhaberin", role: "namentlich, nicht als Rollen-Postfach", email: "vorname.nachname@betrieb.example" },
      { generic: "office@praxis.example", name: "Praxisinhaberin", role: "namentlich, nicht als Rollen-Postfach", email: "vorname.nachname@praxis.example" },
      { generic: "kontakt@salon.example", name: "Salonleitung", role: "namentlich, nicht als Rollen-Postfach", email: "vorname.nachname@salon.example" },
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
    title: "Drei Wege hinein",
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
  agency: {
    pageLink: "Wie das im Agenturalltag aussieht",
    eyebrow: "Für Agenturen",
    title: "Mehrere Kunden verwalten, ohne für jeden ein neues Abo aufzumachen",
    // "unter einem einzigen Login fuer euer Team" hiess bis zum 2026-08-06
    // woertlich: ein geteiltes Passwort. Seit Migration 0081 gibt es echte
    // Zugaenge je Person mit zwei Rollen, und die Zeile sagt das jetzt.
    body: "Betreut ihr Lead-Gen oder Cold Outreach für eure eigenen Kunden? Dann läuft jeder Kunde in einem eigenen, sauber getrennten Workspace, im Look dieses Kunden, und jede Person in eurem Team hat ihren eigenen Zugang.",
    features: [
      { id: "workspaces", title: "Eigene Zugänge, ein Workspace pro Kunde", body: "Jede Person im Team hat einen eigenen Zugang mit Rolle: Admin oder Mitglied. Leads, Kampagnen und Sperrlisten laufen pro Kunde sauber getrennt, ohne für jeden ein eigenes Abo." },
      { id: "branding", title: "Branding pro Kunden-Workspace", body: "Name, Logo und Akzentfarbe lassen sich je Workspace hinterlegen, damit das, was der Endkunde sieht, nach der Agentur aussieht, nicht nach einem fremden Tool im Hintergrund." },
      { id: "reportLink", title: "Teilbarer Report-Link, ohne Login für den Endkunden", body: "Ein Link pro Workspace zeigt aggregierte Kennzahlen im Look des jeweiligen Kunden, ganz ohne dass der einen eigenen Account braucht. Einzelne Kontaktdaten sieht der Endkunde dabei bewusst nicht." },
    ],
    note: "Bei reinen Versand-Tools ist eine Multi-Kunden-Verwaltung meist ein separat bepreistes Zusatzmodul, oft mit einem eigenen Preis pro angelegtem Kunden-Workspace, obendrauf auf ein Tool, das nur den Versand übernimmt. Bei Frostbreaker ist das von Anfang an Teil des Produkts.",
  },
  agencyMockup: {
    workspacesLabel: "Workspaces",
    active: "aktiv",
    // Gestrichen statt ersetzt (BEISPIELE.md, Abschnitt 7.3): das ist die
    // Kundenliste einer Agentur. Frostbreaker ist keine; retaiyn ist eine,
    // aber deren Kunden sind Dritte, die niemand nennen darf. Drei Farbpunkte
    // und "Kunde 1/2/3" sagen "drei getrennte Workspaces" genauso vollstaendig.
    workspaces: [
      { name: "Kunde 1", color: "#0EA5E9", active: true },
      { name: "Kunde 2", color: "#8B5CF6", active: false },
      { name: "Kunde 3", color: "#F59E0B", active: false },
    ],
    brandingLabel: "Branding dieses Workspaces",
    brandingValue: "Kunde 1 · Akzentfarbe #0EA5E9",
    reportLinkLabel: "Report-Link für den Endkunden",
    // Bis zum 13.08.2026 stand diese Adresse fest im Bauteil und lautete
    // ".../report/muster-gmbh" -- der letzte erfundene Firmenname auf der
    // Seite, und einer, den kein Suchlauf im Woerterbuch gefunden haette.
    // "kunde-1" passt zu den drei Workspaces darueber.
    reportUrl: "app.frostbreaker.app/report/kunde-1",
    copyLabel: "Kopieren",
  },
  // Hiess bis zum 2026-08-06 "Mehr als Lead-Suche. Die meisten Tools hoeren
  // auf, sobald die Mail raus ist." Das war gegen die Wettbewerber formuliert
  // statt fuer die eigene Sache -- und ein Abschnitt, der mit dem Mangel
  // anderer beginnt, verkauft den Mangel, nicht das Produkt. Er traegt jetzt
  // die vierte Saeule: was aus einer Antwort wird.
  postSend: {
    // Umformuliert 2026-08-15 (KLARTEXT.md, Auftrag 2): "Nach dem Ja" war
    // poetisch, der Abschnitt handelt aber von jeder Antwort, nicht nur von
    // Zusagen. "CRM" benennt, was Posteingang, Deals und Aufgaben zusammen
    // sind -- derselbe Begriff, den `dashboard.body` zwei Zeilen weiter
    // unten selbst dafuer verwendet ("ersetzt das ein eigenes CRM-Abo").
    eyebrow: "CRM",
    // Umformuliert 2026-08-15 (KLARTEXT.md): ", nicht" gestrichen, Titel
    // benennt jetzt Posteingang und Pipeline direkt statt sich gegen ein
    // simples Postfach abzugrenzen.
    title: "Posteingang, Deals und Aufgaben in einer Ansicht",
    body: "Jede Antwort wird eingeordnet und dem Kontakt zugeordnet. Daraus entsteht ein Deal mit Wert und Wahrscheinlichkeit, eine Aufgabe mit Fälligkeit, eine Notiz nach dem Anruf. Der Anruf von gestern und die Mail von vor drei Wochen stehen in derselben Historie.",
    features: [
      { id: "replies", title: "Ein Posteingang für alle Postfächer", body: "Alle verbundenen Postfächer laufen in einem Posteingang zusammen, alle fünf Minuten synchronisiert, mit Zähler für Ungelesenes. Jede Antwort kommt mit vollem Text an, die KI ordnet sie ein (interessiert, kein Interesse, Rückfrage), und geantwortet wird direkt aus der App. Instantly müsst ihr dafür nicht mehr öffnen." },
      // Titel umformuliert 2026-08-15 (KLARTEXT.md): "statt" ersetzt.
      { id: "dashboard", title: "Umsatz-Forecast nach Abschlusswahrscheinlichkeit", body: "Offene Pipeline, mit der Abschlusswahrscheinlichkeit gewichteter Forecast, gewonnen und verloren der letzten 30 Tage, dazu fällige und überfällige Aufgaben. Für die meisten Agenturen ersetzt das ein eigenes CRM-Abo." },
      { id: "status", title: "Lead-Status pro Kontakt, ohne separates CRM", body: "Kontaktiert, geantwortet, Meeting gebucht, Kunde geworden, alles direkt in der Leads-Tabelle nachvollziehbar." },
      // Die vierte Karte ("SPF, DKIM, DMARC: geprueft, bevor ihr sendet") ist
      // am 2026-08-14 gefallen. Ein Zustellbarkeits-Argument im Abschnitt
      // "Nach dem Ja" steht hinter der Antwort statt davor -- es ist die
      // Aussage von #torwart, an der falschen Stelle wiederholt.
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
  suppressionMockup: {
    // Die Kennzeichnung haengt an der Kopfzeile, weil die 312 sonst als
    // gezaehlter Bestand eines echten Kontos gelesen werden (BEISPIELE.md,
    // Abschnitt 6). Die Zahl selbst ist harmlos, solange die Marke steht.
    label: "Automatisch geprüft, bevor versendet wird · Beispielansicht",
    // Der genaueste Beleg, den es fuer diese Funktion gibt: retaiyn darf
    // keine Kaltmail mehr bekommen, weil retaiyn Kunde ist. Kostet nichts und
    // ist wahr. Firma statt Person, aus demselben Grund wie ueberall sonst.
    blocked: { name: "retaiyn", company: "Customer Experience für E-Commerce", note: "bereits Kunde" },
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
  // Vier Stufen, nicht drei. Bis zum 2026-08-15 standen hier drei, waehrend
  // der Text danebenstand: "vier Stufen an Tag 0, 3, 5 und 7". Das Bild ist
  // aelter als der Sequenzgenerator. Tage und Aufgaben sind aus
  // `apps/web/lib/copy/sequence-prompt.ts` uebernommen (DEFAULT_DELAYS und die
  // vier STEP-Zeilen des Prompts) -- wer sie dort aendert, aendert sie hier.
  campaignMockup: {
    label: "Sequenz",
    steps: [
      { day: "Tag 0", title: "Die Beobachtung" },
      { day: "Tag 3", title: "Enger, nichts Neues" },
      { day: "Tag 5", title: "Die Zusammenfassung" },
      { day: "Tag 7", title: "Die letzte" },
    ],
    activeLabel: "Aktiv",
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
  // `body` und die Karte `poweredBy` sind am 2026-08-14 gefallen
  // (VEREINFACHUNG.md 1.2). Beide sagten „ein Werkzeug statt vier" -- eine
  // Aussage, die auf dieser Seite bis dahin sechsmal stand, unter anderem im
  // Hero, in der Systemkarte und in der Schlusszeile der Vergleichstabelle.
  // Was hier bleibt, sind die zwei Karten, die es sonst nirgends gibt: der
  // fruehe Zugang und der Gruender.
  why: {
    // OFFEN (KLARTEXT.md): "Warum es Frostbreaker gibt" ist die letzte der
    // sechzehn schwachen Ueberschriften, aber die dort getroffene Entscheidung
    // ist Streichung, nicht Umformulierung -- der H3 `earlyAccess.title`
    // darunter ist bereits die bessere Ueberschrift. Das ist eine
    // Markup-Aenderung (Element entfernen), keine Wortlaut-Aenderung. Bleibt
    // hier unveraendert stehen; Entfernen ist Sache von Markup/`ui-designer`.
    title: "Warum es Frostbreaker gibt",
    // Stand vorher auf "Frueher Zugang STATT grosser Kundenliste" -- das las
    // sich wie eine Entschuldigung dafuer, keine Kunden zu haben, und genau so
    // kommt es bei einem Fachkaeufer an. Dieselbe Tatsache, als Angebot
    // formuliert: was er davon HAT, dass wir noch klein sind. Ohne erfundene
    // Zahl, weil eine erfundene Zahl auf dieser Seite alles kaputtmacht.
    earlyAccess: { title: "Ihr redet mit dem, der es baut", body: "Wir arbeiten gerade mit einer kleinen Zahl von Agenturen, jede eng begleitet. Das heißt für euch: die Einrichtung machen wir gemeinsam, ihr schreibt mir direkt, ohne Ticketsystem, und was euch fehlt, steht im nächsten Sprint statt auf einer Roadmap. Diese Nähe gibt es nur, solange die Gruppe klein ist." },
    founderLabel: "Vom Gründer",
    founderQuote: "„Ich wollte schon immer etwas Eigenes aufbauen. Das größte Hindernis war nie die Idee, sondern Kunden zu finden: Kaltakquise per Hand, endlose Anrufe und E-Mails, ohne je zu wissen, ob es sich lohnt. Also habe ich mir selbst das Werkzeug gebaut, das mir gefehlt hat, seitdem geht mir der nächste Ansprechpartner nie mehr aus.“",
    founderName: "Youssef Tayachi",
    founderRole: "Gründer & CEO, Frostbreaker",
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
    body: "Er hängt daran, wie viele Kunden ihr betreut, nicht an euren Leads und nicht an euren Workspaces. Wir nennen ihn im ersten Gespräch. Monatlich kündbar, ohne Einrichtungsgebühr.",
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
  caseStudyPage: {
    eyebrow: "Referenz · Eigene Software",
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
    // Am 2026-08-13 umgedreht (BEISPIELE.md, Abschnitt 6). Vorher stand hier
    // eine Aussage ueber den Markt ("bei reinen Versand-Tools meist ein
    // separat bepreistes Zusatzmodul"), belegt mit "Marktvergleich
    // White-Label-Cold-Email-Tools, 2026" -- diesen Marktvergleich gibt es
    // nicht. Eine Aussage ueber fremde Preislisten traegt ohne Quelle nicht,
    // also steht jetzt die Aussage ueber uns selbst da, die wir belegen
    // koennen. FactBox setzt "Quelle:" fest vor das source-Feld (_ui.tsx),
    // deshalb kein leerer String, sondern die ehrliche Selbstauskunft --
    // dasselbe Muster wie "Frostbreaker, live production" auf /case-study.
    factCard: { fact: "Bei Frostbreaker ist die Verwaltung mehrerer Kunden von Anfang an Teil des Produkts, kein separat bepreistes Zusatzmodul.", sub: "Lead-Suche, Personalisierung und Reporting laufen ohnehin pro Kunde getrennt. Deshalb ein Betrag, unabhängig davon, wie viele Workspaces ihr anlegt.", source: "Frostbreaker, eigene Angabe" },
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
      { label: "Your offer", href: "/#angebot" },
      { label: "How retaiyn uses it", href: "/kunden/retaiyn" },
      { label: "Three channels", href: "/#kanaele" },
      { label: "Personalization", href: "/funktionen#personalize" },
    ],
    funktionenItems: [
      { label: "All features", href: "/funktionen" },
      { label: "Lead Finder", href: "/funktionen#find" },
      { label: "Technology filter", href: "/funktionen#tech" },
      { label: "Decision Maker Finder", href: "/funktionen#enrich" },
      { label: "Personalization", href: "/funktionen#personalize" },
      { label: "Copy from your offer", href: "/funktionen#write" },
      { label: "Copy check as you type", href: "/funktionen#check" },
      { label: "Campaigns", href: "/funktionen#send" },
      { label: "Suppression list", href: "/funktionen#protect" },
      { label: "Pipeline", href: "/funktionen#pipeline" },
    ],
    vergleich: "Comparison",
    kontakt: "Contact",
    custom: "Custom Software",
    fuerWen: "Who it's for",
    fuerWenItems: [
      { label: "Winning customers for others", href: "/fuer-agenturen" },
      { label: "Winning customers for yourselves", href: "/fuer-saas" },
    ],
  },
  agencyPage: {
    metaTitle: "For agencies: cold outreach for several clients in one tool",
    metaDescription:
      "For agencies running email, LinkedIn and phone for their clients every day: one workspace per client, separate suppression lists, reports without a login, and the analysis of which copy version booked meetings.",
    eyebrow: "For agencies",
    title: "Eight clients. Three channels. Every day.",
    intro:
      "You run cold outreach for other people. That means every morning: several mailboxes, several suppression lists, several audiences, and at month's end a spreadsheet somebody builds by hand. This page is about that daily reality, not about features.",
    ctaLabel: "Book a call",
    sections: [
      {
        id: "day",
        eyebrow: "Monday morning",
        title: "One work list instead of eight open tabs",
        body: "Who needs a call today, who is missing a LinkedIn message, who replied. One list per client, sorted by urgency rather than by arrival. Everyone on the team works in it with their own login, and no contact ever gets two tasks at once.",
        bullets: [
          "Call list with number, role and a prep note from the research",
          "LinkedIn message already filled in: copy, open, send",
          "Overdue, today, later instead of a list of everything",
          "Anyone who replies stops receiving further messages the same moment",
        ],
      },
      {
        id: "workspaces",
        eyebrow: "Separated",
        title: "Client A never hears about client B",
        body: "Leads, campaigns and suppression lists run separately per client. That is not convenience, it is liability: an existing customer of A who receives a cold email for B costs you A.",
        bullets: [
          "Own login per person, with a role: admin or member",
          "Suppression list per client, no overlap",
          "Name, logo and accent colour per workspace",
          "Unlimited workspaces within your plan",
        ],
      },
      {
        id: "onboarding",
        eyebrow: "On day one",
        title: "A new client is ready the same day",
        body: "What takes days today, namely creating accounts, moving lists, rebuilding sequences, is a checklist here. The first search runs immediately. Before the first campaign goes out you wait for mailbox warmup, and that takes two to four weeks. No tool gets around it, ours included.",
        bullets: [
          "Create the workspace and set the branding: two minutes",
          "Import that client's existing customers into the suppression list via CSV",
          "The audience lives as a saved search, not as a briefing document",
          "Lead subscription: the list keeps growing weekly on its own",
        ],
      },
      {
        id: "report",
        eyebrow: "At month's end",
        title: "The report builds itself",
        body: "One link per client, in that client's look, without an account. It shows contacted, replies and meetings, and not a single contact address.",
        bullets: [
          "No login needed for the end client",
          "Contact details stay with you, not with the client",
          "Replaces the spreadsheet that otherwise gets built at month's end",
          "Always current instead of as of a cut-off date",
        ],
      },
      {
        id: "learning",
        eyebrow: "The advantage only you get",
        title: "By the third client you know what works in a niche",
        body: "For every campaign it says which copy version booked meetings. Not replies, but meetings. A sending tool cannot tell you that because it did not write the copy, and a lead database never sees the reply. After a few clients you have something no agency can buy: a set of openers you know booked meetings.",
        bullets: [
          "Per step and per copy version: replies, rejections, meetings",
          "Plus weekday, time of day and lead list",
          "What worked for one client, you take to the next",
          "Below 30 contacts we show no rate, not even to you",
        ],
      },
      {
        id: "costs",
        eyebrow: "Predictable",
        title: "What a client costs you, and what you charge them",
        body: "One fixed monthly amount that fits your number of clients. We set it together on the call. Lookup costs run alongside it on your own accounts, at cost price. What you charge your clients for it stays your decision: we do not see it and we add no markup.",
        bullets: [
          "One amount, no matter how many workspaces you create",
          "No surcharge per workspace, no surcharge per report",
          "Lookup costs at cost price, visible live in the dashboard",
          "What goes away: the CRM subscription that charges per seat",
        ],
      },
    ],
    contrastTitle: "What a pure sending tool asks for at this point",
    contrastBody:
      "Multiple client accounts are usually a separate line item there, often priced per workspace, on a tool that only sends. Research, personalisation, calls and the report all come on top. Here it is one plan.",
    ctaTitle: "Let's talk about your client setup",
    ctaBody:
      "Thirty minutes: how many clients, which audiences, how your team works today. We set up the first workspace together. Not a sales pitch, no slide deck.",
  },
  saasPage: {
    metaTitle: "Outbound for your own product, written from an offer you fill in once",
    metaDescription:
      "For SaaS companies without a sales team: twelve questions about your offer, seven of them suggested from your own website. Find buyers by the technology they run, keep several offers in one account, and see what came back per step and per version.",
    eyebrow: "Customers for yourselves",
    title: "One product, one audience, no sales team.",
    intro:
      "You know your product better than anyone you could hire to sell it. What you are missing is not the knowledge, it is the machinery that puts it in writing every week: new recipients, four emails each, every one of them written as if somebody had looked the company up first. This page is about what that looks like when nobody in the building has ever done sales.",
    ctaLabel: "Book a call",
    sections: [
      {
        id: "offer",
        eyebrow: "Who fills it in",
        title: "The offer gets filled in by the person who built the product",
        body: "Twelve questions stand between you and eight finished emails. Seven of the answers are read off your own website and handed to you one at a time to confirm. The other five are known only to whoever knows the product, and that is you. So the hurdle at the start is the smallest one there can be: no briefing, no ramp-up, no second person who has to understand your product first.",
        bullets: [
          "Twelve fields, answered once instead of before every campaign",
          "Seven suggestions off your own website, confirmed one at a time",
          "Nothing to hand over to someone who needs half a year to learn it",
          "The same profile produces the four steps and the LinkedIn template",
        ],
      },
      {
        id: "icp",
        eyebrow: "Who you mean",
        title: "Your best-fit buyer runs a technology, not an industry code",
        body: "For a software product the industry list rarely lands. What lands is the software sitting next to yours: the shop system, the email tool, the support channel. retaiyn, our first customer, sells customer experience to e-commerce brands, and a brand becomes relevant to them the moment it runs Klaviyo, WhatsApp or a support desk. Then the trigger on top: a company hiring for that role, or one whose visitor numbers are climbing, has the problem now rather than someday.",
        bullets: [
          "Over 10,000 technologies, from shop system to email tool",
          "Job ads as a trigger: hiring for it is admitting the gap",
          "Visitor numbers and how fast they grow, as a filter of their own",
          "The hit count is on screen before credits are spent, not after",
        ],
      },
      {
        id: "learning",
        eyebrow: "Why this page exists",
        title: "One offer means the numbers stack up",
        body: "Switch niche every two months and you start measuring from scratch every time. You sell the same thing next month as this month, so every reply lands on the same eight pieces of copy. After a few rounds it says, per step and per version, what came back: how many replied, how many were interested, which meeting came out of which text. The version in front is the one you carry forward, and the next round no longer starts at zero.",
        bullets: [
          "Broken down by step one to four and by version A or B",
          "A meeting counts against the copy it actually came from",
          "Under 30 contacts per version the percentage stays blank: a rate off twelve emails is a coin toss with a decimal point",
          "Out-of-office replies are listed separately and never pass as answers",
        ],
      },
      // Der Abschnitt `multi` ist am 2026-08-14 gefallen -- Begruendung in der
      // deutschen Haelfte an derselben Stelle. `type Dictionary = typeof de`
      // verlangt, dass beide Haelften gleichzeitig fallen.
      {
        id: "limits",
        eyebrow: "Where it stops",
        title: "Outward, to people who do not know you yet",
        body: "So you do not find out on the call: the app knows your product from twelve fields, not from your database. Anything that happens inside your application stays outside of this. That is not a gap we are closing later, it is where the thing ends.",
        bullets: [
          "Not a tool for existing customers: onboarding, win-back and churn flows live elsewhere",
          "No in-app messaging, no banners, no product tours",
          "No product data: what someone does inside your app, Frostbreaker never sees",
          "One channel pointing outward, no communication pointing in",
        ],
      },
    ],
    ctaTitle: "Bring the product, we fill in the offer together",
    ctaBody:
      "Thirty minutes on the real thing: the twelve fields, the technology your buyers run, and the first search. You leave with an offer filled in inside your account. No pitch, no PDF afterwards.",
  },
  customerPage: {
    metaTitle: "retaiyn: how one agency turns its own offer into a sequence",
    metaDescription:
      "A client portrait, not a success story: how retaiyn, our first customer, turns its own offer into eight emails — from niche to offer to sequence, without a figure we couldn't recalculate ourselves.",
    eyebrow: "Our first client",
    title: "retaiyn: winning customers over email and LinkedIn",
    intro:
      "retaiyn is our first customer: an agency for customer experience in e-commerce. This page shows how their offer runs through Frostbreaker — from niche to offer to finished sequence. What that produced in meetings is not here yet: we add that once there is enough to measure, not before.",
    ctaLabel: "Book a call",
    sections: [
      {
        id: "who",
        eyebrow: "Who they are",
        title: "The niche was never the question — reaching it was",
        body: "retaiyn describes itself as \"more than a classic agency\": customer experience & AI support, WhatsApp marketing and email marketing run there as one process, not three separate services. That gets sold to e-commerce shops and brands, most of them already running Klaviyo, WhatsApp or a support desk of their own. Who sells and to whom was never open at retaiyn. It was settled before a single email got written, and that is exactly where every offer in Frostbreaker starts.",
        bullets: [
          "Customer experience & AI support, WhatsApp marketing, email marketing — one process, not three separate services",
          "Audience: e-commerce shops and brands",
          "Mostly already running Klaviyo, WhatsApp or a support desk of their own",
          "The problem retaiyn solves there: email, WhatsApp and support running independently of each other",
        ],
      },
      {
        id: "offer",
        eyebrow: "The offer",
        title: "What is on the website is not a cold email yet",
        body: "The same profile the homepage shows as an example belongs to retaiyn: twelve fields, filled with their own sentences from retaiyn.com, including the two figures inside — up to 70% of support automated, up to 30% more revenue. That is retaiyn's promise to its own customers, not Frostbreaker's result at retaiyn. The last field is where the difference shows: retaiyn's current call to action reads \"Book a free intro call.\" On the website, that is the right sentence. In a first email to a stranger, it asks for too much at once, and that is exactly what the review inside the offer flags, with a finished replacement sentence next to it.",
        bullets: [
          "Twelve fields, seven suggested from retaiyn.com, five answered by retaiyn itself",
          "Up to 70% of support automated, up to 30% more revenue: retaiyn's claim about its own offer, not about Frostbreaker",
          "Call to action on the website: \"Book a free intro call\"",
          "In the sequence, the review flags that exact sentence as too big an ask",
        ],
      },
      {
        id: "sequence",
        eyebrow: "The sequence",
        title: "Twelve fields turn into eight emails that ask for less each time",
        body: "The app sends in four waves: today, then after three, five and seven days, one subject line running through the whole set. Each wave is shorter than the one before. The meeting request from retaiyn's website became a small question in the first email instead: should I send you the three places where email, WhatsApp and support still run apart for you? The same profile also produces the LinkedIn message next to it.",
        bullets: [
          "Four waves, today plus day three, five and seven, one subject line for all of them",
          "Each wave shorter than the last",
          "The meeting request becomes a small question, shaped from retaiyn's own description of the problem",
          "The LinkedIn message comes from the same offer",
        ],
      },
      {
        id: "role",
        eyebrow: "What only retaiyn knew",
        title: "Five fields no website hands over",
        body: "What gets sent after a yes, how long review takes, the one question at the end, why buyers hesitate, and the tone of the emails: those five answers were retaiyn's alone, no research suggests them. Where a proof field stayed empty, the app adds nothing that cannot be backed up. And before the eight emails go out, they sit in the campaign form: someone at retaiyn reads them first and changes what does not fit.",
        bullets: [
          "What follows a yes, how long review takes, the one closing question, buyer hesitation, tone: five answers only retaiyn could give",
          "No proof, no claim — nothing goes in that cannot be backed up",
          "The eight emails land in the campaign form first, not straight into sending",
          "Someone at retaiyn reads them before they go out",
        ],
      },
      {
        id: "fit",
        eyebrow: "And in your agency?",
        title: "The same mechanism for any agency with a fixed niche",
        body: "retaiyn had no sales team, just a clear niche and no time to reach it. That is exactly the situation Frostbreaker is built for. What holds true for retaiyn here holds for any agency or vendor with a fixed audience: fill in the offer once, let the rest get written from the same source. What that looks like for you is a thirty-minute question, not a project of its own.",
        bullets: [
          "Fits if your niche is fixed and nobody has time to reach it",
          "Fits if you sell to clients, not into an anonymous market",
          "Someone on your side fills in the offer, same as at retaiyn — no sales team required",
          "The first step is the same: your offer, answered once",
        ],
      },
    ],
    ctaTitle: "Talk to us about your niche, not retaiyn's numbers",
    ctaBody:
      "Thirty minutes: your offer, your audience, the first search. No pitch built on someone else's percentages — the ones from retaiyn belong to retaiyn.",
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
        id: "write",
        eyebrow: "Write",
        title: "Eight emails, written out of twelve fields",
        body: "The AI writes the sequence from your offer, along the lines of what works in cold outreach. Even if you have never written a cold email, you end up with a draft you can send. The shape is our suggestion, not a rule: you can add steps, change the intervals and overwrite any piece of copy. The last line is deliberately a small question rather than a meeting request — “book a free intro call” is what almost every website says, our first customer retaiyn included, and at the end of a cold email that is the biggest thing you can ask for.",
        bullets: [
          "Twelve fields, seven of them suggested off your website and confirmed one at a time",
          "Five findings at most, and each one comes with a finished replacement sentence",
          "The two versions of a step have to differ in approach, not in two words",
          "Refine any single step; the LinkedIn template comes out of the same offer",
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
        body: "A kanban board for replies instead of a table with a status column: drag contacts from New to Customer. Every contact has its own deals with value and stage, plus notes, calls and tasks in a timeline, so nothing slips through when you're juggling a lot of conversations. Replies from Instantly are sorted in automatically.",
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
      { id: "sequence", label: "Write all four steps from one offer you filled in once, two independent versions each", tools: ["partial", "partial", "partial", false] },
      { id: "rulecheck", label: "Measure the generated copy against fixed sequence rules and name the breach", tools: [false, false, false, false] },
      { id: "copycheck", label: "Check the copy before it goes out: length, spam words, AI tone, one CTA only", tools: [false, false, "partial", false] },
      { id: "send", label: "Start the campaign and the sequence", tools: [false, false, true, false] },
      { id: "gate", label: "Hold the start back when SPF, DKIM or the bounce rate are off", tools: [false, false, "partial", false] },
      { id: "linkedin", label: "Prepare the LinkedIn message per contact, ready to send", tools: [false, false, false, false] },
      { id: "calls", label: "Call list with number, context and due date", tools: [false, false, false, "partial"] },
      { id: "chain", label: "Email, LinkedIn and phone as one chain with exactly one next step", tools: [false, false, false, false] },
      { id: "outcomes", label: "Attribute a reply to its copy version, through to the meeting rather than the reply", tools: [false, false, "partial", false] },
      { id: "crm", label: "Deals, tasks and notes on the contact", tools: [false, false, false, true] },
    ],
    closing:
      "Apollo delivers addresses. Instantly delivers deliverability. Both tell you what happened, neither tells you why. Frostbreaker writes the copy, sends it and sees the reply to it, on your own accounts, at your own rates, without a cent of markup.",
    ledgerLabel: "The honest ledger",
    ledgerKeep: "Stays: Apollo, Hunter, Instantly, OpenAI, on your accounts, at your rates. We add no markup.",
    ledgerDrop: "Goes: the per-seat CRM subscription and the manual work in between. On a team of six, that is the bigger line item, not ours.",
    footnote:
      "Checked on 13 August 2026 against the providers' public product descriptions and help centres. “Partly” means: present, but not to the extent the row describes. A dash means “not part of the product”, not “works badly”. Apollo, Hunter and Instantly all generate sequence copy with AI. In the writing row, “partly” therefore means: a sequence comes out, but not two independent versions per step from an offer you keep on file.",
  },
  guardMockups: {
    gate: {
      frameTitle: "Before you start",
      blocked: "2 things block the start",
      button: "Create campaign",
      checks: [
        {
          severity: "blocker",
          title: "SPF missing: send.your-domain.com",
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
      note: "There is always exactly one next step. Anyone who replies stops receiving further messages immediately.",
      steps: [
        {
          day: "Day 0",
          title: "The email goes out",
          body: "Personalised icebreaker, verified address, your own mailboxes.",
        },
        {
          day: "Days 3, 5 and 7",
          title: "Three follow-ups run after it",
          body: "The same sequence, the same mailboxes. Anyone who replies stops receiving messages immediately.",
        },
        {
          day: "Day 10 · no reply",
          title: "LinkedIn task appears",
          body: "Only where a profile is on file. Lands in the LinkedIn list, not in a spreadsheet.",
        },
        {
          day: "Day 14 · still quiet",
          title: "The call goes into the call list",
          body: "Only where a number exists, and only once the LinkedIn task is done.",
        },
      ],
    },
    effect: {
      frameTitle: "Effect · by lead list · example view",
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
        { label: "Fintech DACH", value: "27, too few", percent: null },
        { label: "Agencies AT", value: "21, too few", percent: null },
      ],
    },
    copyOutcomes: {
      frameTitle: "Effect \u00b7 by copy \u00b7 example view",
      warning:
        "Reply rate alone is the wrong target: a version can lead and still collect nothing but rejections. The column that counts is meetings.",
      campaign: "One campaign, two versions of the copy",
      campaignCount: "964 contacts",
      bestLabel: "Best version",
      contactsWord: "contacts",
      rows: [
        {
          step: "Step 1",
          variant: "A",
          contacts: "482",
          percent: 6.0,
          replies: "29 \u00b7 6.0%",
          meetings: "6 meetings",
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
          meetings: "17 meetings",
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
          meetings: "4 meetings",
          interested: "7 interested",
          rejections: "5 rejections",
          best: false,
        },
        {
          step: "Step 3",
          variant: "",
          contacts: "26",
          percent: null,
          replies: "26, too few",
          meetings: "",
          interested: "0 interested",
          rejections: "0 rejections",
          best: false,
        },
      ],
      note: "The attribution comes from the sending itself: a reply carries the step of the mail it answers. Below 30 contacts no percentage is shown.",
    },
    linkedin: {
      frameTitle: "LinkedIn \u00b7 message ready",
      name: "retaiyn",
      role: "Customer experience for e-commerce",
      template: "Template: Default \u2605",
      greeting: "Hi,",
      hookLabel: "Opener, generated per contact",
      hook: "You run email, WhatsApp and support as one offer rather than three side by side, which is why I am writing.",
      pitch:
        "I build software that takes off agencies like retaiyn the work that otherwise does not get done because it is split across five separate tools. No pitch, I just wanted to connect first.",
      signoff: "Best, Youssef",
      buttons: ["Copy", "Open profile \u2197", "Mark as sent"],
      note: "The same opener as in the email, already generated and paid for. You send it: LinkedIn has no messaging API, and a tool that sends anyway puts your account at risk.",
    },
  },
  guard: {
    eyebrow: "Deliverability",
    title: "Your sending domain survives the campaign",
    body:
      "Missing SPF, a bounce rate above five percent, a list full of unverified addresses: after that even the mail to the right contact lands in spam, permanently. A burnt domain does not cost you one campaign, it costs you every future one. That is why eleven checks run before the start, four of them can stop it, and the checking continues daily.",
    points: [
      {
        title: "Stopping is not blocking",
        body: "A blocker is something that will certainly go wrong and whose damage stays. A note makes things worse, but neither certainly nor permanently. We keep that line strict: a warning that is sometimes just an opinion gets clicked away by the third time, and the real one goes with it.",
      },
      {
        title: "Daily DNS checks while the campaign runs",
        body: "Every sending domain's DNS records are checked daily. If the bounce rate climbs past five percent in flight, the app pauses the campaign and tells you why.",
      },
    ],
  },
  channels: {
    eyebrow: "Channels",
    title: "Six touches, one lead you already paid for",
    body:
      "Send one email and get no reply, and that's one attempt. Four emails, one LinkedIn message and one call add up to six — all to the same person, each one sent only when the lead hasn't replied to the previous one. That raises your odds of a reply substantially, and it doesn't cost a second lead: you buy the lead once, and the profile and phone number are already available afterward.",
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
        title: "Call note and number before you dial",
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
      "LinkedIn offers no API for messages. Any tool that sends anyway drives a browser remotely, breaks the terms of service and risks suspension. In a product you sell, that means your customers' accounts. We prepare everything, you press send. The same stance as the start check: better one step by hand than a burnt account.",
    phoneNote:
      "You dial with your own phone: Frostbreaker is not a phone system and does not bill call minutes.",
  },
  honesty: {
    title: "You see which version books meetings",
    body:
      "Two versions run, one works better. Without measurement you notice that after weeks, if at all. The app measures each version and tells you which one is ahead: you back the one that books meetings instead of guessing. And it only says so once enough replies are in — twelve mails and one reply is not “8.3%”, it is twelve mails and one reply.",
    points: [
      {
        title: "Same rule for A/B tests",
        body: "No winner until every version has 50 sends and the gap survives a chance test. Every other dashboard will happily tell you variant B tripled your reply rate off nine replies.",
      },
      {
        title: "Reply rate per contact",
        body: "A sequence sends three or four mails to the same person. The one reply should not be divided by four.",
      },
    ],
  },
  // `safeStart` ist am 2026-08-14 mit dem Abschnitt #startklar gefallen --
  // Begruendung in der deutschen Haelfte an derselben Stelle.
  appMockups: {
    dashboard: {
      title: "Dashboard",
      subtitle: "Overview of your lead pipeline",
      sampleBadge: "Example view",
      stats: [
        { label: "Searches", value: "56" },
        { label: "Companies", value: "800" },
        { label: "Contacts", value: "2,000" },
        { label: "With email", value: "1,327" },
        { label: "Replies", value: "138", accent: true },
        { label: "Meetings", value: "12", accent: true },
      ],
      costLabel: "Total lookup cost",
      costValue: "$30.40",
      savings: {
        strong: "≈ 267 hours",
        rest: "of manual research saved",
        cost: "based on 8 minutes of research per contact",
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
        { label: "Employees", value: "11 bis 50" },
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
        { label: "Audience", value: "E-commerce brands" },
        { label: "Company size", value: "11 to 50" },
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
    prospeoSearch: {
      title: "New search",
      subtitle: "Trigger, buying intent and technology in one step.",
      tabs: ["On location (Maps)", "Companies (Hunter)", "Decision-makers (Apollo)", "Triggers (Prospeo)"],
      fields: [
        { label: "Audience", value: "E-commerce brands" },
        { label: "Company size", value: "11 to 50" },
        { label: "Website traffic", value: "growing" },
      ],
      titlesLabel: "Open roles",
      titlesValue: "E-Commerce Manager, Performance Marketing",
      chipsLabel: "Buying intent",
      chips: ["Marketing automation", "E-commerce platform", "Customer service software"],
      techLabel: "Technology used",
      techChips: ["Shopify", "Klaviyo"],
      noteLabel: "What comes back",
      noteValue: "Company and decision maker in one run, description included — resumes automatically once the daily quota refreshes",
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
              name: "E-commerce brand, Shopify",
              role: "Managing director · name left out of this screen",
              phone: "+·· ··· ······",
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
              name: "Online shop, Shopware",
              role: "Owner · name left out of this screen",
              phone: "+·· ··· ······",
              note: "Meeting confirmed, prepare the offer.",
            },
            {
              name: "Agency, Vienna",
              role: "Managing director · name left out of this screen",
              phone: "+·· ··· ······",
              note: "Replied on LinkedIn, asked for a call.",
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
      sampleBadge: "Example view",
      // Dieselben Zahlen wie in der deutschen Haelfte, nicht umgerechnet.
      toolbar: { count: "4 niches · 305 leads", verify: "Verify emails", export: "Add to campaign", csv: "Excel CSV" },
      rows: [
        { name: "E-commerce", domain: "Shopify stores, DACH", contacts: "120 leads", withMail: "112 with email", color: "#8B5CF6" },
        { name: "Marketing agencies", domain: "10 to 50 employees", contacts: "80 leads", withMail: "71 with email", color: "#0EA5E9" },
        { name: "Restaurants", domain: "Vienna and around", contacts: "60 leads", withMail: "38 with email", color: "#F59E0B" },
        { name: "Real estate agents", domain: "Munich, Hamburg, Berlin", contacts: "45 leads", withMail: "34 with email", color: "#10B981" },
      ],
    },
    leadDetail: {
      label: "Expanded lead",
      person: "retaiyn",
      role: "Managing director",
      company: "Customer experience for e-commerce",
      emailLabel: "Email",
      email: "····@retaiyn.com",
      emailBadge: "verified",
      phoneLabel: "Phone",
      phone: "+·· ··· ······",
      phoneBadge: "from Google listing",
      icebreakerLabel: "Icebreaker",
      icebreaker:
        "Email, WhatsApp and support sit on your site as one offer, not as three next to each other.",
    },
    report: {
      badge: "Example view · what the end client sees",
      client: "Client 1",
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
      url: "report.frostbreaker.app/client-1",
      note: "Individual contact details are deliberately hidden from the end client.",
    },
    mailboxes: {
      title: "Mailboxes",
      subtitle: "Warmup and daily volume per mailbox",
      rows: [
        { address: "hello@your-agency.at", state: "Warmup active", volume: "28 / 50", ok: true },
        { address: "office@your-agency.at", state: "Warmup active", volume: "42 / 50", ok: true },
        { address: "contact@your-agency.de", state: "Warming up", volume: "12 / 50", ok: false },
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
          { text: " more important than ever for online shops to be visible online, and that's exactly where our tool can " },
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
        subject: [{ text: "Quick question about your own acquisition" }],
        body: [
          {
            text:
              "Hi,\n\nyour site runs email, WhatsApp and support as one offer, not as three next to each other. In my experience that leaves very little room for winning your own new clients.\n\nThat is what we build a tool for: find decision-makers at e-commerce brands, write to them, follow up.\n\nWant me to send you what that would look like for your audience?\n\nBest,\nYoussef",
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
        { stage: "new", label: "New", cards: [{ initial: "E", name: "E-commerce brand, Shopify", company: "name left out" }] },
        { stage: "contacted", label: "Contacted", cards: [{ initial: "O", name: "Online shop, Shopware", company: "name left out" }] },
        { stage: "replied", label: "Replied", cards: [{ initial: "A", name: "Agency, Vienna", company: "name left out" }] },
        { stage: "customer", label: "Customer", cards: [{ initial: "R", name: "retaiyn", company: "Customer experience for e-commerce" }] },
      ],
      detailLabel: "Agency, Vienna",
      detailSub: "name left out",
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
      initials: "R",
      name: "retaiyn",
      company: "Customer experience for e-commerce",
      message: "Reply classified: interested. That single reply turned into Frostbreaker's first customer.",
      outcome: "Meeting booked",
      when: "",
      dealNote: "Deal created · the next step sits as a task in the CRM, not in a spreadsheet",
    },
    others: [
      { initials: "··", name: "E-commerce brand, Shopify", company: "name left out", status: "reply" },
      { initials: "··", name: "Agency, Vienna", company: "name left out", status: "meeting" },
    ],
    replyLabel: "Reply",
    meetingLabel: "Meeting",
    footer: "Every mailbox in one inbox, synced every five minutes. Every reply is classified and attached to the contact.",
  },
  cta: {
    primary: "Book a call",
    secondary: "Or ask a question first",
    trialNote: "30 minutes, not a sales pitch. We look at your client setup together and set up the first workspace.",
  },
  hero: {
    // Geschrieben, nicht uebersetzt -- siehe die Begruendung im de-Block.
    eyebrow: "For anyone who wants to win customers over email",
    h1Pre: "Find decision-makers. Reach them on ",
    h1Accent: "every channel",
    h1Post: ". Turn them into clients.",
    body: "One tool from a niche to a signed deal: verified decision-makers, a personal opener for each one, the email sequence, the LinkedIn message and the phone number. One workspace per client in their branding, all in the same CRM.",
    dashboardAlt:
      "Frostbreaker dashboard: 800 companies found, 2,000 contacts, 1,327 with an email address, around 267 hours of research saved at 30.40 US dollars in lookup cost",
  },
  heroPromises: [
    {
      title: "From a search term to a meeting",
      body: "Find, write, follow up, close, separately per client account. Without switching tools and without a CSV in between.",
    },
    {
      title: "No lead is without a next step",
      body: "If the lead doesn't reply by email, LinkedIn follows. If the lead doesn't reply on LinkedIn, the call follows. Anyone who replies stops receiving further messages at once.",
    },
    {
      title: "You know what books meetings",
      body: "Which copy version actually worked is something nobody else can tell you. We write it and we see the reply.",
    },
  ],
  systemMap: {
    eyebrow: "The process",
    title: "Four stages, one shared dataset",
    body: "Everything further down this page is one of those four boxes in detail.",
    stages: [
      {
        id: "find",
        label: "Find",
        title: "Decision-makers, not info@ addresses",
        items: [
          "Niche, location, size, the technology they run or the roles they are hiring for",
          "Name, role, verified email, phone and LinkedIn, as far as they are public",
          "Or your own list as a CSV",
        ],
        // Siehe den Kommentar in der deutschen Haelfte: erster Satz = was
        // heute laeuft, zweiter Satz = was wir zusagen. Clay gehoert in den
        // zweiten.
        note: "Google Maps, Hunter, Apollo and Prospeo are connected today. Work with something else, Clay for instance, and you bring it along — we connect it. And if you are not sure which source fits your niche, we help you pick one.",
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
        note: "Anyone who doesn't reply gets the next message through the next channel. Anyone who replies stops receiving further messages immediately.",
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
    body: "For someone who has never seen the app.",
    stepLabel: "Step",
    steps: [
      {
        title: "A niche becomes a list of names",
        body: "Industry, location, size, the technology they run, or who is hiring right now. What comes back is not a list of companies but a list of people: name, role, verified address, phone number.",
        detail: "Role addresses like info@ or office@ are filtered out automatically. You do not cold-email an address nobody is responsible for.",
        cta: "See it for real",
      },
      {
        title: "Every message is personalised",
        body: "An opener per contact, written from the research on that company. You set the source, the tone and the words that must not appear, and test it on a real company before anything is saved.",
        detail: "It is the one line that differs per company, not a mail merge with the company name in the right slot. What follows it — the problem, the payoff, the one question — comes from your offer, in the section right below.",
        cta: "See the agent",
      },
      {
        title: "Copy and technical setup are checked before anything goes out",
        body: "The copy check looks at length, spam words, AI tone and whether there really is only one call to action. The start check then checks the technical side: SPF, DKIM, bounce rate, sendable addresses.",
        detail: "Four of the eleven checks can hold the start back. That does not cost you a campaign, it otherwise costs you the domain.",
        cta: "See the checks",
      },
      {
        title: "If the lead doesn't reply, the LinkedIn message is already written",
        body: "After the first mail and three follow-ups a LinkedIn task appears, but only where a profile is on file. The message is already filled in, with the same opener as the email. If the lead doesn't reply to that either, the call comes up, with number and prep.",
        detail: "Always exactly one next step, never two at once. Anyone who replies stops receiving further messages the same moment.",
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
  offerSection: {
    eyebrow: "Your offer",
    title: "Your offer, the template for every email",
    body: "Company, role, the technology they run, a researched description: everything about the recipient was in the database. What you sell was nowhere. So every campaign started with four empty text fields, and for most people that is where outreach ends. Now you answer that once, and the emails are written from it.",
    points: [
      {
        title: "Twelve questions, answered once",
        body: "What you sell, to whom, where your buyer gets stuck, what they get out of it, what you are asking for. Seven of the twelve answers are read off your own website and offered to you — you confirm them one by one instead of typing them. Five stay empty, and that is deliberate.",
      },
      {
        title: "The app checks your offer and writes a better sentence next to it",
        body: "Five findings at most, and none without a replacement. Not “that is too vague”, but the finished sentence with a button that puts it in. When two fields have swapped places — your proof sitting in the outcome field — the map draws an arrow between them. A form has nowhere to put a finding like that.",
      },
      {
        title: "A draft you can send",
        body: "The AI writes the sequence from your offer: several steps, two independent versions each, one subject line across all of them. Every step is shorter than the one before, because writing more after no reply reads as chasing. The number of steps and the intervals are our suggestion and can be changed. The LinkedIn message comes from the same source.",
      },      {
        title: "A separate cut for every lead list",
        body: "What you sell stays the same whoever you write to. What your recipients are stuck on does not. The AI reads each lead list on its own — the search filters and the researched company descriptions — and suggests the fields that differ from list to list. Two audiences do not need two offers, they need one offer and two cuts.",
      },

    ],
    limitsTitle: "What it does not do for you",
    limits: [
      {
        title: "The five fields a website cannot give you",
        body: "What you send once they say yes, how long it takes them to look, your one question, why buyers hesitate, and the tone: those five are deliberately never suggested. Almost every website says “book a call” in that spot — and a call is exactly what the small question is not. A suggestion there would be a guess, and a guess means something sits in your offer that nobody decided.",
      },
      {
        title: "Empty proof field means no number in the email",
        body: "Leave the proof field empty and it turns into an explicit instruction to claim nothing in the email: no client, no figure, no number of years. A junior would improvise here. An invented reference is not spotted by you, it is spotted by the recipient, and then that contact is gone.",
      },
      {
        title: "The draft waits in the campaign form",
        body: "The eight pieces of copy go into the campaign form. A person reads them there before they go to a thousand addresses, and changes whatever does not fit. The start check then checks the technical side, as it always did.",
      },
    ],
    closing: "This is the work you would otherwise hire someone in sales for and spend half a year training them on: understand the offer, turn it into four emails, write every step twice, and claim nothing that does not hold. How many hours it saves you, we will not say — we have not measured it. What the app does is right here, rule by rule.",
    // Siehe die deutsche Haelfte: steht UEBER der Karte, damit der Absender
    // vor der ersten Prozentzahl gelesen wird.
    humanCheck: "Before any copy goes to a thousand addresses, a person has read it.",
    caseIntro:
      "The offer below belongs to retaiyn, our first client: customer experience for e-commerce brands, meaning AI support, WhatsApp and email marketing as one flow instead of three. The fields are filled with their own sentences — the percentages in there are retaiyn's claims about themselves, not ours.",
    offerMap: {
      frameTitle: "Offer · Example",
      corners: [
        {
          title: "Who writes to whom",
          nodes: [
            { label: "What do you sell?", value: "Customer experience for e-commerce: email, WhatsApp and support connected rather than isolated." },
            { label: "To whom?", value: "E-commerce shops and brands, often already running Klaviyo or WhatsApp." },
            { label: "How should it sound?", value: "Advisory and concrete, no jargon, no hype." },
          ],
        },
        {
          title: "Where the reader is stuck",
          nodes: [
            { label: "What do they struggle with beforehand?", value: "Email, WhatsApp and customer support are treated independently of each other." },
            { label: "Where exactly do they get stuck?", value: "Breaks in the customer journey, unused revenue potential, needlessly high operational effort." },
            { label: "Why does that make buyers hesitate?", value: "Each of the three systems runs on its own, so the break between them is nobody's job." },
          ],
        },
        {
          title: "What they get out of it",
          nodes: [
            { label: "What is different afterwards?", value: "Up to 70% of customer support automated, up to 30% more revenue." },
            { label: "How does the result happen?", value: "Email, WhatsApp and support run as one flow instead of three." },
            { label: "What backs that up?", value: "More than a classic agency: strategic advice with operational excellence." },
          ],
        },
        {
          title: "What you are asking for",
          nodes: [
            { label: "What do you send once they say yes?", value: "A rundown of the three places where email, WhatsApp and support drift apart at your company." },
            { label: "How long does that take them?", value: "90 seconds" },
            { label: "The one question", value: "Book a free intro call." },
          ],
        },
      ],
      listPanel: {
        heading: "Tailor it to a lead list",
        subtitle:
          "Frostbreaker AI reads the companies on a list and suggests what should sound different for them.",
        button: "Pick a list",
        hint: "Rewritten: problem, friction, reason, audience. Reworded only: outcome and mechanism. Numbers and proof stay.",
      },
      hub: {
        name: "Frostbreaker AI",
        state: "fills in from your website and each lead list, then reads the twelve fields against each other",
        button: "Check the offer",
      },
      findingLabel: "The outcome field holds a promise, the proof field holds a slogan. The proof for the promise is nowhere in the offer.",
      note: "Twelve fields, four groups. Every line between them is a rule the offer is checked against.",
    },
    coachFinding: {
      frameTitle: "Offer · Check",
      group: "What you are asking for",
      fieldLabel: "The one question they answer yes or no to",
      severity: "Blocker",
      beforeLabel: "You had written",
      before: "Book a free intro call.",
      verdictLabel: "The finding",
      verdict:
        "On a website that line is right. At the end of a first email it is a meeting request — the biggest thing that email can ask for, and therefore the one that gets passed over most often.",
      proposalLabel: "Instead",
      proposal: "Want me to send you the three places where email, WhatsApp and support drift apart at your company?",
      apply: "Apply",
      dismiss: "Leave it",
      note: "No finding without a replacement, and five at most. More would be a defect list, not a judgement.",
    },
  },
  localReachMockup: {
    typicalLabel: "Typical B2B database",
    frostbreakerLabel: "Frostbreaker, via Google Places",
    notListed: "not listed",
    businesses: [
      { name: "Single location salon", sub: "Google listing with website and phone number" },
      { name: "Trades business, 6 employees", sub: "Google listing, website present" },
      { name: "Solo practice", sub: "Google listing, phone number present" },
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
  },
  qualifiedMockup: {
    typicalLabel: "Typical tool",
    frostbreakerLabel: "Frostbreaker",
    genericNote: "role address, nobody specifically responsible",
    rows: [
      { generic: "info@company.example", name: "Owner", role: "by name, not a role inbox", email: "firstname.lastname@company.example" },
      { generic: "office@practice.example", name: "Practice owner", role: "by name, not a role inbox", email: "firstname.lastname@practice.example" },
      { generic: "contact@salon.example", name: "Salon manager", role: "by name, not a role inbox", email: "firstname.lastname@salon.example" },
    ],
  },
  glossary: {
    SPF: "SPF: a record on your domain that defines which servers are allowed to send email in your name.",
    DKIM: "DKIM: a digital signature on every email that lets the recipient verify it wasn't altered in transit.",
    DMARC: "DMARC: the rule telling recipients what to do with email that fails SPF or DKIM.",
  },
  whoFor: {
    eyebrow: "Who it's for",
    title: "Three ways in",
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
  agency: {
    pageLink: "What that looks like day to day",
    eyebrow: "For agencies",
    title: "Manage multiple clients without opening a new subscription for each one",
    body: "Running lead-gen or cold outreach for your own clients? Each client runs in its own, cleanly separated workspace, in that client's look, and every person on your team gets their own login.",
    features: [
      { id: "workspaces", title: "Own logins, one workspace per client", body: "Every person on the team gets their own login with a role: admin or member. Leads, campaigns and suppression lists run cleanly separated per client, without a separate subscription for each one." },
      { id: "branding", title: "Branding per client workspace", body: "Name, logo and accent color can be set per workspace, so what the client sees looks like the agency's own tool, not something foreign in the background." },
      { id: "reportLink", title: "Shareable report link, no login required for the client", body: "A link per workspace shows aggregated metrics in that client's look, without them needing their own account. Individual contact data is deliberately not shown to the client." },
    ],
    note: "With pure sending tools, multi-client management is usually a separately priced add-on, often with its own price per client workspace, on top of a tool that only handles sending. With Frostbreaker, that's part of the product from day one.",
  },
  agencyMockup: {
    workspacesLabel: "Workspaces",
    active: "active",
    workspaces: [
      { name: "Client 1", color: "#0EA5E9", active: true },
      { name: "Client 2", color: "#8B5CF6", active: false },
      { name: "Client 3", color: "#F59E0B", active: false },
    ],
    brandingLabel: "This workspace's branding",
    brandingValue: "Client 1 · Accent color #0EA5E9",
    reportLinkLabel: "Report link for the client",
    reportUrl: "app.frostbreaker.app/report/client-1",
    copyLabel: "Copy",
  },
  postSend: {
    eyebrow: "CRM",
    title: "Inbox, deals and tasks in one view",
    body: "Every reply is classified and attached to the contact. It becomes a deal with a value and a probability, a task with a due date, a note after the call. Yesterday's call and the email from three weeks ago sit in the same history.",
    features: [
      { id: "replies", title: "One inbox for every mailbox", body: "All connected mailboxes come together in one inbox, synced every five minutes, with an unread counter. Every reply arrives with full text, AI classifies it (interested, not interested, question), and you reply straight from the app. You no longer need to open Instantly for this." },
      { id: "dashboard", title: "Revenue forecast weighted by close probability", body: "Open pipeline, a forecast weighted by close probability, won and lost over the last 30 days, plus due and overdue tasks. For most agencies that replaces a separate CRM subscription." },
      { id: "status", title: "Lead status per contact, no separate CRM needed", body: "Contacted, replied, meeting booked, became a customer, all trackable directly in the leads table." },
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
  suppressionMockup: {
    label: "Automatically checked before sending · example view",
    blocked: { name: "retaiyn", company: "Customer experience for e-commerce", note: "already a customer" },
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
      { day: "Day 0", title: "The observation" },
      { day: "Day 3", title: "Tighter, nothing new" },
      { day: "Day 5", title: "The summary" },
      { day: "Day 7", title: "The last one" },
    ],
    activeLabel: "Active",
  },
  customer: {
    stripLabel: "Working with",
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
    body: "It depends on how many clients you run, not on your leads and not on your workspaces. We name it on the first call. Cancel monthly, no setup fee.",
    note: "Lookups run through your own accounts, at cost price. We add not a cent.",
  },
  why: {
    title: "Why Frostbreaker exists",
    earlyAccess: { title: "You talk to the person building it", body: "We work with a small number of agencies right now, each one closely supported. For you that means: we do the setup together, you message me directly, with no ticket system, and what you are missing goes into the next sprint rather than onto a roadmap. That closeness only exists while the group is small." },
    founderLabel: "From the founder",
    founderQuote: "\"I always wanted to build something of my own. The hardest part was never the idea, it was finding clients: cold calls and emails by hand, hours of research, never knowing if any of it would land. So I built the tool I wish I'd had, and I've never run out of real decision-makers to reach since.\"",
    founderName: "Youssef Tayachi",
    founderRole: "Founder & CEO, Frostbreaker",
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
  caseStudyPage: {
    eyebrow: "Referenz · Eigene Software",
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
    factCard: { fact: "With Frostbreaker, running several clients is part of the product from day one, not a separately priced add-on.", sub: "Lead search, personalization and reporting have to run separately per client anyway. So it stays one amount, however many workspaces you create.", source: "Frostbreaker, our own statement" },
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
