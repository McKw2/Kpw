# Kpw — Personal Website

A small, fast, dependency-free personal site. Plain HTML, CSS, and JavaScript — no build step.

## Structure

```
.
├── index.html      # Single-page site with all sections
├── styles.css      # Design tokens, layout, components, dark/light theme
├── script.js       # Theme toggle, mobile nav, scroll reveal
└── README.md
```

## Run locally

Open `index.html` directly in a browser, or serve the directory with any static server. For example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Features

- Responsive layout (mobile → desktop)
- Light & dark theme with system preference detection and persistence
- Sticky, accessible navigation with mobile menu
- Smooth scroll, scroll-reveal animations, `prefers-reduced-motion` respected
- Sections: Hero · About · Projects · Writing · Contact
- Zero dependencies, deploys to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages)

## Customize

- Update copy and links in `index.html`
- Tweak colors, spacing, and typography via CSS variables in `:root` and `[data-theme="dark"]` at the top of `styles.css`
- Swap the favicon by editing the inline SVG `<link rel="icon">` in `index.html`

## Deploy

Push to a branch and connect the repo to your host of choice. For GitHub Pages, enable Pages on the `main` branch (root) and your site is live.
