# Bilal Madi Portfolio

A static Astro + React portfolio for Bilal Madi, styled with Tailwind CSS and deployed as Cloudflare Workers Static Assets.

## Commands

| Command | Action |
| --- | --- |
| `pnpm dev` | Start the local Astro dev server. |
| `pnpm build` | Build the static site into `dist/`. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm deploy` | Build and deploy with Wrangler. |

## Deployment

The repository is configured for Cloudflare Workers Static Assets through `wrangler.jsonc`.

GitHub Actions deploys on pushes to `main`. Configure these repository secrets before the first CI deployment:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The planned production domain is `bilalmadi.com`; validate the Workers URL first before changing DNS or custom-domain routing.
