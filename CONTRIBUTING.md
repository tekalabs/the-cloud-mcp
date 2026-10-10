# Contributing

## Open an issue

Search the [existing issues](https://github.com/tekalabs/the-cloud-mcp/issues) before filing a [new issue](https://github.com/tekalabs/the-cloud-mcp/issues/new). Describe the observed behavior, the expected behavior, and a small reproduction when possible. Do not report security vulnerabilities in public issues. Follow [SECURITY.md](SECURITY.md) instead.

## Open a pull request

Fork the repository, create a focused branch, make the change, and open a pull request against this repository. Explain the reason for the change and how you verified it. Every pull request is reviewed before merge.

## DCO sign-off

Every commit must certify the [Developer Certificate of Origin](https://developercertificate.org/). Create signed commits with:

```sh
git commit -s -m "Describe the change"
```

The commit message must contain a trailer in this format:

```text
Signed-off-by: Your Name <your.email@example.com>
```

Use your real name and an email address associated with your contribution. A pull request with an unsigned commit cannot merge.

## Generated files

The generated verb catalog documentation, `server.json`, SDK, document contracts, and skills are mirrored from the private monorepo. When those generated paths are present, do not edit them directly. Open a [fix request](https://github.com/tekalabs/the-cloud-mcp/issues/new) so the source can change and the mirror can publish the result. The current checked-in bridge files under [`extension/`](extension/) are not part of that generated set.

## Review

Every pull request is reviewed before merge. Review may ask for a smaller change, added verification, or an update to the source in the private monorepo.
