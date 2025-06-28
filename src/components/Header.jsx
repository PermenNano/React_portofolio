import React, { useState } from 'react';

const Header = ({ isHidden, isScrolled, myName, navLinks, activeSection, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`navbar fixed w-full z-20 transition-all duration-300 ${ isHidden ? '-translate-y-full' : 'translate-y-0' } ${ isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-md' : 'bg-transparent' }`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-extrabold tracking-wide text-gray-800 dark:text-gray-100">
          {myName}<span className="text-purple-500">Web</span>
        </h1>
        <div className="flex items-center">
          <nav className="hidden md:flex items-center">
            <ul className="flex flex-wrap justify-center space-x-8 text-lg">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={`pb-1 transition duration-300 ease-in-out hover:text-purple-500 dark:hover:text-purple-400 hover:border-purple-500 dark:hover:border-purple-400 ${ activeSection === link.href.substring(1) ? 'text-purple-500 dark:text-purple-400 border-b-2 border-purple-500 dark:border-purple-400' : 'border-b-2 border-transparent text-gray-700 dark:text-gray-300' }`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button 
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full text-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun text-yellow-400 transition-transform duration-300 hover:rotate-12" aria-hidden="true"></i>
            ) : (
              <i className="fas fa-moon text-gray-800 transition-transform duration-300 hover:rotate-12" aria-hidden="true"></i>
            )}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2 p-2 rounded-md md:hidden focus:outline-none text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Open menu">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white/95 dark:bg-black/95">
          {navLinks.map((link) => (
            <a 
              key={`mobile-${link.href}`} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;