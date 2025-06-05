import Link from 'next/link'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
          Ryan Lee
        </h1>
        <h2 className="text-xl sm:text-2xl text-muted-foreground mb-8">
          Staff Data Scientist
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Passionate about machine learning, multivariate time series data
          analysis, and building impactful solutions with Python, R, and SQL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-accent-foreground bg-accent hover:bg-accent/90 rounded-lg transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-foreground border border-border hover:bg-muted rounded-lg transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <SectionHeading
          title="Technical Expertise"
          description="Specialized in data science, machine learning, and time series analysis"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Python, R, SQL</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>ML Libraries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Scikit-learn, TensorFlow, NumPy, Pandas
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Specialization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Multivariate Time Series Analysis
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16">
        <SectionHeading
          title="Featured Projects"
          description="Explore my latest work in machine learning and data analysis"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>
                Utilizing Autoencoders For Anomaly Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Advanced machine learning approach for identifying anomalies in
                complex datasets using autoencoder neural networks.
              </p>
              <Link
                href="/projects"
                className="text-accent hover:text-accent/80 transition-colors inline-flex items-center"
              >
                Learn more →
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Exploration of Dynamic Time Warping</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Deep dive into DTW algorithms for time series analysis and
                pattern matching applications.
              </p>
              <Link
                href="/projects"
                className="text-accent hover:text-accent/80 transition-colors inline-flex items-center"
              >
                Learn more →
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
