# Einheitlich — der Gesamtdurchgang über fünf Seiten

**Status: zur Freigabe.** Nichts davon ist umgesetzt.

**Stand des Codes beim Schreiben (gemessen, nicht aus Plandokumenten
abgeleitet):** `app/page.tsx` 887 Zeilen mit **14 `<section>`-Elementen**,
`app/funktionen/page.tsx` 192 Zeilen mit **9 Funktionsgruppen** plus einem
Bild-Abschnitt, `app/fuer-agenturen/page.tsx` 6 Abschnitte,
`app/fuer-saas/page.tsx` 5, `app/kunden/retaiyn/page.tsx` 5.
`app/dict.ts` 4060 Zeilen, deutsche Hälfte 9–2437.

`VEREINFACHUNG.md` ist an drei Stellen überholt: die Startseite steht auf 14
statt der dort angekündigten 13 Abschnitte, `CoachFindingMockup` ist **nicht**
von der Startseite auf die Kundenseite gewandert, sondern dort zusätzlich
entstanden, und der Kundenabschnitt auf der Startseite ist **nicht** zum
Anriss geschrumpft. Die Punkte D1 und D3 unten sind deshalb keine neuen
Vorschläge, sondern der Rest eines Plans, der zu drei Vierteln gebaut wurde.

**Der Maßstab, an dem hier alles gemessen wird:** *ein Kunde kennt sich aus
und will ein Meeting buchen.* Nicht Vollständigkeit. Wo ein Abschnitt eine
Frage beantwortet, die vor dem Termin niemand stellt, fällt er.

---

# Teil A — Punkt 4: Erst das Feature, dann der Anspruch

Das ist der wichtigste Punkt, und er ist billiger umzusetzen als er klingt:
**die Funktionsnamen existieren bereits.** Sie stehen in
`nav.funktionenItems` (dict.ts 54–79) — neun Beschriftungen, jede mit einem
Anker auf genau die Gruppe, um die es geht.

## A.1 Der Befund: Menü und Sprungziel tragen verschiedene Namen

Wer im Menü auf **„Technologie-Filter"** klickt, landet auf
`/funktionen#tech` — und liest dort als Augenbraue **„Eingrenzen"**. Der Name,
mit dem er hergeschickt wurde, kommt auf der Zielseite nicht vor. Dasselbe
neunmal:

| Anker | Menü sagt (`nav.funktionenItems`) | Abschnitt sagt (`featuresPage.groups[].eyebrow`) |
|---|---|---|
| `#find` | Lead Finder | Finden |
| `#tech` | Technologie-Filter | Eingrenzen |
| `#enrich` | Decision Maker Finder | Anreichern |
| `#personalize` | Personalisierung | Personalisieren |
| `#write` | Texte aus dem Angebot | Schreiben |
| `#check` | Textcheck beim Tippen | Prüfen |
| `#send` | Kampagnen | Versenden |
| `#protect` | Sperrliste | Absichern |
| `#pipeline` | Pipeline | Nachverfolgen |

Die rechte Spalte sind **Verben**, also Prozessschritte. Neun Verben
hintereinander sind kein Katalog, sondern ein Fließband — und der Betreiber
beschreibt genau das Symptom: nach zehn Augenbrauen weiß man nicht, welche
Funktionen es gibt.

Die Umsetzung ist deshalb kein Erfinden, sondern ein Einlösen: **die
Augenbraue übernimmt wörtlich die Menü-Beschriftung.** Danach ist das
Aufklappmenü das Inhaltsverzeichnis der Seite, und beide sagen dasselbe Wort.

**Was das nebenbei repariert:** heute stehen auf `/funktionen` „Prüfen"
(Textcheck im Browser) und auf `/` „Bevor du sendest, und danach" (technischer
Versand-Blocker). Zwei verschiedene Funktionen, zwei fast gleiche Aussagen.
Mit „Textcheck beim Tippen" gegen „Sender Reputation Check" sind es auf den
ersten Blick zwei Sachen. Das ist das stärkste Argument für die Konvention und
kommt vom Betreiber selbst.

## A.2 Die Tabelle über alle fünf Seiten

### Startseite (`app/page.tsx`) — 14 Abschnitte

| Abschnitt | Augenbraue heute | Funktionsname künftig |
|---|---|---|
| Hero | `hero.eyebrow` „Für Agenturen, die Outbound für ihre Kunden machen" | **Kein Funktionsname.** Zielgruppenansprache — die einzige Zeile, die entscheidet, ob die Seite den Leser meint. Bleibt. |
| `#system` | `systemMap.eyebrow` „Das ganze Bild" | **Kein Funktionsname.** Der Abschnitt ist die Übersicht über alle Funktionen, er kann nicht eine benennen. Bleibt. |
| `#rundgang` | `walkthrough.eyebrow` „In sechs Schritten" | **Kein Funktionsname**, aus demselben Grund. Bleibt. |
| `#angebot` | `offerSection.eyebrow` „Dein Angebot" | **Angebotsprofil** — so heißt die Funktion in der App. „Dein Angebot" ist Besitz, kein Name. |
| `#agenturen` | `agency.eyebrow` „Für Agenturen" | **Workspaces & Branding** — der Abschnitt handelt von genau dem, nicht von Agenturen allgemein. Die Zielgruppe steht schon im Hero. |
| `#kunde` | `customer.eyebrow` „Kunde" | **Kein Funktionsname.** Beleg, kein Feature. Bleibt (Zuschnitt siehe D3). |
| `#kanaele` | `channels.eyebrow` „Drei Kanäle, ein Kontakt" | **Multichannel-Sequenz** — heute ist die Augenbraue schon halb ein Name, aber sie nimmt der Überschrift („Nicht drei Werkzeuge nebeneinander, sondern ein Vorgang") die Pointe vorweg. |
| `#crm` | `postSend.eyebrow` „Nach dem Ja" | **Posteingang & Pipeline** — poetisch, aber niemand sucht nach „Nach dem Ja". |
| `#torwart`, erste Hälfte | `guard.eyebrow` „Bevor du sendest, und danach" | **Sender Reputation Check** — der Vorschlag des Betreibers, wörtlich. Die Augenbraue deckt heute beide Hälften ab und benennt keine. |
| `#torwart`, zweite Hälfte (`honesty`) | **hat gar keine** — nur eine `h3` (page.tsx 644) | **Auswertung ohne Beschönigung.** Siehe U8: der einzige gleichrangige Block der Seite ohne Augenbraue. |
| `#ergaenzt` | `compare.eyebrow` „Was bleibt, was wegfällt" | **Kein Funktionsname.** Vergleich, keine Funktion. Bleibt inhaltlich, wird aber neu formuliert — siehe Teil C, Punkt 5. |
| `#startklar` | `safeStart.eyebrow` „Ohne Vorwissen starten" | **Entfällt mit dem Abschnitt** (S1). |
| `why` | keine | **Kein Funktionsname.** Bleibt ohne. |
| `#faq` | keine | **Kein Funktionsname.** Bleibt ohne. |
| finalCta | keine | **Kein Funktionsname.** Bleibt ohne. |

Fünf von vierzehn bekommen einen Namen. Das ist keine Schwäche der
Konvention, sondern ihre Grenze: die Startseite ist eine Erzählung mit fünf
eingebauten Funktionsbelegen, kein Katalog.

### `/funktionen` — alle neun, wörtlich aus `nav.funktionenItems`

Siehe Tabelle A.1. **Hier gilt die Konvention vollständig** — es ist die
einzige Seite, deren Aufgabe der Katalog ist.

Der Schluss-CTA (`featuresPage.ctaTitle`) bleibt ohne Augenbraue.

### `/fuer-agenturen` — die Konvention gilt **nicht**

| Abschnitt | Augenbraue heute | Künftig |
|---|---|---|
| `#day` | „Der Montagmorgen" | bleibt |
| `#workspaces` | „Getrennt" | **„Am zweiten Kunden"** — siehe unten |
| `#onboarding` | „Am ersten Tag" | bleibt |
| `#report` | „Am Monatsende" | bleibt |
| `#learning` | „Der Vorteil, den nur ihr habt" | **„Nach dem dritten Kunden"** |
| `#costs` | „Kalkulierbar" | **„Am Quartalsende"** oder eine andere Zeitmarke |

Diese Seite ist bewusst um den **Arbeitstag** gebaut, nicht um Funktionen
(die Begründung steht ausführlich in `dict.ts` über `agencyPage`: „drei
Eigenschaften, kein Alltag" war der Fehler, den sie behoben hat). Funktions-
namen hier würden genau diesen Umbau rückgängig machen.

Die Seite hat aber ihre **eigene** Konvention, und hält sie nur zu zwei
Dritteln: vier Augenbrauen sind Zeitpunkte, zwei sind Eigenschaften
(„Getrennt", „Kalkulierbar"). Das ist der Bruch, den man beim Scrollen spürt.
Die Reparatur ist, die Zeitmarke durchzuziehen, nicht Funktionsnamen
einzusetzen.

### `/fuer-saas` — die Konvention gilt **nicht**

| Abschnitt | Augenbraue heute | Künftig |
|---|---|---|
| `#offer` | „Wer es ausfüllt" | bleibt |
| `#icp` | „Wen du meinst" | bleibt |
| `#learning` | „Warum es diese Seite gibt" | **neu.** Meta über die Website statt über den Leser — die einzige Augenbraue auf fünf Seiten, die von der Seite selbst handelt. Die anderen vier dieser Seite folgen dem Muster „W-Frage über dich"; diese fällt heraus. |
| `#multi` | „Zwei Zielgruppen" | **entfällt mit dem Abschnitt** (S5) |
| `#limits` | „Wo es aufhört" | bleibt |

### `/kunden/retaiyn` — die Konvention gilt **nicht**

„Wer sie sind" · „Das Angebot" · „Die Sequenz" · „Was nur retaiyn wusste" ·
„Und bei euch?" — eine Fallgeschichte in fünf Kapiteln. Funktionsnamen würden
aus einem Beleg einen zweiten Funktionskatalog machen, und der Beleg ist der
einzige Grund, warum die Seite existiert. **Unverändert.**

## A.3 Was daraus als Regel im Repo steht

Damit die Konvention den nächsten Umbau überlebt, gehört sie als Kommentar
über `SectionHeading` in `app/_ui.tsx` (Zeile 188) — dort, wo jede Augenbraue
durchläuft. Wortlaut sinngemäß: *auf `/funktionen` ist die Augenbraue der
Funktionsname und identisch mit `nav.funktionenItems`; auf `/` ist sie der
Funktionsname, wenn der Abschnitt eine benennbare Funktion belegt, sonst
keine; auf den Zielgruppen- und Kundenseiten ist sie eine Perspektive und
ausdrücklich kein Funktionsname.*

**Wer baut:** `copywriter` (alle Augenbrauen in beiden Sprachen; die neun auf
`/funktionen` sind eine Kopie aus `nav.funktionenItems` und brauchen keine
neue Erfindung), `senior-developer` (der Regelkommentar in `_ui.tsx`).
`ui-designer` **nicht** — es ändert sich kein Bauteil.

**Fertig, wenn:** jeder der neun Einträge in `nav.funktionenItems` wörtlich
als Augenbraue seines Sprungziels auf `/funktionen` wiederkehrt (Prüfung: für
jedes Label ein Suchlauf, der zwei Fundstellen findet), auf der Startseite
`honesty` eine Augenbraue hat, und keine Augenbraue auf `/fuer-agenturen`
oder `/fuer-saas` ein Funktionsname geworden ist.

---

# Teil B — Punkt 6: Der Gesamtdurchgang

## B.1 Was noch doppelt gesagt wird

### D1 — Die zwei größten Bilder der Seite stehen zweimal, aus derselben Quelle

`app/page.tsx` 323–334 rendert `OfferMapMockup` und `CoachFindingMockup`.
`app/kunden/retaiyn/page.tsx` 169–176 rendert **dieselben zwei Komponenten
mit denselben Props** (`t.offerSection.offerMap`, `t.offerSection.coachFinding`).
Nicht ähnlich — identisch, Feld für Feld.

`VEREINFACHUNG.md` Punkt 4 hatte geplant, dass `CoachFindingMockup` von der
Startseite **wandert** und dort ein Textlink an seine Stelle tritt. Gebaut
wurde die Kundenseite, aber die Startseite hat nichts abgegeben.

**Vorschlag:** `CoachFindingMockup` fällt aus `/#angebot`. `OfferPoint n={2}`
(„Der Coach liest gegen") bleibt als Aussage stehen, darunter kommt der
Textlink auf `/kunden/retaiyn`, den es bis heute nicht gibt (siehe D2).
`OfferMapMockup` bleibt auf **beiden** Seiten: auf der Startseite ist sie der
Beleg für die Kernaussage des Abschnitts, auf der Kundenseite ist sie
retaiyns Profil. Eine Doppelung, die trägt; zwei sind eine zu viel.

**Wer baut:** `senior-developer` (Bild entfernen, Import aufräumen, Textlink
einbauen), `copywriter` (die Zeile des Textlinks, de/en).
**Fertig, wenn:** `CoachFindingMockup` in `app/page.tsx` nicht mehr vorkommt,
`npm run build` ohne Warnung zu ungenutzten Importen durchläuft, und der
Angebot-Abschnitt auf 1440 px messbar kürzer ist (Zahl vorher/nachher in die
Commit-Nachricht).

### D2 — Von der Startseite führt kein Weg zur Kundenseite außer dem Menü

Suchlauf über `app/**/*.tsx` nach `kunden/retaiyn`: **null Fundstellen.** Die
einzige Verlinkung steht in `nav.fuerWenItems` (dict.ts 97) — also in einem
Aufklappmenü, das erst ab 1024 px sichtbar ist. Wer auf dem Telefon liest,
erreicht die Kundenseite gar nicht.

Dazu passt, dass `CustomerSection` (`app/_customers.tsx` 173–181) als einzigen
Ausgang `BOOKING_URL` hat. Wer nach dem Beleg mehr wissen will, bevor er einen
Termin bucht, hat keine Möglichkeit dazu — und das ist genau der Leser, den
ein Fallbeleg abholt.

**Vorschlag:** zwei Wege, beide leise. Der Textlink aus D1 im Angebot-
Abschnitt, und im Kundenabschnitt ein zweiter Link neben dem CTA.

**Wer baut:** `senior-developer` (`app/_customers.tsx`, `app/page.tsx`),
`copywriter` (zwei Linkbeschriftungen, de/en).
**Fertig, wenn:** von `/` aus bei 375 px Fensterbreite mindestens ein
sichtbarer Weg auf `/kunden/retaiyn` führt.

### D3 — Der volle Kundenabschnitt steht auf zwei Seiten

`CustomerSection` wird gerendert in `app/page.tsx` 451 **und**
`app/fuer-agenturen/page.tsx` 144 — komplett: Logo, vier Fakten, zwei
Absätze, die Leerstelle, der Spiegel, der CTA. Dazu steht `CustomerStrip` auf
`/`, `/fuer-agenturen` **und** `/kunden/retaiyn`.

`VEREINFACHUNG.md` hatte eine bewusste Doppelung von `customer.mirror`
zwischen Startseite und Kundenseite vorgesehen. Tatsächlich steht der Spiegel
zwischen Startseite und **Agenturseite**, und auf der Kundenseite fehlt er.

**Vorschlag:** der volle Abschnitt bleibt auf `/fuer-agenturen` — dort ist der
Leser sicher eine Agentur, und der Spiegel („Und in eurer Agentur?") trifft.
Auf der Startseite schrumpft er auf den Anriss: Logo, Überschrift, **ein**
Absatz, der Link auf `/kunden/retaiyn` (löst gleichzeitig D2). Das ist der
Zuschnitt, den `VEREINFACHUNG.md` Punkt 6 beschreibt und der nie gebaut wurde.

Dafür braucht `CustomerSection` einen Schalter (`variant="teaser" | "full"`)
statt einer zweiten Komponente.

**Wer baut:** `senior-developer` (Schalter in `app/_customers.tsx`, Aufruf in
`app/page.tsx`), `ui-designer` (wie der Anriss aussieht, damit er nicht wie
ein abgeschnittener Abschnitt wirkt).
**Fertig, wenn:** `customer.facts`, `customer.pending` und `customer.mirror`
auf `/` nicht mehr gerendert werden, auf `/fuer-agenturen` unverändert
stehen, und die Startseite an dieser Stelle messbar kürzer ist.

### D4 — „Du weißt, was funktioniert hat" steht dreimal auf der Startseite

`heroPromises[2]` („Du weißt, was Termine bringt") · Rundgang Schritt 6
(`walkthrough.steps[5]`, „Und jetzt weißt du, was funktioniert hat") ·
Vergleichszeile `compare.rows` id `outcomes`. `VEREINFACHUNG.md` hat dieselbe
Kette schon einmal von vier auf drei gekürzt (`CopyOutcomesHighlight` fiel
aus dem Hero) — die drei übrigen stehen noch.

**Vorschlag:** `heroPromises[2]` bleibt (Versprechen über der Falz), Rundgang
Schritt 6 bleibt (er hat das Bild und ist laut `POSITIONIERUNG.md` der
Höhepunkt), die Vergleichszeile bleibt (dort ist sie ein Beleg gegen vier
Wettbewerber). **Keine Streichung** — aber der `copywriter` muss die drei so
formulieren, dass sie nicht dreimal denselben Satzbau haben. Heute beginnen
zwei von dreien mit „du weißt".

Dieselbe Aussage steht zusätzlich auf `/fuer-agenturen#learning` und
`/fuer-saas#learning`, beide mit **demselben Bild** (`CopyOutcomesMockup`).
Das ist Absicht — Segmentseiten dürfen sich überschneiden, sie werden
getrennt betreten.

### D5 — Zustellbarkeit steht dreimal auf der Startseite

`#torwart` (`GateMockup` + `guard.points`) · `#kanaele`
(`channels.cards[0].app[0]`) · Rundgang Schritt 3. Dazu auf `/funktionen` in
`send` (`DeliverabilityMockup`) und in `check`.

Das ist die Kaufhürde Nummer eins bei Kaltakquise, und sie darf mehr als
einmal vorkommen. **Kein Handlungsbedarf** — außer, dass die
Augenbrauen-Konvention (Teil A) die beiden `/funktionen`-Stellen
unterscheidbar macht.

## B.2 Was uneinheitlich ist

Der Betreiber sagt „ein paar Sachen passen nicht zueinander" ohne es zu
benennen. Neun Befunde, alle nachgemessen.

### U1 — Der Fuß hat auf einer von fünf Seiten fünf Links, auf vier Seiten vier

`app/page.tsx` 875 verlinkt `/avv`. `/funktionen`, `/fuer-agenturen`,
`/fuer-saas` und `/kunden/retaiyn` tun es nicht. Der AVV kam am 14.08. aus dem
gestrichenen Vertrauens-Abschnitt in den Fuß der Startseite — und nur dorthin.
Rechtlich ist er auf jeder Seite gleich relevant.

Ursache ist, dass es **kein gemeinsames Fuß-Bauteil gibt**: dasselbe Markup
steht fünfmal kopiert im Repo. Jede Änderung muss fünfmal gemacht werden, und
genau das ist hier einmal misslungen.

**Vorschlag:** ein `<SiteFooter>` in `app/_ui.tsx`, fünf Kopien ersetzt.
**Wer baut:** `senior-developer`.
**Fertig, wenn:** `<footer` genau einmal im Repo vorkommt und alle fünf Seiten
denselben Linksatz zeigen.

### U2 — Die Kopfleiste ist auf zwei Seiten ein Menü und auf drei ein Link

`/` und `/funktionen` rendern `<NavDropdown label={featuresPage.eyebrow}
items={nav.funktionenItems}>`. `/fuer-agenturen`, `/fuer-saas` und
`/kunden/retaiyn` rendern stattdessen `<a href="/funktionen">`.

Folge: die neun Funktionsnamen aus `nav.funktionenItems` — nach Teil A das
Inhaltsverzeichnis des Produkts — sind von drei der fünf Seiten aus
unerreichbar. Wer über eine Anzeige auf `/fuer-agenturen` landet, sieht nie,
was das Produkt kann, ohne vorher auf eine Übersichtsseite zu klicken.

Auch hier ist die Ursache fünffach kopiertes Markup.

**Vorschlag:** ein `<SiteHeader>` in `app/_ui.tsx`. Die Messwerte zur
Leistenbreite (page.tsx 58–88) gelten weiter und gehören mit ins Bauteil, sonst
misst sie in drei Monaten jemand neu.
**Wer baut:** `senior-developer`.
**Fertig, wenn:** `<header` genau einmal im Repo vorkommt, alle fünf Seiten
dasselbe Funktionen-Menü zeigen, und die Leiste bei 768, 1024, 1280 und
1440 px auf jeder der fünf Seiten einzeilig bleibt.

### U3 — Der Handlungsaufruf hat fünf Formen und verspricht Verschiedenes

| Wo | Knopf | Zweiter Weg | Notiz darunter |
|---|---|---|---|
| `/` Hero | `cta.primary` „Gespräch buchen" | `cta.secondary` „Oder erst Fragen stellen" | `cta.trialNote` „30 Minuten, kein Verkaufsgespräch…" |
| `/funktionen` | `CTAGroup` | ja | nein |
| `/fuer-agenturen` | `agencyPage.ctaLabel` „Gespräch buchen" | nein | nein |
| `/fuer-saas` | `saasPage.ctaLabel` „Gespräch buchen" | nein | nein |
| `/kunden/retaiyn` | `customerPage.ctaLabel` „Gespräch buchen" | nein | nein |
| `CustomerSection` | `customer.mirror.cta` „Dreißig Minuten über eure Zielgruppe" | — | nein |

Der Knopf heißt viermal gleich, steht aber in vier verschiedenen
Wörterbuch-Schlüsseln — eine Änderung müsste an vier Stellen gemacht werden.
Und die stärkste Zeile der ganzen Seite, **„kein Verkaufsgespräch"**, steht
auf genau einer von fünf Seiten. Auf den vier Seiten, auf denen ein
Interessent tatsächlich landet, wenn er aus einer Kaltmail oder Anzeige kommt,
fehlt sie.

**Vorschlag:** `cta.primary`, `cta.secondary` und `cta.trialNote` gelten
überall. Die vier seitenspezifischen `ctaLabel` fallen. `customer.mirror.cta`
bleibt als einzige Ausnahme — sie ist auf den Inhalt des Blocks gemünzt und
nennt die Dauer, was hier trägt.

**Wer baut:** `copywriter` (prüfen, ob `trialNote` auf allen fünf Seiten
stimmt — sie spricht von „eurer Kundenstruktur", und auf `/fuer-saas` gibt es
die nicht), `senior-developer` (die vier `ctaLabel` entfernen, beide Sprachen).
**Fertig, wenn:** `ctaLabel` in `dict.ts` nur noch in `customPage` vorkommt
und die Notiz auf allen fünf Seiten unter dem Hero-Knopf steht.

### U4 — Der Schluss-CTA ist auf der Startseite doppelt so groß wie auf den anderen vier

`app/page.tsx` 858: `text-[2rem] sm:text-[2.75rem]`, dazu `CTAGroup` (zwei
Wege). Die anderen vier Seiten: `text-2xl sm:text-3xl` und ein Knopf. Ein
erkennbarer Grund fehlt — es ist die Reihenfolge, in der die Seiten entstanden
sind.

**Wer baut:** `ui-designer` (eine Größe für alle fünf; ob die kleinere oder
die größere gewinnt, ist eine Gestaltungsentscheidung).
**Fertig, wenn:** die fünf Schluss-CTAs bei 375 px und 1440 px identische
Schriftgrößen und denselben Aufbau haben.

### U5 — Die Bildverteilung schwankt um den Faktor vier

Auf `/funktionen` (`app/funktionen/page.tsx` 28–70):

| Gruppe | Bilder | Länge des Fließtexts |
|---|---|---|
| `enrich` | **4** | 225 Zeichen |
| `send` | **4** | 214 Zeichen |
| `find` | 2 | 417 |
| `tech`, `personalize`, `check`, `protect`, `pipeline` | je 1 | 160–349 |
| **`write`** | **0** | **647 — der längste Text der Seite** |

Das ist Punkt 1 des Betreibers, und die Zahlen sagen, warum er es gemerkt hat:
der längste Text der Seite steht neben nichts, während die beiden kürzesten
vier Bilder tragen.

Zum Vergleich die anderen Seiten: `/fuer-agenturen` vier von sechs
Abschnitten mit Bild, `/fuer-saas` zwei von fünf, `/kunden/retaiyn` einer von
fünf plus zwei in voller Breite. Diese drei sind jeweils in sich begründet
(die Kommentare in den Dateien sagen für jeden bildlosen Abschnitt, warum) —
kein Handlungsbedarf.

**Vorschlag:** `write` bekommt `CampaignMockup` (siehe Teil C, Punkt 1),
`send` gibt es ab und steht dann auf drei. `enrich` gibt
`VerificationReportMockup` an `check` ab — die Adressprüfung ist eine
Prüfung, keine Anreicherung, und `check` hat heute genau ein Bild bei
261 Zeichen Text.

**Wer baut:** `senior-developer` (Zuordnung in `visuals`).
**Fertig, wenn:** keine Gruppe auf `/funktionen` mehr als drei oder weniger
als ein Bild hat.

### U6 — Die Anrede wechselt innerhalb der Startseite

Gezählt über die deutsche Hälfte von `dict.ts` (Zeilen 9–2437): **126
Du-Formen gegen 87 Ihr-Formen.** Beides in Mengen, die kein Zufall sind.

Der Betreiber vermutet die Grenze zwischen den Seiten. Sie läuft aber
**mitten durch die Startseite**:

| Schlüssel | Anrede |
|---|---|
| `heroPromises[2].title` „**Du** weißt, was Termine bringt" | du |
| `guard.title` „…das **dir** Nein sagt" | du |
| `compare.title` „Kündige **dein** CRM" | du |
| `offerSection.title` „…nichts über **dich**" | du |
| `cta.trialNote` „…auf **eure** Kundenstruktur" | ihr |
| `customer.mirror.title` „Und in **eurer** Agentur?" | ihr |
| `why.earlyAccess` „**Ihr** redet mit dem, der es baut… für **euch**" | ihr |
| `finalCta.title` „Lasst uns **eure** Kaltakquise automatisieren" | ihr |

Zwischen `compare.title` („dein CRM") und `finalCta.title` („eure
Kaltakquise") liegen drei Abschnitte. `/funktionen` mischt genauso
(`personalize`: „gehört **euch**", `check`: „**eure** Texte", `find` und
`enrich` neutral).

**Empfehlung:** die Anrede folgt der **Zielgruppe der Seite**, nicht dem
Zufall.

| Seite | Anrede | Begründung |
|---|---|---|
| `/` | **ihr** | Der Hero sagt in Zeile eins „Für Agenturen". Eine Agentur ist ein Wir, kein Du. |
| `/funktionen` | **ihr** | folgt der Startseite |
| `/fuer-agenturen` | **ihr** | steht schon so |
| `/kunden/retaiyn` | **ihr** | `ctaTitle` sagt bereits „Redet mit uns" |
| `/fuer-saas` | **du** | dort liest ein Gründer, kein Team. Das ist die begründete Ausnahme, und sie bleibt. |

Das ist die teuerste Einzelmaßnahme dieses Dokuments — sie berührt beide
Sprachhälften an geschätzt dreistellig vielen Stellen (die englische Hälfte
ist davon nicht betroffen, „you" deckt beides). Sie ist trotzdem die richtige:
„Kündige dein CRM" und „Lasst uns eure Kaltakquise automatisieren" auf
derselben Seite ist genau das, was ein Leser als unsauber empfindet, ohne es
benennen zu können.

**Wer baut:** `copywriter` (nur deutsche Hälfte).
**Fertig, wenn:** ein Suchlauf nach ` du `, ` dir `, ` dein` über den
deutschen Teil von `dict.ts` nur noch innerhalb von `saasPage`, `customPage`,
`caseStudyPage` und `contactPage` Treffer liefert.

### U7 — Die Seite nennt drei verschiedene Nachfass-Rhythmen

| Fundstelle | Was dort steht |
|---|---|
| `featuresPage.groups.write.body` | vier Stufen an **Tag 0, 3, 5 und 7** |
| `offerSection.points[2].body` | vier Stufen an **Tag 0, 3, 5 und 7** |
| `customerPage.sections[2]` | „heute plus **Tag drei, fünf und sieben**" |
| `guardMockups.chain` | Tag 0, dann **„Tag 3, 5 und 7"** (am 13.08. korrigiert; der Kommentar dict.ts 729 nennt `PLAYBOOK_DELAYS = [0, 3, 2, 2]` aus dem App-Repo als Quelle) |
| **`campaignMockup.steps`** | **drei** Schritte: Tag 0, Tag 3, Tag 7 |

Das letzte ist falsch — und es steht als Bild in `/funktionen#send`, zwei
Abschnitte unter dem Text, der vier Stufen verspricht. Wer beides sieht,
zählt nach und findet einen Widerspruch auf derselben Seite. Auf einer
Website mit dem Abschnitt „Was wir dir nicht vormachen" ist das teuer.

Dazu: `campaignMockup.steps[2].title` heißt „Follow-up 2, Break-up", während
die Texte daneben sagen, dass **keine** Stufe mit einer Terminbitte endet und
jede bei derselben kleinen Frage landet. Das Bild erzählt eine Sequenz, die
die App nicht mehr schreibt.

**Wer baut:** `copywriter` (`campaignMockup.steps` auf vier Stufen, de/en, in
der Sprache der übrigen Stellen).
**Fertig, wenn:** ein Suchlauf nach „Tag 7" und „Tag 12" über `dict.ts` keine
Fundstelle mehr liefert, die einer anderen widerspricht, und
`campaignMockup.steps` vier Einträge hat.

### U8 — Ein gleichrangiger Block ohne Augenbraue

`app/page.tsx` 644: die zweite Hälfte von `#torwart` (`honesty`) trägt eine
`h3` in derselben Größe wie die Abschnittsüberschriften der Seite
(`text-2xl sm:text-[1.75rem]`), aber als einziger solcher Block **keine
Augenbraue**. Beim Scrollen liest sich das als Fortsetzung des Torwarts statt
als eigene Aussage — und „Zwölf Mails und eine Antwort sind nicht 8,3 %" ist
laut `VEREINFACHUNG.md` der schärfste Satz von beiden.

Behoben mit Teil A (dort schon in der Tabelle).

### U9 — Die Flächenfolge trägt, mit einer Ausnahme

Startseite: Hero (wash) · `#system` (panel2) · `#rundgang` (hell) ·
`#angebot` (hell) · `#agenturen` (panel2) · `#kunde` (hell) · `#kanaele`
(panel2) · `#crm` (hell) · `#torwart` (panel2) · `#ergaenzt` (hell) ·
`#startklar` (panel2) · `why` (hell) · `#faq` (panel2) · finalCta (hell).

Ab `#agenturen` ein sauberer Wechsel. Die einzige Ausnahme sind `#rundgang`
und `#angebot`: zwei helle Flächen von zusammen rund **7700 px**, getrennt nur
durch eine Haarlinie (der Kommentar page.tsx 281 nennt 4214 + 3469 px,
gemessen bei 1440 px) — und er begründet auch, warum ein Flächenwechsel dort
ausscheidet.

**Ich fasse das nicht an.** Die Begründung im Code trägt. Aber es ist die
Stelle, an der jede Kürzung am meisten bringt — und D1 kürzt genau dort.

**Ein Hinweis für den Bauenden, kein eigener Punkt:** auf den vier Unterseiten
hängt der Flächenton an `i % 2 === 1`, also an der **Position** in der
Schleife, nicht am Inhalt. Wer dort einen Abschnitt streicht (S5), kippt die
ganze Folge dahinter. Das gehört nach dem Streichen bei 1440 px nachgesehen.

### Was ausdrücklich **nicht** uneinheitlich ist

Ich habe die Aufzählungspunkte gezählt, weil der Betreiber sie nennt:
**24 von 25 Abschnitten über alle vier Unterseiten haben genau vier.** Die
einzige Ausnahme ist `featuresPage.groups.protect` mit drei. Das ist die
sauberste Konvention der ganzen Website und sollte nicht angefasst werden —
`protect` bekommt einen vierten Punkt oder bleibt die eine bewusste Ausnahme.

Die **Fließtextlängen** dagegen schwanken von 133 (`agencyPage.report`) bis
648 Zeichen (`customerPage.offer`), also um den Faktor fünf. Das ist der Grund,
warum die Seiten unterschiedlich dicht wirken, obwohl sie gleich gebaut sind.
Eine Obergrenze von rund 450 Zeichen je Abschnitts-Fließtext würde vier
Abschnitte betreffen (`write` 647, `customerPage.offer` 648,
`customerPage.who` 509, `saasPage.icp` 482) — und `write` ist ohnehin dran.

## B.3 Was raus kann

Vier Abschnitte. Danach steht die Startseite auf 13 statt 14 (der Zustand, den
`VEREINFACHUNG.md` angekündigt hatte), `/funktionen` auf 9 statt 10,
`/fuer-saas` auf 4 statt 5.

### S1 — `#startklar` von der Startseite

`app/page.tsx` 754–779. Zwei Karten, zehn Haken, laut Kommentar (Zeile 751)
682 px hoch.

Beide Hälften stehen bereits anderswo: „Die Anleitung sitzt im Werkzeug"
sagt `why.earlyAccess` („die Einrichtung machen wir gemeinsam") eine
Bildschirmhöhe weiter unten; „Der Abmeldelink ist Teil der Kampagne" steht als
`featuresPage.groups.protect` („Bestandskunden und Abmeldungen landen auf der
Sperrliste").

Der Abschnitt beantwortet außerdem eine Frage, die **nach** dem Termin kommt,
nicht davor: „schaffe ich das?" fragt niemand, der noch nicht weiß, ob er es
will. Er gehört in die FAQ, und die FAQ hat laut `VEREINFACHUNG.md` 1.4
ausdrücklich einen Platz freigehalten.

**Was gerettet wird:** die zwei Sätze als **ein** FAQ-Eintrag.
**Wer baut:** `copywriter` (der FAQ-Eintrag, de/en), `senior-developer`
(Abschnitt entfernen, `safeStart` aus beiden Wörterbuchhälften, Anker
`#startklar` prüfen — er steht in keinem Menüpunkt).
**Fertig, wenn:** `app/page.tsx` 13 `<section>`-Elemente hat, `safeStart` in
`dict.ts` nicht mehr vorkommt und `npx tsc --noEmit` sauber ist.

### S2 — Der Dashboard-Abschnitt am Ende von `/funktionen`

Punkt 2 des Betreibers. Ausführlich in Teil C.

### S3 — `/fuer-saas#multi`

`saasPage.sections[3]`, Augenbraue „Zwei Zielgruppen", Überschrift „Zwei
Angebote, ein Konto".

Der Abschnitt **widerspricht der Überschrift seiner eigenen Seite**:
`saasPage.title` lautet „Ein Produkt, eine Zielgruppe, kein Vertriebsteam."
Wer diese Seite betritt, hat eine Zielgruppe — sonst würde ihn die H1 nicht
abholen. Ihm auf halber Strecke zu erklären, dass man auch zwei führen kann,
ist eine Mechanik-Auskunft für einen Bestandskunden, keine Kaufentscheidung.

**Was gerettet wird:** ein FAQ-Eintrag oder ein Satz in
`featuresPage.groups.write.bullets`.
**Wer baut:** `senior-developer` (Abschnitt und Schlüssel entfernen),
`copywriter` (falls die Aussage als Bullet überlebt).
**Fertig, wenn:** `saasPage.sections` vier Einträge hat und die
Flächenfolge auf `/fuer-saas` bei 1440 px nachgesehen wurde (U9).

### S4 — `CoachFindingMockup` aus `/#angebot`

Kein ganzer Abschnitt, aber das zweitgrößte Bild der Startseite. Siehe D1.

---

# Teil C — Die vier Einzelstellen

## Punkt 1 — Das fehlende Bild bei `write`

**Bestätigt und eingegrenzt:** `visuals` in `app/funktionen/page.tsx` 28–70
hat acht Schlüssel (`find`, `tech`, `enrich`, `personalize`, `check`, `send`,
`pipeline`, `protect`), `featuresPage.groups` hat neun. Fehlend ist genau
**`write`** — kein weiterer. Die rechte Rasterspalte (`lg:col-span-3`, also
drei von fünf Spalten) rendert ein `<Reveal>` um `undefined`.

**Welches Bild dorthin gehört: `CampaignMockup`** — aus `send` verschoben,
nicht neu erfunden.

Drei Gründe:

1. **Es ist bereits das Bild dieser Funktion.** `campaignMockup.label` heißt
   wörtlich **„Sequenz"**, und die Komponente (`app/_mockups.tsx` 326) zeigt
   nichts als die Stufen einer Folge mit ihren Tagen. Das ist der Inhalt von
   `write` („Aus dem Angebot entstehen vier Stufen an Tag 0, 3, 5 und 7"), nicht
   der von `send` („Kampagnen, Postfächer, Zustellbarkeit").
2. **`send` trägt heute vier Bilder und hat 214 Zeichen Text.** Es gibt eines
   ab und steht danach auf drei — die Postfächer, die LinkedIn-Nachricht, die
   Zustellbarkeit. Das ist die Versand-Infrastruktur, und die Sequenz gehört
   nicht dazu.
3. **Es zwingt die Korrektur aus U7.** Wenn das Bild neben dem Text steht, der
   vier Stufen verspricht, fällt sofort auf, dass es drei zeigt.

**Ausdrücklich nicht: `OfferMapMockup` oder `CoachFindingMockup`.** Beide
ziehen ihren gesamten Text aus `t.offerSection.*`, also aus retaiyns echtem
Angebotsprofil. Auf `/fuer-saas` wurden sie genau deshalb weggelassen (die
Begründung steht im Kopf der Datei), und dieselbe Begründung trägt hier
zusätzlich: `/funktionen` zeigt **Funktionen**, nicht Kundenfälle. Eine
Katalogseite, die mitten in Gruppe fünf die zwölf Antworten eines namentlich
genannten Kunden aufblättert, wechselt die Gattung. Dazu käme, dass die
Angebotskarte damit auf drei von fünf Seiten stünde — sie steht heute schon
auf zweien (D1).

**Wer baut:** `senior-developer` (`visuals`-Zuordnung, `CampaignMockup` von
`send` nach `write`), `copywriter` (`campaignMockup.steps` auf vier Stufen,
U7).
**Fertig, wenn:** `Object.keys(visuals)` alle neun `groups[].id` abdeckt,
keine Gruppe ein leeres `div` rendert, und die vier Stufen im Bild dieselben
Tage tragen wie der Text daneben.

## Punkt 2 — Das Dashboard am Ende von `/funktionen`

**Bestätigt:** `app/funktionen/page.tsx` 159–165. Ein `<section>` mit einem
`Reveal` um `DashboardMockup` — keine Augenbraue, keine Überschrift, kein
Satz. Der Kommentar darüber sagt, es fasse alle Schritte zusammen und mache
die Kosten sichtbar; auf der Seite steht das nirgends.

**Entscheidung: weg.**

Begründung:

- **Ein Bild ohne Text kann nichts zusammenfassen.** Die Zusammenfassung ist
  eine Behauptung des Kommentars, keine Leistung der Seite. Wer die neun
  Gruppen gelesen hat und dann ein Dashboard sieht, liest es als zehnte
  Funktion ohne Namen — und nach Teil A ist die Seite gerade dabei, jeder
  Funktion einen Namen zu geben.
- **Die Alternative macht die Seite länger, nicht klarer.** Text dazu hieße:
  eine zehnte Augenbraue, eine zehnte Überschrift, ein zehnter Fließtext, für
  eine Ansicht, die keine eigene Funktion ist, sondern die Startansicht der
  App. Der Auftrag lautet kürzen.
- **Das Kostenargument gehört nicht hierher.** Die Kosten sind auf dieser
  Website bewusst kein Verkaufsargument — Preise stehen nirgends, `/preise` ist
  gelöscht, `hero.factBadge` fiel am 14.08. weil geliehene Zahlen nicht
  hierher gehören. Ein Bild, dessen unausgesprochene Aufgabe ein
  Kostenbeweis ist, steht quer zu dieser Entscheidung.
- **Die Ansicht ist auf der Website nicht verloren.** `hero.dashboardAlt` in
  `dict.ts` beschreibt sie weiterhin, und die Komponente bleibt für den Tag,
  an dem es einen Abschnitt gibt, in den sie gehört.

**Wer baut:** `senior-developer` (Abschnitt entfernen, `DashboardMockup` aus
den Importen; die Komponente bleibt in `_app-mockups.tsx`).
**Fertig, wenn:** `/funktionen` neun Funktionsabschnitte und den Schluss-CTA
hat, `npm run build` ohne Warnung zu ungenutzten Importen durchläuft, und der
Kommentar mit der falschen Behauptung verschwunden ist.

## Punkt 3 — „Die App wusste alles über den Empfänger und nichts über dich"

**Der Betreiber hat recht, und der Grund ist genau benennbar.**
`offerSection.title` (dict.ts 1737) benutzt „die App" als Subjekt. Auf einer
Seite, die ein Produkt verkauft, hat „die App" genau eine naheliegende
Bedeutung: das beworbene Produkt. Der Satz liest sich also als Eingeständnis
über Frostbreaker — an der Überschrift des Abschnitts, der Frostbreakers
stärkste Einzelfunktion verkauft.

Gemeint ist die Gegenrichtung: **jedes andere Werkzeug** weiß alles über den
Empfänger und nichts über den Absender. Der Satz stammt aus Migration 0090 im
App-Repo, wo „die App" eindeutig Frostbreaker meint und die Zeile die eigene
Entstehungsgeschichte erzählt. Diese Herkunft steht auf der Website nirgends,
und ohne sie kippt die Aussage.

Erschwerend: der Fließtext darunter (`offerSection.body`) erzählt dieselbe
Geschichte weiter — „stand alles in der Datenbank", „fing jede Kampagne mit
vier leeren Textfeldern an", „Seit es das Angebot gibt". Wer die Überschrift
falsch liest, liest den ganzen Absatz falsch mit.

**Wie die Aussage stattdessen trägt** (Anforderungen an den Text, nicht der
Text):

1. **Das Subjekt muss eindeutig fremd sein.** Nicht „die App", sondern das,
   womit der Leser heute arbeitet. Der Vorschlag des Betreibers geht in genau
   diese Richtung. Ob ein Anbietername fallen darf, ist offen — siehe O2.
2. **Der Gegensatz muss im Satz stehen, nicht dahinter.** Heute steht nur die
   Hälfte da („weiß nichts über dich"); die Auflösung („unseres schon")
   erschließt sich erst aus dem Abschnitt. Ein Vergleich, dessen zweite Hälfte
   fehlt, wird als Mangel gelesen.
3. **Es geht um Daten über den Absender, nicht über den Empfänger.** Das ist
   der eigentliche Inhalt: Firma, Rolle und Technik des Empfängers hat jedes
   Werkzeug; was **du** verkaufst, hat keines. Diese Asymmetrie ist die
   Verkaufsaussage, und sie darf nicht hinter der Pointe verschwinden.
4. **Der Fließtext muss mitgehen.** `offerSection.body` erzählt heute
   Frostbreakers Entstehung in der dritten Person. Er gehört auf denselben
   Standpunkt wie die neue Überschrift, sonst widerspricht der erste Absatz
   der Überschrift.
5. **Die Augenbraue liefert dabei die Klammer.** Nach Teil A heißt sie künftig
   **Angebotsprofil** — damit steht der Funktionsname über dem Vergleich, und
   der Vergleich muss ihn nicht mehr allein tragen.

**Wer baut:** `copywriter` (`offerSection.eyebrow`, `.title`, `.body`, de/en).
**Fertig, wenn:** ein Leser, der nur Augenbraue und Überschrift liest, sagen
kann, **welches** Werkzeug hier gemeint ist und was Frostbreaker anders macht
— ohne den Fließtext darunter. Prüfung am Standbild bei 375 px, wo Überschrift
und erster Absatz nicht gleichzeitig sichtbar sind.

## Punkt 5 — „Behalte Apollo. Behalte Instantly. Kündige dein CRM."

**Beide Einwände treffen zu.**

Zum ersten: `compare.tools` ist `["Apollo", "Hunter", "Instantly",
"Pipedrive"]` — vier gleichrangige Spalten. Die Überschrift hebt zwei davon
heraus und macht aus einer Tabelle über eine Werkzeugklasse eine Aussage über
zwei benannte Produkte. Wer weder Apollo noch Instantly benutzt — und das sind
die meisten — liest eine Überschrift, die ihn nicht meint, über einer Tabelle,
die ihn sehr wohl meint.

Zum zweiten: die Seite hat mit `#torwart`/`honesty` einen ganzen Abschnitt
darüber, nichts zu behaupten, was sie nicht belegen kann — und fordert drei
Abschnitte weiter in einer Überschrift zur Kündigung eines fremden Vertrags
auf. Das ist nicht nur der Ton; es ist auch eine Behauptung über den Betrieb
des Lesers, die niemand von außen prüfen kann. Der Kommentar über `compare`
(dict.ts 568–578) hat denselben Fehler schon einmal korrigiert: „Vier Abos
machten das gestern. Eines macht es heute." fiel, weil es die stärkste und
zugleich unwahre Zeile war. Die heutige Zeile ist die zweite Auflage desselben
Fehlers, eine Stufe leiser.

**Was ausdrücklich bleibt:** die Tabelle selbst, alle vierzehn Zeilen, alle
vier Spalten, sämtliche datierten Belegkommentare. Sie ist nach
`POSITIONIERUNG.md` das stärkste Stück der Seite und die einzige Stelle, die
den Einwand „habe ich doch schon" mit Belegen beantwortet. Es geht nur um
`compare.eyebrow`, `compare.title` und `compare.body`.

**Welche Aussage dort stehen soll:**

1. **Die Klasse, nicht die Marke.** „Deine Lead-Datenbank", „dein Sendetool" —
   die Namen stehen in den Spaltenköpfen und dürfen dort stehen. In der
   Überschrift machen sie aus vier Beispielen zwei Voraussetzungen.
2. **Additiv statt subtraktiv.** Die tragende Aussage der Tabelle ist nicht
   „was du wegwirfst", sondern **wer die Schritte macht, für die es kein
   Werkzeug gibt** — genau das sagt `compare.body` heute schon, und es ist der
   bessere Satz. Fünf der vierzehn Zeilen sind in **keinem** der vier Anbieter
   vorhanden (`opener`, `rulecheck`, `chain`, `linkedin`, und `onlyUs`
   markiert sie ausdrücklich). Das ist die Nachricht.
3. **Die Kündigung wird zur Folgerung, nicht zur Aufforderung.** Der
   wegfallende Posten (`compare.ledgerDrop`, das CRM-Abo je Sitzplatz) ist das
   Geldargument und muss sichtbar bleiben — aber als etwas, das der Leser
   selbst ausrechnet, nicht als etwas, das die Seite ihm aufträgt. Er steht
   ohnehin schon in der Bilanz **unter** der Tabelle, also an der Stelle, an
   der er trägt.
4. **BYOK ist kein Verzicht, sondern die Begründung.** Dass Apollo und
   Instantly bleiben, ist keine Einschränkung — es heißt, dass der Leser
   nichts umstellen muss. Diese Lesart trägt die Überschrift besser als die
   Aufzählung, was er behalten darf.
5. **Die Augenbraue bleibt ohne Funktionsnamen** („Was bleibt, was wegfällt"
   ist eine Vergleichsansage und funktioniert). Nach Teil A ist das eine der
   ausdrücklichen Ausnahmen.

**Wer baut:** `copywriter` (`compare.eyebrow`, `.title`, `.body`, de/en).
**Fertig, wenn:** in `compare.title` und `compare.body` kein Anbietername mehr
steht (Suchlauf nach „Apollo", „Instantly", „Hunter", „Pipedrive" findet nur
noch `compare.tools` und die Zeilenkommentare), keine Aufforderung zur
Kündigung eines fremden Vertrags mehr dasteht, und die vierzehn Zeilen
unverändert sind.

---

# Reihenfolge

Streichen zuerst, Umbenennen danach, Neuschreiben zuletzt. Jeder Schritt ein
eigener Commit. Wer die Reihenfolge dreht, benennt Abschnitte um, die danach
fallen.

1. **S1, S2, S3, S4** — die vier Streichungen. Danach ist messbar, wie lang
   die fünf Seiten wirklich noch sind, und die Flächenfolge (U9) lässt sich
   einmal statt viermal nachsehen.
2. **U1, U2** — `SiteHeader` und `SiteFooter`. Reine Aufräumarbeit, aber sie
   muss **vor** allem Textlichen kommen: danach ändert man Navigation und Fuß
   an einer statt an fünf Stellen.
3. **Teil A** — die Augenbrauen. Hängt an Schritt 1 (`#startklar` und
   `saasPage.multi` sind dann weg) und an Schritt 2 (`nav.funktionenItems` ist
   die Quelle und muss überall gleich erreichbar sein).
4. **D1, D2, D3** — die Angebots-Bilder, die Wege zur Kundenseite, der
   Kundenabschnitt als Anriss. Ein Vorgang, drei Dateien.
5. **U7, Punkt 1** — die vier Stufen und `CampaignMockup` an seinen richtigen
   Platz. Klein, unabhängig, und es macht eine falsche Aussage wahr.
6. **Punkt 3, Punkt 5** — die beiden Überschriften. Zuletzt, weil sie am
   meisten Nachdenken kosten und von keinem anderen Schritt blockiert werden.
7. **U6** — die Anrede. Ganz zuletzt, in einem eigenen Commit, weil sie jede
   Zeile berührt, die die Schritte davor angefasst haben. Vorher gemacht,
   müsste sie zweimal gemacht werden.
8. **U3, U4, U5** — die CTA-Formen, die Größe des Schluss-CTA, die
   Bildverteilung. Feinschliff; keiner davon blockiert etwas.

---

# Was ich bewusst weglasse

- **Keinen neuen Abschnitt, auf keiner der fünf Seiten.** Nicht einen. Punkt 2
  wird gestrichen statt betextet, Punkt 1 bekommt ein vorhandenes Bild,
  Punkt 3 und 5 sind Umformulierungen. Netto kommt nichts hinzu.
- **Die Vergleichstabelle bleibt vollständig.** Vierzehn Zeilen sind viel
  Text, und jeder datierte Belegkommentar veraltet irgendwann. Aber sie ist
  die einzige Stelle, die den teuersten Einwand mit Belegen beantwortet, und
  der Betreiber hat sie gestern erst belegt.
- **`/fuer-agenturen` bleibt inhaltlich unangetastet.** Sechs Abschnitte, vier
  mit Bild, in sich schlüssig. Ich ändere dort zwei Augenbrauen und den Fuß,
  sonst nichts. Es ist die Seite für die Hauptzielgruppe und die einzige, die
  vom Arbeitstag statt von Funktionen handelt.
- **`/kunden/retaiyn` bleibt vollständig unangetastet**, bis auf Fuß und
  Kopfleiste. Sie ist zwei Tage alt, sie ist der einzige Beleg der Website,
  und `CoachFindingMockup` gehört dorthin, nicht anderswohin.
- **Kein Umbau des Rundgangs**, obwohl er mit 4214 px der höchste Abschnitt
  der Startseite ist. Er ist die einzige Stelle, an der der Leser das Produkt
  in Betrieb sieht — laut `KONVERSION.md` das meistgenannte Kaufhindernis.
  Wer dort kürzt, kürzt am Grund, aus dem jemand bucht.
- **Keine Zahl über Wirkung, Ersparnis oder Antwortquoten**, an keiner der
  Stellen, die dieses Dokument neu schreiben lässt. Auch keine vorsichtige.
- **Keine Zeitschätzung** für die acht Schritte. Ich kenne den Umfang der
  englischen Hälfte bei U6 nicht genau genug, und eine geratene Zahl wäre auf
  einer Website, die wegen einer geliehenen Zahl einen Abschnitt gestrichen
  hat, der falsche Anfang.
- **Keine Anker-Aufräumung über das Nötige hinaus.** `#startklar` fällt mit
  seinem Abschnitt; `#integrationen`, `#ehrlich`, `#telefon`, `#ergaenzt`
  bleiben als leere Marker, weil sie in fremden Links stehen können.

---

# Fragen, die nur der Betreiber beantworten kann

**F1 — Du oder ihr auf der Startseite?**
Mein Vorschlag ist **ihr**, weil der Hero in Zeile eins „Für Agenturen" sagt
und eine Agentur ein Wir ist. `/fuer-saas` bleibt bei „du". Das ist die
teuerste Einzelmaßnahme dieses Dokuments und die einzige, die ich nicht ohne
seine Entscheidung anstoßen würde — wer verkauft, weiß besser, wie im Gespräch
tatsächlich geredet wird. Die Alternative (durchgehend „du", auch auf
`/fuer-agenturen`) ist genauso vertretbar; **unvertretbar ist nur der heutige
Zustand**, beides innerhalb von drei Abschnitten.

**F2 — Darf in der Vergleichs-Überschrift ein Anbietername stehen?**
Der Betreiber sagt, Apollo solle nicht hervorgehoben werden. Das schließt
zwei Dinge nicht aus, die verschieden teuer sind: eine Überschrift ganz ohne
Namen (mein Vorschlag), oder eine, die **alle vier** nennt. Letzteres wäre
nicht hervorhebend, aber lang. Ich empfehle keinen Namen — er sollte
widersprechen, wenn ein Name im Gespräch tatsächlich Türen öffnet.

**F3 — Wie verbindlich ist „wir binden auch dein Werkzeug an"?**
Das ist die offene Frage O2 aus `VEREINFACHUNG.md`, und sie ist mit Punkt 5
zurück: der Betreiber sagt, „die meisten kann man eh anbinden, vor allem die
gängigen". Wenn das eine **Zusage** ist, gehört sie in die Einleitung der
Vergleichstabelle und ist dort ein starkes Argument. Wenn es eine
**Möglichkeit** ist, darf sie dort nicht stehen. Heute angebunden sind Google
Maps, Hunter, Apollo, Prospeo, Instantly und CSV — mehr nicht.

**F4 — Was passiert mit `#startklar`, wenn die FAQ es nicht aufnimmt?**
Ich schlage vor, den Abschnitt zu streichen und seine zwei Aussagen zu einem
FAQ-Eintrag zusammenzuziehen. Wenn „ihr braucht kein Vorwissen" im Verkaufs-
gespräch der häufigste Einwand ist, ist das die falsche Empfehlung — dann
gehört er nicht in die FAQ, sondern in `cta.trialNote`, wo ihn jeder liest,
der auf den Knopf schaut.

**F5 — Stimmt `campaignMockup` mit vier Stufen, oder ist die App weiter?**
`PLAYBOOK_DELAYS = [0, 3, 2, 2]` steht als Quelle im Kommentar (dict.ts 729),
gemessen am 13.08. Wenn sich das seither geändert hat, ändert sich U7 mit —
und die Zahlen an fünf Stellen. Vor dem Umschreiben einmal im App-Repo
nachsehen, nicht aus diesem Dokument abschreiben.
