import React from 'react';

const Header = () => {
  return (
    <header className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary dark:text-primary-light">
          My Blog
        </h1>
        <nav className="space-x-4">
          <a href="#home" className="text-text-light dark:text-text-dark hover:underline">
            Home
          </a>
          <a href="#contact" className="text-text-light dark:text-text-dark hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
// This is a simple header component for a blog site.
// It includes a title and navigation links for Home and Contact.