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

/** @deprecated Use getTrainingPricing() instead. */
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

/** @deprecated Use getCoursePricing() instead. */
export const COURSE_PRICING: readonly CoursePriceTier[] = [
  { peserta: "1 orang", harga: "Rp1.500.000", keterangan: "Harga reguler" },
  { peserta: "2 orang", harga: "Rp1.000.000", keterangan: "Per orang" },
  { peserta: "3 orang", harga: "Rp800.000", keterangan: "Per orang", unggulan: true },
  { peserta: "5 orang", harga: "Rp700.000", keterangan: "Per orang" },
] as const;

/** @deprecated Use getTerms() instead. */
export const TERMS = [
  "Durasi maksimal training 8 jam per hari, termasuk istirahat.",
  "Training pada akhir pekan atau hari libur dikenakan biaya tambahan.",
  "Biaya onsite di luar Jabodetabek dihitung berdasarkan lokasi dan kebutuhan akomodasi.",
  "Harga dan jadwal dapat berubah setelah kebutuhan training dikonfirmasi.",
] as const;

/* ------------------------------------------------------------------ *
 * Accessor seam
 *
 * Callers cross this interface instead of reaching into the raw arrays
 * above. Every pricing query lives here, so the filter logic is written
 * and tested once rather than repeated per call site.
 * ------------------------------------------------------------------ */

/** All training pricing groups, in display order. */
export function getTrainingPricing(): readonly TrainingPricingGroup[] {
  return TRAINING_PRICING;
}

/** The recommended package for one category, or undefined if none is flagged. */
export function getRecommendedPackage(kategori: string): TrainingPackage | undefined {
  return TRAINING_PRICING.find((group) => group.kategori === kategori)?.paket.find((p) => p.unggulan);
}

/** Every recommended package, paired with the category it belongs to. */
export function getRecommendedPackages(): readonly Readonly<{
  kategori: string;
  paket: TrainingPackage;
}>[] {
  return TRAINING_PRICING.flatMap((group) => {
    const paket = group.paket.find((p) => p.unggulan);
    return paket ? [{ kategori: group.kategori, paket }] : [];
  });
}

/** All per-person course price tiers, cheapest last. */
export function getCoursePricing(): readonly CoursePriceTier[] {
  return COURSE_PRICING;
}

/** The best-value per-person tier, or undefined if none is flagged. */
export function getBestValueTier(): CoursePriceTier | undefined {
  return COURSE_PRICING.find((tier) => tier.unggulan);
}

/** Terms that apply to every training engagement. */
export function getTerms(): readonly string[] {
  return TERMS;
}

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
