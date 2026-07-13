# Full Page Capture — marketing site

Next.js (App Router) + Tailwind v4. Marketing pages for the Full Page
Capture Chrome extension, plus a `/api/verify-license` proxy the extension
calls to check Pro license status against Dodo Payments.

## Pages
- `/` — landing page
- `/pricing` — free vs Pro comparison, links to Dodo checkout
- `/terms`, `/privacy`, `/refund-policy` — legal pages (⚠️ templates —
  read the "review before publishing" note on each page and fill in the
  bracketed placeholders before going live; not legal advice)
- `/api/verify-license` — POST { licenseKey } → { valid: boolean }

## Setup

```bash
npm install
cp .env.local.example .env.local
# fill in .env.local once your Dodo account exists
npm run dev
```

## Before going live
1. Create your Dodo Payments product + a payment link, paste it into
   `NEXT_PUBLIC_DODO_CHECKOUT_URL` in `.env.local` (and in Vercel's env
   var settings for production).
2. Fill in the `[bracketed placeholders]` in the Terms/Privacy/Refund pages.
3. Once the extension is published, grab its extension ID from
   `chrome://extensions` and set `ALLOWED_EXTENSION_ORIGIN` so only your
   extension can call the verify-license endpoint.
4. Deploy: push to GitHub, import the repo in Vercel, add the env vars
   there too. Vercel builds and redeploys on every push automatically.

## Design system
Dark "darkroom" palette — see `app/globals.css` for the token list. The
core idea: colors shift from restless amber (`--unsettled`) to calm teal
(`--settled`), echoing the extension's own settle-detection logic. Fonts:
Fraunces (display), Inter (body), JetBrains Mono (technical/status text) —
loaded via `next/font/google` in `app/layout.js`.
