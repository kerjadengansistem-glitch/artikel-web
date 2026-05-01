const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repoRoot = path.join(__dirname, '..');
const articlesPath = path.join(repoRoot, 'content', 'articles.json');
const queuePath = path.join(repoRoot, 'drafts', 'queue.json');

const monthNames = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const today = new Date();
const tanggal = `${today.getUTCDate()} ${monthNames[today.getUTCMonth()]} ${today.getUTCFullYear()}`;

const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'));
const queue = JSON.parse(fs.readFileSync(queuePath, 'utf8'));

if (!queue.length) {
  console.log('Queue kosong. Tidak ada artikel yang dipublish hari ini.');
  process.exit(0);
}

const next = queue.shift();
next.tanggal = next.tanggal || tanggal;
next.featured = false;

articles.forEach((item, index) => {
  item.featured = index === 0 ? item.featured : false;
});

articles.unshift(next);
fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2) + '\n', 'utf8');
fs.writeFileSync(queuePath, JSON.stringify(queue, null, 2) + '\n', 'utf8');
execSync('node scripts/build.js', { cwd: repoRoot, stdio: 'inherit' });
console.log(`Artikel dipublish: ${next.judul}`);
