# Unfiltered Roots — Setup Guide

## Stack
- **Next.js 14** (App Router) on **Vercel**
- **Supabase** for email subscriber database
- **Resend** for transactional email
- **Cloudflare** for DNS
- **Tailwind CSS** for styling

---

## Step 1 — Supabase Setup (5 min)

1. Go to [supabase.com](https://supabase.com) → your project
2. Go to **SQL Editor**
3. Paste and run the contents of `supabase-migration.sql`
4. Go to **Settings → API**
5. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY`

---

## Step 2 — Resend Setup (5 min)

1. Go to [resend.com](https://resend.com)
2. Add and verify your domain `unfilteredroots.com`
3. Create an API key
4. Copy key → `RESEND_API_KEY`

---

## Step 3 — Local Development (2 min)

```bash
# Clone or create repo
git init
git add .
git commit -m "Initial commit"

# Install dependencies
npm install

# Create env file
cp .env.example .env.local
# Fill in your values from steps 1-2

# Run locally
npm run dev
# Open http://localhost:3000
```

---

## Step 4 — Deploy to Vercel (5 min)

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy
vercel

# Follow prompts — link to your Vercel account
# When asked about environment variables, add them from .env.local
```

Or push to GitHub and import repo in Vercel dashboard for auto-deploys.

---

## Step 5 — Connect Domain on Cloudflare (5 min)

1. In Vercel → your project → **Settings → Domains**
2. Add `unfilteredroots.com`
3. Vercel gives you DNS records
4. In Cloudflare → `unfilteredroots.com` → **DNS**
5. Add the records Vercel provides
6. Set **Proxy status to DNS only** (grey cloud) for the A/CNAME records pointing to Vercel

---

## Step 6 — Add Affiliate Links (ongoing)

Open `lib/products.ts` and replace all `affiliateUrl` values with your actual affiliate links from:
- **Amazon Associates** — associates.amazon.com
- **ShareASale** — app.shareasale.com
- **Branch Basics** — branchbasics.com/pages/affiliate
- **Blueland** — blueland.com/pages/affiliates
- **Thrive Market** — thrivemarket.com/affiliates

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, pillars, featured products, newsletter |
| `/start-here` | 10 swaps to make right now |
| `/resources` | All affiliate products by category |

---

## Adding New Products

Edit `lib/products.ts` — add a new object to the `products` array:

```typescript
{
  name: 'Product Name',
  brand: 'Brand Name',
  description: 'Why you recommend it',
  category: 'home', // home | food | body | water | air
  affiliateUrl: 'https://your-affiliate-link.com',
  swap: 'What it replaces',
  price: '$XX',
}
```

---

## Email List

All subscribers go to `email_subscribers` table in Supabase.
To export: Supabase → Table Editor → email_subscribers → Export CSV

Weekly newsletter: use Resend Broadcasts or build a `/api/newsletter` route.
