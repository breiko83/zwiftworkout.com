# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run develop   # Dev server at http://localhost:8000 (GraphQL at /___graphql)
npm run build     # Production build → public/
npm run serve     # Serve production build locally
npm run clean     # Clear .cache/ when builds go stale
npm run format    # Prettier formatting (no linter configured)
```

No test framework is configured — `npm test` is a placeholder.

## Architecture

This is a **Gatsby 5 + React 18 static marketing/documentation site** for the Zwift Workout Editor. It is **not the editor itself** — the actual workout editor is a separate app deployed at `zwiftworkout.netlify.app`.

**Routing split:**
- All `/editor/*` requests are proxied via `static/_redirects` to the external editor app at `zwiftworkout.netlify.app`
- This repo only serves the landing page, how-to guides (MDX), and legal pages

**Content:**
- `src/pages/index.js` — landing page (hero, stats, features grid, donation section)
- `src/pages/how-to-*.mdx` — tutorial articles; MDX frontmatter drives SEO via `src/components/seo.js`
- `src/components/layout.js` — wraps all pages, queries site metadata via GraphQL

**Styling:** SCSS + plain CSS, no CSS-in-JS. Component styles live alongside their components.

**Code style:** Prettier only (no ESLint). Config in `.prettierrc`: no semicolons, no parens on single arrow function args.

## Deployment

Netlify auto-deploys on push to `main`. The build command in `netlify.toml` removes `node_modules` before installing to avoid stale dependency issues:
```
rm -rf node_modules package-lock.json && npm install && gatsby build
```
Node version is pinned to 18 (`.node-version` + `netlify.toml`).
