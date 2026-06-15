import Nav from '@/components/Nav'
import EmailCapture from '@/components/EmailCapture'
import Link from 'next/link'

const swaps = [
  { number: '01', title: 'Swap your cookware', body: 'Non-stick pans off-gas toxic fumes at high heat. Switch to cast iron, stainless steel, or carbon steel. Lodge cast iron is $34 and lasts forever.', link: '#', category: 'Home' },
  { number: '02', title: 'Replace plastic food storage', body: 'Plastic containers leach chemicals into your food especially when heated. Replace with glass — Pyrex sets are affordable and last decades.', link: '#', category: 'Home' },
  { number: '03', title: 'Filter your water', body: 'Most tap water contains fluoride, chlorine, heavy metals and more. A Berkey or Clearly Filtered pitcher removes what standard filters miss.', link: '#', category: 'Water' },
  { number: '04', title: 'Ditch synthetic fragrance', body: '"Fragrance" on a label can hide hundreds of undisclosed chemicals. Swap candles, air fresheners, and cleaning products for fragrance-free or essential oil based alternatives.', link: '#', category: 'Home' },
  { number: '05', title: 'Read your deodorant label', body: 'Aluminum-based antiperspirants block sweat glands with aluminum salts. Aluminum-free options like Native or Schmidt\'s work well without the concern.', link: '#', category: 'Body' },
  { number: '06', title: 'Switch your cleaning products', body: 'Conventional cleaners are full of synthetic fragrance, surfactants and VOCs. Branch Basics and Blueland are genuinely clean and cost comparable long-term.', link: '#', category: 'Home' },
  { number: '07', title: 'Eliminate plastic cutting boards', body: 'Plastic boards shed microplastics directly into your food as you cut. Wood or bamboo boards are better in every way.', link: '#', category: 'Home' },
  { number: '08', title: 'Check your shampoo', body: 'Sulfates strip your scalp, parabens preserve but also disrupt hormones. Earthling Co shampoo bars are clean, plastic-free and cheaper per wash.', link: '#', category: 'Body' },
  { number: '09', title: 'Rethink your laundry', body: 'Dryer sheets coat your clothes (and lungs) in synthetic fragrance and chemicals. Wool dryer balls + a few drops of essential oil does the same job cleanly.', link: '#', category: 'Home' },
  { number: '10', title: 'Start reading labels', body: 'The single most powerful thing you can do. Spend one week reading the ingredient label on everything before you buy it. You\'ll be shocked what you find.', link: '#', category: 'Food' },
]

export default function StartHere() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
          New here? Start here.
        </p>
        <h1 className="font-cinzel font-black text-4xl md:text-5xl text-forest tracking-wide mb-6">
          10 Swaps to Make Right Now
        </h1>
        <p className="font-lora text-earth text-lg leading-relaxed">
          You don't have to change everything at once. Start with these ten.
          Each one is something I've personally made — with the research to back it up.
        </p>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="w-24 h-px bg-earth/30" />
        <div className="w-2 h-2 rounded-full bg-terracotta" />
        <div className="w-24 h-px bg-earth/30" />
      </div>

      {/* Swaps list */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="flex flex-col gap-0">
          {swaps.map((swap, i) => (
            <div key={swap.number}
              className={`flex gap-8 py-10 ${i < swaps.length - 1 ? 'border-b border-earth/15' : ''}`}>
              <div className="flex-shrink-0">
                <span className="font-cinzel font-black text-3xl text-earth/25">{swap.number}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-cinzel text-xs tracking-widest uppercase text-terracotta">
                    {swap.category}
                  </span>
                </div>
                <h2 className="font-cinzel font-bold text-xl text-forest mb-3 tracking-wide">
                  {swap.title}
                </h2>
                <p className="font-lora text-earth leading-relaxed">
                  {swap.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after list */}
        <div className="bg-forest p-10 mt-16 text-center">
          <h2 className="font-cinzel font-bold text-2xl text-cream tracking-wide mb-3">
            Want the full list?
          </h2>
          <p className="font-lora text-cream/70 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Get my complete Clean Home Starter Checklist — all 10 swaps with product links —
            delivered straight to your inbox.
          </p>
          <EmailCapture variant="hero" source="start-here-page" />
        </div>

        {/* See all resources */}
        <div className="text-center mt-12">
          <Link href="/resources"
            className="font-cinzel text-xs tracking-widest uppercase text-forest border-b border-forest pb-1 hover:text-terracotta hover:border-terracotta transition-colors">
            See All Recommended Products & Resources →
          </Link>
        </div>
      </section>
    </div>
  )
}
