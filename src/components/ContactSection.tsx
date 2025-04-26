import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Get in Touch
        </h2>
        <form className="max-w-xl mx-auto space-y-6 p-8 rounded-xl shadow-xl bg-white">
          <div>
            <label htmlFor="name" className="block text-xl text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xl text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xl text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={6}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 text-lg rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection; 