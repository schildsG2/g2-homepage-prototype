# G2 Homepage Prototype — Implementation Plan

## Overview
Build a pixel-perfect visual shell of https://www.g2.com/ as a Vite+React static site.
Deploy to GitHub Pages. No interactivity beyond mobile menu toggle.

## Tech Stack
- Vite + React (JSX)
- elevate-g2 tokens + component CSS (from elevate-lite)
- g2-topbar navigation (from elevate-lite template)
- GitHub Pages deployment via `vite build`

## Reference Files
- **Production screenshot**: `.sisyphus/evidence/production-screenshots/homepage-full.png`
- **g2-topbar template**: `/Users/schilds/projects/elevate-lite/components/templates/navigation/g2-topbar.html` (688 lines)
- **Elevate tokens**: `/Users/schilds/projects/elevate-lite/tokens/elevate.css` (306 lines)
- **Elevate components CSS**: `/Users/schilds/projects/elevate-lite/components/elevate.css`
- **Hero shapes**: `/Users/schilds/projects/ue/app/assets/images/dashboard-shapes*.png`
- **G2 logo SVG**: `/Users/schilds/projects/elevate-lite/assets/logos/g2-logo-rorange.svg`

## UE Source References (Slim partials → prototype sections)
| Section | UE Partial | Key classes |
|---|---|---|
| Hero | `_background_header.html.slim` | `.background-header`, `.hero-unit`, `.hero-unit__title` |
| Categories | `_category_selector.html.slim` | `.selectable-menu`, `.selectable-menu__card` |
| CMS Carousel | `_cms_content.slim` | `.bg-rorange-5`, carousel with dot pagination |
| Review CTA | `_review_callout.html.slim` | `.full-width-section--paper`, 2-col grid |
| Testimonial | `_reviewer_highlight.html.slim` | `.full-width-section--dark-blue` |
| Vendor CTA | `_vendor_callout.html.slim` | `.full-width-section--paper`, 2-col grid |
| Categories List | `_important_categories.html.slim` | `.list-columns`, accordion |
| Footer | `web_style/footer/_main.html.slim` | `.page-footer` |

---

## Wave 1: Project Scaffold + Data + CSS Foundation

### Task 1.1: Vite+React Project Scaffold
**Files**: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`

- `npm create vite@latest . -- --template react`
- Configure `vite.config.js` with base path for GitHub Pages
- Create `vercel.json` with SPA rewrite (kept for flexibility)
- Basic `App.jsx` that renders `<Layout><HomePage /></Layout>`
- React Router NOT needed — single page

### Task 1.2: Copy Elevate CSS + Assets
**Files**: `public/css/elevate-tokens.css`, `public/css/elevate-components.css`, `src/styles/g2-topbar.css`, `src/styles/homepage.css`, `public/images/`

- Copy `elevate-lite/tokens/elevate.css` → `public/css/elevate-tokens.css`
- Copy `elevate-lite/components/elevate.css` → `public/css/elevate-components.css`
- Copy hero shape PNGs from UE: `dashboard-shapes*.png` → `public/images/`
- Copy G2 logo SVG → `public/images/g2-logo-rorange.svg`
- Copy section screenshot images from UE:
  - `homepage_reviews_screenshot.png` → `public/images/`
  - `reviewer_image1.png` → `public/images/`
  - `profile_screenshots.png` → `public/images/`
- Extract g2-topbar CSS (lines 9-459) into `src/styles/g2-topbar.css`
- Create `src/styles/homepage.css` with section-specific styles using elevate tokens
- Link elevate CSS in `index.html` `<head>`:
  ```html
  <link rel="stylesheet" href="/css/elevate-tokens.css">
  <link rel="stylesheet" href="/css/elevate-components.css">
  ```

### Task 1.3: Dummy Data Files
**Files**: `src/data/categories.js`, `src/data/products.js`, `src/data/footer.js`, `src/data/cms-content.js`

**categories.js** — 10 categories matching production exactly:
```
Project Management, Video Conferencing, E-Commerce Platforms,
Marketing Automation, Accounting, CRM, Expense Management,
ERP Systems, Online Backup, AI Chatbots
```

**products.js** — 9 products per category (only Project Management needed for active tab):
```
Project Management: Jira (7,689), Asana (13,523), Smartsheet (21,623),
monday Work Management (15,255), ClickUp (11,822), Notion (11,405),
Airtable (3,254), Wrike (4,524), Quickbase (1,371)
```
Each product: `{ name, reviews, rating, logoUrl }`
Logo URLs: `https://images.g2crowd.com/uploads/product/image/{id}/...` — use actual G2 CDN URLs

**cms-content.js** — 4 CMS slides from production (titles + CTAs only, with placeholder card styling)

**footer.js** — 4 columns (G2, Top Categories, Company, Policies) with all links matching production

---

## Wave 2: Navigation Shell + Hero Section

### Task 2.1: G2 Topbar Component
**Files**: `src/components/G2Topbar.jsx`
**Ref**: `/Users/schilds/projects/elevate-lite/components/templates/navigation/g2-topbar.html`

- Port g2-topbar HTML (lines 463-558) to JSX faithfully
- Port mobile drawer (lines 581-629) to JSX
- Port JS (lines 631-685) to React useState:
  - `isMenuOpen` — mobile menu toggle
  - `searchValue` — search input clear button visibility
  - `document.body.style.overflow = 'hidden'` when menu open
- Use `elv-g2-btn` classes (NOT elevate `.btn` classes)
- Logo: `<img src="/images/g2-logo-rorange.svg" />`
- Nav items: Software▾, AI Agents, Services▾ (xxl), For Vendors▾ (xxl), Deals (xxl)
- Actions: Pin icon, "Leave a Review" (purple filled), "Join or Log In" (purple hollow)
- Mobile: Pin icon + hamburger → off-canvas drawer
- **Must NOT use** `[elv]` attribute — g2-topbar uses `.elv-g2-*` namespace

### Task 2.2: Hero Section
**Files**: `src/components/HeroSection.jsx`, `src/styles/hero.css`
**Ref**: `/Users/schilds/projects/ue/app/views/dashboard/_background_header.html.slim`, `/Users/schilds/projects/ue/webpack/assets/stylesheets/components/_background_header.scss`

**Canonical responsive background image mapping** (from `BackgroundImages.rb` — breakpoints match UE production):
- Full-width section with responsive background image:
  - Default (mobile): `dashboard-shapes-narrow-600.png`
  - `≥46.875em` (750px): `dashboard-shapes-600.png`
  - `≥62.5em` (1000px): `dashboard-shapes-620.png`
  - `≥79.375em` (1270px): `dashboard-shapes-778.png`
- Background: light rorange tint (`--palette-rorange-20` / `#fff6f5`)
- Content overlay (centered, z-index above background):
  - H1: **"Where you go for software."** — large title, Figtree, dark text
  - Subtitle: "Find the right software and services based on **3,486,300+** real reviews."
    - Review count in `--palette-rorange-100` (#ff492c)
  - Search bar: pill-shaped input (border-radius 18px), placeholder "Search software"
    - Use `.elv-rounded-search` pattern from g2-topbar CSS
  - Quick links row:
    - ⭐ "Best Products 2026" pill
    - 📈 "Trending Products" pill
    - Styled as inline links with SVG icons

### QA Gate — Wave 2 (Lightweight — Prototype Only)
**Tool**: Playwright MCP (`playwright_browser_*`) or `npx agent-browser` fallback.
**Prerequisite**: Dev server running (`npm run dev`, note port).

**Steps:**
1. `playwright_browser_navigate(url="http://localhost:5173/")`
2. `playwright_browser_take_screenshot(type="png", filename=".sisyphus/evidence/wave-2-qa/desktop-1440.png")` at default viewport
3. `playwright_browser_snapshot()` → save as `.sisyphus/evidence/wave-2-qa/desktop-snapshot.txt`
4. `playwright_browser_resize(width=375, height=812)` → screenshot as `mobile-375.png`
5. Verify hamburger icon is visible at 375px (check snapshot for `elv-g2-topnav__hamburger`)
6. `playwright_browser_resize(width=1440, height=900)` → screenshot as `desktop-1440-restored.png`

**Pass criteria (ALL must be true):**
- [ ] G2 logo visible in topbar
- [ ] Search bar renders with "Search Software and Services" placeholder
- [ ] Desktop nav items visible at 1440px: "Software", "AI Agents"
- [ ] Hamburger visible at 375px, desktop nav hidden
- [ ] Hero H1 "Where you go for software." visible
- [ ] Hero background shapes image loads (not broken image icon)
- [ ] "Best Products 2026" and "Trending Products" pills visible below search
- [ ] No console errors (check `playwright_browser_console_messages(level="error")`)

---

## Wave 3: Page Sections (Top to Bottom)

### Task 3.1: Category Selector Section
**Files**: `src/components/CategorySelector.jsx`, `src/styles/category-selector.css`
**Ref**: `_category_selector.html.slim`, production screenshot

- Full-width section, white/paper background
- Left column (5/12 at xxl, 6/12 at lg):
  - H2: **"Most Popular Software Categories"**
  - Tab list: 10 category buttons, vertical stack
  - "Project Management" active (highlighted with `selectable-menu__item--active`)
  - Other tabs visible but static
- Right column (7/12 at xxl, 6/12 at lg):
  - 3×3 grid of product cards (xlarge), 2-col at smaller
  - Each card: product name, star rating, review count, product logo
  - Star ratings: CSS-based stars matching UE `.stars.stars--small` pattern
  - Product logos: real URLs from `images.g2crowd.com`
- Top-right link: "See all Project Management Software →"
- **Must match**: exact category names, product names, review counts from production

### Task 3.2: CMS Content Carousel
**Files**: `src/components/CMSCarousel.jsx`, `src/styles/cms-carousel.css`
**Ref**: `_cms_content.slim`, production screenshot

- Full-width section, `bg-rorange-5` background (light salmon/peach)
- Single visible card (wider, full-width within container)
- 4 dot pagination indicators below (first dot active)
- Card content: title + CTA text (from cms-content.js data)
- Static — no slide animation (visual shell)
- Matching the card layout from the screenshot: image left, text right (or full card)

### Task 3.3: Review Callout Section
**Files**: `src/components/ReviewCallout.jsx`
**Ref**: `_review_callout.html.slim`, production screenshot

- Full-width section, white/paper background
- 2-column grid at xlarge (50/50):
  - Left: Screenshot image (`homepage_reviews_screenshot.png`)
  - Right (vertically centered):
    - H2: **"Using software?"** (`--palette-purple-100`)
    - Subhead: **"Leave a review."** (same purple)
    - Body: "Help over 5 million monthly Buyers on G2 make the right choice for their business."
    - CTA: "Leave a Review" (`.btn--hollow.btn--rounded.btn--rorange` — orange outlined pill button)

### Task 3.4: Testimonial Section
**Files**: `src/components/TestimonialSection.jsx`, `src/styles/testimonial.css`
**Ref**: `_reviewer_highlight.html.slim`, production screenshot

- Full-width section, dark blue background (`.full-width-section--dark-blue`)
  - Background color: approximately `#1b2559` or `--palette-purple-180` area
- 2-column grid at xlarge:
  - Left (7/12): Large quote text, white:
    - *"G2 has been a great place for me to both **find** and **review** software…it's actually been fun to see my reviews go up, get marked helpful..."*
    - "find" and "review" in `--palette-rorange-100` (orange-red), bold
  - Right (4/12 + 1 offset): Reviewer portrait image
- Below quote:
  - **Matthew Gardner** (semibold, white)
  - Co-founder, RouteThis
  - G2 Reviewer
- On mobile: portrait shows inline before attribution

### Task 3.5: Vendor Callout Section
**Files**: `src/components/VendorCallout.jsx`
**Ref**: `_vendor_callout.html.slim`, production screenshot

- Full-width section, white/paper background
- 2-column grid at xlarge (reversed from review callout):
  - Left (vertically centered):
    - H2: **"Selling software?"** (`--palette-purple-100`)
    - Subhead: **"Reach more buyers."** (same purple)
    - Body: "Your future customers are researching their next purchase on G2. Make sure they can find you."
    - CTA: "Claim Your G2 Profile" (orange outlined pill button)
  - Right: Screenshot image (`profile_screenshots.png`)

### Task 3.6: Important Categories Section
**Files**: `src/components/ImportantCategories.jsx`, `src/styles/important-categories.css`
**Ref**: `_important_categories.html.slim`, production screenshot

- H2: **"Research popular software & services."**
- Multi-column link grid (CSS columns or grid):
  - Parent: bold purple link (`--palette-purple-100`, font-weight 600)
  - Children: regular weight with chevron (`link--chevron`)
  - Final link: **"All Software"** (bold purple)
- Static expanded view (no accordion behavior for visual shell)

**Canonical category data (from production, embed in `src/data/important-categories.js`):**
```
1. Natural Language Processing (NLP) Software → Large Language Models (LLMs) Software, AI Image Generators Software, Text to Speech Software, Vector Database Software
2. Collaboration & Productivity Software → VoIP Providers, Board Management Software, Digital Adoption Platforms, Survey Software, Video Conferencing Software
3. Customer Service Automation Software → Customer Self-Service Software, Governance Risk & Compliance Software, Enterprise Risk Management (ERM) Software, Security Compliance Software, Third Party & Supplier Risk Management, Audit Management Software, Anti-Money Laundering Software, Business Continuity Management Software, Operational Risk Management Software
4. Marketing Software → Marketing Automation Software, Customer Data Platforms (CDP), Email Marketing Software, Mobile Marketing Software, Online Reputation Management Software, SEO Tools, SMO Marketing Software, Marketing Analytics Software, Inbound Call Tracking Software, Online Community Management Software, Digital Signage Software, User Research Tools, Webinar Platforms, Affiliate Marketing Software
5. Sales Intelligence Software → Contract Management Software, Sales Compensation Software, Contract Lifecycle Management (CLM) Software, Auto Dialer Software, AI Sales Assistant Software
6. (remaining parent categories from footer.js data — the footer already contains the full Top Categories column which mirrors this section)
```
Note: The exact production list has ~9 parent groups. Use the screenshot as final arbiter for which parents/children appear. Data file must be self-contained — no runtime lookups.

### Task 3.7: Footer
**Files**: `src/components/Footer.jsx`, `src/styles/footer.css`
**Ref**: `web_style/footer/_main.html.slim`, production screenshot

- Dark background section
- 4 columns:
  - **G2**: G2 Deals, TechBlend, Learning Hub, Software Reviews, etc.
  - **Top Categories**: AI Chatbots, CRM, Project Management, etc.
  - **Company**: About, Customer Support, G2 Gives, Careers, etc. + address
  - **Policies**: Community Guidelines, Scoring, Terms, Privacy, etc.
- Sub-footer: "© 2026, G2.com, Inc. All rights reserved."
- Static layout (no accordion on mobile for visual shell)

### QA Gate — Wave 3 (Full — Production Comparison)
**Tool**: Playwright MCP (`playwright_browser_*`).
**Prerequisite**: Dev server running.

**Steps:**
1. Navigate to `http://localhost:5173/` at 1440×900 viewport
2. Take full-page screenshot: `playwright_browser_take_screenshot(type="png", fullPage=true, filename=".sisyphus/evidence/wave-3-qa/full-page-1440.png")`
3. Take DOM snapshot: `playwright_browser_snapshot(filename=".sisyphus/evidence/wave-3-qa/full-page-snapshot.txt")`
4. Open `.sisyphus/evidence/production-screenshots/homepage-full.png` side-by-side (visual compare)
5. For each section, verify against production screenshot:

**Per-section pass criteria:**
- [ ] **Category Selector**: H2 "Most Popular Software Categories" visible, "Project Management" tab highlighted, 9 product cards with logos loaded (not broken), star ratings rendered
- [ ] **CMS Carousel**: Light salmon/peach background, card visible, 4 dot indicators below
- [ ] **Review Callout**: Screenshot image left, purple "Using software?" heading right, "Leave a Review" orange pill button
- [ ] **Testimonial**: Dark blue/navy background, white quote text, "find" and "review" in orange, reviewer portrait right (desktop)
- [ ] **Vendor Callout**: Purple "Selling software?" heading left, screenshot image right, "Claim Your G2 Profile" orange pill button
- [ ] **Important Categories**: Multi-column layout, parent links in purple bold, child links with chevrons
- [ ] **Footer**: 4-column layout visible, "© 2026" sub-footer text

**Color spot-checks (inspect or snapshot):**
- Purple headings: `#5746b2` (var(--palette-purple-100))
- Orange CTA buttons: `#ff492c` border (var(--palette-rorange-100))
- Testimonial bg: dark navy (check visually against screenshot)
- CMS carousel bg: light peach/salmon

**Failure handling**: Any broken images, missing sections, or wrong background colors → fix before proceeding to Wave 4.

---

## Wave 4: Polish + Deploy

### Task 4.1: Responsive Polish
- Verify all sections stack properly on mobile (<600px)
- Topbar switches to hamburger at <1000px
- Hero shapes use narrow variant on mobile
- Category selector stacks vertically
- CTA sections stack image above/below text
- Footer columns stack

### Task 4.2: Shift+R Reset + State Management
**Files**: `src/store.js`
- Minimal store (no state needed for visual shell, but Shift+R should reload page)
- `useEffect` in App.jsx for Shift+R → `window.location.reload()`

### Task 4.3: GitHub Pages Deployment
**Files**: `vite.config.js` (update base), `.github/workflows/deploy.yml` or manual deploy

- Set `base` in vite.config.js for GitHub Pages path
- `npm run build` → `dist/`
- Deploy via `gh-pages` npm package or GitHub Actions
- Verify all routes work (single page, no router needed)

### QA Gate — Wave 4 (Final — Pre-Deploy)
**Tool**: Playwright MCP against dev server, then against deployed URL.

**Step 1: Responsive screenshots (4 viewports)**
For each viewport: navigate, full-page screenshot, DOM snapshot.
| Viewport | Width×Height | Filename |
|---|---|---|
| Mobile | 375×812 | `.sisyphus/evidence/wave-4-qa/mobile-375.png` |
| Tablet | 768×1024 | `.sisyphus/evidence/wave-4-qa/tablet-768.png` |
| Laptop | 1024×768 | `.sisyphus/evidence/wave-4-qa/laptop-1024.png` |
| Desktop | 1440×900 | `.sisyphus/evidence/wave-4-qa/desktop-1440.png` |

**Step 2: Pass criteria per viewport**
- [ ] **375px**: Sections stack vertically, hamburger visible, no horizontal overflow, hero shapes use narrow variant
- [ ] **768px**: Category selector stacks, CTA sections stack image/text, columns single
- [ ] **1024px**: Desktop nav visible, 2-column CTA layouts, category selector side-by-side
- [ ] **1440px**: Full desktop layout matches production screenshot, all xxlarge nav items visible

**Step 3: Functional checks**
- [ ] `playwright_browser_console_messages(level="error")` returns zero errors
- [ ] All `<img>` tags load (no broken image icons in any screenshot)
- [ ] Figtree font loaded (check any text node — `font-family` should resolve to Figtree)
- [ ] Shift+R triggers page reload

**Step 4: Post-deploy verification (GitHub Pages URL)**
- [ ] Navigate to deployed URL → page loads (not 404)
- [ ] Full-page screenshot at 1440px matches dev server version
- [ ] All images load from deployed URL (relative paths resolve correctly)

**Failure handling**: Fix issues, re-screenshot, re-verify. Do not mark deploy as complete until all checks pass.

---

## File Tree (Final)
```
g2-homepage-prototype/
├── .sisyphus/
│   ├── plans/homepage-prototype.md
│   └── evidence/production-screenshots/homepage-full.png
├── public/
│   ├── css/
│   │   ├── elevate-tokens.css
│   │   └── elevate-components.css
│   └── images/
│       ├── g2-logo-rorange.svg
│       ├── dashboard-shapes.png
│       ├── dashboard-shapes-600.png
│       ├── dashboard-shapes-620.png
│       ├── dashboard-shapes-778.png
│       ├── dashboard-shapes-narrow.png
│       ├── dashboard-shapes-narrow-600.png
│       ├── homepage_reviews_screenshot.png
│       ├── reviewer_image1.png
│       └── profile_screenshots.png
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── store.js
│   ├── components/
│   │   ├── G2Topbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── CategorySelector.jsx
│   │   ├── CMSCarousel.jsx
│   │   ├── ReviewCallout.jsx
│   │   ├── TestimonialSection.jsx
│   │   ├── VendorCallout.jsx
│   │   ├── ImportantCategories.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── categories.js
│   │   ├── products.js
│   │   ├── cms-content.js
│   │   └── footer.js
│   └── styles/
│       ├── g2-topbar.css
│       ├── homepage.css
│       ├── hero.css
│       ├── category-selector.css
│       ├── cms-carousel.css
│       ├── testimonial.css
│       ├── important-categories.css
│       └── footer.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## Ownership Rules (for parallel agents)
- Wave 1-2: Single agent (scaffold + nav + hero)
- Wave 3: Can split per section if needed, but each agent owns ONLY its component + style file
- Wave 4: Single agent for polish + deploy

## Success Criteria
- [ ] All 9 sections render matching production screenshot
- [ ] Topbar responsive (desktop nav ≥1000px, hamburger <1000px)
- [ ] Hero shapes display correctly at all breakpoints
- [ ] Product logos load from G2 CDN
- [ ] Star ratings display correctly
- [ ] Colors match elevate tokens (purple headings, orange CTAs, dark blue testimonial)
- [ ] Typography: Figtree font, correct weights throughout
- [ ] Deploys to GitHub Pages successfully
- [ ] Shift+R refreshes page
