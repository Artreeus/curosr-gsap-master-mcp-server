# GSAP Master MCP Server

An MCP server that gives compatible AI clients a focused toolkit for planning, generating, explaining, debugging, and optimizing [GSAP](https://gsap.com/) animations.

It runs locally over standard input/output and exposes six tools backed by a built-in knowledge base of GSAP methods, plugins, patterns, and framework-specific examples.

## Highlights

- Natural-language animation generation
- API guidance for GSAP core and popular plugins
- Setup examples for React, Next.js, Vue, Nuxt, Svelte, and vanilla JavaScript
- Debugging and performance recommendations
- Reusable production patterns for common interface animations
- Local stdio transport: no hosted service or API key required

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Client configuration](#client-configuration)
- [Available tools](#available-tools)
- [Usage examples](#usage-examples)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- Node.js 18 or newer
- npm
- An MCP-compatible client that can launch stdio servers

## Installation

Clone the repository, install its dependencies, and compile the TypeScript source:

```bash
git clone https://github.com/Artreeus/curosr-gsap-master-mcp-server.git
cd curosr-gsap-master-mcp-server
npm install
npm run build
```

The build creates `dist/index.js`, the executable entry point used by MCP clients. Run it directly to confirm that Node can start the server:

```bash
npm start
```

### How it works

```text
MCP client
    |  JSON-RPC over stdin/stdout
    v
GSAP Master MCP Server
    |-- tool schemas and request routing
    |-- GSAP API and plugin knowledge
    `-- code and guidance generators
```

The server uses `StdioServerTransport` from the Model Context Protocol SDK. It advertises its tool schemas when the client lists tools, routes calls by tool name, and returns text content. Diagnostic logs are written to stderr so they do not corrupt the protocol stream on stdout.

This repository provides the MCP server and its generated guidance. GSAP itself is a separate dependency that belongs in the project where you use the returned animation code.

The process waits for MCP messages on stdin, so an idle process is expected. Press `Ctrl+C` to stop it.

## Client configuration

Add a server entry to your MCP client's configuration. Use an absolute path to the compiled file.

### Windows

```json
{
  "mcpServers": {
    "gsap-master": {
      "command": "node",
      "args": [
        "C:\\path\\to\\curosr-gsap-master-mcp-server\\dist\\index.js"
      ]
    }
  }
}
```

### macOS and Linux

```json
{
  "mcpServers": {
    "gsap-master": {
      "command": "node",
      "args": [
        "/absolute/path/to/curosr-gsap-master-mcp-server/dist/index.js"
      ]
    }
  }
}
```

Restart the client after saving the configuration. In Cursor, the server should then appear under **Settings > Tools & MCP**.

## Available tools

| Tool | Purpose | Required input |
| --- | --- | --- |
| `understand_and_create_animation` | Interpret a request and generate an animation approach and code | `request` |
| `get_gsap_api_expert` | Explain a GSAP method, plugin, or property | `api_element` |
| `generate_complete_setup` | Generate framework and plugin setup instructions | `framework` |
| `debug_animation_issue` | Diagnose unexpected animation behavior | `issue` |
| `optimize_for_performance` | Review animation code for a selected performance target | `animation_code` |
| `create_production_pattern` | Generate a reusable animation pattern for a common UI scenario | `pattern_type` |

Tool responses are generated locally from the server's embedded knowledge and templates. The server does not install GSAP or modify your application; review and apply the returned code in your own project.

### Tool options

The optional arguments let you shape each response:

- `understand_and_create_animation`: `context` accepts `react`, `vanilla`, `nextjs`, `vue`, `performance-critical`, or `mobile-optimized`; `complexity` ranges from `simple` to `expert`.
- `get_gsap_api_expert`: `level` accepts `basic`, `intermediate`, `advanced`, or `expert`.
- `generate_complete_setup`: `framework` accepts `react`, `nextjs`, `vue`, `nuxt`, `svelte`, or `vanilla`; `plugins` is an array of supported plugin names; `performance_level` controls the optimization emphasis.
- `debug_animation_issue`: add `code` and `expected_behavior` to give the diagnostic tool more context.
- `optimize_for_performance`: `target` accepts `60fps-desktop`, `mobile-smooth`, `battery-efficient`, or `memory-optimized`.
- `create_production_pattern`: `pattern_type` covers hero sections, scroll systems, text effects, interactive UI, loading sequences, page transitions, micro-interactions, and data visualization; `industry` tailors the example.

Arguments omitted by the client use the defaults declared in the tool schema.

## Usage examples

Once the server is enabled, ask your client to use the GSAP tools explicitly or describe the outcome you want. For example:

```text
Use understand_and_create_animation to build a mobile-friendly card reveal
in React. Trigger each row at 80% of the viewport and respect reduced motion.
```

```text
Use get_gsap_api_expert to explain ScrollTrigger scrub at an intermediate
level, including cleanup and responsive breakpoint examples.
```

```text
Use debug_animation_issue on this timeline. The second tween starts too late;
I expected a 0.2 second overlap. [paste code]
```

```text
Use optimize_for_performance with the mobile-smooth target on this animation.
[paste code]
```

Specific prompts produce more useful output. Include your framework, relevant markup, current code, expected behavior, browser constraints, and accessibility requirements when they matter.

### Suggested workflows

For a new animation:

1. Ask `generate_complete_setup` for the framework and plugins you need.
2. Use `get_gsap_api_expert` to clarify unfamiliar APIs.
3. Ask `understand_and_create_animation` for an implementation based on your actual component structure.
4. Run the result through `optimize_for_performance` for the target device class.
5. Test keyboard use, reduced-motion behavior, resizing, and component teardown in your application.

For an existing animation bug:

1. Reduce the issue to the smallest relevant markup, styles, and animation code.
2. Provide that code, the observed result, and the expected result to `debug_animation_issue`.
3. Apply one recommended change at a time and verify it in the affected browsers.

Generated code is a starting point. Browser support, layout, dependencies, and lifecycle behavior still need to be validated in the target application.

## Development

Install dependencies before running any development command:

```bash
npm install
```

| Command | Description |
| --- | --- |
| `npm run dev` | Run `src/index.ts` directly with `tsx` |
| `npm run build` | Compile TypeScript into `dist/` |
| `npm start` | Start the compiled stdio server |
| `npm test` | Run the current package smoke-test script |

The implementation lives in `src/index.ts`. After changing tool definitions, schemas, or response generators, rebuild before testing the server through an MCP client.

To validate the same artifact used by clients:

```bash
npm run build
npm start
```

## Troubleshooting

### The server does not appear in the client

- Run `npm run build` and confirm that `dist/index.js` exists.
- Use an absolute path in the client configuration.
- On Windows, escape backslashes in JSON as `\\` or use forward slashes.
- Confirm the client is invoking Node 18 or newer with `node --version`.
- Restart the MCP client after changing its configuration.

### The server disconnects immediately

Run `npm start` in a terminal and inspect stderr for startup errors. Reinstall dependencies with `npm install` if the SDK cannot be resolved. Do not configure the client to run `src/index.ts` with plain Node; use the compiled `dist/index.js` entry point.

### A tool is unavailable or rejects its input

Verify the tool name and required argument against the [available tools](#available-tools) table. Enum values are exact: for example, `mobile-smooth` is valid for the optimization target, while `mobile` is not.

### Generated code does not run in an application

Check that GSAP and every referenced plugin are installed and imported in that application. Also verify plugin registration, selectors, framework lifecycle cleanup, and whether the generated example assumes browser-only APIs.

## Contributing

Issues and pull requests are welcome. For code changes:

1. Fork the repository and create a focused branch.
2. Install dependencies with `npm install`.
3. Update the source and keep tool schemas consistent with their handlers.
4. Run `npm run build` and `npm test`.
5. Describe the behavior change and include a representative MCP prompt or reproduction in the pull request.

Please avoid adding claims to generated responses that cannot be verified, such as guaranteed frame rates. Performance depends on the page, device, browser, and the work performed by each animation frame.

- [Report a bug](https://github.com/Artreeus/curosr-gsap-master-mcp-server/issues)
- [View the source](https://github.com/Artreeus/curosr-gsap-master-mcp-server)

## License

This project is available under the [MIT License](./LICENSE).

GSAP is a separate product with its own terms. Review the current [GSAP licensing information](https://gsap.com/licensing/) for the animation code and plugins used in your application.

## Acknowledgments

- [GreenSock](https://gsap.com/) for GSAP and its learning resources
- [Model Context Protocol](https://modelcontextprotocol.io/) for the client-server protocol
- The original project contributors and users who report issues and suggest patterns
