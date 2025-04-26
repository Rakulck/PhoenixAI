import React from 'react';
import Image from 'next/image';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Why Choose PhoenixAI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mx-auto mb-4 w-80 h-[500px] relative">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Unified Dashboard"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-4xl font-semibold text-gray-900 mb-3">Unified Dashboard</h3>
            <p className="text-gray-600 text-lg">
              Monitor reviews from Google, Instagram, Play Store, and App Store in a single, intuitive dashboard tailored for multi-branch businesses.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="mx-auto mb-4 w-80 h-[500px] relative">
              <Image
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="AI Sentiment Analysis"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-4xl font-semibold text-gray-900 mb-3">AI-Powered Insights</h3>
            <p className="text-gray-600 text-lg">
              Our AI analyzes customer sentiment, identifying trends and actionable insights to improve service and customer loyalty.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mx-auto mb-4 w-80 h-[500px] relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Multi-Branch Support"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-4xl font-semibold text-gray-900 mb-3">Franchise-Friendly</h3>
            <p className="text-gray-600 text-lg">
              Easily manage multiple locations with branch-specific analytics and centralized reporting for franchise owners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 