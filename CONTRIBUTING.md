# Contributing to The Cloud MCP extension

Thanks for helping. This repository holds the Claude Desktop extension that
bridges to The Cloud's remote MCP server. It is licensed under Apache-2.0
(see [LICENSE](LICENSE)); the names and mark are covered by
[TRADEMARKS.md](TRADEMARKS.md).

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).

## Run lint and tests

You need Node.js 18 or newer (CI uses the version in [.nvmrc](.nvmrc)).

```sh
npm run install:server   # installs the bridge's pinned dependencies
npm run lint             # syntax-checks every JS file and parses every JSON file
npm test                 # runs the node:test suite in test/
npm run build            # verifies the extension bundle resolves and is complete
```

CI runs the same four steps on every pull request and on every push to the
default branch. Please run them locally before you open a pull request.

## Commit rules

- **DCO sign-off on every commit.** Each commit must carry a
  `Signed-off-by: Your Name <you@example.com>` trailer matching the commit
  author, certifying the [Developer Certificate of Origin](https://developercertificate.org/).
  Use `git commit -s`. A CI check rejects pull requests with unsigned commits;
  fix them with `git rebase --signoff <base>` and force-push your branch.
- **No vendor footers.** Do not add "Generated with" lines, tool
  advertisements or similar attribution blocks to commits or pull requests.
- **No `Co-Authored-By` trailers.** The sign-off is the only trailer we use.
- **No em dashes in prose.** Use a comma, colon, parentheses or a new
  sentence instead. This applies to docs, commit messages and pull request
  bodies.

## Pull requests

- Keep each pull request to one focused change and explain what and why.
- The pull request body ends with exactly one signature chip of eight
  backticked tokens joined by ` · `, and nothing after it:
  `Archetype` · `Model` · `Role` · `Position` · `AOF` · `Project` · `Program` · `Stamp`.
- Pull requests from outside Teka Labs are reviewed by an agent and by a
  human maintainer before merge.

## Bugs and fix requests

File bugs and fix requests through the repository's
[issue templates](https://github.com/tekalabs/the-cloud-mcp/issues/new/choose)
so they reach the right queue with the details we need.

**Do not open public issues for security vulnerabilities.** Follow
[SECURITY.md](SECURITY.md) instead.
