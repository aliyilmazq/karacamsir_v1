#!/bin/bash

echo "🌐 Karaçam & Şir Web Uygulaması Başlatılıyor..."
echo "================================================"

# Build the app if needed
if [ ! -d "build" ]; then
    echo "📦 Build klasörü bulunamadı. Uygulama derleniyor..."
    npm run build
fi

# Start server
echo "🚀 Server başlatılıyor..."
cd build
python3 -m http.server 8080 &
SERVER_PID=$!

sleep 2

echo ""
echo "✅ Uygulama hazır!"
echo "🔗 Tarayıcınızda açın: http://localhost:8080"
echo ""
echo "🛑 Durdurmak için Ctrl+C kullanın"

# Open browser
open http://localhost:8080

# Wait for Ctrl+C
trap "echo ''; echo '👋 Server durduruluyor...'; kill $SERVER_PID 2>/dev/null; exit" INT
wait $SERVER_PID