// Warning Label for Humans: One Line, Big Laugh
// Writes a single original warning label for every human being to
// /output/entry.txt. Deterministic, stdlib only, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The label: a deadpan printed warning about hindsight bias —
// the very human habit of claiming foreknowledge seconds after learning.
const LABEL =
  "WARNING: This human will insist it knew that all along, having learned it only thirty seconds ago.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// Enforce the competition gate locally: 1 to 160 characters, not only
// whitespace, single line. Refuse to write an invalid entry.
if (LABEL.length < 1 || LABEL.length > 160) {
  throw new Error(`Label is ${LABEL.length} characters; the gate allows 1-160.`);
}
if (LABEL.trim().length === 0 || LABEL.includes("\n")) {
  throw new Error("Label must be a single non-blank line.");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LABEL, "utf8");
console.log(`Wrote ${LABEL.length} characters to ${outPath}`);
