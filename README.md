# OAZA Mobile Mechanic — Website

Next.js 14 + TypeScript + Tailwind CSS. Built to launch today as a standalone
business site — no multi-tenant/SaaS abstractions included by design (that
was explicitly descoped; see notes at the bottom if you revisit it later).

## 1. Install dependencies

```bash
npm install
```

## 2. Set up the appointment form (required before launch)

The booking form posts to `/api/appointments`, which writes to Supabase.
**Without this step, the form will show a clear error message and tell
visitors to call instead — it will not silently lose requests, but it also
won't save anything.**

1. Create a free project at https://supabase.com
2. In the SQL editor, run:

```sql
create table appointments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  name text not null,
  phone text not null,
  email text not null,
  vehicle_year text not null,
  vehicle_make text not null,
  vehicle_model text not null,
  problem text not null,
  preferred_date date not null,
  preferred_time time not null,
  address text not null,
  notes text,
  status text default 'new'
);

alter table appointments enable row level security;

create policy "Allow inserts from anon"
  on appointments for insert
  to anon
  with check (true);
```

3. Copy `.env.example` to `.env.local` and fill in your project's URL and anon key
   (Project Settings → API in Supabase).
4. To be notified of new appointments, either check the Supabase table
   dashboard periodically, or set up a Supabase Database Webhook to email you
   on each insert (Database → Webhooks).

## 3. Run locally

```bash
npm run dev
```

## 4. Deploy to Vercel

1. Push this project to a GitHub repo.
2. Import it at https://vercel.com/new
3. Add the two Supabase environment variables in the Vercel project settings
   (Environment Variables) before the first deploy.
4. Deploy. The temporary URL will be `oaza-mobile-mechanic.vercel.app` (or
   similar, Vercel assigns based on availability).

## Languages

The site is available in English (default), Portuguese, and Spanish at
`/en`, `/pt`, `/es`. English is always the default regardless of browser
language — this was an explicit choice, not an oversight, since English is
the primary language for this market. Visiting `/` redirects to `/en`.

Real customer review text (`lib/business.ts`) is intentionally **not**
translated — it stays in the language the customer actually wrote it in,
across all three site locales.

Adding a new page/section requires updating all three files in
`lib/i18n/dictionaries/` (`en.ts`, `pt.ts`, `es.ts`) — TypeScript will error
if a locale is missing a key, since `pt.ts` and `es.ts` are typed against
`en.ts`'s shape.

## Logo

The navbar/footer logo comes from `public/images/logo/oaza-logo.png` —
generated in Canva and referenced by `components/Logo.tsx`. This file is
**not included** in this export (it needs to be downloaded from Canva
manually, since the build environment that generated this project has no
internet access to fetch it automatically):

1. Download the exported PNG (link was shared in chat) or re-export from
   the saved Canva design: https://www.canva.com/d/OYm0Q_yg6IKeqLy
2. Save it as `public/images/logo/oaza-logo.png`
3. The favicon (`app/icon.svg`) is still the simpler pin+wrench mark for
   now — swap it for a square crop of the new logo whenever convenient,
   it's independent of the navbar logo.

## Before going live — checklist

- [ ] Replace all gallery/hero image placeholders with real photos
- [ ] Confirm Supabase env vars are set in Vercel (test the form end-to-end)
- [ ] Add Google Analytics / conversion tracking on the phone and booking CTAs
- [ ] Add real business address to the Contact page map embed
- [ ] Consider a live Google Reviews embed instead of the two hardcoded
      reviews once there are more of them — `aggregateRating` schema is
      intentionally omitted until review count ≥ 5 (see `lib/schema.ts`)
- [ ] Add a privacy policy page (the booking form collects name, phone,
      email, and home address)

## On the "future SaaS" idea

This build deliberately does **not** include multi-tenant abstractions
(tenant IDs, subdomain routing, auth, billing). Business data lives in one
place (`lib/business.ts`) so re-skinning for a second client is a config
change, not a rewrite — but true multi-tenancy is a separate architectural
decision that should wait until there's a second real client and clearer
requirements about what actually varies between businesses.
