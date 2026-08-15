# Validation

Use pnpm for this workspace.

## Frontend Checks

```bash
pnpm --filter @workspace/app run build
```

For broader workspace changes:

```bash
pnpm run typecheck
pnpm run build
```

## UI Smoke

- For page or navigation changes, run the local app and inspect the changed
  route.
- Verify both desktop and mobile layouts when changing responsive sections,
  navigation, hero content, cards, or forms.

## Reporting

- Separate frontend-only checks from root workspace checks.
- Do not claim deployment status unless Vercel/Replit output was checked in the
  current session.
