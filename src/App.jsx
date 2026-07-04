import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import WhatsAppFAB from '@/components/common/WhatsAppFAB';
import Loader from '@/components/common/Loader';
import ScrollToTop from '@/components/common/ScrollToTop';

// Code-split every page
const Home = lazy(() => import('@/pages/Home'));
const Properties = lazy(() => import('@/pages/Properties'));
const PropertySingle = lazy(() => import('@/pages/PropertySingle'));
const About = lazy(() => import('@/pages/About'));
const Agents = lazy(() => import('@/pages/Agents'));
const Testimonials = lazy(() => import('@/pages/Testimonials'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertySingle />} />
        <Route path="/about" element={<About />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
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
