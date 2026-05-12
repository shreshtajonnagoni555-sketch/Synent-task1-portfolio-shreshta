# Shreshta Jonnagoni Portfolio

A premium, futuristic developer portfolio built with **HTML5**, **CSS3**, and **vanilla JavaScript**. The design is modern, interactive, responsive, and optimized for a strong first impression.

## ?? Overview
This portfolio showcases personal branding, skills, testimonials, and contact details in a sleek single-page layout. It includes advanced UI effects such as glassmorphism, custom cursor interaction, scroll progress, typing animation, parallax particles, and responsive mobile navigation.

## ? Features
- Full-screen **hero section** with animated typing effect
- Sticky **glassmorphism navbar** with active highlight and mobile menu
- **About Me** section with 3D profile card and animated counters
- **Skills** showcase with hover tilt and progress bars
- **Testimonials** carousel with smooth transitions
- **Contact** section with floating labels and interactive styling
- **Dark mode** toggle with persistent preference
- **Custom cursor** and scroll progress indicator
- **Responsive** layout for desktop, tablet, and mobile

## ?? Project Structure
```
synent technologies/
+-- index.html      # Portfolio page structure
+-- styles.css      # Styling and animations
+-- script.js       # Interactive JavaScript behaviors
+-- README.md       # Project documentation
+-- image synent/
    +-- shreshta img.jpeg  # Profile image
```

## ?? Quick Start
1. Open `index.html` in your browser.
2. Or run a simple static server if you want local network access:
   ```bash
   npx serve .
   ```

## ??? Customization Guide
### Update Personal Details
- Replace the name and headline in `index.html`
- Update email, phone, LinkedIn, and GitHub links in the Contact section
- Replace the profile image at `image synent/shreshta img.jpeg`

### Edit Skills
1. In `index.html`, modify the skill cards under the Skills section.
2. Adjust the progress bars and labels as needed.

### Change Typing Text
Update the array in `script.js`:
```js
const typingStrings = ['Frontend Developer', 'UI/UX Designer', 'Creative Coder'];
```

### Theme Colors
Modify CSS variables in `styles.css`:
```css
:root {
  --accent: #7c6bff;
  --text: #e9efff;
  --bg: #05070f;
}
```

## ?? Notes
- The contact form is currently configured as a prototype alert. Replace this with a real backend or form service to enable submissions.
- The portfolio is intentionally built without frameworks for performance and simplicity.

## ?? Deployment
### GitHub Pages
1. Push this folder to a GitHub repo.
2. Enable GitHub Pages from repo settings.
3. Set the source to `main` branch root.

### Netlify / Vercel
1. Connect your repo.
2. Set the publish directory to `/`.
3. Deploy and enjoy instant hosting.

## ? Best Practices
- Use a professional **high-resolution profile photo**
- Keep the About section concise
- Show 4–8 relevant skills
- Add 2–3 strong testimonials
- Update contact links before publishing

## ?? Final Notes
This portfolio is a premium static template designed for modern front-end presentation. It is easy to customize and deploy for portfolio hosting, client showcases, or personal branding.

---

**Built for Shreshta Jonnagoni — modern, premium, future-ready.**
