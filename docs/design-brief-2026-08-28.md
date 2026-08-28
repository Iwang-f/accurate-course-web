# Design Brief — Reference Analysis (2026-08-28)

Analysis of 4 reference sites, applied to the Accurate course website.
Status: **awaiting Iwang approval before implementation.**

## Reference Verdicts

### 1. cofounder.co — USE
Fetched, 6,465 chars text extracted.
- Palette: cream base `#F5F5F2` / `#FBFBF8`, text `#202020`, accent amber `#f59e0b`, green `#34a853`, orange `#ff672f`
- Fonts: custom `--font-neoris` + `--font-ibm-plex-mono` for numerals
- Structure worth stealing: numbered capability blocks (`1.0 Launch` / `2.0 Grow` / `3.0 Operate`) each with sub-items `1.1 … 1.4`. Turns a service list into a visible progression.
- Also: inline "product surface" mockups (email preview, metrics panel) instead of stock photos.
- Social proof line: "over 10,650 companies are running on Cofounder" placed directly under hero.

### 2. ultimateframercourse.com — USE (strongest match)
Fetched, 18,700 chars text extracted. Closest business model to ours: a paid course sold to professionals.
- Palette: `#000` / `#fff` / `#f7f8f9` surface, blue `#09f`, purple `#6016e3`
- Font: Inter
- Page order (this is the real asset):
  1. Hero + price-anchored CTA + `14-day money-back guarantee`
  2. **"ARE YOU A DESIGNER THAT IS STRUGGLING WITH…"** — 3 pain cards
  3. **"BY THE END OF THIS COURSE, YOU WILL:"** — 3 outcome cards
  4. Testimonial with name + role + company
  5. Curriculum in 3 tiers (Fundamentals 50+ lessons / Intermediate 20+ / Advanced 15+), each with lesson count
  6. "WHAT YOU'LL GET ACCESS TO" — deliverables grid
  7. Price repeated: `Enroll now - $299`, `Lifetime access`, `14-day money-back guarantee`
- Also has a 4-question quiz → personalised roadmap, as a soft entry for undecided visitors.

### 3. rhetorich.ai — PARTIAL
Fetched, 28,199 chars text extracted.
- Palette: dark green `#06402a`, `#073124`, `#052e22`, `#334d45`; accent `#00c850`
- Font: Inter
- Useful: quantified benefit chips under the hero — `Persuasion +26%`, `Credibility +31%`, `Likeability +35%`. Also a named framework ("CLAPPS / the Big 6") that makes the methodology feel proprietary.
- Reject: the dark-green enterprise palette. Wrong register for Indonesian SMEs, and our existing `#155c43` already occupies that colour space more warmly.

### 4. kit.com — UNUSABLE
Returned 10,043 bytes of bot-check HTML: "Are you a robot? … Enable JavaScript and cookies to continue". 147 chars of real text. No design data extracted. Not analysed further — and it is a creator-newsletter platform, wrong niche anyway.

### JCodesMore/ai-website-cloner-template — NOT USED
Read the README from `raw.githubusercontent.com`. It is a GitHub *template repo*: you click "Use this template", `npm install`, then run `/clone-website <url>` inside Claude Code so the agent rebuilds the target as a fresh Next.js app.

It does not fit here. We already have a working Next.js 16 app with a data layer, a design system, and 5 shipped pages. That workflow scaffolds a new project from scratch — using it means throwing away the current repo. What we actually need is the *analysis* step, which is what this document is.

## Current Site — Gaps

Verified by reading `src/lib/site.ts`, `src/lib/pricing.ts`, `src/app/page.tsx`, `src/app/program/page.tsx`, `src/app/globals.css`.

Already correct, do not touch: Montserrat single family, `#155c43` primary, cream `#f8f8f6` background, centralised data layer, reused `CtaBanner` / `TopicCards`, mobile-first, near-zero client JS.

Missing, ranked by conversion impact:

1. **No pain section.** Both course references open by naming the visitor's problem before selling. Our hero goes straight to a feature description.
2. **No outcome section.** "By the end you will…" is the single highest-signal block on a course page. Absent.
3. **No social proof.** No participant count, no testimonials, no trainer credential. `TRAINER.foto` is `null`.
4. **No curriculum detail.** `PROGRAM_ITEMS` has one prose paragraph per class. References show module lists with counts.
5. **Flat visual hierarchy.** Every card is `Card + border-border/60`. Nothing is marked as the recommended choice.
6. **Pricing has no anchor.** `COURSE_PRICING` is 4 equal tiers; `TRAINING_PRICING` is 3 equal groups. No "most popular", no guarantee, no risk reversal.
7. **No quantified benefit chips.** Rhetorich's `+26% / +31%` pattern maps cleanly onto "laporan bulanan selesai 3x lebih cepat".

## Proposed Changes

### Tokens
Add one variable to `src/app/globals.css`. Everything else stays.

```css
--highlight: #f59e0b;            /* amber, from cofounder.co — featured tier + price emphasis only */
--highlight-foreground: #17201c;
```
Rationale: `--accent: #d7eb8b` is too low-contrast to carry a "most popular" badge. Amber against `#155c43` is legible and does not introduce a second brand hue.

### Data layer — `src/lib/site.ts`
Four new exports, same `as const` + `readonly` style as existing code:

- `PAIN: readonly Topic[]` — 3 items. Struggles of an SME finance staffer.
- `OUTCOMES: readonly Topic[]` — 3 items. What the participant can do after.
- `TESTIMONI: readonly { nama, jabatan, perusahaan, isi }[]` — 3 items, **placeholder, flagged for client replacement**.
- `MODUL: Readonly<Record<string, readonly string[]>>` — module list keyed by program title, for the curriculum accordion.

`TRAINING_PRICING` gains an optional `unggulan?: boolean` on one package per group.

### Components — new
- `pain-cards.tsx` — reuses `TopicCards` shape, adds an icon slot. Consider extending `TopicCards` with an optional `icon` prop instead of a new file (fewer files wins).
- `outcome-cards.tsx` — same consideration.
- `testimoni-cards.tsx` — name + role + company + quote.
- `silabus-accordion.tsx` — wraps existing `Accordion`, renders `MODUL`.

Preference: extend `TopicCards` with `variant` + `icon` props rather than adding two near-identical files.

### Pages
`/` — insert after hero: pain (3 cards) → outcomes (3 cards). Insert before FAQ: testimonials. Hero gains a proof line and a quantified chip row.

`/program` — add `SilabusAccordion` under each class card. Badge the most-taken class.

`/harga` — mark one tier per group as featured using `--highlight`. Add the guarantee/terms line near the price, not buried at the bottom.

`/tentang` — trainer photo slot, credential list. Both need real client input.

`/kontak` — copy polish only.

### Explicitly not doing
- No dark theme. No second font. No new npm dependency. No hero illustration or stock imagery. No quiz funnel (Ultimate Framer has one; it needs state, an API route, and content we do not have — revisit only if the client asks).

## Blocked On Client Input

Everything below is placeholder and must not go live as-is. `SITE.isDraft` stays `true` until resolved.

- Real participant count for the proof line — currently no honest number exists
- Real testimonials with permission to publish
- Trainer photo and verifiable credentials
- Final prices (current figures mirror competitor structure)
- `SITE.whatsapp` is still `6280000000000`
- Brand name (`Accurate Pro Academy` is a placeholder)

Writing invented numbers into the proof line is the main risk in this plan. If the client has no numbers yet, the trust strip ships without counts or does not ship.

## Implementation Order

1. `--highlight` token
2. New exports in `src/lib/site.ts`
3. Extend `TopicCards`, add `testimoni-cards.tsx` + `silabus-accordion.tsx`
4. `/` restructure
5. `/program` curriculum
6. `/harga` featured tier
7. `/tentang` trainer block
8. `npm run check` (typecheck + lint + build), then push to `main`

Watch for the known pitfalls in the vault note: `Button` has no `asChild` in base-nova (use `buttonVariants()` on the anchor), `Accordion` takes no `type`/`collapsible`, and `noUncheckedIndexedAccess` rejects bare `ARR[0]` — use `.at(0)?.`.
