import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- UPDATED DATA: Now includes a 'technologies' array for each project ---
const prototypes = [
  { 
    id: 1, 
    image: 'https://via.placeholder.com/600x400/333333/FFFFFF?text=E-commerce+Checkout+Flow', 
    title: 'E-commerce Checkout Flow', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    link: '#',
    technologies: ['React', 'Tailwind CSS', 'Stripe API']
  },
  { 
    id: 2, 
    image: 'https://via.placeholder.com/600x400/333333/FFFFFF?text=Mobile+App+Onboarding+Screens', 
    title: 'Mobile App Onboarding', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    link: '#',
    technologies: ['React Native', 'Firebase']
  },
  { 
    id: 3, 
    image: 'https://via.placeholder.com/600x400/333333/FFFFFF?text=Dashboard+UI+Concept', 
    title: 'Analytics Dashboard UI', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    link: '#',
    technologies: ['Vue.js', 'D3.js', 'SCSS']
  },
  { 
    id: 4, 
    image: 'https://via.placeholder.com/600x400/333333/FFFFFF?text=Interactive+Recipe+App', 
    title: 'Interactive Recipe App', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    link: '#',
    technologies: ['JavaScript', 'HTML5', 'CSS3']
  }
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  // ... (All your existing hooks: checkScrollPosition, useEffect, scrollLeft, scrollRight) ...
  const checkScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      checkScrollPosition();
      return () => {
        if(container) {
            container.removeEventListener('scroll', checkScrollPosition);
        }
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, [checkScrollPosition]);

  const scrollLeft = useCallback(() => scrollContainerRef.current?.scrollBy({ left: -350, behavior: 'smooth' }), []);
  const scrollRight = useCallback(() => scrollContainerRef.current?.scrollBy({ left: 350, behavior: 'smooth' }), []);

  return (
    <section id="portfolio" className="py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Portfolio</h2>
      
      {/* --- PROJECTS SECTION --- */}
      <div className="relative mb-16">
        {/* NEW: "Projects" sub-heading */}
        <h3 className="text-3xl font-bold mb-8 text-left text-gray-700 dark:text-gray-300 border-b-2 border-purple-500 pb-2">
          Projects
        </h3>
        <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {prototypes.map((prototype) => (
            <div key={prototype.id} className="min-w-[320px] md:min-w-[350px] bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out flex flex-col h-full">
              <img src={prototype.image} alt={prototype.title} className="w-full h-48 object-cover border-b border-gray-200 dark:border-gray-700 flex-shrink-0" />
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">{prototype.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{prototype.description}</p>
                
                {/* NEW: Technology tags section */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {prototype.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={prototype.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-3 rounded-full hover:from-indigo-700 hover:to-purple-800 transition duration-300 ease-in-out text-sm font-semibold w-full text-center">View Project</a>
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollLeft} className={`absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 z-10 focus:outline-none md:block ${ canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none' }`} aria-label="Scroll Left"><i className="fas fa-chevron-left text-gray-800 dark:text-white"></i></button>
        <button onClick={scrollRight} className={`absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 z-10 focus:outline-none md:block ${ canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none' }`} aria-label="Scroll Right"><i className="fas fa-chevron-right text-gray-800 dark:text-white"></i></button>
      </div>

      {/* Button to navigate to certificates page */}
      <div className="flex justify-center mt-12">
        <button 
          onClick={() => navigate('/certificates')}
          className="w-full max-w-md h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-left p-6"
        >
          <div className="text-white text-4xl mb-4">
            <i className="fas fa-certificate"></i>
          </div>
          <h3 className="text-white text-2xl font-bold mb-2">View All Certificates</h3>
          <p className="text-white/80 text-sm">Click to explore my professional certifications</p>
        </button>
      </div>
    </section>
  );
};

export default Portfolio;