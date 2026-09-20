# PrimeNest E-Commerce

A modern React + Vite e-commerce storefront for electronics, furniture, apparel, and household products.

## Features
- Responsive shopping UI
- Product categories for mobile, watch, computer, TV, furniture, kitchen, men, women, books, and more
- Search page for looking up products by company, brand, model, or title
- Cart functionality with add/remove support
- Authentication page for login and signup
- Client-side routing for product detail pages

## Tech Stack
- React
- Vite
- React Router DOM
- Bootstrap
- JavaScript

## Project Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Deployment Notes
This project is configured for static deployment on Vercel and Netlify.

Important requirements:
- Use Node version 20.19.0 or newer
- Ensure SPA fallback is enabled for client-side routes
- Configure redirects/rewrite rules so all routes serve `index.html`

## Project Structure

```bash
src/
  App.jsx
  main.jsx
  product.jsx
  style.css
  stores/
    components/
    context/
    data/
    pages/
    cart/
    single pages/
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint checks
```

## Notes
This project is intended for static hosting and is best deployed with a platform that supports SPA rewrites.

## License
This project is for educational/demo use.
