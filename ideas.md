# ZenSpace - Tasarım Felsefesi

## Seçilen Tasarım Yaklaşımı: "Modern Minimalist Serenity"

### Tasarım Hareketi
**Japandi + Glassmorphism Fusion**: Japon minimalizmi ile İskandinav işlevselliğinin birleşimi, modern glassmorphism efektleriyle desteklenen, sakin ve odaklanmaya yardımcı bir estetik.

### Temel Prensipler
1. **Sessiz Güç**: Karmaşıklık gizlenmiş, basitlik öne çıkarılmış. Kullanıcı hiçbir şeyi düşünmeden odaklanabilir.
2. **Sıvı Geçişler**: Tüm etkileşimler yumuşak, doğal hareketlerle gerçekleşir. Hiçbir sert geçiş yok.
3. **Negatif Alan Kullanımı**: Ekranın çoğu boş, ancak bu boşluk tasarımın bir parçası. Odaklanmaya yardımcı.
4. **Dokunsal Hissi**: Cam efekti (glassmorphism) ve hafif gölgeler, dijital alanın fiziksel hissini verir.

### Renk Felsefesi
- **Arka Plan**: Çok açık, neredeyse beyaz (oklch(0.98 0 0)) veya çok koyu, neredeyse siyah (oklch(0.12 0 0))
- **Aksan Renkler**: Sakin, doğal tonlar
  - Mavi (odaklanma/huzur): oklch(0.55 0.15 250)
  - Yeşil (doğa/orman): oklch(0.60 0.12 140)
  - Turuncu (sıcaklık/kafe): oklch(0.65 0.18 45)
  - Pembe (gün batımı): oklch(0.70 0.12 10)
- **Niyeti**: Doğal, sakinleştirici, odaklanmaya yardımcı renkler

### Layout Paradigması
- **Merkez Odaklı Asimetri**: Saatin ortasında büyük, zarif bir Pomodoro sayacı
- **Çevresel Kontroller**: Kenarlar ve köşelerde, kullanıcının merkeze bakmasını engellemeyen kontroller
- **Katmanlı Derinlik**: Glassmorphism ile ön plan, arka plan ve orta alan ayrımı

### İmza Elementleri
1. **Zarif Dairesel Sayaç**: Ince çizgiler, yumuşak geçişler, hipnotik dönen animasyon
2. **Ses Kontrol Kartları**: Glassmorphic kartlar, her ses için kendi renk tonu
3. **Nefes Animasyonu**: Sakin, ritmik pulse efekti

### Etkileşim Felsefesi
- **Hover**: Hafif ölçeklendirme ve renk değişimi
- **Tıklama**: Kısa, tatmin edici feedback (pulse veya scale)
- **Geçişler**: Tüm animasyonlar 300-500ms, ease-out cubic
- **Geri Bildirim**: Sessiz ancak net (toast, renk değişimi, hafif vibrasyon hissi)

### Animasyon Yönergeleri
- **Sayaç**: Yumuşak, sonsuz dönen animasyon (60 saniyede bir tam dönüş)
- **Ses Kartları**: Hover'da hafif yukarı doğru hareket (3px)
- **Nefes Animasyonu**: 4 saniye döngü (2 saniye genişle, 2 saniye daralt)
- **Renk Geçişleri**: Tüm arka plan renk değişimleri 1 saniye sürer
- **Giriş Animasyonları**: Sayfanın yüklenmesinde kartlar yukarıdan aşağıya doğru fade-in

### Tipografi Sistemi
- **Display Font**: "Playfair Display" - Başlıklar için, zarif ve modern
- **Body Font**: "Inter" - Metin ve kontroller için, okunması kolay
- **Hiyerarşi**:
  - H1: Playfair Display, 48px, 300 weight
  - H2: Playfair Display, 32px, 400 weight
  - Body: Inter, 16px, 400 weight
  - Small: Inter, 14px, 500 weight
