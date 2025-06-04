import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Explore Ryan Lee's portfolio of data science and machine learning projects, including anomaly detection, time series analysis, and statistical modeling.",
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
