# chienleng.com agent guide

This is the canonical guidance for any coding agent working in this repository.
Platform-specific instruction files must defer here rather than duplicate it.

## Start here

- Read `README.md` for the content model, design intent, and commands.
- Preserve unrelated working-tree changes and use UK English in copy.

## Commands and verification

- Use the pinned `pnpm` version through Corepack and Node 22.12 or later.
- `pnpm dev` serves `http://chienleng.localhost:7606`.
- Run `pnpm check` after TypeScript or Svelte changes and `pnpm lint` when
  formatting or linting is relevant.
- Run `pnpm build` for route, prerender, adapter, or deployment changes.
- Run `pnpm preview` when runtime behaviour matters; it serves the built Worker
  under workerd rather than Vite.

## Project rules

- This is Svelte 5/SvelteKit with TypeScript. Use runes and property event
  handlers in new code.
- The site is fully prerendered. Avoid adding runtime server dependencies or
  non-prerenderable routes without an explicit design decision.
- Use `@chienleng/stratum-ui` and its `--su-*` semantic tokens. Do not add a CSS
  framework or duplicate library components locally without a clear reason.
- Preserve the neutral theme, system-font approach, and accessible HTML.

## Deployment and Git safety

- `pnpm deploy` builds and deploys to Cloudflare Workers. Run it only when the
  user explicitly asks to deploy.
- Treat `wrangler.jsonc` as the committed Worker source of truth; never commit
  secrets. Run `pnpm gen` when Worker bindings change.
- Before a commit, simplify the diff and run relevant verification. Stage named
  files only; never skip hooks, force-push, or add agent attribution.
- Follow `docs/agent-workflows/commits.md`, `svelte-5-review.md`, and
  `releases.md` when those workflows apply.
