# BADHUCHE - FIGMA WIREFRAME SPECIFICATION
## Design Validation & Style Guide

**Purpose:** Create these wireframes in Figma to validate colors, typography, spacing, and overall design direction before development begins.

---

## 1. FIGMA FILE STRUCTURE

\`\`\`
Badhuche Website
├── 📁 Cover
├── 📁 Style Guide
│   ├── Colors
│   ├── Typography
│   ├── Spacing & Grid
│   ├── Components
│   └── Effects & Shadows
├── 📁 Desktop (1440px)
│   ├── Home
│   ├── Works
│   ├── Works - Detail
│   ├── Studio
│   ├── Process
│   ├── Gallery
│   └── Contact
├── 📁 Tablet (768px)
│   └── [Same pages]
├── 📁 Mobile (375px)
│   └── [Same pages]
└── 📁 Components
    ├── Navigation
    ├── Cards
    ├── Buttons
    ├── Forms
    └── Footer
\`\`\`

---

## 2. TYPOGRAPHY SYSTEM

### Primary Fonts

#### Marcellus (Display/Headlines)
| Usage | Weight | Size | Line Height | Letter Spacing |
|-------|--------|------|-------------|----------------|
| Hero H1 | Regular (400) | 120px | 0.9 (108px) | -0.03em |
| Page H1 | Regular (400) | 80px | 0.95 (76px) | -0.02em |
| Section H2 | Regular (400) | 56px | 1.0 (56px) | -0.02em |
| Card H3 | Regular (400) | 32px | 1.1 (35px) | -0.01em |
| Small H4 | Regular (400) | 24px | 1.2 (29px) | 0 |

**Google Fonts Import:**
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');
\`\`\`

**Figma:** Search "Marcellus" in fonts panel

---

#### Jost (Body/UI Text)
| Usage | Weight | Size | Line Height | Letter Spacing |
|-------|--------|------|-------------|----------------|
| Body Large | Regular (400) | 20px | 1.6 (32px) | 0 |
| Body | Regular (400) | 16px | 1.6 (26px) | 0 |
| Body Small | Regular (400) | 14px | 1.5 (21px) | 0 |
| Caption | Medium (500) | 12px | 1.4 (17px) | 0.02em |
| Button | Medium (500) | 14px | 1.0 (14px) | 0.05em |
| Nav Link | Medium (500) | 14px | 1.0 (14px) | 0.02em |
| Label | SemiBold (600) | 12px | 1.0 (12px) | 0.1em |

**Google Fonts Import:**
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
\`\`\`

---

#### JetBrains Mono (Monospace/Code/Tags)
| Usage | Weight | Size | Line Height | Letter Spacing |
|-------|--------|------|-------------|----------------|
| Tag/Category | Regular (400) | 12px | 1.0 | 0.1em |
| Stats Number | Regular (400) | 48px | 1.0 | -0.02em |
| Code | Regular (400) | 14px | 1.5 | 0 |

**Google Fonts Import:**
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap');
\`\`\`

---

### Typography Scale (Figma Text Styles)

Create these as Figma Text Styles:

\`\`\`
Display/Hero          Marcellus 120px  -3%  LH 0.9
Display/Page Title    Marcellus 80px   -2%  LH 0.95
Display/Section       Marcellus 56px   -2%  LH 1.0
Display/Card Title    Marcellus 32px   -1%  LH 1.1
Display/Small         Marcellus 24px    0%  LH 1.2

Body/Large            Jost 400  20px    0%  LH 1.6
Body/Regular          Jost 400  16px    0%  LH 1.6
Body/Small            Jost 400  14px    0%  LH 1.5

UI/Button             Jost 500  14px   +5%  LH 1.0  UPPERCASE
UI/Nav Link           Jost 500  14px   +2%  LH 1.0
UI/Label              Jost 600  12px  +10%  LH 1.0  UPPERCASE
UI/Caption            Jost 500  12px   +2%  LH 1.4

Mono/Tag              JetBrains 400  12px  +10%  LH 1.0  UPPERCASE
Mono/Stats            JetBrains 400  48px   -2%  LH 1.0
Mono/Code             JetBrains 400  14px    0%  LH 1.5
\`\`\`

---

## 3. COLOR SYSTEM

### Core Palette

Create these as Figma Color Styles:

#### Backgrounds
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | #0A0F1C | 10, 15, 28 | Main page background |
| Surface | #141820 | 20, 24, 32 | Cards, elevated elements |
| Surface Elevated | #1A1F2E | 26, 31, 46 | Modals, dropdowns |
| Surface Glass | #1A1F2E @ 60% | - | Glassmorphism cards |

#### Text
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Foreground | #F5F3EF | 245, 243, 239 | Primary text |
| Muted | #6B7280 | 107, 114, 128 | Secondary text |
| Subtle | #4B5563 | 75, 85, 99 | Disabled, hints |

#### Brand
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary (Terracotta) | #B8562D | 184, 86, 45 | Primary actions, accents |
| Primary Hover | #9A4725 | 154, 71, 37 | Button hover |
| Secondary (Gold) | #C4A35A | 196, 163, 90 | Secondary accents |
| Secondary Light | #D4A574 | 212, 165, 116 | Gradient mid-point |

#### Accent
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Cyan | #22D3EE | 34, 211, 238 | Interactive highlights, cursor |
| Cyan Muted | #22D3EE @ 20% | - | Glow effects |
| Blue | #3B82F6 | 59, 130, 246 | Links |

#### Utility
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Border | #FFFFFF @ 8% | - | Card borders |
| Border Hover | #FFFFFF @ 15% | - | Hover state borders |
| Overlay | #000000 @ 60% | - | Image overlays |
| Success | #10B981 | 16, 185, 129 | Form success |
| Error | #EF4444 | 239, 68, 68 | Form errors |

---

### Gradient Styles

Create these as Figma fill styles:

#### Hero Gradient
\`\`\`
Type: Linear
Angle: 135°
Stops:
  0%: #0A0F1C
  40%: #141820
  70%: #1A1F2E
  100%: #0D1117
\`\`\`

#### Accent Gradient
\`\`\`
Type: Linear
Angle: 135°
Stops:
  0%: #B8562D
  50%: #D4A574
  100%: #C4A35A
\`\`\`

#### Text Gradient (for headlines)
\`\`\`
Same as Accent Gradient
Apply as fill on text
\`\`\`

#### Glow Gradient (Cyan)
\`\`\`
Type: Radial
Stops:
  0%: #22D3EE @ 30%
  50%: #22D3EE @ 10%
  100%: Transparent
\`\`\`

#### Glow Gradient (Gold)
\`\`\`
Type: Radial
Stops:
  0%: #C4A35A @ 30%
  50%: #C4A35A @ 10%
  100%: Transparent
\`\`\`

---

## 4. SPACING SYSTEM

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Minimal spacing |
| space-2 | 8px | Tight spacing |
| space-3 | 12px | Small gaps |
| space-4 | 16px | Default padding |
| space-5 | 20px | Medium gaps |
| space-6 | 24px | Section internal |
| space-8 | 32px | Card padding |
| space-10 | 40px | Large gaps |
| space-12 | 48px | Section gaps |
| space-16 | 64px | Major sections |
| space-20 | 80px | Page sections |
| space-24 | 96px | Hero spacing |
| space-32 | 128px | Section padding |

---

### Grid System

#### Desktop (1440px)
\`\`\`
Columns: 12
Gutter: 24px
Margin: 80px (each side)
Content Width: 1280px
\`\`\`

#### Tablet (768px)
\`\`\`
Columns: 8
Gutter: 20px
Margin: 40px
Content Width: 688px
\`\`\`

#### Mobile (375px)
\`\`\`
Columns: 4
Gutter: 16px
Margin: 20px
Content Width: 335px
\`\`\`

---

## 5. COMPONENT SPECIFICATIONS

### 5.1 Navigation Bar

**Desktop (1440px)**
\`\`\`
Height: 80px
Background: Transparent → #0A0F1C @ 80% (on scroll)
Backdrop Blur: 20px (on scroll)
Padding: 0 80px

Logo: Left aligned
  - Size: 120px wide
  - Color: #F5F3EF

Nav Links: Center aligned
  - Font: Jost Medium 14px
  - Letter Spacing: 0.02em
  - Color: #F5F3EF
  - Gap: 40px
  - Hover: #22D3EE

CTA Button: Right aligned
  - See Button specs below
\`\`\`

**Mobile (375px)**
\`\`\`
Height: 64px
Padding: 0 20px

Logo: Left, 100px wide
Hamburger: Right, 24x24px
\`\`\`

---

### 5.2 Buttons

#### Primary Button
\`\`\`
Height: 52px
Padding: 0 32px
Border Radius: 26px (full round)
Background: Accent Gradient
Font: Jost Medium 14px UPPERCASE
Letter Spacing: 0.05em
Color: #F5F3EF

Hover:
  - Background: Darker gradient
  - Transform: translateY(-2px)
  - Box Shadow: 0 10px 30px rgba(184, 86, 45, 0.3)

Active:
  - Transform: translateY(0)
\`\`\`

#### Secondary Button
\`\`\`
Height: 52px
Padding: 0 32px
Border Radius: 26px
Background: Transparent
Border: 1px solid #FFFFFF @ 20%
Font: Jost Medium 14px UPPERCASE
Letter Spacing: 0.05em
Color: #F5F3EF

Hover:
  - Border: 1px solid #22D3EE @ 50%
  - Color: #22D3EE
\`\`\`

#### Text Button / Link
\`\`\`
Font: Jost Medium 14px
Color: #F5F3EF
Text Decoration: None

Hover:
  - Color: #22D3EE
  - Underline (animated from left)
\`\`\`

---

### 5.3 Glass Card
\`\`\`
Background: #1A1F2E @ 60%
Backdrop Blur: 20px
Border: 1px solid #FFFFFF @ 10%
Border Radius: 24px
Padding: 32px

Hover:
  - Background: #1A1F2E @ 80%
  - Border: 1px solid #22D3EE @ 30%
  - Box Shadow: 0 0 30px rgba(34, 211, 238, 0.1)
  - Transform: translateY(-4px)
\`\`\`

---

### 5.4 Project Card

#### Large (Featured)
\`\`\`
Size: 2 columns x 2 rows in grid
Aspect Ratio: 4:3
Border Radius: 24px
Overflow: Hidden

Image: 
  - Fill container
  - Object Fit: Cover
  - Scale on hover: 1.1

Overlay Gradient:
  - From: Transparent (top)
  - To: #000000 @ 80% (bottom)

Content (bottom-left):
  - Padding: 32px
  - Category: JetBrains Mono 12px, #22D3EE, UPPERCASE
  - Title: Marcellus 32px, #F5F3EF
  - Description: Jost 14px, #6B7280 (large cards only)
\`\`\`

#### Medium
\`\`\`
Size: 1 column
Aspect Ratio: 3:4 (portrait)
Same styling as large
\`\`\`

---

### 5.5 Form Inputs
\`\`\`
Height: 56px
Background: #141820
Border: 1px solid #FFFFFF @ 10%
Border Radius: 12px
Padding: 16px 20px
Font: Jost 16px
Color: #F5F3EF

Placeholder: #6B7280

Focus:
  - Border: 1px solid #22D3EE
  - Box Shadow: 0 0 0 3px rgba(34, 211, 238, 0.1)

Error:
  - Border: 1px solid #EF4444
\`\`\`

#### Floating Label
\`\`\`
Default: Inside input, Jost 16px, #6B7280
Focused/Filled: Above input, Jost 12px, #22D3EE
Transition: 0.2s ease
\`\`\`

---

### 5.6 Stats Counter
\`\`\`
Container: Glass Card

Number: 
  - Font: JetBrains Mono 48px
  - Background: Accent Gradient (as text fill)
  
Suffix:
  - Font: JetBrains Mono 24px
  - Color: #C4A35A

Label:
  - Font: Jost 14px
  - Color: #6B7280
  - UPPERCASE
\`\`\`

---

## 6. PAGE WIREFRAMES TO CREATE

### 6.1 Home Page Sections

**Hero Section**
\`\`\`
Height: 100vh
Layout: 2 columns (text left, image right)

Left Column:
  - Eyebrow: "Monumental Art Studio"
  - Headline: "Crafting Legacies in Art" (word "Legacies" in gradient)
  - Subhead: Tagline text
  - CTA Buttons: Primary + Secondary

Right Column:
  - Featured image (4:5 ratio)
  - Floating badge at bottom

Scroll Indicator: Bottom center
\`\`\`

**Philosophy Section**
\`\`\`
Height: Auto
Padding: 128px vertical
Background: Paper texture @ 5%

Layout: 2 columns
  - Left: Small heading + body text
  - Right: Large quote with brush stroke accent
\`\`\`

**Selected Works Section**
\`\`\`
Padding: 128px vertical

Header: Section title + "View All" link
Grid: Masonry-style
  - 1 large (2x2)
  - 4 medium (1x1)

Gap: 24px
\`\`\`

**Services Section**
\`\`\`
Background: Subtle gradient shift
Padding: 128px vertical

Layout: 
  - Section header (centered)
  - 4 service cards in row
  - Each card: Icon, title, description
\`\`\`

**Stats Section**
\`\`\`
Background: Glass card full-width
Padding: 64px vertical

Layout: 4 columns
  - Each: Number (animated), label
  - Dividers between
\`\`\`

**Recognition Section**
\`\`\`
Padding: 128px vertical
Layout: 2 columns
  - Left: Large image (PM Modi appreciation)
  - Right: Quote, attribution, gold leaf accent
\`\`\`

**CTA Section**
\`\`\`
Padding: 96px vertical
Background: Accent gradient (subtle)
Text: Centered
  - Headline
  - Subhead
  - Button
\`\`\`

---

### 6.2 Works Page
\`\`\`
Header: Page title + filter tabs
Filters: All, Airports, Museums, Public Art, Sculptures, Murals, International

Grid: 3 columns
  - Mix of sizes based on featured status
Gap: 24px

Load More: Button at bottom
\`\`\`

---

### 6.3 Project Detail Page
\`\`\`
Hero: Full-width image (16:9)
  - Overlay with title, category, location

Info Bar: 
  - Client, Year, Location, Dimensions
  - Glass card style

Description: 
  - 2 columns (text + sidebar)

Gallery:
  - Masonry grid of project images
  - Lightbox on click

Navigation:
  - Prev/Next project links
\`\`\`

---

### 6.4 Studio Page
\`\`\`
Hero: Team photo + headline

Philosophy: Extended company story

Team: Grid of team member cards
  - Photo, name, role

Capabilities: List of services/expertise

Materials: Showcase of materials used
\`\`\`

---

### 6.5 Process Page
\`\`\`
Timeline: Vertical stepped layout
  - 6 steps
  - Each: Number, title, description, image
  - Alternating left/right

CTA: Contact prompt at bottom
\`\`\`

---

### 6.6 Gallery Page
\`\`\`
Full-screen draggable gallery
  - Horizontal scroll on drag
  - Images at various sizes
  - Cursor changes to "Drag"
\`\`\`

---

### 6.7 Contact Page
\`\`\`
Layout: 2 columns
  - Left: Contact form (floating labels)
  - Right: Contact info, map, social links

Form Fields:
  - Name
  - Email
  - Phone
  - Project Type (dropdown)
  - Message (textarea)
  - Submit button
\`\`\`

---

## 7. EFFECTS & SHADOWS

### Box Shadows
\`\`\`
Shadow/Small:    0 2px 8px rgba(0, 0, 0, 0.15)
Shadow/Medium:   0 8px 24px rgba(0, 0, 0, 0.2)
Shadow/Large:    0 16px 48px rgba(0, 0, 0, 0.25)
Shadow/Glow/Cyan:  0 0 30px rgba(34, 211, 238, 0.2)
Shadow/Glow/Gold:  0 0 30px rgba(196, 163, 90, 0.2)
Shadow/Card:     0 20px 40px rgba(0, 0, 0, 0.3)
\`\`\`

### Blur Values
\`\`\`
Blur/Small:   8px
Blur/Medium:  16px
Blur/Large:   20px
Blur/XLarge:  40px
\`\`\`

---

## 8. FIGMA PROTOTYPE SETTINGS

### Interactions to Prototype

1. **Navigation Scroll Effect**
   - Transparent → Blurred on scroll

2. **Button Hovers**
   - Color change + lift effect

3. **Card Hovers**
   - Image scale + overlay + border glow

4. **Page Transitions**
   - Smart animate between pages
   - Use curtain overlay effect

5. **Mobile Menu**
   - Slide in from right
   - Backdrop blur

---

## 9. EXPORT SETTINGS

### For Development Handoff
\`\`\`
Colors: Export as CSS variables
Typography: Export as CSS/Tailwind classes
Spacing: Document in design tokens
Icons: Export as SVG
Images: Note dimensions needed
\`\`\`

### For Client Review
\`\`\`
Export frames as PNG @ 2x
Create clickable prototype
Share via Figma link
\`\`\`

---

## 10. CHECKLIST

### Style Guide Frame
- [ ] Color palette with all variations
- [ ] Typography scale with examples
- [ ] Spacing scale visualization
- [ ] All button states
- [ ] All input states
- [ ] Card variations
- [ ] Shadow examples
- [ ] Gradient swatches

### Desktop Wireframes
- [ ] Home - Hero
- [ ] Home - Philosophy
- [ ] Home - Selected Works
- [ ] Home - Services
- [ ] Home - Stats
- [ ] Home - Recognition
- [ ] Home - CTA
- [ ] Home - Footer
- [ ] Works - Listing
- [ ] Works - Detail
- [ ] Studio
- [ ] Process
- [ ] Gallery
- [ ] Contact

### Responsive Wireframes
- [ ] Tablet (768px) - Key pages
- [ ] Mobile (375px) - All pages

### Components
- [ ] Navigation (desktop + mobile)
- [ ] Footer
- [ ] All button variants
- [ ] All card variants
- [ ] Form elements
- [ ] Loading states

### Prototype
- [ ] Desktop flow linked
- [ ] Key interactions added
- [ ] Mobile menu animation

---

**Document Version:** 1.0
**Created:** December 2024
**Fonts:** Marcellus, Jost, JetBrains Mono
