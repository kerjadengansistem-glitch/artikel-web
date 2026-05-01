# artikel-web

Website artikel statis untuk KerjaDenganSistem, siap untuk publish artikel harian otomatis.

## Standar editorial baru

Agar kualitas artikel terasa lebih profesional dan mirip media teknologi modern, gunakan standar berikut untuk artikel baru:

- Panjang ideal: **900–1500 kata**
- Nada tulisan: **profesional, jelas, tidak kaku, mudah dipahami pembaca Indonesia**
- Struktur minimum:
  1. lead/pembuka yang memberi konteks
  2. penjelasan inti topik
  3. contoh penerapan atau sudut bisnis/praktis
  4. tantangan / catatan penting
  5. penutup yang mengikat insight utama
- Hindari artikel yang terlalu pendek, generik, atau terasa seperti hasil AI mentah
- Utamakan paragraf yang informatif, runtut, dan punya transisi yang enak dibaca

## Struktur penting

- `content/articles.json` → sumber utama artikel yang sudah live
- `drafts/queue.json` → antrean artikel yang akan dipublish otomatis
- `scripts/build.js` → generate homepage, halaman detail, `artikel.js`, `sitemap.xml`, dan `robots.txt`
- `scripts/publish-next.js` → ambil 1 artikel pertama dari antrean, publish ke live content, lalu rebuild site
- `.github/workflows/daily-publish.yml` → jadwal publish otomatis harian via GitHub Actions

## Cara pakai lokal

```bash
node scripts/build.js
node scripts/publish-next.js
```

## Cara kerja autopost

1. Tambahkan draft artikel baru ke `drafts/queue.json`
2. GitHub Actions akan menjalankan workflow harian
3. Workflow memindahkan 1 artikel dari queue ke `content/articles.json`
4. Website dibuild ulang otomatis
5. Perubahan di-commit dan di-push otomatis ke repo
6. Vercel deploy otomatis dari repo terbaru

## Format draft artikel

```json
{
  "judul": "Judul Artikel",
  "slug": "judul-artikel",
  "ringkasan": "Ringkasan singkat artikel.",
  "gambar": "https://images.unsplash.com/...",
  "kategori": "AI Generatif",
  "tag": "ai",
  "baca": "9 menit",
  "featured": false,
  "konten": [
    "Lead pembuka yang kuat dan memberi konteks.",
    "Paragraf penjelasan inti topik.",
    "Paragraf pendalaman, contoh, atau dampak praktis.",
    "Paragraf tambahan untuk analisis atau risiko.",
    "Penutup yang merangkum insight utama."
  ]
}
```

## Tag yang dipakai

- `ai`
- `ml`
- `auto`
- `dl`
- `data`
