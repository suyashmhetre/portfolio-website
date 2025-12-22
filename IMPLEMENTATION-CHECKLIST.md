# Badhuche Website - Implementation Checklist

Use this checklist when setting up the project in Cursor or making changes.

---

## Initial Setup Checklist

- [ ] Node.js 18+ installed
- [ ] Project files extracted/cloned
- [ ] Opened in Cursor/VS Code
- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` successfully
- [ ] Website loads at localhost:3000
- [ ] Custom cursor working (desktop only)
- [ ] Navigation links work
- [ ] All pages load without errors

---

## Before Going Live Checklist

### Content
- [ ] Replace all dummy project data with real projects
- [ ] Replace placeholder images with real photos
- [ ] Update team member info on Studio page
- [ ] Add real contact information
- [ ] Verify all text is proofread
- [ ] Add real social media links

### Images
- [ ] All images optimized (under 500KB each ideally)
- [ ] Images have descriptive filenames
- [ ] All images have alt text
- [ ] Favicon and apple-icon updated with logo

### SEO & Meta
- [ ] Update page titles in each page's metadata
- [ ] Add proper descriptions for each page
- [ ] Add Open Graph images for social sharing
- [ ] Verify robots.txt if needed
- [ ] Add sitemap.xml

### Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile (cursor effects disabled)
- [ ] Test all navigation links
- [ ] Test contact form (if functional)
- [ ] Check all images load
- [ ] Verify no console errors

### Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check page load times
- [ ] Verify animations don't lag
- [ ] Test on slower connections

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast passes WCAG
- [ ] Focus states visible

---

## Deployment Checklist

### Vercel Deployment
- [ ] Repository connected to Vercel
- [ ] Build succeeds
- [ ] Preview URL works
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Environment variables set (if any)

### Post-Deployment
- [ ] All pages work on production
- [ ] Images load correctly
- [ ] Forms work (if any)
- [ ] Analytics connected (if desired)
- [ ] Error monitoring setup (optional)

---

## Maintenance Checklist (Monthly)

- [ ] Check for broken links
- [ ] Update dependencies (`npm update`)
- [ ] Review and update content
- [ ] Check analytics for issues
- [ ] Test site speed
- [ ] Backup any changes

---

## Quick Reference Commands

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for TypeScript errors
npm run type-check

# Run linting
npm run lint
\`\`\`

---

## Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| White screen | Check console for errors, run `npm install` |
| Styling broken | Clear cache, restart dev server |
| Images not loading | Check file paths, ensure in `/public` |
| Cursor not working | Desktop only, check for JS errors |
| Build fails | Run `npm run type-check` for errors |
| Port in use | Use `npm run dev -- -p 3001` |
