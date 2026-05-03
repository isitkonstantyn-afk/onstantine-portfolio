# Konstantine Portfolio

A dark, glassmorphism-styled personal portfolio site for Konstantine — a filmmaker/creative based in Halifax, Canada.

## Architecture

This is a **pnpm monorepo** with the following structure:

- `artifacts/app/` — React + Vite frontend (the portfolio site)
- `artifacts/api-server/` — Express API server (scaffold, not used by this app)
- `artifacts/mockup-sandbox/` — Design/mockup sandbox
- `lib/api-spec/` — OpenAPI spec
- `lib/api-client-react/` — Generated React Query hooks
- `lib/db/` — Drizzle ORM + PostgreSQL schema

## Frontend (`artifacts/app`)

**Pure frontend app — no backend/auth needed.**

- **Framework**: React + Vite (Tailwind v3 + PostCSS)
- **Router**: react-router-dom with `basename={import.meta.env.BASE_URL}`
- **UI**: shadcn/ui components + custom glassmorphism components
- **Fonts**: Space Grotesk (display) + Inter (body) via Google Fonts
- **Theme**: Dark-only with custom CSS variables in `src/index.css`

### Pages
- `/` — Home/Hero
- `/modeling` — Modeling & Acting
- `/social-media` — Social Media
- `/events` — Events
- `/development` — Web & App Dev
- `/business` — Business Dev
- `/contact` — Contact form

### Key files
- `artifacts/app/src/App.tsx` — Router + providers
- `artifacts/app/src/index.css` — Theme variables (dark palette)
- `artifacts/app/tailwind.config.ts` — Tailwind v3 config with custom animations
- `artifacts/app/vite.config.ts` — Vite config (uses PostCSS for Tailwind v3)

## Migration Notes

Imported from lovable.dev. No Supabase was used — pure frontend app. Replaced:
- `@vitejs/plugin-react-swc` → `@vitejs/plugin-react`
- `lovable-tagger` → removed
- `@tailwindcss/vite` (v4) → Tailwind v3 via PostCSS
- `BrowserRouter` now uses `basename={import.meta.env.BASE_URL}` for Replit proxy routing
