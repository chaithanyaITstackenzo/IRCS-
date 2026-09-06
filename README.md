# IRCS Cancer Hospital — Website

A redesigned website for IRCS Cancer Hospital (Nellore), built on the same technical
foundation as the reference project (`Gunukula-Kishore`): **React 19 + Vite + CSS
Modules**, with a JSON data layer, AOS/Framer Motion animation, and `react-icons`.

## Getting started

```bash
npm install
npm run dev       # local development, http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
npm run lint       # oxlint
```

## Architecture

- **Single-page scroll for most content** (Home): Hero, About, Journey timeline,
  Stats, Departments, Doctors preview, Why Choose, Facilities, Nursing Care, Care
  Beyond Treatment, Insurance & Schemes, NABH status, Awareness preview, Gallery,
  Packages, CTA, Contact (with form + map), Donate.
- **Real routes** for content that needs its own detail page:
  - `/doctors` — searchable, filterable doctor directory
  - `/doctors/:id` — individual doctor profile
  - `/awareness` — full list of awareness camps
  - `/awareness/:slug` — individual camp detail page with related camps
  - `*` — 404 page

```
src/
├── assets/            (empty — see "Images" below)
├── components/        one folder per section/component, each with .jsx + .module.css
├── data/               *.json content files — edit these to change site content
├── pages/              route-level pages (Home, DoctorsDirectory, DoctorDetail, ...)
├── App.jsx
├── main.jsx
└── index.css           design tokens + global/base styles
```

## Content

All hospital content (history, doctors, departments, facilities, packages & pricing,
insurance schemes, NABH status, contact details, and a sample of real awareness
camps) was pulled directly from `ircscancerhospital.org` and lives in `src/data/`.
Update those files to change any copy on the site — nothing is hardcoded in JSX.

Note on NABH: the hospital's own site currently states it is **not** NABH-accredited.
That's reflected honestly in the `NABH` section rather than omitted.

## Images

Every image currently points directly at `ircscancerhospital.org`'s own media
library (hotlinked), because this build environment couldn't reach that domain to
download the files locally. To make the site self-contained:

1. Download the images referenced in `src/data/*.json` (search each file for
   `ircscancerhospital.org/wp-content/uploads/...`).
2. Save them under `src/assets/images/` (e.g. `assets/images/doctors/`,
   `assets/images/departments/`, etc.).
3. Replace each hotlinked URL in the JSON files with an `import`ed local path, or
   move the files into `public/images/` and point to `/images/...` instead —
   whichever fits your deployment.

## Known follow-ups before going live

- **Contact form** (`src/components/Contact/Contact.jsx`) validates and shows a
  success state, but isn't wired to a real backend yet — see the `TODO` comment in
  that file. Connect it to an email service (Formspree, EmailJS) or your own API.
- **Donate flow** currently shows the hospital's real UPI QR codes and asks people
  to contact the hospital to confirm — no payment gateway is wired up, per the
  brief's instruction not to fake payment integration.
- **Awareness camps**: 9 real camps are included as a representative sample: the
  live site has many more. Add additional entries to `src/data/awareness.json` in
  the same shape to extend the list.
- Google Maps embed uses a plain `q=` query (no API key required); swap in a Maps
  API key + Embed API if you want richer map styling.

## Stack

`react` `react-dom` `react-router-dom` `framer-motion` `aos` `react-icons`
`react-countup` `react-scroll` — matching the reference project's stack, minus
`swiper`/`lightgallery` (the gallery + lightbox here is built directly with
CSS/Framer Motion to keep the dependency footprint small).
