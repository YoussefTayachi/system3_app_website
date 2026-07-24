# Von der App zur Website — Verkaufsplan

**Grundlage:** Code-Analyse von `System3_App` (Pipelines, Plans, Billing) und Durchgang
durch die laufende App am 2026-07-24. Kein Suchlauf ausgelöst — das hätte echte
API-Kosten verursacht.

---

## 0. Der Widerspruch, der alles andere überlagert

Du willst, dass Besucher **direkt das 14-Tage-Abo starten und bezahlen**.

Die Website kann das aktuell nicht. Jeder einzelne CTA — Hero, Rechner, beide
Preiskarten, Schluss-CTA, Sticky-Leiste auf Mobil — führt auf **Calendly**.
In `_ui.tsx` steht das ausdrücklich so kommentiert: Selfserve wurde bewusst
entfernt, Accounts werden nach einem Gespräch manuell freigeschaltet.

Gleichzeitig hat die App alles, was für Selfserve nötig ist:
`/signup`, `/pricing` mit Stripe-Checkout, ein echtes Trial-System
(`status: "trialing"`, `trial_ends_at`, `trialDaysLeft`).

**Und der Knopf lügt:** Er heißt „Kostenlos testen“ und öffnet einen
Terminkalender. Wer testen will und einen Kalender sieht, springt ab. Das ist
kein Designproblem, das ist der teuerste Fehler auf der Seite.

### Entscheidung, die du treffen musst

| Weg | Bedeutung |
|---|---|
| **A — Selfserve** | „Kostenlos testen“ → `/signup`. Call-Buchung bleibt als zweiter, schwächerer Weg. Passt zu deinem Ziel, braucht aber automatische Freischaltung. |
| **B — Sales-geführt** | Alles bleibt auf Calendly, aber der Knopf heißt ehrlich „Gespräch buchen“. Weniger Anmeldungen, dafür qualifizierter. |
| **C — Zweigleisig** | Starter → Selfserve, Agentur → Gespräch. Üblichster Weg bei diesem Preisniveau. **Empfehlung.** |

Ohne diese Entscheidung sind alle weiteren Maßnahmen Kosmetik.

---

## 1. Was die App kann — und was davon auf der Website fehlt

| Feature in der App | Auf der Website? |
|---|---|
| Google-Maps-Suche mit Radius, Nische, Ort | ja |
| **Corporate-Suche (Hunter-Datenbank): Branche, Stadt, Land, Mitarbeiterzahl, Keywords** | **fehlt komplett** |
| **Lead-Abo: einmalig / wöchentlich / täglich** | **fehlt komplett** |
| Branchen-Playbooks (Restaurants, Handwerk, Friseure, Zahnärzte, schwache Bewertung) | nur erwähnt |
| Pain-Point-Filter (keine Website, max. Bewertung) | erwähnt |
| Telefonnummern aus dem Google-Eintrag | seit heute erwähnt |
| Nur personenbezogene Mails, info@ gefiltert | ja, gut platziert |
| Massen-Verifizierung per NeverBounce direkt in der Tabelle | fehlt |
| Spaltenkonfiguration, „Ungültige aus Export ausschließen“ | fehlt |
| KI-Agent: **bis zu 5 eigene Vorlagen** | fehlt |
| KI-Agent: Datenquelle, Prompt, Wortlimit, verbotene Wörter | ja |
| **Instantly: Mailbox-Bulk-Upload und Warmup-Steuerung** | **stark untertrieben** |
| Kampagnen anlegen, Sequenzen, starten/pausieren | ja |
| Zustellbarkeit SPF/DKIM/DMARC | ja |
| Blockliste | ja |
| Workspaces + Report-Link ohne Login | ja |
| Live-API-Kosten im Dashboard | erwähnt, nicht bewiesen |
| Command-Palette (⌘K), Dark Mode, DE/EN | fehlt |

---

## 2. Das stärkste ungenutzte Verkaufsargument: der Preis pro Lead

Auf deinem Dashboard steht gerade:

> **97 Firmen · 259 Kontakte · $3,94 API-Kosten · 87 Hunter-Credits**

Das sind **1,5 Cent pro Kontakt**. Die Website sagt dazu nur „BYOK, volle
Kostentransparenz“ — eine Eigenschaft, keine Zahl. Niemand kauft eine Eigenschaft.

Dazu kommt ein Detail aus deinem Code, das genau diese Behauptung belegt:
Im Corporate-Modus wird Hunter **bewusst übersprungen**, weil OpenAI die Adresse
ohnehin findet — mit dem Kommentar, ein zusätzlicher Hunter-Abgleich wäre
„doppelte Kosten für denselben Zweck“. Das ist gebaute Sparsamkeit, kein Slogan.

**Vorschlag:** Eine eigene Sektion „Was ein Lead wirklich kostet“, direkt nach
dem Hero. Drei Spalten: Frostbreaker (echte API-Kosten), typisches Credit-Modell,
manuelle Recherche. Mit dem echten Dashboard-Ausschnitt als Beleg daneben.

*Wichtig:* Konkurrenzpreise nur nennen, wenn du sie belegen kannst. Sonst
neutral „übliche Credit-Modelle“ formulieren — nachweisbar falsche
Wettbewerbsangaben sind in DE/AT abmahnfähig.

---

## 3. Die Positionierungslücke: lokal *und* corporate

Die Website argumentiert an einer prominenten Stelle **gegen** klassische
Datenbanken: „Findet die kleinen, lokalen Unternehmen, die in klassischen
Lead-Datenbanken kaum auftauchen.“

Die App kann aber beides — der Corporate-Modus *ist* eine klassische
Datenbanksuche nach Branche, Land und Mitarbeiterzahl. Wer B2B-Software an
Mittelständler verkauft, liest die Seite, denkt „nur für Handwerker“ und geht.

**Vorschlag:** Aus dem Entweder-oder ein Sowohl-als-auch machen. Zwei Karten
nebeneinander: „Lokal über Google Maps“ und „Corporate über Firmendatenbank“,
mit dem echten Moduswechsler aus der App als Screenshot.

---

## 4. Screenshot-Plan

Die Seite hat vier Screenshots im Ordner und nutzt einen. So würde ich sie einsetzen:

| Screen | Wo | Was er beweist |
|---|---|---|
| Dashboard | Hero (bereits umgesetzt) | Echte Zahlen, echte Kosten |
| Neue Suche mit Playbook + Moduswechsler | Workflow-Sektion | Bedienbarkeit, beide Suchmodi |
| Leads-Tabelle aufgeklappt (Person, Rolle, Mail, Telefon) | „Echte Menschen statt info@“ | Der Kernnutzen |
| KI-Agent mit Prompt und verbotenen Wörtern | Personalisierung | Kontrolle statt Blackbox |
| Instantly-Kampagne mit Sequenz | Post-Send | Es hört nicht beim Export auf |
| Zustellbarkeit SPF/DKIM/DMARC | Zustellbarkeit | Substanz |

### Datenschutz — verpflichtend vor jedem Screenshot

In der App stehen **echte Namen realer Personen** mit Rolle und Arbeitgeber
(mir sind beim Durchgang mehrere begegnet). Solche Screenshots dürfen nicht ins
Marketing: personenbezogene Daten identifizierbarer Menschen, ohne Einwilligung,
öffentlich — genau das, wogegen deine eigene Trust-Sektion argumentiert.

**Vor der Aufnahme deshalb einen Demo-Workspace mit erfundenen Firmen anlegen**
(die Namen aus deinen bestehenden Mockups: Schreinerei Huber, Zahnarztpraxis
Berger, Café Sonnenblick). Dann sind die Screenshots echt *und* unbedenklich.

Nachträgliches Verpixeln ist die schlechtere Lösung: `alle-leads.png` zeigt
genau das Problem — die geschwärzten Zeilen wirken groß dargestellt wie ein
Ladeplatzhalter, weshalb ich für den Hero das Dashboard genommen habe.

---

## 5. Vorschlag für die neue Seitenstruktur

Aktuell 22 Sektionen, die Kaufargumente verteilen sich über 12.000px. Straffer:

1. **Hero** — Anspruch, echtes Dashboard *(steht)*
2. **Was ein Lead kostet** — die 1,5-Cent-Rechnung, mit Beleg *(neu)*
3. **Rechner** *(steht, gut platziert)*
4. **Zwei Wege zum Lead** — lokal *und* corporate *(neu)*
5. **Vier Schritte** — mit echtem Suchformular *(Screenshot ergänzen)*
6. **Echte Ansprechpartner statt info@** — mit aufgeklapptem Lead *(Screenshot)*
7. **KI-Agent** — mit echtem Prompt-Screen *(Screenshot)*
8. **Es hört nicht bei der Mail auf** — Kampagnen, Warmup, Zustellbarkeit
9. **Für Agenturen** — Workspaces, Report-Link *(steht)*
10. **Preise** — mit klarem Selfserve-Weg *(siehe Punkt 0)*
11. **Vergleich** *(steht, jetzt scanbar)*
12. **Datenschutz, Gründer, FAQ, Schluss-CTA** *(steht)*

„Skalierungspotenzial“ (125.000 Mails/Monat, 780 Meetings) würde ich **kürzen**.
Die Zahlen sind hochgerechnet, nicht belegt, und stehen direkt neben deinen
echten Zahlen — das schwächt die echten.

---

## 6. Was ich nicht empfehle

- **Konkurrenzpreise als feste Zahlen** ohne belegte Quelle
- **Fake-Kundenlogos oder erfundene Testimonials** — deine „kein Testimonial,
  echte Zahl“-Sektion ist stärker als jedes erfundene Zitat
- **Telefonnummern als „verifiziert“ verkaufen** — sie kommen ungeprüft aus dem
  Google-Eintrag, geprüft werden nur E-Mail-Adressen
- **Die Skalierungs-Hochrechnung ausbauen** — je größer die unbelegte Zahl,
  desto weniger glaubt man den belegten daneben

---

## 7. Offene Fragen an dich

1. **Selfserve oder Gespräch?** (Punkt 0 — blockiert den Rest)
2. Ist die 14-Tage-Testphase **mit oder ohne Kreditkarte**? Die Website sagt
   „keine Kreditkarte nötig“ — stimmt das mit dem Stripe-Setup überein?
3. Darf ich einen **Demo-Workspace** mit erfundenen Firmen anlegen? Das kostet
   echte API-Credits (grob geschätzt unter einem Euro für ~20 Firmen).
4. Soll der **Corporate-Modus** gleichwertig beworben werden, oder ist „lokal“
   bewusst deine Nische?
