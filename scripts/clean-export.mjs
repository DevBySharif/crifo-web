// Removes Next.js App Router RSC payload files (*.txt) that the static export
// writes next to each HTML page (index.txt, admin.txt, __next.*.txt, ...).
// They mirror the page's content, are not needed on a single-page static site,
// and would otherwise be publicly served and crawlable as duplicate content.
// NOTE: re-add a client-side route or enable client navigation, and this script
// must be removed (those payloads are used for app-router prefetch).
import { readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.argv[2] ?? "out";

// .txt files that are intentional public content and must be kept.
const KEEP = new Set(["robots.txt", "llms.txt", "llms-full.txt"]);

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(path);
    } else if (entry.name.endsWith(".txt") && !KEEP.has(entry.name)) {
      rmSync(path);
      console.log(`clean-export: removed ${path}`);
    }
  }
}

walk(ROOT);
