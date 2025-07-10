import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isScrolled ? 'py-2' : 'py-4'} flex items-center justify-between transition-all duration-300`}>
        <h1 className="text-xl font-bold text-primary dark:text-primary-light">
          My Blog
        </h1>

        <div className="flex items-center gap-6">
          <nav className="space-x-4 hidden sm:block">
            <a href="#home" className="text-text-light dark:text-text-dark hover:underline">Home</a>
            <a href="#contact" className="text-text-light dark:text-text-dark hover:underline">Contact</a>
          </nav>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:ring-2 hover:ring-primary transform ${
              darkMode ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
            }`}
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
// This is a header component for a blog site.
// It includes a title, navigation links, and a dark mode toggle button.