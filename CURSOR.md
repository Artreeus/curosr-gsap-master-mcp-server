# 🎨 GSAP Master MCP Server for Cursor IDE

Complete guide to using the GSAP Master MCP Server with Cursor IDE.

## 🚀 Quick Setup (3 Steps)

### Step 1: Locate Your MCP Configuration File

**Windows:**
```
C:\Users\<YourUsername>\.cursor\mcp.json
```

**macOS:**
```
~/.cursor/mcp.json
```

**Linux:**
```
~/.cursor/mcp.json
```

### Step 2: Add the GSAP MCP Server Configuration

Open `mcp.json` and add:

```json
{
  "mcpServers": {
    "gsap-master": {
      "command": "npx",
      "args": ["-y", "bruzethegreat-gsap-master-mcp-server@latest"]
    }
  }
}
```

**If the file is empty**, replace everything with the above.

**If you already have other MCP servers**, add the `"gsap-master"` section inside `"mcpServers"`:

```json
{
  "mcpServers": {
    "existing-server": {
      "command": "...",
      "args": ["..."]
    },
    "gsap-master": {
      "command": "npx",
      "args": ["-y", "bruzethegreat-gsap-master-mcp-server@latest"]
    }
  }
}
```

### Step 3: Restart Cursor

**Important:** You must completely quit and restart Cursor (not just reload the window).

## ✅ Verify Installation

After restarting Cursor:

1. Open **Cursor Settings** (`Ctrl+,` on Windows/Linux, `Cmd+,` on macOS)
2. Navigate to **Tools & MCP** in the left sidebar
3. Look for **"gsap-master"** in the "Installed MCP Servers" section
4. The toggle should be green (enabled)

If you see "gsap-master" listed, you're all set! 🎉

## 🎯 Start Using GSAP Tools

Cursor's AI now has access to 6 powerful GSAP tools. Try these example queries:

### 🧠 AI Animation Creator
```
Create a smooth parallax hero section with staggered text reveals
```

### 📚 GSAP API Expert
```
What are all the ScrollTrigger properties and their uses?
```

### 🛠️ Complete Setup Generator
```
Generate a complete GSAP setup for React with ScrollTrigger
```

### 🔧 Expert Debugger
```
Debug: My GSAP animations are stuttering on mobile Safari
```

### ⚡ Performance Optimizer
```
Optimize this animation for 60fps performance
```

### 🎨 Production Patterns
```
Create a production-ready page transition system with GSAP
```

## 💡 More Example Queries

```
1. "Create a card reveal animation that triggers on scroll"
2. "How do I animate SVG paths with DrawSVG?"
3. "Build a text reveal effect character by character"
4. "What's the best way to create a parallax effect?"
5. "Generate a timeline that sequences multiple animations"
6. "Create hover effects for my navigation menu"
7. "Build a smooth scroll progress indicator"
8. "How do I pin elements during scroll?"
```

## 🐛 Troubleshooting

### MCP Server Not Showing Up?

**Solution 1: Check Node.js**
```bash
node --version
```
You need Node.js 18 or higher. [Download here](https://nodejs.org/)

**Solution 2: Verify File Path**
Make sure `mcp.json` is in the correct location:
- Windows: `C:\Users\<YourUsername>\.cursor\mcp.json`
- macOS/Linux: `~/.cursor/mcp.json`

**Solution 3: Check JSON Syntax**
Make sure your `mcp.json` has no syntax errors. Use a JSON validator if needed.

**Solution 4: Complete Restart**
Close Cursor completely (check Task Manager/Activity Monitor to ensure it's closed) and restart.

### Server Shows Error?

If you see a red error indicator:

**Option A: Use Latest Version**
Update your configuration to ensure you're using the latest version:
```json
{
  "mcpServers": {
    "gsap-master": {
      "command": "npx",
      "args": ["-y", "bruzethegreat-gsap-master-mcp-server@latest"]
    }
  }
}
```

**Option B: Clear npm Cache**
```bash
npx clear-npx-cache
```
Then restart Cursor.

**Option C: Use Local Build (Advanced)**
If npm installation continues to fail, you can clone the repository and build locally:

```bash
# Clone the repository
git clone https://github.com/bruzethegreat/gsap-master-mcp-server.git
cd gsap-master-mcp-server

# Install dependencies
npm install

# Build the project
npm run build
```

Then update your `mcp.json`:
```json
{
  "mcpServers": {
    "gsap-master": {
      "command": "node",
      "args": ["/absolute/path/to/gsap-master-mcp-server/dist/index.js"]
    }
  }
}
```

### Tools Not Working in Chat?

1. Make sure the MCP server toggle is **green/enabled** in Settings → Tools & MCP
2. Try asking a direct GSAP question to trigger tool usage
3. Check Cursor's output panel for any error messages

## 🔄 Updating to Latest Version

The MCP server automatically uses the latest version when you restart Cursor (thanks to `@latest` in the config).

To force an update:
```bash
npx clear-npx-cache
```
Then restart Cursor.

## 📚 What You Get

### 6 Professional GSAP Tools:

1. **AI Animation Creator** - Natural language → production code
2. **GSAP API Expert** - Complete documentation & examples
3. **Setup Generator** - Framework-specific configurations
4. **Animation Debugger** - Troubleshoot performance issues
5. **Performance Optimizer** - 60fps transformations
6. **Production Patterns** - Battle-tested templates

### Full GSAP Coverage:
- ✅ Core methods (to, from, fromTo, timeline)
- ✅ ScrollTrigger (FREE!)
- ✅ SplitText (FREE!)
- ✅ DrawSVG (FREE!)
- ✅ MorphSVG (FREE!)
- ✅ Draggable (FREE!)
- ✅ All other premium plugins (FREE!)

*All GSAP premium plugins are now 100% FREE thanks to Webflow!*

## 🎓 Learning Resources

Once installed, ask Cursor:
- "Teach me GSAP basics"
- "Show me advanced timeline techniques"
- "What are ScrollTrigger best practices?"
- "How do I create professional page transitions?"

The AI has deep knowledge of GSAP and can teach you while you build!

## 🌟 Features

- 🧠 **AI-Powered Intent Analysis** - Understands what you want to build
- ⚡ **60fps Performance** - Every animation optimized
- 📱 **Mobile-First** - Responsive by default
- 🎨 **Framework Agnostic** - React, Vue, Svelte, Vanilla JS
- 🔧 **Production-Ready** - Battle-tested patterns
- 📚 **Complete API Coverage** - Every GSAP method & plugin

## 💻 Cursor vs Claude Desktop

Both use the exact same MCP protocol, so all features work identically!

| Feature | Cursor | Claude Desktop |
|---------|--------|----------------|
| All 6 GSAP Tools | ✅ | ✅ |
| Complete API Access | ✅ | ✅ |
| AI Intent Analysis | ✅ | ✅ |
| Configuration File | `.cursor/mcp.json` | `claude_desktop_config.json` |
| Setup Complexity | Same | Same |

## 🤝 Need Help?

- 🐛 **Issues**: [GitHub Issues](https://github.com/bruzethegreat/gsap-master-mcp-server/issues)
- 💡 **Feature Requests**: Open a GitHub issue
- 📖 **Documentation**: [Main README](./README.md)

## 📦 Package Information

- **Package**: `bruzethegreat-gsap-master-mcp-server`
- **npm**: [View on npm](https://www.npmjs.com/package/bruzethegreat-gsap-master-mcp-server)
- **GitHub**: [Source Code](https://github.com/bruzethegreat/gsap-master-mcp-server)
- **License**: MIT

---

**🎉 You're ready to create amazing GSAP animations with Cursor!**

Start by asking: *"Create my first GSAP animation"*
