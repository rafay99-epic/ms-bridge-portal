
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PrivacySection from '@/components/sections/PrivacySection';
import TermsSection from '@/components/sections/TermsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Set document title
  useEffect(() => {
    document.title = 'MS Bridge - Android Application';
  }, []);

  return (
    <div className="min-h-screen bg-ms-accent-dark text-ms-text-light">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <PrivacySection />
        <TermsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
