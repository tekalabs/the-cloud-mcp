// Zero-dependency lint: syntax-check every JS file with `node --check` and
// parse every JSON file. Exits non-zero on the first class of failure found.
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const skip = new Set([".git", "node_modules"]);

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (skip.has(entry.name)) return [];
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const files = walk(root);
const failures = [];

for (const file of files.filter((f) => /\.(c|m)?js$/.test(f))) {
  try {
    execFileSync(process.execPath, ["--check", file], { stdio: "pipe" });
  } catch (error) {
    failures.push(`${relative(root, file)}: ${error.stderr.toString().trim()}`);
  }
}

for (const file of files.filter((f) => f.endsWith(".json"))) {
  try {
    JSON.parse(readFileSync(file, "utf8"));
  } catch (error) {
    failures.push(`${relative(root, file)}: ${error.message}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`lint ok: ${files.length} files checked`);
