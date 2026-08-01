# KPW Build + Store

Static landing page that combines the KPW Build landscaping website with the KPW Store ecommerce offering into one clearer destination.

## Sections

- Hero, services, recent projects gallery, store products, how it works, testimonials, FAQ, and a quote request form.

## Files

- `index.html` — combined homepage with SEO/social meta and JSON-LD structured data
- `css/style.css` — responsive styles for all sections, scroll-reveal, and back-to-top
- `js/main.js` — mobile nav, footer year, scroll-reveal, active nav highlighting, back-to-top, and client-side quote-form validation

## Local preview

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## Deploy to GitHub Pages

1. Push this branch to `main`
2. In the repo settings, go to **Pages**
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**
4. Choose the `main` branch and `/ (root)` folder
5. Save — your site will be live at `https://mckw2.github.io/Kpw/`
