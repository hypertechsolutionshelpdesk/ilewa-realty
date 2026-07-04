# 🏡 IBADAN REALTY — Full Technical Design & Development Master Prompt
### Real Estate Agent Website · Ibadan, Oyo State, Nigeria
---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 1 — PROJECT BRIEF & CREATIVE DIRECTION
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 1.1 Project Identity
- **Brand Name:** IbadanRealty (or "Ìlé Wa Realty" — meaning "Our Home" in Yoruba)
- **Tagline:** *"Home is where Ibadan is."*
- **Business:** Premium real estate agency serving Ibadan, Oyo State, Nigeria
- **Target Audience:** Nigerian middle-to-upper-income earners, diaspora buyers, young professionals, growing families seeking property in Ibadan
- **Tone:** Warm, trustworthy, culturally rooted, modern yet deeply Nigerian

### 1.2 Design Philosophy
The website should feel like **West African luxury meets modern digital craftsmanship**.
Avoid cold, Eurocentric corporate aesthetics. Instead use:
- Deep earth tones — ochre, saddle brown, forest green, warm cream
- Imagery of Black Nigerian families, Black homeowners, local architecture
- Yoruba cultural references subtly woven into copy and UI elements
- Typography that feels editorial and premium, not generic SaaS

### 1.3 Unforgettable Element
The one thing users remember: **A full-screen cinematic video hero of Ibadan neighborhoods at golden hour, with a split-word animated headline that reveals like a curtain call — powerful, local, unmistakably Nigerian.**

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 2 — TECHNOLOGY STACK
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 2.1 Project Initialization
```bash
# Scaffold the project
npm create vite@latest ibadan-realty -- --template react
cd ibadan-realty

# Install all required dependencies
npm install react-router-dom framer-motion swiper react-icons

# Optional but recommended
npm install react-helmet-async react-intersection-observer
npm install -D sass
```

### 2.2 Full Dependency Table

| Package | Min Version | Role |
|---|---|---|
| `react` | ^18.3 | Core UI framework |
| `react-dom` | ^18.3 | DOM renderer |
| `vite` | ^5.4 | Dev server + build tool |
| `react-router-dom` | ^6.26 | Client-side routing |
| `framer-motion` | ^11.5 | Animations & page transitions |
| `swiper` | ^11.1 | Touch-friendly carousels & sliders |
| `react-icons` | ^5.3 | Icon library (Feather, Bootstrap, Heroicons, Font Awesome) |
| `react-helmet-async` | ^2.0 | Dynamic `<head>` SEO management |
| `react-intersection-observer` | ^9.13 | Scroll-based animation triggers |
| `sass` | ^1.79 | SCSS variables, mixins, nesting |

### 2.3 Google Fonts — Add to `index.html`
```html
<!-- index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?
  family=Cormorant+Garamond:wght@300;400;500;600;700&
  family=Playfair+Display:wght@400;500;600;700;800&
  family=DM+Sans:wght@300;400;500;600;700&
  display=swap" rel="stylesheet">
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 3 — FOLDER & FILE ARCHITECTURE
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```
ibadan-realty/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero/              # Hero BG images (Ibadan skyline, neighborhoods)
│   │   │   ├── properties/        # Property listing photos (exterior + interior)
│   │   │   ├── team/              # Agent/team headshots
│   │   │   ├── neighborhoods/     # Bodija, Jericho, GRA, Mokola, etc.
│   │   │   ├── lifestyle/         # Black families, home celebrations, key handovers
│   │   │   ├── testimonials/      # Client avatar photos
│   │   │   └── blog/              # Blog post thumbnails
│   │   ├── videos/
│   │   │   ├── hero-ibadan.mp4    # Drone/cinematic Ibadan footage (hero BG)
│   │   │   ├── hero-ibadan.webm   # WebM fallback
│   │   │   └── property-tour-*.mp4
│   │   └── animations/
│   │       ├── house-build.json   # Lottie animation (loading screen)
│   │       ├── location-pin.json  # Lottie (map section)
│   │       └── confetti.json      # Lottie (form success)
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx          # Transparent → solid scroll navbar
│   │   │   ├── Footer.jsx          # 4-column footer
│   │   │   ├── Button.jsx          # Reusable CTA button component
│   │   │   ├── PropertyCard.jsx    # Listing card used across pages
│   │   │   ├── SectionHeader.jsx   # Label + Title + Subtitle block
│   │   │   ├── Loader.jsx          # Page loader with Lottie house animation
│   │   │   ├── ScrollToTop.jsx     # Fires on route change
│   │   │   └── WhatsAppFAB.jsx     # Floating WhatsApp action button
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.jsx         # Full-viewport video hero
│   │   │   ├── SearchBar.jsx           # Overlapping property search widget
│   │   │   ├── FeaturedProperties.jsx  # SwiperJS carousel
│   │   │   ├── StatsCounter.jsx        # Animated number counters
│   │   │   ├── WhyChooseUs.jsx         # 3-card value proposition grid
│   │   │   ├── NeighborhoodSpotlight.jsx # Ibadan areas carousel
│   │   │   ├── Testimonials.jsx        # SwiperJS testimonial slider
│   │   │   ├── BlogPreview.jsx         # Latest 3 blog post cards
│   │   │   └── CTABanner.jsx           # Full-width call-to-action section
│   │   │
│   │   ├── properties/
│   │   │   ├── PropertyGrid.jsx        # Responsive listings grid
│   │   │   ├── PropertyFilter.jsx      # Filter sidebar/modal
│   │   │   ├── PropertyGallery.jsx     # SwiperJS gallery + thumbnails
│   │   │   └── AgentContactWidget.jsx  # Sticky agent contact card
│   │   │
│   │   └── contact/
│   │       ├── ContactForm.jsx         # Validated contact form
│   │       └── MapEmbed.jsx            # Google Maps iframe
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Properties.jsx
│   │   ├── PropertySingle.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.js     # Tracks scroll Y for navbar behavior
│   │   ├── useScrollAnimation.js    # IntersectionObserver + Framer variants
│   │   ├── useCounter.js            # Animated count-up on scroll
│   │   └── useMediaQuery.js         # Responsive breakpoint detection
│   │
│   ├── context/
│   │   └── PropertyContext.jsx      # Global property state + filter logic
│   │
│   ├── data/
│   │   ├── properties.js            # 20+ mock property objects
│   │   ├── testimonials.js          # 8 client testimonials
│   │   ├── neighborhoods.js         # 8 Ibadan neighborhood cards
│   │   ├── team.js                  # 4 agent profiles
│   │   └── blogPosts.js             # 6 blog post objects
│   │
│   ├── styles/
│   │   ├── _variables.scss          # Design tokens (colors, spacing, fonts)
│   │   ├── _mixins.scss             # Respond-to, flex-center, etc.
│   │   ├── _reset.scss              # CSS normalize + box-sizing
│   │   ├── _typography.scss         # Global text styles
│   │   ├── _animations.scss         # CSS keyframe animations
│   │   └── global.scss              # Imports all partials + body styles
│   │
│   ├── utils/
│   │   ├── formatPrice.js           # ₦85M, ₦1.2B formatter
│   │   └── filterProperties.js      # Pure filter function
│   │
│   ├── App.jsx                      # Router setup + AnimatePresence
│   └── main.jsx                     # App entry point
│
├── index.html
├── vite.config.js
└── package.json
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 4 — DESIGN SYSTEM & TOKENS
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 4.1 Complete CSS Variables (`src/styles/_variables.scss`)
```scss
:root {
  /* ── Brand Colors ── */
  --clr-primary:          #8B4513;   /* Saddle Brown — trust, warmth */
  --clr-primary-light:    #C47B3E;   /* Ochre Gold */
  --clr-primary-dark:     #5C2E0E;   /* Deep Mahogany */
  --clr-accent:           #2D6A4F;   /* Forest Green — growth, wealth */
  --clr-accent-light:     #52B788;   /* Sage Green */
  --clr-gold:             #D4A853;   /* Nigerian Gold — luxury, prestige */
  --clr-gold-dark:        #A8812F;

  /* ── Neutrals ── */
  --clr-cream:            #FAF3E0;   /* Warm Cream — page background */
  --clr-off-white:        #F5EDD8;   /* Deeper cream surfaces */
  --clr-text:             #1A1208;   /* Near-black with warm undertone */
  --clr-text-body:        #3D2B1F;   /* Body text */
  --clr-text-muted:       #7A6652;   /* Secondary text */
  --clr-border:           #E8D5BB;   /* Subtle warm border */
  --clr-shadow:    rgba(139,69,19,.12);

  /* ── Surfaces ── */
  --clr-surface:          #FFFFFF;
  --clr-surface-alt:      #FDF8F0;
  --clr-dark-bg:          #1A1208;   /* Dark section backgrounds */

  /* ── Status ── */
  --clr-success:          #2D6A4F;
  --clr-error:            #C0392B;
  --clr-warning:          #E67E22;

  /* ── Typography ── */
  --font-display:  'Cormorant Garamond', Georgia, serif;
  --font-heading:  'Playfair Display', Georgia, serif;
  --font-body:     'DM Sans', system-ui, sans-serif;

  /* ── Spacing (8pt grid) ── */
  --sp-1:   0.25rem;   /*  4px */
  --sp-2:   0.5rem;    /*  8px */
  --sp-3:   0.75rem;   /* 12px */
  --sp-4:   1rem;      /* 16px */
  --sp-5:   1.25rem;   /* 20px */
  --sp-6:   1.5rem;    /* 24px */
  --sp-8:   2rem;      /* 32px */
  --sp-10:  2.5rem;    /* 40px */
  --sp-12:  3rem;      /* 48px */
  --sp-16:  4rem;      /* 64px */
  --sp-20:  5rem;      /* 80px */
  --sp-24:  6rem;      /* 96px */
  --sp-32:  8rem;      /* 128px */

  /* ── Border Radius ── */
  --r-sm:   4px;
  --r-md:   8px;
  --r-lg:   16px;
  --r-xl:   24px;
  --r-2xl:  32px;
  --r-full: 9999px;

  /* ── Shadows ── */
  --shadow-sm:  0 2px 8px var(--clr-shadow);
  --shadow-md:  0 8px 24px var(--clr-shadow);
  --shadow-lg:  0 16px 48px rgba(139,69,19,.18);
  --shadow-xl:  0 32px 64px rgba(139,69,19,.22);
  --shadow-card: 0 4px 20px rgba(26,18,8,.08);

  /* ── Transitions ── */
  --ease-fast:  0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --ease-base:  0.3s  cubic-bezier(0.4, 0, 0.2, 1);
  --ease-slow:  0.6s  cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-spring: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ── Layout ── */
  --container-max: 1400px;
  --container-pad: clamp(1rem, 5vw, 4rem);
  --nav-height:    80px;
  --nav-height-sm: 64px;
}
```

### 4.2 Responsive Typography (`src/styles/_typography.scss`)
```scss
/* All font sizes use clamp() for fluid scaling */
h1 { font: 700 clamp(2.4rem, 5.5vw + 1rem, 5.5rem)/1.08 var(--font-display); letter-spacing: -0.02em; }
h2 { font: 600 clamp(1.8rem, 3.5vw + 0.5rem, 3.2rem)/1.18 var(--font-heading); }
h3 { font: 600 clamp(1.25rem, 2vw + 0.3rem, 2rem)/1.28 var(--font-heading); }
h4 { font: 500 clamp(1.05rem, 1.5vw, 1.5rem)/1.4 var(--font-body); }
p  { font: 400 clamp(0.9rem, 1.2vw + 0.1rem, 1.125rem)/1.75 var(--font-body); }

.label-text {
  font: 600 0.75rem/1 var(--font-body);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--clr-gold);
}

.display-xl {
  font: 700 clamp(3.5rem, 8vw + 1rem, 9rem)/0.95 var(--font-display);
  letter-spacing: -0.03em;
}
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 5 — ROUTING & APP SETUP
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 5.1 `App.jsx` — Full Router Setup
```jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';

import Navbar      from '@/components/common/Navbar';
import Footer      from '@/components/common/Footer';
import WhatsAppFAB from '@/components/common/WhatsAppFAB';
import Loader      from '@/components/common/Loader';
import ScrollToTop from '@/components/common/ScrollToTop';

// Code-split every page
const Home           = lazy(() => import('@/pages/Home'));
const Properties     = lazy(() => import('@/pages/Properties'));
const PropertySingle = lazy(() => import('@/pages/PropertySingle'));
const About          = lazy(() => import('@/pages/About'));
const Blog           = lazy(() => import('@/pages/Blog'));
const BlogPost       = lazy(() => import('@/pages/BlogPost'));
const Contact        = lazy(() => import('@/pages/Contact'));
const NotFound       = lazy(() => import('@/pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/"                 element={<Home />} />
        <Route path="/properties"       element={<Properties />} />
        <Route path="/properties/:id"   element={<PropertySingle />} />
        <Route path="/about"            element={<About />} />
        <Route path="/blog"             element={<Blog />} />
        <Route path="/blog/:slug"       element={<BlogPost />} />
        <Route path="/contact"          element={<Contact />} />
        <Route path="*"                 element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<Loader />}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFAB />
    </BrowserRouter>
  );
}
```

### 5.2 `vite.config.js` — Optimized Build
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_variables.scss" as *;
                         @use "@/styles/_mixins.scss" as *;`
      }
    }
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':  ['react', 'react-dom'],
          'router':        ['react-router-dom'],
          'motion':        ['framer-motion'],
          'swiper':        ['swiper'],
          'icons':         ['react-icons'],
        }
      }
    },
    chunkSizeWarningLimit: 800
  }
});
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 6 — PAGE-BY-PAGE SPECIFICATIONS
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

### 6.1 HOME PAGE (`/`)

#### ❶ HERO SECTION — `HeroSection.jsx`
**Layout:** Full viewport (`100dvh`), video background, dark overlay, centered content.

```jsx
// STRUCTURE:
// <section className="hero">
//   <video autoPlay muted loop playsInline preload="metadata">
//     <source src="/assets/videos/hero-ibadan.webm" type="video/webm" />
//     <source src="/assets/videos/hero-ibadan.mp4"  type="video/mp4" />
//   </video>
//   <div className="hero__overlay" />           {/* gradient overlay */}
//   <div className="hero__content">
//     <motion.span>IBADAN'S TRUSTED AGENCY</motion.span>
//     <motion.h1>Find Your<br/>Dream Home</motion.h1>
//     <motion.p>…subtitle…</motion.p>
//     <motion.div className="hero__cta">…buttons…</motion.div>
//   </div>
//   <SearchBar />                                {/* overlapping search widget */}
// </section>

// VIDEO CSS:
// video { position:absolute; inset:0; width:100%; height:100%;
//         object-fit:cover; z-index:0; }

// OVERLAY:
// background: linear-gradient(
//   160deg,
//   rgba(26,18,8,0.70) 0%,
//   rgba(92,46,14,0.45) 50%,
//   rgba(26,18,8,0.60) 100%
// );
```

**Framer Motion Animations:**
```jsx
// Headline: split by word, each word animates with stagger
const words = "Find Your Dream Home".split(" ");
const container = { hidden:{}, visible:{ transition:{ staggerChildren: 0.12 } } };
const wordVariant = {
  hidden:  { opacity:0, y: 60, rotateX: -20 },
  visible: { opacity:1, y:  0, rotateX:   0,
             transition: { duration:0.8, ease:[0.25,0.46,0.45,0.94] } }
};

// Tagline label slides in from left
// CTA buttons fade + scale up after headline completes
// SearchBar slides up from below with spring physics
```

**Hero Content Copy:**
- Label: `"IBADAN'S #1 TRUSTED REAL ESTATE AGENCY"`
- H1: `"Find Your Dream Home in Ibadan"`
- Subtext: `"Premium verified properties across Bodija, Jericho, GRA, Oluyole and beyond — trusted by over 500 Ibadan families since 2012"`
- CTA 1: `"Explore Properties"` → links to `/properties`
- CTA 2: `"Book Free Consultation"` → opens WhatsApp or `/contact`

**SearchBar Widget (floated at hero bottom):**
- Positioned: `position: absolute; bottom: -2.5rem; left: 50%; transform: translateX(-50%)`
- Raised card with shadow, overflows below hero section
- Fields:
  1. **Location** — `<select>`: Bodija | Jericho | Oluyole GRA | Agodi GRA | Iyaganku | Mokola | Ring Road | Challenge | Dugbe | Sango
  2. **Property Type** — `<select>`: Duplex | Bungalow | Terrace | Flat/Apartment | Land | Commercial | Self-Contain
  3. **Budget** — `<select>`: Under ₦5M | ₦5M–₦20M | ₦20M–₦50M | ₦50M–₦100M | ₦100M+
  4. **Search Button** — primary color, icon `<FiSearch />`

---

#### ❷ STATS COUNTER — `StatsCounter.jsx`
```jsx
// 4 animated count-up boxes arranged in a responsive row
const stats = [
  { end: 500, suffix: '+', label: 'Happy Families Housed' },
  { end: 12,  suffix: '+', label: 'Years in Ibadan Market' },
  { end: 200, suffix: '+', label: 'Properties Listed' },
  { end: 98,  suffix: '%', label: 'Client Satisfaction Rate' },
];

// useCounter hook:
// - Uses IntersectionObserver to detect when section is in view
// - Animates value from 0 → end over 2000ms using requestAnimationFrame
// - Easing: easeOutQuart = t => 1 - Math.pow(1 - t, 4)
// - Trigger once only (hasTriggered ref guard)
```

**Styling:**
- Dark mahogany background (`--clr-primary-dark`)
- Large number in Cormorant Garamond (`--font-display`), color: `--clr-gold`
- Label in DM Sans, cream color
- Vertical divider line between cards on desktop
- Cards stack 2×2 on tablet, 1×4 on mobile landscape, 2×2 on mobile portrait

---

#### ❸ FEATURED PROPERTIES CAROUSEL — `FeaturedProperties.jsx`
```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

<Swiper
  modules={[Navigation, Pagination, Autoplay, A11y]}
  spaceBetween={24}
  slidesPerView={1}
  centeredSlides={false}
  loop={true}
  autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
  navigation={{ nextEl: '.swiper-btn-next', prevEl: '.swiper-btn-prev' }}
  pagination={{ clickable: true, dynamicBullets: true }}
  a11y={{ prevSlideMessage: 'Previous property', nextSlideMessage: 'Next property' }}
  breakpoints={{
    480:  { slidesPerView: 1.2, spaceBetween: 16 },
    640:  { slidesPerView: 1.5, spaceBetween: 20 },
    768:  { slidesPerView: 2,   spaceBetween: 20 },
    1024: { slidesPerView: 2.5, spaceBetween: 24 },
    1280: { slidesPerView: 3,   spaceBetween: 24 },
    1536: { slidesPerView: 3.5, spaceBetween: 28 },
  }}
>
  {featuredProperties.map(p => (
    <SwiperSlide key={p.id}>
      <PropertyCard property={p} />
    </SwiperSlide>
  ))}
</Swiper>
```

---

#### ❹ WHY CHOOSE US — `WhyChooseUs.jsx`
3-column responsive grid. Each card:
- Large animated icon (React Icons, 48px, color: `--clr-gold`)
- Bold H3 heading
- Descriptive paragraph
- Framer Motion `whileHover={{ y: -8 }}` lift effect
- Left border accent that reveals on hover

Content:
1. **Local Market Expertise** — `<HiBuildingOffice2 />` — "12+ years navigating Ibadan's property landscape, from Bodija Estate to Agodi GRA"
2. **Verified Listings Only** — `<HiShieldCheck />` — "Every property is physically inspected and legally verified. No fake listings, no surprises"
3. **Dedicated Support** — `<HiChatBubbleLeftRight />` — "From first viewing to key handover, your dedicated agent is always reachable via call or WhatsApp"
4. **Fast Transactions** — `<HiRocketLaunch />` — "Our streamlined process closes deals faster — most sales complete within 30 days"

---

#### ❺ NEIGHBORHOOD SPOTLIGHT — `NeighborhoodSpotlight.jsx`
```jsx
const neighborhoods = [
  { name: 'Bodija',      desc: 'Ibadan's premium residential hub', avgPrice: '₦35M–₦120M', image: '/assets/images/neighborhoods/bodija.jpg' },
  { name: 'Jericho',     desc: 'Lush, serene, old-money prestige',  avgPrice: '₦40M–₦150M', image: '...' },
  { name: 'Oluyole GRA', desc: 'Modern estates, gated communities', avgPrice: '₦25M–₦90M',  image: '...' },
  { name: 'Agodi GRA',   desc: 'Heritage meets modern comfort',     avgPrice: '₦50M–₦200M', image: '...' },
  { name: 'Iyaganku',    desc: 'Central location, great value',     avgPrice: '₦20M–₦70M',  image: '...' },
  { name: 'Mokola',      desc: 'Vibrant urban lifestyle',           avgPrice: '₦15M–₦50M',  image: '...' },
  { name: 'Ring Road',   desc: 'Business district adjacency',       avgPrice: '₦18M–₦60M',  image: '...' },
  { name: 'Challenge',   desc: 'Growing community, great ROI',      avgPrice: '₦10M–₦40M',  image: '...' },
];

// Each card: full-bleed image background, gradient overlay bottom,
// neighborhood name (white, Playfair Display), avg price range, description
// On hover: scale image 1.08, reveal "Explore" button with arrow icon
// Swiper breakpoints: 1.3 / 2 / 3 / 4 slides per view
```

---

#### ❻ TESTIMONIALS — `Testimonials.jsx`
```jsx
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-cards';

// Effect: 'cards' for a stacked physical card feel
// OR use a custom 3-column layout on desktop and single slide on mobile

const testimonials = [
  { id: 1, name: 'Babatunde & Yetunde Okafor', location: 'Oluyole GRA', rating: 5,
    quote: 'IbadanRealty turned our dream of owning a home into reality. Our agent, Funmilayo, walked us through every step. We moved into our 4-bedroom duplex in just 6 weeks!',
    property: '4-Bedroom Duplex, Oluyole GRA', avatar: '/assets/images/testimonials/okafor.jpg' },
  { id: 2, name: 'Adebimpe Salawu', location: 'Bodija Estate', rating: 5, ... },
  { id: 3, name: 'Engr. Taiwo Adeleke', location: 'Agodi GRA', rating: 5, ... },
  { id: 4, name: 'Dr. Funmilayo Adeyemi', location: 'Jericho', rating: 5, ... },
  { id: 5, name: 'Oluwaseun & Amara Bello', location: 'Iyaganku', rating: 5, ... },
  { id: 6, name: 'Alhaja Rafiat Abiodun', location: 'Ring Road', rating: 5, ... },
];
```

---

#### ❼ BLOG PREVIEW — `BlogPreview.jsx`
3 article cards, responsive grid. Each card:
- Image thumbnail (blog topic illustration)
- Category badge (e.g., "Market Insights", "Legal Guide", "Lifestyle")
- Title (Playfair Display)
- Excerpt (2–3 lines, truncated)
- Author avatar + name + date
- "Read More →" link

Topics:
1. "Understanding Land Use Act: What Every Ibadan Property Buyer Must Know"
2. "Top 5 Neighborhoods to Invest in Ibadan Right Now (2025 Guide)"
3. "How to Verify a C of O and Survey Plan Before Buying Land in Oyo State"

---

#### ❽ CTA BANNER — `CTABanner.jsx`
```scss
// Full-width section with:
// - Background: blurred Nigerian home image + dark gradient overlay
// - OR: deep ochre/mahogany gradient with subtle pattern overlay
// - Centered content: H2 + subtext + 2 CTA buttons
// - Framer Motion: scale(0.95) → scale(1) + opacity on scroll

// Copy:
// H2: "Ready to Own Your Ibadan Home?"
// Sub: "Speak with our property experts today — no pressure, just results"
// CTA1: "Explore Listings" → /properties
// CTA2: "Call Us Now" → tel:+2348012345678
```

---

### 6.2 PROPERTIES PAGE (`/properties`)

#### Filter System
```jsx
// DESKTOP: Left sidebar (280px fixed width)
// TABLET:  Top horizontal filter bar
// MOBILE:  "Filter" button → full-screen bottom sheet modal (Framer Motion slide up)

const [filters, setFilters] = useState({
  location:   '',
  type:       '',
  status:     '',      // 'For Sale' | 'For Rent'
  minPrice:   0,
  maxPrice:   500000000,
  bedrooms:   '',
  bathrooms:  '',
});

const filteredProperties = useMemo(
  () => filterProperties(allProperties, filters),
  [filters, allProperties]
);
```

Filter Controls:
- Location: Multi-select checkboxes (8 Ibadan neighborhoods)
- Property Type: Checkbox group
- Status: Radio (For Sale / For Rent / Both)
- Price Range: Two `<input type="range">` sliders (min/max) synced with number inputs
- Bedrooms: Button group (Any / 1 / 2 / 3 / 4 / 5+)
- Bathrooms: Button group
- Reset button: clears all filters + scroll to top

#### Grid Layout
```jsx
// Grid/List view toggle stored in localStorage
// Responsive CSS Grid:
// 1 col (< 480px) → 2 col (> 600px) → 3 col (> 1024px) → 4 col (> 1400px)

// Animated entrance: wrap grid in motion.div, children stagger 0.08s each
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};
const item = {
  hidden:  { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y:  0, scale: 1,
             transition: { duration: 0.5, ease: 'easeOut' } }
};
```

Results bar: `"Showing 18 of 87 properties"` + Sort dropdown (Newest | Price: Low→High | Price: High→Low | Most Popular)

---

### 6.3 PROPERTY DETAIL PAGE (`/properties/:id`)

```
LAYOUT (desktop):
┌─────────────────────────────────────┬─────────────────────┐
│  IMAGE GALLERY (SwiperJS)           │  AGENT CONTACT CARD │
│  ─────────────────────────────────  │  (sticky on scroll) │
│  THUMBNAIL STRIP (Swiper Thumbs)    │                     │
├─────────────────────────────────────┤  Agent photo        │
│  PROPERTY HEADER                    │  Name & Phone       │
│  Price | Type | Status | Location   │  WhatsApp button    │
├─────────────────────────────────────┤  Call button        │
│  FEATURES GRID                      │  Enquiry form       │
│  Beds | Baths | sqm | Parking       │                     │
├─────────────────────────────────────┤                     │
│  DESCRIPTION (rich text)            │                     │
├─────────────────────────────────────┤                     │
│  AMENITIES (badge list)             │                     │
├─────────────────────────────────────┤                     │
│  MAP EMBED (Google Maps iframe)     │                     │
└─────────────────────────────────────┴─────────────────────┘
│  SIMILAR PROPERTIES (Swiper row)                         │
└──────────────────────────────────────────────────────────┘
```

**Gallery — Dual Swiper:**
```jsx
import { Thumbs, Zoom, Navigation } from 'swiper/modules';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

const [thumbsSwiper, setThumbsSwiper] = useState(null);

// Main gallery swiper
<Swiper
  modules={[Navigation, Thumbs, Zoom]}
  thumbs={{ swiper: thumbsSwiper }}
  zoom={{ maxRatio: 2 }}
  navigation
  loop
>
// Thumbnail strip swiper
<Swiper
  onSwiper={setThumbsSwiper}
  slidesPerView={5}
  watchSlidesProgress
  freeMode
>
```

---

### 6.4 ABOUT PAGE (`/about`)

**Sections:**
1. **Split Hero** — Headline + agent photo, Framer Motion slide-in from opposite sides
2. **Our Story** — narrative paragraph about founding in Ibadan, local roots
3. **Mission & Values** — 3-column icon cards
4. **Meet the Team** — 4-card grid with agent photos (Black Nigerian professionals), name, role, specialization, social links
5. **Milestones Timeline** — vertical animated timeline using Framer Motion `useInView`
   ```
   2012 → Founded in Ibadan
   2015 → 100th Property Sold
   2018 → NIESV Certified
   2020 → Expanded to Online Listings
   2023 → 500 Families Housed
   2025 → Launched New Platform
   ```
6. **Certifications** — Logo/badge strip: NIESV | REDAN | Oyo State Realtors Association

---

### 6.5 CONTACT PAGE (`/contact`)

```
LAYOUT:
┌─────────────────────────┬─────────────────────────┐
│  CONTACT FORM           │  CONTACT INFO + MAP     │
│                         │                         │
│  Full Name*             │  📍 Address             │
│  Email*                 │  📞 Phone               │
│  Phone (+234)*          │  📧 Email               │
│  Interest (dropdown)    │  🕐 Business Hours      │
│  Message*               │                         │
│                         │  [Google Maps iframe]   │
│  [Send Enquiry →]       │                         │
└─────────────────────────┴─────────────────────────┘
```

Form Validation Rules:
- Name: required, min 2 chars
- Email: required, valid email regex
- Phone: required, starts with `+234` or `0`, 11 digits
- Message: required, min 20 chars
- Show inline error messages below each field
- On success: show Lottie confetti animation + "Thank you! We'll reply within 24 hours"

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 7 — COMPONENT IMPLEMENTATIONS
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 7.1 Navbar — `Navbar.jsx`
```jsx
// BEHAVIOR:
// - position: fixed; top:0; z-index: 1000
// - Transparent with white text when scroll Y < 80px (over hero video)
// - Solid cream bg + primary-color text + shadow when scrolled ≥ 80px
// - useScrollPosition() hook: window.addEventListener('scroll', handler)
// - Mobile breakpoint (< 1024px): hamburger → slide-in right drawer
//   Drawer: full height, 80% width, cream background, Framer Motion x:'100%'→x:0

// LINKS: Home | Properties | About | Blog | Contact
// CTA button: "List Your Property" → /contact

// ACTIVE LINK: use NavLink isActive prop, add animated underline via CSS ::after

// LOGO: "Ìlé Wa" in Cormorant Garamond 28px + "REALTY" in DM Sans 10px tracking
//       Or use an SVG house logo mark

// Mobile drawer overlay: dark semi-transparent backdrop, click to close
// Hamburger: animated 3-bar → X morphing icon using Framer Motion
```

### 7.2 PropertyCard — `PropertyCard.jsx`
```jsx
// Props:
// { id, images, title, price, type, status, neighborhood,
//   bedrooms, bathrooms, sqm, parking, isFeatured, isNew }

// STRUCTURE:
// <motion.article whileHover={{ y:-8, boxShadow:'var(--shadow-xl)' }}
//                 transition={{ type:'spring', stiffness:300, damping:20 }}>
//   <div className="card__image-wrap">
//     <img src={images[0]} alt={title} loading="lazy" />
//     <span className="badge badge--status">{status}</span>   // "For Sale" / "For Rent"
//     {isNew && <span className="badge badge--new">New</span>}
//     <button className="card__fav" onClick={toggleFavorite}>
//       {isFaved ? <FaHeart /> : <FaRegHeart />}
//     </button>
//   </div>
//   <div className="card__body">
//     <div className="card__price">{formatPrice(price)}</div>
//     <h3 className="card__title">{title}</h3>
//     <p className="card__location"><FiMapPin /> {neighborhood}, Ibadan</p>
//     <div className="card__features">
//       <span><IoBedOutline /> {bedrooms} Beds</span>
//       <span><IoWaterOutline /> {bathrooms} Baths</span>
//       <span><BiArea /> {sqm}m²</span>
//       <span><RiParkingLine /> {parking}</span>
//     </div>
//     <Link to={`/properties/${id}`} className="card__cta">
//       View Details <FiArrowRight />
//     </Link>
//   </div>
// </motion.article>

// IMAGE HOVER: CSS transition transform: scale(1.06) on .card__image-wrap:hover img
// BADGE COLORS: For Sale → green bg | For Rent → gold bg | Sold → gray bg
```

### 7.3 WhatsApp FAB — `WhatsAppFAB.jsx`
```jsx
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '2348012345678';
const DEFAULT_MSG = encodeURIComponent(
  "Hello! I found your website and I'm interested in a property in Ibadan. Please can you assist me?"
);

export default function WhatsAppFAB() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
    >
      <FaWhatsapp size={30} />
      <span className="fab__label">Chat with Us</span>
      <span className="fab__pulse" aria-hidden="true" />
      <span className="fab__pulse fab__pulse--delay" aria-hidden="true" />
    </motion.a>
  );
}

// CSS:
// .whatsapp-fab { position:fixed; bottom:28px; right:24px; z-index:9999;
//   background:#25D366; color:#fff; border-radius:var(--r-full);
//   padding: 14px 20px 14px 16px; display:flex; align-items:center;
//   gap:8px; text-decoration:none; box-shadow: var(--shadow-lg); }
// .fab__label { font:600 0.85rem var(--font-body); white-space:nowrap; }
// .fab__pulse { position:absolute; inset:-4px; border-radius:inherit;
//   background:#25D366; opacity:0.4; animation: pulse 2.5s ease infinite; }
// .fab__pulse--delay { animation-delay: 0.8s; }
// @keyframes pulse { 0%,100%{transform:scale(1);opacity:.4}
//                    60%{transform:scale(1.35);opacity:0} }
// @media(max-width:480px){ .fab__label { display:none } // icon only on small phones
//   .whatsapp-fab { padding:16px; } }
```

### 7.4 SectionHeader — `SectionHeader.jsx`
```jsx
// Props: { label, title, subtitle, align='center' }
// Entrance: Framer Motion fadeUp on scroll using useInView

// STRUCTURE:
// <div className={`section-header section-header--${align}`}>
//   <span className="label-text">{label}</span>   // e.g. "FEATURED LISTINGS"
//   <div className="label-underline" />             // gold decorative bar
//   <h2>{title}</h2>
//   {subtitle && <p className="subtitle">{subtitle}</p>}
// </div>

// label-underline: width:40px; height:3px; background:var(--clr-gold);
//   margin: 8px auto 20px (when centered)
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 8 — FRAMER MOTION ANIMATION SYSTEM
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 8.1 Reusable Variants (`src/hooks/useScrollAnimation.js`)
```js
// PAGE TRANSITION
export const pageVariants = {
  initial:  { opacity: 0, y: 16 },
  animate:  { opacity: 1, y:  0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit:     { opacity: 0, y: -8, transition: { duration: 0.25 } }
};

// FADE UP (sections, cards)
export const fadeUp = {
  hidden:  { opacity: 0, y: 56 },
  visible: { opacity: 1, y:  0,
             transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

// FADE IN (simple opacity)
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

// STAGGER CONTAINER
export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

// SLIDE FROM LEFT
export const slideLeft = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x:   0, transition: { duration: 0.7, ease: 'easeOut' } }
};

// SLIDE FROM RIGHT
export const slideRight = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x:  0, transition: { duration: 0.7, ease: 'easeOut' } }
};

// SCALE UP
export const scaleUp = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1,
             transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }
};

// CUSTOM HOOK
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollReveal(threshold = 0.2) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: threshold });
  return [ref, isInView];
}
```

### 8.2 Wrap Each Page in PageWrapper
```jsx
// components/common/PageWrapper.jsx
import { motion } from 'framer-motion';
import { pageVariants } from '@/hooks/useScrollAnimation';

export default function PageWrapper({ children, className }) {
  return (
    <motion.div
      className={className}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
```

### 8.3 Animation Map — What Animates Where
| Component | Animation | Trigger |
|---|---|---|
| Hero H1 words | Split word stagger slideUp | On mount |
| Hero subtitle | FadeUp, delay 0.6s | On mount |
| Hero CTA buttons | FadeUp + spring scale, delay 0.9s | On mount |
| SearchBar widget | SlideUp spring from below | On mount, delay 1.1s |
| Stats numbers | Count 0→N easeOutQuart | IntersectionObserver |
| Section headers | FadeUp | Scroll into view |
| Property cards | Stagger fadeUp grid | Scroll into view |
| Neighborhood cards | Stagger slideLeft | Scroll into view |
| Why Choose Us cards | Stagger scaleUp | Scroll into view |
| About page left panel | SlideLeft | Scroll into view |
| About page right panel | SlideRight | Scroll into view |
| Timeline items | Alternating slideLeft/Right | Scroll into view each |
| CTA Banner | ScaleUp (0.95→1) + fade | Scroll into view |
| Navbar background | CSS transition on scroll | JS scroll listener |
| Mobile drawer | x:'100%'→x:0 spring | State toggle |
| WhatsApp FAB | Scale spring entrance, delay 2s | On mount |
| Form success | ScaleUp + confetti Lottie | On form submit |

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 9 — RESPONSIVE DESIGN SYSTEM
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 9.1 SCSS Breakpoint Mixin (`src/styles/_mixins.scss`)
```scss
// Mobile-first breakpoints
$bp: (
  'xs':   320px,    // iPhone SE, budget Android
  'sm':   480px,    // Large phones portrait
  'md':   768px,    // Tablet portrait / phone landscape
  'lg':   1024px,   // Tablet landscape / small laptop
  'xl':   1280px,   // Standard desktop
  '2xl':  1536px,   // Large desktop
  '4k':   2560px,   // Ultra-wide / 4K monitors
);

@mixin up($key) {
  @media screen and (min-width: map-get($bp, $key)) { @content; }
}
@mixin down($key) {
  @media screen and (max-width: #{map-get($bp, $key) - 1}) { @content; }
}
@mixin between($lower, $upper) {
  @media screen and (min-width: map-get($bp, $lower))
                 and (max-width: #{map-get($bp, $upper) - 1}) { @content; }
}
@mixin landscape {
  @media screen and (orientation: landscape) { @content; }
}
@mixin portrait {
  @media screen and (orientation: portrait) { @content; }
}
@mixin touch {
  @media (hover: none) and (pointer: coarse) { @content; }
}
@mixin retina {
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { @content; }
}
```

### 9.2 Device Matrix & Layout Behavior

| Device | Viewport | Orientation | Nav | Grid | Swiper | Sidebar |
|---|---|---|---|---|---|---|
| iPhone SE / Budget Android | 320px | Portrait | Hamburger | 1 col | 1.1 slides | Bottom sheet |
| iPhone 14 / Pixel 8 | 390px | Portrait | Hamburger | 1 col | 1.2 slides | Bottom sheet |
| Large Phone | 428px | Portrait | Hamburger | 1 col | 1.4 slides | Bottom sheet |
| Phone Landscape | 568–896px | Landscape | Hamburger | 2 col | 2 slides | Bottom sheet |
| iPad Mini | 768px | Portrait | Hamburger | 2 col | 2 slides | Top filter bar |
| iPad Air / Pro | 820–1024px | Portrait | Full nav | 2 col | 2.5 slides | Top filter bar |
| iPad Landscape | 1024–1180px | Landscape | Full nav | 3 col | 3 slides | Collapsible side |
| MacBook Air | 1280px | Landscape | Full nav | 3 col | 3 slides | Fixed sidebar |
| Standard Desktop | 1440px | Landscape | Full nav | 3 col | 3.5 slides | Fixed sidebar |
| Large Desktop / 4K | 1920px+ | Landscape | Full nav | 4 col | 4 slides | Fixed sidebar |

### 9.3 Critical Landscape Phone Fixes
```scss
// Short landscape viewports (phones rotated)
@media screen and (orientation: landscape) and (max-height: 500px) {
  .hero {
    min-height: 100dvh;
    padding-block: var(--sp-8);
  }
  .hero__content {
    padding-top: var(--nav-height-sm);
  }
  h1 {
    font-size: clamp(1.6rem, 5vw, 2.8rem);
  }
  .hero__search {
    position: static;
    transform: none;
    margin-top: var(--sp-6);
  }
  .navbar {
    height: var(--nav-height-sm); // 64px
  }
  .stats-grid {
    grid-template-columns: repeat(4, 1fr); // force 4-col on landscape phone
  }
}
```

### 9.4 Container System
```scss
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-pad);
}
.container--narrow  { max-width: 900px;  }
.container--wide    { max-width: 1600px; }

// Section vertical spacing
.section {
  padding-block: clamp(3rem, 7vw, 7rem);
}
.section--sm {
  padding-block: clamp(2rem, 4vw, 4rem);
}
```

### 9.5 Touch UX Requirements
```css
/* Minimum touch target for all interactive elements */
button, a, input, select, [role="button"] {
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;
}

/* Remove tap highlight on mobile */
* { -webkit-tap-highlight-color: transparent; }

/* Prevent body scroll when mobile menu is open */
body.menu-open { overflow: hidden; }

/* Swipe-friendly modals */
.filter-modal { overscroll-behavior: contain; }
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 10 — LOCAL ASSET GENERATION PROMPTS
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the following prompts in **Midjourney v6**, **Adobe Firefly**, **Ideogram 2.0**, or **DALL-E 3**.

### 10.1 Hero & Background Images

```
PROMPT A — Hero cinematic:
"Cinematic aerial drone photograph of a lush residential neighborhood in 
Ibadan Nigeria at golden hour, beautiful detached bungalows and duplexes 
with terracotta orange roof tiles, cream-painted walls, tropical palm trees, 
hibiscus gardens, warm amber sky, neighborhood streets, ultra-HD, 
no text, wide aspect ratio 16:9"

PROMPT B — Hero alternative (family):
"Happy Black Nigerian family — father, mother, teenage son, young daughter — 
standing at the front gate of a stunning newly built 4-bedroom duplex house 
in Nigeria, all smiling holding house keys, tropical garden, lush grass, 
terracotta gate, warm natural sunlight, photorealistic, authentic Nigerian 
home setting, no watermark"
```

### 10.2 Property Exterior Photos

```
PROMPT C — Luxury duplex:
"Modern Nigerian 4-bedroom detached duplex house, cream painted walls, 
dark terracotta roof tiles, arched windows, double garage, beautifully 
landscaped compound with tropical plants, paved interlocking driveway, 
security gate, clear blue sky background, real estate photography, 
wide-angle lens, sharp focus, golden hour lighting, no people"

PROMPT D — Comfortable bungalow:
"Traditional yet modern 3-bedroom bungalow in Nigeria, cream exterior, 
corrugated iron or tile roof, covered veranda with decorative railings, 
well-kept garden with flowering plants, concrete compound, residential 
street behind, warm sunny day, photorealistic real estate photography"

PROMPT E — Terrace houses:
"Row of 3 modern terrace houses in Nigeria, uniform cream and brown finish, 
small private gardens, iron security gate per unit, contemporary Nigerian 
architectural style, mid-range residential estate, clear sunny day, 
real estate photography, no people, front elevation view"
```

### 10.3 Interior Photography

```
PROMPT F — Living room:
"Luxurious Nigerian home living room, open-plan layout, cream sectional sofa 
with gold-trim cushions, warm wood flooring, African abstract art pieces on 
walls, large potted tropical plants, statement chandelier, sheer curtains with 
natural light, coffee table with decorative Yoruba cultural objects, 
photorealistic interior photography, no people"

PROMPT G — Master bedroom:
"Master bedroom of a Nigerian luxury home, king-size bed with warm earth-tone 
bedding, wood paneled headboard, high ceilings with POP cornice design, 
built-in wardrobe, bedside lights, soft morning light through curtains, 
warm color palette, photorealistic interior photography"

PROMPT H — Modern kitchen:
"Modern Nigerian home kitchen, dark granite countertops, white cabinets, 
stainless steel appliances, decorative tile backsplash, pendant lights, 
bar stools, open to dining area, warm lighting, photorealistic, no people"
```

### 10.4 Lifestyle & Testimonial Photos

```
PROMPT I — Key handover moment:
"Joyful Black Nigerian couple in their 30s receiving front door keys from a 
Nigerian real estate agent, standing at the entrance of their new modern 
Nigerian home, bright sunny day, all three people smiling and happy, 
authentic professional photography, warm colors, no overlay text"

PROMPT J — Real estate agent (female):
"Professional headshot of a confident Nigerian woman in her 30s, real estate 
agent, wearing elegant professional blazer in earth tones, warm smile, 
natural light studio backdrop, corporate photography, beautiful Yoruba woman, 
clear skin, modern office background softly blurred"

PROMPT K — Real estate agent (male):
"Professional headshot of a confident Nigerian man in his 40s, real estate 
agent, well-dressed in a suit, warm approachable smile, natural light, 
corporate photography, Ibadan Nigeria office setting blurred in background"

PROMPT L — Family house viewing:
"Black Nigerian family — husband, wife, and two children — touring a newly 
built Nigerian home with a female real estate agent, all looking excited, 
standing in a spacious Nigerian living room, sunlight coming through large 
windows, photorealistic, authentic, warm color palette"
```

### 10.5 Neighborhood Aerial Photos

```
PROMPT M — Bodija Estate:
"Aerial drone photograph of Bodija Estate residential area Ibadan Nigeria, 
leafy tree-lined streets, detached houses with varied rooflines and compounds, 
lush tropical green vegetation, morning light, birds-eye view, cinematic"

PROMPT N — GRA (Government Reserved Area):
"Aerial view of Government Reserved Area (GRA) Ibadan Nigeria, wide 
well-paved roads, large residential compounds, mature trees forming canopy, 
luxury homes, peaceful upscale neighborhood, drone photography, golden hour"
```

### 10.6 Video Generation Prompts (Runway ML / Pika / Sora)

```
VIDEO PROMPT 1 — Hero background (loopable):
"Smooth slow cinematic drone shot gliding at low altitude over a lush 
Nigerian residential neighborhood at golden hour sunset, beautiful detached 
houses below, palm trees and tropical vegetation, warm amber and orange sky, 
no people visible, perfect seamless loop, 10–15 seconds, 4K quality, 
warm color grade, no music"

VIDEO PROMPT 2 — Key handover celebration:
"Short cinematic clip of a smiling Black Nigerian family receiving house keys 
from their real estate agent at the front door of their new Nigerian home, 
they hug and celebrate, children jump excitedly, warm golden afternoon light, 
handheld documentary feel, 8–10 seconds"

VIDEO PROMPT 3 — Property walkthrough:
"First-person POV walkthrough of a beautifully furnished modern Nigerian 
4-bedroom duplex, starting from the compound gate, through the front door, 
into the open-plan living room, through the kitchen, slow smooth gimbal 
movement, warm interior lighting, 15 seconds"
```

### 10.7 Animation Assets (LottieFiles.com Search Terms)

```
Search these terms on lottiefiles.com and download the .json files:

1. "house building construction" → loading screen animation
2. "location map pin" → map section entrance
3. "confetti celebration party" → form success state
4. "scroll down arrow bouncing" → hero scroll indicator
5. "search house home" → property search widget
6. "handshake deal success" → about page / CTA
7. "star rating gold" → testimonials star rating
8. "phone call ring" → contact section

Implementation:
npm install @lottiefiles/react-lottie-player
import { Player } from '@lottiefiles/react-lottie-player';
<Player autoplay loop src="/assets/animations/house-build.json" style={{height:'200px'}} />
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 11 — DATA MODELS
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 11.1 Property Object (`src/data/properties.js`)
```js
export const properties = [
  {
    id:           'prop-001',
    title:        '4-Bedroom Detached Duplex',
    slug:         '4-bedroom-duplex-bodija-estate',
    type:         'Duplex',        // Duplex|Bungalow|Flat|Terrace|Land|Commercial
    status:       'For Sale',      // For Sale|For Rent|Sold|Rented
    price:        85_000_000,      // in Naira (no commas in JS)
    priceType:    'fixed',         // fixed | negotiable | on-request
    location: {
      neighborhood: 'Bodija',
      area:         'Bodija Estate Phase 2',
      city:         'Ibadan',
      state:        'Oyo',
      lga:          'Ibadan North',
      landmark:     'Near UI Teaching Hospital',
      coordinates:  { lat: 7.3986, lng: 3.9070 }
    },
    features: {
      bedrooms:   4,
      bathrooms:  3,
      toilets:    4,
      sqm:        320,
      parking:    2,
      floors:     2,
      yearBuilt:  2023,
    },
    amenities: [
      'Standby Generator', 'Borehole & Water Treatment', 'Boys Quarters',
      'CCTV System', 'POP Ceiling', 'Tiled Floors', 'Wardrobe in All Rooms',
      'Fitted Kitchen', 'Security Post', 'Perimeter Fence'
    ],
    legalDocs:    ['C of O', 'Survey Plan', 'Building Approval'],
    images:       [
      '/assets/images/properties/prop-001-ext-1.jpg',
      '/assets/images/properties/prop-001-ext-2.jpg',
      '/assets/images/properties/prop-001-living.jpg',
      '/assets/images/properties/prop-001-master.jpg',
      '/assets/images/properties/prop-001-kitchen.jpg',
    ],
    video:        '/assets/videos/properties/prop-001-tour.mp4',
    description:  `This stunning 4-bedroom duplex sits in the heart of 
                   Bodija Estate Phase 2, one of Ibadan's most coveted 
                   addresses...`,
    isFeatured:   true,
    isNew:        false,
    agent: {
      name:   'Funmilayo Adeyemi',
      phone:  '+2348012345678',
      email:  'funmilayo@ibadanrealty.com',
      photo:  '/assets/images/team/funmilayo.jpg',
    },
    dateAdded:    '2025-01-15',
    views:        342,
    virtualTour:  null,
  },
  // ... 19 more property objects
];
```

### 11.2 Sample Properties Dataset (Ibadan-specific)
```js
// Create at least these 20 property entries covering:
// ─ 4-bed duplex, Bodija Estate, For Sale, ₦85M
// ─ 3-bed bungalow, Oluyole GRA, For Sale, ₦45M
// ─ 2-bed flat, Iyaganku, For Rent, ₦600K/yr
// ─ 5-bed mansion, Jericho, For Sale, ₦180M
// ─ Commercial shop space, Ring Road, For Rent, ₦800K/yr
// ─ Land (500sqm), Agodi GRA, For Sale, ₦22M
// ─ 3-bed terrace, Challenge, For Sale, ₦28M
// ─ Self-contain, Mokola, For Rent, ₦300K/yr
// ─ 4-bed semi-detached, Sango, For Sale, ₦55M
// ─ 6-bed mansion, Bodija Estate, For Sale, ₦250M
// (and 10 more diverse listings)
```

### 11.3 Testimonials (`src/data/testimonials.js`)
```js
export const testimonials = [
  {
    id: 1,
    name: 'Babatunde & Yetunde Okafor',
    avatar: '/assets/images/testimonials/okafor.jpg',
    location: 'Oluyole GRA, Ibadan',
    rating: 5,
    quote: 'IbadanRealty made what felt like an impossible dream come true. Our agent walked us through every document, every site visit, and never gave up on finding us the perfect home. We are so grateful.',
    property: '3-Bedroom Bungalow, Oluyole GRA',
    date: 'November 2024'
  },
  { id: 2, name: 'Adebimpe Salawu',        location: 'Bodija Estate', ... },
  { id: 3, name: 'Engr. Taiwo Adeleke',    location: 'Agodi GRA', ... },
  { id: 4, name: 'Dr. Funmilayo Adeyemi',  location: 'Jericho', ... },
  { id: 5, name: 'Oluwaseun & Amara Bello',location: 'Iyaganku', ... },
  { id: 6, name: 'Alhaja Rafiat Abiodun',  location: 'Ring Road', ... },
  { id: 7, name: 'Chukwuemeka Okafor',     location: 'Sango', ... },
  { id: 8, name: 'Aisha & Musa Lawal',     location: 'Bodija', ... },
];
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 12 — UTILITY FUNCTIONS
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 12.1 `formatPrice.js`
```js
export const formatPrice = (amount, currency = '₦') => {
  if (!amount) return 'Price on Request';
  if (amount >= 1_000_000_000)
    return `${currency}${(amount / 1_000_000_000).toFixed(1)}B`;
  if (amount >= 1_000_000)
    return `${currency}${(amount / 1_000_000).toFixed(1)}M`;
  if (amount >= 1_000)
    return `${currency}${(amount / 1_000).toFixed(0)}K`;
  return `${currency}${amount.toLocaleString('en-NG')}`;
};
// ₦85,000,000  →  "₦85.0M"
// ₦1,200,000,000 → "₦1.2B"
// ₦600,000     →  "₦600K"
```

### 12.2 `filterProperties.js`
```js
export const filterProperties = (properties, filters) => {
  return properties.filter(p => {
    if (filters.location  && p.location.neighborhood !== filters.location) return false;
    if (filters.type      && p.type !== filters.type)                     return false;
    if (filters.status    && p.status !== filters.status)                 return false;
    if (filters.minPrice  && p.price < filters.minPrice)                  return false;
    if (filters.maxPrice  && p.price > filters.maxPrice)                  return false;
    if (filters.bedrooms  && p.features.bedrooms < Number(filters.bedrooms)) return false;
    if (filters.bathrooms && p.features.bathrooms < Number(filters.bathrooms)) return false;
    return true;
  });
};

export const sortProperties = (properties, sortBy) => {
  const arr = [...properties];
  switch (sortBy) {
    case 'price-asc':  return arr.sort((a, b) => a.price - b.price);
    case 'price-desc': return arr.sort((a, b) => b.price - a.price);
    case 'newest':     return arr.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    case 'popular':    return arr.sort((a, b) => b.views - a.views);
    default:           return arr;
  }
};
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 13 — SEO, PERFORMANCE & ACCESSIBILITY
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 13.1 SEO Meta Tags (react-helmet-async)
```jsx
// Each page wraps content in <HelmetProvider> + <Helmet>
// Install: npm install react-helmet-async

// Home page:
<Helmet>
  <title>IbadanRealty — Buy, Sell & Rent Properties in Ibadan, Nigeria</title>
  <meta name="description"
    content="Find verified duplexes, bungalows, flats and land in Bodija, Jericho, GRA, Oluyole and across Ibadan. Trusted by 500+ families. Call us today." />
  <meta property="og:title" content="IbadanRealty — Ibadan's Trusted Property Agency" />
  <meta property="og:description" content="Premium real estate in Ibadan, Nigeria" />
  <meta property="og:image" content="/assets/images/og-image.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.ibadanrealty.com" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://www.ibadanrealty.com" />
</Helmet>
```

### 13.2 Performance Targets
| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total Blocking Time (TBT) | < 200ms |
| Initial JS Bundle (gzip) | < 200KB |

### 13.3 Performance Techniques
```jsx
// 1. Code split every route with React.lazy()
// 2. Use loading="lazy" on every <img> below the fold
// 3. Serve hero video as WebM + MP4, preload="metadata"
// 4. Pause hero video when tab not visible:
useEffect(() => {
  const video = videoRef.current;
  const handleVisibility = () => {
    document.hidden ? video.pause() : video.play();
  };
  document.addEventListener('visibilitychange', handleVisibility);
  return () => document.removeEventListener('visibilitychange', handleVisibility);
}, []);

// 5. Compress images: WebP format, max 200KB per image
// 6. Font preconnect in index.html (already shown in Section 2.3)
// 7. Respect prefers-reduced-motion:
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Pass to Framer: transition: prefersReduced ? { duration: 0.01 } : normalTransition

// 8. Virtual scroll / pagination for property grid (not infinite)
```

### 13.4 Accessibility Checklist
- All `<img>` elements have descriptive `alt` attributes
- Semantic HTML throughout: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`
- Color contrast ratio ≥ 4.5:1 for all body text
- Focus-visible outlines on all interactive elements (`:focus-visible`)
- ARIA labels on all icon-only buttons (`aria-label="View property"`)
- `aria-live="polite"` on filter results count
- Swiper has `a11y` module enabled
- Skip-to-content link at top: `<a href="#main" className="skip-link">Skip to content</a>`
- Form inputs all have associated `<label>` elements (or aria-label)
- Modal dialogs trap focus with `aria-modal="true"` and `role="dialog"`
- Don't use color alone to convey information (use icons + color)

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 14 — LOCALLY AUTHENTIC COPY GUIDE
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 14.1 Brand Voice
- **Warm and personal** — "We're from Ibadan, just like you"
- **Knowledgeable** — references to specific Ibadan streets, LGAs, markets
- **Trustworthy** — emphasize document verification, physical inspections
- **Aspirational** — tie homeownership to legacy, family, dignity

### 14.2 Nigerian-Specific Copy Examples

**Hero:**
> "Find Your Dream Home in Ibadan"
> "From Bodija Estate to Jericho — Ibadan's Most Trusted Property Agency"
> "Verified Properties. Honest Prices. Real Ibadan Experts."

**About:**
> "We were born in Ibadan. We grew up on these streets. We know the difference between a C of O and a Governor's Consent, between a genuine survey plan and a doctored one. When you work with us, you're not working with a call centre — you're working with your neighbour."

**CTA:**
> "Ready to Own Your Own Ibadan Home? Let's Make It Happen."
> "Stop Paying Rent. Start Building Equity. Call Us Today."
> "Schedule a Free Site Visit — No Pressure, Just Properties."

**Property Descriptions (use local landmarks):**
> "This 4-bedroom duplex is a 5-minute drive from the University of Ibadan main gate, close to Bodija Market, and walking distance from Bodija International Market…"
> "Located in the serene and secured Oluyole Estate, just off the Lagos-Ibadan Expressway, this bungalow offers peace and accessibility in equal measure…"

### 14.3 Yoruba Cultural Touches
- Section header labels in Yoruba (with English): `"ÌLÉ WA — OUR PROPERTIES"`
- Footer tagline: `"Ìlé Ni Ìtùnú Ọkàn"` — *"Home is the heart's rest"* (Yoruba proverb)
- Agent greetings in WhatsApp pre-fill: `"E kaaro! I found your website…"`
- Celebration copy: `"Àṣeyọrí! Congratulations on your new home!"`

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 15 — DEPLOYMENT & ENVIRONMENT
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 15.1 Environment Variables (`.env`)
```bash
VITE_APP_NAME=IbadanRealty
VITE_GOOGLE_MAPS_API_KEY=AIzaSy...
VITE_WHATSAPP_NUMBER=2348012345678
VITE_AGENT_EMAIL=hello@ibadanrealty.com
VITE_AGENT_PHONE=+2348012345678
VITE_SITE_URL=https://www.ibadanrealty.com
```

### 15.2 Build & Deploy
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (recommended)
npm i -g vercel
vercel

# Deploy to Netlify
npm run build
# Upload /dist folder to Netlify dashboard
# OR: netlify deploy --prod --dir=dist

# Add _redirects file to /public for Netlify SPA routing:
echo "/* /index.html 200" > public/_redirects

# For Vercel SPA routing, create vercel.json:
echo '{"rewrites":[{"source":"/(.*)", "destination":"/index.html"}]}' > vercel.json
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 16 — PRE-LAUNCH QUALITY CHECKLIST
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Functionality
- [ ] All 7 routes load without errors
- [ ] React Router navigation works — no full page reload on link click
- [ ] ScrollToTop fires on every route change
- [ ] Property filter produces correct results in real-time
- [ ] Property detail page loads correct data from `:id` param
- [ ] SwiperJS carousels work on touch (swipe) and mouse (drag)
- [ ] SwiperJS navigation arrows and pagination bullets functional
- [ ] Contact form validates all fields and shows error/success states
- [ ] WhatsApp FAB opens `wa.me` link in new tab with pre-filled message
- [ ] Framer Motion page transitions run on route change

### Responsive / Device Testing
- [ ] 320px – iPhone SE portrait: layout intact, no overflow
- [ ] 375px – iPhone 14 portrait: correct
- [ ] 568px – iPhone landscape: hero not cropped, 2-col grid
- [ ] 768px – iPad portrait: filter bar, 2-col grid
- [ ] 1024px – iPad landscape: 3-col grid, full nav
- [ ] 1280px – desktop: full layout
- [ ] 1920px – large desktop: max-width container centered
- [ ] 2560px – 4K: no layout breaking

### Performance
- [ ] Lighthouse Performance ≥ 90 on mobile
- [ ] No images above 250KB
- [ ] Hero video is muted, playsInline, preload="metadata"
- [ ] All routes are lazy-loaded with Suspense fallback
- [ ] No console errors or warnings in production build

### Accessibility
- [ ] All images have alt text
- [ ] Form labels are connected to inputs
- [ ] Keyboard navigation works across all interactive elements
- [ ] Color contrast passes WCAG AA (4.5:1 minimum)
- [ ] `prefers-reduced-motion` is respected in animations

### SEO
- [ ] Unique `<title>` and `<meta name="description">` on every page
- [ ] OG image set (1200×630px, property photo or logo)
- [ ] `<link rel="canonical">` on each page
- [ ] 404 page styled and working with home navigation link
- [ ] `robots.txt` and `sitemap.xml` generated

---

*Master Prompt Document v2.0 — IbadanRealty Website*
*Ibadan, Oyo State, Nigeria · React + Vite + Framer Motion + SwiperJS*
