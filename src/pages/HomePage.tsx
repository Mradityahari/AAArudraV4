import React from 'react';
import HeroSection from '../components/home/HeroSection';
import KPICounters from '../components/home/KPICounters';
import ROICalculator from '../components/home/ROICalculator';
import ProductFinder from '../components/home/ProductFinder';
import IndustriesCarousel from '../components/home/IndustriesCarousel';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CaseStudyHighlights from '../components/home/CaseStudyHighlights';
import NewsletterSignup from '../components/home/NewsletterSignup';

const HomePage = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <KPICounters />
      <IndustriesCarousel />
      <ProductFinder />
      <ROICalculator />
      <CaseStudyHighlights />
      <TestimonialsSection />
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;