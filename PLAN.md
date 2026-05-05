# U2 Fan Site — Implementation Plan

## Overview

Build a static personal fan site for U2, hosted on Cloudflare Pages. Pure HTML/CSS/JS — no frameworks, no build step. The site should feel personal, visually strong, and fast.

---

## Phase 1 — Foundation & Documentation ✅

**Goal:** Get the skeleton in place and document the project.

- [x] Repository set up on GitHub
- [x] Cloudflare Pages deployment configured
- [x] Base HTML/CSS/JS scaffolding
- [x] README.md — project overview, structure, local dev, deployment
- [x] PLAN.md — this file

---

## Phase 2 — Core Content Pages ✅

**Goal:** Build all primary pages with real content.

### 2.1 Design System
- [x] CSS custom properties (colors, typography, spacing)
- [x] Dark theme as default (rock/cinematic aesthetic)
- [x] Responsive layout (mobile-first grid)
- [x] Reusable components: nav, cards, timeline, section headers, footer
- [x] Mobile hamburger navigation

### 2.2 Pages
- [x] **Home** (`/`) — hero, stats bar, quick navigation cards
- [x] **Discography** (`/discography/`) — all 14 studio albums with key tracks
- [x] **Concerts** (`/concerts/`) — personal concert log with tour badges
- [x] **My Story** (`/history/`) — personal timeline of U2 fandom
- [x] **The Band** (`/band/`) — history + member profiles (Bono, Edge, Adam, Larry)
- [x] **Media** (`/media/`) — photo library grid with lightbox
- [x] **About** (`/about/`) — about this fan site

### 2.3 JavaScript
- [x] Mobile nav toggle
- [x] Active link detection
- [x] Filter tabs (discography by era, media by category)
- [x] Simple lightbox for media library

---

## Phase 3 — Enhanced Interactivity

**Goal:** Add richer interactive features without a framework.

- [ ] **Concert map** — SVG or canvas-based world map with pinned venues
- [ ] **Album player cards** — embedded Spotify/YouTube previews for each album
- [ ] **Setlist viewer** — link to setlist.fm for each attended concert
- [ ] **Search** — client-side search across albums and concerts (lunr.js or custom)
- [ ] **Favourites** — localStorage-based favourite tracks list
- [ ] **Dark/Light toggle** — manual override of system preference

---

## Phase 4 — Performance & SEO

**Goal:** Make the site fast and discoverable.

- [ ] `<meta>` tags for Open Graph (social sharing previews)
- [ ] `robots.txt` and `sitemap.xml`
- [ ] Image optimization (WebP format, correct sizing)
- [ ] `_headers` file for Cloudflare security headers (CSP, X-Frame-Options, etc.)
- [ ] Lazy loading for media grid images
- [ ] Preconnect hints for Google Fonts
- [ ] Core Web Vitals audit (Lighthouse)

---

## Phase 5 — Content Depth

**Goal:** Deepen the fan content over time.

- [ ] **Individual album pages** — full track listings, lyrics highlights, review
- [ ] **Individual concert pages** — setlist, photos from the show, memories
- [ ] **Tour pages** — overview of each major tour
- [ ] **Live recordings** — notable bootlegs and live releases
- [ ] **Essays** — longer pieces on specific albums or eras
- [ ] **Quotes** — curated Bono and Edge interview quotes

---

## Future / Stretch

These would require a backend or third-party service:

- **Guestbook** — fans leave comments (could use a service like Disqus or utterances)
- **Setlist API integration** — pull real setlist data from setlist.fm API
- **Newsletter** — fan updates via email (Buttondown, Mailchimp, etc.)
- **Analytics** — Cloudflare Web Analytics (privacy-first, no cookies)

---

## Technical Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Framework | None | Keep it simple, fast, maintainable |
| CSS approach | Custom properties + vanilla CSS | No build step, full control |
| Fonts | Google Fonts (Oswald + Inter) | Better typography without framework overhead |
| Hosting | Cloudflare Pages | Free, fast global CDN, instant deploys |
| Images | Self-hosted in `/assets/images/` | Full control, no external dependency |
| JS | Vanilla only | No bundle, instant load |

---

## File Naming Conventions

- All pages use `directory/index.html` pattern for clean URLs
- CSS: kebab-case class names (`.concert-item`, `.album-card`)
- JS: camelCase functions and variables
- Images: kebab-case filenames (`concert-1992-zoo-tv.jpg`)
