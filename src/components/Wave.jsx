// src/components/Wave.jsx

import React from 'react';

const Wave = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full z-0">
      {/* The SVG now uses Tailwind classes to set its color.
        - fill-current: Fills the SVG with the current text color.
        - text-white: Sets the color to white in light mode.
        - dark:text-gray-900: Sets the color to gray-900 in dark mode.
      */}
      <svg 
        className="fill-current text-white dark:text-gray-900" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
      >
        {/* The fill attribute is removed from the path */}
        <path 
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
    </div>
  );
};

export default Wave;