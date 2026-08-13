# Releases and deployment

Use this procedure only when the user explicitly asks to release, deploy, or
ship. `pnpm deploy` replaces the production Cloudflare Worker.

1. Confirm `main`, a clean tree, remote alignment, the requested version bump
   when applicable, and the commits that will ship.
2. Simplify the diff per `commits.md`, then run `pnpm lint`, `pnpm check`,
   `pnpm build`, and a focused `pnpm preview` smoke test.
3. If a version release was requested, run `pnpm version patch|minor|major` and
   verify the version commit and `v*` tag. Do not hand-edit the version.
4. Run `pnpm deploy` only with explicit production authorisation.
5. Push commits/tags only if explicitly asked; never force-push.
6. Confirm the live site and report the version, deployment, and anything left
   local.
