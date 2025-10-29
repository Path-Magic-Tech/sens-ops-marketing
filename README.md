# Sens Operations Marketing Website

A modern, responsive marketing website for Sens Operations Inc. - The next generation of smart agriculture.

## Overview

This website showcases Sens Operations' advanced agricultural storage sensor and software platform designed to optimize food storage and prevent spoilage and diseases.

## Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Modern Tech Stack**: Built with React, Vite, and React Router
- **Professional Branding**: Sophisticated design with agricultural touches
- **Full Contact Form**: Complete contact functionality for customer inquiries
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions

## Pages

- **Home**: Hero section with company mission and value propositions
- **About**: Company mission, team profiles, and core values
- **Technology**: Platform capabilities and sensor technology overview
- **Solutions**: Potato storage solutions and partnership approach
- **Contact**: Full contact form with inquiry options

## Design System

### Colors
- Cream: `#F5F1E8` (Background)
- Beige: `#E8E3D6` (Secondary background)
- Charcoal: `#2C2C2C` (Primary text)
- Wheat/Gold: `#D4A574` / `#C89647` (Agricultural accents)
- Green: `#2D5F4F` (Primary CTA color)

### Typography
- Headings: Playfair Display (Serif)
- Body: System fonts (Sans-serif)

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd sens-ops-marketing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at your GitHub Pages URL

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
# Then deploy the contents of the 'dist' folder to your hosting service
```

## Customization

### Updating Logo
Replace the placeholder logo in the navigation by updating the logo component in:
- `src/components/Navbar.jsx`

You can add your SVG logo file to `src/assets/` and import it.

### Updating Images
Replace image placeholders throughout the site by:
1. Adding images to `public/images/` or `src/assets/`
2. Updating the `image-placeholder` divs in page components

### Updating Content
Page content can be updated directly in the respective page components:
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Technology.jsx`
- `src/pages/Solutions.jsx`
- `src/pages/Contact.jsx`

### Contact Form Integration
The contact form in `src/pages/Contact.jsx` currently logs to console. To integrate with a backend:
1. Update the `handleSubmit` function
2. Add your API endpoint or email service integration
3. Consider using services like FormSpree, EmailJS, or a custom backend

## Project Structure

```
sens-ops-marketing/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── *.css
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Technology.jsx
│   │   ├── Solutions.jsx
│   │   ├── Contact.jsx
│   │   └── *.css
│   ├── App.jsx         # Main app component with routing
│   ├── index.css       # Global styles & design system
│   └── main.jsx        # App entry point
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Technologies Used

- **React 19**: UI library
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **CSS3**: Styling with CSS custom properties
- **Google Fonts**: Playfair Display typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2025 Sens Operations Inc. All rights reserved.

## Contact

For questions about this website or Sens Operations:
- Website: [Your Domain]
- Email: founders@sensops.com
