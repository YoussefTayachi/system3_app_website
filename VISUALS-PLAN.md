# Plan: Visuals & Lesbarkeit

---

# TEIL A — Der Hero (höchste Priorität)

Der Hero entscheidet in drei Sekunden. Aktuell arbeiten dort sieben gestapelte
Elemente gegeneinander.

## A0 — Fehler: Badge überlappt Inhalt

Der grüne „2×"-Badge (`_illustration.tsx:66`) steht `-right-4 -top-4` **und** trägt
`animate-float`. Er driftet dadurch über das „Antwort"-Label der ersten Karte —
gemessen 52×15px Überdeckung. Sichtbar in Produktion *und* Preview.

*Lösung:* Badge aus dem Kartenbereich lösen (weiter nach oben/außen), Float-Amplitude
für dieses Element reduzieren, und der Karte oben etwas Luft geben. Kein `z-index`-
Pflaster — das würde die Überdeckung nur sauberer aussehen lassen.

## A1 — Die linke Spalte ist überladen

Aktuell übereinander: Eyebrow → H1 → 5 Zeilen Fließtext → 2 Buttons → Hinweiszeile →
Fakten-Box → Quellenangabe. Die Fakten-Box konkurriert direkt mit den CTAs um
Aufmerksamkeit, obwohl sie das schwächste Element ist.

*Lösung:*
- Fließtext auf 2–3 Zeilen kürzen (die Details stehen ohnehin weiter unten)
- Fakten-Box aus dem Hero nehmen oder unter die Stat-Kacheln schieben
- Danach steht die Reihenfolge: Eyebrow → H1 → kurzer Absatz → CTA. Vier Elemente
  statt sieben.

## A2 — Das echte Produkt ist versteckt

`alle-leads.png` (1690×955, ein echter Screenshot der App) liegt hinter einem
zugeklappten `<details>` mit der Beschriftung „Frostbreaker Leads-Tabelle…".
Der stärkste Beweis, dass hinter der Seite ein fertiges Produkt steht, ist
einen Klick weit weggeräumt.

*Lösung:* Screenshot sichtbar machen — angeschnitten unter dem Hero, leicht
perspektivisch, mit weichem Auslaufen nach unten. Das ist gleichzeitig der
stärkste Beleg für „der kann Software bauen".

## A3 — Illustration und Screenshot doppeln sich

Rechts steht eine *nachgebaute* Antwort-Liste, unten liegt der *echte* Screenshot.
Zwei Darstellungen derselben Sache.

*Lösung:* Entweder die Illustration behalten und den Screenshot als
angeschnittenes Band darunter, oder umgekehrt. Nicht beides gleichwertig.
Empfehlung: Illustration rechts (sie erzählt „Antworten kommen rein"),
Screenshot als Band darunter (er beweist „das Produkt existiert").

## A4 — Feinheiten

- Der Hintergrundverlauf ist sehr zurückhaltend; im oberen Bereich dürfte er
  etwas präsenter sein, ohne laut zu werden
- Die drei Stat-Kacheln sind schlichte Kästen — Trennlinien statt Rahmen würden
  besser zur neuen Typo-Sprache passen
- Der Sekundär-CTA („Oder Call buchen") ist optisch fast so stark wie der
  primäre; der Unterschied darf deutlicher sein

---

# TEIL B — Textänderung „anschreiben"

## Dein Punkt ist berechtigt — und die Seite widerspricht sich bereits

Die englische Fassung sagt schon heute **„Reach at least 5,000 real
decision-makers"**. Nur die deutsche schreibt „anschreiben". Die beiden Sprachen
versprechen also Unterschiedliches.

## Wortwahl

| Variante | Bewertung |
|---|---|
| **kontaktieren** | Kanalneutral, sachlich korrekt (du stellst den Kontakt her). **Empfehlung.** |
| erreichen | Passt zum englischen „Reach", klingt wärmer — behauptet aber Erfolg („erreicht"), nicht nur den Versuch |
| ansprechen | Neutral, aber blasser |

Neue H1: *„Mindestens 5.000 echte Ansprechpartner pro Woche **kontaktieren**,
vollautomatisch."*

## Wichtig: ein Wort allein reicht nicht

Wenn die App auch Telefonnummern liefert, ist das eine Positionierungs-Frage,
keine Wortfrage. Die Seite ist durchgehend E-Mail-zentriert:

- Hero-Fließtext: „verifiziert die **E-Mail-Adresse** und schreibt eine individuelle Icebreaker-Zeile"
- Meta-Beschreibung, OG-Bild
- Ganze Sektionen zu Zustellbarkeit, SPF/DKIM/DMARC, Bounce-Raten
- Alle Integrationen sind Mail-Tools

Ein „kontaktieren" in der Überschrift, dem nirgends eine Telefon-Fähigkeit folgt,
erzeugt eine Erwartung, die die Seite nicht einlöst.

*Empfehlung:* Wort ändern **und** Telefonnummern an zwei, drei Stellen sichtbar
machen — etwa als zusätzliche Spalte im Leads-Mockup und als Halbsatz im
Hero-Absatz. Dann trägt die Aussage.

**Offene Frage an dich:** Sind die Telefonnummern verifiziert oder kommen sie
ungeprüft aus Google Places? Davon hängt ab, wie stark man sie bewerben darf.
Ich erfinde dazu keine Formulierung.

---


**Grundlage:** visuelle Prüfung der Preview am 2026-07-24, Sektion für Sektion vermessen.

## Befund

Von 22 Sektionen haben **13 kein einziges visuelles Element**. Das sind zusammen rund 7.000px Scrollstrecke aus reinem Text.

| Sektion | Höhe | Wörter | Visuals |
|---|---|---|---|
| Warum Frostbreaker und nicht vier Tools | 1308px | 301 | **0** |
| Häufige Fragen | 943px | 95 | **0** |
| Kommt dir bekannt vor? | 815px | 190 | **0** |
| Berechne dein Sparpotenzial | 803px | 69 | **0** |
| Im Vergleich | 797px | 116 | **0** |
| Feste Preise | 711px | 89 | **0** |
| Was rechnerisch möglich ist | 664px | 177 | **0** |
| Der KI-Agent ist keine Blackbox | 606px | 122 | **0** |
| Exportiert direkt in die Tools | 509px | 36 | **0** |

---

## P0 — Fehlerbehebung (Regression aus dem letzten Durchgang)

**USP-Raster erzeugt tote Flächen.** `grid sm:grid-cols-2` gibt allen Zellen einer Zeile
dieselbe Höhe. Einträge mit Fakten-Box sind 349px hoch, ihre Nachbarn 160px — Differenz
bleibt als Leerraum stehen (gemessen: 189px und 166px).

*Lösung:* `columns-2` mit `break-inside-avoid` statt Grid. Einträge fließen dann nach
ihrer echten Höhe, Lücken verschwinden.

---

## P1 — Wo Visuals den größten Unterschied machen

### 1. Integrationen: echte Logos statt „CSV-Import" ×6
Acht identische weiße Karten, sechs davon mit demselben Text. Aktuell die schwächste
Sektion der Seite.
*Lösung:* Wortmarken als inline-SVG (Instantly, Smartlead, Lemlist, HubSpot, Pipedrive,
Salesforce, Excel, Zapier), Import-Art als kleiner Zusatz. Logos monochrom in `--c-faint`,
damit sie nicht mit dem Sky-Akzent konkurrieren.

### 2. „Warum Frostbreaker": 1308px reiner Text
Die höchste Sektion der Seite, 301 Wörter, kein Ankerpunkt fürs Auge.
*Lösung:* Zweispaltig aufbrechen — links die Argumente, rechts eine
Gegenüberstellung „ein Workflow vs. vier Abos": vier gestapelte Tool-Kacheln mit
Preisschildern gegen eine einzelne Frostbreaker-Kachel. Nutzt die vorhandene
Mockup-Sprache aus `_mockups.tsx`.

### 3. „Kommt dir bekannt vor?": rechte Hälfte leer
Überschrift und Einleitung belegen 55% der Breite, rechts steht nichts.
*Lösung:* Ein Mockup des Ist-Zustands — vier überlappende Browser-Tabs mit
verschiedenen Tool-Logos, dazwischen eine CSV-Datei. Zeigt das Chaos, statt es
zu beschreiben.

### 4. Skalierungspotenzial: Zahlen ohne Form
177 Wörter, vier Kacheln, keine Visualisierung des Wachstums.
*Lösung:* Ein schlichtes Balken- oder Flächendiagramm (reines SVG, keine
Chart-Bibliothek) das die Spanne 100 → 125.000 zeigt.

### 5. Vergleichstabelle: Ja/Nein statt Symbolen
*Lösung:* Häkchen und Kreuze als Icons, Frostbreaker-Spalte dezent hinterlegt.
Macht die Tabelle in zwei Sekunden scanbar statt lesbar.

### 6. FAQ: keine Aufklapp-Andeutung
12 Fragen, 943px, kein Chevron — man sieht nicht, dass es aufklappbar ist.
*Lösung:* Chevron rechts, dreht sich beim Öffnen. Reines CSS über `details[open]`.

### 7. Preiskarten ohne Hierarchie
*Lösung:* Agentur-Plan visuell hervorheben (dunkler Grund oder Akzentrahmen),
Häkchen als Icon statt Text-`✓`.

---

## P2 — Feinschliff

- Rechner: Slider-Bahn färbt sich links vom Griff ein (zeigt Position)
- Vier-Säulen-Sektion: Spalten enden ungleich, Grundlinie angleichen
- Screenshots aus `public/screenshots/` sind kaum eingebunden (nur einer, hinter
  einem Aufklapper versteckt) — Dashboard und KI-Agent gehören sichtbar in ihre
  jeweiligen Sektionen

---

## Zum Thema MCP-Komponenten

React Bits und Magic UI sind für diese Seite **die falschen Werkzeuge**: Beides sind
Bibliotheken für Effekt-Komponenten (animierte Hintergründe, Textanimationen). Was hier
fehlt, sind produktspezifische Illustrationen — Logos, ein Workflow-Vergleich, ein
Diagramm. Die kann keine generische Bibliothek liefern; sie entstehen als SVG im
bestehenden Mockup-Stil, der auf der Seite schon funktioniert (siehe `LocalReachMockup`,
`AgencyMockup`).

Zudem: beide MCP-Server sind aktuell in dieser Sitzung nicht geladen — die
Konfiguration greift erst nach einem Neustart von Claude Code.

---

## Reihenfolge

1. P0-Fehler beheben (klein, behebt sichtbaren Schaden)
2. Integrationen-Logos + FAQ-Chevrons + Vergleichs-Icons (schnell, hohe Wirkung)
3. Die drei größeren Mockups: Tool-Chaos, Workflow-Vergleich, Skalierungs-Diagramm
4. Erneute visuelle Prüfung
