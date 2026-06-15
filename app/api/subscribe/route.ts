import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendWelcomeEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'website' } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // Check if already subscribed
    const { data: existing } = await supabaseAdmin
      .from('email_subscribers')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .single()

    if (existing) {
      return NextResponse.json({ message: 'Already subscribed!' }, { status: 200 })
    }

    // Add to Supabase
    const { error } = await supabaseAdmin
      .from('email_subscribers')
      .insert({
        email: email.toLowerCase().trim(),
        source,
        subscribed_at: new Date().toISOString(),
        active: true,
      })

    if (error) throw error

    // Send welcome email
    await sendWelcomeEmail(email)

    return NextResponse.json({ message: 'Welcome to Unfiltered Roots! Check your email. 🌿' }, { status: 200 })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
