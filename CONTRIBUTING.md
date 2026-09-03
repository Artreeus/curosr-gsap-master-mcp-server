# Contributing

Thanks for helping improve GSAP Master MCP Server.

## Development setup

1. Fork and clone the repository.
2. Install dependencies with `npm install`.
3. Create a focused branch from `main`.
4. Make your change in `src/` and update documentation when behavior changes.
5. Run `npm run typecheck`, `npm run build`, and `npm test`.

## Tool changes

Keep every MCP tool's advertised schema aligned with its request handler. When
adding or changing a tool, include a representative prompt and verify both a
successful request and invalid input.

Generated animation examples should mention any required GSAP plugins and
avoid performance guarantees. Actual performance depends on the application,
browser, device, and work performed per frame.

## Pull requests

Keep pull requests small enough to review independently. Explain the reason for
the change, summarize the implementation, list the checks you ran, and link any
related issue. Do not commit credentials, local editor settings, or generated
dependency directories.
