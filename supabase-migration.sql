-- Run this in your Supabase SQL editor
-- Creates the email subscribers table with RLS

CREATE TABLE IF NOT EXISTS email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'website',
  active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast email lookups
CREATE INDEX IF NOT EXISTS email_subscribers_email_idx ON email_subscribers(email);
CREATE INDEX IF NOT EXISTS email_subscribers_active_idx ON email_subscribers(active);

-- Enable RLS
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Only service role can read/write (your API route uses service role key)
CREATE POLICY "Service role only" ON email_subscribers
  USING (auth.role() = 'service_role');

-- Allow inserts from anon (for the subscribe API route)
CREATE POLICY "Allow inserts" ON email_subscribers
  FOR INSERT WITH CHECK (true);
