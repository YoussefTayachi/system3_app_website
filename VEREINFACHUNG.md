# Die Seite kürzen — und danach die sechs Punkte des Betreibers

**Status: zur Freigabe.** Nichts davon ist umgesetzt. Stand des Codes beim
Schreiben: `app/page.tsx` 1093 Zeilen mit **20 Abschnitten**, `app/dict.ts`
4477 Zeilen (deutsche Hälfte: 9–2606), FAQ mit **17 Einträgen**.

---

## 0. Der Kern in fünf Sätzen

`POSITIONIERUNG.md` Abschnitt 3 hat am 06.08. eine Startseite mit **zwölf**
Abschnitten geplant. Heute stehen dort **zwanzig**. Jeder einzelne ist
begründet dazugekommen, keiner ist je weggenommen worden — deshalb ist der
Auftrag des Betreibers nicht "kürzen", sondern **den geplanten Zustand
herstellen**.

Der Rest folgt daraus: **die Punkte 2 bis 6 fügen alle wieder Text hinzu.**
Wer sie vor Punkt 1 baut, macht die Seite länger, nicht klarer. Deshalb ist
die Reihenfolge unten nicht verhandelbar, auch wenn die einzelnen Aufträge es
sind.

---

# PUNKT 1 — Die Streichliste

## 1.1 Wiederholungs-Bestandsaufnahme

Neun Aussagen, die auf der Startseite mehr als einmal stehen. Sortiert nach
Anzahl der Fundstellen.

### A. „Ein Werkzeug von der Nische bis zum Auftrag"

| Fundstelle | Schlüssel |
|---|---|
| Hero, Fließtext | `hero.body` — „Ein Werkzeug von der Nische bis zum Auftrag" |
| **Systemkarte, Überschrift** | `systemMap.title` — „Von der Nische bis zum Auftrag, ohne das Werkzeug zu wechseln" |
| Hero-Versprechen 1 | `heroPromises[0]` — „Vom Suchbegriff zum Termin … ohne das Werkzeug zu wechseln" |
| Rundgang, Überschrift | `walkthrough.title` — „Was zwischen deiner Nische und dem ersten Termin passiert" |
| Warum-Abschnitt | `why.poweredBy.title` — „Ein Werkzeug statt vier" + `why.body` |
| Vergleichstabelle | `compare.closing` |

`hero.body` und `systemMap.title` sind **wortgleich**, mit einem Abschnitt
Abstand. Das ist die deutlichste Doppelung der ganzen Seite.

**Stärkste Stelle:** `hero.body`. Der Satz gehört über die Falz.
**Fällt:** `systemMap.title` bekommt eine andere Überschrift (siehe Punkt 2,
sie wird dort ohnehin angefasst). `why.poweredBy` fällt als Karte ganz weg,
`why.body` ebenso.

### B. „Wer antwortet, fällt sofort raus" (die Kette)

| Fundstelle | Schlüssel |
|---|---|
| Hero-Versprechen 2 | `heroPromises[1]` |
| Systemkarte, Stufe 2 | `systemMap.stages[1].note` |
| **Rundgang, Schritt 4** | `walkthrough.steps[3].body` + `.detail` |
| **Abschnitt `#kette`, komplett** | `chain.title`, `chain.points[0..2]` |
| Drei Kanäle | `channels.protectionBody` |

`chain.points[0]` („Immer genau ein nächster Schritt") und
`walkthrough.steps[3].detail` („Immer genau ein nächster Schritt, nie zwei
gleichzeitig") sind derselbe Satz. `chain.points[1]` und
`systemMap.stages[1].note` ebenfalls.

**Stärkste Stelle:** Rundgang Schritt 4 — der Schritt hat ein Bild, steht im
Ablauf an der richtigen Stelle und sagt alles, was `#kette` sagt.
**Fällt:** der ganze Abschnitt `#kette`.

### C. „Apollo und Instantly bleiben, wir ersetzen sie nicht"

| Fundstelle | Schlüssel |
|---|---|
| Hero-Versprechen 3 | `heroPromises[2]` |
| Erstes Bild der Seite | `CopyOutcomesHighlight` im Hero |
| Systemkarte, Rückkopplung | `systemMap.loop.body` |
| Rundgang, Schritt 6 | `walkthrough.steps[5].detail` |
| Kette | `chain.body` — „Instantly kennt dein Telefon nicht …" |
| **Vergleichstabelle `#ergaenzt`** | `compare.title`, `.closing`, `.ledgerKeep`, `.ledgerDrop` |
| **Abschnitt `#alltag`** | `dailyDiff.body`, `dailyDiff.note` |
| FAQ | zwei Einträge (siehe 1.4) |

**Zwei volle Abschnitte hintereinander beantworten denselben Einwand:**
`#alltag` (8 Schritte gegen 5) und `#ergaenzt` (Vergleichstabelle mit 14
Zeilen). `dailyDiff.note` sagt wörtlich, was `compare.closing` sagt.

**Stärkste Stelle:** `#ergaenzt`. Die Tabelle nennt als einzige Stelle der
Seite den Posten, der tatsächlich wegfällt (`ledgerDrop`: das CRM-Abo je
Sitzplatz). Das ist das Geldargument.
**Fällt:** `#alltag` komplett. Es trägt nichts, was die Tabelle nicht trägt.

### D. „Wir zeigen, welche Textfassung Termine gebracht hat"

| Fundstelle | Schlüssel |
|---|---|
| **Erstes Bild der Seite** | `CopyOutcomesHighlight` (Hero) |
| Hero-Versprechen 3 | `heroPromises[2]` |
| Systemkarte, Rückkopplung | `systemMap.loop` (die ganze korallfarbene Kachel) |
| **Rundgang, Schritt 6** | `walkthrough.steps[5]` + `CopyOutcomesMockup` |
| Vergleichstabelle | `compare.rows` id `outcomes` |

Viermal, bevor der Leser den Rundgang zu Ende gescrollt hat. Das Bild im Hero
(`CopyOutcomesHighlight`) ist eine Vorschau auf ein Bild, das vier
Bildschirme tiefer noch einmal kommt.

**Stärkste Stelle:** Rundgang Schritt 6. `POSITIONIERUNG.md` nennt ihn den
Höhepunkt des Rundgangs, und er hat das Bild.
**Fällt:** `CopyOutcomesHighlight` aus dem Hero. `systemMap.loop` **bleibt** —
`POSITIONIERUNG.md` Abschnitt 3 begründet sie als die eigentliche Aussage der
Karte, und diese Begründung trägt weiter.

### E. BYOK / Selbstkostenpreis / kein Aufschlag

| Fundstelle | Schlüssel |
|---|---|
| **Vergleichstabelle** | `compare.ledgerKeep`, `.closing`, `footnote` |
| Abschnitt `#integrationen` | `integrations.sourcesLabel` („Quellen, auf euren Zugängen") |
| Vertrauens-Abschnitt | `trustBadges[1]` — „BYOK-Kostenkontrolle" |
| Warum-Abschnitt | `why.body` |
| Alltag | `dailyDiff.note` |
| FAQ | **drei** Einträge (siehe 1.4) |

**Stärkste Stelle:** `compare.ledgerKeep`. Zwei Zeilen, die die Rechnung
aufmachen statt sie zu behaupten.
**Fällt:** `#integrationen` als Abschnitt, `trustBadges[1]`, `why.body`, zwei
der drei FAQ-Einträge.

### F. Die Lead-Quellen (Google Maps, Hunter, Apollo, Prospeo)

| Fundstelle | Schlüssel |
|---|---|
| Systemkarte, Stufe 1 | `systemMap.stages[0].items` — vier Kästchen |
| **Abschnitt Suchwege** | `searchModes.modes[0..3]` — vier Karten, je 5 Punkte |
| Suchwege, Anhang | `sourcesExtra.items[0..3]` — vier weitere Karten |
| `#integrationen` | `integrations.sources` |
| Bilder | `appMockups.search`, `.corporateSearch`, `.apolloSearch` — dreimal dieselbe Reiterleiste |
| **`/funktionen`** | `featuresPage.groups.find` und `.tech` und `.enrich` |
| FAQ | zwei Einträge |

Der Abschnitt `searchModes` + `sourcesExtra` ist der textlastigste Block der
Startseite: **acht Karten, zwanzig Aufzählungspunkte, eine bedienbare
Suchmaske.** Und er ist auf `/funktionen` bereits vollständig abgebildet:
`featuresPage.groups.find` ist `searchModes` in kurz, `.tech` ist
`sourcesExtra.items[0]`, `.enrich` ist `sourcesExtra.items[2]`,
`.send`/`.protect` decken `sourcesExtra.items[3]` ab.

**Stärkste Stelle:** `/funktionen`, Gruppen `find` und `tech`.
**Fällt:** der ganze Suchwege-Abschnitt von der Startseite, samt
`sourcesExtra`. Das ist zugleich Punkt 2 des Betreibers — siehe dort.

### G. „Keine info@-Adressen, jeder Lead ist eine Person"

| Fundstelle | Schlüssel |
|---|---|
| Systemkarte | `systemMap.stages[0].title` — „Entscheider statt info@-Adressen" |
| **Rundgang, Schritt 1** | `walkthrough.steps[0].detail` |
| Suchwege-Anhang | `sourcesExtra.items[2]` |
| FAQ | ein Eintrag |
| `/funktionen` | `featuresPage.groups.enrich` |

**Stärkste Stelle:** Rundgang Schritt 1. **Fällt:** `sourcesExtra.items[2]`
(mit dem ganzen Block), der FAQ-Eintrag.

### H. Adressprüfung, SPF/DKIM, Bounce-Quote

| Fundstelle | Schlüssel |
|---|---|
| **Abschnitt `#torwart`** | `guard.body`, `guard.points[0..2]` + `GateMockup` |
| Rundgang, Schritt 3 | `walkthrough.steps[2]` |
| CRM-Abschnitt | `postSend.features[3]` — „SPF, DKIM, DMARC: geprüft, bevor ihr sendet" |
| Drei Kanäle | `channels.cards[0].app[0]` |
| Suchwege-Anhang | `sourcesExtra.items[3]` |
| FAQ | zwei Einträge |

`postSend.features[3]` steht im **CRM**-Abschnitt („Nach dem Ja"). Ein
Zustellbarkeits-Argument gehört nicht hinter die Antwort, sondern davor — es
ist ein Fremdkörper an dieser Stelle und eine Wiederholung von `#torwart`.

**Stärkste Stelle:** `#torwart`. „Das einzige Werkzeug für Kaltakquise, das
dir Nein sagt" ist eine der besten Zeilen der Seite.
**Fällt:** `postSend.features[3]` (der CRM-Abschnitt hat dann drei statt vier
Karten), `sourcesExtra.items[3]`, ein FAQ-Eintrag.

### I. Ein Workspace je Kunde, Branding, Report-Link

| Fundstelle | Schlüssel |
|---|---|
| Hero | `hero.body` — „Je Kunde ein eigener Workspace mit seinem Branding" |
| **Agentur-Band `#agenturen`** | `agency.features[0..2]` + `AgencyMockup` |
| FAQ, erster Eintrag | fast wörtlich `agency.features[0]` + `[2]` |
| `/fuer-agenturen` | `agencyPage.sections` `workspaces` und `report` |

Der erste FAQ-Eintrag wiederholt das Agentur-Band, das etwa zwanzig
Bildschirmzeilen darüber steht.

**Stärkste Stelle:** das Agentur-Band. **Fällt:** der FAQ-Eintrag.

---

## 1.2 Ganze Abschnitte, die gestrichen gehören

Sieben von zwanzig. Danach steht die Seite auf **dreizehn** — nah an den
zwölf, die `POSITIONIERUNG.md` geplant hat.

| # | Abschnitt | Anker | Warum weg | Was gerettet wird |
|---|---|---|---|---|
| 1 | **Die Kette** | `#kette` | Vollständig in Rundgang Schritt 4 enthalten (Wiederholung B) | `ChainMockup` wird das Bild von Rundgang Schritt 4; `LinkedInMockup` wandert auf `/funktionen#send` |
| 2 | **Der Unterschied im Alltag** | `#alltag` | Beantwortet denselben Einwand wie `#ergaenzt`, direkt daneben (Wiederholung C) | nichts — `compare.closing` sagt es bereits |
| 3 | **Woher die Leads kommen** | (ohne id) | Textlastigster Block der Seite, auf `/funktionen` bereits vorhanden (Wiederholung F) | `UnifiedSearchMockup` wandert auf `/funktionen#find` |
| 4 | **Was mit jeder Suche mitläuft** | (im Block darüber) | Alle vier Karten stehen auf `/funktionen` (F, G, H) | nichts |
| 5 | **Integrationen** | `#integrationen` | Anbieterliste; BYOK steht in `compare.ledger` (Wiederholung E) — und Punkt 2 sagt ausdrücklich, dass diese Namen nicht prominent sein sollen | die Aussage zieht in die Systemkarte um (Punkt 2) |
| 6 | **Vertrauen / DSGVO** | (ohne id) | Zwei Kacheln, beide BYOK-Wiederholung; die drei Rechtslinks stehen bis auf AVV schon im Fuß | `trust.links.avv` in den Fuß aufnehmen |
| 7 | **Was wir dir nicht vormachen** | `#ehrlich` | **Nicht streichen — verschmelzen.** Siehe unten | alles |

**Zu 7, der einzige Merge statt Streich:** `#torwart` („die App sagt Nein,
bevor du sendest") und `#ehrlich` („die App beschönigt keine Zahl, nachdem du
gesendet hast") sind zwei Hälften derselben Haltung und stehen als zwei
volle Abschnitte mit je drei Karten und je einem Bild hintereinander. Ein
Abschnitt mit zwei Bildern und vier Karten sagt dasselbe auf halber Höhe.
Kein Kaufargument geht verloren; `honesty.body` („Zwölf Mails und eine
Antwort sind nicht 8,3 %") ist der schärfste Satz von beiden und bleibt
wörtlich.

**Außerdem, ohne einen ganzen Abschnitt zu kosten:**

- **Hero:** `CopyOutcomesHighlight` fällt (Wiederholung D). Und
  `hero.factBadge` fällt — „42 € zurück für jeden Euro" ist eine geliehene
  Litmus-Zahl über E-Mail-Marketing allgemein, auf einer Seite, deren
  Selbstverständnis ausdrücklich lautet, keine Zahl zu zeigen, die man nicht
  selbst nachrechnen kann. Der Hero trägt danach: Überschrift, Fließtext,
  zwei CTAs, Kundenstreifen, ein Bild, drei Versprechen. Das reicht.
- **Warum-Abschnitt:** von drei Karten auf eine. `why.body`,
  `why.poweredBy` und `why.title` fallen (A, E); die Gründerkarte bleibt,
  `why.earlyAccess` bleibt — das ist das einzige, was sonst nirgends steht.
- **CRM-Abschnitt:** `postSend.features[3]` fällt (H).

**Wer baut:** `senior-developer` (Abschnitte aus `app/page.tsx` entfernen,
Bilder umhängen, tote Importe aufräumen, Anker `#kette`/`#alltag` prüfen —
beide stehen in keinem Menüpunkt, `nav.produktItems` zeigt auf `/funktionen`,
`/#rundgang`, `/#angebot`, `/#kanaele`, `/#integrationen`; **der letzte
Menüpunkt muss mit fallen**).

**Fertig, wenn:** `app/page.tsx` dreizehn `<section>`-Elemente hat, kein
Menüpunkt ins Leere zeigt, `npm run build` ohne Warnung zu ungenutzten
Importen durchläuft, und die Seite auf 375 px messbar kürzer ist als vorher
(Zahl vorher/nachher in die Commit-Nachricht).

---

## 1.3 Totes Wörterbuch

Fünf Schlüssel auf oberster Ebene werden **von keiner Komponente mehr
gelesen** — geprüft über alle `.tsx` unter `app/`:

| Schlüssel | Zeilen (de) | Warum tot |
|---|---|---|
| `worksWith` | 721–758 | Abschnitt am 06.08. der Vergleichstabelle gewichen |
| `comparison` | 2227–2242 | ersetzt durch `compare` |
| `calculator` | 1639–1649 | Rechner am 06.08. entfallen |
| `phone` | 1136–1155 | in `channels` aufgegangen |
| `features` | 2181–2189 | Abschnitt am 06.08. entfallen |
| `techFilter` | 759–783 | die einzige Fundstelle ist `t.appMockups.techFilter`, ein anderer Schlüssel |

Mit der englischen Hälfte sind das rund **240 Zeilen**, die jede
Schlüsseländerung mitschleppen muss. Nach dem Streichen von 1.2 kommen
`chain`, `dailyDiff`, `searchModes`, `sourcesExtra`, `integrations`,
`trustBadges` dazu — zusammen etwa **900 Zeilen**, gut ein Fünftel von
`dict.ts`.

**Achtung:** `worksWith` wird in `POSITIONIERUNG.md` Abschnitt 7 als Quelle
der FAQ-Antwort zu „ich habe Apollo doch schon" bezeichnet. Diese Antwort
steht inzwischen ausformuliert in `faq.items`. Der Schlüssel darf weg.

**Wer baut:** `senior-developer`. **Fertig, wenn:** `npx tsc --noEmit` sauber
ist (`type Dictionary = typeof de` erzwingt, dass beide Hälften gleich
bleiben) und ein Suchlauf nach jedem gelöschten Schlüsselnamen über `app/`
leer bleibt.

---

## 1.4 FAQ: von 17 auf 9

Der Fließtext der FAQ ist länger als der jedes anderen Abschnitts. Zwei
Einträge sind fast dieselbe Frage:

- Nr. 2: „**Warum nicht gleich direkt zu Apollo oder Hunter?**"
- Nr. 12: „**Warum nicht gleich direkt zu Hunter oder Apollo?**"

Beide beantworten denselben Einwand, beide sind lang. Nr. 2 ist die bessere
Antwort (umgedreht formuliert: was wir *zusätzlich* tun). **Nr. 12 fällt.**

**Fällt außerdem:**

| Nr. | Frage | Warum |
|---|---|---|
| 1 | Als Agentur für mehrere Kunden? | Wiederholung I — steht 20 Zeilen darüber im Agentur-Band |
| 3 | Was kosten die Abfragen? | mit Nr. 4 und Nr. 11 zu **einem** Eintrag „Was brauche ich, und was kostet es?" zusammenziehen |
| 9 | Woher weiß ich, dass eine E-Mail zu einer Person gehört? | Wiederholung G |
| 10 | Ungültige Adresse? | Wiederholung H |
| 13 | Bestandskunde versehentlich angeschrieben? | Wiederholung E/`#startklar`, Karte 2 |
| 14 | Versand-Domain zustellfähig? | Wiederholung H — `#torwart` |
| 15 | Kampagnen in einem separaten Tool bauen? | steht als Zeile `send` in der Vergleichstabelle |

Übrig bleiben neun: Apollo/Hunter · Was brauche ich und was kostet es ·
Preis · Kündigung · Klingen alle Mails gleich · Text noch änderbar · Wie
schnell startklar · Daten nach Kündigung · ein Eintrag frei für das, was im
Verkaufsgespräch am häufigsten kommt.

**Wer baut:** `copywriter` (Zusammenfassung von Nr. 3+4+11 neu schreiben),
`senior-developer` (löschen, beide Sprachen).
**Fertig, wenn:** `faq.items` in `de` und `en` je neun Einträge hat und keine
zwei Fragen mit denselben zwei Anbieternamen beginnen.

---

# PUNKT 2 — Die Quelle ist austauschbar

**Wo:** `/` → `#system`, Bauteil `app/_system-map.tsx`, Schlüssel
`systemMap.stages[0]`. Dazu die Streichungen aus 1.2 (Suchwege-Abschnitt,
`#integrationen`).

## Warum die Systemkarte bleibt, obwohl sie umgebaut wird

`POSITIONIERUNG.md` verteidigt die Karte damit, dass sie in fünf Sekunden
beantwortet, *wie groß* das hier ist. Dieses Argument bleibt richtig — es
rechtfertigt aber nicht den **Inhalt von Kasten 1**. Vier Anbieternamen
untereinander beantworten eine ganz andere Frage („woher kommen die Daten?"),
und zwar an der prominentesten Stelle der Karte. Sie machen aus einer
Ablaufskizze eine Zutatenliste, und eine Zutatenliste legt genau die Frage
nahe, die der Betreiber nicht hören will: *warum gehe ich dann nicht gleich
dorthin?*

Die Karte wird also **nicht abgeschafft, sondern von der Sache befreit, die
nie ihre Aufgabe war.** Nach dem Umbau beantwortet sie ihre eigene Frage
besser als vorher, weil der Leser aufhört, Anbieter zu zählen.

## Was dort künftig steht

`systemMap.stages[0].items` — statt vier Anbieterkästchen drei Zeilen, die
dieselbe Form haben wie die Stufen 2 und 3:

1. eine Zeile über die Zielgruppe (Nische, Ort, Technik, Anlass)
2. **eine Zeile über die Quelle als Wahl**, nicht als Liste
3. eine Zeile über die eigene Liste (CSV)

`systemMap.stages[0].note` trägt die Kernaussage:
*deine Quelle, deine Entscheidung — und wenn du nicht weißt, welche passt,
sagen wir es dir.*

**Die Grenze, die der `copywriter` halten muss:** heute angebunden sind
Google Maps, Hunter, Apollo, Prospeo und CSV. **Clay ist nicht angebunden.**
Der Satz darf also nicht lauten „egal welches Tool, es funktioniert", sondern
muss zwei Sachen trennen: was heute läuft, und dass alles andere angebaut
wird. Auf einer Seite mit dem Abschnitt „Was wir dir nicht vormachen" ist das
keine Feinheit. Siehe offene Frage O2.

**Das Design ist damit gleich mit erledigt:** die vier grauen Kästchen, die
der Betreiber als veraltet bezeichnet, verschwinden, weil ihr Inhalt
verschwindet. Ein eigener Gestaltungsauftrag ist nicht nötig — Stufe 1 sieht
danach aus wie Stufe 2 und 3, und das ist die Verbesserung.

**Wer baut:** `copywriter` (drei Zeilen + Notiz, de/en), `senior-developer`
(Streichungen aus 1.2). `ui-designer` **nicht** — es ändert sich kein Bauteil,
nur sein Inhalt.

**Fertig, wenn:** auf der ganzen Startseite kein Anbietername mehr als
Überschrift, Kachel oder Listeneintrag steht. Die Namen dürfen im Fließtext
vorkommen (Vergleichstabelle, FAQ) — dort sind sie Argument, nicht Auslage.
Prüfung: Suchlauf nach „Prospeo" auf `/` findet nur noch Fließtext.

---

# PUNKT 3 — Nischen statt Firmen im Leads-Bild

**Wo:** `appMockups.leads`, gezeigt von `LeadsTableMockup`
(`app/_app-mockups.tsx:311`) in **Rundgang Schritt 1**. Genau eine
Fundstelle.

**Heute:** vier Zeilen mit Firmen — `retaiyn`, „E-Commerce-Marke, Shopify",
„Onlineshop, Shopware", „Agentur, Wien" — mit 1 bis 3 Kontakten je Zeile.
Zwei Zeilen tragen „Name weggelassen" als Domain. Der Betreiber hat recht:
das versteht niemand, der die Regel dahinter nicht kennt.

**Künftig:** eine Zeile je **Nische**, mit einer Mengenangabe.

| Nische | Menge |
|---|---|
| E-Commerce (Shopify) | z. B. 120 Leads · 112 mit E-Mail |
| Marketingagenturen | z. B. 80 Leads · 71 mit E-Mail |
| Restaurants | z. B. 60 Leads · 38 mit E-Mail |
| Immobilienmakler | z. B. 45 Leads · 40 mit E-Mail |

**Drei Regeln, die diese Zahlen tragen — sonst sind sie erfunden:**

1. **Die zweite Zahl ist nie gleich der ersten.** „100 Leads mit 100
   E-Mails" wäre eine behauptete Trefferquote von 100 %, und die gibt es
   nicht. Die Lücke ist die Ehrlichkeit.
2. **Die Lücke ist je Nische verschieden, und zwar in die richtige
   Richtung.** Lokale Betriebe haben schlechtere Adressabdeckung als
   Shopify-Marken. Damit erzählt die Spalte nebenbei etwas Wahres statt nur
   Platz zu füllen.
3. **Der Rahmen bekennt sich als Beispiel.** `LeadsTableMockup` ruft heute
   `<AppFrame>` **ohne Titel** auf — als einziges der großen Zahlenbilder
   trägt es keine Kennzeichnung. Es muss `title="Beispielansicht"` bekommen
   (dieselbe Marke wie `appMockups.dashboard.sampleBadge` und
   `appMockups.report.badge`). Das ist die Vorrichtung, die aus einer Menge
   in einer Beispielansicht keine Ergebniszahl macht.

**Nebenwirkung, die mitgemacht werden muss:** `leads.toolbar.count` steht auf
„97 Firmen · 259 Kontakte" und passt dann zu keiner Zeile mehr. Entweder neu
rechnen oder streichen.

**Was das nebenbei löst:** die Zwei-Namen-Regel aus `BEISPIELE.md` wird hier
gegenstandslos — ohne Firmennamen gibt es nichts abzuwägen. `retaiyn` bleibt
im aufgeklappten Lead (`appMockups.leadDetail`) und im Pipeline-Bild, und das
ist auch die richtige Stelle dafür.

**Wer baut:** `copywriter` (vier Nischen + Mengen, de/en — die englische
Hälfte braucht dieselben Zahlen, nicht umgerechnete),
`senior-developer` (`title`-Attribut am `AppFrame`, Toolbar-Zahl).

**Fertig, wenn:** in `appMockups.leads.rows` kein Eigenname mehr steht, keine
Zeile „Name weggelassen" trägt, keine Zeile gleich viele E-Mails wie Leads
hat, und der Rahmen sichtbar „Beispielansicht" sagt.

---

# PUNKT 4 — Kontext über dem Angebotsbeispiel

**Wo:** `/` → `#angebot`, zwischen `OfferPoint n={1}` und dem `<Reveal>` mit
`OfferMapMockup` (`app/page.tsx:311–323`). Schlüssel: neu unter
`offerSection`, z. B. `offerSection.caseIntro`.

**Das Problem, gemessen am Code:** die Einordnung existiert bereits — in
`offerSection.offerMap.note`, **unter** der Karte, in kleiner Schrift, nach
zwölf Feldern. Die Zahl „bis zu 70 %" steht in Ecke 3, also weit darüber.
Wer von oben liest, hat die 70 % längst als Frostbreakers Zahl verbucht, bevor
er erfährt, wessen Angebot das ist.

**Fix:** drei bis vier Sätze **über** dem Bild, optisch als Einleitung zum
Beispiel gesetzt (nicht als weiterer `OfferPoint` — die Nummerierung 1/2/3
gehört den Aussagen). Inhalt, streng in dieser Reihenfolge:

1. **Wessen Angebot das ist:** unser erster Kunde, eine Agentur.
2. **Deren Nische:** E-Commerce-Marken.
3. **Was sie verkaufen:** Customer Experience — WhatsApp-Automationen,
   E-Mail-Marketing und Support als ein Ablauf statt als drei.
4. **Woher die Felder kommen:** aus deren eigener Website, Satz für Satz.
   Damit ist gesagt, dass alle Zahlen im Bild deren Aussagen über sich selbst
   sind — vor der ersten Zahl statt danach.

`offerSection.offerMap.note` wird danach gekürzt: der Herkunftssatz steht
oben, unten bleibt nur die Mechanik („Zwölf Felder, vier Gruppen. Jede Linie
dazwischen ist eine Regel.").

**Zusätzlich, und es spart Höhe:** `CoachFindingMockup` (das zweite große
Bild des Abschnitts) **wandert auf die neue retaiyn-Seite** (Punkt 6). Es ist
derselbe Fall, nur eine Stufe tiefer, und der Abschnitt steht danach auf einem
Bild statt zweien. An seine Stelle kommt ein Textlink: *„Der ganze Fall bei
unserem ersten Kunden →"*. Das ist zugleich der einzige Weg auf die neue
Seite, der auf der Startseite nichts kostet.

Die Kleinschreibung von `retaiyn` macht der Betreiber selbst — hier nicht
eingeplant.

**Wer baut:** `copywriter` (die vier Sätze, de/en; `offerMap.note` kürzen),
`senior-developer` (Einbau, `CoachFindingMockup` umhängen).

**Fertig, wenn:** auf `/#angebot` beim Scrollen von oben der Name des Kunden
und dessen Nische **vor** der ersten Prozentzahl im Bild erscheinen. Prüfung
am Standbild bei 375 px und 1440 px.

---

# PUNKT 5 — Platz für die Videos, ohne leeren Kasten

Die Videos existieren nicht. Geplant wird deshalb **die Vorrichtung, nicht
der Inhalt** — und bis es sie gibt, steht auf der Seite **nichts**. Ein
Kasten mit „Video folgt" ist ein Versprechen, das die Seite jeden Tag bricht,
an dem es nicht eingelöst wird.

## Ein Video von 5 bis 10 Minuten gehört nicht in den Hero

Ehrlich gesagt: fünf bis zehn Minuten sind kein Konversionselement, sondern
Dokumentation. Wer die Seite zum ersten Mal sieht, startet es nicht, und wer
es startet, sieht die ersten vierzig Sekunden. Deshalb **geteilt**:

| Form | Länge | Wo | Ersetzt |
|---|---|---|---|
| **Drei Kurzclips** | je 60–120 s | Rundgang, an Schritt 1 (Suche), 2 (Angebot), 4 (Kampagne) — anstelle des dortigen Bildes | die jeweilige Nachbildung |
| **Eine Langfassung** | 5–10 min | genau eine Stelle: `/funktionen`, oberhalb der Gruppen | nichts |

Die Kurzclips sind der eigentliche Gewinn: `KONVERSION.md` Abschnitt 3.5
nennt „ich sehe das Produkt nirgends wirklich" als einen von fünf
Kaufhindernissen, und Punkt 4 der Liste „was mich konvertiert hätte" ist
wörtlich *ein Weg, das Produkt vor der Anmeldung zu sehen*. Ein Clip an
Schritt 1 löst das an der Stelle, an der der Leser die Frage stellt. Und er
**ersetzt** dort ein Bild — das ist die einzige Form, in der Punkt 5 die
Seite nicht länger macht.

## Was technisch nötig ist, und was das begrenzt

Die Seite hat kein CMS und keinen Medienspeicher. Eine Datei könnte nur unter
`public/` liegen (heute: vier Screenshots, ein Kundenlogo, ein Porträt,
zusammen unter 600 kB). **Dorthin gehört ein Video nicht:** eine
Bildschirmaufnahme von 5 bis 10 Minuten liegt je nach Auflösung bei 150 bis
600 MB, sie ginge durch Git, durch jeden Vercel-Build und bei jedem Deploy
über die Leitung. Auch die drei Kurzclips zusammen sprengen den Rahmen, in
dem `public/` heute betrieben wird.

**Empfehlung:** externer Videohoster (YouTube unlisted oder Vimeo), im
`<iframe>` eingebettet. Was das kostet:

- **Datenschutz.** Ein YouTube-Embed setzt Cookies beim ersten Bildansatz.
  Entweder die datenschutzfreundliche Variante (`youtube-nocookie.com`) plus
  ein Absatz in `/datenschutz`, oder eine Zwei-Klick-Lösung (Vorschaubild,
  Einbettung erst nach Klick). Das ist **kein** optionaler Feinschliff — die
  Seite hat AGB, AVV und eine Datenschutzerklärung und verkauft an
  DSGVO-empfindliche Käufer.
- **Ein Bauteil**, das heute nicht existiert: ein Videorahmen im Stil von
  `AppFrame`, damit ein eingebettetes Video nicht wie ein Fremdkörper neben
  den Nachbildungen sitzt.

## Die Vorbereitung, die man heute machen kann

`StepWalkthrough` (`app/_walkthrough.tsx`) wählt sein Bild heute über einen
festen Index in der Konstante `MOCKUPS`. Damit ein Clip je Schritt möglich
wird, ohne den Rundgang neu zu bauen, braucht es genau eine Änderung: pro
Schritt ein **optionales** Videofeld im Wörterbuch; ist es leer, rendert der
Schritt wie heute sein Bild. Solange alle Felder leer sind, ändert sich an der
Seite **nichts** — und am Tag der Aufnahme ist der Einbau eine Zeile je Clip.

**Wer baut:** `senior-developer` (optionales Feld + Fallback auf das Bild,
`ui-designer` erst dann, wenn es das erste echte Video gibt und der
Videorahmen entworfen werden muss).

**Fertig, wenn:** ein leeres Videofeld die Seite unverändert lässt (Standbild
vorher/nachher identisch) und ein gefülltes Feld an Schritt 1 den Clip
anstelle von `LeadsTableMockup` zeigt. Zu prüfen mit einer Wegwerf-URL, die
danach wieder entfernt wird.

**Nicht eingeplant:** Untertitel, Kapitelmarken, eigener Player. Das sind
Fragen für den Tag, an dem die Aufnahmen existieren.

---

# PUNKT 6 — Eine eigene Seite für retaiyn

## `/case-study` ist nicht das, wonach es klingt

Geprüft: `/case-study` handelt **nicht vom Produkt**. Es ist ein Beleg für
die **Auftragsentwicklung**. Die Überschrift lautet „Wie Frostbreaker in drei
Wochen von der Idee zum laufenden System wurde", der Abschluss lautet
„Genau dieses Tempo … bringe ich auch für deine Anforderungen mit. Ob interne
Automatisierung, Kunden-App oder Erweiterung eines bestehenden Systems", und
verlinkt ist die Seite **von genau einer Stelle**:
`app/eigene-software/page.tsx:129`. Kein Menüpunkt zeigt darauf.

Es ist also ein Referenzstück des zweiten Angebots, das versehentlich den
Namen des ersten trägt.

**Entscheidung: neue Route daneben, und `/case-study` bekommt seine richtige
Beschriftung.** Umbauen wäre falsch — die Seite erfüllt ihre Aufgabe, sie
heißt nur falsch. Und zwei Seiten „Case Study", von denen eine das eigene
Produkt und die andere einen Kunden zeigt, wären genau die Verwechslung, vor
der der Auftrag warnt.

| Was | Wo | Wie |
|---|---|---|
| Neue Kundenseite | `/kunden/retaiyn` | neu |
| Bestehende Seite | `/case-study` bleibt als Route (Link von `/eigene-software`) | nur `caseStudyPage.eyebrow` von „Case Study" auf „Referenz · Eigene Software" |

Die Route bleibt, damit vorhandene Links nicht brechen. Nur die sichtbare
Beschriftung ändert sich — das ist die kleinste Änderung, die die Kollision
auflöst.

## Was auf `/kunden/retaiyn` heute schon stehen kann

Der überwiegende Teil ist **bereits gebaut** und muss nur umziehen oder
wiederverwendet werden:

| Baustein | Quelle | Status |
|---|---|---|
| Wer retaiyn ist, und die Umkehrung „Kundenbindung ist ihr Geschäft, Kundengewinnung war ihr Problem" | `customer.title`, `customer.body`, `customer.facts` | steht |
| Deren Angebotsprofil, zwölf Felder | `offerSection.offerMap` | steht |
| Der Coach-Befund an deren Handlungsaufruf | `offerSection.coachFinding` | steht, zieht von der Startseite hierher (Punkt 4) |
| Der Spiegel auf den Leser | `customer.mirror` | steht |
| Die Leerstelle statt einer Zahl | `customer.pending` | steht |
| Logo | `public/customers/retaiyn.png` | liegt da |

Neu zu schreiben ist wenig: eine Einleitung, die Kanäle in einem Absatz
(E-Mail und LinkedIn, mit automatischem Nachfassen — steht als
`customer.facts` schon fest), und der Abschluss.

**Was die Startseite dadurch abgibt:** `CoachFindingMockup` (ein großes
Bild). Der Kundenabschnitt auf der Startseite bleibt, wird aber der Anriss:
Karte, Spiegel, ein Link hierher. `customer.mirror` steht dann auf beiden
Seiten — das ist die **einzige bewusste Doppelung** dieses Plans, weil der
Spiegel der Moment ist, an dem der Leser sich wiedererkennt, und der auf
beiden Wegen zum Gespräch führen muss.

## Die drei bis fünf Angaben, die der Betreiber liefern muss

Ohne diese trägt die Seite als *Fallstudie* nicht — sie trägt dann nur als
Kundenporträt, und das ist die ehrliche Zwischenstufe.

1. **Seit wann läuft es** (Startdatum, und ob durchgehend).
2. **Angeschriebene Kontakte und Antworten**, aus dem Konto abgelesen, nicht
   geschätzt. Zwei Zahlen, kein Prozentwert — `honesty.body` verbietet der
   Seite eine Quote unter dreißig Kontakten, und dieselbe Regel gilt hier.
3. **Termine daraus**, absolut.
4. **Ein freigegebener Satz von retaiyn** und die **schriftliche Freigabe**,
   Name und Logo in dieser Form zu verwenden. `BEISPIELE.md` Abschnitt 10
   führt die Zustimmungsfrage bereits als offen — für eine eigene Seite mit
   dem Kundennamen im Pfad reicht mündliches Einverständnis nicht.
5. *Optional, aber es macht die Seite doppelt so gut:* welche Nische und
   welcher Suchweg tatsächlich verwendet wurden. Damit ließe sich die
   Erzählung schließen: dieselbe Mechanik, die die Startseite zeigt, an einem
   echten Fall.

**Bis dahin** steht anstelle einer Kennzahlenzeile `customer.pending`
(„Was das bei retaiyn gebracht hat, steht hier, sobald genug gemessen ist")
— an prominenter Stelle, nicht als Fußnote. Eine sichtbar freigehaltene
Lücke ist auf dieser Seite ein Argument; sie ist die einzige Stelle, an der
ein Wettbewerber nicht nachziehen kann, ohne zu lügen.

**Wer baut:** `copywriter` (Einleitung, Kanalabsatz, Abschluss, de/en),
`senior-developer` (Route `/kunden/retaiyn` mit `layout.tsx` für die
Metadaten nach dem Muster von `app/fuer-agenturen/layout.tsx`, Bausteine
umhängen, `caseStudyPage.eyebrow` ändern).
`ui-designer` **nicht** — die Seite entsteht aus vorhandenen Bauteilen.

**Fertig, wenn:** `/kunden/retaiyn` erreichbar ist, keine Zahl über
Frostbreakers Wirkung bei retaiyn enthält, `/case-study` nicht mehr „Case
Study" heißt, und von der Startseite genau **ein** Weg dorthin führt.

---

# Reihenfolge

Streichen zuerst, und einzeln. Jeder Schritt ein eigener Commit.

1. **1.2 + 1.3 + 1.4** — die Abschnitte, das tote Wörterbuch, die FAQ.
   Danach ist messbar, wie lang die Seite wirklich noch ist.
2. **Punkt 2** — Systemkarte. Hängt an Schritt 1: der Suchwege-Abschnitt muss
   weg sein, sonst widerspricht die neue Stufe 1 dem Block darunter.
3. **Punkt 3** — Leads-Bild. Klein, unabhängig, sofort sichtbar.
4. **Punkt 4** — Kontext über dem Angebot. Gibt gleichzeitig
   `CoachFindingMockup` frei.
5. **Punkt 6** — retaiyn-Seite. Braucht Schritt 4.
6. **Punkt 5** — Video-Vorrichtung. Zuletzt, weil sie auf Dateien wartet, die
   es nicht gibt.

---

# Was ich bewusst weglasse

- **Kein neuer Abschnitt.** Nicht einer. Punkt 4 wird ein Absatz in einem
  vorhandenen Abschnitt, Punkt 5 eine leere Vorrichtung, Punkt 6 eine eigene
  Seite. Auf der Startseite kommt netto nichts hinzu.
- **Kein Gestaltungsauftrag.** Der Betreiber nennt das Design der
  Quellenkästchen veraltet; die Antwort darauf ist, dass die Kästchen
  verschwinden, nicht dass sie neu gezeichnet werden. Ein `ui-designer` wird
  erst gebraucht, wenn das erste echte Video einen Rahmen braucht.
- **Die Vergleichstabelle bleibt vollständig.** Vierzehn Zeilen sind viel
  Text, und jede Zeile hat einen datierten Belegkommentar, der irgendwann
  veraltet. Aber sie ist die einzige Stelle, die den Einwand „habe ich doch
  schon" mit Belegen beantwortet, und `#alltag` fällt bereits.
- **`customer.mirror` bleibt doppelt** (Startseite und retaiyn-Seite). Der
  einzige Verstoß gegen die eigene Regel, und er ist begründet.
- **Keine Zahl über retaiyns Ergebnis** — auch keine vorsichtige, auch keine
  gerundete. Die freigehaltene Lücke ist der bessere Text.
- **Kein Umbau von `/fuer-agenturen` und `/fuer-saas`.** Beide sind jung, in
  sich schlüssig und wiederholen einander kaum (`saasPage` trägt dazu einen
  ausdrücklichen Kommentar). Was sie mit der Startseite teilen, ist
  Absicht — es sind Segmentseiten. Sie werden mit dem Streichen auf der
  Startseite eher wichtiger.
- **Keine Anker-Aufräumung über das Nötige hinaus.** `#kette` und `#alltag`
  fallen mit ihren Abschnitten; `#telefon`, `#ergaenzt` und `#preise` bleiben
  als Sprungmarken bestehen, weil sie in fremden Links stehen können.

---

# Fragen, die nur der Betreiber beantworten kann

**O1 — Fällt `#alltag` oder `#ergaenzt`?**
Mein Vorschlag ist `#alltag`. Wer die Seite verkauft, weiß besser, welches
der beiden im Gespräch tatsächlich zitiert wird. Das ist die einzige
Streichung dieser Liste, bei der ich beide Seiten gelten lasse.

**O2 — Wie verbindlich ist „ich kann es immer der App integrieren"?**
Davon hängt der Wortlaut in der Systemkarte ab. Drei Stufen, absteigend nach
Verbindlichkeit: *„wir bauen deine Quelle an"* (eine Zusage) — *„sag uns,
womit du arbeitest"* (ein Gespräch) — *„weitere Quellen auf Anfrage"*
(eine Möglichkeit). Ich empfehle die mittlere: sie deckt Beratung und Anbau
ab, ohne einen Termin zu versprechen. Aber es ist seine Zusage, nicht meine.

**O3 — Darf `retaiyn` im Pfad stehen, und liegt die Freigabe schriftlich
vor?** `/kunden/retaiyn` ist eine deutlich stärkere Namensnennung als eine
Zeile auf der Startseite. Ohne schriftliche Freigabe heißt die Route
`/kunden/erster-kunde` und die Seite nennt den Namen nur im Text.

**O4 — Gibt es die vier Zahlen aus Punkt 6 überhaupt schon?**
Wenn nein, ist die Seite ein Kundenporträt und keine Fallstudie — dann
gehört sie trotzdem gebaut, aber sie heißt anders, und der Menüpunkt lautet
nicht „Case Study".

**O5 — Wo sollen die Videos liegen?**
YouTube (unlisted, `nocookie`, kostenlos, aber ein Datenschutzabsatz) oder
Vimeo (bezahlt, sauberer). Diese Entscheidung bestimmt, wie viel Arbeit die
Einbettung ist, und sie muss vor der ersten Aufnahme fallen, nicht danach.
