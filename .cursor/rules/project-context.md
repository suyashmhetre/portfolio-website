# Badhuche Project Context for Cursor AI

## What This Project Is
This is a premium website for Badhuche Art Studio, an Indian company that creates monumental public art - large sculptures, murals, and installations for airports, temples, museums, and public spaces.

## Current State
- All project data is DUMMY/placeholder content
- Images are generated placeholders
- The design is complete and inspired by OHArchitecture.com.au
- Ready for real content integration

## Design Decisions Made

### Why Warm Ivory (not Dark Blue)?
We switched from a dark blue (#0A0F1C) palette to warm ivory (#FAF7F2) because:
1. Better represents the artistic, gallery-like feel
2. Makes project images pop more
3. Feels more premium and sophisticated
4. Better contrast for text readability

### Why No Card Borders?
Following award-winning design patterns:
1. Cleaner, more modern aesthetic
2. Focus on content, not containers
3. Uses shadows and spacing instead

### Why Asymmetric Grid?
The Selected Works section uses a CSS Grid with intentional offsets because:
1. Creates visual interest
2. Mimics gallery/museum layouts
3. Guides the eye through the content
4. Differentiates from typical portfolio sites

## Things That Need Real Data

### Projects Array
Location: `app/page.tsx`, `app/works/page.tsx`
\`\`\`typescript
{
  title: "Project Name",
  category: "Sculpture | Mural | Installation | Memorial",
  image: "/actual-image.jpg",
  year: "2024",
  location: "City, Country"
}
\`\`\`

### Team Members
Location: `app/studio/page.tsx`
- Replace placeholder names and bios
- Add real team photos

### Process Steps
Location: `components/process-section.tsx`
- Verify process matches actual workflow
- Add relevant deliverable descriptions

### Contact Info
Location: `app/contact/page.tsx`
- Real address
- Real phone number
- Real email
- Social media links

## File Importance Ranking

### Critical (Change Carefully)
- `app/globals.css` - All colors and core styles
- `app/layout.tsx` - Global layout and fonts
- `components/navigation.tsx` - Main navigation

### Important (Project Display)
- `app/page.tsx` - Homepage content
- `components/project-card.tsx` - How projects look
- `app/works/page.tsx` - Portfolio page

### Supporting (Enhance Experience)
- `components/custom-cursor.tsx` - Cursor effects
- `components/magnetic-button.tsx` - Button interactions
- `components/process-section.tsx` - Process display

## Common Modifications

### To change the primary accent color:
1. Open `app/globals.css`
2. Find `--terracotta: #C2542D`
3. Change to new color
4. Also update shadow colors that use this

### To add a new project:
1. Add image to `/public`
2. Add object to projects array with all fields
3. Verify grid layout still works

### To modify navigation:
1. Open `components/navigation.tsx`
2. Links are in the `navLinks` array
3. Commission button is separate, styled differently

## Performance Considerations
- Images should be optimized before adding
- Use Next.js Image component for automatic optimization
- Keep animations performant (use transform, opacity)
- Lazy load below-fold content
