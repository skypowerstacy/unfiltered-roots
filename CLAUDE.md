# Unfiltered Roots — Claude Context

## Stack
- **Next.js 14** (App Router) on **Vercel**
- **Supabase** for email subscriber database (project ID: `swkrgndgqoarpvmsdydh`)
- **Resend** for transactional email (domain must be verified at resend.com)
- **GoDaddy** for DNS (A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`)
- **Tailwind CSS** for styling

## Brand Color Palette

| Token | Hex | Usage |
|---|---|---|
| `parchment` | `#F2EBD9` | Page background, light text on dark, outlines on dark backgrounds |
| `deep-olive` | `#2C3D1A` | All headlines, nav text, body links |
| `carved-olive` | `#4A6128` | Body text, descriptions |
| `saddle` | `#7A5C35` | All solid CTA buttons (bg), accent text, "Roots" wordmark |
| `warm-oak` | `#C4A882` | Borders, dividers, hover on CTA buttons |
| `light-wood` | `#D4B896` | Price text, hover highlight on dark cards |
| `dark-wood` | `#4A3520` | Muted text, large faded numbers |
| `ebony` | `#3D3020` | Footer bg, featured products section bg, dark CTA blocks |

### Color Rules
- **Page background**: `bg-parchment`
- **Headlines**: `text-deep-olive`
- **Body text**: `text-carved-olive`
- **Borders/dividers**: `border-warm-oak` (with opacity as needed)
- **Dark sections** (footer, featured swaps, CTA blocks): `bg-ebony`
- **Solid CTA buttons**: `bg-saddle text-parchment hover:bg-warm-oak`
- **Outline buttons on dark bg**: `border-2 border-parchment text-parchment` — visible WITHOUT hovering
- **Outline buttons on light bg**: `border-2 border-deep-olive text-deep-olive`
- **Success states**: `bg-carved-olive text-parchment`
- **Error/accent text**: `text-saddle`

## Key Files
- `lib/products.ts` — all affiliate products (add new ones here)
- `lib/email.ts` — welcome email template and newsletter sender
- `lib/supabase.ts` — Supabase client (anon) and admin client scaffold
- `app/api/subscribe/route.ts` — email subscribe endpoint (initializes supabase admin client INSIDE the handler, not at module level)
- `components/EmailCapture.tsx` — reusable email signup form (hero/inline variants)
- `components/Nav.tsx` — sticky nav with mobile menu
- `supabase-migration.sql` — full schema including GRANT statements (must include GRANTs or REST API returns 403)

## Known Gotchas
- **Supabase GRANTs required**: Always include `GRANT ALL ON <table> TO service_role` and `GRANT INSERT ON <table> TO anon` — without them PostgREST returns 403 even with valid JWT
- **Supabase admin client**: Must be initialized INSIDE the route handler function, not at module level, or `SUPABASE_SERVICE_ROLE_KEY` may be undefined at module load time
- **Resend domain**: `unfilteredroots.com` must be verified in Resend before sending; free plan allows 1 domain
- **Vercel env vars**: Set via `npx vercel env add <KEY> production` before deploying; `--env` flag on deploy is runtime-only and does NOT apply at build time for NEXT_PUBLIC_ vars

## Pages
| Route | Description |
|---|---|
| `/` | Homepage — hero, pillars, featured products, newsletter |
| `/start-here` | 10 swaps to make right now |
| `/resources` | All affiliate products by category |

## Deployment
- GitHub: `skypowerstacy/unfiltered-roots`
- Vercel project: `stacy-herman-s-projects/unfiltered-roots`
- Live: https://unfilteredroots.com
