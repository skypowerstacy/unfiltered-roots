import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(email: string) {
  try {
    await resend.emails.send({
      from: 'Stacy at Unfiltered Roots <hello@unfilteredroots.com>',
      to: email,
      subject: '🌿 Welcome — here\'s your Clean Home Starter Checklist',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Georgia, serif; background: #F2EBD9; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
            .logo { text-align: center; margin-bottom: 32px; }
            .logo-text { font-size: 28px; font-weight: 900; color: #2C3D1A; letter-spacing: 0.08em; text-transform: uppercase; }
            .logo-sub { font-size: 14px; color: #7A5C35; letter-spacing: 0.2em; text-transform: uppercase; }
            h1 { color: #2C3D1A; font-size: 24px; margin-bottom: 16px; }
            p { color: #2C3D1A; line-height: 1.8; font-size: 16px; }
            .checklist { background: white; border-left: 4px solid #7A5C35; padding: 24px; margin: 24px 0; border-radius: 4px; }
            .checklist-item { display: flex; align-items: flex-start; margin-bottom: 12px; color: #2C3D1A; font-size: 15px; line-height: 1.6; }
            .check { color: #7A5C35; font-weight: bold; margin-right: 10px; flex-shrink: 0; }
            .btn { display: block; background: #7A5C35; color: white; text-align: center; padding: 16px 32px; text-decoration: none; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase; font-size: 13px; margin: 24px 0; border-radius: 2px; }
            .divider { border: none; border-top: 1px solid #7A5C3544; margin: 32px 0; }
            .footer { text-align: center; color: #4A3520; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <div class="logo-text">Unfiltered Roots</div>
              <div class="logo-sub">Where Clean Living Takes Root</div>
            </div>

            <h1>Welcome — you're in the right place. 🌿</h1>

            <p>Thank you for joining Unfiltered Roots. I started this because I was tired of feeling overwhelmed by what's hiding in our homes, our food, and our bodies — and I couldn't find anyone breaking it down simply and without the fear.</p>

            <p>That's what this is. No overwhelm. No judgment. Just the facts and better choices, one swap at a time.</p>

            <p><strong>Here's your Clean Home Starter Checklist — 10 swaps to make right now:</strong></p>

            <div class="checklist">
              <div class="checklist-item"><span class="check">→</span> Replace non-stick pans with cast iron or stainless steel</div>
              <div class="checklist-item"><span class="check">→</span> Swap plastic food storage for glass containers</div>
              <div class="checklist-item"><span class="check">→</span> Ditch synthetic candles for beeswax or soy</div>
              <div class="checklist-item"><span class="check">→</span> Replace plastic cutting boards with wood or bamboo</div>
              <div class="checklist-item"><span class="check">→</span> Switch to a water filter that removes fluoride + chlorine</div>
              <div class="checklist-item"><span class="check">→</span> Replace synthetic cleaning sprays with Branch Basics or Blueland</div>
              <div class="checklist-item"><span class="check">→</span> Check your deodorant for aluminum — swap if needed</div>
              <div class="checklist-item"><span class="check">→</span> Replace plastic wrap with beeswax wraps or silicone bags</div>
              <div class="checklist-item"><span class="check">→</span> Swap your laundry detergent for a fragrance-free clean option</div>
              <div class="checklist-item"><span class="check">→</span> Read the ingredient label on everything for 7 days straight</div>
            </div>

            <a href="https://unfilteredroots.com/start-here" class="btn">See All My Recommended Swaps →</a>

            <hr class="divider" />

            <p>Every week I send one swap, one ingredient to avoid, and one product I actually use. That's it. No overwhelm.</p>

            <p>Follow along on Instagram <a href="https://instagram.com/unfilteredroots" style="color: #7A5C35;">@unfilteredroots</a> for daily clean living content.</p>

            <p style="margin-top: 32px;">Talk soon,<br/><strong>Unfiltered Roots</strong></p>

            <hr class="divider" />
            <div class="footer">
              <p>You're receiving this because you signed up at unfilteredroots.com</p>
              <p><a href="{{{UNSUBSCRIBE_URL}}}" style="color: #4A3520;">Unsubscribe</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error('Error sending welcome email:', error)
    return { success: false, error }
  }
}

export async function sendWeeklyNewsletter(emails: string[], subject: string, content: string) {
  // Send in batches of 50
  const batches = []
  for (let i = 0; i < emails.length; i += 50) {
    batches.push(emails.slice(i, i + 50))
  }

  for (const batch of batches) {
    await resend.emails.send({
      from: 'Stacy at Unfiltered Roots <hello@unfilteredroots.com>',
      to: batch,
      subject,
      html: content,
    })
  }
}
