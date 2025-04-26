import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';

import ContactSection from './ContactSection';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home; 