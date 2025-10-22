# StratSchool Landing Page 🚀

A stunning, **professional-grade landing page** for StratSchool built with surgical precision and modern web technologies. Features cutting-edge animations, 3D effects, and pixel-perfect responsive design.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-ff69b4?style=for-the-badge)

## ✨ Features

### 🎨 Design Excellence
- **Rolls-Royce level elegance** - Premium brand aesthetics
- **Fey.com inspired** - Clean, modern, sophisticated
- **React Bits animations** - Including infinite logo loop
- **100% responsive** - Perfect on all devices (mobile, tablet, desktop)

### 🎭 Advanced Animations
- ✅ Scroll-triggered animations with Framer Motion
- ✅ Parallax effects on hero section
- ✅ Buttery-smooth scrolling with Lenis
- ✅ Glass morphism effects
- ✅ Gradient animations
- ✅ Infinite logo loop (React Bits inspired)
- ✅ Hover effects on all interactive elements

### 📄 Complete Sections
1. **Hero** - 3D animated background, stats, CTAs
2. **Mission** - 4 animated feature cards
3. **Programs** - IGNITE, LIFTOFF, FOUNDATIONS
4. **Partners** - Trusted institutions grid
5. **Ecosystem** - Infinite logo loop animation
6. **Campus Experience** - Testimonials carousel
7. **i-ACE Tribe** - Alumni community
8. **Footer** - Complete sitemap & contact

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion, GSAP, Lenis
- **3D:** Three.js, React Three Fiber
- **Icons:** Lucide React

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
strat-landing/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── animations/
│   │   ├── SmoothScroll.tsx    # Lenis smooth scroll
│   │   └── LogoLoop.tsx        # Infinite logo animation
│   ├── sections/
│   │   ├── Hero.tsx            # Hero with 3D effects
│   │   ├── Mission.tsx         # Mission & features
│   │   ├── Programs.tsx        # 3 flagship programs
│   │   ├── Partners.tsx        # Partners & logo loop
│   │   ├── CampusExperience.tsx # Testimonials
│   │   ├── IACETribe.tsx       # Alumni community
│   │   └── Footer.tsx          # Footer & CTA
│   └── ui/
│       └── Navbar.tsx          # Responsive navigation
└── public/
    ├── grid.svg                # Background pattern
    ├── images/                 # Program images
    └── logos/                  # Partner logos
```

## 🎯 Key Features Explained

### Smooth Scroll
Lenis provides buttery-smooth scrolling throughout the site:
```tsx
<SmoothScroll>{children}</SmoothScroll>
```

### Logo Loop Animation
Infinite scrolling animation inspired by React Bits:
```tsx
<LogoLoop items={partners} speed={25} />
```

### Scroll-Triggered Animations
Every section animates on scroll using Framer Motion:
```tsx
const isInView = useInView(ref, { once: true, margin: '-100px' });
```

## 🎨 Design System

### Colors
- **Primary:** Red `#DC2626` (red-600)
- **Secondary:** Red `#EF4444` (red-500)  
- **Accent:** Deep Red `#B91C1C` (red-700)
- **Background:** Black with red gradients

### Typography
- **Body:** Inter
- **Headings:** Space Grotesk

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 📝 Content Management

### Adding Partner Logos
1. Place logo in `public/logos/`
2. Update `Partners.tsx`:
```tsx
const institutions = [
  { name: 'Institution Name', logo: '/logos/logo.png' },
];
```

### Updating Programs
Edit `components/sections/Programs.tsx`:
```tsx
const programs = [
  {
    name: 'PROGRAM NAME',
    description: '...',
    features: ['Feature 1', 'Feature 2'],
  },
];
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import to Vercel
3. Deploy automatically ✨

### Manual Deployment
```bash
npm run build
# Upload .next folder to your host
```

## 📊 Performance

- ✅ Server-Side Rendering (SSR)
- ✅ Image Optimization (Next.js)
- ✅ Code Splitting
- ✅ Lazy Loading
- ✅ Optimized Animations

## 💡 Customization

### Colors
Edit `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
    },
  },
}
```

### Fonts
Update `app/layout.tsx`:
```tsx
import { YourFont } from 'next/font/google';
```

## 🔍 SEO

Built-in SEO optimization:
- Meta tags
- Open Graph
- Semantic HTML
- Fast loading times

## 📞 Contact

- **Website:** [stratschool.org](https://www.stratschool.org)
- **Email:** reach@stratschool.org
- **LinkedIn:** [StratSchool](https://www.linkedin.com/company/stratschool/)
- **Twitter:** [@StratSchool_](https://x.com/StratSchool_)
- **Instagram:** [@strat.school](https://www.instagram.com/strat.school)

## 📄 License

© 2024 StratSchool | A brand of Noburo Business Services LLP

---

**Built with ❤️ and surgical precision for StratSchool**
