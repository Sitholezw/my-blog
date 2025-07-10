import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; // Optional: lucide icons

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <header className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary dark:text-primary-light">
          My Blog
        </h1>

        <div className="flex items-center gap-6">
          <nav className="space-x-4 hidden sm:block">
            <a href="#home" className="text-text-light dark:text-text-dark hover:underline">
              Home
            </a>
            <a href="#contact" className="text-text-light dark:text-text-dark hover:underline">
              Contact
            </a>
          </nav>

          {/* Dark mode toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:ring-2 hover:ring-primary transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-600" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
// This component serves as the header for the blog, including a title and a dark mode toggle.
// It uses local storage to persist the theme preference across sessions.