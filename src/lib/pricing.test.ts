import { test } from "node:test";
import assert from "node:assert/strict";
import {
  getTrainingPricing,
  getRecommendedPackage,
  getRecommendedPackages,
  getCoursePricing,
  getBestValueTier,
  getTerms,
} from "./pricing.ts";

test("getTrainingPricing returns every category", () => {
  const groups = getTrainingPricing();
  assert.equal(groups.length, 3);
  assert.deepEqual(
    groups.map((g) => g.kategori),
    ["Accurate Online", "Accurate Desktop V5", "Manufaktur dan Kontraktor"],
  );
});

test("every training group has exactly one recommended package", () => {
  for (const group of getTrainingPricing()) {
    const flagged = group.paket.filter((p) => p.unggulan);
    assert.equal(flagged.length, 1, `${group.kategori} must flag exactly one package`);
  }
});

test("getRecommendedPackage finds the flagged package by category", () => {
  const paket = getRecommendedPackage("Accurate Desktop V5");
  assert.ok(paket, "expected a recommended package");
  assert.equal(paket.nama, "Bisa");
  assert.equal(paket.harga, "Rp5.700.000");
});

test("getRecommendedPackage returns undefined for an unknown category", () => {
  assert.equal(getRecommendedPackage("Tidak Ada"), undefined);
});

test("getRecommendedPackages returns one entry per category", () => {
  const recommended = getRecommendedPackages();
  assert.equal(recommended.length, getTrainingPricing().length);
  for (const entry of recommended) {
    assert.equal(entry.paket.unggulan, true);
  }
});

test("getCoursePricing tiers get cheaper as the group grows", () => {
  const tiers = getCoursePricing();
  assert.ok(tiers.length > 1);
  const numeric = tiers.map((t) => Number(t.harga.replace(/\D/g, "")));
  for (let i = 1; i < numeric.length; i += 1) {
    const prev = numeric[i - 1];
    const current = numeric[i];
    assert.ok(prev !== undefined && current !== undefined);
    assert.ok(current < prev, `tier ${i} (${current}) should undercut tier ${i - 1} (${prev})`);
  }
});

test("getBestValueTier returns the single flagged tier", () => {
  const flagged = getCoursePricing().filter((t) => t.unggulan);
  assert.equal(flagged.length, 1);
  assert.equal(getBestValueTier()?.peserta, "3 orang");
});

test("getTerms returns non-empty strings", () => {
  const terms = getTerms();
  assert.ok(terms.length > 0);
  for (const term of terms) {
    assert.equal(typeof term, "string");
    assert.ok(term.trim().length > 0);
  }
});
