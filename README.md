# Khorsid Kader – Portfolio

Personlig portfolio bygget med React 19, TanStack Start (SSR + server functions), Vite og Tailwind CSS v4.

## Krav
- Node.js 22.12 eller nyere
- npm

## Lokal kørsel
```bash
npm install
cp .env.example .env
npm run dev
```

På Windows kan du bruge:

```powershell
copy .env.example .env
```

Udfyld derefter værdierne i `.env`.

## Environment variables

Projektets beskyttede `/admin`-side kræver:

- `SITE_PASSWORD` – adgangskoden til admin-siden
- `SESSION_SECRET` – mindst 32 tilfældige tegn til sessions/cookies

Disse værdier må ikke committes til GitHub. `.env` og `.env.local` er allerede ignoreret via `.gitignore`.

## Build
```bash
npm run build
```

## Deployment på Vercel

Projektet bruger TanStack Start med SSR/server functions og deployes derfor som en full-stack app, ikke som en statisk GitHub Pages-side.

1. Importér GitHub-repositoryet i Vercel.
2. Vercel registrerer projektet som `tanstack-start` via `vercel.json`.
3. Tilføj `SITE_PASSWORD` og `SESSION_SECRET` under Vercel → Project Settings → Environment Variables.
4. Deploy `main`.

`vite.config.ts` skifter automatisk Nitro til `vercel`-preset, når Vercel bygger projektet.

## Struktur
- `src/routes/` – sider og routes
- `src/components/` – komponenter og UI
- `src/lib/projects.ts` – projekter og portfolioindhold
- `src/lib/experience.ts` – erfaring
- `src/lib/gate.functions.ts` – serverfunktioner til `/admin`
- `src/styles.css` – styling
- `public/assets/` – billeder og dokumenter
- `src/assets/*.asset.json` – references til filer i `public/assets/`

## Backend

Projektet har ingen database eller Supabase. `/admin` bruger en delt adgangskode og en server-side session-cookie.
