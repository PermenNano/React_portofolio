import React from 'react';

const Footer = ({ myName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 dark:bg-black py-6 text-gray-600 dark:text-gray-400 text-sm relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="mb-2 md:mb-0">
            donut steal origin design &copy; {currentYear} {myName}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;