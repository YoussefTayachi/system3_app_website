# Umbau der Startseite: vom Lead-Lieferanten zur Outreach-Plattform

Stand 2026-08-05. **Zur Freigabe. Nichts davon ist umgesetzt.**

Grundlage: Durchgang durch `app/page.tsx` (1086 Zeilen, 23 Abschnitte),
`app/dict.ts` (3022 Zeilen), die 22 vorhandenen Mockup-Komponenten, und der
Stand der App nach den Sessions vom 03.–05.08.

---

## 1. Der Befund, in Zahlen statt Gefühl

Youssefs Kritik lautet: der Fokus liegt auf BYOK, Integrationen,
Anbietervergleich und Geldsparen — nicht auf dem, was die App ausmacht.

Das lässt sich an der Reihenfolge nachzählen. Die aktuelle Startseite:

| Pos. | Abschnitt | Worum es geht |
|---|---|---|
| 1 | Hero | „Die #1 Plattform für kalte B2B-Kundengewinnung" |
| 2 | `#kosten` | **1,5 Cent pro Kontakt** — Geldsparen |
| 3 | searchModes | Drei Wege zum Lead — Beschaffung |
| 4 | `#alltag` | Mit/ohne im Vergleich |
| 5 | `#ergaenzt` | **„Ihr nutzt Apollo schon? Dann ist das hier kein Ersatz"** |
| 6 | `#technologie` | Technologie-Filter — Beschaffung |
| 7 | leadSource | Lead-Quelle — Beschaffung |
| 8 | qualifiedLeads | Keine info@-Adressen — Beschaffung |
| 9 | `#verifizierung` | Adressprüfung — Beschaffung |
| 10 | painPoints | „Kommt dir bekannt vor?" |
| 11 | `#produkt` | **Workflow — der erste Abschnitt über das Produkt** |
| 12 | `#agenturen` | Agenturen |
| 13 | postSend | „Mehr als Lead-Suche" |
| 14 | `#torwart` | **Torwart** |
| 15 | `#kette` | **Multichannel** |
| 16 | `#ehrlich` | **Ehrliche Auswertung** |
| 17 | `#telefon` | Telefon |
| 18 | `#startklar` | Ohne Vorwissen starten |
| 19 | `#personalisierung` | **Icebreaker — Position 19** |
| 20 | `#integrationen` | **BYOK** |
| 21 | features | „Mehr als nur Leads finden" |
| 22 | scaling | Hochrechnung |
| 23 | `#preise` · trust · why · faq | Abschluss |

**Neun der ersten zehn Abschnitte handeln von Beschaffung, Kosten oder
Konkurrenz.** Das erste Wort über die Personalisierung fällt an Position 19 —
nach etwa 9.000 Pixeln Scrollen. Wer vorher abspringt, und das ist die
Mehrheit, hat von der App nichts gesehen außer „findet Leads billig".

### Der teuerste Satz auf der Seite

Abschnitt 5 (`#ergaenzt`) beginnt mit:

> „Ihr nutzt Apollo, Hunter oder Instantly bereits? Dann ist das hier kein
> Ersatz."

Das ist als Einwandbehandlung gemeint und wirkt als Selbsteinordnung: *wir
sind ein Zusatz zu den Werkzeugen, die ihr schon habt.* Ein Zusatz ist das
Erste, was gestrichen wird, wenn ein Budget gekürzt wird.

Youssefs Formulierung trifft es: **„Apollo bringt nur Leads. Wir bringen Leads
und machen noch tausend andere Sachen."** Genau das steht heute nirgends.

---

## 2. Was die Seite künftig verkaufen soll

Nicht: *„wir finden dir Leads, günstiger als die anderen."*
Sondern: *„wir machen deine Kaltakquise automatisch — und sagen dir als
Einzige, welcher Text tatsächlich funktioniert."*

Die vier Säulen, in dieser Gewichtung:

| Säule | Warum sie trägt |
|---|---|
| **Automatisierung** | Von der Nische bis zur versendeten Sequenz auf Knopfdruck |
| **Personalisierung je Lead** | Ein eigener Aufhänger pro Kontakt, nicht ein Serienbrief |
| **Qualitätsprüfung vor dem Senden** | Copy-Check und Torwart — niemand sonst bremst dich |
| **Messung danach** | Welcher Text bringt Termine. Das kann kein Wettbewerber sagen |

**Lead-Beschaffung wird Schritt 1 von sechs**, nicht das Thema der Seite.

### Warum die Messung die stärkste Säule ist

Instantly sieht die Antwort, hat den Text aber nicht geschrieben. Apollo
schreibt weder Text noch sieht es die Antwort. Frostbreaker hat als einziges
System **beide Hälften** — es erzeugt den Aufhänger *und* sieht, was
zurückkommt.

Seit dem 05.08. ist das nicht mehr nur eine Behauptung: die Zuordnung von
Antwort zu Schritt und Textfassung ist gebaut (Migration 0076), und die
Ansicht „Nach Text" zeigt je Fassung Antworten, Absagen und Termine. **Dafür
gibt es noch kein einziges Bild auf der Website.**

---

## 3. Die neue Reihenfolge

23 Abschnitte werden 11. Der Kern rückt von Position 11–19 auf 2–6.

| Neu | Abschnitt | Herkunft |
|---|---|---|
| 1 | **Hero** | umgeschrieben, neues Leitbild |
| 2 | **In sechs Schritten** *(der Rundgang)* | **NEU — das Herzstück** |
| 3 | **Was kein anderes Werkzeug kann** | verdichtet aus `#torwart`, `#personalisierung`, `#ehrlich` |
| 4 | **Drei Kanäle, eine Kette** | `#kette` + `#telefon` + LinkedIn |
| 5 | **Nach dem Ja: das CRM** | neu, aus `postSend` + Pipeline/Pipedrive |
| 6 | **Was wir dir nicht vormachen** | `#ehrlich`, bleibt wörtlich |
| 7 | **Der Unterschied im Alltag** | `#alltag`, bleibt |
| 8 | **Woher die Leads kommen** | **fünf Abschnitte zu einem verdichtet** |
| 9 | **Preise** | `#preise` |
| 10 | **Datenschutz & Vertrauen** | `trust` |
| 11 | **Häufige Fragen** | `faq`, nimmt BYOK und Kosten auf |

### Was gestrichen oder verschoben wird

| Heute | Wohin | Warum |
|---|---|---|
| `#ergaenzt` („kein Ersatz") | **gestrichen** | Ordnet uns als Zubehör ein. Der Einwand wird in der FAQ beantwortet, nicht als eigener Abschnitt gefeiert |
| `#kosten` (1,5 Cent) | → `/preise` + FAQ | Preisargument gehört zur Preisfrage, nicht vor das Produkt |
| `#integrationen` (BYOK) | → schmaler Logo-Streifen + FAQ | Ein Nebensatz, kein Abschnitt |
| `#technologie`, `leadSource`, `qualifiedLeads`, `#verifizierung`, `searchModes` | → **ein** Abschnitt 8 + `/funktionen` | Fünf Abschnitte über Beschaffung sind vier zu viel |
| `scaling` (Hochrechnung) | **gestrichen** | Steht schon als Streichvorschlag in `NAECHSTER-SCHRITT.md`: „100 Vollzeitstellen" ist die Sorte Zahl, bei der man aufhört zu glauben |
| `#agenturen` | → Verweiskarte auf `/fuer-agenturen` | Die Seite existiert bereits |
| `#startklar`, `painPoints` | in Schritt 3 bzw. Hero eingearbeitet | |

---

## 4. Das Herzstück: der Rundgang in sechs Schritten

Für jemanden, der die App nie gesehen hat. Jeder Schritt: eine Überschrift,
zwei bis drei Sätze, **ein echtes App-Bild**, ein hervorgehobenes Detail.

| # | Schritt | Was gezeigt wird | Mockup |
|---|---|---|---|
| **1** | **Nische eingeben, Leads bekommen** | Suchmaske mit Branche, Ort, Größe, Technologie → Firmen mit Ansprechpartner und geprüfter Adresse | `UnifiedSearchMockup` ✅ |
| **2** | **Kampagne und Sequenz entstehen** | Sequenz mit vier Schritten, `{{personalization}}` je Lead eingesetzt | `CampaignMockup` ✅ + `AiAgentMockup` ✅ |
| **3** | **Der Coach liest gegen** | Copy-Check: Länge, Spam-Wörter, KI-Klang, nur ein CTA, Aufhänger-Prüfung | `CopyCheckMockup` ✅ |
| **4** | **Der Torwart lässt dich erst dann starten** | Elf Prüfungen, vier halten den Start auf: SPF/DKIM, Bounce-Quote, sendbare Leads | `GateMockup` ✅ |
| **5** | **Es läuft — und die Antworten kommen herein** | Kampagne aktiv, Postfach mit eingestuften Antworten, drei Entwürfe | `PostSendMockup` ✅ + **`InboxMockup` NEU** |
| **6** | **Und jetzt weißt du, welcher Text wirkt** | Nach Text: je Schritt und Fassung Antworten, Absagen, **Termine** | **`CopyOutcomesMockup` NEU** |

**Schritt 6 ist der Schluss und der Höhepunkt.** Die Seite endet den Rundgang
nicht beim Versand — sie endet bei der Frage, die sonst niemand beantwortet.

### Gestaltung des Rundgangs

- **Abwechselnd Bild links / Bild rechts.** Sechs gleich gebaute Blöcke
  untereinander lesen sich wie eine Tabelle; der Wechsel hält das Auge wach.
- **Schrittnummer als großes Element**, nicht als kleine Ziffer — sie ist die
  Orientierung auf einer langen Seite.
- **Eine Fortschrittsspur links** ab `lg`, die den aktuellen Schritt
  hervorhebt. Aus dem Muster „Funnel (3-Step Conversion)": *progress
  indicators, progressive disclosure*.
- **Je Schritt ein Mini-CTA** („So sieht es in echt aus"), aus demselben
  Muster: *Each step: mini-CTA. Final: main CTA*.
- **Kein Auto-Karussell.** Sechs Schritte, die von allein weiterspringen,
  nimmt niemand auf; und für die Barrierefreiheit ist eine gescrollte Liste
  ohnehin die bessere Wahl.

---

## 5. Neue Komponenten

Nur vier — der Rest ist Umstellen und Umschreiben.

| Komponente | Datei | Inhalt |
|---|---|---|
| **`StepWalkthrough`** | `app/_walkthrough.tsx` | Der Rahmen: Nummer, Text, Bild, Wechselseite, Fortschrittsspur |
| **`CopyOutcomesMockup`** | `app/_app-mockups.tsx` | Die Tabelle „Nach Text": Schritt · Fassung A/B · Kontakte · Antworten · Absagen · **Termine** |
| **`InboxMockup`** | `app/_app-mockups.tsx` | Posteingang mit eingestufter Antwort und drei Entwürfen |
| **`LinkedInMockup`** | `app/_app-mockups.tsx` | Ein Kontakt mit **fertig eingesetzter Nachricht** im Textfeld und den drei Knöpfen *Kopieren · Profil öffnen · als gesendet vermerken*. Der Aufhänger sichtbar als eigener Absatz — er ist derselbe wie in der Mail |

`CopyOutcomesMockup` ist der wichtigste davon: er zeigt die einzige Funktion,
die kein Wettbewerber hat, und es gibt bisher kein Bild davon.

**Regel für alle Mockups, aus `_app-mockups.tsx` übernommen:** nachgebaut,
nicht abfotografiert. Im echten Betrieb stehen dort Namen realer Personen mit
Rolle und Arbeitgeber; die gehören ohne Einwilligung nicht ins Marketing —
erst recht nicht auf eine Seite, die mit Datensparsamkeit wirbt. Zahlen werden
erfunden, aber an den echten Schwellen gewählt.

---

## 6. Der Hero — bleibt (Entscheidung vom 2026-08-05)

**Die Überschrift bleibt unverändert.** Ich hatte drei Umformulierungen
vorgeschlagen, Youssef hat sie verworfen: die bestehende Zeile ist erprobt,
und eine Startseiten-Überschrift auszutauschen, während gleichzeitig die ganze
Reihenfolge umgebaut wird, macht hinterher nicht mehr unterscheidbar, was
gewirkt hat.

**Was sich am Hero trotzdem ändert: das Bild.** Heute steht dort das Dashboard
mit Lead-Zahlen — also genau das, was jeder Wettbewerber auch zeigen kann.
Künftig die Ansicht „Nach Text" mit der Termin-Spalte.

Das ist der billigste große Hebel auf der ganzen Seite: die Überschrift bleibt
vertraut, aber das erste Bild zeigt ab sofort das, was uns unterscheidet. Wer
nur den oberen Bildschirm sieht, hat dann schon verstanden, dass hier etwas
gemessen wird, das andere nicht messen.

---

## 7. LinkedIn — korrigiert am 2026-08-05

**Ich hatte das zu schwach dargestellt.** In der ersten Fassung stand hier
„eine Arbeitsliste mit Profil-Link". Nachgesehen in
`app/linkedin/linkedin-list.tsx` und `lib/crm/linkedin-message.ts` ist es
deutlich mehr:

Je Kontakt steht die **fertig geschriebene Nachricht** da. Nicht eine Vorlage
zum Ausfüllen — die eingesetzte, versandfertige Nachricht:

| Was | Wie |
|---|---|
| **Vorlage mit denselben Platzhaltern wie die Mail-Kampagne** | `{{firstName}}`, `{{companyName}}`, `{{personalization}}` — wer eine Sequenz geschrieben hat, lernt nichts Neues |
| **Derselbe Aufhänger wie in der Mail** | schon erzeugt und bezahlt. 214 von 230 Kontakten, die *nur* ein LinkedIn-Profil haben, trugen bereits einen — er lag nur nirgends sichtbar |
| **Je Kontakt änderbar** | für den einen, bei dem der Aufhänger nicht ganz passt, ohne die Vorlage anzufassen |
| **Kopieren · Profil öffnen · als gesendet vermerken** | drei Knöpfe in einer Zeile |
| **Der Vermerk landet in Pipeline und Auswertung** | als Aktivität, wie jede Mail auch |

**Der Satz, der es trifft:** *Die Nachricht steht, bevor du LinkedIn öffnest.*

Der Zeitgewinn ist genau der, den Youssef nennt: niemand sucht den Lead
heraus, niemand formuliert etwas. Kopieren, Profil öffnen, einfügen, senden.
Statt fünf Minuten Recherche und Schreiben pro Kontakt sind es zwei Klicks.

### Dass der Mensch sendet, ist kein Mangel — es ist das Verkaufsargument

LinkedIn bietet für Nachrichten und Kontaktanfragen **keine API**. Jedes
Werkzeug, das trotzdem automatisch sendet, steuert einen Browser fern,
verstößt gegen die Nutzervereinbarung und riskiert die Sperrung — bei einem
verkauften Produkt also die Konten der Kunden. Das steht so im Code
begründet und ist eine bewusste Entscheidung, kein fehlendes Feature.

Das passt exakt zur Haltung, die die Seite ohnehin verkauft: der Torwart, der
dich stoppt, bevor du deine Domain verbrennst — und die LinkedIn-Liste, die
dein Konto nicht verbrennt. **Wir bereiten alles vor, den Absendeknopf
drückst du.** Formuliert als Schutz, nicht als Einschränkung.

Nicht behauptet wird: dass die App von allein Nachrichten verschickt. Das
wäre die eine Zusage, die uns später einholt.

### Wo es auf der Seite steht

Abschnitt 4 („Drei Kanäle, eine Kette") bekommt LinkedIn als gleichwertigen
zweiten Kanal statt als Fußnote — mit dem `LinkedInMockup`, das die fertige
Nachricht und die drei Knöpfe zeigt. Der Kettengedanke bleibt: Tag 0 Mail,
Tag 3 ohne Antwort LinkedIn, Tag 7 Anruf.

Die Auswertung je Kanal existiert für Mail; für LinkedIn zählt heute die
Aktivität mit, eine eigene Aufschlüsselung gibt es noch nicht. Diese eine
Zeile bekommt die Kennzeichnung **„in Arbeit"** — nicht der ganze Abschnitt.

---

## 8. Was auf `/funktionen` wandert

Die Seite hat heute 153 Zeilen und ist der natürliche Ort für die Tiefe, die
von der Startseite verschwindet:

- die drei Suchwege im Einzelnen (Orte · Firmen · Entscheider)
- der Technologie-Filter mit seiner Slug-Liste
- Adressprüfung und Verifizierungsbericht
- BYOK und die Integrationsliste
- Sperrliste, eigene Felder, CSV-Import

Von der Startseite führt aus Abschnitt 8 genau ein Link dorthin.

---

## 9. Reihenfolge der Umsetzung

Vier Stufen. Jede ist für sich lauffähig und einzeln überprüfbar — die Seite
ist nach jeder Stufe deploybar, nicht erst am Ende.

**Stufe 1 — Das Gerüst.** *(die eigentliche Arbeit)*
`StepWalkthrough` bauen, die drei neuen Mockups zeichnen, Texte für sechs
Schritte in beiden Sprachen. Abschnitt 2 einsetzen.
→ *Danach existiert der Rundgang, die alte Seite darunter noch unverändert.*

**Stufe 2 — Aufräumen.**
`#ergaenzt` und `scaling` raus, die fünf Beschaffungsabschnitte zu einem
verdichten, `#kosten` und `#integrationen` verschieben, Reihenfolge auf die
neue Liste umstellen.
→ *Danach stimmt die Gewichtung. Das ist die Stufe mit dem größten Effekt.*

**Stufe 3 — Hero-Bild und Kanäle.**
Hero bekommt das neue Bild (Überschrift bleibt), Abschnitt 4 mit LinkedIn in
voller Stärke, Abschnitt 5 CRM.
→ *Danach zeigt das erste Bild der Seite, was uns unterscheidet.*

**Stufe 4 — Feinschliff.**
FAQ nimmt die verschobenen Einwände auf, `/funktionen` bekommt die Tiefe,
Ankerlinks und Navigation nachziehen, Sprachblöcke gegenprüfen.

---

## 10. Wie dokumentiert wird

Wie im App-Repo: **die Begründung steht dort, wo die Entscheidung getroffen
wurde**, nicht in einer Datei daneben.

- Jeder neue Abschnitt in `page.tsx` bekommt einen Kommentar, der sagt, warum
  er dort steht und was er ersetzt.
- `_walkthrough.tsx` bekommt einen Kopfkommentar mit den Gestaltungsregeln
  (Wechselseite, kein Karussell, warum sechs und nicht vier).
- Jedes neue Mockup nennt, welchen echten Bildschirm es nachbaut und welche
  Zahlen erfunden sind.
- Ein Commit je Stufe, mit dem Befund aus Abschnitt 1 als Begründung.
- Dieser Plan bleibt im Repo und wird beim Umsetzen fortgeschrieben — nicht
  gelöscht, sondern mit „umgesetzt am …" versehen, wie `ANTWORTQUOTE.md` im
  App-Repo.

---

## 11. Entscheidungen

Getroffen am 2026-08-05:

| Frage | Entscheidung |
|---|---|
| **Hero-Überschrift** | **bleibt unverändert.** Nur das Bild wechselt (Abschnitt 6) |
| **Testimonials** | **bleiben, wie sie sind.** Nicht angefasst |
| **LinkedIn** | wird stark dargestellt, nicht als Fußnote — korrigierte Fassung in Abschnitt 7 |

Offen, bevor Stufe 2 beginnt:

1. **`#ergaenzt` („Ihr nutzt Apollo schon? Dann ist das hier kein Ersatz")** —
   streichen oder als FAQ-Antwort behalten? Ich halte den Abschnitt für den
   schädlichsten auf der Seite, aber der Einwand selbst ist real und sollte
   irgendwo beantwortet werden. Mein Vorschlag: Abschnitt streichen, Antwort
   in die FAQ, dort umgedreht formuliert — *„Apollo liefert Adressen.
   Frostbreaker schreibt die Mail, prüft sie und misst, was sie gebracht
   hat."*

Das blockiert Stufe 1 nicht.

---

## 12. Was ich bewusst nicht vorschlage

- **Kein Redesign.** Farben, Typografie und Komponenten bleiben. Das Problem
  ist die Reihenfolge und die Gewichtung, nicht das Aussehen — ein Redesign
  würde die eigentliche Arbeit nur verstecken.
- **Kein Video.** Ein Rundgang aus echten Bildern ist billiger zu pflegen und
  wird tatsächlich gelesen; ein Video schaut auf einer B2B-Seite ein Bruchteil
  an.
- **Keine neuen Zahlen erfinden.** Was auf der Seite steht, muss aus der App
  belegbar sein. Die Hochrechnung fliegt genau deshalb raus.
