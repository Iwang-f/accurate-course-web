/**
 * Data konten website Accurate Pro Academy
 * Satu sumber kebenaran — ganti konten di sini, render otomatis ke semua komponen.
 *
 * DRAFT: Beberapa nilai placeholder (WA number, URL) harus diganti sebelum go-live.
 */

/** @deprecated Use getSite() instead. */
export const SITE = {
  name: "Accurate Pro Academy",
  subline: "akademi",
  url: "https://accurate-course-prototype.vercel.app",
  description: "Kursus Accurate untuk tim finance, akuntan, dan pemilik usaha yang ingin menguasai software akuntansi secara sistematis.",
  keywords: ["kursus Accurate", "training Accurate", "akuntansi", "Accurate Online", "Accurate Desktop V5"],
  whatsapp: "https://wa.me/6280000000000",
  heroVideo: "", // draft: client screen recording URL or /media/accurate-walkthrough.mp4
  heroVideoPoster: "", // draft: poster image URL or /media/accurate-walkthrough.webp
  isDraft: true,
} as const;

/** @deprecated Use getNav() instead. */
export const NAV = [
  { label: "Beranda", href: "/" },
  { label: "Program", href: "/program" },
  { label: "Harga Training", href: "/harga" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
] as const;

/** Shared shape for card-style content blocks (target audience, programs). */
export type Topic = Readonly<{ judul: string; isi: string }>;

/** @deprecated Use getTargets() instead. */
export const TARGET: readonly Topic[] = [
  { judul: "Pemilik Usaha", isi: "Membutuhkan laporan keuangan yang rapi dan terstruktur tanpa harus menjadi akuntan." },
  { judul: "Tim Finance", isi: "Ingin memperkuat kompetensi Accurate secara teknis sekaligus konseptual." },
  { judul: "Akuntan Publik", isi: "Perlu memperbarui keterampilan software akuntansi untuk menunjang pekerjaan klien." },
] as const;

/** @deprecated Use getTrainer() instead. */
export const TRAINER = {
  nama: "Iwang Fadillo",
  jabatan: "Akuntan Praktisi",
  deskripsi:
    "Berpengalaman menangani pembukuan berbagai skala usaha. Pendekatan training berdasarkan transaksi nyata, bukan tutorial menu. Memahami alur akuntansi dari input jurnal hingga laporan keuangan siap saji.",
  foto: null, // placeholder — ganti URL foto setelah produksi
} as const;

export type ProgramItem = Readonly<{
  kategori: "kelas" | "layanan";
  judul: string;
  isi: string;
  durasi: string;
  harga: string;
}>;

/** @deprecated Use getProgramItems() instead. */
export const PROGRAM_ITEMS: readonly ProgramItem[] = [
  {
    kategori: "kelas",
    judul: "Accurate Online Fundamental",
    isi: "Pencatatan transaksi, manajemen stok, piutang/utang, dan penyusunan laporan keuangan dasar menggunakan Accurate Online.",
    durasi: "2–3 sesi @ 3 jam",
    harga: "Rp 750.000/orang",
  },
  {
    kategori: "kelas",
    judul: "Accurate Desktop V5",
    isi: "Siklus akuntansi penuh: jurnal umum, penyesuaian, penyusutan aset tetap, penutupan periode, dan laporan keuangan.",
    durasi: "3–4 sesi @ 3 jam",
    harga: "Rp 1.200.000/orang",
  },
  {
    kategori: "layanan",
    judul: "Private Training",
    isi: "Kurikulum disesuaikan dengan kebutuhan perusahaan. Dapat dilaksanakan onsite (Jabodetabek) atau daring durasi ditentukan setelah diskusi kebutuhan.",
    durasi: "Disesuaikan",
    harga: "Hubungi untuk penawaran",
  },
  {
    kategori: "layanan",
    judul: "Konsultasi dan Review",
    isi: "Evaluasi alur kerja Accurate yang telah berjalan, identifikasi perbaikan, serta rekomendasi untuk optimalisasi proses akuntansi.",
    durasi: "3–5 hari kerja",
    harga: "Hubungi untuk penawaran",
  },
] as const;

/** @deprecated Use getKeunggulan() instead. */
export const KEUNGGULAN = [
  { judul: "Kurikulum Berbasis Praktik", isi: "Materi mengikuti alur kerja akuntansi harian, bukan daftar menu software." },
  { judul: "Studi Kasus Perusahaan Indonesia", isi: "Contoh transaksi dan pelaporan yang relevan dengan regulasi dan kebiasaan bisnis lokal." },
  { judul: "Pendampingan Setelah Kelas", isi: "Peserta mendapatkan akses konsultasi singkat via WhatsApp pasca-training." },
] as const;

/** V2.4 — what participants get (benefit cards, FAC-inspired). */
export const BENEFITS: readonly Topic[] = [
  {
    judul: "Sertifikat resmi",
    isi: "Setiap peserta mendapat sertifikat dari Accurate Pro Academy sebagai bukti menyelesaikan pelatihan.",
  },
  {
    judul: "Pendampingan pasca-training",
    isi: "Masih bingung setelah kelas selesai? Tanyakan lewat WhatsApp, kami bantu sampai benar.",
  },
  {
    judul: "Modul praktis",
    isi: "Materi mengikuti versi Accurate terbaru dan workflow perusahaan Indonesia, bukan daftar menu software.",
  },
  {
    judul: "Jadwal fleksibel",
    isi: "Onsite Jabodetabek atau daring. Jam pelatihan menyesuaikan ritme kerja tim Anda.",
  },
] as const;

/** V2 — pain points (dari pola Ultimate Framer Course). */
/** @deprecated Use getPain() instead. */
export const PAIN: readonly Topic[] = [
  {
    judul: "Laporan masih manual di Excel",
    isi: "Anda rekap pembukuan berjam-jam tiap bulan. Salah ketik satu angka, audit langsung macet.",
  },
  {
    judul: "Sudah pakai Accurate tapi asal-asalan",
    isi: "Software sudah terpasang. Tapi jurnal tertunda, stok tak cocok, closing bermasalah. Laporan jadi ragu.",
  },
  {
    judul: "Ingin menaikkan tarif ke klien",
    isi: "Anda sulit menaikkan tarif. Pembukuan Anda belum rapi, klien tak melihat nilai Anda.",
  },
] as const;

/** V2 — outcomes (pola Ultimate Framer Course "By the end you will"). */
/** @deprecated Use getOutcomes() instead. */
export const OUTCOMES: readonly Topic[] = [
  {
    judul: "Menyusun laporan keuangan sendiri",
    isi: "Anda input jurnal sampai laporan keuangan jadi. Laba rugi dan neraca keluar tanpa bantuan orang lain.",
  },
  {
    judul: "Menutup periode tanpa panik",
    isi: "Jurnal penyesuaian, penyusutan, lalu closing. Alurnya berurutan dan terdokumentasi tiap bulan.",
  },
  {
    judul: "Melayani klien lebih profesional",
    isi: "Pembukuan klien Anda rapi dan siap audit. Tarif naik karena hasil kerja Anda terlihat.",
  },
] as const;

/** V2 — social proof. PLACEHOLDER: wajib diganti data asli klien sebelum go-live. */
/** @deprecated Use getTestimoni() instead. */
export const TESTIMONI: readonly {
  nama: string;
  jabatan: string;
  perusahaan: string;
  isi: string;
}[] = [
  {
    nama: "Nama Peserta 1",
    jabatan: "Staf Finance",
    perusahaan: "Perusahaan Dagang",
    isi: "Dulu laporan bulanan saya selesai seminggu. Sekarang dua hari. Alur dari kelas langsung saya pakai di kerjaan.",
  },
  {
    nama: "Nama Peserta 2",
    jabatan: "Pemilik Usaha",
    perusahaan: "Toko Retail",
    isi: "Dulu saya bayar orang luar untuk pembukuan. Sekarang stok dan piutang saya pantau sendiri dari Accurate.",
  },
  {
    nama: "Nama Peserta 3",
    jabatan: "Konsultan Pajak",
    perusahaan: "Kantor Konsultan",
    isi: "Latihannya pakai studi kasus nyata, bukan menu demo. Besoknya langsung saya pakai untuk klien.",
  },
] as const;

/** V2 — silabus per program, dipakai accordion curriculum. */
/** @deprecated Use getModul() instead. */
export const MODUL: Readonly<Record<string, readonly string[]>> = {
  "Accurate Online Fundamental": [
    "Setup perusahaan, data master, dan akun perkiraan",
    "Transaksi pembelian & penjualan, manajemen stok",
    "Piutang, utang, dan rekonsiliasi bank",
    "Penyusunan laporan keuangan dasar",
  ],
  "Accurate Desktop V5": [
    "Siklus akuntansi penuh: jurnal umum & buku besar",
    "Jurnal penyesuaian dan penyusutan aset tetap",
    "Penutupan periode dan laporan keuangan",
    "Review alur kerja dan praktik terbaik",
  ],
  "Private Training": [
    "Kurikulum disesuaikan dengan kebutuhan perusahaan",
    "Onsite (Jabodetabek) atau daring",
    "Latihan dengan data perusahaan peserta",
    "Durasi ditentukan setelah diskusi kebutuhan",
  ],
  "Konsultasi dan Review": [
    "Evaluasi alur kerja Accurate yang berjalan",
    "Identifikasi kesalahan pencatatan dan perbaikan",
    "Rekomendasi optimalisasi proses akuntansi",
  ],
} as const;

/** V2 — trust strip di hero. PLACEHOLDER angka: wajib ganti data asli sebelum go-live. */
/** @deprecated Use getTrust() instead. */
export const TRUST: readonly { angka: string; label: string }[] = [
  { angka: "100+", label: "peserta mengikuti pelatihan" },
  { angka: "5+", label: "perusahaan mitra" },
  { angka: "98%", label: "peserta puas" },
] as const;

/** V2.1 — marquee wordmark list for the trust strip below the hero. PLACEHOLDER. */
/** @deprecated Use getMarqueeItems() instead. */
export const MARQUEE_ITEMS: readonly string[] = [
  "Accurate Online",
  "Accurate Desktop V5",
  "Akuntansi Dagang",
  "Manufaktur",
  "Jasa",
  "Retail",
  "Konsultan",
  "Ekspor Impor",
] as const;

/** V2.1 — big stat statement section (SayBriefly pattern). PLACEHOLDER angka. */
/** @deprecated Use getBigStat() instead. */
export const BIG_STAT = {
  angka: "10+",
  judul: "jam dihabiskan tiap bulan untuk rekap pembukuan manual",
  isi: "Tim finance tiga orang bisa menghabiskan 30 jam kerja untuk rekap. Anda bisa memakai waktu itu untuk membaca laporan.",
} as const;

/** V2.1 — comparison table (SayBriefly pattern). PLACEHOLDER criteria. */
/** @deprecated Use getComparison() instead. */
export const COMPARISON: readonly {
  aspek: string;
  accuratePro: string;
  lainnya: string;
}[] = [
  { aspek: "Instruktur yang aktif menangani pembukuan", accuratePro: "Ya", lainnya: "Jarang" },
  { aspek: "Latihan pakai transaksi nyata, bukan demo", accuratePro: "Ya", lainnya: "Tutorial menu" },
  { aspek: "Pendampingan setelah kelas lewat WhatsApp", accuratePro: "Termasuk", lainnya: "Tidak" },
  { aspek: "Bisa pakai data perusahaan sendiri waktu latihan", accuratePro: "Dianjurkan", lainnya: "Berdasarkan jadwal" },
  { aspek: "Sertifikat penyelesaian", accuratePro: "Ya", lainnya: "Tergantung" },
] as const;

/** V2.1 — chapter numbering metadata per program. */
const CHAPTER_NUM: Readonly<Record<string, string>> = {
  "Accurate Online Fundamental": "1",
  "Accurate Desktop V5": "2",
  "Private Training": "3",
  "Konsultasi dan Review": "4",
};

/** @deprecated Use getPrograms() instead. */
export const PROGRAM: readonly Topic[] = [
  { judul: "Accurate Online Fundamental", isi: "Mencakup pembuatan data master, transaksi pembelian dan penjualan, manajemen stok, serta penyusunan laporan keuangan dasar." },
  { judul: "Accurate Desktop V5", isi: "Meliputi siklus akuntansi penuh: pencatatan jurnal, penyesuaian, penyusutan aset tetap, hingga closing period." },
  { judul: "Private Training", isi: "Kurikulum disesuaikan dengan kebutuhan perusahaan. Dapat dilaksanakan di lokasi (Jabodetabek) atau secara daring." },
  { judul: "Konsultasi dan Review", isi: "Evaluasi terhadap alur kerja Accurate yang telah berjalan, disertai rekomendasi perbaikan." },
] as const;

/** @deprecated Use getFaq() instead. */
export const FAQ = [
  { tanya: "Apakah program ini cocok untuk pemula yang belum pernah menggunakan Accurate?", jawab: "Cocok. Anda mulai dari nol: setup perusahaan, lalu input jurnal sampai laporan keuangan jadi. Instruktur membimbing sampai Anda bisa pencatatan sendiri." },
  { tanya: "Bagaimana pelaksanaan training: online atau offline?", jawab: "Kelas reguler berjalan daring. Untuk Private Training, Anda bisa pilih daring atau onsite di kantor Anda." },
  { tanya: "Berapa lama durasi setiap program?", jawab: "Rata-rata 2 sampai 4 sesi, masing-masing tiga jam. Untuk Private Training, durasi menyesuaikan kebutuhan perusahaan Anda." },
  { tanya: "Apakah peserta dapat menggunakan data perusahaannya saat latihan?", jawab: "Sangat dianjurkan, terutama untuk Private Training. Anda latihan dengan data nyata, jadi hasilnya langsung Anda pakai di kantor." },
  { tanya: "Apa yang membedakan Accurate Pro Academy dari lembaga training Accurate lain?", jawab: "Instruktur akuntan yang masih aktif menangani pembukuan klien. Anda belajar alur kerja akuntansi, bukan sekadar menghafal menu software." },
] as const;

/* ------------------------------------------------------------------ *
 * Accessor seam
 *
 * Callers cross this interface instead of importing individual data
 * constants. Each accessor documents the query it answers; the raw
 * arrays above stay internal to this module.
 * ------------------------------------------------------------------ */

/** Site-wide configuration (brand, URL, WhatsApp, draft flag). */
export function getSite() {
  return SITE;
}

/** Navigation items for header and footer, in display order. */
export function getNav() {
  return NAV;
}

/** Audience segments the courses target. */
export function getTargets() {
  return TARGET;
}

/** Trainer profile for the about/program pages. */
export function getTrainer() {
  return TRAINER;
}

/** Full program catalogue, mixing classes and services. */
export function getProgramItems() {
  return PROGRAM_ITEMS;
}

/** Program catalogue filtered to classes only (kategori === "kelas"). */
export function getClasses() {
  return PROGRAM_ITEMS.filter((item) => item.kategori === "kelas");
}

/** Program catalogue filtered to services only (kategori === "layanan"). */
export function getServices() {
  return PROGRAM_ITEMS.filter((item) => item.kategori === "layanan");
}

/** Teaching differentiators, used by the home approach section. */
export function getKeunggulan() {
  return KEUNGGULAN;
}

/** Pain points the course addresses. */
export function getPain() {
  return PAIN;
}

/** Outcomes a participant can expect after the course. */
export function getOutcomes() {
  return OUTCOMES;
}

/** Social proof testimonials. PLACEHOLDER — replace with real data before go-live. */
export function getTestimoni() {
  return TESTIMONI;
}

/** Curriculum module lists, keyed by program title. */
export function getModul() {
  return MODUL;
}

/** Trust-strip statistics. PLACEHOLDER — replace with real data before go-live. */
export function getTrust() {
  return TRUST;
}

/** Short-form program list used for cards and dropdowns. */
export function getPrograms() {
  return PROGRAM;
}

/** Frequently asked questions. */
export function getFaq() {
  return FAQ;
}

/** The class most commonly taken (first class in the catalogue), for hero highlights. */
export function getFeaturedClass() {
  return PROGRAM_ITEMS.find((item) => item.kategori === "kelas");
}

/** V2.1 — marquee wordmarks for the trust strip below the hero. */
export function getMarqueeItems() {
  return MARQUEE_ITEMS;
}

/** V2.4 — benefit cards for the "Apa yang Anda dapat" section. */
export function getBenefits() {
  return BENEFITS;
}

/** V2.1 — big stat statement for the mid-page section. */
export function getBigStat() {
  return BIG_STAT;
}

/** V2.1 — comparison table rows. */
export function getComparison() {
  return COMPARISON;
}

/** V2.1 — chapter number for a program, e.g. "1.2" for module 2 of program 1. */
export function getChapterNumber(program: string, moduleIdx: number): string {
  return `${CHAPTER_NUM[program] ?? "?"}.${moduleIdx + 1}`;
}
