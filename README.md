# Kpw — Website

A fast, accessible, responsive personal website built with plain HTML, CSS, and
JavaScript (no build step required).

## Features

- Responsive layout with a mobile navigation menu
- Dark / light theme toggle (remembers your choice)
- Smooth scrolling with active-section highlighting in the nav
- Scroll-reveal animations and animated stat counters
- Accessible contact form with inline validation
- Zero dependencies / no build tooling

## Project structure

```
.
├── index.html            # Page markup
├── assets/
│   ├── css/styles.css    # Styles & theming
│   └── js/main.js        # Interactivity
└── README.md
```

## Running locally

Any static file server works. For example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Customizing

- Update copy and section content directly in `index.html`.
- Tweak colors, spacing, and theming via the CSS variables at the top of
  `assets/css/styles.css`.
- Adjust interactive behavior in `assets/js/main.js`.

## Deploying

The site is fully static and can be hosted on GitHub Pages, Netlify, Vercel, or
any static host. For GitHub Pages, enable Pages on the default branch / root.
