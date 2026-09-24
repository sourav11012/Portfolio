# Portfolio — Sourav Shrikant Shetye

Personal portfolio site of **Sourav Shrikant Shetye, AI Engineer** — deployed
as a static site with [GitHub Pages](https://sourav11012.github.io/Portfolio).

## Stack

- React 18 (Create React App), react-scroll single-page sections
- Sections: Home, About, Career Timeline, Tech Stack, **AI Work**, Projects, Contact
- Styling: custom CSS with light/dark theme toggle

## Develop

```bash
npm install --legacy-peer-deps
npm start
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the app
and deploys `./build` to GitHub Pages via `actions/deploy-pages`.

> **Pages setup (one-time, in the GitHub repo):**
> Settings → Pages → Build and deployment → Source: **GitHub Actions**.

## Notes

- The old Express contact-form backend was removed — GitHub Pages is
  static-only. The contact form now opens the visitor's email client via
  `mailto:`.
- Resume PDF lives at `src/assets/docs/Sourav_Shetye_Resume.pdf`.
