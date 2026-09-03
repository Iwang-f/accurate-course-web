---
version: alpha
name: Accurate Pro Academy
description: Premium accounting training brand with editorial authority and approachable professionalism
colors:
  primary: "#0c2e21"
  secondary: "#e7efe8"
  tertiary: "#9fd98b"
  neutral: "#f7f8f4"
  on-primary: "#f7f8f4"
  on-tertiary: "#0e1b15"
typography:
  h1:
    fontFamily: Fraunces
    fontSize: 3rem
    fontWeight: 560
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Fraunces
    fontSize: 2rem
    fontWeight: 560
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body-md:
    fontFamily: Montserrat
    fontSize: 1rem
    lineHeight: 1.7
  label-caps:
    fontFamily: Montserrat
    fontSize: 0.75rem
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  sm: 2px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 24px
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 8px
---

## Overview

Accurate Pro Academy presents a premium yet approachable visual identity for accounting training led by active practitioners. The brand balances editorial gravitas (through serif display typography) with modern usability (clean sans-serif body and accessible interactions). Deep forest green conveys trust and expertise in financial services, while warm off-white backgrounds ensure readability and calm. The restrained lime accent provides just enough vitality without compromising professionalism.

The design system prioritizes clarity, hierarchy, and generous whitespace to create a spacious, authoritative feel appropriate for professional education. Interactive elements are deliberate and restrained — never flashy or gimmicky — reinforcing the brand's positioning as a serious training partner rather than a consumer app.

## Colors

- **Primary (#0c2e21):** Deep forest green. Headlines, high-emphasis surfaces (buttons, badges), key accents. Conveys stability, trust, accounting profession gravitas.
- **Neutral (#f7f8f4):** Warm off-white. Primary page and surface color. Softer than pure white while staying clean.
- **Secondary (#e7efe8):** Light green tint. Secondary surfaces, muted backgrounds, subtle section separation.
- **Tertiary (#9fd98b):** Muted lime green. Secondary action states, hover effects, highlighting. Adds vitality while staying professional.
- **On-primary (#f7f8f4):** Text color on primary-colored surfaces (buttons, banners).
- **On-tertiary (#0e1b15):** Text color on tertiary/accent-colored surfaces.

## Typography

Fraunces (serif, variable optical size) for h1/h2 — editorial authority, used sparingly and only for headings 3+ words long. Montserrat (sans) for everything else: body copy, labels, buttons, form inputs. Label-caps variant is small uppercase tracking, reserved for section eyebrows.

## Layout

8px baseline spacing scale. `xs` (8px) for tight element gaps (chips, badges). `sm` (16px) for intra-component gaps. `md` (24px) standard inter-component gap. `lg` (32px) section separation. `xl` (48px) hero padding and page margins.

## Shapes

`sm` (2px) for chips and tight spaces. `md` (8px) standard for cards, accordions, modals. `lg` (12px) for hero media and featured highlights. `full` reserved for avatars and pill badges.

## Components

- `button-primary` is the only high-emphasis action per screen — WhatsApp CTA, primary form submit.
- `button-secondary` (outline) for secondary navigation actions — "Lihat program", "Lihat harga".
- `card` is the default surface for grouped content (testimonials, program cards, pricing tiers). No shadow by default; border only.
- `badge` for eyebrow labels and status markers ("Terpopuler", "Direkomendasikan").

## Do's and Don'ts

- **Do** use token references (`{colors.primary}`) instead of literal hex in component definitions.
- **Do** use Fraunces only for headings — never body text or UI labels.
- **Do** keep interactive states subtle: 10% opacity overlays, not full color swaps.
- **Don't** introduce colors outside this palette — extend the palette first.
- **Don't** nest component variants (`button-primary-hover-pressed` is wrong); make them sibling keys (`button-primary-hover`).
- **Don't** over-animate — motion should be purposeful (scroll reveal, count-up stats), not decorative.
