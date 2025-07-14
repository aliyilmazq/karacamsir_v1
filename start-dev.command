#!/bin/bash

# Change to the script's directory
cd "$(dirname "$0")"

echo "🚀 Karaçam & Şir - Starting Development Server"
echo "=============================================="
echo ""

# Kill any existing processes
echo "🧹 Cleaning up old processes..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true
lsof -ti:8080 | xargs kill -9 2>/dev/null || true
sleep 2

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server
echo ""
echo "🌐 Starting development server..."
echo "================================="
echo ""
npm start

# Keep terminal open
read -p "Press any key to exit..."