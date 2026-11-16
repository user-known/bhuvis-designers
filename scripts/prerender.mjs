// Runs after `vite build` and the SSR build: writes each page's markup into
// its HTML file so content appears before JavaScript loads, then hydrates.
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const root = resolve(fileURLToPath(import.meta.url), "../..");
const dist = resolve(root, "dist");
const ssrDir = resolve(root, "dist-ssr");
const { render, files } = await import(resolve(ssrDir, "entry-server.js"));

const assets = await readdir(resolve(dist, "assets"));
const font = assets.find((name) => name.startsWith("mangelic-"));
const preload = font
  ? `<link rel="preload" href="/bhuvis-designers/assets/${font}" as="font" type="font/otf" crossorigin />\n  </head>`
  : "</head>";

for (const file of files) {
  const path = resolve(dist, file);
  const html = await readFile(path, "utf8");
  if (!html.includes('<div id="root"></div>')) throw new Error(`No empty root in ${file}`);
  const output = html
    .replace('<div id="root"></div>', `<div id="root">${render(file)}</div>`)
    .replace("</head>", preload);
  await writeFile(path, output);
  console.log(`prerendered ${file}`);
}

await rm(ssrDir, { recursive: true, force: true });
