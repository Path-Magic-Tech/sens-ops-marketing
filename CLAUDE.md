# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketing website for Sens Operations Inc., showcasing their advanced agricultural storage sensor and software platform. Built as a modern single-page React application with Vite and React Router.

## Development Commands

### Local Development
```bash
npm run dev          # Start Vite dev server at http://localhost:5173
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on the codebase
```

### Deployment
```bash
npm run deploy       # Build and deploy to GitHub Pages (manual)
```

The project uses GitHub Actions for automatic deployment to GitHub Pages on push to `main` branch.

## Architecture

### Routing & Layout
- Single-page application using React Router (BrowserRouter)
- Layout structure: `App.jsx` wraps all pages with `<Navbar>` and `<Footer>` components
- Five main routes defined in `src/App.jsx:18-22`:
  - `/` - Home
  - `/about` - About
  - `/technology` - Technology
  - `/solutions` - Solutions
  - `/contact` - Contact

### Design System
All design tokens are defined as CSS custom properties in `src/index.css:2-27`:
- Colors: Cream background (#F5F1E8), Charcoal text (#2C2C2C), Green CTAs (#2D5F4F), Wheat/Gold accents
- Typography: Playfair Display (serif) for headings, system sans-serif for body
- Utility classes: `.container`, `.section`, `.grid-*`, `.card`, `.btn-*`
- Responsive spacing and grid system with mobile breakpoint at 768px

### Component Structure
- **Shared components**: `src/components/` (Navbar, Footer)
- **Page components**: `src/pages/` (Home, About, Technology, Solutions, Contact)
- Each component has its own CSS file (e.g., `Navbar.jsx` → `Navbar.css`)
- Global styles and design system in `src/index.css`

### Contact Form
The contact form in `src/pages/Contact.jsx` currently logs submissions to console. To integrate with a backend, update the `handleSubmit` function to call an API endpoint or email service.

## Build Configuration

### Vite
- Base path is `/sens-ops-marketing/` in `vite.config.js:7` for GitHub Pages deployment
- The `basename` prop in `src/main.jsx` is set to `import.meta.env.BASE_URL` to sync with Vite's base path
- This configuration enables proper routing on GitHub Pages at `https://path-magic-tech.github.io/sens-ops-marketing/`

### Cross-Platform Build Script
- The `postbuild` script uses Node.js's `fs.copyFileSync` to copy `index.html` to `404.html`
- This approach works on both Windows and Mac/Linux without platform-specific commands
- The 404.html file is required for client-side routing to work correctly on GitHub Pages

### GitHub Actions
Deployment workflow in `.github/workflows/deploy.yml`:
- Triggers on push to `main` branch
- Uses Node.js 20.x
- Builds and deploys `dist/` directory to GitHub Pages
- Requires GitHub Pages to be enabled in repository settings

### Manual Deployment
```bash
npm run deploy  # Uses npx gh-pages -d dist
```

## Content Updates

Page content is directly embedded in the JSX files under `src/pages/`. To update text, headings, or structure, edit the respective page component.

### Hero Background Images
All page hero sections use background images from Unsplash with gradient overlays:
- **Home** (`src/pages/Home.css`): Full-screen hero with parallax effect (`background-attachment: fixed`)
- **About, Technology, Solutions, Contact**: Hero banners with background images
- **Mobile optimization**: All hero sections use `background-attachment: scroll` on mobile (via `@media (max-width: 768px)`) to prevent parallax issues
- **Positioning tips**:
  - Use `background-position: center` for default centering
  - Use `background-position: bottom` to show lower portion of image
  - Use `background-position: center 55%` (or other %) for fine-tuned vertical positioning (0% = top, 50% = center, 100% = bottom)
- **Opacity**: Gradient overlays use rgba values - adjust the alpha channel (0.7, 0.85, 0.9) to control visibility of background image

### Favicon
Custom favicon located at `public/favicon.svg` - features "SO" initials in brand colors

### Mobile Responsiveness
- Home page hero has `padding-top: 80px` on mobile to prevent navbar overlap
- Other pages have `padding-top: 100px` on mobile (reduced from 120px on desktop)
- No `margin-top` on `.main-content` - each page handles its own top spacing
