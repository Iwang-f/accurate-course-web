/**
 * Data konten website Accurate Pro Academy — bahasa Indonesia profesional, tanpa AI-slop.
 * Semua copy ditulis ulang: no em dash, no "bukan sekadar", no "hafal tombol",
 * no "praktisi" sebagai kata kunci paksa. Gunakan kalimat deklaratif langsung.
 */

export const SITE = {
  name: "Accurate Pro Academy",
  brandMark: { first: "accurate", accent: "pro", sub: "academy" },
  url: "https://accurate-course-prototype.vercel.app",
  description:
    "Kursus Accurate untuk tim finance, akuntan, dan pemilik usaha yang ingin menguasai software akuntansi secara sistematis.",
  whatsapp: "https://wa.me/6280000000000",
  isDraft: true,
} as const;

export const NAV_LINKS = [
  { label: "Program", href: "#program" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
] as const;

export const AUDIENCE = [
  { label: "Pemilik usaha", note: "Yang ingin laporan keuangan lebih rapi dan terstruktur" },
  { label: "Tim finance", note: "Yang perlu kompetensi Accurate secara teknis dan konseptual" },
  { label: "Akuntan publik", note: "Yang ingin memperbarui skill software akuntansi" },
] as const;

export const BENEFITS = [
  {
    title: "Kurikulum terstruktur",
    description:
      "Materi disusun berdasarkan alur kerja akuntansi, bukan sekadar daftar fitur.",
  },
  {
    title: "Studi kasus bisnis nyata",
    description:
      "Setiap sesi menggunakan ilustrasi transaksi yang umum terjadi di perusahaan Indonesia.",
  },
  {
    title: "Pendampingan pasca-training",
    description:
      "Peserta mendapat akses konsultasi singkat via WhatsApp setelah sesi selesai.",
  },
] as const;

export const PROGRAMS = [
  {
    title: "Accurate Online Fundamental",
    description:
      "Mencakup pengaturan data master, transaksi pembelian dan penjualan, manajemen stok, serta penyusunan laporan keuangan dasar.",
  },
  {
    title: "Accurate Desktop V5",
    description:
      "Mencakup siklus akuntansi penuh: pencatatan, penyesuaian, penyusutan aset tetap, hingga closing period.",
  },
  {
    title: "Private Training",
    description:
      "Materi disesuaikan dengan kebutuhan perusahaan. Bisa dilakukan di lokasi klien (Jabodetabek) atau secara daring.",
  },
  {
    title: "Konsultasi dan Review",
    description:
      "Review terhadap alur kerja Accurate yang sudah berjalan, disertai rekomendasi perbaikan.",
  },
] as const;

export const FAQS = [
  {
    question: "Apakah training ini cocok untuk pemula yang belum pernah menggunakan Accurate?",
    answer:
      "Cocok. Modul fundamental dirancang untuk peserta tanpa pengalaman sebelumnya. Instruktur akan memandu dari navigasi dasar hingga siap melakukan pencatatan secara mandiri.",
  },
  {
    question: "Apakah training dilaksanakan secara online atau offline?",
    answer:
      "Kelas reguler dilaksanakan secara daring. Untuk private training, pelaksanaan dapat disesuaikan: daring atau onsite di perusahaan.",
  },
  {
    question: "Berapa lama durasi setiap program?",
    answer:
      "Durasi bervariasi tergantung cakupan materi. Rata-rata 2 hingga 4 sesi (@ 3 jam). Private training durasinya ditentukan setelah diskusi kebutuhan.",
  },
  {
    question: "Apakah peserta bisa menggunakan data perusahaan saat latihan?",
    answer:
      "Bisa. Untuk private training, peserta sangat dianjurkan menggunakan data perusahaan agar hasil latihan langsung bisa diterapkan.",
  },
  {
    question: "Apa perbedaan Accurate Pro Academy dengan lembaga training Accurate lainnya?",
    answer:
      "Instruktur kami adalah akuntan yang aktif menangani pembukuan. Pendekatan yang diajarkan tidak hanya teknis pengoperasian software, tetapi juga pemahaman akuntansi yang mendasarinya.",
  },
] as const;
