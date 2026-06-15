'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-parchment border-b border-warm-oak/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-cinzel font-black text-deep-olive tracking-widest uppercase text-lg">
            Unfiltered
          </span>
          <span className="font-cinzel font-bold text-saddle tracking-[0.3em] uppercase text-xs">
            Roots
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/start-here" className="font-cinzel text-xs tracking-widest uppercase text-deep-olive hover:text-saddle transition-colors">
            Start Here
          </Link>
          <Link href="/resources" className="font-cinzel text-xs tracking-widest uppercase text-deep-olive hover:text-saddle transition-colors">
            Resources
          </Link>
          <a href="https://instagram.com/unfilteredroots" target="_blank" rel="noopener noreferrer"
            className="font-cinzel text-xs tracking-widest uppercase text-deep-olive hover:text-saddle transition-colors">
            Instagram
          </a>
          <a href="https://youtube.com/@theunfilteredroots" target="_blank" rel="noopener noreferrer"
            className="font-cinzel text-xs tracking-widest uppercase text-deep-olive hover:text-saddle transition-colors">
            YouTube
          </a>
          <Link href="#subscribe"
            className="px-5 py-2 bg-saddle text-parchment font-cinzel font-bold tracking-widest uppercase text-xs hover:bg-warm-oak transition-colors">
            Free Checklist
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-deep-olive"
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-deep-olive mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-deep-olive mb-1 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-deep-olive transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-parchment border-t border-warm-oak/20 px-6 py-6 flex flex-col gap-5">
          <Link href="/start-here" onClick={() => setOpen(false)}
            className="font-cinzel text-sm tracking-widest uppercase text-deep-olive">Start Here</Link>
          <Link href="/resources" onClick={() => setOpen(false)}
            className="font-cinzel text-sm tracking-widest uppercase text-deep-olive">Resources</Link>
          <a href="https://instagram.com/unfilteredroots" target="_blank" rel="noopener noreferrer"
            className="font-cinzel text-sm tracking-widest uppercase text-deep-olive">Instagram</a>
          <a href="https://youtube.com/@theunfilteredroots" target="_blank" rel="noopener noreferrer"
            className="font-cinzel text-sm tracking-widest uppercase text-deep-olive">YouTube</a>
          <Link href="#subscribe" onClick={() => setOpen(false)}
            className="font-cinzel text-sm tracking-widest uppercase text-saddle font-bold">Free Checklist →</Link>
        </div>
      )}
    </nav>
  )
}
