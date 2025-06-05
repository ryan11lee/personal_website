import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
// We'll render MDX content directly since we're using @next/mdx
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back to Blog */}
      <Link
        href="/blog"
        className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-8"
      >
        <svg
          className="mr-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="mb-4">
          <time className="text-muted-foreground text-sm">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="mx-2 text-muted-foreground">•</span>
          <span className="text-muted-foreground text-sm">
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-4">
          {post.title}
        </h1>

        <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Article Footer */}
      <footer className="mt-16 pt-8 border-t border-border/40">
        <div className="flex items-center">
          <div>
            <p className="font-medium text-foreground">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">
              Staff Data Scientist
            </p>
          </div>
        </div>
      </footer>
    </article>
  )
}
