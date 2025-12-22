# BADHUCHE WEBSITE - 6-DAY SPRINT CHECKLIST

> Aggressive 6-day implementation plan with Sanity CMS + Vercel
> Design Inspiration: Dive Club, Ridd Studio, Codrops WebGL effects

---

## LEGEND
- [ ] Not started
- [~] In progress
- [x] Complete
- [!] Blocked

---

## SPRINT OVERVIEW

| Day | Focus | Deliverables |
|-----|-------|--------------|
| 1 | Foundation | Project setup, Sanity schemas, design tokens |
| 2 | Core UI | Custom cursor, animations, glass cards, gradient bg |
| 3 | Home Page | Hero, philosophy, selected works, stats, CTA |
| 4 | Works & Projects | Works listing, project detail, gallery |
| 5 | Remaining Pages | Studio, process, contact form |
| 6 | Polish & Deploy | Transitions, testing, Vercel deployment |

---

## DAY 1: FOUNDATION (8-10 hrs)

### Morning: Project Setup (4 hrs)

**Next.js Initialization**
- [ ] Create Next.js 15 project: `npx create-next-app@latest badhuche --typescript --tailwind --app --src-dir`
- [ ] Install all dependencies (one command):
\`\`\`bash
npm install next-sanity @sanity/image-url @portabletext/react sanity gsap lenis framer-motion three @react-three/fiber @react-three/drei split-type react-hook-form zod @hookform/resolvers clsx tailwind-merge
\`\`\`
- [ ] Set up folder structure per spec
- [ ] Add environment variables to `.env.local`
- [ ] Create `.env.example` for documentation

**Design Tokens (globals.css)**
- [ ] Configure color palette (dark theme with cyan/gold accents)
- [ ] Set up typography (Playfair Display, DM Sans)
- [ ] Add gradient variables
- [ ] Add glass/glow utility classes
- [ ] Add noise texture overlay
- [ ] Test Tailwind compilation

### Afternoon: Sanity CMS (4 hrs)

**Sanity Project**
- [ ] Create project at sanity.io/manage
- [ ] Get Project ID and create API token
- [ ] Create `sanity/sanity.config.ts`
- [ ] Create `sanity/env.ts`
- [ ] Create `app/studio/[[...tool]]/page.tsx`
- [ ] Verify Studio loads at `/studio`

**Core Schemas (parallel work)**
- [ ] `sanity/schemas/objects/imageWithAlt.ts`
- [ ] `sanity/schemas/objects/blockContent.ts`
- [ ] `sanity/schemas/objects/seo.ts`
- [ ] `sanity/schemas/documents/project.ts`
- [ ] `sanity/schemas/documents/siteSettings.ts`
- [ ] `sanity/schemas/index.ts` (export all)

**Sanity Lib**
- [ ] `sanity/lib/client.ts`
- [ ] `sanity/lib/image.ts`
- [ ] `sanity/lib/queries.ts` (all GROQ queries)

### Evening: Content Population (2 hrs)
- [ ] Add site settings (name, tagline, contact, stats)
- [ ] Add 6 featured projects (minimal data for now)
- [ ] Upload placeholder images
- [ ] Test data fetching

**Day 1 Checkpoint:** Sanity Studio working, schemas ready, basic data in CMS

---

## DAY 2: CORE UI & EFFECTS (8-10 hrs)

### Morning: Animation Foundation (4 hrs)

**Smooth Scroll**
- [ ] `components/layout/smooth-scroll.tsx` (Lenis provider)
- [ ] Integrate in root layout
- [ ] Configure scroll settings

**GSAP Animations**
- [ ] `lib/animations.ts` (all presets)
- [ ] `components/ui/text-reveal.tsx` (SplitType + GSAP)
- [ ] `components/ui/fade-up.tsx`
- [ ] `components/ui/count-up.tsx`
- [ ] Register ScrollTrigger plugin

**Custom Cursor (Priority Feature)**
- [ ] `hooks/use-cursor.ts` (context + states)
- [ ] `components/ui/cursor-provider.tsx`
- [ ] `components/ui/cursor.tsx`
  - [ ] Dual-layer cursor (outer ring + inner dot)
  - [ ] Glow trail effect (6 particles)
  - [ ] Cursor states: default, link, project, gallery, text, hidden
  - [ ] Text labels (View, Drag)
  - [ ] Magnetic snap on buttons
  - [ ] Hide on touch devices

### Afternoon: Visual Effects (4 hrs)

**WebGL Gradient Background**
- [ ] `components/three/gradient-mesh.tsx`
  - [ ] Simplex noise shader
  - [ ] Time-based animation
  - [ ] Scroll-reactive color shift
  - [ ] Performance optimized

**Glass Card Component**
- [ ] `components/ui/glass-card.tsx`
  - [ ] Backdrop blur effect
  - [ ] Border glow on hover (cyan/gold variants)
  - [ ] Subtle scale animation
  - [ ] Framer Motion integration

**Other UI Components**
- [ ] `components/ui/button.tsx` (with hover fill animation)
- [ ] `components/ui/magnetic.tsx` (wrapper component)
- [ ] `components/ui/marquee.tsx`
- [ ] `components/ui/sanity-image.tsx`

### Evening: Layout (2 hrs)

**Header**
- [ ] `components/layout/header.tsx`
  - [ ] Logo
  - [ ] Navigation links with underline animation
  - [ ] Scroll-triggered background blur
  - [ ] Mobile menu trigger

**Footer**
- [ ] `components/layout/footer.tsx`
  - [ ] Newsletter signup (placeholder)
  - [ ] Social links
  - [ ] Site links
  - [ ] Copyright

**Mobile Menu**
- [ ] `components/layout/mobile-menu.tsx`
  - [ ] Full-screen overlay
  - [ ] Staggered link animation
  - [ ] Close on route change

**Day 2 Checkpoint:** Custom cursor working, gradient background, glass cards, header/footer complete

---

## DAY 3: HOME PAGE (8-10 hrs)

### Morning: Above the Fold (4 hrs)

**Hero Section**
- [ ] `components/sections/hero.tsx`
  - [ ] Split layout (60/40)
  - [ ] Pre-title with animated line
  - [ ] Main title with character-by-character reveal
  - [ ] Gradient text for accent word ("Legacies")
  - [ ] Subtitle fade-up
  - [ ] Dual CTA buttons
  - [ ] Hero image with clip-path reveal
  - [ ] Floating badge overlay on image
  - [ ] Scroll indicator animation
  - [ ] Mobile stack layout
  - [ ] Fetch from Sanity

**Philosophy Section**
- [ ] `components/sections/philosophy.tsx`
  - [ ] Dark background (#0A0F1C)
  - [ ] Section label with gold accent
  - [ ] Large pull quote with text reveal
  - [ ] Subtle parallax decorative element

### Afternoon: Works & Stats (4 hrs)

**Selected Works**
- [ ] `components/projects/project-card.tsx`
  - [ ] Image with zoom on hover
  - [ ] Category label (cyan)
  - [ ] Title reveal
  - [ ] Cursor state integration
  - [ ] Variable sizing (large/medium/small)

- [ ] `components/sections/selected-works.tsx`
  - [ ] Section header with "View All" link
  - [ ] 2x3 grid (featured larger)
  - [ ] Staggered entrance animation
  - [ ] Fetch 6 featured projects

**Stats Section**
- [ ] `components/sections/stats.tsx`
  - [ ] 4-column layout
  - [ ] CountUp animation on scroll
  - [ ] Vertical dividers
  - [ ] Glow accent on numbers
  - [ ] Fetch from site settings

### Evening: Recognition & CTA (2 hrs)

**Recognition Section**
- [ ] `components/sections/recognition.tsx`
  - [ ] Gradient background (terracotta to gold)
  - [ ] Large quote with quotation marks
  - [ ] Author attribution
  - [ ] Background texture overlay
  - [ ] Fetch from site settings

**CTA Section**
- [ ] `components/sections/cta.tsx`
  - [ ] Centered content
  - [ ] Large headline
  - [ ] Magnetic button

**Home Page Assembly**
- [ ] `app/(site)/page.tsx`
  - [ ] Import all sections
  - [ ] Data fetching (parallel queries)
  - [ ] SEO metadata
  - [ ] Test full page scroll

**Day 3 Checkpoint:** Complete home page with all sections, animations, data from Sanity

---

## DAY 4: WORKS & PROJECTS (8-10 hrs)

### Morning: Works Listing (4 hrs)

**Project Filter**
- [ ] `components/projects/project-filter.tsx`
  - [ ] Category buttons
  - [ ] Active state styling
  - [ ] Filter animation
  - [ ] URL state sync (optional)

**Project Grid**
- [ ] `components/projects/project-grid.tsx`
  - [ ] Masonry-like layout (CSS Grid)
  - [ ] Variable card sizes
  - [ ] Staggered reveal
  - [ ] Responsive columns

**Works Page**
- [ ] `app/(site)/works/page.tsx`
  - [ ] Page header with text reveal
  - [ ] Filter integration
  - [ ] Project grid
  - [ ] Fetch all projects
  - [ ] SEO metadata

### Afternoon: Project Detail (4 hrs)

**Project Hero**
- [ ] `components/projects/project-hero.tsx`
  - [ ] Full-width image
  - [ ] Title overlay
  - [ ] Category badge
  - [ ] Back link

**Project Info**
- [ ] `components/projects/project-info.tsx`
  - [ ] Details grid (location, year, client, etc.)
  - [ ] Materials list
  - [ ] Description with portable text

**Project Gallery**
- [ ] `components/projects/project-gallery.tsx`
  - [ ] Image grid
  - [ ] Lightbox on click
  - [ ] Drag cursor state

**Project Navigation**
- [ ] `components/projects/project-navigation.tsx`
  - [ ] Prev/Next project links
  - [ ] Thumbnail preview on hover

**Project Page**
- [ ] `app/(site)/works/[slug]/page.tsx`
  - [ ] generateStaticParams
  - [ ] Fetch single project
  - [ ] All sections
  - [ ] SEO metadata

### Evening: Gallery Page (2 hrs)

**Drag Gallery**
- [ ] `components/gallery/drag-gallery.tsx`
  - [ ] Horizontal scroll container
  - [ ] Drag-to-scroll with momentum
  - [ ] Cursor "Drag" state
  - [ ] Random image positioning
  - [ ] Mobile swipe support

**Gallery Page**
- [ ] `app/(site)/gallery/page.tsx`
  - [ ] Full-screen layout
  - [ ] Gallery component
  - [ ] Fetch gallery images
  - [ ] Minimal UI

**Day 4 Checkpoint:** Works listing with filter, project detail pages, gallery page

---

## DAY 5: REMAINING PAGES (8-10 hrs)

### Morning: Studio Page (3 hrs)

**Studio Page**
- [ ] `app/(site)/studio/page.tsx`
  - [ ] Page header
  - [ ] Introduction text
  - [ ] Philosophy quote
  - [ ] Capabilities grid (glass cards)
  - [ ] Materials section
  - [ ] Team section (if applicable)
  - [ ] Fetch from Sanity

### Midday: Process Page (3 hrs)

**Process Timeline**
- [ ] `components/sections/process-timeline.tsx`
  - [ ] Horizontal timeline (desktop)
  - [ ] Vertical timeline (mobile)
  - [ ] Step numbers with connecting line
  - [ ] Step cards with details
  - [ ] Active step highlight on scroll

**Process Page**
- [ ] `app/(site)/process/page.tsx`
  - [ ] Page header
  - [ ] Timeline component
  - [ ] CTA section
  - [ ] Fetch process steps

### Afternoon: Contact Page (3 hrs)

**Contact Form (Simplified for 6-day)**
- [ ] `components/sections/contact-form.tsx`
  - [ ] Single-page form (not multi-step for time)
  - [ ] Fields: name, email, phone, project type, message
  - [ ] Floating labels
  - [ ] Validation with Zod
  - [ ] Loading state
  - [ ] Success message

**Contact API**
- [ ] `app/api/contact/route.ts`
  - [ ] Validate request
  - [ ] Send email (or log for now)
  - [ ] Return response

**Contact Page**
- [ ] `app/(site)/contact/page.tsx`
  - [ ] Split layout (form/info)
  - [ ] Contact information
  - [ ] Social links
  - [ ] Form component

### Evening: Error & Loading States (1 hr)

- [ ] `app/not-found.tsx`
- [ ] `app/error.tsx`
- [ ] Loading skeleton styles

**Day 5 Checkpoint:** All 6 pages complete, contact form working

---

## DAY 6: POLISH & DEPLOY (8-10 hrs)

### Morning: Page Transitions (2 hrs)

**Page Transition**
- [ ] `components/layout/page-transition.tsx`
  - [ ] Curtain animation (simplified)
  - [ ] Route change detection
  - [ ] Exit/enter states

**Loading Sequence**
- [ ] Initial load animation
- [ ] Logo reveal

### Midday: Testing & Fixes (4 hrs)

**Responsive Testing**
- [ ] Mobile (375px) - all pages
- [ ] Tablet (768px) - all pages
- [ ] Desktop (1024px+) - all pages
- [ ] Fix any layout issues

**Cross-Browser**
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari

**Performance Check**
- [ ] Run Lighthouse
- [ ] Fix critical issues
- [ ] Optimize images
- [ ] Check Core Web Vitals

**Bug Fixes**
- [ ] Fix any cursor issues
- [ ] Fix any animation glitches
- [ ] Test all links
- [ ] Test form submission

### Afternoon: Deployment (2 hrs)

**Pre-Deploy**
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] All env vars documented

**Vercel Setup**
- [ ] Create Vercel project
- [ ] Connect GitHub repo
- [ ] Add environment variables:
  - [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - [ ] `NEXT_PUBLIC_SANITY_DATASET`
  - [ ] `NEXT_PUBLIC_SANITY_API_VERSION`
  - [ ] `SANITY_API_READ_TOKEN`
  - [ ] `NEXT_PUBLIC_SITE_URL`
- [ ] Trigger deploy
- [ ] Verify production build

**Domain (if ready)**
- [ ] Add custom domain
- [ ] Configure DNS
- [ ] Verify SSL

**Sanity Webhook**
- [ ] Create revalidation webhook
- [ ] Test content update flow

### Evening: Final QA (2 hrs)

**Production Testing**
- [ ] All pages load
- [ ] All images load
- [ ] Animations work
- [ ] Form submits
- [ ] Mobile works
- [ ] Cursor works (desktop)

**Handoff Prep**
- [ ] Document any known issues
- [ ] List post-launch tasks
- [ ] Prepare client demo

**Day 6 Checkpoint:** Site LIVE on Vercel!

---

## POST-LAUNCH BACKLOG

**Phase 2 (Week 2)**
- [ ] Multi-step contact form upgrade
- [ ] 3D project viewer
- [ ] Video hero backgrounds
- [ ] Additional content population

**Phase 3 (Week 3)**
- [ ] Blog/Journal section
- [ ] Newsletter integration
- [ ] Advanced analytics
- [ ] SEO refinements

---

## ASSETS REQUIRED (Before Day 1)

**Must Have**
- [ ] Logo (SVG)
- [ ] 6+ project images (high-res)
- [ ] Site copy (headlines, descriptions)

**Nice to Have**
- [ ] Team photos
- [ ] Process photos
- [ ] Video content
- [ ] Texture files

---

## RISK MITIGATION

**If Running Behind:**
- Day 2: Skip WebGL gradient, use CSS gradient
- Day 4: Skip lightbox, use simple gallery
- Day 5: Use basic form instead of multi-step
- Day 6: Skip page transitions, focus on core functionality

**Blockers to Escalate:**
- Missing assets
- CMS access issues
- API/email service issues
- Domain/DNS issues

---

## CONTACT

**Project Lead:** _[Name]_
**Developer:** _[Name]_
**Client Contact:** pravin@perfectpixel.co.in

---

**Document Version:** 3.0 (6-Day Sprint)
**Created:** December 2024
