// Rendert das Markenset aus frostbreaker-marke.svg. Chrome ist der Rasterisierer -- eine
// eigene Bibliothek waere fuer sieben Dateien uebertrieben, und Chrome kann
// gleichzeitig die Wortmarke in der echten Space Grotesk setzen.
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const HIER = __dirname.replace(/\\/g, "/");
const SCHRIFT =
  "file:///c:/Users/Youssef Tayachi/Desktop/Frostbreaker_Website/node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2";

const AUS = path.join(__dirname, "aus");
fs.mkdirSync(AUS, { recursive: true });

// Der Kopf jeder Seite: Schrift laden, Raender auf null.
const kopf = `<meta charset="utf-8"><style>
@font-face{font-family:SG;src:url("${SCHRIFT}") format("woff2-variations");font-weight:100 900}
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:transparent}
</style>`;

/** Eine Seite genau in Zielgroesse rendern und als PNG sichern. */
async function schuss(p, html, breite, hoehe, datei, transparent = true) {
  await p.setViewport({ width: breite, height: hoehe, deviceScaleFactor: 1 });
  await p.setContent(kopf + html, { waitUntil: "load" });
  await p.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 250));
  await p.screenshot({
    path: path.join(AUS, datei),
    omitBackground: transparent,
  });
  console.log(datei.padEnd(38), breite + "x" + hoehe);
}

(async () => {
  const b = await puppeteer.connect({ browserURL: "http://127.0.0.1:9222", defaultViewport: null });
  const p = (await b.pages())[0];
  await p.bringToFront();

  // Die Marke wird EINGEBETTET, nicht verlinkt. setContent gibt der Seite
  // keine Basis-URL, und ein Windows-Pfad ohne file:///-Praefix gilt dann als
  // relativer Verweis -- der erste Versuch lieferte sieben Dateien mit einem
  // kaputten Bildsymbol darin. Breite und Hoehe fliegen raus, damit das
  // Elternelement die Groesse bestimmt.
  // NUR das oeffnende svg-Tag anfassen. Ein globales Streichen von width="512"
  // traf auch das <rect>, das den Bruch faerbt: ohne Breite und Hoehe ist ein
  // Rechteck null Pixel gross und verschwindet. Der Bruch zeigte dann den
  // weissen Seitengrund statt seiner eigenen Farbe -- am Bild kaum zu sehen,
  // an den Pixelwerten sofort (#ffffff statt #12212B).
  const markeAlsBild = fs
    .readFileSync(path.join(__dirname, "frostbreaker-marke.svg"), "utf8")
    .replace(/<svg\b[^>]*>/, (tag) =>
      tag
        .replace(/\s(width|height)="512"/g, "")
        .replace("<svg ", '<svg style="display:block;width:100%;height:100%" ')
    );

  // ── 1 · Profilbild, quadratisch. YouTube, LinkedIn und X beschneiden selbst
  //        zum Kreis; hochgeladen wird ein Quadrat.
  for (const s of [800, 512, 400, 98]) {
    await schuss(p, `<div style="width:${s}px;height:${s}px">${markeAlsBild}</div>`, s, s,
      `frostbreaker-profilbild-${s}.png`);
  }

  // ── 2 · Wortmarke waagerecht. Fuer Kopfzeilen, Banner, Sponsorentafeln.
  //        Die Wortmarke steht klein geschrieben wie auf der Website.
  const lockup = (farbe, grund) => `
    <div style="display:flex;align-items:center;gap:34px;padding:0 8px;height:160px;background:${grund}">
      <div style="width:160px;height:160px;flex:none">${markeAlsBild}</div>
      <span style="font-family:SG;font-weight:700;font-size:104px;letter-spacing:-0.03em;color:${farbe};line-height:1">frostbreaker</span>
    </div>`;
  await schuss(p, lockup("#12212B", "transparent"), 900, 160, "frostbreaker-wortmarke-dunkel.png");
  await schuss(p, lockup("#FBFBFA", "transparent"), 900, 160, "frostbreaker-wortmarke-hell.png");

  // ── 3 · YouTube-Kanalbanner, 2048x1152. Nur die mittleren 1235x338 sind auf
  //        JEDEM Geraet zu sehen -- alles Wichtige gehoert dort hinein.
  const banner = `
    <div style="width:2048px;height:1152px;background:#0F1B24;display:flex;align-items:center;justify-content:center">
      <div style="width:1235px;height:338px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px">
        <div style="display:flex;align-items:center;gap:30px">
          <div style="width:150px;height:150px;flex:none">${markeAlsBild}</div>
          <span style="font-family:SG;font-weight:700;font-size:108px;letter-spacing:-0.03em;color:#FBFBFA;line-height:1">frostbreaker</span>
        </div>
        <!-- Die Zeile steht so auf der Startseite. Bewusst keine neu
             erfundene Schlagzeile fuers Banner: zwei verschiedene
             Versprechen an zwei Orten sind ein Widerspruch, den niemand
             pflegt. Wer sie aendert, aendert sie auf der Website zuerst. -->
        <span style="font-family:SG;font-weight:400;font-size:36px;letter-spacing:-0.01em;color:#93A7B4;line-height:1.3;text-align:center;white-space:nowrap">
          Entscheider finden. Auf jedem Kanal erreichen. Zu Kunden machen.
        </span>
      </div>
    </div>`;
  await schuss(p, banner, 2048, 1152, "frostbreaker-youtube-banner.png", false);

  await b.disconnect();
  console.log("\nfertig in " + AUS);
})().catch((e) => {
  console.error("FEHLER:", e.message);
  process.exit(1);
});
