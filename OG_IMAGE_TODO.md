# Open Graph Image - To Do

## Phase 7: Open Graph & Social Media Tags ✅ (Tags configured, image needed)

### Current Status
✅ All Open Graph meta tags are configured in `src/components/SEOHead.tsx`
✅ Twitter Card tags are configured
⚠️ **Missing**: The actual OG image file

### Required Image

**File**: `public/og-image.jpg` (or `.png`)
**Dimensions**: 1200x630px (Facebook/LinkedIn standard)
**File Size**: < 100KB ideally
**Format**: JPG or PNG

### Recommended Content

The OG image should contain:
1. **Logo** - Cabinet Dentaire Vang logo
2. **Main Text**: "Cabinet Dentaire Vang"
3. **Subtitle**: "Dentiste Luxembourg - Limpertsberg"
4. **Trust Signal**: "⭐ 751 Avis 5/5" or similar
5. **Background**: Professional dental theme (white/blue medical colors)
6. **Contact**: "+352 26 26 20 46" (optional)

### Tools to Create the Image

1. **Canva** (free): https://www.canva.com/
   - Use template "Facebook Post" (1200x630)
   - Add brand colors and text

2. **Figma** (free): https://www.figma.com/
   - Create 1200x630 artboard
   - Design professional OG image

3. **Adobe Express** (free): https://www.adobe.com/express/
   - Social media templates available

### Implementation

Once you create the image:

```bash
# Place the image in the public folder
cp your-og-image.jpg public/og-image.jpg

# Rebuild the site
npm run build:ssg
```

### Testing

After adding the image, test it with:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
   - Enter URL: https://cabinetdentairevang.lu/
   - Click "Scrape Again"
   - Verify image displays correctly

2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
   - Enter URL and validate

3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
   - Test how it appears on LinkedIn

### Current Configuration

The SEOHead component references: `https://cabinetdentairevang.lu/og-image.jpg`

All pages use the same OG image. If you want different images per page, you can pass the `ogImage` prop to SEOHead:

```tsx
<SEOHead
  title="Custom Title"
  description="Custom description"
  ogImage="https://cabinetdentairevang.lu/custom-og-image.jpg"
/>
```

## Priority

**Medium** - The site functions perfectly without this, but it improves social media sharing appearance.

Social shares without OG image will use a generic preview or the first image found on the page.
