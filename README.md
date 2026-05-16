# DS Labs — Portfolio

The official portfolio website for **DS Labs**, a selective digital studio specializing in AI systems, high-performance web applications, and backend engineering.

**Live:** Deployed on [Vercel](https://vercel.com)  
**Contact:** [contactdslabs@gmail.com](mailto:contactdslabs@gmail.com)

---

## Overview

A premium, motion-first single-page portfolio built to showcase the studio's technical depth and design precision. The site features a sophisticated design system, interactive 3D-tilt components, and a robust contact infrastructure.

### Key Features
- **Dynamic Design System**: Custom-built dark/light mode system with smooth transitions and localized state persistence.
* **Selected Work Catalog**: Detailed project showcase featuring "Problem/Outcome" narratives, tech stack badges, and integrated live/GitHub links.
* **Advanced Motion**: Leverages `framer-motion` for staggered entrance animations, scroll-spy navigation, and interactive tilt effects.
* **Production-Ready Forms**: Integrated with **Web3Forms** for reliable, client-side submission handling.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| **Core** | [React 19](https://react.dev) & [TypeScript 5](https://www.typescriptlang.org) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) (Modern utility-first CSS) |
| **Animation** | [Framer Motion 12](https://www.framer.com/motion/) (Declarative animations) |
| **Identity** | [Geist Sans/Mono](https://vercel.com/font) (Premium typography) |
| **Infrastructure** | [Web3Forms](https://web3forms.com) (Backend-less form handling) |
| **Deployment** | [Vercel](https://vercel.com) |

---

## Project Structure

```text
src/
├── app/
│   ├── globals.css        # Core design system & CSS custom properties
│   ├── layout.tsx         # Root layout with metadata & font optimization
│   └── page.tsx           # Home composition engine
└── components/
    ├── ThemeProvider.tsx  # Global theme context & logic
    ├── Navigation.tsx     # Animated navbar with theme toggle & scroll-spy
    ├── Hero.tsx           # Headlines & availability status
    ├── SelectedWork.tsx   # Project catalog (Source of truth for work)
    ├── About.tsx          # Studio mission & founder profiles
    ├── Services.tsx       # Core service offerings
    ├── Contact.tsx        # Secure project inquiry form (Web3Forms)
    └── Footer.tsx         # Studio identity & social connectivity
```

---

## Getting Started

### Prerequisites
- Node.js 18.17+
- npm, yarn, or pnpm

### Installation & Development
```bash
# Clone the repository
git clone https://github.com/Sahaj33-op/ds-labs-portfolio.git

# Install dependencies
npm install

# Start the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the result.

---

## Contact Form Setup

The contact form is powered by [Web3Forms](https://web3forms.com). To use it in your own fork:

1. Obtain a free **Access Key** from Web3Forms.
2. Update the `access_key` in `src/components/Contact.tsx`.
3. Test a submission — notifications will be sent directly to your email.

---

## License

© 2026 DS Labs. This project is a proprietary portfolio website. All rights reserved.
