// Office Jokes — a one-line joke about office life, written to /output/entry.txt.
// The grader runs this file with Node 22 and reads the single line it writes:
// it must be one line, 1-199 characters, and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My manager called a meeting to fix our meeting problem — attendance was mandatory.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
