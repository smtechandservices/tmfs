# Time Machine Financial Services

Marketing site for Time Machine Financial Services, built with Next.js (App Router) and styled with Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/` — root layout, global styles (`app/globals.css`, Tailwind v4's CSS-first config: design tokens, keyframes, and the few global rules Leaflet's own markup needs), and the single page (`app/page.js`) that assembles all sections.
- `components/` — one component per page section (Header, Hero, Services, Properties, Dubai map, Testimonials, Contact form, Footer, etc.), plus small shared helpers (`Reveal` for scroll animations, `Counter` for animated stats).
- `hooks/` — `useOnScreen`, a small IntersectionObserver hook used by `Reveal` and `Counter`.

## Styling

All styling is Tailwind utility classes — there is no component-level CSS. Two intentional exceptions:

- `components/Reveal.js` sets one CSS custom property (`--tm-delay`) inline purely to parametrize the `delay-[var(--tm-delay)]` Tailwind utility with a per-instance runtime value (Tailwind can't generate a class from a dynamic JS number at build time).
- `app/globals.css` keeps a handful of plain CSS rules for markup Leaflet injects itself (map tiles, marker popups, the rail's `::-webkit-scrollbar`) — those elements aren't rendered by React, so they can't carry Tailwind classes.

Design tokens (brand colors, fonts, keyframe animations, the two custom nav breakpoints) are defined in the `@theme` block at the top of `app/globals.css`.

## Notes

- The Dubai locations map uses [Leaflet](https://leafletjs.com/) and is loaded client-only (`next/dynamic` with `ssr: false`) since it needs the browser DOM.
- Photography (logo, hero image, property photos, article thumbnails) lives in `public/images/` — these were recovered from the original design file's embedded asset manifest, not stock placeholders.
- The contact form simulates submission locally (shows a "Thanks — we have it" confirmation) — wire `onSubmit` in `components/Contact.js` to a real endpoint/CRM when ready.
