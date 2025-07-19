# Application Startup Guide

## Quick Start

### Method 1: Double Click (Recommended)
1. Find the `start-dev.command` file in Finder
2. Double-click the file
3. Terminal will open and the application will start automatically
4. Your browser will automatically open http://localhost:3000

### Method 2: Using Terminal
```bash
cd /Users/aliyilmaz/Desktop/karacamsir_v1
npm start
```

## Troubleshooting

### "ERR_CONNECTION_REFUSED" Error
1. Open Terminal
2. Run these commands in order:
```bash
cd /Users/aliyilmaz/Desktop/karacamsir_v1
lsof -ti:3000 | xargs kill -9
npm start
```

### Port Already in Use Error
To use a different port:
```bash
PORT=3001 npm start
```

### Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

## Important Notes
- Node.js v20 or higher is required
- First startup may take some time while dependencies are installed
- If your browser doesn't open automatically after startup, go to http://localhost:3000