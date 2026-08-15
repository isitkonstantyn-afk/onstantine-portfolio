# Portfolio App Agent Guardrails

This repo is a pnpm workspace. The visible site lives under
`artifacts/app/src`, with shared generated/API packages under `lib/` and support
code under `scripts/`.

## Required First Pass

- Run `git status --short --branch` before edits.
- Use pnpm. The root `preinstall` blocks npm and yarn on purpose.
- Read the relevant purpose guide before coding:
  - `docs/agent-guidelines/git-workflow.md` for branch, stash, commit, and
    ahead-of-origin rules.
  - `docs/agent-guidelines/component-reuse.md` for pages, components, UI
    primitives, tokens, and workspace boundaries.
  - `docs/agent-guidelines/source-reuse.md` when reusing code from this repo,
    another local project, historical backup, or GitHub.
  - `docs/agent-guidelines/validation.md` for pnpm checks and route smoke.
- Inspect `package.json`, `pnpm-workspace.yaml`, `artifacts/app/package.json`,
  `artifacts/app/src/App.tsx`, `artifacts/app/src/index.css`, and the relevant
  page/component before changing code.
- Search with `rg` for existing pages, components, tokens, utility functions,
  and generated API clients before creating new files.

## Reuse Rules

- Reuse `artifacts/app/src/components/ui/` primitives before creating custom
  controls.
- Reuse existing app components such as `Layout`, `GlassNav`, `Footer`,
  `AnimatedSection`, `GlassCard`, `HeroScene`, and `NavLink` before building
  page-specific versions.
- Reuse route/page structure under `artifacts/app/src/pages/` rather than
  creating alternate entrypoints.
- Reuse `artifacts/app/src/lib/utils.ts`, `bookingLinks.ts`, hooks, and shared
  `lib/*` packages before duplicating API or formatting logic.
- Keep visual changes consistent with `artifacts/app/src/index.css` and
  `App.css`; do not add a second design system.
- Do not edit generated API/spec/database packages unless the requested change
  explicitly involves those contracts.

## Workspace Boundaries

- `artifacts/app` owns the frontend.
- `lib/api-spec`, `lib/api-client-react`, `lib/api-zod`, and `lib/db` own
  shared/generated contracts.
- `scripts` owns workspace automation.
- `.migration-backup/` is historical reference. Do not copy from it blindly and
  do not modify it unless the task is migration recovery.

## Git And Validation

- Save dirty worktrees with a named stash before making changes unless the user
  explicitly asks to edit on top of them.
- Use one branch per feature or fix.
- Do not run `git reset --hard`, force-push, rebase shared branches, or delete
  stashes/branches unless the user explicitly asks for that operation.
- For frontend changes, run `pnpm --filter @workspace/app run build` when
  available, then root `pnpm run build` for broader validation when risk is
  higher.
- For shared package changes, run the relevant package typecheck/build plus
  root `pnpm run typecheck`.
