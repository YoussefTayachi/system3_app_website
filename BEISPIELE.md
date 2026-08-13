# Nur zwei Namen: Frostbreaker und RETAIYN

Stand 2026-08-13. **Zur Freigabe. Nichts davon ist umgesetzt** — dieses
Dokument ist die Bestandsaufnahme und die Entscheidungsliste, nicht die
Änderung.

Grundlage: `app/dict.ts` (3.749 Zeilen, DE ab Zeile 10, EN ab Zeile 2270),
`app/_offer-mockups.tsx`, `app/_customers.tsx` und die übrigen
Mockup-Dateien am heutigen Tag.

Setzt die neue Regel aus `POSITIONIERUNG.md` Abschnitt 9 um. Dort steht das
**Warum**, hier steht das **Wo**.

Zeilennummern sind der Stand von heute und wandern. Der haltbare Griff ist
der **Schlüsselname** in `dict.ts`; die Zeile steht nur als Hilfe daneben.

---

## 1. Die Regel in einem Satz

> Auf dieser Website kommen genau zwei Firmen namentlich vor: **Frostbreaker**
> und **RETAIYN**. Alles andere ist entweder abstrakt oder es steht nicht da.

Das ist eine Kehrtwende. `POSITIONIERUNG.md` Abschnitt 9 verlangte bis heute
ausdrücklich **erfundene** Firmennamen in jedem Mockup. Diese Regel ist
ersetzt, mit Begründung, direkt an ihrem Ort — nicht hier, damit niemand die
erfundenen Namen später „wiederherstellt", weil das ältere Dokument es so
verlangt.

**Eine zweite Stelle verlangt sie ebenfalls noch.** `ANGEBOT-VERMARKTUNG.md`
Stufe 2c sagt unter „Fertig, wenn": *„die Regel aus `POSITIONIERUNG.md`
Abschnitt 9 eingehalten ist — nachgebaut, nicht abfotografiert, **erfundene
Firmennamen**, …"*. Diese Zeile ist ab heute falsch und muss auf
`BEISPIELE.md` verweisen. Sie ist hier absichtlich nicht mitgeändert (an
`ANGEBOT-VERMARKTUNG.md` und `dict.ts` arbeiten gerade andere) — **sie steht
als erste Aufgabe in Abschnitt 11.**

---

## 2. Die eine Anordnung, in der beide Namen zugleich stimmen

Die Mockups zeigen Bildschirme der App. Auf jedem stehen zwei Sorten Namen:

| Sorte | Wer das ist | Was heute dort steht |
|---|---|---|
| **Das Konto** | wem der Bildschirm gehört: seine Postfächer, sein Angebot, seine Sende-Domain, seine Zahlen | „eure-agentur.at", „Muster GmbH" |
| **Der Lead** | wen dieses Konto anschreibt | Schreinerei Huber, Nordwind Coffee, Brian Marver … |

Für die erste Sorte gäbe es zwei ehrliche Besetzungen: Frostbreaker (macht
seine eigene Kaltakquise mit der eigenen App) oder RETAIYN (benutzt sie als
Kunde). Für die zweite Sorte gibt es auf den ersten Blick **keine** —
Leads sind Dritte, die nie zugestimmt haben.

Es gibt aber genau eine Anordnung, in der beide Sorten gleichzeitig echt sind:

> **Das gezeigte Konto ist das von Frostbreaker. Der gezeigte Lead ist
> RETAIYN.**

Denn RETAIYN *ist* ein Lead, den Frostbreaker über genau diesen Weg gewonnen
hat. Damit ist jeder Name auf jedem Bildschirm real, einverstanden und
untereinander stimmig — und die Seite erzählt nebenbei die einzige Geschichte,
die sie mit Belegen erzählen kann: **so ist der erste Kunde entstanden.**

Das ist die Faustregel für jede Fundstelle unten. Die Ausnahme sind die
Bildschirme, die das Angebot des *Nutzers* zeigen (`offerSection.offerMap`,
`coachFinding`): dort ist RETAIYN der Kontoinhaber, weil dort ausdrücklich
das Angebot eines Kunden im Formular steht.

---

## 3. Was über RETAIYN feststeht

Wörtlich von deren Seite, vom Betreiber erhoben. **Nichts hier wird
umformuliert, ergänzt oder gerundet.**

- Selbstbeschreibung: „Customer Experience für E-Commerce". „RETAIYN ist mehr
  als eine klassische Agentur. Wir verbinden strategische Beratung mit
  operativer Exzellenz."
- Leistungen: Customer Experience & AI Support, WhatsApp Marketing, E-Mail
  Marketing — verbunden statt isoliert
- Zielgruppe: E-Commerce-Shops und -Brands, häufig schon mit Klaviyo, WhatsApp
  oder einer Supportlösung im Einsatz
- Problem, das sie lösen: „E-Mail, WhatsApp und Customer Support werden bei
  vielen Brands unabhängig voneinander betrachtet. Dadurch entstehen Brüche in
  der Customer Journey, ungenutzte Umsatzpotenziale und unnötig hohe operative
  Aufwände."
- Versprechen: „bis zu 70 % ihres Kundensupports zu automatisieren und bis zu
  30 % Mehrumsatz zu generieren"
- Beleg: „Nach der Betreuung (als Angestellter) von über 200 E-Commerce-Brands
  und einem Kundenportfolio von mehr als 2,5 Mio. € ARR"
- Handlungsaufruf: „Kostenloses Erstgespräch vereinbaren"
- Kontakt: Berat@retaiyn.com

### Eine Richtigstellung, die eingearbeitet gehört

RETAIYN ist eine **Agentur**, kein SaaS-Anbieter und keine
„Customer-Support-App". Ihre eigene Seite sagt das deutlich. Zwei Folgen:

1. `customer.descriptor` in `dict.ts` (Zeile 1967) sagt heute
   „WhatsApp-Marketing und **CRMs** für E-Commerce-Marken". Auf RETAIYNs Seite
   steht an dieser Stelle Customer Experience, AI Support, WhatsApp und
   E-Mail — von CRM-Aufbau steht dort nichts. Dasselbe in `customer.facts`
   und `customer.body`. **Nachziehen an deren Wortlaut.** Ein Kundenabschnitt,
   dessen erste Tatsachenbehauptung der Kunde selbst nicht unterschreiben
   würde, ist schlimmer als keiner.
2. Für `/fuer-agenturen` und für das Angebotsbeispiel ist RETAIYN ideal. Für
   `/fuer-saas` ist es **Frostbreaker selbst** — ein SaaS, das seine eigenen
   Kunden auf genau diesem Weg gewinnt, mit RETAIYN als Beleg dafür, dass es
   funktioniert. Siehe Abschnitt 8.

---

## 4. Die Grenze für RETAIYNs eigene Zahlen

Die **70 %** und die **30 %**, die **200 Brands** und die **2,5 Mio. € ARR**
sind RETAIYNs Aussagen **über sich selbst**. Sie dürfen auf dieser Website an
genau einer Stelle stehen: dort, wo sichtbar ist, dass sie aus RETAIYNs
**Angebotsprofil** stammen — also als Eingabe in ein Formular, das erkennbar
dem Kunden gehört.

Als Ergebnis von Frostbreaker ausgegeben wären sie erfunden. Zwischen
„das hat der Kunde ins Feld getippt" und „das hat unser Werkzeug bewirkt"
liegt der ganze Unterschied, und ein Leser unterscheidet das nur an der
Rahmung, nicht am Wortlaut.

**Faustregel:** steht die Zahl in einem Formularfeld mit Beschriftung → in
Ordnung. Steht sie in einer Kennzahlenkachel, einem Balken oder einer
Auswertung → nicht in Ordnung.

### Und die Regel, die aus dem ganzen Umbau folgt

> **Sobald der Name echt ist, wird jede Zahl daneben zu einer Aussage über
> diese Firma.**

Das ist die teuerste Nebenwirkung dieser Umstellung und der Grund für
Abschnitt 6. Beispiel: `heroIllustration.dealNote` sagt heute „Deal angelegt ·
18.000 € · nächster Schritt: Angebot bis Freitag". Neben „Nordwind Coffee" ist
das eine Attrappe. Neben „RETAIYN" ist es eine Behauptung darüber, was ein
namentlich genannter Kunde bezahlt. Dieselben Zeichen, ein völlig anderer
Vorgang.

---

## 5. Bestandsaufnahme

Sortiert nach Sichtbarkeit auf der Seite, nicht nach Datei. Jede DE-Fundstelle
hat einen **wortgleichen EN-Zwilling** im zweiten Wörterbuchblock (ab Zeile
2270), gleicher Schlüssel. Wo unten nichts anderes steht, gilt die
Entscheidung für beide.

### 5.1 Der erste Bildschirm

| Schlüssel (DE-Zeile) | Was dort steht | Wird ersetzt durch | Begründung |
|---|---|---|---|
| `heroIllustration.featured` (1347) | Lena Vogt · Head of Growth · Nordwind Coffee, Antwortzitat, „Termin gebucht", **„Deal angelegt · 18.000 €"** | **RETAIYN** als antwortender Lead im Frostbreaker-Postfach. **Der Deal-Wert fällt ersatzlos.** Das Zitat nur, wenn ein echter Satz vorliegt — sonst nur die Einstufung und „Termin gebucht" | Der Bildschirm zeigt Frostbreakers Posteingang, der Lead ist der erste Kunde. Zum Deal-Wert siehe Abschnitt 4 |
| `heroIllustration.others` (1360) | Marc Sillner · Sabo Athletics · „reply"; Tobias Reiter · Klarwerk Studios · „meeting" | **Streichen oder anonymisieren.** Zwei Namen sind zwei zu viel — es gibt nur einen nennbaren Kunden | Der Zweck der beiden Zeilen ist „mehrere Postfächer in einem Eingang". Das trägt die Einstufungs-Marke, nicht der Name |
| `hero.factBadge` / `factSource` (1434) | „Agenturen bekommen im Schnitt 42 € zurück …", Quelle Litmus | **Streichen.** Der Platz ist besetzt: `CustomerStrip` steht sieben Zeilen darüber im selben Hero (`page.tsx` 162) | Siehe Abschnitt 9, Punkt 3 — das ist einer der drei Vorschläge und keine Nebenbemerkung |

### 5.2 Der Angebot-Abschnitt (`#angebot`, seit heute live)

Der wichtigste Block. Er zeigt das Angebot eines **Nutzers**, also ist hier
RETAIYN der Kontoinhaber — und hier dürfen ihre eigenen Zahlen stehen.

| Schlüssel (DE-Zeile) | Was dort steht | Wird ersetzt durch |
|---|---|---|
| `offerSection.offerMap.corners` (1652) | Erfundenes Angebot: „Wir bauen die Anfrageformulare von Onlineshops um", Shopware-Händler, neun Pflichtfelder, „Bei **Nordwind Coffee** schicken seitdem deutlich mehr Besucher die Anfrage ab" | **RETAIYNs Angebotsprofil, Feld für Feld aus deren eigenen Sätzen.** Siehe den ausformulierten Vorschlag unten |
| `offerSection.offerMap.findingLabel` (1691) | „Dein Beleg steht im Ergebnisfeld — und im Belegfeld steht ein Wahlspruch." | **Bleibt wörtlich.** Er beschreibt den Befund, nicht die Firma |
| `offerSection.coachFinding` (1694) | Erfundener Befund: „Hast du nächste Woche 15 Minuten …" → „Soll ich dir die drei Felder schicken …" | **RETAIYNs echter Handlungsaufruf** „Kostenloses Erstgespräch vereinbaren" als das *Vorher*. Das ist eine Terminbitte, wörtlich von deren Seite — genau der Befund, den der Coach findet |
| `_offer-mockups.tsx`, `DEMO_OFFER_MAP` / `DEMO_COACH_FINDING` (660–720) | Dieselben erfundenen Texte, dazu **„34 % mehr abgeschickte Anfragen bei Nordwind Coffee, in acht Wochen"** | **Mitziehen oder löschen.** Der Dateikopf sagt selbst, wer sie stehen lässt, hat zwei Wahrheiten — jetzt hätte er zwei Wahrheiten in zwei Welten |

**Der Vorschlag im Wortlaut**, weil er der wertvollste Fund dieser
Bestandsaufnahme ist: das Bild soll einen **vertauschten Beleg** zeigen. Mit
RETAIYNs echtem Material entsteht dieser Fehler von allein, ohne dass ein
Wort erfunden werden muss.

| Feld | Inhalt (alles wörtlich von retaiyn.com) |
|---|---|
| Was verkaufst du? | „Customer Experience für E-Commerce: E-Mail, WhatsApp und Support verbunden statt isoliert" |
| An wen? | „E-Commerce-Shops und -Brands, häufig schon mit Klaviyo oder WhatsApp im Einsatz" |
| Welches Problem hat er vorher? | „E-Mail, WhatsApp und Customer Support werden unabhängig voneinander betrachtet" |
| Woran bleibt er hängen? | „Brüche in der Customer Journey, ungenutzte Umsatzpotenziale, unnötig hohe operative Aufwände" |
| Was ist danach anders? | „bis zu 70 % des Kundensupports automatisiert, bis zu 30 % Mehrumsatz" |
| **Womit kannst du das belegen?** | **„Mehr als eine klassische Agentur: strategische Beratung mit operativer Exzellenz."** ← der Wahlspruch im Belegfeld |
| Die eine Frage | „Kostenloses Erstgespräch vereinbaren" ← die Terminbitte, die der Coach beanstandet |

Der bernsteinfarbene Pfeil zeigt dann auf das, was fehlt: **„Über 200 betreute
Brands, 2,5 Mio. € ARR im Portfolio"** ist der Beleg — und der steht im
Angebot an keiner Stelle, an der er wirkt. Das ist derselbe Fehler, den der
Betreiber am 2026-08-13 im eigenen Angebot gemacht hat, nur diesmal mit
echtem Material. Und es hält die Grenze aus Abschnitt 4 ein: die 70 %, die
30 %, die 200 und die 2,5 Mio. stehen sichtbar **in Formularfeldern eines
Kundenangebots**, nicht in einer Auswertung.

### 5.3 Die Lead-Bildschirme (Konto = Frostbreaker, Lead = RETAIYN)

| Schlüssel (DE-Zeile) | Was dort steht | Wird ersetzt durch |
|---|---|---|
| `guardMockups.linkedin` (816) | **Brian Marver · Co-Founder & CEO · 5 Star Nutrition**, Aufhänger über drei Lager 2024, Pitch nennt die Firma erneut | **RETAIYN.** Aufhänger aus deren eigener Positionierung („E-Mail, WhatsApp und Support laufen bei vielen Brands nebeneinander") — eine Beobachtung, keine Schmeichelei, genau wie die Verbotswörter-Liste es verlangt. **Siehe Warnung unten** |
| `appMockups.leadDetail` (1210) | Markus Huber · Inhaber · Schreinerei Huber, `m.huber@…`, Telefon, Icebreaker über Terminanfragen | **RETAIYN** mit Rolle und Aufhänger aus deren Seite |
| `appMockups.leads.rows` (1204) | Vier Betriebe mit Domains (`schreinerei-huber.at` …) | **Eine Zeile RETAIYN**, die übrigen ohne Namen (nur Farbpunkt, Kontaktzahl, „mit E-Mail"). Der Zweck der Tabelle ist die Spalte, nicht die Firma |
| `appMockups.calls.groups` (1113) | Drei Betriebe mit Rolle, **erfundenen Telefonnummern** und Gesprächsnotizen | **Eine Zeile RETAIYN**, Rest ohne Namen. **Keine Telefonnummer.** Eine erfundene Nummer neben einem echten Firmennamen kann eine fremde, echte Nummer treffen |
| `appMockups.pipeline.columns` (1317) + `detailLabel`/`detailSub` (1330) | Vier Personen/Firmen über vier Spalten | **RETAIYN in der Spalte „Kunde"** — das stimmt buchstäblich. Die übrigen drei Karten ohne Namen, nur Initiale und Farbe |
| `appMockups.copyCheck.good` (1294) | Gute Mail an „Schreinerei Huber", Fuhrpark und Ersatzteile, Absender „Julia" | **Frostbreakers eigene Mail an RETAIYN**, Absender Youssef. Der schlechte Entwurf daneben trägt keine Namen und bleibt unverändert |
| `suppressionMockup.blocked` (1878) | Maria Fenninger · Café Feinkost · „bereits Kunde" | **RETAIYN · „bereits Kunde".** Der genaueste Beleg, den es dafür gibt: RETAIYN *darf* keine Kaltmail mehr bekommen. Kostet nichts und ist wahr |

**Warnung zu Personennamen.** Die Zustimmung des Betreibers betrifft
RETAIYN als **Firma**. Ob der auf deren Seite genannte Ansprechpartner damit
einverstanden ist, dass sein Name in fremder Werbung als Empfänger einer
Kaltmail auftaucht, ist eine **zweite Frage** und liegt nicht vor. Bis sie
schriftlich beantwortet ist: **Firmenname und Rolle, kein Personenname.**
Das ist keine Formalie — es ist genau die Regel, mit der die Seite in
`app/dict.ts` Zeile 1005 ihre eigenen Mockups begründet.

**Und ein eigener Befund zu `guardMockups.linkedin`:** „Brian Marver ·
Co-Founder & CEO · 5 Star Nutrition" liest sich nicht wie ein erfundener
Name. Falls das eine reale Person bei einem realen Unternehmen ist, steht sie
seit Monaten ohne Einwilligung als Empfänger einer Kaltakquise-Nachricht auf
einer öffentlichen Marketingseite — auf derselben Seite, die drei Abschnitte
weiter mit Datensparsamkeit wirbt. **Das ist unabhängig von der neuen Regel zu
prüfen und im Zweifel sofort zu entfernen**, nicht erst im Zuge dieses Umbaus.

### 5.4 Die Konto-Bildschirme (Konto = Frostbreaker)

| Schlüssel (DE-Zeile) | Was dort steht | Wird ersetzt durch |
|---|---|---|
| `guardMockups.gate.checks[0]` (666) | „SPF fehlt: **send.muster-gmbh.de**" | Frostbreakers echte Sende-Subdomain, oder zweite Person („send.deine-domain.de"). **Nicht raten** — auch eine Domain ist eine Tatsachenbehauptung |
| `appMockups.mailboxes.rows` (1247) | `markus@eure-agentur.at`, `office@eure-agentur.at`, `hallo@eure-agentur.de` | Frostbreakers eigene Postfach-Struktur, oder ohne Namensteil. Die Aussage ist Warmup und Tagesvolumen |
| `deliverabilityMockup.domain` (1885) | `eure-agentur-domain.de` | Dasselbe. Bereits in zweiter Person, also der kleinste Eingriff |
| `agencyMockup.workspaces` (1785) | Kunde: **Muster GmbH** · **Beispiel AG** · **Nordwind KG**, dazu `brandingValue` | **Gar keine Namen.** Siehe Abschnitt 7 — hier ist weniger die richtige Antwort |
| `appMockups.report` (1228) | Endkunden-Bericht für **Muster GmbH**, `report.frostbreaker.app/muster-gmbh` | **Offene Frage** (Abschnitt 10). Weder Frostbreaker noch RETAIYN ist eine Agentur mit Endkunden in dieser Rolle |

### 5.5 Suchmasken — keine Firmennamen, aber drei Welten

| Schlüssel (DE-Zeile) | Was dort steht | Entscheidung |
|---|---|---|
| `appMockups.apolloSearch.fields` (1092) | „Nahrungsergänzung", Titel Founder/E-Commerce Manager, Technik Shopify + Klaviyo | **Auf E-Commerce-Marken stellen.** Shopify + Klaviyo steht schon da — das *ist* RETAIYNs Zielgruppe und damit auch Frostbreakers. Nur das Zielgruppenfeld wandert |
| `appMockups.corporateSearch.fields` (1074) | „Marketing Services", Berlin, 11–50, Stichwörter „Performance, E-Commerce" | **Bleibt fast wie es ist.** Das ist bereits die Agentursuche und passt zu Frostbreakers eigener Nische |
| `appMockups.search.fields` (1056) | „Fahrschule", Hamburg, 10.000 m | **Bleibt bewusst der Ausreißer.** Der Maps-Weg existiert auf der Seite genau dafür, dass das Suchfeld frei ist und auch Betriebe findet, die in keiner Datenbank stehen. Mit einer E-Commerce-Marke im Feld verschwindet das Argument. **Der Grund gehört als Kommentar daneben**, sonst „vereinheitlicht" ihn die nächste Person weg |

Suchbegriffe sind keine Firmennamen. Sie fallen nicht unter die Regel — sie
stehen hier nur, weil drei unverbundene Branchen auf einer Seite denselben
Schaden anrichten wie drei erfundene Firmen: der Leser lernt nichts wieder.

---

## 6. Die Zahlen, für die es keinen Ersatz gibt

**Das ist die wichtigste Frage dieser Bestandsaufnahme.** Für die erfundenen
Firmennamen gibt es einen Ersatz. Für die erfundenen **Ergebniszahlen** gibt
es keinen: der Betreiber hat keine veröffentlichbaren Kampagnenergebnisse
genannt, und `customer.pending` in `dict.ts` sagt das über RETAIYN sogar
ausdrücklich („Was das bei RETAIYN gebracht hat, steht hier, sobald genug
gemessen ist").

Die Empfehlung ist deshalb **nicht** „ersetzen", sondern für jede Zahl eine
von drei Behandlungen:

- **A — Weglassen.** Die Zahl trägt das Bild nicht.
- **B — Kennzeichnen.** Die Zahl trägt das Bild, aber der Rahmen muss sie
  sichtbar als Beispiel ausweisen.
- **C — Durch eine echte eigene Zahl ersetzen.** Es gibt eine, sie steht nur
  woanders.

| Schlüssel | Zahl | Behandlung |
|---|---|---|
| `heroIllustration.dealNote` | „Deal angelegt · **18.000 €**" | **A.** Neben einem echten Kundennamen ist das eine Aussage über dessen Ausgaben. Der Satz funktioniert ohne den Betrag |
| `guardMockups.copyOutcomes.rows` | 482/482/831/26 Kontakte, 6,0 % / 10,6 % / 2,6 %, 6 / 17 / 4 Termine | **B, dringend.** Das ist laut `POSITIONIERUNG.md` das wichtigste Bild der Seite — und das einzige große Zahlenbild **ohne** „Beispielansicht"-Marke, während `appMockups.dashboard`, `heroIllustration` und `verification` je eine tragen. Marke ergänzen. Die „zu wenig"-Zeile und die 30er-Schwelle sind echte Mechanik und bleiben |
| `guardMockups.copyOutcomes.campaign` | „Kunde: **Nordwind Coffee** · Wiederverkäufer DACH" | Auf Frostbreakers eigene Kampagne stellen. **Kein Kundenname an einer Ergebnistabelle** — sonst liest sich die Zeile darunter als RETAIYNs Ergebnis |
| `guardMockups.effect` | 2.840 / 214 / **7,5 %**, dazu fünf Listen mit 11,4 % / 8,2 % / 6,6 % | **B.** Dieselbe Marke. Die Listennamen („Shopify-Brands DACH", „Agenturen AT") dürfen bleiben — das sind Segmente, keine Firmen, und sie beschreiben Frostbreakers echte Zielgruppen |
| `appMockups.dashboard.stats` | 62 / 890 / 2.430 / 1.612 / 168 / 15 | **C.** `caseStudyPage.stats` trägt echte Zahlen aus dem laufenden Betrieb: 800+ Firmen, 2.000+ Kontakte, 350+ verifizierte Adressen. Die Mockup-Zahlen liegen **darüber** — zwei Seiten derselben Website widersprechen sich. Angleichen, dann ist es Frostbreakers echtes Konto |
| `appMockups.dashboard.savings` | „≈ 324 Stunden", „**entspricht rund 14.500 € Personalkosten**" | **A.** Ein Lohnkostenvergleich, den `ANGEBOT-VERMARKTUNG.md` unter „Was ich bewusst weglasse" ausdrücklich verwirft, und den der Rechner am 2026-08-06 aus demselben Grund verloren hat. Er steht hier weiter im Bild |
| `appMockups.report.stats` | 1.240 / 86 / 9, „Ziel: **9 von 10 Meetings**", Fortschritt 90 % | **B**, plus offene Frage 10.2 |
| `verification.report*` | 105 geprüft, 12 ungültig, **96 % Zustellrate** | **B, vorhanden.** `reportBadge: "Beispielansicht"` steht schon da. Nichts zu tun |
| `verification.fact` / `factSource` | „etwa **doppelt so oft**", Quelle: „Branchen-Benchmarks E-Mail-Zustellbarkeit, **2026**" | **A.** Das ist keine Quelle, das ist die Form einer Quelle. Wer „Branchen-Benchmarks" schreibt, nennt niemanden |
| `startPage.factCard.source` | „Marktvergleich White-Label-Cold-Email-Tools, 2026" | **A**, aus demselben Grund |
| `suppressionMockup.count` | „**312** Kontakte auf der Sperrliste" | **B.** Harmlos, solange die Marke steht |
| `guardMockups.gate.checks` | 6,4 % (32 von 500), 118 von 406, 164 Wörter | **Bleiben.** Das sind Diagnosen und Schwellen, keine Ergebnisse — sie versprechen nichts. Die 5-%-Schwelle ist echt |

**Die zwei erfundenen Quellenangaben sind der schärfste Fund dieser Liste.**
Ein erfundener Firmenname in einem Mockup ist als Attrappe erkennbar. Eine
Zeile, die „Quelle:" sagt und keine nennt, ist es nicht — sie leiht sich
Autorität, die es nicht gibt, auf einer Seite, deren einziges
Unterscheidungsmerkmal Ehrlichkeit ist. Beide gehören raus, unabhängig von
der Namensregel.

---

## 7. Drei Stellen, an denen keiner der beiden Namen passt

Nicht jede Fundstelle lässt sich besetzen. An diesen dreien ist **weniger**
die richtige Antwort, und das ist kein Verlust:

1. **`localReachMockup.businesses`** (1718) — Frisör Kaiser, Schreinerei
   Huber, Zahnarztpraxis Dr. Berger. Die Aussage ist „lokale Betriebe, die in
   keiner B2B-Datenbank stehen". Weder Frostbreaker noch RETAIYN ist so ein
   Betrieb. **Die Namen streichen, die Kategorien behalten** — „Einzelsalon,
   1 Standort", „Handwerksbetrieb, 6 Mitarbeitende", „Einzelpraxis" tragen das
   Argument vollständig. Die Namensspalte trug es nie.
2. **`qualifiedMockup.rows`** (1753) — `info@schreinerei-huber.de` →
   `m.huber@schreinerei-huber.de`. Die Aussage ist die **Form** der Adresse,
   nicht die Firma. **Auf Platzhalterdomains stellen**, keine Personennamen.
3. **`agencyMockup.workspaces`** (1785) — Muster GmbH, Beispiel AG, Nordwind
   KG. Das ist die Kundenliste einer Agentur. Frostbreaker ist keine; RETAIYN
   ist eine, aber ihre Kunden sind Dritte, die niemand nennen darf. **Ohne
   Namen**: drei Farbpunkte und „Kunde 1/2/3" sagen „drei getrennte
   Workspaces" genauso vollständig.

Merksatz für die drei: **wo der Name nichts erklärt, erklärt sein Wegfall
auch nichts weniger.**

---

## 8. `/fuer-saas` bekommt Frostbreaker, nicht RETAIYN

Die Route steht (`app/fuer-saas/`), die Texte fehlen noch
(`_placeholder.ts`). Für diese Seite ist **Frostbreaker selbst** das
Beispiel:

- RETAIYN ist eine Agentur, keine SaaS. Sie auf einer SaaS-Seite als
  „jemand wie du" zu zeigen, wäre genau die Sorte kleiner Unschärfe, die ein
  Fachkäufer in zehn Sekunden auf retaiyn.com nachprüft.
- Frostbreaker ist ein SaaS mit einem Produkt und einer Zielgruppe, das seine
  eigenen Kunden mit der eigenen App gewinnt. Der Höhepunkt der Seite ist laut
  `ANGEBOT-VERMARKTUNG.md` Stufe 5 der Abschnitt `learning` („ein Angebot
  heißt: die Auswertung lohnt sich") — und ein Anbieter, der sein eigenes
  Angebot seit Monaten unverändert verschickt, ist dafür der einzige Beleg,
  den es gibt.
- **RETAIYN kommt trotzdem vor, aber in der richtigen Rolle:** nicht als
  Beispielnutzer, sondern als der Kunde, den Frostbreaker auf diesem Weg
  gewonnen hat. Das ist stärker als eine Segmentkarte, weil es der Beweis für
  die Behauptung der Seite ist statt ihrer Wiederholung.

Der Kopfkommentar in `app/fuer-saas/page.tsx` hat das bereits entschieden
(„die bisherigen Kunden sind keine SaaS-Anbieter", deshalb kein
`CustomerStrip` auf dieser Seite). **Diese Entscheidung wird durch die neue
Regel bestätigt, nicht aufgehoben** — eine Sache weniger zu ändern.

---

## 9. Zwei Dinge, die nicht angefasst werden

1. **`_customers.tsx` und der `customer`-Block in `dict.ts`.** RETAIYN steht
   dort seit dem 2026-08-09 als echter, benannter Kunde, mit ausdrücklicher
   Begründung im Kopfkommentar und ohne Ergebniszahl. Das ist bereits die neue
   Regel, bevor es sie gab. **Einzige Ausnahme:** die Sachkorrektur aus
   Abschnitt 3 (`descriptor`, `facts`, `body` sagen „CRMs", RETAIYNs Seite
   sagt Customer Experience und AI Support).
2. **`caseStudyPage`.** Die Seite handelt von Frostbreaker selbst, mit
   eigenen, live nachprüfbaren Zahlen und einem Absatz, der offen sagt, was
   sie *nicht* belegen. Regelkonform, unverändert lassen — aber ihre Zahlen
   sind der Maßstab, an dem `appMockups.dashboard` sich auszurichten hat
   (Abschnitt 6).

### Und eine Regel für die englische Hälfte

Die EN-Seite **übersetzt** die erfundenen Namen heute (Schreinerei Huber →
Huber Joinery, Zahnarztpraxis Dr. Berger → Dr. Berger Dental). Mit echten
Namen ist das vorbei: **RETAIYN heißt in beiden Sprachen RETAIYN,
Frostbreaker heißt Frostbreaker.** Das gehört ausdrücklich hingeschrieben,
weil die bestehende Datei genau das andere Muster vorlebt und die nächste
Person es pflichtbewusst fortsetzen würde.

---

## 10. Offene Fragen an den Betreiber

Drei. Keine davon blockiert die Bestandsaufnahme, alle drei blockieren
einzelne Fundstellen:

1. **Darf der Ansprechpartner bei RETAIYN namentlich genannt werden?**
   Betrifft `guardMockups.linkedin`, `appMockups.leadDetail`,
   `appMockups.pipeline`. Bis zur Antwort: Firma und Rolle, kein Name.
2. **Was steht im Endkunden-Report (`appMockups.report`)?** Er zeigt die
   Ansicht, die eine Agentur ihrem Kunden gibt. Frostbreaker hat diese Rolle
   nicht, und RETAIYNs Kunden dürfen nicht genannt werden. Entweder ohne
   Firmennamen, oder der Bildschirm zeigt den Report, den **RETAIYN von
   Frostbreaker** bekommt — falls es den gibt.
3. **Wie lautet Frostbreakers echte Sende-Domain und Postfachstruktur?**
   Betrifft `guardMockups.gate`, `appMockups.mailboxes`,
   `deliverabilityMockup`. Eine geratene Domain ist unter der neuen Regel
   dasselbe Problem wie eine geratene Firma.

---

## 11. Reihenfolge

Nach Risiko, nicht nach Aufwand. Jeder Schritt ist für sich auslieferbar.

0. **Die veraltete Zeile in `ANGEBOT-VERMARKTUNG.md` Stufe 2c nachziehen**
   (Abschnitt 1). Eine Zeile. Solange sie „erfundene Firmennamen" verlangt,
   arbeitet die eigene Auftragsliste gegen diese Umstellung.
1. **`guardMockups.linkedin` prüfen und im Zweifel entschärfen.** Ein
   möglicherweise realer Personenname ohne Einwilligung ist das einzige
   Rechtsrisiko in dieser Liste und wartet auf nichts.
2. **Die beiden erfundenen Quellenangaben streichen**
   (`verification.factSource`, `startPage.factCard.source`). Zwei Zeilen,
   sofort, keine Abhängigkeit.
3. **Die Zahlen aus Abschnitt 6 behandeln** — erst A (weglassen), dann B
   (kennzeichnen). Das muss **vor** dem Namenstausch passieren: sobald echte
   Namen neben erfundenen Zahlen stehen, ist der Schaden größer als vorher.
4. **Den Angebot-Abschnitt auf RETAIYN stellen** (5.2). Der sichtbarste
   Gewinn und der einzige Ort, an dem echtes Material einen erfundenen Text
   eins zu eins ersetzt.
5. **Die Lead-Bildschirme** (5.3), **die Konto-Bildschirme** (5.4), **die drei
   Streichungen** (7). Reine Fleißarbeit, DE und EN parallel.
6. **`/fuer-saas` texten** (8) — mit Frostbreaker als Beispiel und RETAIYN als
   Beleg.

Punkt 3 vor Punkt 4 ist die einzige Reihenfolge, die zwingend ist. Der Rest
ist Bequemlichkeit.
