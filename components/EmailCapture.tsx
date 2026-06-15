'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  variant?: 'hero' | 'inline' | 'footer'
  source?: string
}

export default function EmailCapture({ variant = 'hero', source = 'website' }: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (variant === 'hero') {
    return (
      <div className="w-full max-w-lg mx-auto">
        <p className="text-dark-wood font-lora text-sm tracking-widest uppercase text-center mb-4">
          Free Clean Home Starter Checklist
        </p>
        {status === 'success' ? (
          <div className="bg-carved-olive text-parchment p-4 text-center font-lora text-sm leading-relaxed">
            🌿 {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-4 bg-white border border-warm-oak/30 text-deep-olive font-lora placeholder:text-dark-wood/50 focus:outline-none focus:border-saddle"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-saddle text-parchment font-cinzel font-bold tracking-widest uppercase text-sm hover:bg-warm-oak transition-colors duration-300 disabled:opacity-70 whitespace-nowrap"
            >
              {status === 'loading' ? 'Joining...' : 'Get It Free →'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-saddle text-sm mt-2 text-center font-lora">{message}</p>
        )}
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className="bg-deep-olive/5 border border-deep-olive/10 p-8">
        <h3 className="font-cinzel font-bold text-xl text-deep-olive tracking-wide mb-2">
          The Unfiltered Edit
        </h3>
        <p className="font-lora text-dark-wood text-sm leading-relaxed mb-6">
          Weekly — one swap, one ingredient to avoid, one product I actually use. No overwhelm.
        </p>
        {status === 'success' ? (
          <div className="bg-carved-olive text-parchment p-4 text-center font-lora text-sm">
            🌿 {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="px-4 py-3 bg-white border border-warm-oak/30 text-deep-olive font-lora placeholder:text-dark-wood/50 focus:outline-none focus:border-saddle text-sm"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-saddle text-parchment font-cinzel font-bold tracking-widest uppercase text-xs hover:bg-warm-oak transition-colors duration-300 disabled:opacity-70"
            >
              {status === 'loading' ? 'Joining...' : 'Join The List →'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-saddle text-xs mt-2 font-lora">{message}</p>
        )}
      </div>
    )
  }

  return null
}
