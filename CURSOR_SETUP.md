# Using GSAP Master MCP Server with Cursor

## ✅ Configuration Complete!

Your GSAP Master MCP Server is now configured to work with Cursor.

## 📍 Configuration Location

The MCP server configuration is stored at:
```
C:\Users\Mhr_Na\.cursor\mcp.json
```

## 🔧 Current Configuration

**Using Local Build** (recommended - npm package has dependency issues)

```json
{
  "mcpServers": {
    "gsap-master": {
      "command": "node",
      "args": [
        "C:\\Users\\Mhr_Na\\Desktop\\gsap mcp\\gsap-master-mcp-server\\dist\\index.js"
      ]
    }
  }
}
```

### Why Local Build?
The npm package currently has a dependency resolution issue with `@modelcontextprotocol/sdk`. Using the local build ensures all dependencies are properly installed.

## 🚀 Next Steps

### 1. Restart Cursor
**Important:** You MUST completely close and restart Cursor for the MCP server to load.

### 2. Verify Installation
1. Open Cursor Settings (`Ctrl+,` or `Cmd+,`)
2. Navigate to **Tools & MCP** section
3. Check "Installed MCP Servers"
4. You should see **"gsap-master"** listed

### 3. Start Using GSAP Tools
Once verified, Cursor's AI will have access to all 6 powerful GSAP tools:

#### 🧠 1. AI Animation Creator
Ask in chat: *"Create a smooth parallax hero section with staggered text reveals"*

#### 📚 2. GSAP API Expert  
Ask: *"What are all the ScrollTrigger properties?"*

#### 🛠️ 3. Complete Setup Generator
Ask: *"Generate a React GSAP setup with ScrollTrigger"*

#### 🔧 4. Expert Debugger
Ask: *"Debug: My animations are laggy on mobile Safari"*

#### ⚡ 5. Performance Optimizer
Ask: *"Optimize this animation for 60fps"*

#### 🎨 6. Production Patterns
Ask: *"Create a production-ready hero animation system"*

## 💡 Example Queries to Try

```
1. "Create a card reveal animation with GSAP ScrollTrigger"
2. "What's the best way to animate text with SplitText?"
3. "Generate a complete GSAP setup for Next.js"
4. "Debug this timeline: [paste your code]"
5. "Optimize this animation for mobile devices"
6. "Create a production-ready page transition pattern"
```

## 🔄 Alternative Configuration Options

### Option A: Using Local Development Version
If you want to use your local development version instead:

```json
{
  "mcpServers": {
    "gsap-master": {
      "command": "node",
      "args": [
        "C:\\Users\\Mhr_Na\\Desktop\\gsap mcp\\gsap-master-mcp-server\\dist\\index.js"
      ]
    }
  }
}
```

**Note:** You'll need to build the project first with `npm run build`

### Option B: Using Specific Version
To lock to a specific version:

```json
{
  "mcpServers": {
    "gsap-master": {
      "command": "npx",
      "args": [
        "-y",
        "bruzethegreat-gsap-master-mcp-server@2.2.0"
      ]
    }
  }
}
```

## 📦 Package Information

- **Package Name:** `bruzethegreat-gsap-master-mcp-server`
- **Current Version:** 2.2.0
- **npm Registry:** https://www.npmjs.com/package/bruzethegreat-gsap-master-mcp-server
- **Repository:** https://github.com/bruzethegreat/gsap-master-mcp-server

## 🐛 Troubleshooting

### MCP Server Not Showing Up?
1. Make sure you completely restarted Cursor (not just reloaded window)
2. Check that Node.js is installed: `node --version` (requires v18+)
3. Verify the mcp.json file has no syntax errors
4. Check Cursor's logs in: `C:\Users\Mhr_Na\AppData\Roaming\Cursor\logs`

### Server Connection Issues?
1. Try running the package manually: `npx -y bruzethegreat-gsap-master-mcp-server`
2. Check if npm is working: `npm --version`
3. Clear npm cache: `npm cache clean --force`

### Want to Update?
The MCP server will automatically use the latest version thanks to `npx`. To force an update:
```bash
npx clear-npx-cache
```

## 🎯 What's Different from Claude Desktop?

**Good news:** The configuration is nearly identical!

- **Claude Desktop:** Uses `claude_desktop_config.json`
- **Cursor:** Uses `.cursor/mcp.json`

Both use the same MCP protocol, so all 6 GSAP tools work exactly the same way!

## 📝 Notes

- The `-y` flag in the npx command skips confirmation prompts
- The MCP server runs locally on your machine
- No data is sent to external servers
- All GSAP plugins are now 100% FREE (thanks to Webflow!)

---

**🎉 You're all set! Restart Cursor and start creating amazing GSAP animations!**
