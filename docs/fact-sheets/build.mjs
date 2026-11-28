#!/usr/bin/env node
/**
 * Builds the IMD qualification fact sheets as one-page A4 PDFs.
 *
 *   node docs/fact-sheets/build.mjs
 *
 * Copy lives in content.mjs, layout in fact-sheet.css. Each sheet is laid out
 * as HTML and printed with headless Chrome, which also fetches the web fonts
 * (so the build needs Chrome and an internet connection). Set CHROME_PATH if
 * Chrome is not found automatically.
 *
 * To preview another discount placement without touching content.mjs:
 *
 *   node docs/fact-sheets/build.mjs --discount=header --out=some/folder
 */
import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { shared, sheets } from "./content.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const asset = (name) => pathToFileURL(join(here, "assets", name)).href;

const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, "").split("=")));
const placement = args.discount ?? shared.discountPlacement;
const outDir = args.out ? resolve(args.out) : here;
if (!["photo", "header", "footer", "none"].includes(placement)) {
  throw new Error(`Unknown discount placement "${placement}". Use photo, header, footer or none.`);
}

/** The discount callout, rendered only in the spot chosen by `placement`. */
const promo = (where) =>
  where === placement
    ? `<p class="promo promo--${where}">
        <strong class="promo__lead">${esc(shared.discountLead)}</strong>
        <span class="promo__rest">${esc(shared.discountRest)}</span>
      </p>`
    : "";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Besley:wght@400&family=Josefin+Sans:wght@700&display=block";

const esc = (text) =>
  String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

/** Keeps "NQF L4" and "(SAQA ID: 58376)" from breaking across lines. */
const tidy = (text) =>
  esc(text)
    .replace(/NQF L(\d)/g, "NQF&nbsp;L$1")
    .replace(/\(SAQA ID: (\d+)\)/g, "(SAQA&nbsp;ID:&nbsp;$1)");

const arrow = `<svg class="level__arrow" viewBox="0 0 24 24" aria-hidden="true">
  <circle cx="12" cy="12" r="12" fill="#00044b"/>
  <path d="M6.8 12h10M12.6 7.6 17 12l-4.4 4.4" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function page(sheet) {
  const facts = [
    ["Duration", sheet.duration],
    ["Entry requirements", sheet.entry],
    [shared.feesLabel, shared.fees],
    ["Accreditation", sheet.accreditation],
  ];

  const levels = sheet.levels
    .map(
      (level, i) => `
      <div class="level" style="grid-column: ${i + 1}">
        <h2 class="level__name">${esc(level.name)}</h2>
        ${i < sheet.levels.length - 1 ? arrow : ""}
      </div>
      <article class="card" style="grid-column: ${i + 1}">
        <p class="card__role">${esc(level.role)}</p>
        <div class="card__main">
          <p class="card__duration">${esc(level.duration)}</p>
          <h3 class="card__heading card__heading--caps">Subjects</h3>
          <ul class="card__list">
            ${level.subjects.map((s) => `<li>${esc(s)}</li>`).join("\n            ")}
          </ul>
        </div>
        <div class="card__accr">
          <h3 class="card__heading">Accreditation</h3>
          <p>${tidy(level.accreditation)}</p>
          <p class="card__or">or</p>
          <p>${esc(shared.iqb)}</p>
        </div>
      </article>`,
    )
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(sheet.title)} ${esc(shared.subtitle)} | IMD College of Management Development</title>
<link rel="stylesheet" href="${FONTS}">
<link rel="stylesheet" href="${pathToFileURL(join(here, "fact-sheet.css")).href}">
</head>
<body>
<main class="page">
  <div class="band-wrap">
    <header class="band">
      <img class="band__logo" src="${asset("imd-mark.png")}" alt="IMD">
      ${promo("header")}
      <p class="band__name"><span>College of Management</span><span>Development</span></p>
    </header>
  </div>

  <section class="hero">
    <div class="hero__copy">
      <h1 class="hero__title">${esc(sheet.title)}</h1>
      <p class="hero__subtitle">
        ${esc(shared.subtitle)}
        <img class="hero__scribble" src="${asset("scribble.png")}" alt="">
      </p>
      <dl class="facts">
        ${facts
          .map(([label, value]) => `<div class="facts__row"><dt>${esc(label)}:</dt><dd>${esc(value)}</dd></div>`)
          .join("\n        ")}
      </dl>
    </div>
    <div class="hero__photo">
      <div class="hero__img">
        <img src="${asset(sheet.photo)}" alt="" style="object-position: ${esc(sheet.photoPosition)}">
      </div>
      ${promo("photo")}
    </div>
  </section>

  <div class="body">
    <section class="levels levels--${sheet.levels.length}" style="--cols: ${sheet.levels.length}">
      ${levels}
    </section>

    <section class="study">
      <p class="study__lead">${esc(shared.studyLead)}</p>
      <ul class="study__list">
        ${shared.studyPoints.map((p) => `<li>${esc(p)}</li>`).join("\n        ")}
      </ul>
    </section>

    <footer class="foot">
      <img class="foot__icb" src="${asset("icb-logo.png")}" alt="ICB — International Certifications for Business">
      ${promo("footer")}
      <img class="foot__iqb" src="${asset("iqb-logo.png")}" alt="IQB — International Qualifications for Business">
    </footer>
  </div>
</main>
<script>
  // Layout self-check, read back by build.mjs through --dump-dom.
  document.fonts.ready.then(() => {
    const page = document.querySelector(".page");
    const levels = document.querySelector(".levels");
    const title = document.querySelector(".hero__title");
    const promo = document.querySelector(".promo");
    // Empty space left under the subject list of the fullest card, in mm.
    const spare = Math.min(
      ...[...document.querySelectorAll(".card__main")].map((main) => {
        const pad = parseFloat(getComputedStyle(main).paddingBottom);
        return main.getBoundingClientRect().bottom - pad - main.lastElementChild.getBoundingClientRect().bottom;
      }),
    );
    const wanted = ['700 10pt "Josefin Sans"', "400 10pt Besley", "400 10pt Barlow", "700 10pt Barlow"];
    document.documentElement.dataset.check = JSON.stringify({
      overflow: Math.max(page.scrollHeight - page.clientHeight, levels.scrollHeight - levels.clientHeight),
      spareMm: Math.round((spare / 96) * 25.4 * 10) / 10,
      titleOverflow: title.scrollWidth - title.clientWidth,
      promoOverflow: promo ? promo.scrollWidth - promo.clientWidth : 0,
      missingFonts: wanted.filter((f) => !document.fonts.check(f)),
    });
  });
</script>
</body>
</html>`;
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "google-chrome",
    "google-chrome-stable",
    "chromium",
    "chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ].filter(Boolean);
  for (const bin of candidates) {
    if (spawnSync(bin, ["--version"], { stdio: "ignore" }).status === 0) return bin;
  }
  throw new Error("Chrome not found. Install Chrome/Chromium or set CHROME_PATH.");
}

const chrome = findChrome();
const work = mkdtempSync(join(tmpdir(), "imd-fact-sheets-"));
const flags = ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--virtual-time-budget=15000"];
let problems = 0;
mkdirSync(outDir, { recursive: true });

try {
  for (const sheet of sheets) {
    const html = join(work, sheet.file.replace(/\.pdf$/, ".html"));
    const out = join(outDir, sheet.file);
    writeFileSync(html, page(sheet));
    const url = pathToFileURL(html).href;

    const dom = execFileSync(chrome, [...flags, "--dump-dom", url], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
      maxBuffer: 64 * 1024 * 1024,
    });
    const match = dom.match(/data-check="([^"]*)"/);
    const check = match ? JSON.parse(match[1].replace(/&quot;/g, '"')) : null;
    const issues = [];
    if (!check) issues.push("layout check did not run");
    else {
      if (check.overflow > 0) issues.push(`content does not fit the page (${check.overflow}px over)`);
      if (check.titleOverflow > 0) issues.push(`title is ${check.titleOverflow}px too wide`);
      if (check.promoOverflow > 0) issues.push(`discount line is ${check.promoOverflow}px too wide`);
      if (check.missingFonts.length) issues.push(`fonts not loaded: ${check.missingFonts.join(", ")}`);
    }

    execFileSync(chrome, [...flags, "--no-pdf-header-footer", `--print-to-pdf=${out}`, url], {
      stdio: "ignore",
    });

    problems += issues.length;
    const note = issues.length ? issues.join("; ") : `${check.spareMm}mm to spare in the fullest card`;
    console.log(`${issues.length ? "!" : "✓"} ${sheet.file} — ${note}`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}

if (problems) {
  console.error("\nSome sheets need attention (see above).");
  process.exit(1);
}
