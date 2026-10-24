/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Image Optimization Script: Generates high-quality WebP files alongside original PNGs
 * Safeguard 8: Does NOT delete original images.
 */

import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const imagesDir = path.resolve(rootDir, "public/images");

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function findCwebp() {
  const possiblePaths = [
    "/opt/homebrew/bin/cwebp",
    "/usr/local/bin/cwebp",
    "/usr/bin/cwebp",
    "cwebp"
  ];
  for (const p of possiblePaths) {
    try {
      execFileSync(p, ["-version"], { stdio: "ignore" });
      return p;
    } catch {
      // Continue searching
    }
  }
  return null;
}

function optimize() {
  console.log("🎨 Starting image optimization (PNG -> WebP conversion)...");

  const cwebpPath = findCwebp();
  if (!cwebpPath) {
    console.warn("⚠️  cwebp binary not found. Skipping WebP conversion. Original images are preserved.");
    return;
  }

  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter((f) => f.endsWith(".png") || f.endsWith(".jpg"));

  let totalOriginal = 0;
  let totalOptimized = 0;
  const results = [];

  for (const file of imageFiles) {
    const inputPath = path.resolve(imagesDir, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const outputPath = path.resolve(imagesDir, `${baseName}.webp`);

    const originalSize = fs.statSync(inputPath).size;
    totalOriginal += originalSize;

    try {
      // Quality 82 provides high visual fidelity with >80% size savings
      execFileSync(cwebpPath, ["-q", "82", inputPath, "-o", outputPath], {
        stdio: "ignore"
      });

      const optimizedSize = fs.statSync(outputPath).size;
      totalOptimized += optimizedSize;
      const savings = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(1);

      results.push({
        file,
        original: formatBytes(originalSize),
        optimized: formatBytes(optimizedSize),
        savings: `${savings}%`
      });
    } catch (err) {
      console.warn(`  ⚠️ Failed to optimize ${file}:`, err.message);
      totalOptimized += originalSize;
    }
  }

  console.log("\n📊 Image Optimization Results (Originals Preserved):");
  console.table(results);

  const totalSaved = totalOriginal - totalOptimized;
  const totalPercent = (((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1);
  console.log(`\n🎉 Total Original Size:  ${formatBytes(totalOriginal)}`);
  console.log(`🎉 Total WebP Size:      ${formatBytes(totalOptimized)}`);
  console.log(`🎉 Total Bandwidth Saved: ${formatBytes(totalSaved)} (${totalPercent}% reduction)\n`);
}

optimize();
