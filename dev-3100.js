/* Startet den Next-Dev-Server dieses Projekts auf Port 3100.
 *
 * Existiert nur, weil der Vorschau-Server der Entwicklungsumgebung seine
 * launch.json im Arbeitsverzeichnis der Sitzung sucht -- und das ist bei
 * dieser Website ein anderes Verzeichnis. Ohne gesetztes Arbeitsverzeichnis
 * findet Tailwind v4 seine Quelldateien nicht (die automatische Erkennung
 * geht vom cwd aus, nicht vom Ort der CSS-Datei): die Seite laedt dann mit
 * globals.css, aber ganz ohne Utility-Klassen.
 *
 * Port 3100 statt 3000, weil dort ein anderes Projekt laeuft.
 */
process.chdir(__dirname);
process.argv = [process.argv[0], require.resolve("next/dist/bin/next"), "dev", "-p", "3100"];
require("next/dist/bin/next");
