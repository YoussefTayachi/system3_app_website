# Das Angebot auf die Website bringen — und eine zweite Zielgruppe dazu

Stand 2026-08-13. **Zur Freigabe. Nichts davon ist umgesetzt.**

Grundlage: Code beider Repos am heutigen Tag. App: `apps/web/app/offers/`,
`apps/web/lib/copy/*` (Playbook, Coach, Sequenz, LinkedIn, Refine, Angebot aus
Website), `lib/offers.ts`, `lib/campaign-readiness.ts`, `lib/report/copy-outcomes.ts`,
Migrationen 0090/0091/0093. Website: `app/page.tsx` (937 Zeilen, 17 Abschnitte),
`app/dict.ts` (3749 Zeilen), `app/funktionen/`, `app/fuer-agenturen/`, 31
Mockup-Komponenten.

Ersetzt die Tabelle in `APP-TO-WEBSITE-PLAN.md` Abschnitt 1 (vom 2026-07-24)
vollständig. Baut auf `POSITIONIERUNG.md` (Struktur der Startseite, umgesetzt)
und `KONVERSION.md` (Stufe 2, 3.5 und die offene Zielgruppenfrage aus Stufe 4
sind weiter offen).

---

## 0. Der Kern in vier Sätzen

Die Website verkauft heute die eine Hälfte der App: **finden, versenden,
messen.** Die andere Hälfte — **schreiben** — ist in den letzten Tagen
entstanden und kommt auf der Seite mit null Wörtern vor. Das Wort „Angebot" im
Sinne dieses Features steht kein einziges Mal in `dict.ts`.

Das ist nicht bloß eine Lücke. Es ist die Lücke unter der stärksten Behauptung,
die die Seite bereits aufstellt: *„Frostbreaker schreibt den Text, verschickt
ihn und sieht die Antwort darauf"* (`compare.closing`). Die eigene
Beweistabelle direkt darüber hat für „schreibt den Text" **keine Zeile**. Ein
Fachkäufer, der nachrechnet — und die Tabelle ist genau dafür gebaut — findet
den Satz nicht wieder.

---

# TEIL 1 — Der Abgleich, am heutigen Stand

## 1.1 Was fehlt (kommt auf der Website gar nicht vor)

Sortiert nach Verkaufswert, nicht nach Vollständigkeit.

| # | Fähigkeit der App | Wo im Code | Warum es Geld bringt |
|---|---|---|---|
| **1** | **Angebotsprofil → vier Mailstufen mit je zwei Fassungen** | `lib/copy/sequence-prompt.ts`, `app/api/copy/sequence` | Der Punkt, an dem Akquise für die meisten Nutzer endet: acht leere Textfelder. Alles davor auf der Seite führt zu diesen acht Feldern hin |
| **2** | **THAW als Coach: prüft das Angebot und schlägt Ersatz vor** | `lib/copy/coach-prompt.ts`, `app/api/copy/offer-review` | Der einzige Beleg auf der ganzen Seite, der ein Werkzeug zeigt, das *widerspricht*. Passt exakt zum Torwart, der schon der stärkste Abschnitt ist |
| **3** | **Aus der eigenen Website vorbefüllen, Feld für Feld übernehmbar** | `lib/copy/offer-from-website.ts`, `app/api/offers/from-website` | Direkte Antwort auf den schwersten Befund aus `KONVERSION.md` 3.4 („höchste Aktivierungshürde, die ich dieses Jahr gesehen habe") |
| **4** | **Das Playbook als nachmessbare Regeln** | `lib/copy/playbook.ts`, `sequenceProblems()` | Die einzige belegbare Qualitätsaussage über erzeugten Text, die keine Ergebniszahl braucht. Sagt „nein", nicht „bitte" |
| **5** | **LinkedIn-Vorlage aus demselben Angebot** | `lib/copy/linkedin-prompt.ts`, `app/api/copy/linkedin` | Die Seite zeigt heute die *fertig eingesetzte* LinkedIn-Nachricht, sagt aber nicht, dass ihr Text aus derselben Quelle stammt wie die Mails. Halbe Geschichte |
| 6 | Nachschärfen je Stufe („kürzer", „direkter", „Abschiedsmail") | `app/api/copy/refine` | Nimmt den Einwand „KI-Text, den ich dann doch umschreibe" |
| 7 | Bis zu zehn Angebote je Workspace, eines als Standard | `lib/offers.ts` (`MAX_OFFERS`), Migration 0090 | Trägt Teil 3 (SaaS mit zwei Zielgruppen) und die Agentur mit zwei Nischen |
| 8 | Apollo-Cache kontoweit: dieselbe Person nie zweimal bezahlen | Migration 0087 | Echtes Geldargument, passt zur BYOK-Ehrlichkeit. Gehört auf `/funktionen`, nicht auf die Startseite |
| 9 | Laufende Suche abbrechen, Archiv, Ordner, Suchvorlagen | Migrationen 0085/0086/0089 | Aufräumen kostete vorher Credits. `/funktionen` |
| 10 | Aufhänger-Sprache einstellbar, Wortgrenze 35 | Migrationen 0083/0094 | Detail. Höchstens ein Halbsatz auf `/funktionen` |

## 1.2 Was untertrieben ist (kommt vor, wird aber als Nebensache gezeigt)

| # | Wo | Was heute dasteht | Was daran falsch gewichtet ist |
|---|---|---|---|
| **1** | Navigation, `nav.produktItems` | Menüpunkt **„Email Copy Coach"** → `/funktionen#check` | Der Name verspricht THAW. Geliefert wird der Lesbarkeits- und Spam-Wörter-Check im Browser. **Der stärkste Name im Menü zeigt auf die schwächste Funktion** |
| **2** | `compare.rows` | Zeilen für Aufhänger und Copy-Check, keine fürs Schreiben | `compare.closing` behauptet „schreibt den Text". Die Tabelle darüber belegt es nicht. Der billigste Eingriff mit dem höchsten Wert |
| **3** | `dailyDiff.before.steps` | „Kampagne und Nachfass-Sequenz aufbauen." → `manual: false` | Die Seite rechnet **den größten Handarbeitsblock aus ihrer eigenen Vorher-Rechnung heraus.** Acht Stufen mit zwei Fassungen zu schreiben ist keine Klickarbeit. Der Zähler „4 von Hand" müsste 5 sein |
| **4** | `walkthrough.steps[1]` | „Jeder bekommt seinen eigenen ersten Satz" | Stimmt, ist aber der Stand von vor drei Wochen. Die App schreibt heute den ganzen Brief; der Aufhänger ist die eine Zeile, die je Firma *verschieden* ist |
| **5** | `systemMap.stages.contact` | „E-Mail-Sequenz mit eigenem Aufhänger je Lead" | Der Kasten „Finden" nennt vier Quellen. Der Kasten „Kontaktieren" nennt keine einzige Grundlage — das Angebot fehlt als Eingang ins System |
| 6 | `systemMap.loop` | „Fassung A gegen B" | Verschweigt, dass **die App beide Fassungen selbst geschrieben hat** und die beste als Vorbild in den nächsten Generator zurückfließt (`bestExample`, ab `MIN_SAMPLE`). Die Schleife ist geschlossen und wird halb erzählt |
| 7 | `featuresPage.groups.personalize` | „Der Icebreaker gehört euch" | Richtig, aber es ist die einzige Schreibfunktion auf der Funktionsseite |

## 1.3 Die fünf, die Geld bringen

1. Die Copy-Hälfte fehlt ganz — Angebot, Coach, Sequenz.
2. Die Vergleichstabelle belegt den eigenen stärksten Satz nicht.
3. Der Menüpunkt „Email Copy Coach" führt an der Funktion vorbei.
4. Die Vorher-Nachher-Rechnung rechnet den größten Block heraus.
5. Die Vorbefüllung aus der Website beantwortet den härtesten Konversionsbefund
   und steht nirgends.

Alles Weitere (Punkte 8–10 oben) ist `/funktionen`-Arbeit und wird in diesem
Plan nicht weiter behandelt.

---

# TEIL 2 — Die Verkaufsthese belegbar machen

Die These des Betreibers, unverändert: *man braucht keine Sales-Mitarbeiter
mehr, sondern eine Person, die die App benutzt.*

Sie wird hier nicht abgeschwächt. Sie wird **nachweisbar** gemacht — indem die
Seite Schritt für Schritt zeigt, welche Arbeit verschwindet, und in demselben
Atemzug sagt, welche bleibt. Eine Verkaufsseite, die eine Lücke verschweigt,
verliert das Gespräch beim Onboarding.

## 2.1 Die Arbeitsschritte, einzeln zugeordnet

| Arbeitsschritt | Was ein Junior-SDR / Kaltakquise-Texter dafür tut | Was die App tut | Nachweis im Code |
|---|---|---|---|
| Angebot verstehen | Einarbeitung, Website lesen, nachfragen | Liest die Seite, schlägt **7 der 12 Felder** vor. Jeder Vorschlag wird einzeln übernommen oder verworfen, nichts wird automatisch gespeichert | `SUGGESTED_FIELDS`, `offer-from-website.ts` |
| Angebot schärfen | Senior liest gegen | Prüft jedes Feld gegen seinen Zweck, findet **Inhalte im falschen Feld** (Beleg steht im Ergebnisfeld), schlägt fertigen Ersatztext vor, schreibt leere Pflichtfelder selbst. Höchstens fünf Befunde, jeder mit Gegenvorschlag — ohne Vorschlag wird der Befund verworfen | `coach-prompt.ts`, `MAX_FINDINGS`, `parseCoachFindings` |
| Zielgruppe recherchieren | Listen bauen, filtern | Vier Suchwege | *steht schon auf der Seite* |
| Aufhänger je Firma | Website ansehen, einen Satz schreiben | Ein recherchierter Satz je Kontakt | *steht schon auf der Seite* |
| **Die Sequenz schreiben** | Vier Stufen, zwei Fassungen, Betreffe — acht Texte | Erzeugt alle acht aus dem Angebot. Tag 0, 3, 5, 7. Wortgrenzen 90, 70, 50, 35. Ein Betreff über alle vier. Der Micro-Yes wortgleich in jeder Stufe | `sequence-prompt.ts`, `PLAYBOOK_DELAYS`, `STEP_MAX_WORDS` |
| Sich an die Regeln halten | Senior korrigiert, oder niemand | **Misst mechanisch nach**, was messbar ist: zu lange Stufe, Stufe nicht kürzer als die vorherige, Betreff gewandert, Betreff ist die abgeschriebene Frage, Terminbitte, verbotene Wendung, wörtlich abgeschriebenes Angebotsfeld | `sequenceProblems()`, `playbook.ts` |
| Nachschärfen | Runde für Runde umschreiben | Eine Stufe, ein Auftrag, alles Übrige bleibt stehen | `refine-prompt.ts` |
| LinkedIn-Variante | Neu schreiben, 300 Zeichen | Aus demselben Angebot, ohne Betreff, Signatur mechanisch angehängt statt vom Modell getippt | `linkedin-prompt.ts` |
| Versenden, Antwort einordnen, auswerten | | *steht schon auf der Seite* | |
| Lernen, was gewirkt hat | Bauchgefühl | Die beste eigene Fassung geht als Vorbild in den nächsten Generator — **erst ab ausreichender Menge**, sonst zementiert man einen Zufallstreffer | `bestExample`, `MIN_SAMPLE` |

## 2.2 Was die App nachweislich NICHT abnimmt

Das gehört auf die Seite, nicht ins Kleingedruckte. Es ist außerdem das beste
Material, das die Seite für ihren eigenen Ton hat.

1. **Den Stolperstein deiner Nische.** Fünf der zwölf Felder werden aus der
   Website **absichtlich nicht** vorgeschlagen: was du nach einem Ja schickst,
   wie lange das Ansehen dauert, deine eine Frage, warum Käufer zögern, und der
   Ton. Das sind Entscheidungen, keine Fundstücke — und auf fast jeder Website
   steht an der Stelle „Termin buchen", also genau das, was der Micro-Yes nicht
   ist. (`NICHT_VORSCHLAGEN` in `offer-from-website.ts`, mit ebendieser
   Begründung im Code.)
2. **Den Beleg.** Ist das Feld `proof` leer, wird daraus eine ausdrückliche
   Anweisung, in der Mail nichts zu behaupten — keine Kunden, keine Zahlen,
   keine Jahre. Ein Junior improvisiert an der Stelle. Die App nicht.
3. **Das Absenden bei LinkedIn und den Anruf.** Steht bereits auf der Seite und
   bleibt unverändert.
4. **Das Lesen vor dem Versand.** Der Entwurf landet im Kampagnenformular, nicht
   in der Leitung. Der Torwart steht danach davor wie bisher.
5. **Das Gespräch nach dem Ja.**
6. **Die Entscheidung, ob das Angebot taugt.** Der Coach prüft Form und
   Zuordnung — ob ein Markt das kaufen will, weiß er nicht.

**Der Satz, aus dem der `copywriter` arbeiten soll** (Aussage, nicht Wortlaut):
*Was du weißt, gibst du einmal ein. Was du danach jede Woche getippt hättest,
tippt sie.*

## 2.3 Welche Zahlen die Seite benutzen darf

Belegbar, weil sie **Mechanik beschreiben und kein Ergebnis versprechen** — die
Sorte, mit der die Seite ohnehin schon arbeitet („vier der elf Prüfungen können
den Start aufhalten"):

- **7 von 12** Feldern schlägt die App aus deiner Website vor.
- **5 Felder** bleiben bewusst leer, weil sie Entscheidungen sind.
- **4 Stufen, 2 Fassungen, 8 Texte** aus einem Angebot.
- **Tag 0, 3, 5, 7** — die Abstände schrumpfen.
- **90, 70, 50, 35 Wörter** — jede Stufe kürzer als die vorherige.
- **Höchstens 5 Befunde**, und jeder muss einen einsetzbaren Ersatz mitbringen.

**Keine dieser Zahlen wird gerundet, gedeutet oder hochgerechnet.** Sie stehen
so im Code.

## 2.4 Die eine Zahl, die fehlt — und woher sie käme

Der stärkste Hebel wäre ein Zeitvergleich. Ich erfinde ihn nicht. Was nötig
wäre:

> **Wie lange dauert es vom leeren Angebot bis zu acht Texten im
> Kampagnenformular?**

Quelle: das eigene Konto. `offers.created_at` gegen den Zeitpunkt der ersten
erzeugten Kampagnenstufen desselben Workspaces — oder schlicht eine gestoppte
Bildschirmaufnahme eines echten Durchlaufs. Eine einzige gemessene Minutenzahl
ersetzt jeden Stundenvergleich und jeden Gehaltsvergleich.

**Ausdrücklich nicht empfohlen:** ein Gehaltsvergleich („ein Junior-SDR kostet
X"). Er wäre eine fremde Zahl über einen fremden Arbeitsmarkt, direkt neben
belegbaren eigenen — dasselbe Problem, das der Litmus-Badge im Hero heute schon
hat und das `POSITIONIERUNG.md` als offenen Punkt 1 führt.

---

# TEIL 3 — SaaS-Anbieter als zweite Zielgruppe

## 3.1 Was am Code wirklich anders ist

Geprüft, nicht vermutet:

| | Agentur | SaaS-Anbieter |
|---|---|---|
| Mehrere Workspaces (`PLANS.agency`) | **Der Kaufgrund** | braucht sie nicht |
| Sperrliste je Workspace, Branding je Workspace | Haftung | irrelevant |
| Report-Link ohne Login (`app/report/[id]`) | **Der Kaufgrund** | irrelevant |
| Team-Zugänge mit Rolle (Migration 0081) | wichtig | nett |
| Mehrere Angebote je Workspace (bis 10, eines Standard) | zwei Nischen | **zwei Zielgruppen für dasselbe Produkt** |
| Technologie-Filter (10.000+ Slugs) | manchmal | **oft der ICP selbst** |
| Prospeo nach Anlass: Stellenausschreibungen, Traffic, Wachstum | manchmal | **die naheliegendste Segmentierung** |
| Rückkopplung „welche Fassung brachte Termine" | wechselnde Nischen → jedes Mal von vorn | **immer dasselbe Produkt → die Daten stapeln sich** |

Migration 0090 nennt den Fall wörtlich: *„eine Agentur bedient zwei Nischen, ein
Shop verkauft zwei Produkte."* Die Mehrfachangebote sind für beide gebaut.

## 3.2 Warum das Angebot-Feature für SaaS stärker ist

Drei Gründe, jeder am Code belegt:

1. **Der, der es ausfüllt, ist der Gründer.** Bei einer Agentur muss jemand das
   Angebot eines Dritten verstehen, bevor er die zwölf Felder beantworten kann.
   Bei einem SaaS-Anbieter kennt der, der tippt, das Produkt am besten. Die
   Aktivierungshürde aus `KONVERSION.md` 3.4 ist für diese Gruppe die
   niedrigste, die es geben kann — und die Vorbefüllung aus der eigenen Website
   senkt sie noch einmal.
2. **Einmal ausfüllen heißt: dauerhaft ausgefüllt.** Ein Angebot, das nicht
   wechselt, wird über Monate zur selben Sequenz — und erst dadurch lohnt sich
   die Auswertung. `MIN_SAMPLE` sagt genau das aus der anderen Richtung: unter
   einer Menge wird keine Fassung zum Vorbild. Wer die Nische alle zwei Monate
   wechselt, erreicht diese Menge nie.
3. **Ein Produkt, zwei Zielgruppen, ein Konto.** Zwei Angebote im selben
   Workspace, eines als Standard. Kein zweiter Account, kein zweiter Plan.

**Der Satz, der die Gruppe trägt** (Aussage): *Dein Produkt kennst du. Was dir
fehlt, ist nicht das Wissen, sondern der Apparat, der es jede Woche
ausschreibt.*

## 3.3 Eigene Unterseite oder Startseiten-Abschnitt?

**Empfehlung: eigene Unterseite `/fuer-saas`, gebaut wie `/fuer-agenturen`.**

Begründung:

- Die Startseite sagt in ihrer **ersten Zeile** „Für Agenturen, die Outbound für
  ihre Kunden machen" (`hero.eyebrow`). Ein SaaS-Abschnitt an Position 9 einer
  Seite, deren erste Zeile jemand anderen anspricht, verliert den Leser in den
  ersten 40 Sekunden — das ist wörtlich der Befund aus `KONVERSION.md` 1, nur mit
  vertauschten Rollen.
- `/fuer-agenturen` ist das erprobte Muster: Route + `layout.tsx` mit `metadata`
  + ein `sections`-Array in `dict.ts`. Eine zweite Seite kostet keine neue
  Architektur.
- Der Betreiber macht selbst Kaltakquise. Eine Segmentseite ist ein Ziel für
  Kaltmails und Anzeigen; ein Anker mitten in einer 12.000-px-Seite ist es nicht.
- Die Alternative — beide Gruppen auf der Startseite — zwingt zu einem
  allgemeineren Hero. Damit verliert die Startseite genau die Schärfe, die sie
  am 2026-08-06 bewusst bekommen hat.

**Auf der Startseite ändert sich dadurch genau eines:** das Agentur-Band
(`#agenturen`) wird zu **zwei Verweiskarten** — Agenturen / SaaS. Der Hero-Eyebrow
wird geöffnet, sodass er beide meint.

**Achtung, Reihenfolge:** Der Eyebrow-Wechsel dreht eine Entscheidung vom
2026-08-06 zurück. `POSITIONIERUNG.md` schließt mit „von hier an einzeln ändern".
Er gehört deshalb **nicht** in dieselbe Auslieferung wie der Angebot-Abschnitt,
sondern danach und allein.

---

# DIE AUFTRÄGE

Sechs Stufen. Jede für sich deploybar und einzeln überprüfbar. Jede Textänderung
ist doppelt — `dict.ts` erzwingt DE und EN über `type Dictionary = typeof de`.

---

## Stufe 1 — Die Widersprüche raus (klein, schützt alles Weitere)

### 1a. Vergleichstabelle: zwei Zeilen

- **Was:** Zwei neue Zeilen in `compare.rows`. Erstens: aus einem hinterlegten
  Angebot die vier Stufen mit beiden Fassungen erzeugen. Zweitens: den erzeugten
  Text gegen feste Regeln nachmessen und die Verstöße benennen, bevor er ins
  Formular kommt.
- **Wo:** `app/dict.ts`, `compare.rows`, direkt nach `opener` und vor
  `copycheck`. Startseiten-Abschnitt `#ergaenzt`.
- **Beleg:** keiner nötig, die Tabelle ist der Beleg.
- **Wer:** `copywriter` (Formulierung DE+EN) gemeinsam mit `senior-developer`
  (Recherche der Wettbewerber-Spalten).
- **Fertig, wenn:** beide Zeilen stehen, die vier Wettbewerber-Werte an den
  **öffentlichen Leistungsbeschreibungen geprüft** wurden (Apollo und Instantly
  haben KI-Textfunktionen — die Zeilen müssen deshalb eng genug formuliert sein,
  dass ein „—" oder „teilw." belegbar bleibt; die Regeln aus
  `POSITIONIERUNG.md` Abschnitt 6 gelten unverändert), und `compare.footnote`
  das Prüfdatum nennt.

### 1b. Die Alltagsrechnung korrigieren

- **Was:** In `dailyDiff.before.steps` bekommt „Kampagne und Nachfass-Sequenz
  aufbauen" `manual: true`; `before.manualCount` wird von 4 auf 5 gesetzt. In
  `dailyDiff.after.steps` kommt ein Schritt hinzu: das Angebot einmal ausfüllen,
  mit dem ausdrücklichen Vermerk „einmal, nicht je Kampagne". `after.count` 4 → 5,
  `after.manualCount` bleibt 0 nicht — hier ist ehrlich **1**, denn das Angebot
  tippt ein Mensch.
- **Wo:** `app/dict.ts`, `dailyDiff`. Startseiten-Abschnitt `#alltag`.
- **Beleg:** vorhanden, die Spalten selbst.
- **Wer:** `copywriter`.
- **Fertig, wenn:** beide Zähler zu den Listen passen (DE und EN), und die
  Nachher-Spalte einen Handarbeitsschritt zeigt statt null. Eine Null neben einer
  Seite, die einen Abschnitt „Was wir nicht behaupten" hat, ist teurer als eine
  Eins.

### 1c. Der Menüpunkt zeigt endlich hin, wo er hingehört

- **Was:** `nav.produktItems` — „Email Copy Coach" heißt künftig, was es ist
  (der Textcheck vor dem Senden), und ein neuer Punkt führt auf den
  Angebot-Abschnitt. Zwei Einträge statt eines missverstandenen.
- **Wo:** `app/dict.ts`, `nav.produktItems` (DE Zeile ~41, EN Zeile ~2084).
  Ziele: `/funktionen#check` bleibt für den Textcheck, neu `/#angebot`.
- **Beleg:** —
- **Wer:** `copywriter`, Anker-Prüfung durch `senior-developer`.
- **Fertig, wenn:** beide Anker springen an die richtige Stelle, in DE und EN,
  und die Navigationsleiste zwischen 768 und 1024 px nicht überläuft (der Grund
  für die `lg:`-Regeln in `page.tsx` steht dort im Kommentar).

---

## Stufe 2 — Der Angebot-Abschnitt auf der Startseite *(das Kernstück)*

### 2a. Neuer Abschnitt `#angebot`

- **Was:** Vier Aussagen, in dieser Reihenfolge:
  1. **Die App wusste alles über den Empfänger und nichts über dich.** Das ist
     der ehrliche Aufhänger und steht wörtlich so in Migration 0090.
  2. **Zwölf Fragen, einmal beantwortet.** Sieben davon schlägt sie aus deiner
     Website vor, fünf bleiben leer, weil sie Entscheidungen sind.
  3. **THAW liest gegen — und schreibt einen besseren Satz daneben.** Nicht
     „das ist zu vage", sondern der Ersatztext. Kein Befund ohne Gegenvorschlag.
  4. **Daraus entstehen acht Texte**, plus die LinkedIn-Nachricht aus derselben
     Quelle.
  Dazu, im selben Abschnitt und nicht kleiner gesetzt: **was sie nicht abnimmt**
  (Abschnitt 2.2 dieses Plans, Punkte 1, 2 und 4).
- **Wo:** `app/page.tsx`, **direkt nach dem Rundgang (`#rundgang`) und vor dem
  Agentur-Band (`#agenturen`).** Begründung: der Rundgang endet bei „jetzt weißt
  du, was funktioniert hat" — die natürliche Anschlussfrage ist „und wer schreibt
  das alles?". Vor dem Rundgang stünde er als Vorbedingung und würde die Erzählung
  aufhalten.
- **Beleg:** zwei neue Mockups, siehe 2c.
- **Wer:** `ui-designer` (Aufbau, zwei Bilder nebeneinander, Verhalten unter
  `md`), `copywriter` (alle Texte DE+EN), `senior-developer` (Abschnitt in
  `page.tsx` einhängen, Anker, `Reveal`).
- **Fertig, wenn:** der Abschnitt auf 375, 768, 1024 und 1440 px ohne
  Querscrollen steht, DE und EN vollständig sind, und ein Leser, der nur diesen
  einen Abschnitt liest, sagen kann, was er selbst noch tun muss.

### 2b. Rundgang: Schritt 2 wird ehrlich

- **Was:** Der bisherige Schritt 2 („Jeder bekommt seinen eigenen ersten Satz")
  bleibt Schritt 2 und behält sein Bild (`AiAgentMockup`), bekommt aber einen
  neuen `detail`-Satz: der Aufhänger ist die **eine Zeile, die je Firma
  verschieden ist** — der Rest der Mail kommt aus dem Angebot, und dorthin führt
  ein Link. **Kein siebter Schritt.** Sieben Schritte wären ein längerer
  Rundgang, kein besserer.
- **Wo:** `app/dict.ts`, `walkthrough.steps[1]`.
- **Beleg:** vorhanden (`AiAgentMockup`).
- **Wer:** `copywriter`.
- **Fertig, wenn:** der `detail`-Satz auf `#angebot` verweist und Schritt 2 sich
  nicht mehr wie die ganze Schreibfunktion liest.

### 2c. Zwei neue Mockups

| Komponente | Datei | Was sie zeigt | Warum genau die |
|---|---|---|---|
| **`OfferMapMockup`** | neu, `app/_offer-mockups.tsx` | Die Angebotskarte: vier Ecken (wer · woran hängt er · was hat er davon · worum wird gebeten), THAW in der Mitte, ein **bernsteinfarbener Pfeil zwischen zwei Knoten** mit der Beschriftung „dein Beleg steht im Ergebnisfeld" | Der eine Befund, den ein Formular strukturell nicht darstellen kann. Genau der Fehler, den ein Junior macht — und der Grund, warum die Karte in der App eine Karte ist |
| **`CoachFindingMockup`** | neu, `app/_offer-mockups.tsx` | **Ein** Befund, groß: der schwache Satz durchgestrichen, das Urteil in einem Satz, darunter der fertige Ersatztext mit „Übernehmen" und „Verwerfen" | Der stärkste Einzelbeleg der ganzen Seite. Ein Werkzeug, das einem widerspricht *und* die Arbeit macht, verkauft besser als jedes Adjektiv |

- **Wo:** neue Datei `app/_offer-mockups.tsx` (nicht in `_app-mockups.tsx`
  dazu — die Datei ist bei 968 Zeilen).
- **Wer:** `ui-designer` (zeichnet), `copywriter` (die Beispieltexte darin,
  DE+EN).
- **Fertig, wenn:** die Regel aus `POSITIONIERUNG.md` Abschnitt 9 eingehalten
  ist — **nachgebaut, nicht abfotografiert**, erfundene Firmennamen, Kopfkommentar
  nennt den echten Bildschirm und welche Zahlen erfunden sind. Nur semantische
  Tokens, kein rohes Hex, Dunkelmodus geprüft.

---

## Stufe 3 — Die Tiefe auf `/funktionen`

- **Was:** Neue Gruppe **„Schreiben"** in `featuresPage.groups`, zwischen
  `personalize` und `check`. Sie trägt die nachprüfbaren Regeln, die auf der
  Startseite keinen Platz haben: Tag 0/3/5/7 · 90/70/50/35 Wörter · ein Betreff
  über die ganze Sequenz · der Micro-Yes wortgleich in jeder Stufe · keine
  Terminbitte, kein Buchungslink · kein erfundener Beleg, wenn das Feld leer ist ·
  verbotene Wendungen · zwei Fassungen, die sich im **Ansatz** unterscheiden, nicht
  in der Wortwahl. Dazu: Nachschärfen je Stufe, LinkedIn aus demselben Angebot,
  bis zu zehn Angebote je Workspace.
- **Wo:** `app/dict.ts`, `featuresPage.groups`, neue `id: "write"`.
- **Beleg:** die beiden neuen Mockups aus Stufe 2 lassen sich hier
  wiederverwenden; zusätzlich ein drittes, falls die `ui-designer`-Rolle es für
  nötig hält:
  **`SequenceMockup`** — vier Stufen untereinander mit **sichtbar schrumpfender
  Blockhöhe**, gleicher Betreff über allen vieren, derselbe Micro-Yes unten in
  jeder. Das Gefälle ist das Argument, genau wie die Länge der linken Spalte in
  `#alltag`.
- **Wer:** `copywriter` (Gruppe DE+EN), `ui-designer` (falls `SequenceMockup`
  kommt), `senior-developer` (Gruppe einhängen, Anker `#write` in
  `nav.funktionenItems`).
- **Fertig, wenn:** jede genannte Zahl im App-Code wiederzufinden ist und keine
  Zahl dabei ist, die ein Ergebnis verspricht.

---

## Stufe 4 — FAQ: die zwei Einwände, die jetzt entstehen

- **Was:** Zwei neue Einträge in `faq.items`.
  1. *„Schreibt die KI die Mails allein und verschickt sie?"* — Nein. Der Entwurf
     landet im Kampagnenformular, du liest ihn, änderst ihn, und der Torwart steht
     danach davor wie bisher.
  2. *„Was, wenn ich keine Referenzen habe?"* — Dann steht keine in der Mail. Ein
     leeres Feld ist kein Loch, das gefüllt wird, sondern eine ausdrückliche
     Anweisung, an dieser Stelle nichts zu behaupten.
- **Wo:** `app/dict.ts`, `faq.items`, Startseite `#faq`.
- **Beleg:** —
- **Wer:** `copywriter`.
- **Fertig, wenn:** beide Antworten in DE und EN stehen und keine von beiden
  eine Zahl enthält.

---

## Stufe 5 — `/fuer-saas`

- **Was:** Eine Seite nach dem Muster von `/fuer-agenturen`. Abschnitte:

| # | Abschnitt | Aussage | Beleg |
|---|---|---|---|
| 1 | Hero | Ein Produkt, eine Zielgruppe — und niemand, der Vertrieb gelernt hat. Was fehlt, ist nicht das Wissen, sondern der Apparat | — |
| 2 | Das Angebot füllt der aus, der es gebaut hat | Zwölf Fragen, sieben davon aus der eigenen Website vorgeschlagen. Der Gründer braucht dafür keine Einarbeitung | `OfferMapMockup` (aus Stufe 2) |
| 3 | Dein ICP hängt an einer Technik, nicht an einer Branche | Technologie-Filter und die Anlass-Suche (Stellenausschreibungen, Traffic, Wachstum) | `TechFilterMockup` ✅ *(liegt ungenutzt in `_app-mockups.tsx`)* |
| 4 | **Ein Angebot heißt: die Auswertung lohnt sich** | Wer immer dasselbe verkauft, stapelt die Daten zur selben Sequenz. Die beste Fassung wird zum Vorbild für die nächste — und zwar erst ab einer Menge, unter der wir gar nichts zeigen | `CopyOutcomesMockup` ✅ |
| 5 | Zwei Zielgruppen, zwei Angebote, ein Konto | Bis zu zehn Angebote je Workspace, eines als Standard. Kein zweiter Account | kleine Auswahlliste, Teil von `OfferMapMockup` |
| 6 | Was es nicht ist | Kein Werkzeug für Bestandskunden, kein In-App-Messaging, keine Produktdaten. Es ist Kaltakquise nach außen | — |
| 7 | CTA | Gespräch, wie überall | — |

  **Abschnitt 4 ist der Höhepunkt der Seite, nicht Abschnitt 2.** Er ist das eine
  Argument, das für diese Gruppe **stärker** ist als für Agenturen — und damit der
  Grund, warum die Seite überhaupt existiert und nicht bloß eine umformulierte
  Agenturseite ist.

- **Wo:** neue Route `app/fuer-saas/page.tsx` + `app/fuer-saas/layout.tsx` (nur
  `metadata`, Muster: `app/fuer-agenturen/layout.tsx`). Neuer Block
  `saasPage` in `dict.ts`, DE und EN.
- **Wer:** `copywriter` (alle Texte), `ui-designer` (Aufbau, soweit er von
  `/fuer-agenturen` abweicht), `senior-developer` (Route, Layout, Metadata,
  Navigation).
- **Fertig, wenn:** die Seite über die Navigation erreichbar ist, `metadata`
  aus dem Dictionary kommt, DE und EN vollständig sind, und kein einziger
  Abschnitt eine Formulierung von `/fuer-agenturen` wörtlich wiederholt. Zwei
  Segmentseiten, die dasselbe sagen, sind schlechter als eine.

---

## Stufe 6 — Die Startseite macht beiden Gruppen die Tür auf *(zuletzt, einzeln)*

- **Was:** Der Hero-Eyebrow (`hero.eyebrow`) nennt nicht mehr nur Agenturen. Das
  Agentur-Band (`#agenturen`) wird zu **zwei gleich breiten Verweiskarten** —
  eine auf `/fuer-agenturen`, eine auf `/fuer-saas`, jede mit dem Satz, der die
  jeweilige Gruppe meint.
- **Wo:** `app/page.tsx`, Abschnitt `#agenturen` (der Anker bleibt bestehen,
  damit alte Links funktionieren). `app/dict.ts`, `hero.eyebrow` und `agency`.
- **Beleg:** `AgencyMockup` ✅ bleibt bei der Agenturkarte; die SaaS-Karte
  bekommt kein eigenes Bild — zwei Bilder nebeneinander würden die beiden Karten
  in einen Wettbewerb schicken, den keine gewinnen soll.
- **Wer:** `copywriter` (Eyebrow und beide Karten), `ui-designer` (zwei Karten
  statt eines Bandes), `senior-developer` (Umbau, Anker).
- **Fertig, wenn:** die Karten gleich hoch sind (unterschiedliche Höhen werden
  als Rangfolge gelesen — dieselbe Begründung wie bei `#kanaele` in `page.tsx`),
  und die Auslieferung **allein** erfolgt, ohne andere Änderung im selben Push.
  `POSITIONIERUNG.md` schließt mit „von hier an einzeln ändern", und das ist der
  Eingriff, bei dem das am meisten zählt.

---

## Reihenfolge und warum

1. **Stufe 1** zuerst, weil sie Widersprüche entfernt, die jede weitere Aussage
   beschädigen. Klein, kein neues Bild, sofort deploybar.
2. **Stufe 2** als Kernstück — die Copy-Hälfte kommt auf die Seite.
3. **Stufe 3 und 4** ziehen die Tiefe und die Einwände nach.
4. **Stufe 5** ist die neue Zielgruppe. Sie kann parallel laufen, sobald die
   beiden Mockups aus Stufe 2 stehen.
5. **Stufe 6** ganz zum Schluss und einzeln, weil sie die Startseiten-Ausrichtung
   ändert.

---

## Was ich bewusst weglasse

| Weggelassen | Warum |
|---|---|
| **Jeder Gehalts- oder Stundenvergleich** („ersetzt X Stellen", „spart Y Stunden") | Nicht gemessen. Auf einer Seite, deren Rechner am 2026-08-06 genau deswegen von drei Quoten befreit wurde, wäre das ein Rückschritt. Der Ersatz steht in 2.4: eine gemessene Minutenzahl aus dem eigenen Konto |
| **Eine Antwort- oder Terminquote für erzeugte Texte** | Es gibt sie nicht. Und die Seite zeigt bereits 2,7 % und zweimal „zu wenig" — eine bessere Zahl daneben ohne Beleg würde beide entwerten |
| **Ein siebter Rundgang-Schritt** | Sechs Schritte tragen den Dreiklang aus dem Hero. Ein siebter macht den Rundgang länger, nicht klarer. Das Angebot bekommt stattdessen einen eigenen Abschnitt, in dem es der Hauptpunkt ist statt ein Siebtel |
| **THAW als eigener Abschnitt oder Namensträger** | Die Figur darf vorkommen — sie steht in der App, und Wiedererkennung nach der Anmeldung ist etwas wert. Aber keine Überschrift heißt nach ihr. Überschriften heißen nach dem, was passiert |
| **Ein Demo-Konto oder ein Produktvideo** | Der offene Punkt 3.5 aus `KONVERSION.md`, und der teuerste der ganzen Seite. Er ist eine eigene Entscheidung mit eigenem Aufwand und gehört nicht in einen Plan über Texte und Abschnitte |
| **Such-Archiv, Ordner, Suchvorlagen, Suche abbrechen, Apollo-Cache** | Echte Verbesserungen, aber kein Kaufgrund. `/funktionen`-Arbeit, wenn dort ohnehin etwas angefasst wird — nicht als eigener Anlass |
| **Preise oder Pläne für SaaS** | Auf der Seite stehen seit dem 2026-08-06 gar keine Preise mehr. Eine neue Segmentseite ist nicht der Ort, an dem diese Entscheidung zurückgedreht wird |
| **Der Litmus-Badge im Hero** | Ich schlage nicht vor, ihn im Rahmen dieses Plans zu streichen — aber er bleibt der offene Punkt 1 aus `POSITIONIERUNG.md`, und er wird schwächer, sobald zwei Abschnitte weiter unten eigene, belegbare Mechanikzahlen stehen. Eigene Entscheidung, eigener Push |
| **Ein Umbau der Systemkarte** | `systemMap.stages.contact` untertreibt (Befund 1.2/5), aber die Karte ist das erste Bild nach dem Hero und wurde einmal gebaut, um eine Frage in fünf Sekunden zu beantworten. Sie um einen Eingang „Angebot" zu erweitern, kostet mehr Klarheit als es bringt. Der Angebot-Abschnitt steht ohnehin 500 Pixel weiter unten |

---

## Offene Frage an den Betreiber

Eine. Sie blockiert Stufe 6, nicht die Stufen 1 bis 5:

**Bleibt die Agentur die Hauptzielgruppe, oder werden es zwei gleichrangige?**
`KONVERSION.md` Stufe 4 hat diese Frage schon einmal gestellt und sie ist nie
beantwortet worden — die Seite hat sich am 2026-08-06 stattdessen einfach
festgelegt. Wenn SaaS gleichrangig wird, ändert sich der Hero. Wenn SaaS ein
zweiter Weg neben dem Hauptweg ist, reicht die Verweiskarte und der Eyebrow
bleibt, wie er ist.
