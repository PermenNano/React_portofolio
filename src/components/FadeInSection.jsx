import React from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true, // Set to true so it only animates once
  });

  return (
    <div
      ref={ref}
      // UPDATED: Changed to a vertical fade-up animation
      className={`transition-all duration-700 ease-out transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4' // Start shifted down slightly
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;