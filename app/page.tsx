import Nav from '@/components/Nav'
import EmailCapture from '@/components/EmailCapture'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'

const pillars = [
  { icon: '🏠', title: 'Home Detox', desc: 'What\'s hiding in your cleaning products, cookware, candles and air fresheners — and what to use instead.', href: '/resources#home' },
  { icon: '🥦', title: 'Clean Eating', desc: 'Reading labels, avoiding the dirty dozen, and making grocery swaps that don\'t cost a fortune.', href: '/resources#food' },
  { icon: '🧴', title: 'Personal Care', desc: 'The ingredients hiding in your deodorant, shampoo, lotion and makeup — and clean alternatives that actually work.', href: '/resources#body' },
  { icon: '🌬️', title: 'Air & Water', desc: 'Tap water reality checks, air quality inside your home, and the filters worth investing in.', href: '/resources#water' },
]

const featuredProducts = products.slice(0, 4)

export default function Home() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/ur-logo-transparent.png"
            alt="Unfiltered Roots"
            width={280}
            height={280}
            className="object-contain"
            priority
          />
        </div>

        {/* Tagline above */}
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-saddle mb-8">
          Unfiltered Truth · Rooted Living
        </p>

        {/* Main headline */}
        <h1 className="font-cinzel font-black text-deep-olive leading-tight mb-6"
          style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
          Reclaim Your Home.
          <br />
          <span className="text-saddle">Your Food.</span>
          <br />
          Your Body.
        </h1>

        <p className="font-lora text-carved-olive text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          The products filling our homes, kitchens and bathrooms are largely
          unregulated — and most of us never think to question them.
          We did. Here's what we found.
        </p>

        {/* Email capture */}
        <div>
          <EmailCapture variant="hero" source="hero" />
        </div>

        <p className="font-lora text-carved-olive/60 text-xs mt-4 tracking-wide">
          Free instant download · Unsubscribe anytime · No spam, ever
        </p>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center justify-center gap-4 mb-20">
        <div className="w-24 h-px bg-warm-oak/30" />
        <div className="w-2 h-2 rounded-full bg-saddle" />
        <div className="w-24 h-px bg-warm-oak/30" />
      </div>

      {/* CONTENT PILLARS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <h2 className="font-cinzel font-bold text-3xl text-deep-olive tracking-wide mb-3">
            What We Cover
          </h2>
          <p className="font-lora text-carved-olive text-base max-w-xl mx-auto">
            Four areas of your life where small changes make the biggest difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <Link key={pillar.title} href={pillar.href}
              className="group bg-white border border-warm-oak/15 p-8 hover:border-saddle transition-colors duration-300">
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3 className="font-cinzel font-bold text-deep-olive text-sm tracking-wide uppercase mb-3 group-hover:text-saddle transition-colors">
                {pillar.title}
              </h3>
              <p className="font-lora text-carved-olive text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED SWAPS */}
      <section className="bg-ebony py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-cinzel font-bold text-3xl text-parchment tracking-wide mb-3">
              Start With These Swaps
            </h2>
            <p className="font-lora text-parchment/70 text-base max-w-xl mx-auto">
              The products I actually use and recommend — every link is vetted, nothing is sponsored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <a key={product.name} href={product.affiliateUrl}
                target="_blank" rel="noopener noreferrer sponsored"
                className="group bg-parchment/10 border border-parchment/10 p-6 hover:bg-parchment/20 transition-colors duration-300">
                <div className="text-xs font-cinzel tracking-widest uppercase text-warm-oak mb-2">
                  Replaces: {product.swap}
                </div>
                <h3 className="font-cinzel font-bold text-parchment text-sm mb-2 group-hover:text-light-wood transition-colors">
                  {product.name}
                </h3>
                <p className="font-lora text-parchment/60 text-xs leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-light-wood text-sm font-bold">{product.price}</span>
                  <span className="font-cinzel text-xs tracking-widest uppercase text-parchment/50 group-hover:text-saddle transition-colors">
                    See it →
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/resources"
              className="inline-block px-8 py-4 border-2 border-parchment text-parchment font-cinzel font-bold tracking-widest uppercase text-xs hover:bg-parchment hover:text-deep-olive transition-colors duration-300">
              See All Recommended Products →
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / ABOUT */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-saddle mb-6">
          The Why
        </p>
        <h2 className="font-cinzel font-bold text-3xl text-deep-olive tracking-wide mb-6">
          We Read The Labels So You Don't Have To.
        </h2>
        <p className="font-lora text-carved-olive text-lg leading-relaxed mb-10">
          Most people use the same products for years without ever questioning what's in them.
          I started asking those questions — and what I found changed everything about how I shop,
          cook, and live. Unfiltered Roots is where I share what I've learned.
          No judgment, no rabbit holes. Just practical swaps that actually make a difference.
        </p>
        <Link href="/start-here"
          className="inline-block px-8 py-4 bg-saddle text-parchment font-cinzel font-bold tracking-widest uppercase text-xs hover:bg-warm-oak transition-colors duration-300">
          Start Here →
        </Link>
      </section>

      {/* NEWSLETTER CTA */}
      <section id="subscribe" className="bg-parchment border-t border-warm-oak/15 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-cinzel font-bold text-2xl text-deep-olive tracking-wide mb-3">
            Get the Free Clean Home Checklist
          </h2>
          <p className="font-lora text-carved-olive text-base leading-relaxed mb-8">
            10 swaps to make right now — the exact changes I made in my own home.
            Delivered straight to your inbox, free.
          </p>
          <EmailCapture variant="hero" source="footer-cta" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ebony py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="font-cinzel font-black text-parchment tracking-widest uppercase text-lg">
                Unfiltered Roots
              </div>
              <div className="font-cinzel text-saddle tracking-[0.2em] uppercase text-xs mt-1">
                Where Clean Living Takes Root
              </div>
            </div>
            <div className="flex items-center gap-8">
              <a href="https://instagram.com/unfilteredroots" target="_blank" rel="noopener noreferrer"
                className="font-cinzel text-xs tracking-widest uppercase text-parchment/70 hover:text-saddle transition-colors">
                Instagram
              </a>
              <a href="https://youtube.com/@theunfilteredroots" target="_blank" rel="noopener noreferrer"
                className="font-cinzel text-xs tracking-widest uppercase text-parchment/70 hover:text-saddle transition-colors">
                YouTube
              </a>
              <Link href="/start-here"
                className="font-cinzel text-xs tracking-widest uppercase text-parchment/70 hover:text-saddle transition-colors">
                Start Here
              </Link>
              <Link href="/resources"
                className="font-cinzel text-xs tracking-widest uppercase text-parchment/70 hover:text-saddle transition-colors">
                Resources
              </Link>
            </div>
          </div>
          <div className="border-t border-parchment/10 mt-8 pt-8 text-center">
            <p className="font-lora text-parchment/40 text-xs leading-relaxed">
              This site contains affiliate links. If you purchase through these links I may earn a small commission
              at no extra cost to you. I only recommend products I genuinely use and believe in.
            </p>
            <p className="font-lora text-parchment/30 text-xs mt-2">
              © {new Date().getFullYear()} Unfiltered Roots · All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
