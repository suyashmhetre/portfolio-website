# Badhuche Wireframe Specification
## Based on TRUE OH Architecture Visual Language

---

## Core Principle
**"One dark canvas. Whisper, don't shout. Parentheses are our signature."**

---

## Global Elements

### Navigation (All Pages)
\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   Badhuche                    (Works)  (Studio)  (Process)     (Commission) │
│   [logo text, regular weight]  [muted, 12px, uppercase, spaced]    [accent] │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

- Logo: "Badhuche" in Marcellus, regular weight, #F5F3EF
- Nav links: Jost 12px uppercase, #6B7280, letter-spacing: 0.1em
- Hover: opacity 0.6 → 1.0 (NO color change)
- CTA: Same style but #B8562D color
- Position: Fixed, transparent background (no blur, no bg color)
\`\`\`

### Footer (All Pages)
\`\`\`
─────────────────────────────────────────────────────────────────── [only line]

Badhuche                                                            (Instagram)
Transforming Spaces                                                  (LinkedIn)
into Cultural Landmarks                                             
                                                          pravin@perfectpixel.co.in
© (2024) Badhuche                                                  +91 7972823811
\`\`\`

---

## Page: HOME

### Section 1: Hero
\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                                                                             │
│                                                                             │
│   Transforming Spaces                          ┌──────────────────────────┐ │
│   into Cultural                                │                          │ │
│   Landmarks                                    │    [Featured Project     │ │
│                                                │     Image - Ayodhya]     │ │
│   (Monumental Art & Public Installations)      │                          │ │
│                                                │                          │ │
│                                                │    55% width             │ │
│                                                │    portrait ratio        │ │
│   (SCROLL TO EXPLORE)                          │                          │ │
│        ↓                                       └──────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

- Headline: Marcellus, ~5vw, #F5F3EF, -0.02em letter-spacing
- Subtitle in parentheses: Jost 12px uppercase, #6B7280
- Image: Floats on canvas, no border, subtle scale on load
- Scroll indicator: "(SCROLL TO EXPLORE)" + animated line
\`\`\`

### Section 2: Introduction
\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                                                                             │
│         We create monumental artworks and public installations              │
│         that celebrate culture, heritage, and human achievement.            │
│                                                                             │
│         From international airports to sacred temples, our art              │
│         transforms spaces into immersive experiences.                       │
│                                                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

- Text: Jost 20px, #9CA3AF (muted, NOT white)
- Max-width: 700px
- Centered
- Line-height: 1.7
\`\`\`

### Section 3: Selected Works
\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   (Selected Works)                                        (View All Works)  │
│                                                                             │
│   ┌────────────────────────────┐                                           │
│   │                            │         ┌─────────────────┐               │
│   │                            │         │                 │               │
│   │      LARGE IMAGE           │         │   MEDIUM        │               │
│   │      Ayodhya Airport       │         │   GAN Airport   │               │
│   │      (01)                  │         │   (02)          │               │
│   │                            │         │                 │               │
│   │                            │         └─────────────────┘               │
│   │                            │                                           │
│   └────────────────────────────┘                    ┌──────────────────────┐│
│                                                     │                      ││
│            ┌─────────────────────────┐              │   SMALL              ││
│            │                         │              │   Mother Mary        ││
│            │     MEDIUM              │              │   (03)               ││
│            │     Kedarnath           │              │                      ││
│            │     (04)                │              └──────────────────────┘│
│            │                         │                                      │
│            └─────────────────────────┘                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

- NO GRID LINES visible
- Images float with ~40-60px gaps
- Vertical offset (images don't align at top)
- Project title appears on hover (fade in, not slide)
- Number in parentheses: (01), (02), etc.
- Cursor changes to show (VIEW)
\`\`\`

### Section 4: Marquee
\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│ ← MONUMENTAL ART — CULTURAL LANDMARKS — PUBLIC INSTALLATIONS — MONUMENTAL  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

- Jost 12px uppercase, #6B7280
- Letter-spacing: 0.2em
- Infinite scroll, ~25s loop
- Separator: — (em dash)
\`\`\`

---

## Page: WORKS

### Layout
\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   (Works)                                                                   │
│                                                                             │
│   All    Airports    Museums    Public Art    Sculptures    International  │
│   [---]  [text links, not buttons, underline on active]                    │
│                                                                             │
│   ┌────────────────────────────┐      ┌─────────────────┐                  │
│   │                            │      │                 │                  │
│   │      Ayodhya Airport       │      │   GAN Airport   │                  │
│   │      (01)                  │      │   (02)          │                  │
│   │                            │      └─────────────────┘                  │
│   └────────────────────────────┘                                           │
│                                          ┌─────────────────────────────────┐│
│   ┌─────────────────┐                    │                                 ││
│   │                 │                    │   Surat Airport                 ││
│   │   Kedarnath     │                    │   (03)                          ││
│   │   (04)          │                    │                                 ││
│   └─────────────────┘                    └─────────────────────────────────┘│
│                                                                             │
│   ... continues asymmetrically                                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

- Filter: Text links only, active has subtle underline
- NO button styles for filters
- Same asymmetric layout as home
- Hover: Image brightens slightly, title fades in
\`\`\`

---

## Page: PROJECT DETAIL

### Layout
\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                                                                     │   │
│   │                         HERO IMAGE                                  │   │
│   │                         Full width                                  │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   Ayodhya Airport Mural                                                     │
│                                                                             │
│   (Location)           (Year)            (Scale)           (Materials)      │
│   Ayodhya, India       (2024)            320 ft × 25 ft    Painted Mural    │
│                                                                             │
│   ───────────────────────────────────────────────────────────────────────   │
│                                                                             │
│         Monumental mural depicting the Ramayana epic,                       │
│         admired by PM Narendra Modi and CM Yogi Adityanath                  │
│         at the airport inauguration.                                        │
│                                                                             │
│   ┌──────────────────────────┐            ┌─────────────────────────────┐   │
│   │                          │            │                             │   │
│   │      Detail Image 1      │            │      Detail Image 2         │   │
│   │                          │            │                             │   │
│   └──────────────────────────┘            └─────────────────────────────┘   │
│                                                                             │
│                    ┌─────────────────────────────────┐                      │
│                    │                                 │                      │
│                    │         Detail Image 3          │                      │
│                    │                                 │                      │
│                    └─────────────────────────────────┘                      │
│                                                                             │
│   (← Previous)                                              (Next Project →)│
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

- All metadata labels in (parentheses)
- Single thin divider line between meta and description
- Gallery: Same asymmetric approach
- Navigation: Simple text links with parentheses
\`\`\`

---

## Page: STUDIO

### Layout
\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   (Our Studio)                                                              │
│                                                                             │
│                                                                             │
│         Art has the power to define places, preserve culture,               │
│         and inspire generations. We bring this vision to life               │
│         through large-scale installations that blend traditional            │
│         craftsmanship with contemporary design.                             │
│                                                                             │
│                                                                             │
│   ┌────────────────────────────────────────────┐                           │
│   │                                            │                           │
│   │           Workshop/Studio Image            │                           │
│   │                                            │                           │
│   └────────────────────────────────────────────┘                           │
│                                                                             │
│                                                                             │
│   (Expertise)                                                               │
│                                                                             │
│   FRP Installations         Scrap Metal Art         Bronze Casting          │
│   Wood Carving              Textile Murals          Stone Work              │
│                                                                             │
│   [simple text list, no icons, no cards]                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

- NO team cards with photos in boxes
- Simple, flowing text
- Expertise as plain text list
\`\`\`

---

## Page: CONTACT

### Layout  
\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   (Commission a Project)                                                    │
│                                                                             │
│                                                                             │
│   Name _______________________________________________                      │
│                                                                             │
│   Email ______________________________________________                      │
│                                                                             │
│   Project Type _______________________________________                      │
│                                                                             │
│   Tell us about your vision                                                 │
│   ____________________________________________________                      │
│   ____________________________________________________                      │
│   ____________________________________________________                      │
│                                                                             │
│                                           (SEND ENQUIRY)                    │
│                                                                             │
│   ───────────────────────────────────────────────────────────────────────   │
│                                                                             │
│   (Email)                              (Phone)                              │
│   pravin@perfectpixel.co.in            +91 7972823811                       │
│                                                                             │
│   (Location)                                                                │
│   Mumbai, Maharashtra, India                                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

- Form inputs: NO visible borders until focus
- On focus: thin bottom border appears (#B8562D)
- Labels float above when focused/filled
- Submit button: Text with parentheses, subtle background on hover
- Contact info with (parentheses) labels
\`\`\`

---

## Interaction States

### Links/Navigation
\`\`\`
Default:   color: #6B7280, opacity: 1
Hover:     color: #6B7280, opacity: 0.6 → 1.0 transition
Active:    color: #F5F3EF, subtle underline
\`\`\`

### Project Images
\`\`\`
Default:   scale: 1, brightness: 1
Hover:     scale: 1.02, brightness: 1.05, transition: 0.4s ease-out
           Title fades in below/over image
           Custom cursor shows (VIEW)
\`\`\`

### Buttons (rare, only for forms)
\`\`\`
Default:   background: transparent, border: none, color: #B8562D
Hover:     background: rgba(184,86,45,0.1), transition: 0.3s
Active:    background: rgba(184,86,45,0.15)
\`\`\`

### Form Inputs
\`\`\`
Default:   border: none, border-bottom: 1px solid transparent
Focus:     border-bottom: 1px solid #B8562D, label floats up
Filled:    label stays floating, border stays visible but muted
\`\`\`

---

## Animation Guidelines

### Page Load
- Fade in from black (0.6s)
- Content staggers in (0.1s delay between elements)
- NO complex loading sequences

### Scroll Reveals  
- Elements fade + translateY(20px → 0)
- Duration: 0.6s
- Easing: ease-out
- Trigger: When 20% in viewport

### Image Reveals
- Clip-path from bottom OR simple fade
- Duration: 0.8s
- Subtle scale (1.05 → 1)

### WHAT NOT TO DO
- No bouncy/spring animations
- No complex page transitions
- No color-changing hovers
- No dramatic reveals
- No loading spinners with animations
