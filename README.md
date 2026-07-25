# chienleng.com

Steven Tan's developer playground — open-source tools, experiments and data
visualisation, built in the open. An engineering-forward companion to the
design/portfolio site at [steventan.com.au](https://steventan.com.au).

Built with **SvelteKit** + **Svelte 5**, styled entirely with
[`@chienleng/stratum-ui`](https://github.com/chienleng/stratum-ui) (neutral
theme), written in **TypeScript**, and prerendered to **Cloudflare**. No CSS
framework, no web fonts — just the library's `--su-*` design tokens and system
font stacks. See `/colophon` for the full build.

## Develop

```bash
pnpm install
pnpm dev
```

## Scripts

| Command        | Description                                        |
| -------------- | -------------------------------------------------- |
| `pnpm dev`     | Start the dev server                               |
| `pnpm build`   | Build for production (adapter-cloudflare)          |
| `pnpm preview` | Serve the built worker locally with `wrangler dev` |
| `pnpm check`   | `wrangler types` + `svelte-check`                  |
| `pnpm lint`    | Prettier + ESLint                                  |
| `pnpm format`  | Format with Prettier                               |
| `pnpm deploy`  | Build and deploy to Cloudflare                     |

## Content

Site content lives in typed modules under `src/lib/`:

- `site.ts` — metadata, links (single source of truth)
- `projects.ts` — selected work
- `packages.ts` — open-source packages
- `stack.ts` — the tooling list

Edit those to update the page — the routes render from them.
