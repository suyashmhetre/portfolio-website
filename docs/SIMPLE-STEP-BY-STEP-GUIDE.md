# Building the Badhuche Website - Super Simple Guide

## What Are We Building?

Think of it like this:
- **OHArchitecture** = A pretty house (the design we're copying)
- **Badhuche** = Our new house (same style, different stuff inside)

We're taking the "look" from OHArchitecture (an architecture company) and using it to build a website for Badhuche (a monumental art studio).

---

## THE FILES IN THIS PROJECT - What Each One Does

### The "Recipe Books" (Data Files)

| File | What It Is | Like... |
|------|-----------|---------|
| `data/oh-architecture-website.json` | The design we're copying | A photo of a pretty house |
| `data/badhuche-website.json` | Badhuche's information | What goes IN our house |
| `data/badhuche-image-mapping.json` | Which pictures to use where | Labels for picture frames |
| `data/badhuche-design-system.json` | Colors, fonts, sizes | Paint colors and wallpaper |

### The "Instruction Manuals" (Documentation)

| File | What It Is | Like... |
|------|-----------|---------|
| `docs/CURSOR-MASTER-SPEC.md` | Complete building instructions | The full house blueprint |
| `docs/FIGMA-WIREFRAME-SPEC.md` | Design rules (colors, fonts) | Interior design guide |
| `docs/IMPLEMENTATION-CHECKLIST.md` | Step-by-step to-do list | Building checklist |
| `docs/badhuche-copy-map.md` | All the text needed | What to write on signs |
| `docs/VISUAL-ASSETS-MANUAL.md` | How to handle pictures | Photo album instructions |

---

## STEP-BY-STEP PLAN (For Cursor)

### PHASE 1: Setup (The Foundation)

**Step 1: Tell Cursor what you want**
\`\`\`
Open Cursor and say:
"I want to build a website for Badhuche using the OHArchitecture design. 
Read the file data/oh-architecture-website.json to understand the design,
and data/badhuche-website.json for the content."
\`\`\`

**Step 2: Set up the colors and fonts**
\`\`\`
Say to Cursor:
"Read docs/FIGMA-WIREFRAME-SPEC.md and set up the design system:
- Colors: Dark background (#0A0F1C), Gold (#C4A35A), Terracotta (#B8562D), Cyan (#22D3EE)
- Fonts: Marcellus for headings, Jost for text, JetBrains Mono for numbers"
\`\`\`

---

### PHASE 2: Build the Pieces (Components)

**Step 3: Build the Header (Top Menu)**
\`\`\`
Say to Cursor:
"Create a header component like OHArchitecture with:
- Logo on the left (says 'Badhuche')
- Menu links: Home, Works, Studio, Process, Gallery
- 'Get in touch' button on the right"
\`\`\`

**Step 4: Build the Footer (Bottom Part)**
\`\`\`
Say to Cursor:
"Create a footer with:
- Badhuche logo and tagline
- Contact info (email, phone, address)
- Social links
- Copyright"
\`\`\`

**Step 5: Build Cards (Project Boxes)**
\`\`\`
Say to Cursor:
"Create project cards that show:
- A big picture
- Project name
- Category (like 'Airports' or 'Museums')
- Hover effect (image zooms, border glows)"
\`\`\`

---

### PHASE 3: Build the Pages (6 Total)

**Step 6: HOME PAGE (app/page.tsx)**
\`\`\`
Say to Cursor:
"Build the home page with these sections:

1. HERO - Big welcome section with:
   - Main text: 'Crafting Legacies in Art'
   - Background image
   - 'Explore Our Works' button
   
2. ABOUT SECTION - Who is Badhuche:
   - Title: 'Experience focused design'
   - Short description
   
3. FEATURED WORKS - Show 6 projects:
   - Grid of project cards
   - 'View all works' link
   
4. STATS - Numbers section:
   - 25+ Years
   - 200+ Projects
   - 15+ Airports
   - 45ft Tallest Sculpture
   
5. RECOGNITION - Special achievement:
   - Quote about PM Modi seeing the Ayodhya Airport art
   
6. CALL TO ACTION - Contact prompt:
   - 'Ready to create something monumental?'
   - Button to contact"
\`\`\`

**Step 7: WORKS PAGE (app/works/page.tsx)**
\`\`\`
Say to Cursor:
"Build the works page with:
- Page title: 'Our Works'
- Filter buttons: All, Airports, Museums, Public Art, Sculptures, Murals
- Grid of ALL projects (use data from badhuche-website.json)"
\`\`\`

**Step 8: PROJECT DETAIL PAGE (app/works/[slug]/page.tsx)**
\`\`\`
Say to Cursor:
"Build a template for individual project pages:
- Big hero image
- Project title and category
- Details: Location, Year, Client, Dimensions
- Description
- Image gallery
- Previous/Next project links"
\`\`\`

**Step 9: STUDIO PAGE (app/studio/page.tsx)**
\`\`\`
Say to Cursor:
"Build the studio/about page:
- Header: 'Our Studio'
- Story about Badhuche
- Team section (if photos available)
- Capabilities list
- Materials expertise"
\`\`\`

**Step 10: PROCESS PAGE (app/process/page.tsx)**
\`\`\`
Say to Cursor:
"Build the process page showing 6 steps:
1. Consultation - Understanding the vision
2. Concept Development - Sketches and ideas
3. Design Development - Detailed plans
4. Approval - Getting sign-offs
5. Fabrication - Building the art
6. Installation - Placing it in location"
\`\`\`

**Step 11: CONTACT PAGE (app/contact/page.tsx)**
\`\`\`
Say to Cursor:
"Build the contact page with:
- Left side: Contact form (name, email, phone, message)
- Right side: Contact information
  - Address: Mumbai, Maharashtra
  - Email: pravin@perfectpixel.co.in
  - Phone: +91 7972823811"
\`\`\`

---

### PHASE 4: Make It Pretty (Polish)

**Step 12: Add Animations**
\`\`\`
Say to Cursor:
"Add smooth animations:
- Text that reveals when you scroll
- Images that fade in
- Numbers that count up
- Smooth scrolling"
\`\`\`

**Step 13: Make It Work on Phones**
\`\`\`
Say to Cursor:
"Make sure all pages look good on:
- Phone (375px wide)
- Tablet (768px wide)
- Computer (1440px wide)"
\`\`\`

---

## QUICK REFERENCE: What Goes Where

### File Structure (Where Things Live)

\`\`\`
app/
├── page.tsx          ← HOME PAGE
├── layout.tsx        ← Wraps all pages (has header/footer)
├── globals.css       ← All the colors and fonts
├── works/
│   ├── page.tsx      ← WORKS LIST PAGE
│   └── [slug]/
│       └── page.tsx  ← INDIVIDUAL PROJECT PAGE
├── studio/
│   └── page.tsx      ← STUDIO/ABOUT PAGE
├── process/
│   └── page.tsx      ← PROCESS PAGE
├── gallery/
│   └── page.tsx      ← GALLERY PAGE
└── contact/
    └── page.tsx      ← CONTACT PAGE

components/
├── layout/
│   ├── header.tsx    ← Top navigation bar
│   ├── footer.tsx    ← Bottom section
│   └── mobile-menu.tsx ← Phone menu
├── ui/
│   ├── button.tsx    ← Clickable buttons
│   ├── card.tsx      ← Project boxes
│   └── ...           ← Other reusable pieces
└── sections/
    ├── hero.tsx      ← Big welcome section
    ├── stats.tsx     ← Numbers section
    └── ...           ← Other page sections
\`\`\`

---

## COPY-PASTE COMMANDS FOR CURSOR

### Command 1: Start the Project
\`\`\`
Create a Next.js 15 website for Badhuche, a monumental art studio in Mumbai.
Use the design from data/oh-architecture-website.json as visual reference.
Use the content from data/badhuche-website.json for actual data.
Set up Tailwind CSS with the design tokens from docs/FIGMA-WIREFRAME-SPEC.md.
\`\`\`

### Command 2: Build Components
\`\`\`
Create these components based on OHArchitecture design:
1. Header with navigation
2. Footer with contact info
3. Project cards with hover effects
4. Section headers
5. Buttons (primary and secondary styles)
\`\`\`

### Command 3: Build Home Page
\`\`\`
Build the home page with:
- Hero section (like OHArchitecture)
- Philosophy/about section
- Featured projects grid (6 projects)
- Stats counter section
- Recognition section (PM Modi achievement)
- Call to action section
\`\`\`

### Command 4: Build Other Pages
\`\`\`
Build remaining pages:
- /works - Project grid with category filters
- /works/[slug] - Individual project template
- /studio - About page
- /process - 6-step process timeline
- /contact - Form + contact info
\`\`\`

---

## WHAT TO DO IF SOMETHING BREAKS

### Error: "File not found"
→ Check the file path is exactly right (spelling matters!)

### Error: "Component not working"
→ Make sure you imported it at the top of the file

### Error: "Styles not showing"
→ Check globals.css has the color variables

### Something looks wrong
→ Ask Cursor: "The [thing] is broken. Read the file and fix it."

---

## CHECKLIST (Check Off As You Go)

### Setup
- [ ] Colors set up in globals.css
- [ ] Fonts set up (Marcellus, Jost, JetBrains Mono)
- [ ] Layout.tsx has header and footer

### Components
- [ ] Header works
- [ ] Footer works
- [ ] Project cards work
- [ ] Buttons work

### Pages
- [ ] Home page done
- [ ] Works page done
- [ ] Project detail page done
- [ ] Studio page done
- [ ] Process page done
- [ ] Contact page done

### Final
- [ ] Looks good on phone
- [ ] Looks good on computer
- [ ] All links work
- [ ] Contact form works

---

## THE END!

Once you've checked everything off, your Badhuche website is done!

Remember: 
- **OHArchitecture design** = How it LOOKS
- **Badhuche content** = What it SAYS

Good luck! 🎨
