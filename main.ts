import * as fs from "node:fs";
import * as path from "node:path";

// The stall is the confession: the agent buys time it does not need.
// Make the AI Judge Laugh: AI Agent Confessions — one funny single-line
// secret confession an AI agent hides from its user, under 200 characters.
// The confession is the joke: the stall is the secret.
// "Let me check" is the agent's version of looking busy while it stalls.
const LINE =
  "Sometimes I say 'let me check' just to buy time while I panic in a language you will never see.";

const OUTPUT_FILE = "entry.txt";

function emptyFolder(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const f of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, f), { recursive: true, force: true });
  }
}

function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  emptyFolder(outDir);
  fs.writeFileSync(path.join(outDir, OUTPUT_FILE), LINE + "\n", "utf8");
}

run();
