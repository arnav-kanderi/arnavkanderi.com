# arnavkanderi.com

Personal portfolio site. Next.js (App Router) + TypeScript + Tailwind CSS,
animated with Framer Motion. Fully static — no backend or database.

## Stack

- **Next.js 16** (App Router, static export-friendly)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config, see `src/app/globals.css`)
- **Framer Motion** — entrance animations, scroll reveals, hover/tap
  micro-interactions, the scroll-reactive gradient-mesh background

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build locally
npm run lint    # eslint
```

## Editing content

Everything on the page is driven by two plain data files — edit these
instead of touching component code:

- `src/data/site.ts` — name, headline, location, bio, highlights, contact
  info, resume link
- `src/data/projects.ts` — the project cards grid. Add a new object to the
  array to add a card; `href` / `repoHref` are optional per project

To add your resume, drop the PDF at `public/resume.pdf` (the Hero's
"Resume" button already links to `/resume.pdf`).

## Project structure

```
src/
  app/                 layout, global styles, page composition
  components/
    background/        scroll-reactive gradient-mesh backdrop
    nav/                sticky nav with active-section highlighting
    sections/           Hero, About, Projects, Experience, Contact
    theme/              light/dark theme provider + toggle
    ui/                 shared interactive primitives (e.g. magnetic button)
  data/                 site.ts, projects.ts — editable content
  lib/                  shared Framer Motion variants/helpers
```

## Design notes

- Dark mode is class-based (`.dark` on `<html>`), toggled manually and
  persisted to `localStorage`; an inline script in `layout.tsx` applies the
  stored/system preference before hydration to avoid a flash.
- All animation respects `prefers-reduced-motion`: reduced-motion users get
  a static gradient and instant fades instead of the full motion set.
- The gradient-mesh background only animates `transform`/`opacity` (GPU
  compositable) and is capped to a few elements to stay cheap on mobile.

