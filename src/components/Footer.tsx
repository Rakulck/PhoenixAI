import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PhoenixAI</h3>
            <p className="text-gray-400">
              Empowering franchise businesses with AI-driven customer sentiment analysis and unified review monitoring.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@phoenixai.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 