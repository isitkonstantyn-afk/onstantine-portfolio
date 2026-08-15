# Source Reuse

Use this whenever a task says to reuse, copy, port, migrate, adapt, borrow from,
or use another implementation.

## Source Types

- Current app: reuse files already in this repo first.
- Local source app: inspect the named sibling project under
  `/Users/konstantyn/Desktop/My Code` before coding.
- External repo: inspect the GitHub repo/package, license, dependencies, and
  relevant source files before copying anything.
- Historical source: `.migration-backup/` is reference only. Copy ideas,
  content, or behavior from it only after adapting to the current workspace.

## Required Reuse Map

Before implementation, produce a short map:

- Target files to extend in `artifacts/app`.
- Source files, components, hooks, functions, styles, assets, or content blocks
  worth copying/adapting.
- Source parts rejected because they duplicate current shadcn/ui or app
  components, conflict with dark-only styling, are generated, over-dependent, or
  license-risky.
- Exact destination for every copied/adapted piece.

## Adaptation Rules

- Adapt source code into existing portfolio ownership:
  - pages into `artifacts/app/src/pages/`
  - shared components into `artifacts/app/src/components/`
  - primitives into `artifacts/app/src/components/ui/`
  - helpers into `artifacts/app/src/lib/`
  - styling into current `index.css`, `App.css`, and Tailwind tokens
- Do not paste a whole foreign folder if only a section, component, hook, helper,
  or content pattern is needed.
- Do not keep copied code disconnected. It must be imported, wired, and
  validated in the changed route.
- After adapting, delete exploratory duplicate code.

## Proof

Final notes must include source and target file references, what was copied or
adapted, what was intentionally not copied, and the validation result.
