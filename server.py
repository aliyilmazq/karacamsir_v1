#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 8080
DIRECTORY = "build"

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def do_GET(self):
        # Serve index.html for all routes (SPA support)
        if self.path != '/' and not os.path.exists(os.path.join(DIRECTORY, self.path.lstrip('/'))):
            self.path = '/index.html'
        return super().do_GET()

print(f"🚀 Server starting at http://localhost:{PORT}")
print("📁 Serving from 'build' directory")
print("🛑 Press Ctrl+C to stop\n")

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 Server stopped")