---
name: Design System Enhancement
overview: Comprehensive design system upgrade adding textures, advanced typography interactions, directional gradients, and cursor-reactive elements across all pages with special focus on navigation transitions.
todos:
  - id: phase1-assets
    content: Download and optimize all texture assets, create gradient system in globals.css, build TextureOverlay component
    status: completed
  - id: phase2-navigation
    content: Increase Badhuche logo size, implement texture transition system, add micro-interactions
    status: completed
  - id: phase3-typography
    content: Create SplitText, MagneticText, and ScrollWeightText components, add shimmer effects
    status: completed
  - id: phase4-buttons
    content: Build directional gradient button component, update commission button, create glow system
    status: completed
  - id: phase5-homepage
    content: Implement 10 homepage enhancements including hero animations, texture overlays, and particle system
    status: completed
  - id: phase6-works
    content: Add 12 works page improvements including filter gradients, cursor trail, and 3D card tilts
    status: completed
  - id: phase7-other-pages
    content: Enhance process timeline and contact form with gradients, textures, and animations
    status: completed
  - id: phase8-global
    content: Polish global elements, optimize performance, ensure accessibility, add fallbacks
    status: completed
---

# Design System Enhancement Plan

## Overview

Transform Badhuche website with advanced interactions, textures, and gradient systems while maintaining performance and accessibility. Focus on creating a unique, award-winning art studio aesthetic with material-based transitions.

## Phase 1: Foundation & Asset Setup

### 1.1 Download & Organize Textures

**Location**: `/public/textures/`

Download from free sources (Subtle Patterns, Unsplash, Lost & Taken):

- `bronze-metal.jpg` (for home page navbar)
- `stone-concrete.jpg` (for works page navbar)
- `weathered-metal.jpg` (for process page navbar)
- `gold-leaf.jpg` (for contact page navbar)
- `paper-texture.png` (seamless tile for backgrounds)
- `canvas-texture.png` (seamless tile for sections)
- `marble-white.jpg` (for hero sections)

Optimize all images:

- Compress to WebP format with fallbacks
- Create 1x, 2x versions for retina
- Max file size: 200KB per texture

### 1.2 Create Gradient System

**File**: `/app/globals.css`

Add new CSS custom properties for gradient presets:

```css
:root {
  /* Directional gradients */
  --gradient-sunset: linear-gradient(135deg, #c2542d 0%, #b8963f 100%);
  --gradient-bronze: linear-gradient(90deg, #8b6914, #b8963f, #c2542d);
  --gradient-metal: radial-gradient(circle, #d4af37, #8b6914, #5c4f2a);
  
  /* Interactive gradients */
  --gradient-glow: radial-gradient(circle at 50% 50%, #c2542d, transparent 60%);
  --gradient-marquee: linear-gradient(90deg, transparent 0%, #b8963f 25%, #c2542d 50%, #b8963f 75%, transparent 100%);
}
```

### 1.3 Create Texture Utility Component

**File**: `/components/texture-overlay.tsx`

Build reusable texture overlay component that:

- Accepts texture name as prop
- Handles opacity and blend modes
- Supports animation triggers
- Optimizes for performance with `will-change`

---

## Phase 2: Navigation Enhancement

### 2.1 Increase Badhuche Logo Size

**File**: `/components/navigation-client.tsx` (lines 72-74)

Current: `text-xl` (1.25rem)

Change to: `text-4xl md:text-5xl` (2.25rem desktop, 3rem large screens)

Add: `tracking-wide` (letter-spacing: 0.025em)

### 2.2 Create Logo Texture System

**New File**: `/components/logo-with-texture.tsx`

Component features:

- Detects current pathname
- Maps routes to textures:
  - `/` → bronze-metal (warm metallic)
  - `/works` → stone-concrete (rough industrial)
  - `/process` → weathered-metal (aged patina)
  - `/contact` → gold-leaf (luxurious shimmer)
- Crossfade animation (1000ms duration)
- Texture overlay with `mix-blend-mode: multiply`
- Gradient overlay that shifts with texture

### 2.3 Add Logo Micro-interactions

**Same file**: `/components/logo-with-texture.tsx`

Implement:

- Scale pulse on route change (1.05x scale, 300ms)
- Particle effect on hover matching current texture theme
- Subtle glow matching page accent color
- Letter-spacing expansion on hover (0.025em → 0.05em)

---

## Phase 3: Typography Interaction System

### 3.1 Create Split-Text Component

**New File**: `/components/split-text.tsx`

Features:

- Splits text into individual characters/words
- Each wrapped in motion.span
- Supports multiple animation modes:
  - Character reveal (stagger)
  - Cursor-reactive (proximity-based)
  - Hover wave effect
  - Gradient sweep

### 3.2 Cursor-Reactive Typography

**New File**: `/components/magnetic-text.tsx`

Implementation:

- Track cursor position with `useMousePosition` hook
- Calculate distance to each character
- Apply transforms based on proximity (max 15px displacement)
- Smooth spring animations (damping: 15, stiffness: 200)
- Color shift from charcoal → terracotta within 100px radius

### 3.3 Scroll-Triggered Font Weight

**New File**: `/components/scroll-weight-text.tsx`

Uses Framer Motion's `useScroll` + `useTransform`:

- Font weight animates from 400 → 700 as element enters viewport
- Applies to all `.oh-headline` elements
- Viewport trigger: 0.2 → 0.8 (20% to 80% in view)

### 3.4 Headline Shimmer Effect

**File**: `/app/globals.css`

Add utility class `.text-shimmer`:

```css
.text-shimmer {
  background: linear-gradient(90deg, #1a1815 30%, #b8963f 50%, #1a1815 70%);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  to { background-position: 200% center; }
}
```

---

## Phase 4: Directional Gradient Buttons

### 4.1 Create Gradient Button Component

**New File**: `/components/gradient-button.tsx`

Core functionality:

- Track mouse entry point on button
- Calculate angle: `Math.atan2(y - centerY, x - centerX) * 180 / Math.PI`
- Update CSS gradient angle dynamically
- Smooth transition (600ms cubic-bezier)
- Add texture overlay that follows gradient

### 4.2 Update Commission Button

**File**: `/components/navigation-client.tsx` (lines 126-139)

Replace existing commission button with new gradient button:

- Apply directional gradient system
- Add bronze texture overlay on hover
- Glow effect that emanates from cursor entry point
- Particle burst on click

### 4.3 Create Glow Gradient System

**File**: `/app/globals.css`

Add new utilities:

```css
.glow-dynamic {
  position: relative;
  transition: all 0.6s ease-out;
}

.glow-dynamic::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: radial-gradient(circle at var(--glow-x) var(--glow-y), 
    rgba(194, 84, 45, 0.4), 
    transparent 60%);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
  filter: blur(20px);
}

.glow-dynamic:hover::before {
  opacity: 1;
}
```

---

## Phase 5: Homepage Enhancements

### 5.1 Hero Typography Animation

**File**: `/app/page.tsx` (lines 64-71)

Current: Basic TextReveal per word

Enhanced:

- Wrap in new `<SplitText mode="character-reveal" />`
- Add stagger delay per character (30ms)
- Add cursor-reactive behavior on hover
- Apply subtle shimmer gradient on scroll

### 5.2 Hero Image Texture Overlay

**File**: `/app/page.tsx` (lines 87-95)

Add texture layer to ImageReveal component:

- Paper texture overlay (opacity: 0.15)
- Increases opacity on hover (0.15 → 0.25)
- Blend mode: `multiply`

### 5.3 Enhanced CTA Button

**File**: `/app/page.tsx` (lines 270-275)

Replace with gradient button component:

- Directional gradient based on cursor entry
- Canvas texture overlay
- Animated particle trail on hover
- Glow effect following cursor

### 5.4 Stats Counter Texture Backgrounds

**File**: `/components/stats-counter.tsx`

Add texture backgrounds to each stat:

- Bronze texture behind numbers
- Subtle glow gradient
- Scale animation on reveal
- Shimmer effect on hover

### 5.5 Project Cards Glow Enhancement

**File**: `/components/project-card.tsx`

Add hover glow:

- Colored gradient based on project category
- Glow emanates from cursor position
- Intensity varies by card size (large > medium > small)
- Add subtle texture overlay on hover

### 5.6 Marquee Gradient Animation

**File**: `/components/marquee.tsx`

Add moving shimmer:

- Gradient overlay that travels horizontally
- Uses `--gradient-marquee` preset
- Animates `background-position` (40s linear infinite)
- Pauses on hover

### 5.7 Introduction Section Gradient Text

**File**: `/app/page.tsx` (lines 101-117)

Apply gradient to key words:

- "monumental art" gets terracotta gradient
- "traditional craftsmanship" gets bronze gradient
- "contemporary design" gets gold gradient

### 5.8 Scroll-Triggered Background Textures

**File**: `/app/page.tsx`

Add `<TextureOverlay />` to alternating sections:

- Hero: No texture (clean)
- Introduction: Paper texture
- Stats: Canvas texture  
- Works: No texture
- Process: Paper texture
- CTA: Marble texture

### 5.9 Magnetic Section Labels

**File**: `/app/page.tsx` (line 136, 103)

Wrap `.oh-label` elements in `<MagneticText />`:

- "(Selected Works)" label
- "(Monumental Art)" label
- Subtle magnetic pull toward cursor

### 5.10 Scroll Particle System

**New File**: `/components/scroll-particles.tsx`

Create particle emitter:

- Triggers when scrolling past hero (y > 100vh)
- Terracotta-colored particles
- Follow scroll velocity
- Fade out after 800ms
- Max 20 particles on screen

---

## Phase 6: Works Page Enhancements

### 6.1 Filter Buttons with Directional Gradients

**File**: `/components/works-filters.tsx`

Update filter buttons:

- Apply gradient button component
- Each category has unique gradient palette
- Active state shows full gradient + texture
- Inactive state shows subtle border gradient

### 6.2 Project Grid Glow System

**File**: `/app/works/page.tsx`

Add category-based glows:

- Sculpture: Bronze glow (#8b6914)
- Mural: Terracotta glow (#c2542d)
- Installation: Gold glow (#b8963f)
- Memorial: Charcoal glow (#2d2926)

### 6.3 Category Labels with Texture

**File**: `/components/project-card.tsx`

Active filter badge:

- Bronze texture background
- Gold gradient text
- Subtle pulse animation

### 6.4 Image Hover Texture Reveal

**File**: `/components/project-card.tsx`

On hover:

- Stone texture fades in over image (opacity: 0 → 0.2)
- Image scales up (1.03x)
- Texture follows cursor position slightly

### 6.5 Project Numbers Gradient Animation

**File**: `/components/project-card.tsx`

Update numbered overlay:

- Gradient fill on numbers (bronze → gold)
- Animates on hover (gradient position shifts)
- Add subtle glow behind numbers

### 6.6 Enhanced Load More Button

**File**: `/app/works/page.tsx`

Create expandable button:

- Border gradient that reveals on hover
- Gradient travels around border (clockwise)
- Texture background fills on hover
- Scale and lift effect

### 6.7 Grid Shimmer Wave

**File**: `/app/works/page.tsx`

Implement stagger effect:

- On initial page load
- Shimmer travels through grid (top-left → bottom-right)
- Each card gets subtle gradient flash
- 100ms delay between cards

### 6.8 Project Title Typography

**File**: `/components/project-card.tsx`

Add typewriter reveal:

- Triggers on card hover
- Characters appear sequentially (50ms each)
- Gradient fills characters as they appear

### 6.9 Background Pattern

**File**: `/app/works/page.tsx`

Add subtle geometric pattern:

- Repeating 200x200px grid
- Paper texture overlay
- Opacity: 0.03 (barely visible)
- Fixed background attachment

### 6.10 Cursor Trail Effect

**New File**: `/components/cursor-trail.tsx`

Works page only:

- Bronze-colored particle trail
- Particles fade and shrink
- Max 15 particles in trail
- Respects `prefers-reduced-motion`

### 6.11 Scroll Progress Gradient

**New File**: `/components/scroll-progress.tsx`

Top of works page:

- 3px height gradient bar
- Fills with bronze → gold gradient
- Updates on scroll (0% → 100%)

### 6.12 3D Tilt Cards

**File**: `/components/project-card.tsx`

Add perspective transform:

- Track cursor position over card
- Apply 3D rotation (max 10deg)
- Texture overlay shows depth with parallax
- Smooth spring animation

---

## Phase 7: Process & Contact Pages

### 7.1 Process Timeline Gradient

**File**: `/components/process-section.tsx`

Animated timeline:

- Vertical gradient line connecting steps
- Gradient flows from top to bottom
- Bronze → terracotta → gold sequence
- Loops infinitely (6s duration)

### 7.2 Process Step Icons with Textures

**File**: `/components/process-section.tsx`

Each step icon:

- Unique material texture (metal, stone, wood, gold)
- Rotates on hover with texture visible
- Gradient border that pulses
- Icon color matches texture theme

### 7.3 Large Gradient Step Numbers

**File**: `/components/process-section.tsx`

Step numbers (01, 02, 03...):

- Huge size (12rem desktop)
- Gradient fill with texture overlay
- Positioned absolute behind content
- Parallax movement on scroll

### 7.4 Contact Form Gradient Underlines

**File**: `/app/contact/contact-form.tsx`

Input focus states:

- Underline animates from left to right
- Gradient: bronze → terracotta → gold
- 400ms ease-out transition
- Label color syncs with gradient

### 7.5 Submit Button Enhancement

**File**: `/app/contact/contact-form.tsx`

Apply directional gradient button:

- Gradient angle based on cursor entry
- Gold-leaf texture overlay on hover
- Particle burst animation on submit
- Success state: gradient expands + green glow

### 7.6 Contact Info Cards Textures

**File**: `/app/contact/page.tsx`

Each contact method card:

- Email: Bronze metal texture
- Phone: Weathered metal texture
- Address: Stone texture
- Social: Gold-leaf texture

### 7.7 Form Success Animation

**New File**: `/components/form-success.tsx`

Success message appearance:

- Fades in with gradient background
- Particle confetti (terracotta + gold)
- Gradient border pulses
- Auto-dismiss after 5s

---

## Phase 8: Global Enhancements & Polish

### 8.1 Enhanced Custom Cursor

**File**: `/components/custom-cursor.tsx`

Add gradient trail:

- Cursor leaves gradient trail
- Color changes per page (matches navbar texture theme)
- Trail particles have texture
- Increases on click/interaction

### 8.2 Page Transition Gradient Wipe

**File**: `/components/page-transition.tsx`

Implement gradient wipe:

- Diagonal gradient sweeps across screen
- Color matches destination page theme
- 800ms duration
- Easing: cubic-bezier(0.76, 0, 0.24, 1)

### 8.3 Mobile Menu Texture

**File**: `/components/navigation-client.tsx` (lines 144-194)

Enhance mobile menu:

- Dark texture overlay (weathered metal)
- Menu items have gradient on hover
- Link hover: gradient underline reveal
- Background has subtle animated gradient

### 8.4 Footer Gradient Divider

**File**: `/components/footer.tsx`

Top border:

- Gradient line (bronze → gold)
- 2px height
- Subtle glow above line
- Fades in on scroll

### 8.5 Global Ambient Glow

**File**: `/app/globals.css`

Add `.interactive-glow` utility:

- Applied to all buttons, links, cards
- Subtle ambient glow on hover
- Color matches element's primary color
- 20px blur, 0.2 opacity

### 8.6 Loading State Textures

**File**: `/components/preloader.tsx`

Enhance loading animation:

- Logo has animated texture
- Gradient progress bar
- Texture morphs: bronze → stone → metal → gold
- Particle effects around logo

### 8.7 Texture Lazy Loading

**New File**: `/lib/texture-loader.ts`

Utility for performance:

- Lazy load textures as user scrolls
- Preload critical textures (above fold)
- WebP with JPEG fallback
- Cache in localStorage

### 8.8 Performance Optimization

**Multiple Files**

- Add `will-change: transform` to animated elements
- Use `transform` and `opacity` only for animations
- Implement `IntersectionObserver` for scroll triggers
- Debounce cursor position updates (16ms)
- Use CSS containment (`contain: layout style paint`)

### 8.9 Accessibility Enhancements

**Multiple Files**

- Ensure texture overlays don't reduce contrast below 4.5:1
- Add `prefers-reduced-motion` checks to all animations
- Provide alt text for texture overlays in screen readers
- Ensure gradient text has fallback solid color
- Add ARIA labels to interactive gradient elements

### 8.10 Cross-Browser Testing & Fallbacks

**Multiple Files**

- Test Safari (backdrop-filter, mask-image)
- Test Firefox (clip-path, mix-blend-mode)
- Provide gradient-only fallback if textures fail
- Test on iOS Safari (WebP support, touch interactions)
- Verify performance on lower-end devices

---

## Implementation Dependencies

**Must complete in order:**

1. Phase 1 (Foundation) → Required for all other phases
2. Phase 2 (Navigation) → Independent, can start after Phase 1
3. Phase 3 (Typography) → Required for Phase 5, 6, 7
4. Phase 4 (Buttons) → Required for Phase 5, 6, 7
5. Phases 5-7 → Can be done in any order after 1-4 complete
6. Phase 8 → Final polish after all pages complete

---

## Key Technical Considerations

### Performance Targets

- Lighthouse Performance Score: >90
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Total texture assets: <2MB compressed

### Browser Support

- Chrome/Edge: Full support (latest 2 versions)
- Safari: Full support with fallbacks (latest 2 versions)
- Firefox: Full support (latest 2 versions)
- Mobile Safari: Optimized interactions, reduced textures

### Accessibility

- WCAG 2.1 AA compliance maintained
- All animations respect `prefers-reduced-motion`
- Color contrast: Minimum 4.5:1 for body, 3:1 for large text
- Keyboard navigation works with all new interactions

### Asset Management

- Use WebP with JPEG fallbacks
- Implement srcset for responsive images
- Lazy load below-fold textures
- Use CSS-based gradients where possible (vs images)