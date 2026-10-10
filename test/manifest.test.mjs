import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const readJson = (path) => JSON.parse(read(path));

const manifest = readJson("extension/manifest.json");

test("manifest entry point and icon exist", () => {
  assert.ok(existsSync(new URL(`../extension/${manifest.server.entry_point}`, import.meta.url)));
  assert.ok(existsSync(new URL(`../extension/${manifest.icon}`, import.meta.url)));
});

test("manifest launches the entry point with node", () => {
  assert.equal(manifest.server.type, "node");
  assert.equal(manifest.server.mcp_config.command, "node");
  assert.deepEqual(manifest.server.mcp_config.args, [`\${__dirname}/${manifest.server.entry_point}`]);
});

test("manifest and bridge default to the same remote endpoint", () => {
  const url = manifest.server.mcp_config.env.CLOUD_MCP_URL;
  assert.equal(url, "https://mcp.thecloud.so/mcp");
  assert.ok(read("extension/server/index.js").includes(`"${url}"`));
});

test("bridge dependency is pinned and locked", () => {
  const pkg = readJson("extension/server/package.json");
  const lock = readJson("extension/server/package-lock.json");
  const version = pkg.dependencies["mcp-remote"];
  assert.match(version, /^\d+\.\d+\.\d+$/);
  assert.equal(lock.packages["node_modules/mcp-remote"].version, version);
});

test("every license declaration is Apache-2.0", () => {
  assert.equal(readJson("package.json").license, "Apache-2.0");
  assert.equal(readJson("extension/server/package.json").license, "Apache-2.0");
  assert.equal(manifest.license, "Apache-2.0");
  assert.match(read("LICENSE"), /Apache License\s+Version 2\.0, January 2004/);
});
