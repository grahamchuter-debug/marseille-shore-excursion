#!/usr/bin/env node
/**
 * Download Marseille / Provence images from Wikimedia Commons (CC-licensed).
 * Skips files that already exist unless --force is passed.
 */
import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const SOURCE = join(import.meta.dirname, "..", "image-sources");
const UA =
  "MarseilleShoreExcursions/1.0 (https://marseilleshoreexcursion.com; image setup)";
const FORCE = process.argv.includes("--force");

const IMAGE_FILES = {
  "hero-home.jpg": [
    "File:Marseille Vieux Port.jpg",
    "File:Vieux Port Marseille.jpg",
  ],
  "og-default.jpg": [
    "File:Notre-Dame de la Garde, Marseille.jpg",
  ],
  "cruise-port.jpg": [
    "File:Cruise boat in Marseille sea port.jpg",
    "File:20211113.Ports of Marseille.-019.jpg",
    "File:Front view of MSC World Europa in the Grand port maritime de Marseille, Marseille, 2024 January.jpg",
  ],
  "vieux-port.jpg": [
    "File:Marseille Vieux Port.jpg",
  ],
  "notre-dame.jpg": [
    "File:Notre-Dame de la Garde, Marseille.jpg",
  ],
  "le-panier.jpg": [
    "File:Marseille Le Panier.jpg",
    "File:Narrow street Le Panier Marseille 2026.JPG",
    "File:Street in Marseille - Panier.jpg",
  ],
  "mucem.jpg": [
    "File:Marseille - MuCEM Fort Saint-Jean (16225557268).jpg",
    "File:Fort Saint-Jean (Marseille).jpg",
    "File:Marseille, fort Saint-Jean et alentour, panoramique.jpg",
  ],
  "corniche.jpg": [
    "File:Corniche du président John Fitzgérald Kennedy.jpg",
    "File:Corniche du Président-John-Fitzgerald-Kennedy @ Baie de Marseille.jpg",
    "File:Marseille Corniche Président John Kennedy, plage.jpg",
  ],
  "calanques.jpg": [
    "File:Calanque d'En-Vau.jpg",
    "File:Calanques de Marseille.jpg",
  ],
  "aix.jpg": [
    "File:Fontaine de la Rotonde - Aix-en-Provence.JPG",
    "File:Cours Mirabeau, Aix-en-Provence, France.jpg",
    "File:Aix-en-Provence.jpg",
  ],
  "cassis.jpg": [
    "File:Cassis harbour.jpg",
    "File:Port de Cassis, Bouches-du-Rhône, France 10-2021.jpg",
    "File:Port de Cassis, Bouches-du-Rhône, Provence, France.jpg",
  ],
  "luberon.jpg": [
    "File:Gordes view 1.jpg",
    "File:Gordes pano.jpg",
    "File:Provence, Gordes (PRO 02.45 0957).jpg",
  ],
  "avignon.jpg": [
    "File:Palais des Papes Avignon.jpg",
  ],
  "food.jpg": [
    "File:Bouillabaisse.jpg",
    "File:Marché poisson Marseille 022.jpg",
  ],
  "walking.jpg": [
    "File:Narrow street Le Panier Marseille 2026.JPG",
    "File:Street in Marseille - Panier.jpg",
    "File:Marseille Le Panier.jpg",
  ],
  "markets.jpg": [
    "File:Place du Marché des Capucins, Marseille 7.jpg",
    "File:Marché poisson Marseille 022.jpg",
    "File:Place du Marché des Capucins, Marseille 4.jpg",
  ],
  "beaches.jpg": [
    "File:Mistral gagnant Plages du Prado, Marseille.jpg",
    "File:Plage de Bonneveine at dusk, Marseille, 2015.jpg",
    "File:Beach in Marseille.JPG",
  ],
  "lavender.jpg": [
    "File:Lavender fields of Valensole, 2019.jpg",
    "File:Plateau de Valensole.jpg",
    "File:Lavender stripes somewhere between Valensole and Moustiers-Sainte-Marie - Provence, France - 30 June 2014.jpg",
  ],
  "provence.jpg": [
    "File:Gordes view 1.jpg",
    "File:Roussillon - Sentier des Ocres 22.jpg",
    "File:Gordes Provence Frankreich.jpg",
  ],
  "compare.jpg": [
    "File:Marseille Vieux Port.jpg",
    "File:Cassis harbour.jpg",
    "File:Fontaine de la Rotonde - Aix-en-Provence.JPG",
  ],
  "private.jpg": [
    "File:Cours Mirabeau, Aix-en-Provence, France.jpg",
    "File:Port de Cassis, Bouches-du-Rhône, France 10-2021.jpg",
    "File:Cassis harbour.jpg",
  ],
  "family.jpg": [
    "File:Marseille Vieux Port.jpg",
    "File:Marseille - MuCEM Fort Saint-Jean (16225557268).jpg",
  ],
  "wine.jpg": [
    "File:2005-09-17 Provence Luberon vineyard.jpg",
    "File:Old vines in the La Crau vineyard in Châteauneuf-du-Pape.jpg",
    "File:139 Châteauneuf-du-Pape vineyard.jpg",
    "File:Cotes de Provence between Cuers and Pierrefeu-du-Var.jpg",
  ],
};

async function commonsThumbUrl(title, width = 2400) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", title);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url");
  api.searchParams.set("iiurlwidth", String(width));
  api.searchParams.set("format", "json");
  api.searchParams.set("origin", "*");

  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`API ${res.status} for ${title}`);
  const data = await res.json();
  const page = Object.values(data.query?.pages || {})[0];
  const info = page?.imageinfo?.[0];
  return info?.thumburl || info?.url || null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Download ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

async function resolveAndSave(filename, candidates) {
  const outPath = join(OUT, filename);
  if (!FORCE && existsSync(outPath)) {
    console.log(`· skip ${filename} (exists)`);
    return true;
  }
  for (const title of candidates) {
    try {
      const url = await commonsThumbUrl(title);
      if (!url) {
        console.warn(`  no url: ${title}`);
        continue;
      }
      const srcPath = join(SOURCE, filename);
      const bytes = await download(url, outPath);
      copyFileSync(outPath, srcPath);
      console.log(`✓ ${filename} ← ${title} (${Math.round(bytes / 1024)}KB)`);
      return true;
    } catch (err) {
      console.warn(`  fail ${title}: ${err.message}`);
    }
  }
  console.error(`✗ FAILED ${filename}`);
  return false;
}

mkdirSync(OUT, { recursive: true });
mkdirSync(SOURCE, { recursive: true });

let ok = 0;
for (const [file, candidates] of Object.entries(IMAGE_FILES)) {
  if (await resolveAndSave(file, candidates)) ok++;
}
console.log(`\nDownloaded/kept ${ok}/${Object.keys(IMAGE_FILES).length} images`);
if (ok < Object.keys(IMAGE_FILES).length) process.exit(1);
