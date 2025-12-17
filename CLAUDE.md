# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DNS.SB is the official website and documentation for the DNS.SB public DNS resolver service. It's built with Next.js, Nextra (documentation framework), and TailwindCSS.

## Development Commands

```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm run export     # Export static site (outputs to /out)
```

The CI workflow runs `npm run build && npm run export` for deployment.

## Architecture

### Framework Stack
- **Next.js 13** with Nextra 2 for documentation
- **nextra-theme-docs** as the documentation theme
- **TailwindCSS** for styling (dark mode via `class` strategy)
- **TypeScript** with strict mode enabled

### Key Configuration Files
- `next.config.js` - Nextra wrapper configuration with trailing slashes enabled
- `theme.config.tsx` - Nextra theme configuration (logo, footer, SEO, navbar)
- `tailwind.config.js` - TailwindCSS config scanning `src/` and `theme.config.tsx`

### Content Structure
- `src/pages/` - MDX/MD documentation pages with `_meta.json` files controlling navigation
- `src/components/` - React components used within documentation
- `src/styles/globals.css` - Global styles and custom link hover effects
- `public/` - Static assets including favicons, images, and downloadable config files

### Page Organization
Pages use Nextra's `_meta.json` files to define navigation structure, display settings, and page themes. The homepage (`index.mdx`) uses a custom full-width layout without sidebar.

### Custom Components
- `page-home/` - Homepage sections (hero, features, call-to-action)
- `detect-dnssb/` - Component that detects if user is using DNS.SB
- `typing-animation/` - Animated typing effect for homepage
- `ThemeToggle/` - Dark/light mode switcher in navbar

### ESLint Configuration
Uses `eslint-config-sukka` with specific configs for:
- Node.js files (`.js`)
- MDX files with `plugin:mdx/recommended`
- TypeScript/TSX files with `sukka/react` and `sukka/typescript`
