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

The process waits for MCP messages on stdin, so an idle process is expected. Press `Ctrl+C` to stop it.
