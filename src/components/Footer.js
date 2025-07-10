import React from 'react';
import { Facebook,Twitter,Instagram } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 mt-12 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup Section */}
        <div className="max-w-2xl mx-auto mb-12 backdrop-blur-md bg-white/50 dark:bg-white/5 p-6 rounded-xl shadow-md border border-white/20">
          <h2 className="text-xl font-bold text-center text-primary dark:text-primary-light mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-4">
            Stay up to date with our latest posts.
          </p>
          <form
            action="https://YOUR_MAILCHIMP_URL"
            method="post"
            target="_blank"
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              name="EMAIL"
              required
              placeholder="Your Email"
              className="w-full sm:flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition"
            >
              Subscribe
            </button>
          </form>
          {/* Social Links */}
<div className="flex justify-center gap-6 mt-6 text-gray-600 dark:text-gray-300">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
    <Facebook />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
    <Twitter />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
    <Instagram />
  </a>
</div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center py-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// This is a footer component for a blog site.
// It includes a newsletter signup section and copyright information.