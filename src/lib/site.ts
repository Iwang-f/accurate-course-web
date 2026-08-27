/**
 * Data konten website Accurate Pro Academy
 * Satu sumber kebenaran — ganti konten di sini, render otomatis ke semua komponen.
 *
 * DRAFT: Beberapa nilai placeholder (WA number, URL) harus diganti sebelum go-live.
 */

export const SITE = {
  name: "Accurate Pro Academy",
  subline: "akademi",
  url: "https://accurate-course-prototype.vercel.app",
  description: "Kursus Accurate untuk tim finance, akuntan, dan pemilik usaha yang ingin menguasai software akuntansi secara sistematis.",
  keywords: ["kursus Accurate", "training Accurate", "akuntansi", "Accurate Online", "Accurate Desktop V5"],
  whatsapp: "https://wa.me/6280000000000",
  isDraft: true,
} as const;

export const NAV = [
  { label: "Beranda", href: "/" },
  { label: "Program", href: "/program" },
  { label: "Harga Training", href: "/harga" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
] as const;

/** Shared shape for card-style content blocks (target audience, programs). */
export type Topic = Readonly<{ judul: string; isi: string }>;

export const TARGET: readonly Topic[] = [
  { judul: "Pemilik Usaha", isi: "Membutuhkan laporan keuangan yang rapi dan terstruktur tanpa harus menjadi akuntan." },
  { judul: "Tim Finance", isi: "Ingin memperkuat kompetensi Accurate secara teknis sekaligus konseptual." },
  { judul: "Akuntan Publik", isi: "Perlu memperbarui keterampilan software akuntansi untuk menunjang pekerjaan klien." },
] as const;

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
    judul: "Konsultasi & Review",
    isi: "Evaluasi alur kerja Accurate yang telah berjalan, identifikasi perbaikan, serta rekomendasi untuk optimalisasi proses akuntansi.",
    durasi: "3–5 hari kerja",
    harga: "Hubungi untuk penawaran",
  },
] as const;

export const KEUNGGULAN = [
  { judul: "Kurikulum Berbasis Praktik", isi: "Materi mengikuti alur kerja akuntansi harian, bukan daftar menu software." },
  { judul: "Studi Kasus Perusahaan Indonesia", isi: "Contoh transaksi dan pelaporan yang relevan dengan regulasi dan kebiasaan bisnis lokal." },
  { judul: "Pendampingan Setelah Kelas", isi: "Peserta mendapatkan akses konsultasi singkat via WhatsApp pasca-training." },
] as const;

export const PROGRAM: readonly Topic[] = [
  { judul: "Accurate Online Fundamental", isi: "Mencakup pembuatan data master, transaksi pembelian dan penjualan, manajemen stok, serta penyusunan laporan keuangan dasar." },
  { judul: "Accurate Desktop V5", isi: "Meliputi siklus akuntansi penuh: pencatatan jurnal, penyesuaian, penyusutan aset tetap, hingga closing period." },
  { judul: "Private Training", isi: "Kurikulum disesuaikan dengan kebutuhan perusahaan. Dapat dilaksanakan di lokasi (Jabodetabek) atau secara daring." },
  { judul: "Konsultasi dan Review", isi: "Evaluasi terhadap alur kerja Accurate yang telah berjalan, disertai rekomendasi perbaikan." },
] as const;

export const FAQ = [
  { tanya: "Apakah program ini cocok untuk pemula yang belum pernah menggunakan Accurate?", jawab: "Cocok. Modul fundamental dirancang untuk peserta tanpa pengalaman sebelumnya. Instruktur akan membimbing dari navigasi dasar hingga peserta mampu melakukan pencatatan secara mandiri." },
  { tanya: "Bagaimana pelaksanaan training: online atau offline?", jawab: "Kelas reguler dilaksanakan secara daring. Untuk Private Training, format dapat disesuaikan: daring atau onsite di perusahaan." },
  { tanya: "Berapa lama durasi setiap program?", jawab: "Bergantung pada cakupan materi. Rata-rata 2 hingga 4 sesi (masing-masing 3 jam). Untuk Private Training, durasi ditentukan setelah diskusi kebutuhan." },
  { tanya: "Apakah peserta dapat menggunakan data perusahaannya saat latihan?", jawab: "Sangat dianjurkan, khususnya untuk Private Training. Latihan dengan data nyata membuat hasil langsung dapat diterapkan." },
  { tanya: "Apa yang membedakan Accurate Pro Academy dari lembaga training Accurate lain?", jawab: "Instruktur adalah akuntan yang aktif menangani pembukuan klien. Pendekatan yang diajarkan tidak hanya teknis software, tetapi juga pemahaman akuntansi yang mendasarinya." },
] as const;
