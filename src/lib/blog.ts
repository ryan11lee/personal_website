import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  published: boolean
  tags: string[]
  author: {
    name: string
    avatar?: string
  }
  readingTime: string
  content: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  published: boolean
  tags: string[]
  author: {
    name: string
    avatar?: string
  }
  readingTime: string
}

export function getAllBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const files = fs.readdirSync(contentDirectory)
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const readTime = readingTime(content)

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        published: data.published !== false,
        tags: data.tags || [],
        author: data.author || { name: 'Ryan Lee' },
        readingTime: readTime.text,
      }
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getBlogPost(slug: string): BlogPost | null {
  if (!fs.existsSync(contentDirectory)) {
    return null
  }

  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const readTime = readingTime(content)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      published: data.published !== false,
      tags: data.tags || [],
      author: data.author || { name: 'Ryan Lee' },
      readingTime: readTime.text,
      content,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts()
  const tags = posts.flatMap((post) => post.tags)
  return Array.from(new Set(tags)).sort()
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  const posts = getAllBlogPosts()
  return posts.filter((post) => post.tags.includes(tag))
}
