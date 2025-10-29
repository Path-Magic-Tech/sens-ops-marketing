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
- Base path is `/` in `vite.config.js:7`
- Change `base` if deploying to a GitHub Pages repository path (e.g., `/repo-name/`)

### GitHub Actions
Deployment workflow in `.github/workflows/deploy.yml`:
- Triggers on push to `main` branch
- Uses Node.js 20.x
- Builds and deploys `dist/` directory to GitHub Pages
- Requires GitHub Pages to be enabled in repository settings

## Content Updates

Page content is directly embedded in the JSX files under `src/pages/`. To update text, headings, or structure, edit the respective page component.

Images are currently placeholders with `.image-placeholder` divs. To add real images:
1. Place images in `public/images/` or `src/assets/`
2. Replace placeholder divs with `<img>` tags
3. Update logo in `src/components/Navbar.jsx`
