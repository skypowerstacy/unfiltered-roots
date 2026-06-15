import Nav from '@/components/Nav'
import EmailCapture from '@/components/EmailCapture'
import { products, Product } from '@/lib/products'

const categories: { id: Product['category']; label: string; icon: string; desc: string }[] = [
  { id: 'home', label: 'Home Detox', icon: '🏠', desc: 'Non-toxic cookware, cleaning products, storage and more' },
  { id: 'food', label: 'Clean Eating', icon: '🥦', desc: 'Better food sourcing, storage and preparation' },
  { id: 'body', label: 'Personal Care', icon: '🧴', desc: 'Clean deodorant, shampoo, skincare and beauty' },
  { id: 'water', label: 'Water', icon: '💧', desc: 'Water filtration that actually removes what matters' },
  { id: 'air', label: 'Air Quality', icon: '🌬️', desc: 'Indoor air purification and VOC reduction' },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored"
      className="group border border-earth/15 bg-white p-6 hover:border-terracotta transition-colors duration-300 flex flex-col">
      <div className="text-xs font-cinzel tracking-widest uppercase text-terracotta mb-2">
        Replaces: {product.swap}
      </div>
      <h3 className="font-cinzel font-bold text-forest text-sm mb-1 group-hover:text-terracotta transition-colors">
        {product.name}
      </h3>
      <p className="font-lora text-xs text-earth/70 mb-1">{product.brand}</p>
      <p className="font-lora text-earth text-sm leading-relaxed flex-1 mt-3">
        {product.description}
      </p>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-earth/10">
        <span className="font-cinzel font-bold text-forest">{product.price}</span>
        <span className="font-cinzel text-xs tracking-widest uppercase text-terracotta group-hover:underline">
          Shop →
        </span>
      </div>
    </a>
  )
}

export default function Resources() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
          Everything I actually use
        </p>
        <h1 className="font-cinzel font-black text-4xl md:text-5xl text-forest tracking-wide mb-6">
          Recommended Products
        </h1>
        <p className="font-lora text-earth text-lg leading-relaxed max-w-2xl mx-auto">
          Every product here is something I've personally vetted. Some links are affiliate links —
          I earn a small commission if you buy, at no extra cost to you.
          I never recommend anything I wouldn't use myself.
        </p>
      </section>

      {/* Products by category */}
      {categories.map((cat) => {
        const catProducts = products.filter(p => p.category === cat.id)
        if (catProducts.length === 0) return null

        return (
          <section key={cat.id} id={cat.id} className="max-w-6xl mx-auto px-6 pb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl">{cat.icon}</span>
              <div>
                <h2 className="font-cinzel font-bold text-2xl text-forest tracking-wide">
                  {cat.label}
                </h2>
                <p className="font-lora text-earth text-sm">{cat.desc}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catProducts.map(product => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>

            <div className="border-b border-earth/15 mt-16" />
          </section>
        )
      })}

      {/* Newsletter */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="font-cinzel font-bold text-2xl text-forest tracking-wide mb-3">
          New swaps every week
        </h2>
        <p className="font-lora text-earth text-base leading-relaxed mb-8">
          I update this list regularly as I find new products worth recommending.
          Join the newsletter to get new swaps delivered weekly.
        </p>
        <EmailCapture variant="hero" source="resources-page" />
      </section>
    </div>
  )
}
