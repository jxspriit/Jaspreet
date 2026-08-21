# Jaspreet Singh — Full-Stack Developer Portfolio

A single-page, premium, dark-themed developer portfolio built with **Angular 19** and **Tailwind CSS 3**.

## Getting started

```bash
npm install
npm start          # dev server at http://localhost:4200
```

Production build:

```bash
npm run build       # outputs to dist/jaspreet-portfolio/browser
```

## Replacing placeholder content

- **Profile photo** — swap `public/assets/images/profile.svg` for a real photo (keep the filename or update the `src` in `src/app/components/about/about.component.html`).
- **Project images** — replace the files in `public/assets/images/projects/` (currently generated placeholders).
- **Resume** — replace `public/assets/resume/jaspreet-singh-resume.pdf` with the real PDF.
- **Projects, skills, experience, services, contact info** — all content is data-driven from `src/app/data/*.ts`. Edit those files; the templates render automatically, no HTML changes needed.
- **Contact form** — `src/app/components/contact/contact.component.ts` currently simulates a submission with `setTimeout`. Wire `onSubmit()` to a real backend or a service such as Formspree/EmailJS.
- **GitHub stats** — `src/app/components/github-stats/github-stats.component.ts` renders static numbers from `src/app/data/misc.data.ts`. To make it live, call the public GitHub REST API (`https://api.github.com/users/{username}`, `/repos`) from a small Angular service — no API key is required for public read-only endpoints. `src/environments/environment.ts` already has a `githubUsername` field ready for this.

## Project structure

```
src/app/
├── components/     one folder per section (navbar, hero, about, skills, ...)
├── models/         shared TypeScript interfaces
├── data/           typed content arrays consumed by the components
├── services/       ScrollSpyService (active nav-link tracking)
└── app.component.* root shell that assembles all sections + scroll-reveal logic
```

## Notes

- Respects `prefers-reduced-motion`.
- Fully responsive from 320px mobile up to large desktop.
- Project filtering, skill bars, and the tech marquee are all driven by Angular signals/state — no duplicated markup.
