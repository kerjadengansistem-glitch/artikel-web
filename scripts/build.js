const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const outputDir = path.join(repoRoot, 'public');
const baseUrl = 'https://artikel.kerjadengansistem.web.id';
const articlesPath = path.join(repoRoot, 'content', 'articles.json');
const sourceIndexPath = path.join(repoRoot, 'index.html');

const escapeHtml = (text='') => String(text)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'));
if (!Array.isArray(articles) || !articles.length) {
  throw new Error('content/articles.json kosong atau tidak valid.');
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(path.join(outputDir, 'artikel'), { recursive: true });

const publicArticles = articles.map((a) => ({
  judul: a.judul,
  slug: a.slug,
  ringkasan: a.ringkasan,
  gambar: a.gambar,
  kategori: a.kategori,
  tag: a.tag,
  tanggal: a.tanggal,
  baca: a.baca,
  link: `artikel/${a.slug}.html`,
  featured: !!a.featured
}));

// Use the existing homepage template, but feed it fresh generated data.
fs.copyFileSync(sourceIndexPath, path.join(outputDir, 'index.html'));
fs.writeFileSync(
  path.join(outputDir, 'artikel.js'),
  `const artikelData = ${JSON.stringify(publicArticles, null, 2)};\n`,
  'utf8'
);

const articleTemplate = ({ judul, slug, ringkasan, gambar, kategori, tanggal, baca, konten }) => `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(judul)} | KerjaDenganSistem</title>
<meta name="description" content="${escapeHtml(ringkasan)}">
<link rel="canonical" href="${baseUrl}/artikel/${slug}.html">
<meta name="robots" content="index,follow">
<meta property="og:type" content="article">
<meta property="og:title" content="${escapeHtml(judul)}">
<meta property="og:description" content="${escapeHtml(ringkasan)}">
<meta property="og:url" content="${baseUrl}/artikel/${slug}.html">
<meta property="og:image" content="${escapeHtml(gambar)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
:root{--p:#6C5CE7;--pl:#A29BFE;--s:#00CEC9;--bg:#0F0F1A;--bg2:#161628;--bgc:#1E1E35;--t:#FFF;--t2:#B0B0CC;--t3:#7878A0;--bd:#2A2A4A;--gr:linear-gradient(135deg,#6C5CE7,#00CEC9)}
*{margin:0;padding:0;box-sizing:border-box} body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--t);line-height:1.8} a{color:inherit;text-decoration:none} img{max-width:100%;display:block} .c{max-width:900px;margin:0 auto;padding:0 24px} nav{position:sticky;top:0;background:rgba(15,15,26,.88);backdrop-filter:blur(20px);border-bottom:1px solid var(--bd);z-index:10} .ni{display:flex;align-items:center;justify-content:space-between;padding:16px 0} .logo{display:flex;align-items:center;gap:12px} .li{font-size:24px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;background:var(--gr);border-radius:8px} .lt span:first-child{font-size:15px;font-weight:700;display:block;line-height:1.2} .lt span:last-child{font-size:11px;color:var(--t3)} .btn{display:inline-flex;align-items:center;gap:8px;padding:12px 18px;border-radius:10px;font-size:14px;font-weight:700;transition:.3s} .ghost{border:1px solid var(--bd);color:var(--t2)} header{padding:52px 0 24px} .crumb{display:inline-block;padding:8px 16px;background:rgba(108,92,231,.15);border:1px solid rgba(108,92,231,.3);border-radius:999px;font-size:13px;font-weight:600;color:var(--pl);margin-bottom:18px} h1{font-size:44px;line-height:1.15;margin-bottom:16px} .meta{display:flex;gap:16px;flex-wrap:wrap;color:var(--t3);font-size:14px;margin-bottom:24px} .heroimg{border-radius:22px;overflow:hidden;border:1px solid var(--bd);margin:24px 0 36px} .heroimg img{width:100%;height:auto;object-fit:cover} article{background:var(--bgc);border:1px solid var(--bd);border-radius:24px;padding:38px} article p{color:var(--t2);font-size:17px;margin-bottom:20px} article h2{font-size:24px;margin:30px 0 12px} .backgrid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:32px 0 60px} .card{background:var(--bgc);border:1px solid var(--bd);border-radius:18px;padding:22px} .card h3{font-size:18px;margin-bottom:8px} .card p{color:var(--t2);font-size:15px} footer{padding:32px 0 48px;color:var(--t3);font-size:14px} @media(max-width:768px){h1{font-size:32px} article{padding:24px} .backgrid{grid-template-columns:1fr}}
</style>
</head>
<body>
<nav><div class="c ni"><a href="/" class="logo"><span class="li">⚡</span><div class="lt"><span>KerjaDenganSistem</span><span>Artikel AI & Automation</span></div></a><a href="/" class="btn ghost">← Kembali ke Beranda</a></div></nav>
<header><div class="c"><span class="crumb">${escapeHtml(kategori)}</span><h1>${escapeHtml(judul)}</h1><div class="meta"><span>📅 ${escapeHtml(tanggal)}</span><span>⏱️ ${escapeHtml(baca)}</span><span>🏷️ ${escapeHtml(kategori)}</span></div><p style="color:var(--t2);font-size:18px;max-width:760px">${escapeHtml(ringkasan)}</p><div class="heroimg"><img src="${escapeHtml(gambar)}" alt="${escapeHtml(judul)}"></div></div></header>
<main class="c"><article>${konten.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}<h2>Kenapa topik ini penting?</h2><p>Topik ini relevan karena perubahan teknologi bergerak sangat cepat. Dengan memahami dasar dan praktiknya, Anda bisa mengambil keputusan yang lebih tepat, baik untuk kebutuhan belajar, bisnis, maupun pengembangan sistem kerja yang lebih efisien.</p></article><div class="backgrid"><a class="card" href="/"><h3>Jelajahi artikel lainnya</h3><p>Kembali ke halaman utama untuk melihat artikel terbaru seputar AI dan automation.</p></a><a class="card" href="https://kerjadengansistem.web.id" target="_blank" rel="noopener"><h3>Kunjungi website utama</h3><p>Lihat ekosistem KerjaDenganSistem dan konten lain yang relevan.</p></a></div></main>
<footer><div class="c">© 2026 KerjaDenganSistem — Konten edukatif seputar AI, automation, dan sistem kerja yang lebih cerdas.</div></footer>
</body>
</html>`;

for (const article of articles) {
  fs.writeFileSync(path.join(outputDir, 'artikel', `${article.slug}.html`), articleTemplate(article), 'utf8');
}

fs.writeFileSync(path.join(outputDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`, 'utf8');
const urls = [baseUrl + '/', ...articles.map((a) => `${baseUrl}/artikel/${a.slug}.html`)];
fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`).join('\n')}\n</urlset>\n`, 'utf8');

console.log(`Build selesai: ${articles.length} artikel diproses.`);
