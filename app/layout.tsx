import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unfiltered Roots — Where Clean Living Takes Root',
  description: 'Reclaim your home, your food, and your body. Real swaps, real ingredients, no fear — just facts and better choices.',
  keywords: 'non toxic living, clean home, plastic free, clean eating, non toxic beauty, toxin free',
  openGraph: {
    title: 'Unfiltered Roots',
    description: 'Where clean living takes root.',
    url: 'https://unfilteredroots.com',
    siteName: 'Unfiltered Roots',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unfiltered Roots',
    description: 'Where clean living takes root.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
