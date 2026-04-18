# Buffalo Dried Limed Pelts B2B Export Website

Production-ready B2B exporter website built with Next.js 16.2 (Turbopack), TypeScript, Tailwind CSS v4, GSAP, and Three.js.

## Tech Stack
- **Framework**: Next.js 16.2 (App Router)
- **Styling**: Tailwind CSS v4 (Pure CSS Configuration)
- **Animations**: GSAP (ScrollTrigger, SplitType), Lenis (Smooth Scroll), Framer Motion (Page Transitions), Three.js (Hero Particles)
- **Forms**: React Hook Form + Zod
- **Email**: Nodemailer API Route

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Setup Environment Variables**:
   Copy `.env.local.example` to `.env.local` and fill in your SMTP credentials to enable the contact form:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=export@indopelts.com
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Pages Included
- `Home (/)`: Interactive hero with particle system, company overview, and trust stats.
- `Achievements (/achievements)`: Industrial metrics dashboard, processing pipeline visualization, and infrastructure scale.
- `Products (/products)`: Technical specifications, grade comparisons (A/B), and industry applications.
- `Contact (/contact)`: Detailed RFQ inquiry form with automated email dispatch and FAQ accordion.

## Features
- **Dynamic Animations**: Smooth scroll via Lenis and high-performance GSAP scroll-triggered reveals.
- **Premium Design**: Industrial B2B aesthetic using forest green and warm gold branding.
- **B2B Optimized**: Sticky CTAs, detailed technical parameters, and a floating WhatsApp widget.
- **SEO Ready**: Automated sitemap generation and semantic metadata architecture.
- **Mobile Responsive**: Performance-tuned animations (30fps cap for mobile Three.js) and touch-optimized navigation.
