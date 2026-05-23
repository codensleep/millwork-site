# Form & Grain — Custom Millwork Website

A modern, premium website for a custom millwork company featuring an interactive project estimator with quick and detailed modes. Built with React + Vite + TypeScript + Tailwind CSS.

---

## Features

- **Quick Estimate** — 3 fields, instant ballpark price range
- **Detailed Project Planner** — full configurator with dimension preview, itemized cost breakdown, and export (text/JSON)
- **All sections**: Hero, Market Demand, Services, Portfolio, Process, Why Custom, Contact
- **Fully responsive** — mobile-first
- **No backend required** — all logic runs in the browser
- Ready for GitHub Pages deployment

---

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/millwork-site.git
cd millwork-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Fixed nav with scroll detection
│   │   └── Footer.tsx          # Footer with links and contact info
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero with stats
│   │   ├── MarketDemand.tsx    # 8-item demand grid
│   │   ├── Services.tsx        # 6 service cards
│   │   ├── Constructor.tsx     # Mode switcher (quick / detailed)
│   │   ├── QuickEstimate.tsx   # 3-field ballpark estimator
│   │   ├── DetailedPlanner.tsx # Full configurator + outputs
│   │   ├── Portfolio.tsx       # 6 project cards
│   │   ├── Process.tsx         # 5-step process timeline
│   │   ├── WhyCustom.tsx       # Comparison table
│   │   └── Contact.tsx         # Lead capture form
│   └── ui/
│       ├── DimensionCard.tsx   # SVG cabinet preview + specs
│       └── EstimateSummary.tsx # Itemized estimate + export
├── types/
│   └── index.ts                # All TypeScript interfaces and label maps
├── utils/
│   └── pricing.ts              # All cost estimation logic (swap for API later)
├── App.tsx
├── main.tsx
└── index.css                   # Tailwind + custom design tokens
```

---

## Pricing Logic

All pricing is in `src/utils/pricing.ts`. To connect a real backend:
1. Replace `quickEstimate()` with an API call
2. Replace `detailedEstimate()` with an API call
3. The function signatures and return types are documented — no other files need changing

---

## Customization

| What to change | Where |
|---|---|
| Brand name | `index.html`, `Header.tsx`, `Footer.tsx` |
| Colors / fonts | `tailwind.config.js`, `src/index.css` |
| Base prices | `src/utils/pricing.ts` → `BASE_PRICE`, `PRICE_PER_LINEAR_FT` |
| Material options | `src/utils/pricing.ts` → `MATERIAL_MULTIPLIER` |
| Services content | `src/components/sections/Services.tsx` |
| Portfolio projects | `src/components/sections/Portfolio.tsx` |
| Contact form submission | `src/components/sections/Contact.tsx` → `handleSubmit` |

---

## Deploy to GitHub Pages

### Step 1 — Create a GitHub repo

Go to [github.com/new](https://github.com/new) and create a new repository (e.g. `millwork-site`).

### Step 2 — Update `vite.config.ts`

Change the `base` to match your repo name:

```ts
base: '/millwork-site/', // replace with your repo name
```

### Step 3 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/millwork-site.git
git push -u origin main
```

### Step 4 — Deploy

```bash
npm run deploy
```

This runs `npm run build` then publishes the `dist/` folder to the `gh-pages` branch.

### Step 5 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Set **Source** to `Deploy from a branch`
3. Set **Branch** to `gh-pages` / `/ (root)`
4. Save — your site will be live at `https://YOUR_USERNAME.github.io/millwork-site/`

---

## Connect a Real Form

The contact form logs to the console by default. To connect it:

**Option A — Formspree (easiest)**
```ts
// In Contact.tsx, replace handleSubmit with:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

**Option B — Netlify Forms**
Add `data-netlify="true"` to the form element and deploy to Netlify.

---

## License

MIT — free to use and modify for any purpose.
