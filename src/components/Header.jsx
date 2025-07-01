import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isScrolled, myName, navLinks, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLinkActive = (link) => {
    if (link?.href?.includes('#')) {
      const linkId = link.href.split('#')[1];
      return activeSection === linkId;
    }
    if (link.href === '/') {
      return activeSection === 'hero';
    }
    return false;
  };

  return (
    <header className={`navbar fixed w-full z-20 transition-all duration-300 ${ isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-md' : 'bg-transparent' }`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-extrabold tracking-wide text-gray-800 dark:text-gray-100">
          {myName}<span className="text-purple-500">Web</span>
        </h1>
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-8 text-lg">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.label === 'Contact' ? (
                    // --- THIS IS THE UPDATED STYLING FOR THE CONTACT BUTTON ---
                    <a 
                      href={link.href}
                      className="flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {link.label}
                      <i className="fas fa-arrow-up-right-from-square text-xs"></i>
                    </a>
                  ) : (
                    // Regular nav links
                    <a 
                      href={link.href}
                      className={`pb-1 transition duration-300 ease-in-out hover:text-purple-500 dark:hover:text-purple-400 hover:border-purple-500 dark:hover:border-purple-400 ${
                        isLinkActive(link)
                          ? 'text-purple-500 dark:text-purple-400 border-b-2 border-purple-500 dark:border-purple-400'
                          : 'border-b-2 border-transparent text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 p-2 rounded-md md:hidden focus:outline-none text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Open menu">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white/95 dark:bg-black/95">
          {navLinks.map((link) => (
            <Link 
              key={`mobile-${link.href}`} 
              to={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;