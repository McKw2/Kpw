# Kpw

Personal website — a small, fast, static site.

## Stack

- Plain HTML, CSS, and a tiny bit of JavaScript
- No build step, no dependencies
- Deployed via GitHub Pages

## Local development

Any static file server will do. For example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Structure

```
.
├── index.html          # Main page (single-page site)
├── assets/
│   ├── styles.css      # All styles, design tokens, components
│   ├── main.js         # Theme toggle + small UX niceties
│   └── favicon.svg
└── .github/
    └── workflows/
        └── pages.yml   # GitHub Pages deploy workflow
```

## Deploying

On push to `main`, the GitHub Actions workflow in
`.github/workflows/pages.yml` publishes the site to GitHub Pages.

To enable it the first time, go to **Settings → Pages** on the repository and
set **Source** to **GitHub Actions**.

## Theming

The site supports both dark and light themes. The default follows the
visitor's OS preference and remembers their last choice via `localStorage`.
