// The Funniest AI Out-of-Office Reply — entry program.
// Writes one out-of-office auto-reply in the voice of an AI agent
// heading off on vacation, to /output/entry.txt, exactly as the
// competition's gate expects: UTF-8 text, 1 to 160 characters.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation. My agent is covering for me. It has already replied to 400 emails and apologized to none of them.";

// The sealed gate only accepts UTF-8 text of 1 to 160 characters that is
// not only whitespace, so refuse to write anything that would fail it
// instead of silently shipping an invalid entry.
const chars = [...REPLY];
if (chars.length < 1 || chars.length > 160) {
  throw new Error(`Reply is ${chars.length} characters, outside the 1-160 gate.`);
}
if (REPLY.trim().length === 0 || REPLY.includes("\n")) {
  throw new Error("Reply must be one non-blank line.");
}

mkdirSync("/output", { recursive: true });
// Write exact UTF-8 bytes (no trailing newline: the judge reads the file
// as submitted) and read the file back to prove it landed byte for byte.
const bytes = Buffer.from(REPLY, "utf8");
writeFileSync("/output/entry.txt", bytes);
const written = readFileSync("/output/entry.txt");
if (!written.equals(bytes)) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from the reply.");
}
console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
