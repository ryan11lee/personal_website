import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Ryan Lee, Staff Data Scientist with expertise in machine learning, time series analysis, and Python development.',
}

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'R', 'SQL', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Machine Learning',
    items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'XGBoost'],
  },
  {
    category: 'Data Analysis',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    category: 'Databases & Tools',
    items: ['PostgreSQL', 'MongoDB', 'Docker', 'Git', 'Jupyter'],
  },
  {
    category: 'Specializations',
    items: [
      'Time Series Analysis',
      'Anomaly Detection',
      'Statistical Modeling',
      'Data Visualization',
      'MLOps',
    ],
  },
]

const experience = [
  {
    title: 'Staff Data Scientist',
    company: 'Current Role',
    period: 'Present',
    description:
      'Leading data science initiatives with focus on multivariate time series analysis and anomaly detection systems.',
  },
  {
    title: 'Data Scientist',
    company: 'Previous Experience',
    period: 'Past',
    description:
      'Developed machine learning models and statistical analyses to drive business insights and decision-making.',
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a passionate data scientist with expertise in machine
                learning, time series analysis, and statistical modeling. I love
                exploring complex datasets and extracting meaningful insights
                that drive business decisions.
              </p>
              <p>
                My journey into data science began with a strong foundation in
                mathematics and computer science. Over the years, I&apos;ve
                developed expertise in Python, R, and SQL, along with various
                machine learning frameworks including TensorFlow, scikit-learn,
                and pandas.
              </p>
              <p>
                I specialize in time series forecasting, anomaly detection, and
                building end-to-end machine learning pipelines. Whether
                it&apos;s predicting market trends, optimizing business
                processes, or uncovering hidden patterns in data, I enjoy
                tackling challenging problems that require both technical
                expertise and creative thinking.
              </p>
              <p>
                When I&apos;m not diving deep into data, you can find me
                exploring new technologies, reading research papers, or sharing
                knowledge through blog posts and technical discussions. I
                believe in the power of continuous learning and collaboration to
                push the boundaries of what&apos;s possible with data.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden glass">
              <Image
                src="/profile-placeholder.jpg"
                alt="Ryan Lee"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <SectionHeading
          title="Technical Skills"
          description="Technologies and tools I use to build data-driven solutions"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.category}>
              <CardHeader>
                <CardTitle>{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <SectionHeading
          title="Professional Experience"
          description="My journey in data science and analytics"
          className="mb-12"
        />
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Personal Interests */}
      <section>
        <SectionHeading
          title="Beyond Data Science"
          description="What I'm passionate about outside of work"
          className="mb-12"
        />
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">
                  Learning & Research
                </h4>
                <p className="text-muted-foreground">
                  I&apos;m constantly exploring new developments in machine
                  learning and AI. I enjoy reading research papers,
                  experimenting with new algorithms, and staying up-to-date with
                  the latest trends in data science.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">
                  Open Source
                </h4>
                <p className="text-muted-foreground">
                  I believe in contributing back to the community. I enjoy
                  working on open source projects and sharing knowledge through
                  blog posts and technical discussions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
