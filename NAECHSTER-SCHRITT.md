# Plan: /preise, /fuer-agenturen, Hochrechnung kürzen

Zur Freigabe. Nichts davon ist umgesetzt.

---

## 1. Skalierungs-Hochrechnung kürzen

### Was da steht

Vier Kacheln: 125.000 E-Mails, bis 125.000 Unternehmen, ≈16.700 Stunden
(„rund 100 Vollzeitstellen"), ≈780 Meetings. Dazu ein Methodik-Absatz von
rund 130 Wörtern.

### Das Problem

Seit die Seite mit **echten, nachgerechneten Zahlen** arbeitet (≈ 4 $ pro 100
Firmen, 168 Antworten im Dashboard), stehen diese Hochrechnungen unmittelbar
daneben und wirken dadurch beliebig. „100 Vollzeitstellen" ist die Sorte Zahl,
bei der ein Agenturinhaber aufhört zu glauben — und dann glaubt er den echten
Zahlen darüber auch nicht mehr.

Der Methodik-Absatz gibt selbst zu, wie viele Annahmen darin stecken:
5 % Antwortquote, davon ein Viertel positiv, davon die Hälfte ein Termin.
Drei multiplizierte Schätzungen.

### Vorschlag

Sektion **ersetzen** durch einen kurzen, ehrlichen Block:

- Eine Aussage statt vier Kacheln: dass das Finden praktisch unbegrenzt ist
  und der **Versand der Engpass** — das ist wahr, nachvollziehbar und für
  Agenturen die relevante Information.
- Die drei Starter-Kacheln (133 Std., 6.000 €, 204 € Gesamtkosten) bleiben,
  weil sie auf realistischer Größenordnung rechnen und zum Rechner passen.
- Der Methodik-Absatz wandert gekürzt in eine FAQ-Zeile.

**Alternative,** falls du die großen Zahlen behalten willst: sie auf die
Agenturseite verschieben. Dort ist das Publikum, für das die Größenordnung
überhaupt Sinn ergibt, und sie stehen nicht mehr neben den echten Zahlen.

---

## 2. `/preise`

### Warum eine eigene Seite

„Preise" ist der meistgeklickte Navigationspunkt bei einem SaaS. Aktuell ist
es ein Anker mitten in einer 12.000px-Seite — wer über die Navigation kommt,
landet zwischen zwei anderen Themen.

### Inhalt

1. **Zwei Pläne** wie bisher, aber mit klarem Weg: Starter startet die
   Testphase direkt, Agentur führt ins Gespräch.
2. **Was beide Pläne kosten, ehrlich aufgeschlüsselt** — der Plan *plus* die
   Abfragekosten. Mit dem `≈ 4 $ pro 100 Firmen` als zweitem Posten, damit
   niemand von einer Rechnung überrascht wird.
3. **Rechner** von der Startseite hierher spiegeln (bleibt dort auch stehen,
   er ist dort der stärkste Conversion-Baustein).
4. **Vergleichstabelle** von der Startseite hierher verschieben — sie gehört
   zur Kaufentscheidung, nicht in den Erzählfluss.
5. **Preis-FAQ**: Kündigung, Kreditkarte, Datenlöschung, Planwechsel,
   Lead-Obergrenze beim Starter.

### Was auf der Startseite bleibt

Ein kompakter Preis-Anriss mit beiden Zahlen und Link auf `/preise`. Der Anker
`#preise` bleibt funktionsfähig.

---

## 3. `/fuer-agenturen`

### Warum eine eigene Seite

Das ist deine wertvollere Zielgruppe (199 € statt 99 €, mehrere Workspaces,
längere Bindung), bekommt aktuell aber eine Sektion von 987px unter zwanzig
anderen. Eine Agentur, die über eine Anzeige oder Empfehlung kommt, braucht
eine Seite, die von der ersten Zeile an von ihr handelt.

### Inhalt

1. **Eigener Hero** mit Agentur-Argument statt Produkt-Argument:
   ein Login, ein Workspace pro Kunde, kein neues Abo pro Kunde.
2. **Workspaces** mit dem bestehenden `AgencyMockup`.
3. **Whitelabel-Report** — der teilbare Link ohne Login für den Endkunden.
   Dafür würde ich ein neues Mockup bauen, das die Endkunden-Ansicht zeigt:
   das ist das Argument, das eine Agentur überzeugt, und es fehlt visuell.
4. **Rechnung pro Kunde**: was ein Kunde die Agentur kostet und was sie ihm
   berechnen kann. Vorsichtig formuliert, ohne Margenversprechen.
5. **Was Multi-Kunden-Verwaltung sonst kostet** — bei reinen Versand-Tools
   meist ein separat bepreistes Zusatzmodul. Ohne Anbieternamen und ohne
   erfundene Preise.
6. **CTA: Gespräch buchen**, nicht Selbstanmeldung — passend zum Plan.

### Was auf der Startseite bleibt

Die Sektion wird auf drei Sätze plus Link gekürzt. Der Anker `#agenturen`
bleibt funktionsfähig.

---

## 4. Nebeneffekt: Startseite wird kürzer

Aktuell 24 Sektionen. Nach der Verschiebung von Vergleichstabelle,
Skalierung und dem Kürzen von Preisen und Agenturen bleiben rund 18 — mit
klarerem Erzählfluss: Problem → Kosten → zwei Suchwege → Ablauf → Beweis →
Vertrauen → Abschluss.

---

## Reihenfolge

1. Hochrechnung kürzen (klein, entfernt sofort einen Glaubwürdigkeitsverlust)
2. `/preise` (höchster Verkaufswert)
3. `/fuer-agenturen` inklusive neuem Report-Mockup
4. Startseite straffen, Navigation und Anker prüfen
5. Visuelle Kontrolle aller vier Seiten, dann Deployment

---

## Offene Frage

**Die Skalierungszahlen:** kürzen wie oben vorgeschlagen, oder auf die
Agenturseite verschieben und dort behalten?
