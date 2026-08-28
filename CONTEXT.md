# Accurate Course Web — Domain Glossary

## Produk

### Program
Abstract course product offered by Accurate Pro Academy. Two concrete kinds:
- **Kelas** — open-enrolment, has a fixed price and duration
- **Layanan** — custom-format, price varies by engagement (private training, consulting)

### Training Package
A named tier within a training group (e.g. "Paham", "Bisa", "Terampil"). Optional `unggulan` flag marks the recommended tier.

### Training Group
A named category grouping related packages under one subject (e.g. "Accurate Online", "Accurate Desktop V5").

### Course Price Tier
Per-person pricing for Kelas enrolment (e.g. "3 orang: Rp800.000/orang"). Optional `unggulan` flag marks the best value.

## Konsultasi

### ConsultationInquiry
The structured data a potential participant submits through the contact form. Shape: `{ nama, perusahaan, jumlah?, program?, kendala? }`. Sent as a WhatsApp message via `buildConsultationUrl()`.

## Arsitektur

### Accessor seam
Pure functions in `pricing.ts` that mediate access to raw pricing data arrays. Callers use `getTrainingPricing()`, `getRecommendedPackage()`, etc. instead of array filter chains. Tested via `pricing.test.ts`.

### File layout
```
src/lib/
  site.ts           — site-wide content data (SITE, NAV, PROGRAM, FAQ, etc.)
  pricing.ts        — pricing data + accessor seam
  consultation.ts   — consultation inquiry type + URL builder
  utils.ts          — cn() utility (Tailwind class merging)
src/components/
  (page-level components: header, footer, topic-cards, pricing-cards, etc.)
src/components/ui/
  (shadcn UI primitives: button, card, accordion, badge, sheet)
src/app/
  (Next.js page routes: /, /program, /harga, /tentang, /kontak)
```

### ADR-0001 — Static export only
`output: "export"` in `next.config.ts`. No server runtime. All pages statically pre-rendered.

### ADR-0002 — Single font family
Montserrat only (400–800). Rationale: DM Serif Display + cream background reads as AI-generated.

### ADR-0003 — CTA via WhatsApp
No form backend. Contact form builds a WhatsApp deep-link URL. Replies are manual, done by the instructor.
