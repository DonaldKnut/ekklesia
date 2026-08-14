# Ekklesia Web

Standalone Next.js marketing site for **Ekklesia** — church management and spiritual growth.

This folder is fully independent of the Spring Boot API. You can delete `ekklesia-web/` without affecting the backend, or copy it to another repository and run it alone.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Instrument Serif + Sora

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — brand hero, problem, product, highlights, why, CTA |
| `/features` | Full capability map |
| `/solutions` | Problems & outcomes by audience |
| `/contact` | Demo request form (`mailto:` for now) |

## Run locally

```bash
cd ekklesia-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

## Deploy on Vercel

This site is a Next.js app. In [Vercel](https://vercel.com):

1. Import the GitHub repo `DonaldKnut/ekklesia`.
2. Set **Root Directory** to `ekklesia-web`.
3. Framework Preset: Next.js (auto-detected).
4. Build command: `npm run build`
5. Deploy.

Repo: https://github.com/DonaldKnut/ekklesia.git

## Notes

- No dependency on the Java API ports or paths.
- Optional later: set `NEXT_PUBLIC_API_URL` when wiring live product flows.
- Contact form opens the user’s email client to `hello@ekklesia.app`.
- Image prompts for Flow: see [`IMAGE-PROMPTS.md`](./IMAGE-PROMPTS.md).
- Carousel placeholders live in `public/images/carousel/` — swap for generated JPG/WebP and update paths in `src/lib/content.ts`.
