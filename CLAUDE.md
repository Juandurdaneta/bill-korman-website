# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bill Korman "The 168 Game" website - a professional Next.js marketing site for business coaching services.

## Development Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm start         # Start production server
npm run lint      # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 16 with App Router (not Pages Router)
- **React**: v19 with server/client component pattern
- **Styling**: Tailwind CSS v4 with PostCSS
- **Animations**: Framer Motion (scroll-triggered, magnetic effects, aurora backgrounds)
- **Icons**: Lucide React
- **TypeScript**: Strict mode, path alias `@/*` → `./src/*`

## Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout (Header/Footer wrapper)
│   ├── page.tsx           # Homepage (composes section components)
│   ├── globals.css        # CSS variables, custom animations, utilities
│   ├── about/             # About page with colocated section components
│   └── services/          # Services page with colocated section components
│
└── components/
    ├── layout/            # Header (sticky nav, mobile menu), Footer
    ├── sections/          # Full-width page sections (Hero, Problem, Solution, etc.)
    └── ui/                # Reusable UI primitives (Button, Card, SectionTitle, animations)
```

### Component Patterns

**Pages**: Compose multiple section components - content flows through Problem → Solution → Services pattern

**Section Components** (`src/components/sections/`):
- Mark with `'use client'` for interactivity
- Use Framer Motion `whileInView` for scroll animations
- Include background elements (GlowingOrb) for visual depth
- Content is hardcoded in component (no CMS/API)

**UI Components** (`src/components/ui/`):
- Button: variants (primary, accent, outline), sizes (sm, md, lg)
- Card: variants (default, featured, numbered) with motion animations
- Animation components: AnimatedNumber, BlurText, TextReveal, AuroraBackground

### Styling System

**CSS Variables** (defined in `globals.css`):
- Primary blue: `--primary-500` (#3498db)
- Accent green: `--accent-500` (#7ED321)
- Gold: `--gold-500` (#f1c40f)

**Typography**: Bebas Neue (headings), Plus Jakarta Sans (body) via Google Fonts

**Custom CSS Classes**: `.glass-effect`, `.gradient-text`, `.glow-*`, `.aurora-*`

## Key Configuration

- **Image domains**: `assets.cdn.filesafe.space`, `storage.googleapis.com` (configured in `next.config.ts`)
- **ESLint**: Flat config format (v9) with Next.js core-web-vitals rules

## Notes

- No testing framework configured
- No API routes - static content site
- No global state management - uses React hooks and Framer Motion hooks
- Mobile-first responsive design with breakpoints at 768px and 1024px
