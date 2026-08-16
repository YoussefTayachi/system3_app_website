# Ein Vertriebsteam aus einer Person

*2026-08-16. Betrifft `/fuer-saas` (`saasPage` im Wörterbuch), am Rand die
Navigation.*

## Was der Betreiber will

> one product replaces a sales team. und dann kannst du eben aufzählen […]
> man braucht also nur eine person die diese app leitet und man leitet quasi
> ein sales und marketing team. man spart sich ganz viel geld und zeit

Fünf Aufzählungspunkte, je eine KI: Entscheider finden, Firmen recherchieren,
Mails schreiben, versenden, Antworten auswerten. Statt „AI" soll
**Frostbreaker** dastehen.

---

## Befund 1 · Vier der fünf Punkte stimmen. Einer nicht.

Nachgesehen im App-Repo, Datei für Datei:

| Punkt | Stimmt? | Beleg |
|---|---|---|
| Entscheider finden, E-Mail + LinkedIn + Telefon | **ja, mit Einschränkung** | `find_decisionmaker.py` fragt ausdrücklich nach „email address, direct/mobile phone number", das Schema führt `email`, `phone`, `linkedin` |
| Firmen recherchieren, Personalisierung je Firma | **ja** | `personalize.py` liest `company_summary` und/oder den gecrawlten Website-Text |
| Angebot + Painpoints → die Mail | **ja** | `offer-from-website.ts`, `offer-from-search.ts`, `sequence-prompt.ts` |
| **„eine AI sendet die Mails automatisch"** | **nein** | Es gibt keine KI im Versand. Instantly sendet, nach Zeitplan, über die eigenen Postfächer. Frostbreaker hat bewusst keine eigene Sende-Engine |
| Antworten einstufen, beste Fassung, CRM | **ja** | `classifyReply()` in `cron/instantly-sync` ist ein echter OpenAI-Aufruf je eingehender Mail; `variant-winner.ts`, `copy-outcomes.ts` |

**Die Einschränkung beim Telefon** gehört mitgeschrieben: die App selbst
unterscheidet zwischen Durchwahl und Firmennummer — Migration 0095 führt eine
Spalte `phone_is_company` genau dafür. „Liefert dir die Telefonnummer" ohne
Einschränkung wäre eine Zusage, die die App an dieser Stelle ehrlicher
formuliert als die Website.

**Der Versandpunkt wird umgeschrieben, nicht gestrichen.** Fünfmal „eine KI
macht X" liest sich ohnehin wie Füllmaterial. Eine Zeile, die sagt *hier
arbeitet keine KI, hier arbeitet ein Zeitplan*, macht die anderen vier
glaubwürdiger.

---

## Befund 2 · Der Inhalt steht schon auf der Startseite

`walkthrough` erzählt seit Wochen dieselben Schritte, in derselben
Reihenfolge, mit Bildern. Und in `dict.ts` steht über `saasPage` ausdrücklich:

> KEINE FORMULIERUNG VON `saasPage`, `agencyPage` ODER `offerSection`
> WOERTLICH WIEDERHOLEN.

Ein zweiter Rundgang auf `/fuer-saas` wäre genau das. **Die Aufzählung
rechtfertigt sich nur durch einen anderen Blickwinkel** — und den liefert der
Betreiber selbst:

| | Startseite `walkthrough` | Neu auf `/fuer-saas` |
|---|---|---|
| Frage | Was passiert nacheinander? | **Wer würde das sonst machen?** |
| Form | sechs Schritte, chronologisch, mit Bildern | sechs Zeilen, Aufgabe → wer sie übernimmt |
| Pointe | „so kommt ein Termin zustande" | **„dafür stellt niemand jemanden ein"** |

Das ist kein Etikett auf derselben Sache. Der Rundgang ist ein Ablauf, die
neue Liste ist eine **Stellenbeschreibung**, und die letzte Zeile darin ist
der Leser selbst.

---

## Der Umbau

### A · Die Überschrift der Seite

Heute: „Ein Produkt, eine Zielgruppe, kein Vertriebsteam." — drei Substantive,
die eine Lage beschreiben und nichts versprechen.

Der Vorschlag des Betreibers lautet „one product replaces a sales team". Der
Satz hat auf **dieser** Seite ein Problem: „Produkt" meint hier das Produkt
des Lesers. Wörtlich gelesen sagt der Satz, sein Produkt ersetze sein
Vertriebsteam — gemeint ist Frostbreaker. Zwei Fassungen, die das auflösen:

| | DE | EN |
|---|---|---|
| **A (empfohlen)** | Ein Vertriebsteam, das aus einer Person besteht. | A sales team of one. |
| B (näher am Original) | Ein Produkt verkaufen, ohne jemanden dafür einzustellen. | Sell one product without hiring anyone to do it. |

A ist die Behauptung, die die neue Liste direkt darunter beweist. Kein leerer
Titel im Sinne der bisherigen Regel: er sagt etwas, das nachprüfbar ist, und
die nächsten sechs Zeilen prüfen es nach.

### B · Der neue Abschnitt, als erster auf der Seite

Eyebrow: **„Wer welchen Teil übernimmt"** / „Who does which part"
Titel: **„Das machen sonst vier Leute"** / „Four people would normally do this"
Vorspann: **„Alles davon läuft automatisch, sobald die Lead-Liste steht."**

**Keine einzelne Zeile nennt einen Handelnden.** Der Betreiber:

> du musst nicht schreiben eine ki macht das und eine ki macht das, das liest
> sich zu schlecht. sondern sinngemäß dass das automatisiert wird.

Das löst nebenbei den Ehrlichkeitsknoten aus Befund 1 von selbst: wenn keine
Zeile eine KI behauptet, braucht der Versand auch keine Berichtigung. Der
Vorspann sagt einmal für alle fünf, dass es automatisch läuft — und das
stimmt für den Versand genauso wie für die vier Modellaufrufe.

Darunter sechs Zeilen. Links die Aufgabe, rechts was dabei herauskommt:

1. **Finden** — Aus deinem Wunschkunden-Profil wird eine Liste mit Namen:
   direkte E-Mail-Adresse, LinkedIn-Profil und, wo es eine gibt, die
   Telefonnummer.
2. **Recherchieren** — Jede Firma wird einzeln nachgeschlagen. Daraus entsteht
   der Aufhänger, mit dem ihre Mail anfängt.
3. **Schreiben** — Dein Angebot kommt aus deiner Website, die Lage der
   Empfänger aus der Lead-Liste. Daraus entstehen die Mails und die
   LinkedIn-Nachricht — als Entwurf, den du überschreiben kannst.
4. **Senden** — Die Mails gehen über deine eigenen Postfächer raus, über den
   Tag verteilt. Wer antwortet, bekommt im selben Moment keine weitere mehr.
5. **Auswerten** — Jede Antwort wird eingestuft und landet als Deal oder
   Aufgabe im CRM. Daneben steht, welche Fassung mehr Antworten gebracht hat.
6. **Sprechen — du.** Das Gespräch, sobald jemand antwortet. Dafür ist die App
   nicht gebaut, und das bleibt auch so.

**Warum „vier Leute" bei fünf Aufgaben.** Finden und Recherchieren ist in
jedem echten Team eine Stelle (Lead-Recherche), dazu Text, Kampagnenbetrieb
und Auswertung. Vier Rollen, fünf Zeilen — die Zahl ist gedeckt, nicht
gegriffen.

Zeile 6 ist der Punkt, an dem die Liste ehrlich wird und gleichzeitig ihre
Pointe kriegt. Sie sagt, was die App **nicht** übernimmt, und genau deshalb
glaubt man ihr die fünf Zeilen darüber. Sie ist außerdem die Brücke zum
bestehenden Abschnitt `limits` weiter unten.

**„Spart Geld und Zeit" kommt ohne Zahl aus.** Was ein Vertriebsmitarbeiter
kostet, wissen wir nicht, und eine erfundene Zahl wäre der erste Bruch mit der
Regel, die diese Website trägt. Die Ersparnis steht im Titel („die
Stellenbeschreibung von vier Leuten") und in Zeile 6 — der Leser rechnet
selbst, und zwar mit seinen Zahlen statt mit unseren.

### C · Der Vorspann wird kürzer

Der heutige `intro` beschreibt in vier Zeilen genau das, was die Liste danach
in sechs Zeilen zeigt — und nennt dabei „vier Mails pro Empfänger", also
wieder die Zahlen, die gestern überall gefallen sind. Er schrumpft auf zwei
Sätze: wen die Seite meint, und dass darunter steht, wer welchen Teil macht.

### D · Überschneidung mit den bestehenden Abschnitten

Zeile 3 berührt `offer`, Zeile 5 berührt `learning`. Das ist gewollt: die
Liste ist die **Übersicht**, die beiden Abschnitte sind die **Tiefe** zu zwei
ihrer Punkte. Bedingung: in der Liste steht je genau **ein** Satz, und keine
der Zahlen aus `offer` (zwölf Felder, sieben Vorschläge) oder `learning`
(Stufe/Fassung, 30 Kontakte) taucht dort auf.

### E · Technisch: der Abschnitt gehört **nicht** in `sections`

`page.tsx` färbt die Abschnitte über `i % 2 === 1` — also über die Position in
der Schleife. Ein zusätzlicher Eintrag an Position 0 kippt jede Fläche
dahinter, und `limits` läge wieder hell direkt am hellen Schluss-CTA. Genau
diese Naht ist am 14.08. beseitigt worden und im Kopf der Datei vermerkt.

Deshalb: eigener `<section>`-Block zwischen Hero und Schleife, mit eigenem
Wörterbuch-Schlüssel `saasPage.crew`. Er braucht ohnehin ein anderes Layout
als die Häkchen-Liste — zwei Spalten, Aufgabe links, Text rechts, Zeile 6
abgesetzt.

---

## Die Wortfrage: `client` oder `customer`?

Kurz: **customer bleibt**, und zwar wegen einer Kollision, nicht wegen
Geschmack.

Im Englischen ist `client` der Kunde einer **Dienstleistung** (Agentur,
Kanzlei, Berater), `customer` der Käufer eines **Produkts**. Beide Wörter
werden auf dieser Website schon gebraucht — und `client` ist bereits belegt:

- `/fuer-agenturen` sagt „Eight clients. Three channels." Damit sind die
  **zahlenden Kunden der Agentur** gemeint.
- Die Navigation sagt „Winning customers for others" — die Leute, die die
  Agentur **für** diese Kunden gewinnt.

Würden beide Ebenen `client` heißen, stünde in der Navigation „winning clients
for your clients". Ein Wort, zwei Bedeutungen, im selben Satz.

Für `/fuer-saas` allein wäre `customers` ohnehin das richtige Wort: der Leser
verkauft ein Produkt, keine Dienstleistung.

---

## Reihenfolge

1. **A** — Überschrift, in beiden Sprachen. Eine Zeile, sofort sichtbar.
2. **C** — Vorspann kürzen. Muss vor B passieren, sonst steht dasselbe zweimal
   untereinander.
3. **B + E** — `saasPage.crew` im Wörterbuch, eigener Block in `page.tsx`.

## Prüfen

- `npx tsc --noEmit` — die Formparität de/en ist der einzige Test dafür, dass
  `crew` in beiden Sprachen vollständig ist.
- Kein Satz aus `walkthrough`, `offer` oder `learning` steht wörtlich in
  `crew`. Stichproben: „Aufhänger", „eingestuft", „Fassung".
- Die Flächenfolge unter dem neuen Block ist unverändert: `offer` hell,
  `icp` Band, `learning` hell, `limits` Band.
- 320 px, 375 px, 1440 px in beiden Sprachen — die zweispaltige Zeile ist ein
  Raster und braucht `min-w-0`, aus demselben Grund wie sechsmal zuvor.
- Keine der sechs Zeilen nennt „KI", „Frostbreaker" oder einen anderen
  Handelnden. Wer das später wieder einsetzt, holt sich das Problem aus
  Befund 1 zurück.

## Nachtrag: derselbe Fehler auf `/fuer-agenturen`

> beim punkt mit winning customers for others würde ich als landing page nicht
> einen painpoint nehmen sonst denkt der user bei der app ist das so.

Zutreffend, und es betraf **nur den Hero**. Die sechs Abschnitte darunter sind
alle lösungsförmig; der Vorspann war der einzige Text der Seite, der den
Zustand *ohne* die App beschrieb — „mehrere Postfächer, mehrere Sperrlisten,
mehrere Zielgruppen, und am Monatsende eine Tabelle, die jemand von Hand
baut". Ohne ein Wort, das die Zeitform markiert, liest sich eine solche
Aufzählung als Beschreibung dessen, was man **bekommt**.

| | vorher | jetzt |
|---|---|---|
| Titel | Acht Kunden. Drei Kanäle. **Jeden Tag.** | Acht Kunden. Drei Kanäle. **Ein Werkzeug.** |
| Vorspann | der Alltag ohne uns | ein Workspace je Kunde, mit einem Klick gewechselt |

Der Dreiklang und die Zahl bleiben, nur das dritte Glied wechselt von der Lage
zur Antwort.

**Der Schmerz ist nicht gelöscht, er steht an der richtigen Stelle.** Die
Tabelle von Hand steht weiter in `report` („Ersetzt die Tabelle, die sonst am
Monatsende entsteht"), die Haftung in `workspaces`. Ein Schmerz direkt neben
seiner Antwort wirkt; derselbe Schmerz allein im Hero beschreibt das Produkt.

## Nachtrag: was beim Bauen dazukam

- **„Stellenbeschreibung" hat die Überschrift gesprengt.** Bei 320 px war das
  Wort allein 361 px breit, die Spalte 273 px. Die deutsche Komposita-Falle,
  zum ersten Mal nicht in einem Mockup, sondern in einer Überschrift — und
  keine Rastersache, deshalb half kein `min-w-0`. Gelöst durch das kürzere
  Wort, nicht durch Silbentrennung: `h2Cls` trägt zehn Seiten, und eine
  globale Trennregel wegen eines Wortes zu setzen wäre der falsche Hebel.
- Gemessen nach dem Umbau: 0 Überläufe aus 6 Messungen (de/en × 320/375/1440),
  Flächenfolge unverändert `offer` hell → `icp` Band → `learning` hell →
  `limits` Band, Typecheck sauber.
