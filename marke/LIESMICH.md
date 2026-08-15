# Frostbreaker — Bildmarke

Ein **f** im abgerundeten Quadrat. Das Zeichen, das vorher schon da war —
neu ist nur die Ausführung.

## Welche Datei wofür

| Datei | Wofür |
|---|---|
| `frostbreaker-profilbild-800.png` | **YouTube-Profilbild.** Auch LinkedIn, X, Instagram. Quadratisch hochladen, die Plattformen beschneiden selbst zum Kreis. |
| `frostbreaker-profilbild-512.png` | Discord, Slack, App-Symbole |
| `frostbreaker-profilbild-400.png` | X/Twitter empfiehlt 400 |
| `frostbreaker-profilbild-98.png` | YouTubes technisches Minimum. Nur nehmen, wenn eine Plattform größere Dateien ablehnt. |
| `frostbreaker-youtube-banner.png` | **YouTube-Kanalbanner**, 2048 × 1152 |
| `frostbreaker-wortmarke-hell.png` | Marke plus Schriftzug, für **dunkle** Flächen. Transparenter Grund. |
| `frostbreaker-wortmarke-dunkel.png` | Dasselbe für **helle** Flächen |
| `frostbreaker-marke.svg` | Die Quelle. Beliebig skalierbar, für Druck und neue Größen. Liegt zusätzlich als `app/icon.svg` (Favicon der Website). |
| `frostbreaker-marke-scheibe.svg` | **Alternative:** eine gebrochene Eisscheibe, abstrakt |
| `frostbreaker-marke-dunkel.svg` | Die Scheibe in dunkel |

Die Ecken außerhalb des Kreises sind **transparent**: bei der Kreisbeschneidung
macht das keinen Unterschied, aber wer die Datei eckig verwendet, bekommt kein
weißes Kästchen auf dunklem Grund.

## Was sich gegenüber dem alten Zeichen geändert hat

Das alte war ein Platzhalter. Es funktionierte, aber vier Dinge waren offen:

| | alt | jetzt |
|---|---|---|
| Buchstabe | **Arial-Text** — von der Systemschrift abhängig, auf jedem Gerät ein wenig anders | als Pfad gezeichnet, überall gleich |
| Blau | `#0EA5E9` (sky-500), von vor dem Redesign | `#0284C7`, dasselbe wie die Wortmarke |
| Ecken | kleiner Radius. Die Kreisbeschneidung schnitt sie so an, dass ein **Achteck** übrig blieb — nachgesehen bei 88 px | großer Radius, die Rundung fällt sauber weg |
| Stellung | Buchstabe unten rechts, kaum Querbalken | mittig, sichtbarer Querbalken |

Gerendert und geprüft bei 120, 88, 48, 32 und 16 Pixeln, auf hellem und
dunklem Grund, eckig und rund.

## Der Einwand, der bleibt

**Blaues Quadrat mit weißem Kleinbuchstaben f ist nahe an Facebooks Symbol.**
Das war der Grund, warum diese Richtung zunächst verworfen wurde. Der Betreiber
kennt den Einwand und hat sich bewusst dafür entschieden. Der Querbalken und
die mittige Stellung sind der Abstand, den die Form hergibt — Facebooks f sitzt
unten rechts und hat keinen sichtbaren Querbalken.

Wer es sich anders überlegt: `frostbreaker-marke-scheibe.svg` liegt daneben.
Eine gebrochene Eisscheibe — der Name sagt es wörtlich, das Produkt heißt
Kaltakquise, das Kernstück der App heißt Icebreaker. Ohne
Verwechslungsgefahr, dafür ohne Buchstaben.

## Auch geprüft und verworfen

- **Ein gebrochenes f**, bei dem der Querbalken versetzt ist. Bei 48 Pixeln
  nicht mehr als „f" zu lesen, sondern als Blitz.
- **Ein Eiskristall als Sechseck.** Beste Silhouette von allen, sagte aber
  „isometrische Kiste" statt „Eis".
- **Eine abgebrochene Scholle**, die zur Seite gerutscht ist. Bei 32 Pixeln als
  Tortendiagramm gelesen.

## Farben

| | |
|---|---|
| `#0284C7` | Das Blau der Website. Bewusst kein helleres — zwei Blautöne in einer Marke sind einer zu viel. |
| `#FFFFFF` | Der Buchstabe |

## Neue Größen erzeugen

`bauen.js` erzeugt alle PNGs aus `frostbreaker-marke.svg`. Es braucht ein lokal
laufendes Chrome mit `--remote-debugging-port=9222` und `puppeteer-core`.

## Zwei Fallen, die beim Bauen zugeschnappt sind

**Beim Bearbeiten von `bauen.js`:** das Skript streicht `width="512"` aus dem
öffnenden `<svg>`-Tag, damit das Elternelement die Größe bestimmt. Wird dabei
global gestrichen statt nur im Tag, trifft es auch Kinder-Elemente mit
denselben Maßen — die sind dann null Pixel groß und verschwinden. Am Bild kaum
zu sehen, an den Pixelwerten sofort.

**Beim Bearbeiten der SVG:** in den Kommentaren darf keine doppelte
Bindestrichfolge stehen. XML verbietet sie innerhalb eines Kommentars, und ein
als `<img>` eingebundenes SVG wird streng geparst. Genau daran ist die Datei
einmal gescheitert — als Datei ein kaputtes Bildsymbol, eingebettet in HTML
einwandfrei.
