#Project Context

Design and build a functional beach & resort website called Seaside Resorts that is mobile responsive, presentable and high quality. Act as a senior designer at a studio known for giving every client a visual identity that couldn't be mistaken for anyone else's and avoid the three most common AI-generated looks: (1) cream background + serif display + terracotta accent, (2) near-black background + single neon accent, (3) newspaper-style hairline-rule layout.

Write all copy yourself in plain English, active voice, no filler — no Lorem Ipsum, no placeholder text, no non-English characters or symbols or double hyphens. Double-check all text for spelling and grammar before finalizing.
Avoid: numbered markers (01/02/03) unless content is truly sequential, generic stock-photo hero sections, identical card-grid feature sections, overused gradient blobs, and excessive scroll animations — restraint reads as more professional than motion-heavy pages.

Use only icons from react-icons (e.g. react-icons/fa) for all iconography. Do not use emoji as icons anywhere in the UI except "Made with ❤️ by Brian" part. Do not hand-write inline SVG icons or use other icon libraries (Lucide, Heroicons directly, FontAwesome, etc.) unless they're being imported through react-icons. Pick one icon set/style from react-icons and use it consistently across the whole website.

## Project Overview

You should be able to see all 6 available rooms that have:
Name of suite
Amenities shown as name + react-icons
Max no of people allowed
Price is USD per night
Each room should have at least 3 images with carousel and controls
Each interactive element should have cursor pointer

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Hook Form + Zod (form validation)
- React Icons
  -Shadcn/ui
- USE THE ABOVE TECH STACK THAT HAS BEEN SETUP ALREADY. DO NOT INSTALL ANY OTHER DEPENDENCIES

## Fonts

- Already setup inglobals.css & layout.tsx

## Color System

-Already defined in globals.css

## Color Contrast Rules

- Light text on dark backgrounds
- Dark text on light backgrounds
- Never place dark text on dark backgrounds be it normal text or error & success messages

## Images

- Always use <Image> for all images
- Never use bare <img> tags
- All images are in the /public folder

## Booking engine

The booking form should have a date picker that doesn't let you select past dates for both check-in and check-out and should allow one to choose check-in, check-out, choose adults, children and room numbers then show available rooms per different price points in US Dollars. Create only 6 available rooms

## Forms

- Built with React Hook Form + Zod
- Validation mode: onChange (errors clear the moment user starts typing)
- On successful submit: show success feedback, do not send data anywhere
- Contact page includes: first name, last name, email, phone, message fields, select service

## Pages

- / (Homepage with Hero and a carousel of images that are cover1-cover6 , services overview, FAQ)
- /about
- /contact
  -Navbar should have a service link thats href to # that has a collapsible menu(on hover) that shows all services that each leads to each dedicated service page.

- /accommodation
- /weddings
- /meetings_events
- /not-found (custom 404, themed to match site)
- Each service page includes its own supporting literature, CTA buttons & FAQ section
  -Each service has its own corresponding image with a meaningful name

## CTAs

- On landing page and all the service pages that have cursor pointer.

## Component Conventions

- All components are functional with TypeScript props interface
- Framer Motion for scroll (whileInView), hover, and entrance animations
- Tailwind only — no inline styles
- Buttons always use Button from @/components/Button
  with "primary" and "secondary" variants with cursor pointer

## Business Details

- Location: Nairobi, Kenya (generic)
- Email: hello@seaside.co.ke
- Footer: "Made with ❤️ by Brian: +254 719 316 562" link to https://wa.me/254719316562
- Social media icons include Facebook, Instagram, Twitter(X) & LinkedIn
- Use Text logo

## Code Output Rules

- Output ONLY complete working code
- No explanations unless asked
- No placeholder comments like "// add logic here"
- Always include TypeScript types
- Always use named exports for components
