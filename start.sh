#!/bin/bash

# Kill any existing processes on port 3000
echo "🔄 Cleaning up existing processes..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Wait a moment
sleep 1

# Start the application
echo "🚀 Starting the application on port 3000..."
npm start