# artikel-web

Website artikel statis untuk KerjaDenganSistem, siap untuk publish artikel harian otomatis.

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
  "baca": "7 menit",
  "featured": false,
  "konten": [
    "Paragraf 1",
    "Paragraf 2",
    "Paragraf 3"
  ]
}
```

## Tag yang dipakai

- `ai`
- `ml`
- `auto`
- `dl`
- `data`
