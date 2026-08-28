export type TrainingPackage = Readonly<{
  nama: string;
  durasi: string;
  harga: string;
  /** Marks the recommended tier — rendered with the highlight token. */
  unggulan?: boolean;
}>;

export type TrainingPricingGroup = Readonly<{
  kategori: string;
  catatan: string;
  paket: readonly TrainingPackage[];
}>;

export const TRAINING_PRICING: readonly TrainingPricingGroup[] = [
  {
    kategori: "Accurate Online",
    catatan: "Untuk pembukuan usaha perdagangan dan jasa",
    paket: [
      { nama: "Paham", durasi: "3 hari", harga: "Rp5.000.000" },
      { nama: "Bisa", durasi: "5 hari", harga: "Rp8.250.000", unggulan: true },
      { nama: "Terampil", durasi: "10 hari", harga: "Rp16.500.000" },
    ],
  },
  {
    kategori: "Accurate Desktop V5",
    catatan: "Untuk tim yang menggunakan versi desktop",
    paket: [
      { nama: "Paham", durasi: "3 hari", harga: "Rp3.450.000" },
      { nama: "Bisa", durasi: "5 hari", harga: "Rp5.700.000", unggulan: true },
      { nama: "Terampil", durasi: "10 hari", harga: "Rp11.400.000" },
    ],
  },
  {
    kategori: "Manufaktur dan Kontraktor",
    catatan: "Materi khusus untuk alur kerja operasional",
    paket: [
      { nama: "Paham", durasi: "5 hari", harga: "Rp7.300.000" },
      { nama: "Bisa", durasi: "10 hari", harga: "Rp14.400.000", unggulan: true },
      { nama: "Terampil", durasi: "20 hari", harga: "Rp27.500.000" },
    ],
  },
] as const;

export type CoursePriceTier = Readonly<{
  peserta: string;
  harga: string;
  keterangan: string;
  /** Marks the best-value tier — rendered with the highlight token. */
  unggulan?: boolean;
}>;

export const COURSE_PRICING: readonly CoursePriceTier[] = [
  { peserta: "1 orang", harga: "Rp1.500.000", keterangan: "Harga reguler" },
  { peserta: "2 orang", harga: "Rp1.000.000", keterangan: "Per orang" },
  { peserta: "3 orang", harga: "Rp800.000", keterangan: "Per orang", unggulan: true },
  { peserta: "5 orang", harga: "Rp700.000", keterangan: "Per orang" },
] as const;

export const TERMS = [
  "Durasi maksimal training 8 jam per hari, termasuk istirahat.",
  "Training pada akhir pekan atau hari libur dikenakan biaya tambahan.",
  "Biaya onsite di luar Jabodetabek dihitung berdasarkan lokasi dan kebutuhan akomodasi.",
  "Harga dan jadwal dapat berubah setelah kebutuhan training dikonfirmasi.",
] as const;

export const ABOUT = {
  intro: "Accurate Pro Academy menyediakan pelatihan software akuntansi untuk pemilik usaha, tim finance, dan akuntan yang ingin membangun proses pembukuan lebih teratur.",
  approach: "Kelas dirancang dengan contoh transaksi dan alur kerja yang dekat dengan kegiatan operasional perusahaan. Peserta tidak hanya mengikuti langkah pada software, tetapi memahami alasan di balik setiap pencatatan.",
  vision: "Membantu lebih banyak tim di Indonesia membangun pembukuan yang tertib melalui penggunaan software dan pemahaman akuntansi yang baik.",
  mission: [
    "Menyediakan materi pelatihan yang dapat diterapkan dalam pekerjaan sehari-hari.",
    "Menghubungkan penggunaan Accurate dengan prinsip pencatatan akuntansi.",
    "Memberikan pendampingan yang bertanggung jawab setelah pelatihan.",
  ],
} as const;
