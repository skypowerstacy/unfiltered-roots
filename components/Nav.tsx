'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-cream border-b border-earth/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-cinzel font-black text-forest tracking-widest uppercase text-lg">
            Unfiltered
          </span>
          <span className="font-cinzel font-bold text-terracotta tracking-[0.3em] uppercase text-xs">
            Roots
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/start-here" className="font-cinzel text-xs tracking-widest uppercase text-forest hover:text-terracotta transition-colors">
            Start Here
          </Link>
          <Link href="/resources" className="font-cinzel text-xs tracking-widest uppercase text-forest hover:text-terracotta transition-colors">
            Resources
          </Link>
          <a href="https://instagram.com/unfilteredroots" target="_blank" rel="noopener noreferrer"
            className="font-cinzel text-xs tracking-widest uppercase text-forest hover:text-terracotta transition-colors">
            Instagram
          </a>
          <a href="https://youtube.com/@theunfilteredroots" target="_blank" rel="noopener noreferrer"
            className="font-cinzel text-xs tracking-widest uppercase text-forest hover:text-terracotta transition-colors">
            YouTube
          </a>
          <Link href="#subscribe"
            className="px-5 py-2 bg-terracotta text-cream font-cinzel font-bold tracking-widest uppercase text-xs hover:bg-amber transition-colors">
            Free Checklist
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-forest"
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-forest mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-forest mb-1 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-forest transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-earth/20 px-6 py-6 flex flex-col gap-5">
          <Link href="/start-here" onClick={() => setOpen(false)}
            className="font-cinzel text-sm tracking-widest uppercase text-forest">Start Here</Link>
          <Link href="/resources" onClick={() => setOpen(false)}
            className="font-cinzel text-sm tracking-widest uppercase text-forest">Resources</Link>
          <a href="https://instagram.com/unfilteredroots" target="_blank" rel="noopener noreferrer"
            className="font-cinzel text-sm tracking-widest uppercase text-forest">Instagram</a>
          <a href="https://youtube.com/@theunfilteredroots" target="_blank" rel="noopener noreferrer"
            className="font-cinzel text-sm tracking-widest uppercase text-forest">YouTube</a>
          <Link href="#subscribe" onClick={() => setOpen(false)}
            className="font-cinzel text-sm tracking-widest uppercase text-terracotta font-bold">Free Checklist →</Link>
        </div>
      )}
    </nav>
  )
}
