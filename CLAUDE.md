# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DNS.SB is the official website and documentation for the DNS.SB public DNS resolver service. Built with Next.js 16, Nextra 4, React 19, and Tailwind CSS 4.

## Development Commands

```bash
bun install        # Install dependencies
bun run dev        # Start development server
bun run build      # Build for production (generates sitemap, builds, runs pagefind)
```

The build script runs: `bun run sitemap && next build && bun run postbuild`

The CI workflow (`bun run build`) produces static output in `/out` which is deployed to multiple global servers.

## Architecture

### Framework Stack
- **Next.js 16** with App Router and static export (`output: 'export'`)
- **Nextra 4** for documentation (major upgrade from Nextra 2)
- **Tailwind CSS 4** with PostCSS
- **TypeScript** with strict mode
- **Pagefind** for static search indexing

### Key Configuration Files
- `next.config.mjs` - Nextra wrapper with `defaultShowCopyCode: true`, trailing slashes enabled
- `tailwind.config.js` - Content paths for `app/`, `src/`, `content/`, `mdx-components.tsx`
- `app/layout.tsx` - Root layout with navbar, footer, theme configuration, and Plausible analytics
- `app/_meta.global.tsx` - Global navigation structure (replaces old `_meta.json` files)
- `mdx-components.tsx` - Global MDX component registration

### Content Structure (Nextra 4)
- `content/` - MDX/MD documentation pages organized by section
- `content/{section}/_meta.ts` - Navigation for each section (guide, doh, dot, features)
- `app/[[...mdxPath]]/page.tsx` - Catch-all route for MDX content

### Page Organization
Navigation is defined in `app/_meta.global.tsx` using TypeScript `MetaRecord`:
- `type: 'page'` - Top-level navigation items
- `type: 'menu'` - Dropdown menus (e.g., About)
- `display: 'hidden'` - Pages accessible by URL but hidden from nav
- `theme: {}` - Per-page layout options (sidebar, pagination, breadcrumb)

The homepage uses `layout: 'full'` with no sidebar/toc.

### Custom Components (src/components/)
- `page-home/` - Homepage sections (hero, features, call-to-action)
- `detect-dnssb/` - Client component detecting if user is using DNS.SB resolver
- `typing-animation/` - Animated typing effect using custom "typical" implementation
- `step-container/` - Numbered step wrapper for tutorials

### Global MDX Components
Registered in `mdx-components.tsx` and available in all MDX without imports:
- `Callout`, `Tabs`, `Tab` (from Nextra)
- `StepContainer`, `YouTubeEmbed`, `HomePage` (custom)

### ESLint
Uses Next.js ESLint config with `next/core-web-vitals` and `next/typescript`.
