import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 h-24 left-0 w-full bg-black text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-center items-center h-full">
          <div className="flex-shrink-0 mr-16">
            <Link href="/" className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-400 transition-all duration-300">
              PhoenixAI
            </Link>
          </div>
          <div className="hidden md:flex space-x-14 justify-center">
            <Link href="#features" className="text-2xl font-semibold hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400 py-1">Features</Link>
            <Link href="#testimonials" className="text-2xl font-semibold hover:text-purple-400 transition-all duration-300 border-b-2 border-transparent hover:border-purple-400 py-1">Testimonials</Link>
            <Link href="#contact" className="text-2xl font-semibold hover:text-pink-400 transition-all duration-300 border-b-2 border-transparent hover:border-pink-400 py-1">Contact</Link>
          </div>
          <div className="md:hidden absolute right-4">
            <button className="focus:outline-none">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 