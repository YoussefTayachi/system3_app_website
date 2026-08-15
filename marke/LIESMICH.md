# Frostbreaker — Bildmarke

Eine Scheibe Eis, die gebrochen ist. Der Name sagt es wörtlich, das Produkt
heißt Kaltakquise, und das Kernstück der App heißt Icebreaker — die Marke muss
nichts übersetzen.

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
| `frostbreaker-marke.svg` | Die Quelle. Beliebig skalierbar, für Druck und neue Größen. |
| `frostbreaker-marke-dunkel.svg` | Zweitfassung: dunkle Scheibe, heller Bruch |

Das Profilbild ist **randlos** — kein Rand, kein Abstand. YouTube, LinkedIn und
X schneiden den Kreis selbst heraus; ein eingebauter Rand würde doppelt. Die
Ecken außerhalb des Kreises sind **transparent**: bei der Kreisbeschneidung
macht das keinen Unterschied, aber wer die Datei eckig verwendet, bekommt kein
weißes Kästchen auf dunklem Grund.

`bauen.js` erzeugt alle PNGs aus der SVG. Es braucht ein lokal laufendes Chrome
mit `--remote-debugging-port=9222` und `puppeteer-core`.

## Warum blau und nicht dunkel

Beide Fassungen wurden gegeneinander gerendert, bei 150, 88, 48 und 32 Pixeln,
auf weißem, grauem und schwarzem Grund. Die blaue Scheibe hält auf allen drei
Gründen. Die dunkle ist auf Hell die schönere, löst sich auf Dunkel aber auf —
übrig bleibt ein schwebender Blitz ohne Scheibe. YouTube hat einen hellen und
einen dunklen Modus, also gewinnt die Fassung, die beides aushält.

Die dunkle liegt als Zweitfassung daneben. Nimm sie, wenn der Grund garantiert
hell ist: Druck, Präsentationen, helle Briefköpfe.

## Was geprüft und verworfen wurde

- **Ein „f" als Monogramm.** Blauer Kreis plus weißer Kleinbuchstabe f ist
  Facebook. Dazu las sich die Bruchlinie quer durch den Buchstaben als
  Durchstreichung.
- **Ein Eiskristall als Sechseck.** Ergab die beste Silhouette, sagte aber
  „isometrische Kiste" statt „Eis" — und sah aus wie hundert andere
  Technik-Logos.
- **Eine abgebrochene Scholle**, die zur Seite gerutscht ist. Bei 32 Pixeln als
  Tortendiagramm gelesen.
- **Ein dünner Riss mit korallener Füllung.** Bei 32 Pixeln verlor er seine
  Aussage und wurde zur Schnörkellinie. Koralle auf Blau ist außerdem heiß und
  unruhig; auf dieser Marke ist Koralle nicht zu Hause.

## Farben

| | |
|---|---|
| `#0284C7` | Die Scheibe. Dasselbe Blau wie die Wortmarke auf der Website — bewusst kein helleres, zwei Blautöne in einer Marke sind einer zu viel. |
| `#12212B` | Der Bruch. Eis bei Nacht, kühler als der Textton der Website (`#1c1b19`), der ins Warme geht und als Fläche braunschwarz wirken würde. |

Der Spalt läuft zu: 36 Pixel oben, 28 unten. Ein Bruch öffnet sich dort, wo er
beginnt. Bei 32 Pixeln sieht das niemand, bei 800 schon.

## Zwei Fallen, die beim Bauen zugeschnappt sind

**Beim Bearbeiten von `bauen.js`:** das Skript streicht `width="512"` aus dem
öffnenden `<svg>`-Tag, damit das Elternelement die Größe bestimmt. Wird dabei
global gestrichen statt nur im Tag, trifft es auch das `<rect>`, das den Bruch
färbt — ein Rechteck ohne Breite ist null Pixel groß und verschwindet. Der
Bruch zeigte dann den weißen Seitengrund statt seiner eigenen Farbe. Am Bild
kaum zu sehen, an den Pixelwerten sofort.

**Beim Bearbeiten der SVG:** in den Kommentaren darf keine doppelte
Bindestrichfolge stehen. XML verbietet sie innerhalb eines Kommentars, und ein
als `<img>` eingebundenes SVG wird streng geparst. Genau daran ist die Datei
einmal gescheitert — als Datei ein kaputtes Bildsymbol, eingebettet in HTML
einwandfrei.
