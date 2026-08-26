# Multi-Page Structure Implementation Plan

> **For Hermes:** Execute task-by-task. Verify each with `npm run check`.

**Goal:** Convert the single-page prototype into a 3-page site (Beranda, Harga Training, Tentang Kami) modeled on the competitor's information architecture.

**Architecture:** Next.js App Router static export. One shared layout with Header/Footer. Content lives in `src/lib/site.ts` as typed const data. No client state except the mobile Sheet.

**Tech Stack:** Next.js 16, TypeScript strict, Tailwind v4, shadcn/ui (base-nova), Geist font.

**Reference (competitor: solusiakuntansiindonesia.com):**
- Nav: Layanan, Harga Training, Kursus Accurate, Tentang Kami, Tutorial
- Pricing model: tiered packages by duration (Paham 3d / Bisa 5d / Terampil 10d), separate Online vs Desktop, separate Manufaktur variant
- Course pricing: per person with group discounts (2/3/5 people)
- Terms section: max 8h/day, weekend surcharge, transport fee per city
- About: company profile, visi, misi, partner statement

---

## Task 1: Extend data layer with pricing + about content

**Objective:** Add `PRICING`, `KURSUS_PRICING`, `TERMS`, `ABOUT` to the data layer.

**Files:**
- Modify: `src/lib/site.ts`

**Step 1:** Append typed const exports. Keep all figures clearly DRAFT.

**Step 2:** Run `npm run typecheck`. Expected: exit 0.

**Step 3:** Commit.

---

## Task 2: Extract Footer into a shared component

**Objective:** Footer currently inlined in `page.tsx`. Move to `src/components/footer.tsx` so all pages share it.

**Files:**
- Create: `src/components/footer.tsx`
- Modify: `src/app/layout.tsx` (render Header + children + Footer)
- Modify: `src/app/page.tsx` (remove inlined Header/Footer)

**Step 1:** Create Footer with contact block, nav links, draft notice.

**Step 2:** Move `<Header />` and `<Footer />` into layout.

**Step 3:** Run `npm run check`. Expected: exit 0, routes still static.

**Step 4:** Commit.

---

## Task 3: Update navigation to multi-page routes

**Objective:** Nav points to real routes, not hash anchors.

**Files:**
- Modify: `src/lib/site.ts` (NAV entries → `/`, `/harga`, `/tentang`)
- Modify: `src/components/header.tsx` (active-route highlight via `usePathname`)

**Step 1:** Change NAV to route hrefs.

**Step 2:** Add active state styling.

**Step 3:** Run `npm run check`.

**Step 4:** Commit.

---

## Task 4: Build /harga page

**Objective:** Pricing page with package tables, course pricing, and terms.

**Files:**
- Create: `src/app/harga/page.tsx`

**Step 1:** Page metadata (title, description).

**Step 2:** Sections: intro, package tables (Online + Desktop), kursus per-person pricing with group tiers, terms list, CTA.

**Step 3:** Tables must not overflow horizontally at 375px — stack or scroll-in-container.

**Step 4:** Run `npm run check`. Expected: `/harga` in route list as static.

**Step 5:** Commit.

---

## Task 5: Build /tentang page

**Objective:** About page with profile, visi, misi, approach.

**Files:**
- Create: `src/app/tentang/page.tsx`

**Step 1:** Page metadata.

**Step 2:** Sections: profile paragraph, visi, misi list, trainer approach, CTA.

**Step 3:** Run `npm run check`. Expected: `/tentang` static.

**Step 4:** Commit.

---

## Task 6: Trim Beranda to a landing surface

**Objective:** Home page should tease programs and link to /harga, not duplicate everything.

**Files:**
- Modify: `src/app/page.tsx`

**Step 1:** Keep hero, target, pendekatan, program grid, FAQ, CTA. Add a pricing teaser linking to `/harga`.

**Step 2:** Run `npm run check`.

**Step 3:** Commit.

---

## Task 7: Verify and deploy

**Step 1:** `npm run check` — expect exit 0, 3 static content routes.

**Step 2:** Render `/`, `/harga`, `/tentang` at 1440px and 375px. Confirm no horizontal overflow.

**Step 3:** `git push origin main`, confirm Vercel deployment Ready and HTTP 200 on all three routes.
