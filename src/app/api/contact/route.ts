import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build')

export async function POST(request: NextRequest) {
  try {
    // Security: Check if RESEND_API_KEY is properly configured
    if (
      !process.env.RESEND_API_KEY ||
      process.env.RESEND_API_KEY === 'dummy_key_for_build'
    ) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { name, email, subject, message } = body

    // Security: Input validation and sanitization
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Security: Length limits to prevent abuse
    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Input exceeds maximum length' },
        { status: 400 }
      )
    }

    // Security: Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email) || email.length > 100) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Security: Basic spam detection
    const spamKeywords = [
      'bitcoin',
      'crypto',
      'lottery',
      'urgent',
      'click here',
    ]
    const combinedText = `${name} ${subject} ${message}`.toLowerCase()
    if (spamKeywords.some((keyword) => combinedText.includes(keyword))) {
      return NextResponse.json(
        { error: 'Message appears to be spam' },
        { status: 400 }
      )
    }

    // Security: Escape HTML to prevent XSS
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <noreply@datawithryan.com>',
      to: ['hello@datawithryan.com'], // Replace with your actual email
      subject: `Contact Form: ${escapeHtml(subject)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <div>
            <strong>Message:</strong>
            <div style="background-color: #f5f5f5; padding: 15px; margin-top: 10px; border-radius: 5px;">
              ${escapeHtml(message).replace(/\n/g, '<br>')}
            </div>
          </div>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 14px;">
            This email was sent from the contact form on datawithryan.com
          </p>
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
