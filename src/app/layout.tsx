import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: {
    default: 'Ryan Lee - Staff Data Scientist',
    template: '%s | Ryan Lee',
  },
  description:
    'Staff Data Scientist passionate about machine learning, time series analysis, and building impactful solutions.',
  keywords: [
    'Ryan Lee',
    'Data Scientist',
    'Machine Learning',
    'Python',
    'Time Series',
    'Anomaly Detection',
  ],
  authors: [{ name: 'Ryan Lee' }],
  creator: 'Ryan Lee',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://datawithryan.com',
    siteName: 'Data With Ryan',
    title: 'Ryan Lee - Staff Data Scientist',
    description:
      'Staff Data Scientist passionate about machine learning, time series analysis, and building impactful solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Lee - Staff Data Scientist',
    description:
      'Staff Data Scientist passionate about machine learning, time series analysis, and building impactful solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
