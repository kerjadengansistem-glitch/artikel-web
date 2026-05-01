const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const rules = [
  { file: path.join(repoRoot, 'drafts', 'queue.json'), strict: true, label: 'draft queue' },
  { file: path.join(repoRoot, 'content', 'articles.json'), strict: false, label: 'published articles' }
].filter((entry) => fs.existsSync(entry.file));

const allowedTags = new Set(['ai', 'ml', 'auto', 'dl', 'data']);
let hasError = false;
let warnings = 0;

function fail(message) {
  console.error(`❌ ${message}`);
  hasError = true;
}
function warn(message) {
  console.warn(`⚠️ ${message}`);
  warnings += 1;
}

for (const entry of rules) {
  const items = JSON.parse(fs.readFileSync(entry.file, 'utf8'));
  if (!Array.isArray(items)) {
    fail(`${path.basename(entry.file)} harus berupa array.`);
    continue;
  }

  items.forEach((item, index) => {
    const label = `${path.basename(entry.file)}[${index}] ${item.slug || item.judul || '(tanpa identitas)'}`;
    const required = ['judul', 'slug', 'ringkasan', 'gambar', 'kategori', 'tag', 'baca', 'konten'];
    for (const key of required) {
      if (!item[key]) fail(`${label} tidak memiliki field wajib: ${key}`);
    }
    if (!Array.isArray(item.konten)) fail(`${label} field konten harus array paragraf.`);
    if (item.tag && !allowedTags.has(item.tag)) fail(`${label} tag tidak dikenal: ${item.tag}`);

    const issues = [];
    if (Array.isArray(item.konten) && item.konten.length < 8) issues.push('minimal 8 paragraf utama');
    if (typeof item.ringkasan === 'string' && item.ringkasan.length < 120) issues.push('ringkasan minimal sekitar 120 karakter');
    if (typeof item.judul === 'string' && item.judul.length < 20) issues.push('judul terlalu pendek');

    if (issues.length) {
      const message = `${label} belum memenuhi standar editorial media: ${issues.join(', ')}.`;
      if (entry.strict) fail(message); else warn(message);
    }
  });
}

if (hasError) process.exit(1);
console.log(`✅ Validasi editorial lolos${warnings ? ` dengan ${warnings} peringatan untuk artikel lama.` : '.'}`);
