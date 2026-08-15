# Component And Token Reuse

Use this before adding frontend code.

## Search First

- Search `artifacts/app/src/components/`, `artifacts/app/src/components/ui/`,
  `artifacts/app/src/pages/`, `artifacts/app/src/hooks/`, and
  `artifacts/app/src/lib/` for matching UI, route, helper, and token patterns.
- Reuse shadcn/ui primitives before building custom controls.
- Reuse `Layout`, `GlassNav`, `Footer`, `AnimatedSection`, `GlassCard`,
  `HeroScene`, `HeroSceneWrapper`, and `NavLink` before creating page-specific
  variants.

## Ownership

- Frontend pages belong in `artifacts/app/src/pages/`.
- Shared app components belong in `artifacts/app/src/components/`.
- UI primitives belong in `artifacts/app/src/components/ui/`.
- Shared frontend helpers belong in `artifacts/app/src/lib/`.
- Workspace contracts belong in `lib/*` and should not be changed for visual
  page work.

## Styling

- Reuse `artifacts/app/src/index.css`, `App.css`, and Tailwind config tokens
  before adding new colors, shadows, spacing, or animation systems.
- Preserve the dark-only portfolio direction unless the user asks for a theme
  change.
- Do not copy from `.migration-backup/` without treating it as historical
  reference and adapting to the current app structure.
