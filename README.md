# Khorsid Kader – Portfolio

Personlig portfolio bygget med React 19, TanStack Start (SSR + server functions), Vite og Tailwind CSS v4.

## Krav
- Node.js 22.12 eller nyere (https://nodejs.org)

## Installation og lokal kørsel
```bash
npm install
cp .env.example .env     # Windows: copy .env.example .env  – udfyld værdierne
npm run dev
```
Åbn http://localhost:8080 (eller den adresse terminalen viser).

## Build
```bash
npm run build
npm run preview
```
Build-output lægges i `.output/` (standard: Cloudflare Workers-format).

## Struktur
- `src/routes/` – alle sider (forside, projekter, projekt-detaljer, om mig, kontakt, unlock, admin)
- `src/components/` – komponenter og animationer (`motion.tsx`), `ui/` = shadcn-komponenter
- `src/lib/projects.ts` – alle projekter (tekst, billeder, rapporter)
- `src/lib/experience.ts` – erfaringer og små projekter
- `src/lib/gate.functions.ts` – server-funktioner til adgangskode-beskyttelse af /admin
- `src/styles.css` – tema, farver og animationer
- `public/assets/` – alle billeder og PDF/DOCX-dokumenter
- `src/assets/*.asset.json` – små pegere til filerne i `public/assets/`

## Backend
Projektet har **ingen database, ingen Supabase og ingen login-system** ud over en enkelt delt adgangskode til `/admin`.
Den kontrolleres server-side (timing-safe) og gemmes som krypteret, httpOnly cookie. Der kræves kun to environment variables: `SITE_PASSWORD` og `SESSION_SECRET` (se `.env.example`). Ingen SQL-migrations, RLS-policies eller storage-buckets findes.

## Deployment
Projektet har SSR og server-funktioner, så det kræver en host der kan køre server-kode:
- **Cloudflare Workers/Pages** (standard): `npm run build`, derefter `npx wrangler deploy` fra `.output/`. Sæt `SITE_PASSWORD` og `SESSION_SECRET` som secrets (`npx wrangler secret put SITE_PASSWORD`).
- Andre hosts (Vercel, Netlify, Node): Nitro understøtter flere targets – se https://nitro.build/deploy.

## GitHub
```bash
git init && git add . && git commit -m "Portfolio"
git remote add origin https://github.com/<bruger>/<repo>.git
git push -u origin main
```
`.env` er i `.gitignore` og bliver aldrig uploadet.
