import React from 'react';

const Footer = ({ myName }) => {
  const currentYear = new Date().getFullYear();

  return (
    // The main footer container
    <footer className="bg-gray-200 dark:bg-black py-6 text-gray-600 dark:text-gray-400 text-sm relative z-10">
      <div className="container mx-auto px-6">
        
        {/* We use a flex container to position the items */}
        {/* On mobile (default), it's a column. On medium screens and up (md:), it becomes a row with items spaced apart. */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">

          {/* Watermark/Copyright text - aligned left */}
          <p className="mb-2 md:mb-0">
            {/* The text has been updated as requested */}
            donut steal origin design &copy; {currentYear} {myName}
          </p>
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;