import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Your prototypes data remains the same
import myHospitalImage from '../assets/project_photo/MyHospital.png'; 
import myHotelImage from '../assets/project_photo/Hotel.png';
import PeduliDiriImage from '../assets/project_photo/PeduliDiri.png'; 
import PortofolioVue from '../assets/project_photo/PortofolioVue.png';
import exportexcel from '../assets/project_photo/export-excel.png'; 
import brinproject from '../assets/project_photo/brin_project.png'; 


const prototypes = [
  { id: 1, image: myHospitalImage, title: 'MyHospital', description: 'Lorem ipsum dolor sit amet...', link: '#', technologies: ['HTML', 'CSS3'] },
  { id: 2, image: myHotelImage, title: 'MyHotel', description: 'Lorem ipsum dolor sit amet...', link: '#', technologies: ['Laravel', 'CSS3'] },
  { id: 3, image: PeduliDiriImage, title: 'Peduli Diri', description: 'Lorem ipsum dolor sit amet...', link: '#', technologies: ['Laravel', 'MySql'] },
  { id: 4, image: PortofolioVue, title: 'Portofolio Vue', description: 'Lorem ipsum dolor sit amet...', link: '#', technologies: ['Vue.js', 'CSS3'] },
  { id: 5, image: exportexcel, title: 'export-excel', description: 'Lorem ipsum dolor sit amet...', link: '#', technologies: ['laravel', 'bootstrap', 'CSS3'] },
  { id: 6, image: 'https://via.placeholder.com/600x400/333333/FFFFFF?text=Dashboard+UI+Concept', title: 'Portofolio Vue 2', description: 'Lorem ipsum dolor sit amet...', link: '#', technologies: ['Vue.js', 'CSS3'] },
  { id: 7, image: brinproject, title: 'Brin Monitoring App', description: 'Lorem ipsum dolor sit amet...', link: '#', technologies: ['Vue.js', 'CSS3'] }
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  // --- LOGIC RESTORED ---
  // This function checks the scroll position to show/hide the arrow buttons
  const checkScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);
  
  // This effect attaches event listeners to check the scroll position automatically
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      checkScrollPosition(); // Initial check on load
      return () => {
        if(container) {
            container.removeEventListener('scroll', checkScrollPosition);
        }
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, [checkScrollPosition]);

  // These functions handle the button clicks
  const scrollLeft = useCallback(() => scrollContainerRef.current?.scrollBy({ left: -350, behavior: 'smooth' }), []);
  const scrollRight = useCallback(() => scrollContainerRef.current?.scrollBy({ left: 350, behavior: 'smooth' }), []);


  return (
    <section id="portfolio" className="py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Portfolio</h2>
      
      <div className="relative mb-16">
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