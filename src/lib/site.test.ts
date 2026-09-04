import { test } from "node:test";
import assert from "node:assert/strict";
import {
  getNav,
  getTargets,
  getTrainer,
  getProgramItems,
  getClasses,
  getServices,
  getFeaturedClass,
  getKeunggulan,
  getPain,
  getOutcomes,
  getTestimoni,
  getModul,
  getTrust,
  getPrograms,
  getFaq,
  getMarqueeItems,
  getBenefits,
  getBigStat,
  getComparison,
  getChapterNumber,
} from "./site.ts";

test("getNav returns 5 navigation items with label and href", () => {
  const nav = getNav();
  assert.equal(nav.length, 5);
  for (const item of nav) {
    assert.ok(item.label, "missing label");
    assert.ok(item.href.startsWith("/"), "href must start with /");
  }
});

test("getTargets returns 3 audience segments", () => {
  const targets = getTargets();
  assert.equal(targets.length, 3);
  for (const t of targets) {
    assert.ok(t.judul);
    assert.ok(t.isi);
  }
});

test("getTrainer has name, jabatan, and deskripsi", () => {
  const t = getTrainer();
  assert.ok(t.nama);
  assert.ok(t.jabatan);
  assert.ok(t.deskripsi.length > 50);
});

test("getProgramItems returns 4 items", () => {
  const items = getProgramItems();
  assert.equal(items.length, 4);
  for (const item of items) {
    assert.ok(item.kategori === "kelas" || item.kategori === "layanan");
    assert.ok(item.judul);
    assert.ok(item.isi);
    assert.ok(item.durasi);
    assert.ok(item.harga);
  }
});

test("getClasses returns only kelas items", () => {
  const classes = getClasses();
  assert.equal(classes.length, 2);
  for (const c of classes) {
    assert.equal(c.kategori, "kelas");
  }
});

test("getServices returns only layanan items", () => {
  const services = getServices();
  assert.equal(services.length, 2);
  for (const s of services) {
    assert.equal(s.kategori, "layanan");
  }
});

test("classes and services partition the full catalogue", () => {
  assert.equal(getClasses().length + getServices().length, getProgramItems().length);
});

test("getFeaturedClass returns the first class", () => {
  const featured = getFeaturedClass();
  assert.ok(featured, "expected a featured class");
  assert.equal(featured.kategori, "kelas");
  assert.equal(featured.judul, "Accurate Online Fundamental");
});

test("every program item title has a matching MODUL key", () => {
  const items = getProgramItems();
  const modul = getModul();
  for (const item of items) {
    const m = modul[item.judul];
    assert.ok(m, `missing MODUL key for program: "${item.judul}"`);
    assert.ok(m!.length > 0, `empty MODUL for: "${item.judul}"`);
  }
});

test("getPrograms titles match getProgramItems titles", () => {
  const programs = getPrograms();
  const items = getProgramItems();
  const programTitles = programs.map((p) => p.judul).sort();
  const itemTitles = items.map((i) => i.judul).sort();
  assert.deepEqual(programTitles, itemTitles);
});

test("getKeunggulan returns 3 differentiators", () => {
  assert.equal(getKeunggulan().length, 3);
});

test("getPain returns 3 pain points", () => {
  assert.equal(getPain().length, 3);
});

test("getOutcomes returns 3 outcomes", () => {
  assert.equal(getOutcomes().length, 3);
});

test("getTestimoni returns 3 entries with nama, jabatan, perusahaan, isi", () => {
  const t = getTestimoni();
  assert.equal(t.length, 3);
  for (const e of t) {
    assert.ok(e.nama);
    assert.ok(e.jabatan);
    assert.ok(e.perusahaan);
    assert.ok(e.isi);
  }
});

test("getTrust returns 3 stats with angka and label", () => {
  const trust = getTrust();
  assert.equal(trust.length, 3);
  for (const t of trust) {
    assert.ok(t.angka);
    assert.ok(t.label);
  }
});

test("getFaq returns 5 questions with tanya and jawab", () => {
  const faq = getFaq();
  assert.equal(faq.length, 5);
  for (const f of faq) {
    assert.ok(f.tanya);
    assert.ok(f.jawab.length > 30);
  }
});

test("getMarqueeItems returns non-empty wordmarks", () => {
  const items = getMarqueeItems();
  assert.ok(items.length >= 4);
  for (const i of items) assert.ok(i.length > 0);
});

test("getBenefits returns 4 entries with judul and isi", () => {
  const benefits = getBenefits();
  assert.equal(benefits.length, 4);
  for (const b of benefits) {
    assert.ok(b.judul);
    assert.ok(b.isi.length > 20);
  }
});

test("getBigStat has angka, judul, isi", () => {
  const s = getBigStat();
  assert.ok(s.angka);
  assert.ok(s.judul);
  assert.ok(s.isi.length > 30);
});

test("getComparison rows have all three columns filled", () => {
  const rows = getComparison();
  assert.ok(rows.length >= 3);
  for (const r of rows) {
    assert.ok(r.aspek);
    assert.ok(r.accuratePro);
    assert.ok(r.lainnya);
  }
});

test("getChapterNumber formats program.module correctly", () => {
  assert.equal(getChapterNumber("Accurate Online Fundamental", 0), "1.1");
  assert.equal(getChapterNumber("Accurate Desktop V5", 3), "2.4");
  assert.equal(getChapterNumber("Unknown Program", 1), "?.2");
});
