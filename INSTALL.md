# ✨ Super Simple Installation for Cursor IDE

## 🎯 3 Steps - No npm Knowledge Needed!

### Step 1: Find Your Config File

**Windows:**
```
C:\Users\YourUsername\.cursor\mcp.json
```

**Mac/Linux:**
```
~/.cursor/mcp.json
```

### Step 2: Copy & Paste This

Open the file and paste this:

```json
{
  "mcpServers": {
    "gsap-master": {
      "command": "node",
      "args": [
        "C:\\path\\to\\where\\you\\clone\\curosr-gsap-master-mcp-server\\dist\\index.js"
      ]
    }
  }
}
```

**⚠️ IMPORTANT:** Replace `C:\\path\\to\\where\\you\\clone\\` with the actual path where you cloned this repo!

**Example on Windows:**
```json
{
  "mcpServers": {
    "gsap-master": {
      "command": "node",
      "args": [
        "C:\\Users\\John\\Desktop\\curosr-gsap-master-mcp-server\\dist\\index.js"
      ]
    }
  }
}
```

**Example on Mac/Linux:**
```json
{
  "mcpServers": {
    "gsap-master": {
      "command": "node",
      "args": [
        "/Users/john/Desktop/curosr-gsap-master-mcp-server/dist/index.js"
      ]
    }
  }
}
```

### Step 3: Restart Cursor

Close Cursor completely and restart it.

---

## ✅ Check If It Worked

1. Open Cursor Settings (`Ctrl+,`)
2. Go to **Tools & MCP**
3. You should see **"gsap-master"** with a green toggle

---

## 🎉 Start Using It!

Ask Cursor's AI things like:

```
"Create a GSAP animation that fades in my hero section"
```

```
"How do I use GSAP ScrollTrigger?"
```

```
"Generate a React component with GSAP animations"
```

---

## 🛠️ First Time Setup (One-Time Only)

If you just cloned this repo, run these commands once:

```bash
cd curosr-gsap-master-mcp-server
npm install
npm run build
```

Then follow Steps 1-3 above!

---

## 🐛 Problems?

**Server shows error?**
- Make sure you ran `npm install` and `npm run build`
- Check that the path in mcp.json is correct
- Make sure you used `\\` on Windows or `/` on Mac/Linux

**Still not working?**
- Open an issue on GitHub: https://github.com/Artreeus/curosr-gsap-master-mcp-server/issues

---

That's it! Enjoy your GSAP AI assistant in Cursor! 🚀
