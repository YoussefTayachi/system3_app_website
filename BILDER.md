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

### 4 · 142 Pixel Weiß im Suchbild — der einzige echte Mobil-Fehler

Beim Nachsehen auf 375 px aufgefallen: unter dem Suchbild stand ein
handbreiter leerer Streifen. Ursache war kein Abstand, sondern der
Tafelstapel: die vier Reiter (Maps, Hunter, Apollo, Prospeo) liegen im selben
Rasterfeld, und die drei **verborgenen** trugen zur Höhe bei.

```
natuerliche Hoehen der vier Tafeln (DE)
  375 px:   547 / 512 / 621 / 693   sichtbar 547  → 142 px tot
  1440 px:  313 / 350 / 362 / 426   sichtbar 313  → 109 px tot
```

Das war ursprünglich Absicht — so springt beim Wechseln nichts. Der Preis war
aber dauerhaft: 142 px Weiß in einem gerahmten Bild lesen sich als Fehler und
füllen auf einem Telefon ein Drittel des Bildschirms. Ein Höhenwechsel
passiert dagegen nur, wenn jemand selbst auf einen Reiter tippt.

Die verborgenen Tafeln stehen jetzt `position: absolute` und zählen nicht
mehr mit. **Tote Fläche: 0.** Die Karte schrumpft von 879 auf 737 px (375 px)
und von 572 auf 463 px (1440 px).

---

## Was ich versucht und wieder verworfen habe

**Die Angebotskarte zweispaltig auf dem Telefon.** Die Idee war, die vier
Gruppen 2×2 zu setzen statt zu stapeln — am Rechner stehen sie ja auch so.
Gebaut, gemessen, zurückgenommen:

| | einspaltig | zweispaltig |
|---|---|---|
| Karte auf 375 px | **1.645 px** | 1.857 px |
| Gruppe 1 und 2 | 189 px | 340 px |
| Gruppe 3 und 4 | 396 / 189 px | 859 / 859 px |

Zwei Spalten sind auf einem 375-px-Telefon je rund 140 px breit. Dort bricht
jede Frage auf drei Zeilen um, und das Raster zieht beide Zellen einer Reihe
auf die Höhe der höheren. **Die Karte wird dadurch 212 px höher, nicht
kürzer.** Hätte ich es nicht gemessen, stünde jetzt eine Verschlechterung in
der Seite.

## Offen

- **Die Systemkarte** (`_system-map.tsx`, 197 Wörter, 2.245 px auf 375 px) ist
  der Kasten aus dem dritten Screenshot des Coachs. Sie hat bereits Pfeile mit
  Übergabe-Beschriftung zwischen den Stufen — die waren im Screenshot nur
  nicht mitanimiert. Nachgemessen, wohin ihre Höhe geht:

  ```
  je Stufe:  Etikett 17  Titel 23  Liste 184  Fussnote 80–119
  ```

  Die Liste ist in allen drei Stufen 184 px — drei Punkte à zwei Zeilen. Um
  sie einzeilig zu bekommen, müsste jeder Punkt unter ~38 Zeichen bleiben;
  „Name, Rolle, geprüfte E-Mail, Telefon und LinkedIn, soweit öffentlich" hat
  68, und `soweit öffentlich` ist die Einschränkung, die den Satz ehrlich
  macht. **Für rund 60 px Gewinn Inhalt zu streichen, wäre der falsche
  Handel** — deshalb bewusst liegen gelassen und nicht vergessen.
- **Mobil bleibt die Angebotskarte 1.606 px hoch.** Nach dem Fehlversuch oben
  ist das die Höhe des Inhalts, nicht der Gestaltung.

## Gemessen nach dem Umbau

48 Messungen (8 Seiten × 320/375/1440 px × de/en):

- waagerechter Überlauf: **0**
- Fensterknöpfe: **0**
- Typecheck sauber
