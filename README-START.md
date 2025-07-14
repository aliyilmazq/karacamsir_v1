# Uygulamayı Başlatma Kılavuzu

## Hızlı Başlangıç

### Yöntem 1: Çift Tıklama (Önerilen)
1. Finder'da `start-dev.command` dosyasını bulun
2. Dosyaya çift tıklayın
3. Terminal açılacak ve uygulama otomatik başlayacak
4. Tarayıcınız otomatik olarak http://localhost:3000 adresini açacak

### Yöntem 2: Terminal Kullanarak
```bash
cd /Users/aliyilmaz/Desktop/karacamsir_v1
npm start
```

## Sorun Giderme

### "ERR_CONNECTION_REFUSED" Hatası
1. Terminal'i açın
2. Şu komutları sırayla çalıştırın:
```bash
cd /Users/aliyilmaz/Desktop/karacamsir_v1
lsof -ti:3000 | xargs kill -9
npm start
```

### Port Kullanımda Hatası
Farklı bir port kullanmak için:
```bash
PORT=3001 npm start
```

### Bağımlılıkları Yeniden Yükle
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

## Önemli Notlar
- Node.js v20 veya üzeri gereklidir
- İlk başlatmada bağımlılıkların yüklenmesi biraz zaman alabilir
- Uygulama başladıktan sonra tarayıcınız otomatik açılmazsa http://localhost:3000 adresine gidin