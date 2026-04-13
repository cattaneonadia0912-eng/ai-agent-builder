

## Manus AI Webinar Funnel — Dark Theme, Mobile-First, 1400px Cap

### Summary
Build a 3-page dark-themed webinar funnel (Landing, VIP Upsell, Thank You) with brand colors Navy/Gold/Red, mobile-first responsive design capped at 1400px, Google Fonts (DM Sans, Space Grotesk, Open Sans), and interactive elements (countdown timers, seat counters, forms).

### Files to Create/Modify (10 files)

**Design System (2 files):**
1. `src/index.css` — Dark theme CSS variables (all HSL), Google Fonts import, gear/circuit CSS pattern class, remove `.dark` toggle (dark-only)
2. `tailwind.config.ts` — Brand color tokens (`brand-navy: #0A2540`, `brand-gold: #FFD700`, `brand-red: #E30613`, `brand-surface: #0F2A47`, `brand-dark: #0A1628`, `brand-muted: #94A3B8`)

**Shared Components (4 files):**
3. `src/components/CountdownTimer.tsx` — Reusable timer with `useEffect`/`setInterval`, accepts target date prop; also supports minute-based countdown for upsell
4. `src/components/StickyHeader.tsx` — Scroll-triggered sticky nav with logo text + gold "Register Free →" CTA
5. `src/components/GoldSeal.tsx` — CSS-only circular gold guarantee badge
6. `src/components/Footer.tsx` — Shared footer: © 2026 Automated Marketer | Privacy | Terms

**Pages (3 files):**
7. `src/pages/Index.tsx` — Landing page, 7 sections:
   - Hero (`#0A2540` + circuit overlay): H1, countdown to Apr 27 2026 3PM CST, gold CTA, red urgency text, 400×500 photo placeholder
   - Dream Outcome (`#0F2A47`): 3 gold-bordered cards
   - Proof & Credibility (`#0A1628`): credentials, social proof bar, photo placeholder
   - How It Works (`#0A2540`): 3-day timeline (horizontal lg, vertical mobile)
   - What's Included (`#0F2A47`): two-column grid, gold checkmarks, value stack totaling $1,329
   - Guarantee (`#0A2540`): gold seal + guarantee text
   - Registration Form (`#0A1628`): first/last name, email, phone, gold submit button, POST to placeholder webhook, redirects to `/vip-upsell`

8. `src/pages/VipUpsell.tsx` — VIP upsell:
   - Gold congratulations banner (only bright section)
   - VIP stack with 7 items, gold checkmarks, total $1,979 → $97
   - 15-minute countdown timer + seat counter (reads `?seats=` param, default 47)
   - Checkout form (name, email, card fields — placeholder only), POST to webhook
   - Decline link → `/thank-you`, upgrade → `/thank-you?vip=true`

9. `src/pages/ThankYou.tsx` — Confirmation:
   - Gold checkmark hero on navy, headline with event date
   - 3-step "What Happens Next" cards
   - Webinar details box (dates, time, format, host)
   - Conditional VIP section via `?vip=true` URL param
   - Share buttons (Facebook, LinkedIn, Email) + Community CTA

**Routing (1 file):**
10. `src/App.tsx` — Add `/vip-upsell` and `/thank-you` routes

### Design Spec

| Token | Value | Usage |
|-------|-------|-------|
| Page bg | `#0A1628` | Base background |
| Primary navy | `#0A2540` | Alternating sections |
| Card surface | `#0F2A47` | Cards, alternating sections |
| Gold | `#FFD700` | CTAs, borders, checkmarks, seals |
| Red | `#E30613` | Urgency text, scarcity |
| Text primary | `#FFFFFF` | All headings and body on dark |
| Text muted | `#94A3B8` | Supporting text |
| Gold border | `rgba(255,215,0,0.2)` | Subtle card borders |

**Typography**: DM Sans (headings), Space Grotesk (alt headings), Open Sans (body) — loaded via Google Fonts in `index.html`.

**Layout**: All sections use `max-w-[1400px] mx-auto` with `px-4 md:px-6 lg:px-8`. Mobile-first breakpoints at `md:768px` and `lg:1024px`.

### Technical Details
- Countdown: `useEffect` + `setInterval`, target `new Date('2026-04-27T15:00:00-05:00')` (CST)
- Upsell timer: 15-minute countdown from page load
- Seat counter: `useSearchParams().get('seats')` → default 47
- VIP conditional: `useSearchParams().get('vip') === 'true'`
- Forms: controlled inputs with basic validation, POST to `https://webhook.placeholder.com/register` and `https://webhook.placeholder.com/vip-checkout`
- Sticky header: `IntersectionObserver` on hero section, shows/hides on scroll
- Smooth scroll: `document.getElementById(id).scrollIntoView({ behavior: 'smooth' })`

