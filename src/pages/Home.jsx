import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../components/Hero/Hero';
import QuickActions from '../components/QuickActions/QuickActions';
import About from '../components/About/About';
import Journey from '../components/Journey/Journey';
import Stats from '../components/Stats/Stats';
import Departments from '../components/Departments/Departments';
import DoctorsPreview from '../components/DoctorsPreview/DoctorsPreview';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import Facilities from '../components/Facilities/Facilities';
import NursingCare from '../components/NursingCare/NursingCare';
import CareBeyondTreatment from '../components/CareBeyondTreatment/CareBeyondTreatment';
import Insurance from '../components/Insurance/Insurance';
import NABH from '../components/NABH/NABH';
import AwarenessPreview from '../components/AwarenessPreview/AwarenessPreview';
import GalleryPreview from '../components/GalleryPreview/GalleryPreview';
import PackagesPreview from '../components/PackagesPreview/PackagesPreview';
import CTA from '../components/CTA/CTA';
import Contact from '../components/Contact/Contact';
import Donate from '../components/Donate/Donate';

export default function Home() {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
      }
    }
  }, [state]);

  return (
    <>
      <Hero />
      <QuickActions />
      <About />
      <Journey />
      <Stats />
      <Departments />
      <DoctorsPreview />
      <WhyChoose />
      <Facilities />
      <NursingCare />
      <CareBeyondTreatment />
      <Insurance />
      <NABH />
      <AwarenessPreview />
      <GalleryPreview />
      <PackagesPreview />
      <CTA />
      <Contact />
      <Donate />
    </>
  );
}
