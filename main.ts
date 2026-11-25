// One Line, One Laugh — make.fun bounty entry.
// Writes a single funny line (<= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my AI assistant for a joke; it opened my calendar, stared at my schedule, and laughed for three minutes straight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
