import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-600 italic mb-4">
              "GrowEasy Analytics transformed how we manage customer feedback across our 10 locations. The AI insights are a game-changer!"
            </p>
            <p className="text-gray-900 font-semibold">Jane Doe, Franchise Owner</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-600 italic mb-4">
              "The unified dashboard saves us hours every week. We can now focus on improving customer experience instead of chasing reviews."
            </p>
            <p className="text-gray-900 font-semibold">John Smith, Operations Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 