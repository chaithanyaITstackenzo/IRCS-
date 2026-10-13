import { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/common/LoadingScreen';
import BackToTop from './components/common/BackToTop';
import SectionFallback from './components/common/SectionFallback';
import StructuredData from './components/common/StructuredData';

import Home from './pages/Home';
const DoctorsDirectory = lazy(() => import('./pages/DoctorsDirectory'));
const DoctorDetail = lazy(() => import('./pages/DoctorDetail'));
const DepartmentDetail = lazy(() => import('./pages/DepartmentDetail'));
const AwarenessList = lazy(() => import('./pages/AwarenessList'));
const AwarenessDetail = lazy(() => import('./pages/AwarenessDetail'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (!state?.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, state]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 50 });
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <StructuredData />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <LoadingScreen loading={loading} />
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<SectionFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<DoctorsDirectory />} />
            <Route path="/doctors/:id" element={<DoctorDetail />} />
            <Route path="/departments/:slug" element={<DepartmentDetail />} />
            <Route path="/awareness" element={<AwarenessList />} />
            <Route path="/awareness/:slug" element={<AwarenessDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
