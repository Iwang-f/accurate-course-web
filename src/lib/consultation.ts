/**
 * Consultation domain — form submission for the contact page.
 *
 * The only seam: buildConsultationUrl() produces a WhatsApp deep-link
 * from a ConsultationInquiry object. The URL is then opened in a new
 * tab by the page component (which owns the window reference).
 */

/** Shape of a consultation request submitted through the contact form. */
export type ConsultationInquiry = Readonly<{
  /** Full name (required). */
  nama: string;
  /** Company name (required). */
  perusahaan: string;
  /** Number of participants — optional, rendered as "—" when empty. */
  jumlah: string;
  /** Preferred program — optional, rendered as "—" when empty. */
  program: string;
  /** Current pain point — optional, rendered as "—" when empty. */
  kendala: string;
}>;

/**
 * Build a WhatsApp deep-link URL from a consultation inquiry.
 *
 * The message body follows a fixed format — all field values are
 * interpolated as-is; missing fields render as an em-dash.
 *
 * @example
 * ```ts
 * buildConsultationUrl({
 *   nama: "Andi",
 *   perusahaan: "PT Maju",
 *   jumlah: "3",
 *   program: "Accurate Online Fundamental",
 *   kendala: "",
 * })
 * // → "https://wa.me/6280000000000?text=..."
 * ```
 */
export function buildConsultationUrl(
  inquiry: ConsultationInquiry,
  waBase: string,
): string {
  const fallback = (v: string) => (v.trim() ? v : "—");
  const msg = [
    "Halo, saya ingin konsultasi program training Accurate.\n",
    `Nama: ${inquiry.nama}`,
    `Perusahaan: ${inquiry.perusahaan}`,
    `Jumlah peserta: ${fallback(inquiry.jumlah)}`,
    `Program diminati: ${fallback(inquiry.program)}`,
    `Kendala saat ini: ${fallback(inquiry.kendala)}`,
    "",
    "Mohon info lebih lanjut.",
  ].join("\n");

  return `${waBase}?text=${encodeURIComponent(msg)}`;
}
