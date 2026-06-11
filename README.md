# NCLEX Prep Nation

SEO-ready Next.js foundation for an independent NCLEX-RN and NCLEX-PN
preparation platform.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` when Supabase is ready:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=https://nclexprepnation.com
NEXT_PUBLIC_WHATSAPP_NUMBER=
SUPPORT_EMAIL=support@nclexprepnation.com
```

The app runs without these values. Supabase client factories return `null`
until both public Supabase variables are configured.

`SUPABASE_SERVICE_ROLE_KEY` is server-only and must never be exposed through a
`NEXT_PUBLIC_` variable or imported into browser code.

## Checks

```bash
npm run lint
npm run build
```
