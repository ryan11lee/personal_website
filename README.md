# Ryan Lee - Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS, featuring a Mac-OS-like design aesthetic.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Mac-OS-inspired theme
- **Fonts**: SF Pro Display system fonts
- **Deployment**: Vercel (planned)
- **Analytics**: Plausible (planned)

## ✨ Features

- **Modern Design**: Clean, minimalist Mac-OS-like interface with translucency effects
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for speed with Next.js static generation
- **SEO Ready**: Structured metadata, Open Graph tags, and sitemap
- **Accessibility**: WCAG AA compliant
- **Type Safe**: Full TypeScript implementation
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm or pnpm

### Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd personal_website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and theme
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components
│   │   ├── navbar.tsx     # Navigation bar
│   │   └── footer.tsx     # Footer
│   └── ui/                # Reusable UI components
├── lib/
│   └── utils.ts           # Utility functions
```

## 🎨 Design System

The website uses a Mac-OS-inspired design system with:

- **Colors**: System colors with light/dark mode support
- **Typography**: SF Pro Display font family
- **Effects**: Backdrop blur for glass morphism
- **Spacing**: Consistent spacing scale
- **Borders**: Subtle borders with proper contrast

## 🚀 Deployment

This project is configured for deployment on Vercel:

1. **Connect to Vercel**

   ```bash
   vercel
   ```

2. **Set environment variables** (when needed)

   - `RESEND_API_KEY` - For contact form emails
   - `PLAUSIBLE_DOMAIN` - For analytics

3. **Custom domain** (planned)
   - datawithryan.com

## 🔧 Configuration

- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting with consistent style
- **Husky**: Pre-commit hooks for code quality
- **TypeScript**: Strict mode enabled
- **Tailwind**: Custom theme with Mac-OS colors

## 📝 License

This project is for personal use. All rights reserved.
