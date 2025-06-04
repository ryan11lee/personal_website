import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/section-heading'
import { ContactForm } from '@/components/ui/contact-form'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ryan Lee for data science consulting, collaboration opportunities, or general inquiries.',
}

const contactInfo = [
  {
    title: 'Email',
    value: 'hello@datawithryan.com',
    href: 'mailto:hello@datawithryan.com',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'LinkedIn',
    value: 'ryan11lee11',
    href: 'https://www.linkedin.com/in/ryan11lee11/',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: 'GitHub',
    value: 'ryan11lee',
    href: 'https://github.com/ryan11lee',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeading
        title="Get In Touch"
        description="I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and technology."
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Let&apos;s Connect
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you&apos;re looking for data science consulting, want to
              collaborate on a project, or just have questions about machine
              learning and analytics, I&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <Card key={info.title}>
                <CardContent className="p-4">
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      info.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="flex items-center space-x-3 text-foreground hover:text-accent transition-colors"
                  >
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <div className="font-medium">{info.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {info.value}
                      </div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Response Time */}
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-foreground mb-2">
                Response Time
              </h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to messages within 24-48 hours. For urgent
                matters, please mention it in your subject line.
              </p>
            </CardContent>
          </Card>

          {/* Consultation */}
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-foreground mb-2">
                Data Science Consulting
              </h4>
              <p className="text-muted-foreground text-sm">
                Available for freelance data science projects, machine learning
                consulting, and time series analysis work. Let&apos;s discuss
                your specific needs and how I can help.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
