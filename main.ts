// One Word From Grandma — exactly one word: the word grandma would text about AI.
import { writeFileSync, mkdirSync } from "node:fs";
const line = "Skynet";
console.log(line);
// Also leave the word in the output dir, so the entry is readable either way.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line + "\n");
