# Gawvestor — Advisor Landing

Personal landing page for Gawvestor: a finance content creator / markets commentator site built with Vite, React, TypeScript, and Tailwind CSS.

## Local setup

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

Other scripts:

```bash
npm run build    # type-check and build for production into dist/
npm run preview  # serve the production build locally
npm run lint     # run oxlint
```

## Project structure

- `src/components/` — page sections (Hero, LinkHub, TrustSection, ContactSection, Footer)
- `src/components/ui/` — reusable primitives (Button, Card, FadeIn)
- `src/pages/` — routed pages (Home, PrivacyPolicy, Terms, Disclaimer)
- `src/config/content.ts` — all site copy, links, and stats as exported constants
- `src/services/leadCapture.ts` — placeholder contact form / newsletter submission handlers (currently mock only — see below)

## Before this goes live

- Replace the `[Name]`, `[Date]`, and other bracketed placeholders in `src/config/content.ts` (`HERO`, `LEGAL`) with real values.
- Have an attorney review `/disclaimer`, `/privacy-policy`, and `/terms` — the banner on those pages is not decorative.
- `src/services/leadCapture.ts` only logs to the console and returns a mock success. Wire it up to a real email provider (see `.env.example`) before relying on the contact form or newsletter signup.
- Update the `og:url` / `og:image` / `twitter:image` values in `index.html` from the placeholder `https://gawvestor.com` domain to the real production domain once one is set.

## Deploying to Cloudflare Pages

This is a static Vite build, so it deploys to Cloudflare Pages with no server-side configuration.

1. Push this repository to GitHub (or GitLab).
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and select the repository.
3. Configure the build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare will rebuild and redeploy automatically on every push to the connected branch.
5. Optional: add a custom domain under the Pages project's **Custom domains** tab once the site is ready for one.

### Environment variables

If `leadCapture.ts` is later wired up to a real email provider, add the corresponding keys from `.env.example` under the Pages project's **Settings → Environment variables**. Keep them unprefixed (no `VITE_`) and only used server-side (e.g. a Cloudflare Pages Function) — a `VITE_`-prefixed variable gets inlined into the client bundle and would publicly expose the key.
