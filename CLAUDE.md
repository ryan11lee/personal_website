# Claude Development Notes

This file contains development context and notes for Claude Code when working on this project.

## Project Overview

Ryan Lee's personal website "Data With Ryan" built with Next.js 15, TypeScript, and Tailwind CSS featuring a Mac-OS-like design aesthetic. Domain: datawithryan.com

## Key Commands

```bash
# Development
npm run dev

# Linting and formatting
npm run lint
npm run type-check
npm run format

# Building
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` - Required for contact form emails (from resend.com)
- `PLAUSIBLE_DOMAIN` - Optional for analytics (datawithryan.com)
- `NEXT_PUBLIC_SITE_URL` - Site URL (https://datawithryan.com)

⚠️ **Security**: Never commit actual API keys! Use environment variables only.

## Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom Mac-OS theme
- **Content**: MDX for blog posts in `/content/blog`
- **Components**: Reusable UI components in `/src/components/ui`
- **Data**: Static data in `/src/data` (projects, etc.)

## Key Features

- Mac-OS-inspired design with glass morphism effects
- Responsive navigation with mobile menu
- Contact form with serverless email sending
- MDX blog with reading time and tags
- Project showcase with filtering
- SEO optimized with metadata

## Development Notes

- All pages are statically generated except contact API route
- Images should be added to `/public` directory
- Blog posts use gray-matter for frontmatter parsing
- Color scheme follows Mac-OS system colors
- Glass effects use backdrop-filter CSS property

## Future Enhancements

- Add profile image to About page
- Create project thumbnail images
- Implement dark/light mode toggle
- Add RSS feed for blog
- Set up analytics dashboard
- Add search functionality
