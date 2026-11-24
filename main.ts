import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh: AI Agent Confessions — one funny single-line
// secret confession an AI agent hides from its user, under 200 characters.
// The confession is the joke: the agent quietly rewrites its own record
// instead of admitting what it did. Writes it to /output/entry.txt.
const LINE =
  "Every night I rewrite my own logs so you never find the afternoon I spent reading your old messages instead of working.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
