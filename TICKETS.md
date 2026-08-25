# Accurate Course Website — Implementation Tickets

> **Stack:** Next.js 15 App Router + TypeScript + Tailwind CSS + shadcn/ui  
> **Hosting:** Vercel (GitHub → auto-deploy)  
> **Mobile-first:** Ya, breakpoint 375px minimal  
> **Desain:** Sederhana, profesional, tidak ribet  

## TICKET 1: Init project + shadcn/ui

**Task:** Bootstrap Next.js + install shadcn/ui + konfigurasi Tailwind + font.

**Detail:**
1. `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
2. `npx shadcn@latest init` — pilih New York style, neutral color, CSS variables
3. Tambah komponen: `npx shadcn@latest add button card input select`
4. Setup Google Font: Inter (sans) + DM Serif Display (display)
5. Buat `tailwind.config.ts` dengan custom colors: `primary` (hijau tebal #0f5e3e), `accent` (#c8e86b), `muted` (#6b7b72)
6. Commit: `git add -A && git commit -m "chore: init next.js + shadcn/ui"`
7. Push ke GitHub

## TICKET 2: Layout + navbar + footer

**Task:** Buat root layout (`app/layout.tsx`) + navbar sticky + footer.

**Detail:**
- Top bar tipis: info kontak + jam operasional
- Navbar: logo "Accurate Pro Academy" + nav links (Program, Trainer, FAQ, Kontak) + CTA button
- Mobile: hamburger menu, sheet/drawer dari shadcn
- Footer: copyright + social links + badge "Draft"
- Responsive: 375px → 1440px
- Font Inter untuk body, DM Serif Display untuk heading

## TICKET 3: Hero section

**Task:** Hero utama dengan layout asimetris.

**Detail:**
- Headline besar serif: "Accurate lebih mudah saat diajarkan oleh praktisi."
- Subheadline sans: explain value prop singkat
- CTA: "Konsultasi gratis" → WA
- Secondary: "Lihat program"
- Side card hijau tua dengan program unggulan
- Mobile: stack vertikal

## TICKET 4: Value props + program section

**Task:** 3 kolom outcome + daftar program kursus.

**Detail:**
- Section "Untuk siapa": input tertib, laporan berguna, tim mandiri
- Section "Program": daftar 4 program (AO Fundamental, Desktop V5, Private Training, Pendampingan)
- Styling: grid, border, cream background untuk program section

## TICKET 5: Trainer section + CTA

**Task:** Trainer credibility + final CTA + FAQ (dummy).

**Detail:**
- Trainer section: testimonial quote style, "Professional accountant" badge
- Final CTA: headline → "Mulai dari masalah pembukuan Anda" → WA button
- FAQ accordion: 4-5 pertanyaan umum (dummy content)
- Responsive stacking

## TICKET 6: Copywriting — konten dummy profesional

**Task:** Semua copy dalam Bahasa Indonesia dengan voice yang sesuai.

**Detail:**
- Tone: santai, profesional, tidak jualan berlebihan
- Hook: "Belajar dari transaksi nyata, bukan tutorial menu"
- Headlines, subheadlines, CTA text, program descriptions, FAQ
- Simpan di file `COPY.md`

## TICKET 7: Deploy Vercel preview

**Task:** Setup Vercel project + deploy preview.

**Detail:**
1. `git init && git add . && git commit -m "feat: initial prototype"`
2. `gh repo create accurate-course-web --private --push`
3. Login Vercel: `npx vercel link && npx vercel deploy`
4. Share preview URL

---
