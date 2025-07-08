import React, { useState, useEffect } from 'react';

const socialLinks = [
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/your-linkedin-username' },
  { icon: 'fab fa-github', href: 'https://github.com/PermenNano' },
];

const Footer = ({ myName }) => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-200 dark:bg-black py-8 text-gray-600 dark:text-gray-400 text-sm relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="mb-4 md:mb-0">
              donut steal origin design &copy; {currentYear} {myName}
            </p>
            <div className="flex space-x-6">
              {socialLinks.map(social => (
                <a 
                  key={social.icon} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-transform duration-300 hover:scale-110 text-2xl"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <button 
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Footer;