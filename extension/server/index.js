#!/usr/bin/env node
// The Cloud desktop extension — a thin stdio bridge to the remote MCP server.
// mcp-remote provides the streamable-HTTP transport and the browser OAuth
// flow; this wrapper only pins the endpoint and passes stdio through, so the
// bundle stays self-contained (no npx fetch at runtime).
const { spawn } = require("node:child_process");

const remoteUrl = process.env.CLOUD_MCP_URL ?? "https://mcp.thecloud.so/mcp";
const proxyPath = require.resolve("mcp-remote/dist/proxy.js");

const child = spawn(process.execPath, [proxyPath, remoteUrl], {
  stdio: "inherit",
});
child.on("exit", (code) => process.exit(code ?? 0));
child.on("error", () => process.exit(1));
