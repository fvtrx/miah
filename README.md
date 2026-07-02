# 🎂 For Ain Ilmiah

A small, romantic birthday web app — Next.js 14 (TypeScript) + Tailwind + shadcn-ui.
Deployed on **Vercel**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel

### Option A — Git integration (recommended, auto-deploys)

1. Go to https://vercel.com/new and sign in with GitHub.
2. **Import** the `fvtrx/miah` repository.
3. Vercel auto-detects Next.js — no settings to change. Click **Deploy**.
4. Every push to `main` now deploys automatically. Pull requests get preview URLs.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel            # first run links the project + creates a preview
vercel --prod     # promote to production
```

Your live URL will look like `https://miah.vercel.app` (or a custom domain you add
under Project → Settings → Domains).

## Customise her message

Everything she reads is at the top of `app/page.tsx`:
`HER_NAME`, `LETTER`, `NOTES`, `CLOSING`.

Colours: `tailwind.config.ts` + `app/globals.css`.
