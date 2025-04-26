import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden min-h-screen flex items-center">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" 
        style={{ width: '65%' }}
      />
      
      <div className="container max-w-7xl mx-50 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:gap-12 lg:gap-16">
          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pr-4">
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
              Monitor Customer Sentiment
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
              Across All Platforms
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              GrowEasy Analytics helps franchise owners track Google, Instagram, Play Store, and App Store reviews in one dashboard. Leverage AI-driven sentiment analysis to boost customer satisfaction.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-gradient-to-r from-black to-gray-500 text-white px-6 py-3 rounded-full font-semibold hover:from-gray-800 hover:to-gray-600 transition shadow-md"
            >
              Get Started
            </Link>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
              <Image 
                src="/ghero.jpg" 
                alt="Analytics Dashboard Preview" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 