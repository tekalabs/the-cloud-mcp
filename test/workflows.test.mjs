// Guards the CI policy for this public repository: GitHub-hosted runners
// only, read-only token, no secrets, and no pull_request_target.
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { test } from "node:test";

const dir = new URL("../.github/workflows/", import.meta.url);
const workflows = readdirSync(dir)
  .filter((name) => /\.ya?ml$/.test(name))
  .map((name) => ({ name, text: readFileSync(new URL(name, dir), "utf8") }));

test("ci and dco workflows exist", () => {
  const names = workflows.map((w) => w.name);
  assert.ok(names.includes("ci.yml"));
  assert.ok(names.includes("dco.yml"));
});

for (const { name, text } of workflows) {
  test(`${name} follows the public CI policy`, () => {
    assert.doesNotMatch(text, /pull_request_target/);
    assert.doesNotMatch(text, /self-hosted/);
    assert.doesNotMatch(text, /secrets\./);
    const runners = [...text.matchAll(/runs-on:\s*(.+)/g)].map((m) => m[1].trim());
    assert.ok(runners.length > 0);
    for (const runner of runners) assert.equal(runner, "ubuntu-latest");
    assert.match(text, /^permissions:\n {2}contents: read\n(?! )/m);
  });
}
