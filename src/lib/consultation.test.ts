import { test } from "node:test";
import assert from "node:assert/strict";
import { buildConsultationUrl, type ConsultationInquiry } from "./consultation.ts";

const WA_BASE = "https://wa.me/6280000000000";

test("buildConsultationUrl includes every field in the correct order", () => {
  const inquiry: ConsultationInquiry = {
    nama: "Andi",
    perusahaan: "PT Maju",
    jumlah: "3",
    program: "Accurate Online Fundamental",
    kendala: "Laporan sering tidak balance",
  };
  const url = buildConsultationUrl(inquiry, WA_BASE);
  assert.ok(url.startsWith(WA_BASE + "?text="));

  const decoded = decodeURIComponent(url.slice((WA_BASE + "?text=").length));
  assert.ok(decoded.includes("Nama: Andi"), "nama");
  assert.ok(decoded.includes("Perusahaan: PT Maju"), "perusahaan");
  assert.ok(decoded.includes("Jumlah peserta: 3"), "jumlah");
  assert.ok(decoded.includes("Program diminati: Accurate Online Fundamental"), "program");
  assert.ok(decoded.includes("Kendala saat ini: Laporan sering tidak balance"), "kendala");
  assert.ok(decoded.includes("Mohon info lebih lanjut."), "closing");
});

test("buildConsultationUrl replaces empty fields with an em-dash", () => {
  const inquiry: ConsultationInquiry = {
    nama: "Budi",
    perusahaan: "CV Karya",
    jumlah: "",
    program: "",
    kendala: "",
  };
  const url = buildConsultationUrl(inquiry, WA_BASE);
  const decoded = decodeURIComponent(url.slice((WA_BASE + "?text=").length));
  assert.ok(decoded.includes("Jumlah peserta: \u2014"), "empty jumlah → em-dash");
  assert.ok(decoded.includes("Program diminati: \u2014"), "empty program → em-dash");
  assert.ok(decoded.includes("Kendala saat ini: \u2014"), "empty kendala → em-dash");
});

test("buildConsultationUrl URL-encodes special characters", () => {
  const inquiry: ConsultationInquiry = {
    nama: "Iwang & Tim",
    perusahaan: "PT Maju Jaya",
    jumlah: "",
    program: "",
    kendala: "Biaya & waktu?",
  };
  const url = buildConsultationUrl(inquiry, WA_BASE);
  assert.ok(url.includes("%26"), "ampersand encoded");
  assert.ok(url.includes("%3F"), "question mark encoded");
  assert.ok(url.includes("%20"), "space encoded");
});

test("buildConsultationUrl accepts a custom base URL", () => {
  const custom = "https://wa.me/628123456789";
  const inquiry: ConsultationInquiry = { nama: "X", perusahaan: "Y", jumlah: "", program: "", kendala: "" };
  const url = buildConsultationUrl(inquiry, custom);
  assert.ok(url.startsWith(custom + "?text="));
});

test("buildConsultationUrl full message snapshot", () => {
  const inquiry: ConsultationInquiry = {
    nama: "Citra",
    perusahaan: "PT Sejahtera",
    jumlah: "5",
    program: "Accurate Desktop V5",
    kendala: "Closing period tidak pernah selesai tepat waktu",
  };
  const url = buildConsultationUrl(inquiry, WA_BASE);
  const decoded = decodeURIComponent(url.slice((WA_BASE + "?text=").length));

  const expected = [
    "Halo, saya ingin konsultasi program training Accurate.\n",
    "Nama: Citra",
    "Perusahaan: PT Sejahtera",
    "Jumlah peserta: 5",
    "Program diminati: Accurate Desktop V5",
    "Kendala saat ini: Closing period tidak pernah selesai tepat waktu",
    "",
    "Mohon info lebih lanjut.",
  ].join("\n");

  assert.equal(decoded, expected);
});
