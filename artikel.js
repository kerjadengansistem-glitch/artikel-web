// ============================================================
//  DATABASE ARTIKEL — Tambahkan artikel baru di sini!
//
//  CARA MENAMBAH ARTIKEL BARU:
//  1. Copy template di bawah
//  2. Paste di PALING ATAS array (setelah baris "const artikelData = [")
//  3. Isi data artikel Anda
//  4. Simpan file, lalu upload ulang ke hosting
//
//  TEMPLATE (copy dari sini):
//  {
//    judul: "Judul Artikel Anda",
//    ringkasan: "Ringkasan singkat 2-3 kalimat tentang artikel.",
//    gambar: "https://images.unsplash.com/photo-XXXXX?w=600&q=80",
//    kategori: "AI Generatif",
//    tag: "ai",
//    tanggal: "1 Mei 2026",
//    baca: "5 menit",
//    link: "#",
//    featured: false
//  },
//
//  PILIHAN TAG (menentukan warna label):
//    "ai"   = ungu   (untuk AI Generatif, Chatbot, dll)
//    "ml"   = oranye (untuk Machine Learning)
//    "auto" = hijau  (untuk Automation, Robotics)
//    "dl"   = pink   (untuk Deep Learning)
//    "data" = kuning (untuk Data Science)
//
//  PILIHAN FEATURED:
//    true  = artikel ditampilkan besar di atas (hanya 1 yang aktif)
//    false = artikel ditampilkan di grid biasa
//
//  TIPS GAMBAR GRATIS:
//    Buka https://unsplash.com, cari gambar, klik gambar,
//    klik kanan > "Copy image address", paste di bagian "gambar"
//
// ============================================================

const artikelData = [

  // --- ARTIKEL FEATURED (ditampilkan besar di atas) ---
  {
    judul: "Revolusi AI Generatif 2026: Bagaimana AI Mengubah Cara Kita Bekerja",
    ringkasan: "Tahun 2026 menjadi titik balik bagi AI generatif. Dari pembuatan konten otomatis hingga coding assistant, teknologi ini telah mengubah lanskap industri secara fundamental. Pelajari bagaimana Anda bisa memanfaatkannya.",
    gambar: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    kategori: "AI Generatif",
    tag: "ai",
    tanggal: "28 April 2026",
    baca: "8 menit",
    link: "#",
    featured: true
  },

  // --- ARTIKEL BIASA (ditampilkan di grid) ---
  {
    judul: "Panduan Lengkap Machine Learning untuk Pemula",
    ringkasan: "Memahami konsep dasar machine learning, jenis-jenis algoritma, dan bagaimana memulai perjalanan Anda di dunia ML.",
    gambar: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&q=80",
    kategori: "Machine Learning",
    tag: "ml",
    tanggal: "25 April 2026",
    baca: "6 menit",
    link: "#",
    featured: false
  },
  {
    judul: "5 Tools Automation yang Wajib Anda Kuasai di 2026",
    ringkasan: "Dari Zapier hingga n8n, kenali tools automation terbaik yang bisa meningkatkan produktivitas kerja Anda secara drastis.",
    gambar: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80",
    kategori: "Automation",
    tag: "auto",
    tanggal: "22 April 2026",
    baca: "5 menit",
    link: "#",
    featured: false
  },
  {
    judul: "Neural Network: Otak di Balik Kecerdasan Buatan Modern",
    ringkasan: "Pelajari bagaimana neural network bekerja, dari perceptron sederhana hingga arsitektur transformer yang revolusioner.",
    gambar: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    kategori: "Deep Learning",
    tag: "dl",
    tanggal: "20 April 2026",
    baca: "10 menit",
    link: "#",
    featured: false
  },
  {
    judul: "Membangun Chatbot AI untuk Bisnis: Panduan Praktis",
    ringkasan: "Langkah demi langkah membuat chatbot AI yang cerdas untuk meningkatkan layanan pelanggan bisnis Anda.",
    gambar: "https://images.unsplash.com/photo-1531746790095-e5995fef7b01?w=600&q=80",
    kategori: "Chatbot AI",
    tag: "ai",
    tanggal: "18 April 2026",
    baca: "7 menit",
    link: "#",
    featured: false
  },
  {
    judul: "Data Science & AI: Mengolah Data Menjadi Keputusan Cerdas",
    ringkasan: "Bagaimana data science dan AI bekerja bersama untuk menghasilkan insight bisnis yang actionable dan bernilai tinggi.",
    gambar: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    kategori: "Data Science",
    tag: "data",
    tanggal: "15 April 2026",
    baca: "9 menit",
    link: "#",
    featured: false
  },
  {
    judul: "Robotics & AI: Masa Depan Otomasi Industri",
    ringkasan: "Eksplorasi bagaimana robotika yang didukung AI sedang merevolusi manufaktur, logistik, dan berbagai sektor industri.",
    gambar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    kategori: "Robotics",
    tag: "auto",
    tanggal: "12 April 2026",
    baca: "6 menit",
    link: "#",
    featured: false
  }

];
