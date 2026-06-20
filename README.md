# kpw build

Personal website — a lightweight homepage built with plain HTML, CSS, and JavaScript.

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

## Customize

- Update copy in `index.html`
- Change colors and typography in `css/style.css` (`:root` variables)
- Replace placeholder projects in the **Work** section
- Set your email in the **Contact** section
