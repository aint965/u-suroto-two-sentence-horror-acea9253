// Two-Sentence Horror — make.fun entry for @aint965.
// Holds the chosen story as a constant, self-checks the gate before writing,
// writes it to /output/entry.txt, reads it back and verifies the exact bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const STORY =
  "The babysitter quit because my son talks to someone in his room at night. " +
  "I let her leave, because the voice that answers him is mine.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

function countSentences(text: string): number {
  const trimmed = text.trim();
  if (trimmed.length === 0) return 0;
  // Split after a sentence-ending mark followed by whitespace.
  return trimmed.split(/(?<=[.!?])\s+/).filter((s) => s.length > 0).length;
}

function selfCheck(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 400) {
    throw new Error(`gate failed: story is ${length} characters (must be 1-400)`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: story is only white space");
  }
  const sentences = countSentences(text);
  if (sentences !== 2) {
    throw new Error(`gate failed: story has ${sentences} sentences (must be exactly 2)`);
  }
}

selfCheck(STORY);

// Create /output with mkdirSync only; never delete the output directory.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, STORY, "utf8");

// Read the file back and verify the exact bytes.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== STORY) {
  throw new Error("verification failed: /output/entry.txt does not match the story exactly");
}

console.log(`Wrote ${[...STORY].length} characters to ${OUTPUT_FILE}:`);
console.log(STORY);
console.log("Verified: file contents match the story byte for byte.");
