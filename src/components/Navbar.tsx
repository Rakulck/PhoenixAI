import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 h-20 left-0 w-full bg-black text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-center items-center h-full">
          <div className="flex-shrink-0 mr-10">
            <Link href="/" className="text-4xl font-extrabold">
              GrowEasy Analytics
            </Link>
          </div>
          <div className="hidden md:flex space-x-10 justify-center">
            <Link href="#features" className="text-xl font-semibold hover:text-gray-200 transition">Features</Link>
            <Link href="#testimonials" className="text-xl font-semibold hover:text-gray-200 transition">Testimonials</Link>
            <Link href="#contact" className="text-xl font-semibold hover:text-gray-200 transition">Contact</Link>
            {/* <Link href="/login" className="bg-white text-blue-600 text-xl font-bold px-5 py-2 rounded-full hover:bg-gray-100 transition">
              Login
            </Link> */}
          </div>
          <div className="md:hidden absolute right-4">
            <button className="focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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