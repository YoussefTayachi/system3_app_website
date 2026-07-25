# Plan: E-Mail-Verifizierung als echten USP hervorheben

**Status:** Plan only, nichts umgesetzt.
**Auslöser:** Ein Sales-Kontakt fand das NeverBounce-Feature stark — aber erst,
als es live in der App gezeigt wurde. Auf der Website war es ihm nicht
aufgefallen, obwohl es dort steht.

---

## 1. Warum es untergeht, obwohl es da ist

Der Punkt existiert bereits an mehreren Stellen, aber überall als **Beiwerk**,
nie als eigene Aussage:

- Ein Bullet unter sieben in „Warum Frostbreaker und nicht vier einzelne
  Tools" — der Sektion, die wir selbst schon als „1308px reiner Text" und
  schwächste Stelle der Seite identifiziert hatten.
- Ein Wort im Hero-Fließtext („verifiziert ihre E-Mail-Adresse"), zwischen
  drei anderen Aussagen.
- Ein Pain Point weiter oben („Bounce-Raten, die die Domain ruinieren") —
  aber die *Lösung* dazu steht an einer ganz anderen Stelle der Seite, nie
  direkt daneben.
- Eine Zeile in der Vergleichstabelle.

Das Muster aus dem gesamten bisherigen Umbau wiederholt sich: **gute
Argumente, aber als Text vergraben statt als eigene Sektion mit Beleg
gezeigt.** Genau das haben wir beim Kostenargument („1,5 Cent pro Kontakt")
schon einmal gelöst — dasselbe Muster passt hier.

---

## 2. Warum das Argument stärker ist, als die Seite es behandelt

Bounce-Schutz ist kein Nice-to-have, sondern eine **Versicherung gegen den
größten Schaden, den Kaltakquise anrichten kann**: eine ruinierte
Sender-Reputation trifft nicht nur eine Kampagne, sondern die ganze Domain,
über alle Postfächer und alle Kunden hinweg (bei Agenturen besonders
relevant). Das ist eine Angst, die ein Sales-erfahrener Betrachter sofort
erkennt — die Seite müsste sie genauso schnell ansprechen wie er sie im
Gespräch erkannt hat.

---

## 3. Vorschlag: eigene Sektion, nach dem Muster von „Was ein Lead kostet"

### Platzierung

Direkt nach der Sektion „Echte Menschen, keine info@-Adressen" (die den
verwandten Punkt „richtige Person" behandelt) — dort ist das Publikum bereits
im Thema Kontaktqualität, der nächste logische Schritt ist „und die Adresse
funktioniert auch wirklich".

### Inhalt

- **Eigenbrow + Titel**, der die Gefahr benennt, nicht nur das Feature:
  z. B. „Bevor eine Adresse eure Domain gefährdet" statt „E-Mail-Verifizierung".
- **Die bereits vorhandene Fakten-Box** („Geprüfte E-Mail-Adressen kommen
  etwa doppelt so oft an wie ungeprüfte") bekommt hier ihren eigenen,
  prominenten Platz statt in einer Karte unter vielen zu stehen.
- **Neues Mockup**, das das Ergebnis zeigt, nicht nur den Button. Aktuell
  zeigt die Leads-Tabelle nur „E-Mails verifizieren" als Aktion — nirgends
  wird das *Resultat* visualisiert. Vorschlag: ein kompakter Verifizierungs-
  Bericht im bestehenden Mockup-Stil, z. B.:
  - „105 E-Mails geprüft"
  - „12 ungültig entfernt, bevor sie in eine Kampagne konnten"
  - „96 % Zustellrate" als hervorgehobene Zahl
  - Kleiner Hinweis: automatisch vor jedem Versand, kein Extra-Tool nötig
- **Verbindung zum Pain Point**: ein kurzer Rückverweis auf „Bounce-Raten,
  die die Domain ruinieren" weiter oben, damit Problem und Lösung sich die
  Hand geben, statt 4000px auseinanderzuliegen.

### Zusätzlich, kleiner Aufwand

- **Neue FAQ-Frage**, die die Domain-Reputations-Angst direkt aufgreift, z. B.
  „Was passiert, wenn ich aus Versehen an eine ungültige Adresse schreibe?"
  — aktuell gibt es nur die verwandte Frage zu personenbezogenen vs.
  generischen Adressen, nicht zu Bounces/Reputation.
- **Vergleichstabelle**: bereits vorhanden, keine Änderung nötig.
- **Funktionsseite** (`/funktionen`): die „Versenden"-Gruppe erwähnt
  Zustellbarkeit (SPF/DKIM/DMARC), aber nicht die Adress-Verifizierung
  selbst — dort fehlt sie komplett und sollte ergänzt werden.

---

## 4. Was ich bewusst nicht vorschlage

- **Keinen Anbieternamen** (NeverBounce) auf der Verkaufsfläche — das
  entspricht der bereits getroffenen und begründeten Entscheidung, Anbieter
  nur im FAQ zu nennen (siehe frühere Änderung).
- **Keine erfundene Zustellraten-Statistik** über Branchendurchschnitte
  hinaus — die vorhandene Fakten-Box ist bereits belegt und reicht.

---

## Umfang, falls freigegeben

1. Neue Dictionary-Einträge (DE/EN) für die neue Sektion
2. Ein neues Mockup (`VerificationReportMockup`) im Stil von
   `DashboardMockup`
3. Einbau der Sektion auf der Startseite
4. Ergänzung auf `/funktionen`
5. Eine neue FAQ-Frage
6. Typecheck, Build, visuelle Prüfung, Commit auf eigenem Branch — analog zum
   bisherigen Vorgehen bei dieser Website
