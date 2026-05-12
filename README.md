# Shreshta Jonnagoni - Premium Developer Portfolio

A luxurious, futuristic, and highly interactive personal portfolio website built with **HTML5**, **CSS3**, and **vanilla JavaScript**. This premium portfolio showcases advanced frontend techniques, smooth animations, and modern design principles.

## 🌟 Features

### Core Sections
- **Hero Section** - Full-screen cinematic landing with animated particles, typing effect, and glowing text
- **About Me** - Personal introduction with 3D profile card, timeline of achievements, and animated counters
- **Skills Showcase** - Interactive skill cards with 3D tilt effects and smooth progress bars
- **Testimonials** - Glassmorphism testimonial carousel with auto-rotation
- **Contact Section** - Elegant contact form with floating labels and validation styling
- **Footer** - Minimal premium footer with back-to-top button

### Advanced Interactions
- ✨ **Custom Cursor** - Glowing cursor with hover states
- 🎯 **Parallax Scrolling** - Dynamic particle parallax on scroll
- 🌙 **Dark/Light Mode Toggle** - Persistent theme switching with localStorage
- 📊 **Scroll Progress Bar** - Visual indicator of page scrolling progress
- 🎬 **Smooth Animations** - Fade-in, slide, and transform animations on scroll
- 🔤 **Typing Animation** - Dynamic text typing effect on hero section
- 📱 **Responsive Design** - Mobile-first approach for all devices
- 🎨 **Glassmorphism UI** - Modern frosted glass effects throughout
- 🎪 **3D Tilt Effects** - Interactive 3D transforms on skill and profile cards

## 📁 Project Structure

```
synent technologies/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript interactions
├── README.md           # This file
└── image synent/
    └── shreshta img.jpeg  # Profile image
```

## 🚀 Quick Start

### 1. Open Locally
Simply open `index.html` in your web browser:
```bash
open index.html
```

Or drag and drop the `index.html` file into your browser.

### 2. Customization

#### Update Personal Information
- **Name**: Replace `Shreshta Jonnagoni` in `index.html`
- **Email**: Update `hello@shreshtajonnagoni.dev` 
- **Social Links**: Modify LinkedIn and GitHub URLs
- **Profile Image**: Replace `image synent/shreshta img.jpeg` with your photo

#### Modify Typing Animation
Edit the typing strings in `script.js`:
```javascript
const typingStrings = ['Frontend Developer', 'UI/UX Designer', 'Creative Coder'];
```

#### Update Skills
Modify skill categories and items in the Skills section of `index.html`.

#### Customize Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --accent: #7c6bff;
  --text: #e8f1ff;
  --bg: #05070f;
  /* ... more variables */
}
```

## 🎨 Design Features

### UI/UX Elements
- **Glassmorphism** - Frosted glass effect with backdrop blur
- **Gradient Borders** - Glowing animated gradient accents
- **Soft Shadows** - Layered depth with subtle shadows
- **Dark Theme** - Premium dark color scheme with vibrant accents
- **Responsive Typography** - Fluid font sizing across devices

### Animations & Transitions
- Fade-in on scroll (Intersection Observer)
- Smooth 0.35s transitions throughout
- 3D perspective transforms on cards
- Parallax background particles
- Typing text animation with cursor blink
- Hover elevation and scale effects

## 📱 Responsive Breakpoints

- **Desktop**: Full experience with all effects
- **Tablet** (≤1120px): Single-column layouts
- **Mobile** (≤640px): Stack layout, optimized spacing

## ⚡ Performance

- No external dependencies or frameworks
- Lightweight vanilla JavaScript
- CSS Grid and Flexbox for efficient layouts
- Optimized animations using CSS transforms
- Lazy loading considerations for images
- ~150KB total file size

## 🔧 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

Supports all modern browsers with CSS Grid, Flexbox, and CSS transforms.

## 📝 Customization Guide

### Adding New Skills
```html
<div class="skill-category glass-card">
  <h3>Your Category</h3>
  <div class="skill-pill">Skill 1</div>
  <div class="skill-pill">Skill 2</div>
</div>
```

### Adding Progress Bars
```html
<div class="skill-bar">
  <div>
    <span>Your Skill</span>
    <strong>85%</strong>
  </div>
  <div class="bar"><span style="width:85%"></span></div>
</div>
```

### Modifying Testimonials
Update testimonial cards in the testimonials section with your client reviews.

### Contact Form Integration
The contact form currently shows an alert. To integrate with a backend:
1. Update the `contactForm` event listener in `script.js`
2. Point to your backend service (FormSpree, Netlify Forms, etc.)

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push all files
3. Enable GitHub Pages in settings
4. Your portfolio will be live!

### Netlify
1. Connect your GitHub repository
2. Set build command: (none needed)
3. Set publish directory: `/` (root)
4. Deploy automatically on push

### Vercel
Similar to Netlify - connect your GitHub and deploy.

## 📦 Files Included

| File | Purpose |
|------|---------|
| `index.html` | Semantic HTML structure with all sections |
| `styles.css` | Complete styling (2500+ lines) |
| `script.js` | Interactions, animations, and event handlers |
| `README.md` | Documentation |

## 🎯 Key JavaScript Functions

- `type()` - Typing animation logic
- `animateCounters()` - Counter increment animation
- `rotateTestimonials()` - Auto-rotate testimonial cards
- `IntersectionObserver` - Trigger animations on scroll
- Event listeners - Smooth scrolling, theme toggle, hamburger menu

## 🔐 Best Practices Implemented

✅ Semantic HTML5  
✅ Accessible ARIA labels  
✅ Mobile-first responsive design  
✅ Clean, maintainable code  
✅ Performance optimization  
✅ Cross-browser compatibility  
✅ CSS custom properties for theming  
✅ Smooth animations and transitions  

## 📄 License

This portfolio template is free to use and customize for personal and commercial projects.

## 💡 Tips for Best Results

1. **Profile Image**: Use a high-quality headshot (1000x1000px recommended)
2. **Content**: Keep About section concise (2-3 sentences)
3. **Skills**: List 8-12 relevant skills for maximum impact
4. **Testimonials**: Use 3-5 genuine client reviews
5. **Contact**: Make sure email and social links are correct
6. **Performance**: Test on mobile devices before deployment

## 🤝 Support

For questions or issues, review the code comments in `script.js` and `styles.css`.

---

**Built with ❤️ as a premium portfolio experience**  
*Last Updated: May 2026*
