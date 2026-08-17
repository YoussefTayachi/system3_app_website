# Bilder, die erklären statt zu wiederholen

*2026-08-17. Rückmeldung des Coachs zu den Mockups, mit Databricks als
Gegenbeispiel.*

## Der Vorwurf, in drei Teilen

> your visual element doesn't really help at understanding what's going on. It
> should help make visitors understand what the section's text is trying to
> explain instead of totally replacing the text with even more text but in an
> image.
> Also remove the title and the fake 'window' buttons on the top bar.
> Also those visuals don't make any sense on a mobile device.

## Was gemessen war, bevor etwas geändert wurde

| | |
|---|---|
| Gerahmte Bilder auf der Website | **23** |
| Davon mit Fensterknöpfen | **23** |
| Wörter, die insgesamt in Bildern stehen | **1.700** |
| Größtes Bild (Angebotskarte) | 231 Wörter, **2.098 px hoch auf 375 px** |

Der Mobil-Vorwurf ist damit keine Geschmacksfrage: die Angebotskarte war auf
einem Telefon **sechs Bildschirmseiten** hoch — und der Inhalt war Fließtext,
kein Diagramm.

---

## Was geändert wurde

### 1 · Die Fensterleiste, 23 von 23

Drei identische Kopien von `AppFrame` (`_app-mockups`, `_guard-mockups`,
`_offer-mockups` — der Code sagte selbst, dass es drei sind). Die Leiste
kostete jedes Bild 41 px Höhe und trug keine Information.

**Ausnahme, die nicht verloren gehen durfte:** drei Rahmentitel enthielten
„Beispielansicht" — der Hinweis, dass die gezeigten Zahlen erfunden sind. Der
ist keine Dekoration, sondern eine Zusage an den Leser. Er steht jetzt als
schmale Zeile **unter** dem Bild, also dort, wo ein Hinweis hingehört.

Die übrigen vier Titel („Vor dem Start", „Ein Lead, drei Kanäle", „LinkedIn ·
Nachricht steht", „Angebot · Prüfung") sind ersatzlos gefallen: jeder von
ihnen wiederholte die Überschrift des Abschnitts daneben.

### 2 · Die Angebotskarte: von 231 auf ~90 Wörter

Sie zeigte zwölf Kästen mit je **Frage und Antwort** — also den
Abschnittstext ein zweites Mal, nur in Kästen.

Jetzt zeigt sie, was sie zeigen soll: **zwölf Fragen in vier Gruppen und eine
Prüfung in der Mitte.** Ausgefüllt bleiben genau die **zwei** Felder, zwischen
denen der Befund-Pfeil läuft — ohne sie wäre der Pfeil eine Linie zwischen
zwei Fragen und der Befund unbelegt.

| | vorher | nachher |
|---|---|---|
| Wörter | 231 | ~90 |
| Höhe bei 1440 px | 1.026 px | 880 px |
| Höhe bei 375 px | 2.056 px | 1.606 px |

Die Fußzeile war dabei doppelt falsch geworden: sie sprach von „jede Linie ist
eine Regel" (seit dem 15.08. sind es Vorschläge, keine Regeln) und behauptete,
die Karte sei mit retaiyns Sätzen ausgefüllt (jetzt nur noch zwei Felder).
Beides steht richtig.

### 3 · Was ausdrücklich NICHT geändert wurde

Zwei der drei textreichsten Bilder habe ich angesehen und **behalten**, weil
sie den Vorwurf nicht erfüllen:

- **Copy-Check** (145 Wörter). Zeigt einen markierten schlechten Entwurf über
  einer sauberen Fassung, mit den drei Urteilen darunter. Das wiederholt
  keinen Satz des Abschnitts — es *führt vor*, was die Prüfung tut. Die
  Markierungen sind die Bildsprache. Nach dem Maßstab des Coachs ist das das
  beste Bild der Website.
- **Neue Suche** (105 Wörter). Ein echter Bildschirm mit Feldern. Die hohe
  Wortzahl sind Feldbeschriftungen, keine Sätze.

Ein Bild danach zu beurteilen, wie viele Wörter es enthält, wäre der falsche
Schluss aus einer richtigen Beobachtung.

---

## Offen

- **Die Systemkarte** (`_system-map.tsx`, 197 Wörter, 2.154 px auf 375 px) ist
  der Kasten aus dem dritten Screenshot des Coachs. Sie hat bereits Pfeile mit
  Übergabe-Beschriftung zwischen den Stufen — die waren im Screenshot nur
  nicht mitanimiert. Was bleibt: die drei Punkte je Stufe sind Sätze, und die
  Fußnoten darunter sind Absätze. Beides ließe sich auf Chip-Länge kürzen,
  ohne Inhalt zu verlieren; die Fußnote zu Clay muss dabei wörtlich stehen
  bleiben (sie zieht die Grenze zwischen „angebunden" und „binden wir an").
- **Mobil bleibt die Angebotskarte 1.606 px hoch.** Vier Gruppen untereinander
  sind auf einem Telefon ein Stapel, kein Diagramm. Ein zweispaltiges Raster
  der Fragekästen würde das halbieren, kollidiert aber mit der Fahrbahn des
  Befund-Pfeils.

## Gemessen nach dem Umbau

48 Messungen (8 Seiten × 320/375/1440 px × de/en):

- waagerechter Überlauf: **0**
- Fensterknöpfe: **0**
- Typecheck sauber
