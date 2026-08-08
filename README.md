# BRITEQ website

Production website for [BRITEQ](https://briteq.in), Jharkhand's complete marketing partner.

## Architecture

- Next.js static export
- No database, API routes, server actions, or application backend
- WhatsApp-based enquiry flow; form data is not stored by the website
- Static SEO routes, sitemap, robots file, manifest, and structured data
- Netlify-ready output in `out/`

## Local development

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

`npm run build:sites` also stages the static export in `dist/` for the Sites hosting adapter.

## Deployment

`netlify.toml` configures Netlify to run `npm run build` and publish `out/`. The repository's GitHub Actions workflow independently audits production dependencies, lints, type-checks, and builds every push and pull request to `main`.
