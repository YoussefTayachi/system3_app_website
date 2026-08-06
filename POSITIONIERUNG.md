# Neupositionierung der Website: von „findet Leads günstig" zu „gewinnt Kunden"

Stand 2026-08-06. **Zur Abstimmung. Nichts davon ist umgesetzt.**

Ersetzt `UMBAU-PLAN.md` (05.08.) in den Abschnitten 2, 3 und 6. Der Rundgang
(Abschnitt 4 dort), die LinkedIn-Darstellung (7) und die Mockup-Regeln (5)
bleiben gültig und werden hier übernommen. Was gestrichen wird, steht in
Abschnitt 11.

Grundlage: `app/page.tsx` (1086 Zeilen, 23 Abschnitte), `app/dict.ts` (3022
Zeilen, DE+EN), 25 vorhandene Mockup-Komponenten, der Stand der App am
06.08., und die Musterempfehlungen aus `ui-ux-pro-max` (Abschnitt 8).

---

## 1. Die Positionierung in einem Satz

> **Frostbreaker findet Entscheider, kontaktiert sie über E-Mail, LinkedIn und
> Telefon — und macht diesen Prozess mit jedem Durchlauf besser.**

Drei Verben, in dieser Reihenfolge: **finden · kontaktieren · verbessern.**
Alles auf der Seite muss auf eines davon einzahlen. Was auf keines einzahlt,
gehört auf `/funktionen` oder in die FAQ.

### Was sich damit ändert

| Bisher verkauft | Künftig verkauft |
|---|---|
| Lead-Beschaffung (9 von 10 ersten Abschnitten) | **Kontaktaufnahme** — Beschaffung ist Schritt 1 von 6 |
| Nur E-Mail (Hero: „1.000 Mails pro Woche") | **Drei Kanäle**, verkettet |
| 1,5 Cent pro Kontakt, BYOK, Anbietervergleich | **All-in-one**: ein Login statt vier Abos |
| „Wir sind kein Ersatz für Apollo/Instantly" | „Apollo liefert Adressen. Wir gewinnen Kunden." |
| BYOK als eigener Abschnitt an Position 20 | BYOK als **Nebensatz** in FAQ + Logostreifen |

### Die fünf Säulen, in der Gewichtung der Seite

| # | Säule | Was sie auf der Seite ist |
|---|---|---|
| 1 | **Kontaktieren über drei Kanäle** | Der Hauptpunkt. Hero + Rundgang + eigener Abschnitt |
| 2 | **Die Kette schöpft jeden Lead aus** | Eigener Abschnitt. Sequenz → LinkedIn-Task → Anruf-Task |
| 3 | **Der Prozess wird messbar besser** | Eigener Abschnitt. Analytics, A/B, Copy-Check, Domain-Gesundheit |
| 4 | **CRM als Klammer** | Eigener Abschnitt. Tasks, Deals, Notizen, nächster Schritt |
| 5 | **BYOK** | **Kein eigener Abschnitt.** Logostreifen + zwei FAQ-Antworten |

---

## 2. Der teuerste Widerspruch, und warum der Hero diesmal doch fällt

Am 05.08. wurde entschieden: **Hero-Überschrift bleibt**, weil sie erprobt ist
und man nicht zwei Dinge gleichzeitig ändern soll. Die Begründung war ein
Mess-Argument, kein Wahrheits-Argument — und sie trägt nicht mehr, seit die
Positionierung selbst sich ändert.

Die heutige Zeile lautet:

> **„Send at least 1,000 emails a week to real decision-makers, fully
> automatically."**

Sie widerspricht der neuen Positionierung an drei Stellen gleichzeitig:

1. **Sie ist einkanalig.** LinkedIn und Telefon kommen nicht vor. Genau die
   beiden sind aber der Grund, warum die Kette funktioniert.
2. **„Fully automatically" widerspricht dem eigenen Produkt.** Der Torwart
   hält dich absichtlich auf. Bei LinkedIn drückst *du* den Absendeknopf, aus
   gutem Grund. Anrufen tust du selbst. Zwei Abschnitte weiter unten erklärt
   die Seite das ausführlich — und macht damit ihren eigenen Hero zunichte.
3. **Sie verkauft Volumen — und die Seite nennt Volumen selbst als Engpass.**
   Der Abschnitt *„Where the limit sits: not in finding, but in sending"* sagt,
   dass die Zahl der Postfächer das Limit ist. 1.000/Woche sind ~143/Tag, also
   mindestens drei aufgewärmte Postfächer. Der Hero verspricht das, was die
   Seite später einschränkt.

Volumen ist außerdem die Ware, die jeder Wettbewerber billiger anbietet.
Kunden-*gewinnung* ist es nicht.

### Drei Vorschläge für den neuen Hero

Alle drei behalten Ton und Länge der bisherigen Zeile bei — Fraunces-Display,
zwei bis drei Zeilen, ein Wort in Kursiv-Akzent.

**A — Der Dreiklang** *(meine Empfehlung)*
> **Find decision-makers. Reach them on *every* channel. Turn them into
> clients.**
>
> *Sub:* One tool from a niche to a signed deal: verified decision-makers, a
> personal opener for each one, the email sequence, the LinkedIn message and
> the phone number — all in the same CRM.

Warum: sagt die Positionierung wörtlich, in derselben Reihenfolge wie die
Seite darunter. Der Dreiklang gibt der ganzen Startseite ihre Gliederung —
Abschnitt 3 ist „find", 4–5 sind „reach", 6–7 sind „turn into clients". Wer
nur die Überschrift liest, hat die Seitenstruktur schon verstanden.

**B — Der Einwand vorweg**
> **Cold outreach stops at the first email. *Yours* doesn't.**
>
> *Sub:* When the sequence stays quiet, Frostbreaker hands you the LinkedIn
> message and the phone number — and tells you which version of your copy
> actually booked meetings.

Warum: greift den Schmerz an statt die Funktion. Stärker, aber schmaler —
Beschaffung fällt aus der Überschrift heraus.

**C — Die All-in-one-Ansage**
> **Four subscriptions did this yesterday. *One* does it today.**
>
> *Sub:* Find decision-makers, write to them personally, follow up on LinkedIn
> and by phone, and see what worked — in one tool, on your own API keys.

Warum: der direkteste Weg zu „all-in-one". Risiko: führt mit dem Preis, und
der Preis ist ein Argument, das man verliert, sobald jemand billiger ist.

**Der Badge daneben (`2× more replies through real personalization`) fällt in
allen drei Fällen.** Er ist unbelegt, und im eigenen Konto stehen 0,4 %.
Ersatz: **`3 channels · 1 chain · 0 lost leads`** — belegbar, weil es die
Mechanik beschreibt statt ein Ergebnis zu versprechen.

**Das Hero-Bild wechselt** (aus `UMBAU-PLAN` Abschnitt 6, gilt unverändert):
statt des Dashboards mit Lead-Zahlen die Ansicht „Nach Text" mit der
Termin-Spalte. Jeder Wettbewerber kann Lead-Zahlen zeigen. Diese Spalte nicht.

---

## 3. Die neue Seitenarchitektur

23 Abschnitte werden **12**. Die Klammer ist der Dreiklang aus dem Hero.

| Neu | Abschnitt | Säule | Herkunft |
|---|---|---|---|
| 1 | **Hero** | — | umgeschrieben (Abschnitt 2) |
| 2 | **Das ganze Bild** — eine Systemkarte | 1–4 | **NEU** |
| 3 | **In sechs Schritten** — der Rundgang | 1–3 | **NEU** (Abschnitt 4) |
| 4 | **Drei Kanäle, ein Kontakt** | 1 | `#kette` + `#telefon` + LinkedIn neu |
| 5 | **Die Kette: kein Lead bleibt liegen** | 2 | `#kette` ausgebaut |
| 6 | **Nach dem Ja: das CRM** | 4 | `postSend` + Pipeline |
| 7 | **Und beim nächsten Mal besser** | 3 | `#ehrlich` + Copy-Check + `DeliverabilityMockup` |
| 8 | **Vier Abos, oder dieses eine** | all-in-one | `#ergaenzt` **umgedreht** |
| 9 | **Der Unterschied im Alltag** | all-in-one | `#alltag`, bleibt |
| 10 | **Woher die Leads kommen** | 1 | fünf Abschnitte zu einem, **vier** Wege |
| 11 | **Preise** | — | `#preise` |
| 12 | **Vertrauen · Gründer · FAQ** | 5 | `trust` + `why` + `faq` (BYOK hier) |

### Warum Abschnitt 2 neu ist und warum er der wichtigste ist

Der Auftrag lautet: *„leicht verständlich, dass wir ein All-in-one-Tool sind."*
Ein Rundgang über sechs Bildschirme erklärt das gut, aber langsam. Wer nach
dem Hero in fünf Sekunden nicht weiß, wie groß der Umfang ist, scrollt nicht
bis Schritt 6.

**Die Systemkarte ist ein einziges Bild**, direkt unter dem Hero, das den
ganzen Umfang auf einen Blick zeigt:

```
   FINDEN                KONTAKTIEREN                 GEWINNEN
   ┌──────────┐          ┌────────────────┐          ┌──────────┐
   │ Maps     │          │ ✉  E-Mail-Seq. │          │          │
   │ Hunter   │──────────│ in LinkedIn    │──────────│   CRM    │
   │ Apollo   │  Person +│ ☎  Anruf       │  Antwort │ Deals    │
   │ Prospeo  │  Aufhänger└───────┬────────┘  Termin  │ Aufgaben │
   └──────────┘                   │                   └────┬─────┘
                                  │                        │
                          ┌───────▼────────────────────────▼───┐
                          │  VERBESSERN — welcher Text, welcher │
                          │  Tag, welche Uhrzeit brachte Termine│
                          └─────────────────────────────────────┘
```

Vier Kästen, drei Pfeile, eine Rückkopplungsschleife. Die Schleife nach unten
ist die eigentliche Aussage: **der Prozess läuft nicht nur, er lernt.** Das
kann kein Wettbewerber zeichnen, weil keiner beide Hälften besitzt.

Umsetzung: **Inline-SVG, kein Bild.** Semantische Tokens (`--c-ink`,
`--c-edge2`, `--c-coral`), damit es im Dunkelmodus mitläuft. Unter `md`
klappt es zu vier gestapelten Karten mit Pfeil-nach-unten — ein
querscrollendes Diagramm auf 375 px ist wertlos.

---

## 4. Der Rundgang in sechs Schritten

Übernommen aus `UMBAU-PLAN` Abschnitt 4, **umsortiert auf den neuen Bogen**:
Schritt 4 ist jetzt die Kette statt des Torwarts, weil die Kette die
Positionierung trägt und der Torwart eine Qualitätsaussage ist.

| # | Schritt | Was gezeigt wird | Mockup |
|---|---|---|---|
| **1** | **Nische rein, Entscheider raus** | Suchmaske mit Branche, Ort, Größe, Technologie → Firmen mit Ansprechpartner und geprüfter Adresse | `UnifiedSearchMockup` ✅ |
| **2** | **Jeder bekommt seinen eigenen ersten Satz** | Aufhänger je Lead aus der Recherche, Datenquelle und Verbotswörter einstellbar | `AiAgentMockup` ✅ |
| **3** | **Zwei lesen gegen, bevor etwas rausgeht** | Copy-Check (Länge, Spam-Wörter, KI-Klang, ein CTA) **und** Torwart (SPF/DKIM, Bounce-Quote) | `CopyCheckMockup` ✅ + `GateMockup` ✅ |
| **4** | **Die Sequenz läuft — und wenn sie schweigt, geht es weiter** | Initial + 3 Follow-ups; kein Reply → LinkedIn-Aufgabe; kein Reply → Anruf | `CampaignMockup` ✅ + `ChainMockup` ✅ |
| **5** | **Die Antwort landet im CRM, nicht im Postfach** | Eingestufte Antwort, Deal, nächster Schritt, Notiz | `PipelineMockup` ✅ + **`InboxMockup` NEU** |
| **6** | **Und jetzt weißt du, was funktioniert hat** | Nach Text: je Schritt und Fassung Antworten, Absagen, **Termine** — dazu Wochentag und Uhrzeit | **`CopyOutcomesMockup` NEU** |

**Schritt 6 ist der Höhepunkt, nicht der Anhang.** Der Rundgang endet nicht
beim Versand, sondern bei der Frage, die sonst niemand beantwortet.

### Gestaltung (aus `ui-ux-pro-max`, Muster „Funnel / 3-Step Conversion")

Das Muster empfiehlt: *progress indicators · progressive disclosure · mini-CTA
je Schritt · ein Haupt-CTA am Ende.* Übersetzt auf sechs Schritte:

- **Abwechselnd Bild links / Bild rechts.** Sechs gleich gebaute Blöcke lesen
  sich wie eine Tabelle; der Wechsel hält das Auge wach.
- **Schrittnummer als großes Display-Element** (Fraunces, `text-6xl`,
  `text-edge3`) — Orientierung auf einer langen Seite, nicht Dekoration.
- **Fortschrittsspur links ab `lg`**, `position: sticky`, aktueller Schritt in
  Coral. Unter `lg` fällt sie weg statt zu schrumpfen.
- **Mini-CTA je Schritt** („So sieht es in echt aus →"), Haupt-CTA erst nach
  Schritt 6.
- **Kein Auto-Karussell.** Sechs Schritte, die von allein weiterspringen,
  nimmt niemand auf — und eine gescrollte Liste ist barrierefrei die bessere
  Wahl.
- Bewegung nur als Reveal beim Eintritt (die vorhandene `reveal.tsx` mit
  IntersectionObserver), 150–250 ms, `prefers-reduced-motion` respektiert.

---

## 5. Die vier Säulen als Abschnitte 4 bis 7

### Abschnitt 4 — „Drei Kanäle, ein Kontakt"

Drei gleich breite Spalten, **gleichwertig** dargestellt. Heute ist LinkedIn
eine Zeile in der Kette und Telefon ein eigener Abschnitt weit unten; beides
wird hier zusammengezogen.

| Kanal | Was die App tut | Was du tust | Mockup |
|---|---|---|---|
| **E-Mail** | Adresse verifiziert, Aufhänger geschrieben, Sequenz versendet über deine Postfächer | nichts | `CampaignMockup` ✅ |
| **LinkedIn** | Nachricht **fertig eingesetzt** — dieselben Platzhalter, derselbe Aufhänger wie in der Mail; mehrere benannte Vorlagen | kopieren, Profil öffnen, einfügen, senden | **`LinkedInMockup` NEU** |
| **Telefon** | Nummer, Rolle, Firmenzusammenfassung, Gesprächsnotiz, nach Dringlichkeit sortiert | anrufen | `CallListMockup` ✅ |

**Der Satz, der LinkedIn trägt:** *Die Nachricht steht, bevor du LinkedIn
öffnest.*

**Und der Satz, der die Handarbeit zum Verkaufsargument macht:** LinkedIn hat
keine Messaging-API. Jedes Werkzeug, das trotzdem automatisch sendet, steuert
einen Browser fern und riskiert die Sperrung — bei einem verkauften Produkt
also die Konten der Kunden. **Wir bereiten alles vor, den Absendeknopf drückst
du.** Formuliert als Schutz, nicht als Einschränkung — dieselbe Haltung wie
beim Torwart.

Nicht behauptet wird: dass die App von allein auf LinkedIn schreibt. Das wäre
die eine Zusage, die uns später einholt.

### Abschnitt 5 — „Die Kette: kein Lead bleibt liegen"

Baut auf `ChainMockup` auf, wird um die Sequenz vorne erweitert:

```
Tag 0   ✉ Erstmail mit Aufhänger
Tag 3   ✉ Follow-up 1          ─┐
Tag 7   ✉ Follow-up 2           ├─ keine Antwort?
Tag 12  ✉ Follow-up 3          ─┘
Tag 15  in LinkedIn-Aufgabe      (nur wenn Profil hinterlegt)
Tag 20  ☎ Anruf-Aufgabe          (nur wenn Nummer da, und erst nach LinkedIn)
```

Drei Regeln daneben, jede als eigene Zeile:
- **Immer genau ein nächster Schritt.** Kein Lead bekommt LinkedIn-Aufgabe und
  Anruf gleichzeitig.
- **Wer antwortet, fällt sofort raus.** Die Kette gilt nur für Stille.
- **Nur wo es etwas zu tun gibt.** LinkedIn nur mit Profil, Anruf nur mit
  Nummer. Eine Aufgabe ohne Adresse ist eine Recherche-Aufgabe und gehört
  nicht in eine Arbeitsliste.

### Abschnitt 6 — „Nach dem Ja: das CRM"

`PipelineMockup` ✅ als Hauptbild, drei Belege daneben: Deal-Wert und
gewichtete Prognose · fällige und überfällige Aufgaben · Notizen und
Anrufergebnis am Kontakt, in derselben Historie wie die Mails.

**Der Satz:** *Der Anruf von gestern und die Mail von vor drei Wochen stehen
untereinander, nicht in zwei Tools.*

### Abschnitt 7 — „Und beim nächsten Mal besser"

Die Säule, die kein Wettbewerber hat. Vier Belege:

| Beleg | Bild |
|---|---|
| **Welche Textfassung Termine gebracht hat** — je Schritt, je Fassung A/B | **`CopyOutcomesMockup` NEU** |
| **Welcher Wochentag und welche Uhrzeit** — in Drei-Stunden-Blöcken | **`TimingMockup` NEU** (klein) |
| **Ob der Text überhaupt taugt**, bevor er rausgeht | `CopyCheckMockup` ✅ |
| **Ob die Domain gesund ist** — SPF/DKIM/DMARC, Tagesvolumen | `DeliverabilityMockup` ✅ |

Direkt darunter, ohne Abschnittswechsel, die Ehrlichkeitsregel aus `#ehrlich`
— **wörtlich, sie bleibt der beste Absatz der Seite:**

> Zwölf Mails und eine Antwort sind nicht „8,3 %". Es sind zwölf Mails und
> eine Antwort. Unter dreißig kontaktierten Menschen schreiben wir „zu wenig"
> statt einer Prozentzahl.

Diese Regel steht bewusst **in** der Analytics-Sektion und nicht als eigener
Abschnitt: sie ist der Grund, warum man den Zahlen darüber glauben kann.

---

## 6. Abschnitt 8 — der wichtigste Textwechsel der ganzen Seite

Heute beginnt `#ergaenzt` mit:

> „Ihr nutzt Apollo, Hunter oder Instantly bereits? Dann ist das hier **kein
> Ersatz**."

Das ist als Einwandbehandlung gemeint und wirkt als Selbsteinordnung: *wir
sind ein Zubehör zu dem, was ihr schon habt.* Zubehör ist das Erste, was bei
einer Budgetkürzung gestrichen wird. Der Abschnitt steht an Position 5 — vor
jedem einzigen Wort über das Produkt.

**Er wird nicht gestrichen, er wird umgedreht.** Aus der Entschuldigung wird
die All-in-one-Aussage, mit dem Muster „Comparison Table Focus" aus
`ui-ux-pro-max` (eigene Spalte hervorgehoben, Wettbewerber neutral,
sachlich — laut Datenbank das konversionsstärkste Vergleichsmuster).

Neue Überschrift: **„Vier Abos machten das gestern. Eines macht es heute."**

| | Apollo | Hunter | Instantly | Pipedrive | **Frostbreaker** |
|---|:--:|:--:|:--:|:--:|:--:|
| Entscheider finden | ✓ | ✓ | — | — | **✓** |
| Adresse verifizieren | ✓ | ✓ | — | — | **✓** |
| Aufhänger je Lead schreiben | — | — | — | — | **✓** |
| Text prüfen, bevor er rausgeht | — | — | — | — | **✓** |
| Sequenz versenden | — | — | ✓ | — | **✓** |
| LinkedIn-Nachricht vorbereiten | — | — | — | — | **✓** |
| Anrufliste mit Kontext | — | — | — | teilw. | **✓** |
| Kette über alle drei Kanäle | — | — | — | — | **✓** |
| Antwort → Textfassung zuordnen | — | — | — | — | **✓** |
| Deals und Aufgaben | — | — | — | ✓ | **✓** |

Darunter **ein** Absatz, der den echten Einwand beantwortet, ohne sich klein
zu machen:

> Apollo liefert Adressen. Instantly liefert Zustellung. Beide sagen dir, *was*
> passiert ist — keiner sagt dir, *warum*. Frostbreaker schreibt den Text,
> verschickt ihn und sieht die Antwort darauf. Und wenn du bei Apollo bleiben
> willst: **bleib dabei.** Deine Schlüssel, dein Konto, kein Aufschlag.

Der letzte Halbsatz ist die gesamte BYOK-Erwähnung auf der Startseite.

**Regeln für die Tabelle, damit sie nicht zur Angriffsfläche wird:**
- Nur Funktionen aufführen, die wir belegen können. Kein „✗" bei Wettbewerbern,
  nur „—" (nicht vorhanden) und „teilw."
- Kein Preisvergleich in der Tabelle. Preise ändern sich, die Tabelle nicht.
- Häkchen **nie allein durch Farbe** unterscheiden (Barrierefreiheitsregel aus
  `ui-ux-pro-max`, Priorität 10): Symbol + `aria-label`, nicht nur grün/grau.
- Unter `md` kippt die Tabelle auf **Karten je Zeile**, nicht auf Querscrollen.

---

## 7. Was BYOK und Kosten künftig sind

Beides verschwindet nicht — es hört auf, die ersten Abschnitte zu besetzen.

| Heute | Künftig |
|---|---|
| `#kosten` (1,5 Cent, Position 2) | → `/preise` + zwei FAQ-Antworten |
| `#integrationen` (BYOK, Position 20, ganzer Abschnitt) | → schmaler Logostreifen unter Abschnitt 10 + FAQ |
| `scaling` (Hochrechnung, „100 Vollzeitstellen") | **gestrichen** — die Sorte Zahl, bei der man aufhört zu glauben |
| `#agenturen` (ganzer Abschnitt) | → Verweiskarte auf `/fuer-agenturen`, die Seite existiert |
| `#technologie`, `leadSource`, `qualifiedLeads`, `#verifizierung`, `searchModes` | → **ein** Abschnitt 10 + Tiefe auf `/funktionen` |
| `features`, `painPoints`, `#startklar` | in Abschnitt 7 bzw. Hero eingearbeitet |

Die FAQ nimmt auf: *Was kostet es wirklich? · Brauche ich eigene API-Keys? ·
Warum nicht direkt zu Apollo? · Ich nutze Instantly schon, was ändert sich?*

---

## 8. Design: was bleibt, was der Skill empfiehlt, und was ich davon nicht nehme

`ui-ux-pro-max --design-system` schlägt für „B2B SaaS" **Plus Jakarta Sans +
Navy/Blau, Flat Design** vor. **Typografie und Farbe übernehme ich nicht.**
Das ist die generische B2B-Vorgabe der Datenbank; die Seite hat mit *Space
Grotesk + Fraunces + Coral* eine eigene, unterscheidbare Handschrift, und ein
Redesign würde die eigentliche Arbeit — Reihenfolge und Gewichtung — nur
verstecken. **Kein Redesign.** Was ich übernehme:

**Muster** (die eigentliche Ausbeute):
- *Funnel / 3-Step Conversion* → der Rundgang (Abschnitt 4)
- *Comparison Table Focus* → Abschnitt 8, laut Datenbank das
  konversionsstärkste Vergleichsmuster
- *Flat Design* → keine Verläufe, keine Schlagschatten, Hover als Farb- oder
  Deckkraftwechsel in 150–200 ms. Der vorhandene dezente Hover-Lift bleibt.

**Regeln, die für jede neue Komponente gelten:**

| Regel | Konkret hier |
|---|---|
| Nur semantische Tokens | `text-ink` / `text-mute` / `bg-panel2` / `border-edge2` — **kein rohes Hex.** Sonst bricht der Dunkelmodus |
| Kontrast ≥ 4.5:1 | `globals.css` rechnet die Stufen bereits vor (mute 4.54 · soft 6.99 · ink 16.3). Neue Farbe nur, wenn sie dort einsortiert wird |
| Touch ≥ 44×44 px, ≥ 8 px Abstand | betrifft die Mini-CTAs im Rundgang und die Kanal-Karten |
| Sichtbarer Fokus | die vorhandene Coral-Outline, **nie** `outline: none` |
| `prefers-reduced-motion` | Reveal und Fortschrittsspur schalten ab |
| Bilder: WebP/AVIF, Platz reservieren | CLS < 0.1. Die Mockups sind DOM, kein Bild — gilt für den Logostreifen |
| Keine Emoji als Icons | SVG aus `_icons.tsx` |
| Breakpoints prüfen | 375 · 768 · 1024 · 1440. **Kein Querscrollen** auf 375 |
| Komponente nur bei echter Wiederholung | gerechtfertigt: `StepWalkthrough` (6×), `ChannelCard` (3×). Nicht gerechtfertigt: eine Komponente je Abschnitt |

---

## 9. Neue Komponenten

Sechs. Alles andere ist Umstellen und Umschreiben.

| Komponente | Datei | Inhalt | Priorität |
|---|---|---|---|
| **`SystemMap`** | `app/_system-map.tsx` | Die Systemkarte aus Abschnitt 3. Inline-SVG, klappt unter `md` zu Karten | **1** |
| **`AllInOneCompare`** | `app/_compare.tsx` | Die Tabelle aus Abschnitt 6, unter `md` als Karten | **1** |
| **`CopyOutcomesMockup`** | `app/_app-mockups.tsx` | „Nach Text": Schritt · Fassung A/B · Kontakte · Antworten · Absagen · **Termine** | **1** |
| **`LinkedInMockup`** | `app/_app-mockups.tsx` | Ein Kontakt mit fertig eingesetzter Nachricht, Aufhänger als eigener Absatz, drei Knöpfe | **1** |
| **`StepWalkthrough`** | `app/_walkthrough.tsx` | Der Rahmen: Nummer, Text, Bild, Wechselseite, Fortschrittsspur | **2** |
| ✅ `SystemMap` und `AllInOneCompare` sind am 2026-08-06 gebaut. | | | |
| **`TimingMockup`** | `app/_app-mockups.tsx` | Wochentag und Uhrzeit-Blöcke, klein, neben `CopyOutcomesMockup` | **3** |
| **`InboxMockup`** | `app/_app-mockups.tsx` | Posteingang mit eingestufter Antwort und drei Entwürfen | **3** |

**Regel für alle Mockups** (aus `_app-mockups.tsx` übernommen): **nachgebaut,
nicht abfotografiert.** Im echten Betrieb stehen dort Namen realer Personen mit
Rolle und Arbeitgeber; die gehören ohne Einwilligung nicht ins Marketing —
erst recht nicht auf eine Seite, die mit Datensparsamkeit wirbt. Zahlen werden
erfunden, aber an den echten Schwellen gewählt.

`CopyOutcomesMockup` ist der wichtigste: er zeigt die einzige Funktion, die
kein Wettbewerber hat, und es gibt bisher kein einziges Bild davon.

---

## 10. Reihenfolge der Umsetzung

Sechs Stufen. Jede ist für sich deploybar und einzeln überprüfbar.

**Stufe 0 — Die Widersprüche raus.** ✅ **umgesetzt am 2026-08-06** (`4aa266b`)
Der Rechner (`_calculator.tsx`) rechnet mit `REPLY_RATE = 0.05` und wirft
„≈ 6,3 Termine/Monat" aus. Gemessen im eigenen Konto: 0,4 % und 1 Termin auf
755 Kontakte — Faktor 12. Auf einer Seite, die einen Abschnitt „Was wir nicht
behaupten" hat, ist das die gefährlichste Zeile. Dazu: der „2×"-Badge, und
„drei Suchwege" sind seit dem 05.08. **vier** (Prospeo).
→ *Danach widerspricht die Seite sich nicht mehr selbst. Schützt alles Weitere.*

**Stufe 1 — Die Positionierung steht oben.** ✅ **umgesetzt am 2026-08-06** (`4aa266b`)
Neuer Hero + neuer Badge + `SystemMap` + `AllInOneCompare` an Position 8.
Drei Eingriffe, kein einziger neuer Rundgang.
→ *Danach sagt die Seite in den ersten zwei Bildschirmen, was sie ist.*

**Stufe 2 — Der Rundgang.** ✅ **umgesetzt am 2026-08-06** (`3e52c17`)
`StepWalkthrough` bauen, `CopyOutcomesMockup` und `LinkedInMockup` zeichnen,
sechs Schritte in DE und EN texten. Abschnitt 3 einsetzen.
→ *Danach versteht jemand, der die App nie gesehen hat, was sie tut.*

**Stufe 3 — Die vier Säulen.** ✅ **umgesetzt am 2026-08-06** (`083535f`)

Drei der vier als eigene Abschnitte: `#kanaele` (neu), `#kette` (Sequenz
ergänzt, umbenannt), `#crm` (aus `postSend`, umbenannt). Der frühere
Telefon-Abschnitt ist in `#kanaele` aufgegangen — 23 Abschnitte sind 22.

**Die vierte Säule hat bewusst keinen eigenen Abschnitt bekommen.** Die
Messung wird bereits dreifach getragen: vom Hero-Bild, von der
Rückkopplungsschleife der Systemkarte und von Schritt 6 des Rundgangs.
`#ehrlich` bleibt unangetastet — *„eine Zahl, die nichts bedeutet, wird nicht
gezeigt"* ist der Grund, warum man den Zahlen darüber glaubt, und eine vierte
Erzählung derselben Sache wäre Wiederholung statt Nachdruck. `TimingMockup`
und `InboxMockup` entfallen damit ebenfalls.

**Stufe 4 — Aufräumen.** ✅ **umgesetzt am 2026-08-06** (`9e5d2d9`)

23 inhaltliche Abschnitte sind **17**, nicht 12. Die Differenz ist bewusst:

| Nicht gestrichen | Warum |
|---|---|
| `#torwart` | *„Das einzige Werkzeug für Kaltakquise, das dir Nein sagt"* ist eine der stärksten Aussagen der Seite. Der Plan wollte ihn in Abschnitt 3 verdichten — als Halbsatz in einer Aufzählung verliert er alles |
| `#startklar` | Beantwortet die zwei Gründe, aus denen jemand *nicht* kauft: zu kompliziert und rechtlich heikel. Beides gehört nicht in eine FAQ |
| `#agenturen` | Blieb als voller Abschnitt statt als Verweiskarte. Agenturen sind ein eigenes Segment; eine Karte mit Link verkauft es nicht |
| `#integrationen` | Blieb vorerst voll. Der Logostreifen aus Abschnitt 7 ist noch offen |
| `trust` · `why` · `faq` | Der Plan zählte sie als einen Abschnitt. Sie sind drei — inhaltlich zurecht |

**Zusätzlich gestrichen, was der Plan nicht vorsah:** `#kosten` und der
Rechner. Beide stehen auf `/preise` bereits, Wort für Wort und mit demselben
Rechner. Dieselbe Sache zweimal auf der Seite heißt, sie zweimal pflegen zu
müssen.

**Der Haupt-CTA zeigt auf die Testphase** (Entscheidung vom 2026-08-06).

**Stufe 5 — Feinschliff.**
FAQ nimmt die verschobenen Einwände auf, `/funktionen` bekommt die Tiefe,
Ankerlinks und Nav-Dropdown nachziehen, DE/EN gegenprüfen, Breakpoints
375/768/1024/1440 durchgehen.

**Jede Textänderung ist doppelt:** `dict.ts` hält DE und EN. Englisch ist
Standard. Ein Abschnitt, der nur auf Deutsch existiert, fällt im Live-Betrieb
als leere Fläche auf.

---

## 11. Was aus `UMBAU-PLAN.md` (05.08.) nicht mehr gilt

| Dort | Jetzt | Warum |
|---|---|---|
| „Hero-Überschrift bleibt unverändert" | **fällt** | Die Begründung war „nicht zwei Dinge gleichzeitig ändern". Mit der neuen Positionierung ist die Zeile nicht mehr nur unscharf, sondern falsch — sie ist einkanalig (Abschnitt 2) |
| `#ergaenzt` streichen oder in die FAQ | **umdrehen** statt streichen | Der Abschnitt ist der natürliche Ort für die All-in-one-Aussage. Streichen würde den stärksten Platz verschenken |
| 23 → 11 Abschnitte | 23 → **12** | Die Systemkarte kommt dazu |
| Rundgang endet bei „welcher Text wirkt" | bleibt, aber Schritt 4 ist die **Kette** statt des Torwarts | Die Kette trägt die Positionierung, der Torwart ist eine Qualitätsaussage und rückt in Schritt 3 |
| BYOK → Logostreifen + FAQ | **gilt unverändert** | |
| Testimonials bleiben unangetastet | **gilt unverändert** | |
| Kein Redesign, kein Video, keine erfundenen Zahlen | **gilt unverändert** | |

---

## 12. Entscheidungen

Getroffen am 2026-08-06:

| Frage | Entscheidung |
|---|---|
| **Hero** | **Variante A, der Dreiklang.** *„Find decision-makers. Reach them on every channel. Turn them into clients."* Badge: `3 channels · 1 chain · 0 lost leads` |
| **Rechner** | **Termin-Zeile fällt.** Der Rechner zeigt nur noch gesparte Stunden, Lohnkostenwert und API-Kosten — alles belegbar. `REPLY_RATE`, `POSITIVE_RATE` und `MEETING_RATE` in `_calculator.tsx` entfallen ersatzlos |
| **Vergleichstabelle** | **Namentlich:** Apollo · Hunter · Instantly · Pipedrive. Zulässig, solange die Angaben stimmen — deshalb gilt die Regel aus Abschnitt 6 strikt: nur Belegbares, kein „✗", kein Preisvergleich, und die Tabelle wird nachgezogen, wenn ein Anbieter nachzieht |

Damit ist nichts mehr offen. Umsetzung beginnt mit Stufe 0.

### Beim Umsetzen dazugekommen (2026-08-06)

Drei Dinge, die im Plan so nicht standen und die beim Bauen entschieden
wurden — sie gehören hierher, nicht in eine Datei daneben:

1. **Der Eyebrow fällt mit.** Er lautete „Die #1 Plattform für kalte
   B2B-Kundengewinnung". Ein unbelegter Superlativ ist auf dieser Seite
   dieselbe Sorte Problem wie die 5-%-Quote im Rechner. Er nennt jetzt die
   Kategorie statt eines Rangs: *„Kaltakquise von der Nische bis zum Kunden."*
2. **Die drei Kacheln unter dem Hero wechseln mit.** Zwei von drei führten mit
   dem Preis (gesparte Stunden, API-Kosten), direkt unter einer Überschrift
   über Kundengewinnung. Jetzt: vier Suchwege · drei Kanäle · ein Login. Die
   Kostenzahlen sind nicht verloren, sie stehen im Rechner und ziehen mit
   `#kosten` nach `/preise`.
3. **Die Systemkarte ist DOM, nicht SVG.** Ein SVG mit festem `viewBox`
   skaliert die Schrift mit — auf 375 px wären die Beschriftungen unter 10 px.
   Als DOM klappt die Karte unter `lg` auf eine Spalte um und bleibt lesbar.

### Beim Umsetzen von Stufe 2 dazugekommen (2026-08-06)

1. **`CopyOutcomesMockup` hat eine kompakte Fassung.** Der Plan wollte das
   Bild im Hero *und* als Schritt 6 — das wäre zweimal dasselbe Bild auf einer
   Seite gewesen. Der Hero zeigt jetzt nur die Pointe (zwei A/B-Zeilen, eine
   mit Terminen), der Rundgang die vollständige Tabelle mit Warnung und
   „zu wenig"-Zeile.
2. **Schritt 1 zeigt die Leads-Tabelle, nicht die Suchmaske.**
   `UnifiedSearchMockup` steht schon im Suchwege-Abschnitt. Das *Ergebnis* ist
   für „Entscheider raus" ohnehin der bessere Beleg als das Formular.
3. **Die Fortschrittsspur hat keine Scroll-Verfolgung.** Sie bräuchte einen
   zweiten IntersectionObserver — und die Spur soll auch dann etwas aussagen,
   wenn JavaScript spät oder gar nicht läuft.
4. **`DashboardMockup` ist von der Startseite verschwunden.** Die Komponente
   bleibt in `_app-mockups.tsx`; `/funktionen` ist der naheliegende neue Ort.

### Was nach Stufe 4 offen ist

1. **`#integrationen` ist noch ein voller Abschnitt.** Abschnitt 7 sieht einen
   schmalen Logostreifen plus FAQ-Antwort vor. Der BYOK-Nebensatz steht
   inzwischen in der Vergleichstabelle — der Abschnitt ist damit eher
   Wiederholung als Argument.
2. **Die FAQ hat die verschobenen Einwände noch nicht aufgenommen** (*Was
   kostet es wirklich? · Brauche ich eigene API-Keys? · Warum nicht direkt zu
   Apollo?*). Das ist der Rest von Stufe 5.
3. **`/funktionen` hat die Tiefe noch nicht bekommen**, die von der Startseite
   verschwunden ist: Technologie-Filter mit Slug-Liste, Verifizierungsbericht,
   der Personalisierungs-Abschnitt, `DashboardMockup`, `TechFilterMockup`,
   `LocalReachMockup`, `QualifiedLeadAnimation`, `VerificationReportMockup`,
   `SuppressionMockup`, `DeliverabilityMockup`, `CampaignMockup`,
   `MailboxesMockup`. Alle Komponenten sind erhalten und ungenutzt.
4. **Sprachblöcke gegenprüfen** — DE und EN wurden bei jedem Schritt parallel
   gepflegt, aber nie vollständig nebeneinander gelesen.

---

## 13. Wie dokumentiert wird

Wie im App-Repo: **die Begründung steht dort, wo die Entscheidung getroffen
wurde**, nicht in einer Datei daneben.

- Jeder neue Abschnitt in `page.tsx` bekommt einen Kommentar, der sagt, warum
  er dort steht und was er ersetzt.
- `_walkthrough.tsx` und `_system-map.tsx` bekommen einen Kopfkommentar mit
  den Gestaltungsregeln (Wechselseite, kein Karussell, warum sechs Schritte).
- Jedes neue Mockup nennt, welchen echten Bildschirm es nachbaut und welche
  Zahlen erfunden sind.
- Ein Commit je Stufe, mit dem Befund als Begründung.
- Dieser Plan bleibt im Repo und wird beim Umsetzen fortgeschrieben — nicht
  gelöscht, sondern mit „umgesetzt am …" versehen, wie `ANTWORTQUOTE.md` im
  App-Repo.
