# 🍽️ Luxuro Dining

> **Luxury dining, delivered.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-luxuro--dining.vercel.app-black?style=for-the-badge&logo=vercel)](https://luxuro-dining.vercel.app/)
[![MIT License](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)](./LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=vite)](https://github.com/pushparani7/Luxuro-Dining)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

Luxuro Dining is a responsive, elegantly crafted marketing and demo landing page for a premium fine-dining restaurant. Built with React 19, TypeScript, Vite, TailwindCSS, and `motion/react`, it showcases rich animated sections, including a parallax hero, curated menu cards, delivery highlights, chef's specials, guest testimonials, a full-bleed photo gallery, and an interactive reservation form  all tied together with a polished, mobile-first responsive navbar. Designed to impress both guests and prospective employers, Luxuro Dining demonstrates production-quality front-end architecture in a real-world hospitality context.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Images & Credits](#-images--credits)
- [Accessibility & Performance](#-accessibility--performance)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [FAQ & Troubleshooting](#-faq--troubleshooting)
- [Changelog & Roadmap](#-changelog--roadmap)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

- **Parallax Hero** — Full-viewport hero with layered depth scroll effect
- **Animated Sections** — Smooth entrance animations via `motion/react` throughout every section
- **Menu Cards** — Beautifully styled dish cards with hover effects
- **Delivery Highlights** — Service feature callouts with icon support (`lucide-react`)
- **Chef's Specials** — Spotlight section for featured or seasonal dishes
- **Testimonials** — Stylised guest review carousel/grid
- **Photo Gallery** — Responsive image grid using Unsplash photography
- **Reservation Form** — Interactive booking form with field validation
- **Responsive Navbar** — Mobile hamburger menu + smooth scroll links
- **Fully Responsive** — Mobile-first layout, tested across breakpoints

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Styling | TailwindCSS |
| Animations | motion/react |
| Icons | lucide-react |
| Server (optional) | Express + dotenv |
| Deployment | Vercel (static) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>=18.x` (v20 LTS recommended)
- **npm** `>=9.x`

Check your versions:

```bash
node -v
npm -v
```

---

### 1. Clone the Repository

```bash
git clone https://github.com/pushparani7/Luxuro-Dining.git
cd Luxuro-Dining
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The app will be available at **[http://localhost:3000](http://localhost:3000)** (bound to `0.0.0.0` for network access).

---

### 4. Build for Production

```bash
npm run build
```

Output is written to the `dist/` directory.

### 5. Preview the Production Build Locally

```bash
npm run preview
```

### 6. Type-Check / Lint

```bash
npm run lint
```

Runs `tsc --noEmit` — no JavaScript is emitted; only type errors are reported.

---

## 📁 Project Structure

```
Luxuro-Dining/
├── public/                  # Static public assets
├── src/
│   ├── assets/              # Local SVG icons and decorative assets
│   ├── App.tsx              # Root component — all sections composed here
│   └── index.css            # Global styles and Tailwind base imports
├── index.html               # HTML entry point — update <title> here
├── vercel.json              # Vercel deployment config
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Scripts and dependencies
```

---

## ☁️ Deployment

The project ships with a `vercel.json` that configures Vercel to use `dist/` as the output directory and `vite build` as the build command. No additional configuration is needed.

### Option A — One-Click via Vercel Dashboard (Recommended)

1. Push your fork/clone to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and click **Import Project**.
3. Select your `Luxuro-Dining` repository.
4. Vercel auto-detects Vite. Confirm these settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Your site will be live at `luxuro-dining.vercel.app` (or your preferred subdomain).

---

### Option B — Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Authenticate
vercel login

# Deploy to production
npx vercel --prod --name luxuro-dining
```

> The included `vercel.json` handles routing and output directory configuration automatically.

---

### `vercel.json` Reference

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 🎨 Customization

### Change the Page Title

Edit `index.html`:

```html
<title>Luxuro Dining — Your Custom Title</title>
```

### Swap Gallery Images

Gallery images are sourced from an array in `src/App.tsx`. Find the `images` array and replace the Unsplash URLs with your own:

```tsx
const images = [
  "https://images.unsplash.com/photo-your-id?auto=format&fit=crop&w=800",
  // Add or replace URLs here
];
```

### Replace Icon / Decorative Assets

Drop SVG files into `src/assets/` and import them directly:

```tsx
import MyIcon from "./assets/my-icon.svg?react";
```

### Update Brand Colors

Edit `tailwind.config.ts` to adjust your primary palette:

```ts
theme: {
  extend: {
    colors: {
      gold: "#C9A84C",
      charcoal: "#1A1A1A",
    },
  },
},
```

---

## 🖼️ Images & Credits

- **Photography** — All hero and gallery images are sourced from [Unsplash](https://unsplash.com/) and are free for personal and commercial use under the [Unsplash License](https://unsplash.com/license).
- **Icons** — UI icons provided by [Lucide React](https://lucide.dev/).
- **Decorative Assets** — Local SVG files in `src/assets/` are original project assets.

> If you replace Unsplash images with licensed photography, ensure you hold appropriate rights before deploying publicly.

---

## ♿ Accessibility & Performance

- All `<img>` elements should include descriptive `alt` attributes. Review `App.tsx` and add meaningful alt text for every image to comply with WCAG 2.1 AA.
- The codebase uses `referrerPolicy="no-referrer"` on external image elements to prevent referrer leakage.
- **Optimize Images:** Before deploying with custom photography, compress images using [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/). Target ≤ 200 KB per image for above-the-fold content.
- **Lazy Loading:** Add `loading="lazy"` to below-the-fold gallery images to improve Largest Contentful Paint (LCP).
- **Contrast:** Ensure text on dark/image backgrounds meets a minimum 4.5:1 contrast ratio.

---

## 🔐 Environment Variables

No environment variables are required to run the project in its default configuration.

If you add server-side functionality (e.g., via the optional Express setup or a contact form API), create a `.env` file in the project root:

```env
# .env
VITE_API_URL=https://your-api.example.com
CONTACT_FORM_KEY=your_secret_key
```

> **Note:** Variables prefixed with `VITE_` are exposed to the client bundle. Never prefix sensitive secrets with `VITE_`. Use server-only variables (without the prefix) for anything that must stay private.

Vite loads `.env` automatically. Reference client-side variables in code as:

```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### Steps

1. **Fork** this repository.
2. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and commit with a clear message:
   ```bash
   git commit -m "feat: add mobile swipe support to gallery"
   ```
4. **Push** your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** against the `main` branch and describe your changes.

### Issue Templates (Suggestions)

When filing issues, please include:
- **Bug reports:** Steps to reproduce, expected vs. actual behaviour, browser/OS.
- **Feature requests:** Use case, proposed solution, any relevant mockups.

### Code Style

- Follow the existing TypeScript + TailwindCSS conventions.
- Run `npm run lint` before submitting a PR.
- Keep components focused — one responsibility per file where possible.

---

## ❓ FAQ & Troubleshooting

**Q: Images are not loading after deployment.**

> Try a hard refresh (`Ctrl + Shift + R` / `Cmd + Shift + R`). Open the browser Network tab and check for 404 or CORS errors on image URLs. If using Unsplash, ensure the URL is correct and the image is still publicly available. External images must be accessible from the user's network.

**Q: The dev server won't start / port 3000 is in use.**

> Either terminate the process using port 3000 (`lsof -i :3000` on macOS/Linux) or change the port in `package.json`:
> ```json
> "dev": "vite --port=3001 --host=0.0.0.0"
> ```

**Q: TailwindCSS classes are not applying.**

> Ensure `tailwind.config.ts` includes the correct `content` paths:
> ```ts
> content: ["./index.html", "./src/**/*.{ts,tsx}"]
> ```

**Q: `motion/react` animations are not playing.**

> Confirm `motion/react` is listed in `dependencies` (not `devDependencies`) and that you are importing from `"motion/react"` — not the deprecated `"framer-motion"`.

**Q: TypeScript errors on `npm run lint`.**

> Run `npm install` to ensure all type definitions are present, then re-run `npm run lint`. Check that `tsconfig.json` includes all source files.

---

## 📅 Changelog & Roadmap

### Current Version — v1.0.0

- Initial release: Hero, Menu, Delivery, Specials, Testimonials, Gallery, Reservation, Navbar.

### Planned / Suggested Improvements

- [ ] **Mobile micro-interactions** — Swipe gestures for gallery and testimonials on touch devices
- [ ] **Localization (i18n)** — Multi-language support via `react-i18next`
- [ ] **CMS Integration** — Connect menu and gallery content to a headless CMS (e.g., Sanity, Contentful)
- [ ] **SSR / SSG** — Migrate to Next.js or Astro for improved SEO and performance
- [ ] **Dark / Light Mode Toggle** — System-preference-aware theme switching
- [ ] **Reservation Backend** — Wire up the form to an email API (Resend, SendGrid) or booking platform
- [ ] **Performance Audit** — Achieve Lighthouse score ≥ 95 across all categories
- [ ] **Animation Accessibility** — Honour `prefers-reduced-motion` system setting throughout

---

## 📄 License

```
MIT License

Copyright (c) 2024 pushparani7

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📬 Contact

**Author:** [@pushparani7](https://github.com/pushparani7)
**Repository:** [github.com/pushparani7/Luxuro-Dining](https://github.com/pushparani7/Luxuro-Dining)
**Live Demo:** [luxuro-dining.vercel.app](https://luxuro-dining.vercel.app/)

---

> ⭐ If you found this project useful or inspiring, consider giving it a star on GitHub — it helps others discover it!

---

---

## 🔖 GitHub Repository Description (Short Bio)

> Luxuro Dining is a responsive, animated fine-dining landing page built with React 19, TypeScript, Vite, TailwindCSS, and motion/react. It features a parallax hero, menu, gallery, testimonials, and reservation form — deployed live on Vercel. A production-quality front-end showcase for a premium restaurant brand.
