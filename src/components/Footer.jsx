import React from 'react';

const Footer = ({ myName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 dark:bg-black py-6 text-gray-600 dark:text-gray-400 text-center text-sm relative z-10">
      <div className="container mx-auto px-6">
        <p>&copy; {currentYear} {myName}. All rights reserved.</p>
        <p>Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;