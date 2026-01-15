# Quick Customization Guide

## Change the Accent Color

Want to use a different color instead of yellow? Easy!

1. Open `styles.css`
2. Find line 27: `--color-accent: #fbbf24;`
3. Replace with your color code
4. The entire design automatically updates!

**Example**: Use purple instead
```css
--color-accent: #a855f7;
--color-accent-dark: #9333ea;
```

---

## Update Your Information

### Contact Details

**File**: `index.html`
**Lines**: Look for the Contact section (around line 227)

Replace:
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
Remote, Open to Opportunities
```

With your actual info.

### Social Media Links

Find the social icons section and update the `href` values:

```html
<a href="https://twitter.com/yourname">Twitter</a>
<a href="https://linkedin.com/in/yourname">LinkedIn</a>
<a href="https://github.com/yourname">GitHub</a>
<a href="https://instagram.com/yourname">Instagram</a>
```

---

## Add Your Projects

### Step 1: Upload Images
Place your project screenshots in the `assets/` folder

### Step 2: Update Project Cards

Find the Projects section in `index.html` and update each card:

```html
<article class="project-card">
    <div class="project-image-wrapper">
        <img src="assets/your-project-image.jpg" alt="Project name" class="project-image" loading="lazy">
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p class="project-description">Brief description of what you built</p>
        <div class="tech-stack">
            <span class="tech-tag">Technology1</span>
            <span class="tech-tag">Technology2</span>
            <span class="tech-tag">Technology3</span>
        </div>
        <a href="https://yourproject.com" class="project-link">View Project →</a>
    </div>
</article>
```

---

## Customize Your Skills

### Frontend Skills
Find the Frontend category and update the list:

```html
<div class="skill-category">
    <h3>Frontend</h3>
    <ul class="skill-list">
        <li>Your Skill 1</li>
        <li>Your Skill 2</li>
        <li>Your Skill 3</li>
    </ul>
</div>
```

Do the same for "Design & Tools" and "Additional" categories.

---

## Update Your About Section

Find the About section and personalize the three paragraphs:

1. **First paragraph**: Your background and experience
2. **Second paragraph**: Your professional approach
3. **Third paragraph**: What you do outside of coding

---

## Typography Customization

### Change Font Family

Open `styles.css` and find:
```css
--font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
```

Replace with your preferred font:
```css
--font-family-sans: 'Inter', 'Montserrat', sans-serif;
```

Then add the font import at the top of `styles.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
```

---

## Responsive Adjustments

All responsive breakpoints are in `styles.css`:

- **Mobile**: Max-width 480px
- **Tablet**: Max-width 768px  
- **Desktop**: Min-width 1024px

To adjust spacing on mobile, find the `@media (max-width: 480px)` section and update values.

---

## Add New Sections

### Add a Blog or Testimonials

You can extend the page by adding new sections. Template:

```html
<section class="your-section-name" id="your-section">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Section Label</span>
            <h2>Section Title</h2>
            <p>Section description</p>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

Then add CSS styling that follows the existing pattern.

---

## Performance Tips

1. **Optimize images**: Compress project images (use TinyPNG or Squoosh)
2. **Use WebP format**: Smaller file sizes, modern browsers support
3. **Keep images under 500KB each**: Faster loading
4. **Remove unused sections**: Delete what you don't need

---

## SEO Improvements

Update the meta tags in `index.html` head:

```html
<meta name="description" content="Your custom description">
<meta property="og:title" content="Your Name - Your Title">
<meta property="og:description" content="Your description">
```

---

## Browser Testing

Test your portfolio in:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

Use DevTools to test responsive design:
1. Press F12
2. Click "Toggle device toolbar"
3. Test at different breakpoints

---

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Push code to GitHub
2. Settings → Pages → Source → Main branch
3. Site live at `yourusername.github.io`

### Option 2: Netlify (Free)
1. Connect GitHub repo
2. Auto-deploys on every push
3. Get custom domain

### Option 3: Vercel (Free)
1. Import project
2. Deploy with one click
3. Serverless functions support

### Option 4: Traditional Hosting
1. Upload files via FTP
2. Works with any host
3. Full control

---

## Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure images are in `assets/` folder
- Use relative paths, not absolute

**Styles look weird?**
- Clear browser cache (Ctrl+Shift+Del)
- Hard refresh (Ctrl+F5)
- Try different browser

**Links not working?**
- Check `href` attributes
- Ensure URLs are complete (`https://...`)
- For anchors, use `#section-id`

---

## Code Quality

The code is organized for easy maintenance:

- **HTML**: Semantic sections with clear comments
- **CSS**: Variables for all values, organized by section
- **JavaScript**: Minimal, well-commented functions

To modify:
1. Find the relevant section (marked with comments)
2. Make your changes
3. Save and refresh

---

## Final Checklist

Before launching:
- [ ] Add your photo to hero section
- [ ] Update all project information
- [ ] Add real project images
- [ ] Update contact information
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Proofread all text
- [ ] Test form submission (if email configured)
- [ ] Deploy to hosting
- [ ] Share with the world!

---

**You're all set! Your modern portfolio is ready to impress. Good luck! 🚀**
