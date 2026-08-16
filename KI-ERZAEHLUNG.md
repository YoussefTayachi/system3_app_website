# Von Regeln zur Hilfe: was die KI tatsächlich tut

*2026-08-15. Betrifft `#angebot` auf der Startseite, `#write` auf `/funktionen`
und die Angebotskarte.*

## Der Befund

Der Betreiber:

> das steht so als müsste man immer in 2 tagen abständen follow up schicken und
> als müsste man immer 4 email sequenzen schicken, das stimmt aber nicht das
> kann man sich aussuchen. die 4 steps und diese tagesabstände sind nur
> empfehlungen von uns. dasselbe mit den 90, 70, 50, 35 words.

**Nachgeprüft in der App, und er hat recht.** `sequence-prompt.ts` nennt die
Werte ausdrücklich Vorgaben:

> „Abstände in Tagen, **von uns gesetzt** und nicht vom Modell. […] Die Werte
> kommen aus dem Playbook."

Und das Kampagnenformular hat einen Knopf **„+ Weiteren Schritt hinzufügen"**.
Der Nutzer kann Stufen ergänzen, Tage ändern, Texte überschreiben.

Die Website macht daraus eine Mechanik, der man sich zu fügen hat:

> „Aus dem Angebot entstehen vier Stufen an Tag 0, 3, 5 und 7 […] Jede Stufe
> ist kürzer als die vorherige, 90, 70, 50, 35 Wörter, und jede endet bei
> derselben kleinen Frage."

Das liest sich als Zwangsjacke. **Gemeint war ein Startpunkt.**

---

## Die Umdeutung, die der Betreiber will

> ich würd das lieber so drehen dass es eine AI gibt die dir bei der
> formulierung deines offers hilft, bei der erstellung der kampagne hilft, bei
> den email sequenzen basierend auf ihrem wissen von optimalen cold email
> outreach — das heißt auch wenn man sich nicht auskennt oder neu ist bei cold
> email gibt die AI schon sehr gute Vorlagen vor mit denen man schon abschicken
> kann.

Das ist dieselbe Funktion, aus der anderen Richtung erzählt — und es ist die
Richtung, die der dritten Tür auf der Startseite entspricht („E-Mail ist bei
euch neu"). Wer noch nie kalt geschrieben hat, sucht keine Regeln, sondern
einen Startpunkt, den er absenden kann.

**Die Vorgaben verschwinden nicht, sie wechseln die Rolle:** aus „so muss es
sein" wird „so fängt es an, und es ist gut genug zum Senden".

---

## Was die KI wirklich liest — nachgeprüft, nicht behauptet

Der Betreiber nennt zwei Quellen. Beide gibt es, und die App ist dabei
genauer, als die Website bisher sagt.

### Quelle 1 · Die eigene Website

`offer-from-website.ts`. Füllt die Felder darüber, **was du verkaufst** — sieben
der zwölf. Bereits auf der Seite erwähnt.

### Quelle 2 · Jede Lead-Liste einzeln

`offer-from-search.ts`, und das steht auf der Website **bisher nirgends**. Aus
dem Dateikopf:

> „Das Standardangebot beantwortet, was der Absender verkauft und wie er
> klingt. Das ändert sich nicht, wenn er statt Zahnarztpraxen jetzt
> Shopify-Shops anschreibt. Was sich sehr wohl ändert, ist die andere Hälfte:
> **woran diese Empfänger hängen und warum sie zögern.**"

Gelesen wird dafür: **die Filter der Suche** und **die recherchierten
Firmenbeschreibungen** der Empfänger. Nicht das eigene Schaufenster.

Das ist die präzisere Fassung von „kennt deren Painpoint": die KI leitet den
Painpoint aus Sätzen über die **Empfänger** ab, nicht aus Vermutungen. Und —
wichtig für die Ehrlichkeit der Seite — was im Material nicht steht, **bleibt
leer**. Dieselbe Regel wie überall sonst.

**Das Argument, das daraus folgt und heute fehlt:** wer zwei Zielgruppen
anschreibt, braucht nicht zwei Angebote. Er braucht ein Angebot und zwei
Zuschnitte, und die schreibt die KI je Liste.

---

## Der Umbau, Stelle für Stelle

### A · `#angebot` auf der Startseite

| | |
|---|---|
| Überschrift | bleibt: „Dein Angebot als Vorlage für jede Mail" |
| Die drei Punkte | Punkt 3 heißt heute „Daraus entstehen acht Texte". Er soll den **Startpunkt** benennen, nicht die Menge: **„Ein Entwurf, den du abschicken kannst"** |
| **Neu, vierter Punkt** | **„Je Lead-Liste ein eigener Zuschnitt"** — die zweite Quelle, die es auf der Seite noch nicht gibt |

### B · `#write` auf `/funktionen` — der Absatz mit den Zahlen

Der heutige Text zählt Stufen, Tage und Wortzahlen auf. Er wird ersetzt durch:
**was die KI dir abnimmt, und dass du alles ändern kannst.**

Was hineingehört:
- Die KI schreibt die Sequenz aus deinem Angebot, nach dem, was bei
  Kaltakquise funktioniert.
- Auch ohne Erfahrung steht danach ein Entwurf da, den du abschicken kannst.
- **Vier Stufen an Tag 0, 3, 5 und 7 sind unser Vorschlag** — Stufen lassen
  sich hinzufügen, Abstände ändern, jeder Text überschreiben.
- Die Längen (90/70/50/35 Wörter) und die kleine Frage am Schluss sind
  ebenfalls Vorschlag, kein Zwang.

Die Zahlen bleiben also — als **Empfehlung gekennzeichnet**. Sie zu streichen
wäre der falsche Schluss: sie sind der Beleg dafür, dass hinter dem Vorschlag
ein Playbook steht und kein Zufallsgenerator.

### C · Die Angebotskarte: THAW → Frostbreaker AI

Der Betreiber will die Figur umbenennen und die zweite KI sichtbar machen.

**Umbenennen: ja, aber nicht nur auf der Website.** In der App heißt sie
heute THAW (`verdictLabel: "THAW"`, Hinweistext „THAW liest dein Angebot gegen
das Playbook"). Genau diese Sorte Abweichung ist heute schon einmal
aufgefallen: die Website nannte dieselbe Funktion „Coach", ein Name, den es im
Produkt nie gab. Wer sie hier zu „Frostbreaker AI" macht und in der App THAW
lässt, baut denselben Bruch neu.

> **Offener Punkt für den Betreiber:** die Umbenennung gehört in beide Repos.
> Die Website kann vorangehen, aber dann sollte die App zeitnah folgen —
> sonst liest der Nutzer auf der Seite „Frostbreaker AI" und sieht in der App
> „THAW".

**Die zweite KI sichtbar machen.** Die Karte zeigt heute eine Figur in der
Mitte, die „die zwölf Felder gegeneinander liest" — also die *Prüfung*. Die
*Befüllung* aus Website und Lead-Liste fehlt im Bild. Sie gehört dazu, denn
sie ist der Teil, der Arbeit abnimmt; die Prüfung ist der Teil, der Fehler
findet.

Vorschlag fürs Bild: zwei benannte Schritte statt eines.
**„Füllt aus deiner Website und aus jeder Lead-Liste vor" → „liest die zwölf
Felder gegeneinander".**

---

## Was dabei nicht passieren darf

- **Keine Behauptung über Antwortquoten.** Die Grenze aus `KLARTEXT.md` gilt
  weiter: Mechanismus ja, Messwert nein.
- **Nicht „die KI schreibt deine Mails, fertig".** Die Seite sagt an anderer
  Stelle zu Recht, dass ein Mensch jeden Text liest, bevor er rausgeht. Der
  neue Text muss dazu passen: **Entwurf**, nicht Endprodukt.
- **Die Zahlen nicht streichen, sondern einordnen.** Ohne sie wirkt der
  Vorschlag beliebig.
- **Nichts erfinden, was `offer-from-search.ts` nicht tut.** Es liest
  Suchfilter und Firmenbeschreibungen. Es ruft *keine* fremde Website ab und
  erzeugt *kein* neues Angebot — Ton, Beleg und CTA werden aus dem
  Standardangebot übernommen.

## Reihenfolge

1. **B** — der Absatz mit den Zahlen. Größter Schaden heute, reine Textarbeit.
2. **A** — Punkt 3 umbenennen, Punkt 4 ergänzen.
3. **C** — Umbenennung und das Bild. Braucht die Entscheidung zur App.

## Prüfen

- `npx tsc --noEmit`, beide Sprachen, `npm run build`
- Auf der Startseite und `/funktionen` steht an **jeder** Stelle, an der
  Stufen, Tage oder Wortzahlen genannt werden, erkennbar dabei, dass es ein
  Vorschlag ist. Suche nach „vier Stufen", „Tag 0", „90, 70, 50, 35",
  „four steps", „day 0".
- Der Satz, dass ein Mensch jeden Text liest, bleibt sichtbar.
- Nach der Umbenennung: 0 Treffer auf „THAW" im Wörterbuch der Website —
  oder eine bewusste Entscheidung, ihn zu behalten.
