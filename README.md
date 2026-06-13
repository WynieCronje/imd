# IMD College — Static Site (Angular 22 SSG)

A faithful recreation of the IMD College of Management Development design,
built with **Angular 22** as a **fully static, prerendered site** (no SSR).

## Architecture

- **No server-side rendering.** `angular.json` sets `"ssr": false`,
  `"prerender": true`, and `"outputMode": "static"`. The build emits plain
  HTML/CSS/JS you can drop on any static host (S3, Netlify, GitHub Pages, Nginx…).
- **Presentational (dumb) components.** Every section is a standalone,
  `OnPush`, input-only component under `src/app/components/`. None of them fetch
  data or hold state — they render whatever is passed via `@Input()`.
- **Typed data structure.** All copy lives in `src/app/data/site-content.ts`,
  validated against the interfaces in `src/app/models/content.model.ts`.
  The root `AppComponent` is the only place that imports the data and wires it
  into the presentational components.

```
src/app/
  models/content.model.ts     # interfaces — the data contract
  data/site-content.ts        # all page content (single source of truth)
  components/                  # presentational components (input-driven)
    header.component.ts
    hero.component.ts
    quote.component.ts
    discover.component.ts
    qualifications-nav.component.ts
    programme-card.component.ts   # reusable, two visual variants
    footer.component.ts
  app.component.ts             # composition root: data -> components
```

## Develop

```bash
npm install
npm start            # ng serve on http://localhost:4200
```

## Build (static output)

```bash
npm run build
```

Static files are emitted to `dist/imd-college/browser/`. Serve them with any
static file server:

```bash
npm run serve:static
```

## Editing content

Change text, links, or list items in `src/app/data/site-content.ts`.
No component code needs to change — the type checker enforces the shape.

## Assets

Images live in `public/images/`. The photos (`graduate.jpg`,
`laptop-hands.jpg`) are cropped from the source design; the logos and
illustrations (`imd-logo.svg`, `icb-logo.svg`, `skills-illustration.svg`,
`footer-illustration.svg`) are placeholders — swap in the official brand
assets for production.
