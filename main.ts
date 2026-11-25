// job-title-552d7922: "Weirdest Job Title: Blind Judge Showdown".
// This program writes one job title (60 characters at most, nothing else)
// to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The title: a real job (professional mourners exist) with one gloriously
// specific twist — the clients are strangers, and the deceased are goldfish.
// Short enough to read at a glance, specific enough to picture the person
// doing it: black suit, tiny coffin, a eulogy for a fish named Bubbles.
const TITLE = "Professional Mourner for Strangers' Goldfish";

if (TITLE.length < 1 || TITLE.length > 60 || TITLE.includes('\n')) {
  console.error('entry title is not 1-60 characters on one line');
  process.exit(1);
}

// No trailing newline: the file is exactly the one title, nothing else.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TITLE);
console.log(`wrote ${TITLE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
