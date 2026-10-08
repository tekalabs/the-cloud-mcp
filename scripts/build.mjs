// Build check for the desktop extension bundle: every file the manifest
// points at exists, and the bridge's runtime dependency resolves from the
// server directory exactly as server/index.js resolves it. Run after
// `npm run install:server`.
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const extensionDir = new URL("../extension/", import.meta.url).pathname;
const manifest = JSON.parse(readFileSync(join(extensionDir, "manifest.json"), "utf8"));

const required = [manifest.server.entry_point, manifest.icon, "server/package-lock.json"];
const missing = required.filter((file) => !existsSync(join(extensionDir, file)));
if (missing.length > 0) {
  console.error(`missing bundle files: ${missing.join(", ")}`);
  process.exit(1);
}

const serverRequire = createRequire(join(extensionDir, manifest.server.entry_point));
try {
  serverRequire.resolve("mcp-remote/dist/proxy.js");
} catch {
  console.error("mcp-remote/dist/proxy.js does not resolve; run `npm run install:server` first");
  process.exit(1);
}

console.log(`build ok: ${manifest.name} ${manifest.version} bundle is complete`);
