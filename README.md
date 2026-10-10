# OpenCore

OpenCore -- A Responsible & Responsive Business FrameWork

This public repository is the MCP layer for The Cloud: the Claude Desktop bridge, verb catalog documentation, `server.json`, the SDK, document contracts, skills, and the [fix request door](https://github.com/tekalabs/the-cloud-mcp/issues/new). The Convex backend, memory, lanes, hosting, the Gates rail, and the shops stay private.

The current [Claude Desktop extension](extension/) is a thin, self-contained stdio bridge to `https://mcp.thecloud.so/mcp`. It uses [mcp-remote](https://github.com/geelen/mcp-remote) for HTTP transport and browser OAuth, holds no credentials, and stores no data. Sign-in stays in the browser, and data flows between Claude Desktop and The Cloud over HTTPS. It supports macOS, Windows, and Linux with Node.js 18 or later.

## Install

Claude Code: `claude mcp add --transport http the-cloud https://mcp.thecloud.so/mcp`

Cursor: add `"the-cloud":{"url":"https://mcp.thecloud.so/mcp"}` under `mcpServers` in `~/.cursor/mcp.json`.

Codex: `codex mcp add the-cloud --url https://mcp.thecloud.so/mcp`

For Claude Desktop, download `the-cloud.mcpb` from [Releases](https://github.com/tekalabs/the-cloud-mcp/releases), open it or drag it into Settings > Extensions, then use a Cloud tool and sign in through the browser. See the [connection guide](https://www.thecloud.so/connect) and [machine-readable catalog](https://www.thecloud.so/llms.txt).

## Responsible

- Auditable verbs, contracts, skills, and ledger shapes.
- Consent before outward or destructive actions.
- Visible cost ledgers and a spend guard.
- DCO sign-off from contributors.
- Fork pull requests run only on GitHub-hosted runners and never reach private compute.
- Users own their data, domains, and transactions.

## Responsive

- A fix request becomes a pull request through the [open door](https://github.com/tekalabs/the-cloud-mcp/issues/new).
- Every filing becomes a rule, a verb, or a gate.
- A client's AI sends an improvement as a signed pull request through the gates.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request. Every commit must carry a [DCO](https://developercertificate.org/) sign-off.

## Security

Read [SECURITY.md](SECURITY.md) to report a vulnerability privately.

## Privacy

The extension collects nothing. The [Privacy Policy](https://www.thecloud.so/legal/privacy) covers data collection, use, storage, sharing, retention, and contact information. The [Terms](https://www.thecloud.so/legal/terms) also apply. Access can be revoked from Cloud account settings.

## Support

Use the [setup and usage guide](https://www.thecloud.so/connect), [open an issue](https://github.com/tekalabs/the-cloud-mcp/issues/new), or visit [thecloud.so](https://www.thecloud.so).

## License

Licensed under [Apache-2.0](LICENSE). Copyright 2026 Teka Labs.
