import React from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  // The hook logic remains the same
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      // --- THIS IS THE ONLY LINE THAT CHANGES ---
      // We've replaced 'translate-y' with 'translate-x'
      className={`transition-all duration-700 ease-out transform ${
        inView 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-10' // This shifts the element to the right when hidden
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;