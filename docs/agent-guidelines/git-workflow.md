# Git Workflow

Use this before modifying the portfolio workspace.

## Start State

- Run `git status --short --branch`.
- If the worktree is dirty, save it with a named stash before agent edits unless
  the user explicitly asks to edit on top of current changes.
- Use one branch per feature or fix.
- This repo may be ahead of origin; do not rebase, reset, or force-push unless
  the user explicitly asks.

## Branches

- Suggested prefixes:
  - `feature/page-*`
  - `feature/portfolio-section-*`
  - `fix/navigation-*`
  - `fix/responsive-*`
  - `refactor/shared-ui-*`
  - `chore/workspace-*`
- Keep frontend work in `artifacts/app` separate from shared package changes in
  `lib/`.

## Commits

- Use pnpm commands only.
- Do not commit `.vercel/`, local env files, generated caches, or build output.
- Run validation before committing or document the blocker.
