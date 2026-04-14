# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server on http://localhost:8080
npm run build        # Production build
npm run build:dev    # Dev build with source maps
npm run lint         # ESLint type checking
npm run test         # Run Vitest once
npm run test:watch   # Vitest in watch mode
npm run preview      # Preview production build
```

## Architecture

This is a **React 18 + Vite + TypeScript SPA** implementing a multi-step marketing funnel for a Manus AI webinar event. It uses shadcn/ui (Radix UI primitives) and Tailwind CSS with a custom glassmorphism dark theme.

### Funnel Flow

The app has four flat routes in `src/App.tsx`:

```
/ (Index)  →  /vip-upsell (VipUpsell)  →  /thank-you (ThankYou)
```

- **Landing page** (`/pages/Index.tsx`): 7 sections — hero, dream outcome, social proof, timeline, value stack, guarantee, registration form
- **VIP Upsell** (`/pages/VipUpsell.tsx`): One-time offer page with 15-minute countdown and scarcity copy; reads `?seats=X` from URL
- **Thank You** (`/pages/ThankYou.tsx`): Confirmation page; reads `?vip=true` param to show conditional VIP section

### State & Navigation

- **Local `useState` only** — no Redux/Zustand; form state and UI toggles are component-local
- **`useNavigate()`** drives funnel progression after form submission
- **`useSearchParams()`** reads URL params for dynamic content between pages (seat count, VIP status)
- **React Query** is wired at the root but no queries are defined — it's a placeholder for future backend integration

### API Layer

Form submissions POST JSON to a placeholder webhook (`https://webhook.placeholder.com/register`). Errors are silently caught — navigation proceeds regardless. Swap this URL to integrate a real backend.

### Design System

- **Dark theme only** — no light mode. Design tokens are HSL CSS variables defined in `src/index.css`
- **Brand colors**: deep navy `#011E4A`, red `#EB2226`, blue `#075AAA`, spindle `#B9CFED`
- **Glass utilities**: `.glass`, `.glass-strong`, `.glass-subtle` — backdrop-blur + inset box-shadow; defined in `src/index.css` and used throughout
- **Custom Tailwind tokens** in `tailwind.config.ts`: `max-w-funnel` (1400px), custom keyframes (`pulse-cta`, `fade-in`, `scale-in`, `shimmer`), and all brand colors
- **Three Google Fonts**: DM Sans (headings), Space Grotesk (alt headings), Open Sans (body) — loaded in `index.html`

### Reusable Components

- **`CountdownTimer`** — accepts either a target ISO date string or a duration in minutes; auto-selects mode
- **`StickyHeader`** — scroll-triggered at `window.scrollY > 600`, hides/shows with CSS transition
- **`GoldSeal`** — decorative guarantee badge
- **`Footer`** — shared across pages

### Key Design Document

`.lovable/plan.md` contains the original full design spec including layout sections, component specs, and design token tables. Consult it when making layout or copy changes.
