# The Cloud — Claude Desktop Extension

The Cloud (thecloud.so) is the AI-native workspace that gives every AI, from Claude and ChatGPT to Gemini and local models, shared memory and real agents.

This extension connects Claude Desktop to your Cloud workspace over MCP: read and write your Memory, work with Pages, Tables, Mail, Calendar, commerce, and 400+ tools. Every consequential action is consent-gated, and everything an AI creates is private by default.

## Install

1. Download the latest `the-cloud.mcpb` from [Releases](https://github.com/tekalabs/the-cloud-mcp/releases).
2. Double-click it (or drag it into Claude Desktop → Settings → Extensions).
3. Use any Cloud tool in a conversation — your browser opens once to sign in to The Cloud. That's it.

No account yet? [thecloud.so](https://thecloud.so) — you're in before you sign up.

## What's inside

A thin, self-contained stdio bridge (`server/index.js`) that connects Claude Desktop to The Cloud's remote MCP server at `https://mcp.thecloud.so/mcp` using [mcp-remote](https://github.com/geelen/mcp-remote) for transport and browser-based OAuth. The extension holds no credentials and stores no data; sign-in lives with your browser and The Cloud.

Connecting from anywhere else (Claude on the web, Cursor, any MCP client):

```
claude mcp add --transport http the-cloud https://mcp.thecloud.so/mcp
```

Full tool catalog and connection guide: [thecloud.so/connect](https://thecloud.so/connect) · machine-readable: [thecloud.so/llms.txt](https://www.thecloud.so/llms.txt)

## Privacy Policy

The Cloud's privacy policy covers data collection, usage and storage, third-party sharing, retention, and contact information:

- **Privacy Policy:** https://www.thecloud.so/legal/privacy
- **Terms:** https://www.thecloud.so/legal/terms

This extension itself collects nothing. All data flows directly between your Claude Desktop and The Cloud's servers over HTTPS, authenticated by the OAuth session you grant in your browser. Revoke access anytime from your Cloud account settings.

## Support

- Setup and usage guide: [thecloud.so/connect](https://thecloud.so/connect)
- Contact: [thecloud.so](https://thecloud.so) — or open an issue here.

---

Built by [Teka](https://github.com/tekalabs) · The Cloud · [thecloud.so](https://thecloud.so)
