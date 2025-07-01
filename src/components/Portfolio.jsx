import React, { useRef, useCallback, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// --- Image Imports ---
import myHospitalImage from '../assets/project_photo/MyHospital.png';
import myHotelImage from '../assets/project_photo/Hotel.png';
import PeduliDiriImage from '../assets/project_photo/PeduliDiri.png';
import PortofolioVue from '../assets/project_photo/PortofolioVue.png';
import exportexcel from '../assets/project_photo/export-excel.png';
import brinproject from '../assets/project_photo/brin_project.png';
import chatbot from '../assets/project_photo/chatbot.png';
import Enrollment from '../assets/project_photo/Enrollment.png';

// --- Exported Project Data ---
export const prototypes = [
  {
    id: 1,
    image: myHospitalImage,
    title: 'MyHospital',
    description: 'A clean and user-friendly interface for a hospital management system. This frontend prototype focuses on easy navigation for patients to find doctors, book appointments, and view their medical records.',
    link: 'https://permennano.github.io/tugas-web-hospital/',
    repoUrl: 'https://github.com/PermenNano/tugas-web-hospital', // <-- Added back
    technologies: ['HTML', 'CSS3']
  },
  {
    id: 2,
    image: myHotelImage,
    title: 'MyHotel',
    description: 'A comprehensive web application for hotel booking and management. Built with Laravel, it handles room availability, reservations, customer data, and administrative tasks for hotel staff.',
    link: '#',
    repoUrl: 'https://github.com/PermenNano/tugas-web-hospital', // <-- Added back
    technologies: ['Laravel', 'CSS3', 'MySQL']
  },
  {
    id: 3,
    image: PeduliDiriImage,
    title: 'Peduli Diri',
    description: 'A personal health and travel logging application developed as a school project. It allows users to record their body temperature and travel history, stored securely in a MySQL database.',
    link: '#',
    repoUrl: 'https://github.com/PermenNano/peduli_diri-pbo-starbhak', // <-- Added back
    technologies: ['Laravel', 'MySQL']
  },
  {
    id: 4,
    image: PortofolioVue,
    title: 'Portofolio Vue',
    description: 'A dynamic portfolio site built with the Vue.js framework, featuring reactive components and a clean, modern design to showcase projects and skills effectively.',
    link: '#',
    repoUrl: 'https://github.com/PermenNano/Portofolio-vue', // <-- Added back
    technologies: ['Vue.js', 'CSS3']
  },
  {
    id: 5,
    image: exportexcel,
    title: 'Export to Excel',
    description: 'A server-side utility feature for exporting large datasets from a database directly into formatted Excel files, built using Laravel for backend processing.',
    link: '#',
    repoUrl: 'https://github.com/PermenNano/Project-Excel-Pkl', // <-- Added back
    technologies: ['Laravel', 'Bootstrap', 'MySQL']
  },
  {
    id: 6,
    image: chatbot,
    title: 'chatbot',
    description: 'A concept dashboard UI demonstrating data visualization techniques and component-based architecture using Vue.js.',
    link: '#',
    repoUrl: 'https://github.com/PermenNano/medicalchatbot-api', // <-- Added back
    technologies: ['Phython', 'Flask']
  },
  {
    id: 7,
    image: brinproject,
    title: 'Brin Monitoring App',
    description: 'An application designed for monitoring internal systems and data for the National Research and Innovation Agency (BRIN), focusing on clear data presentation.',
    link: '#',
    repoUrl: 'https://github.com/PermenNano/brin_project1', // <-- Added back
    technologies: ['Dart', 'Node.js']
  },
  {
    id: 8,
    image: Enrollment,
    title: 'Enrollement',
    description: 'An application designed for monitoring internal systems and data for the National Research and Innovation Agency (BRIN), focusing on clear data presentation.',
    link: '#',
    repoUrl: 'https://github.com/PermenNano/brin_project1', // <-- Added back
    technologies: ['Kotlin', 'SQLite']
  }
];


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const checkScrollPosition = useCallback(() => {
    if (!isGridVisible) {
      const container = scrollContainerRef.current;
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    }
  }, [isGridVisible]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && !isGridVisible) {
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      checkScrollPosition();
      return () => {
        if (container) container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, [checkScrollPosition, activeFilter, isGridVisible]);

  const scrollLeft = useCallback(() => scrollContainerRef.current?.scrollBy({ left: -350, behavior: 'smooth' }), []);
  const scrollRight = useCallback(() => scrollContainerRef.current?.scrollBy({ left: 350, behavior: 'smooth' }), []);

  const allTechnologies = useMemo(() => 
    ['All', ...new Set(prototypes.flatMap(p => p.technologies))],
  [prototypes]);
  
  const filteredPrototypes = useMemo(() => 
    activeFilter === 'All'
      ? prototypes
      : prototypes.filter(p => p.technologies.includes(activeFilter)),
  [activeFilter, prototypes]);

  const containerClasses = isGridVisible
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    : "flex overflow-x-auto space-x-8 pb-4 scrollbar-hide";

  const cardClasses = isGridVisible ? "w-full" : "w-72 flex-shrink-0";

  return (
    <section id="portfolio" className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Portfolio</h2>
      <div className="relative mb-16">
        <div className="flex justify-between items-center border-b-2 border-purple-500 pb-2 mb-4">
          <h3 className="text-3xl font-bold text-left text-gray-700 dark:text-gray-300">
            Projects
          </h3>
          <button
            onClick={() => setIsGridVisible(!isGridVisible)}
            className="px-4 py-2 text-sm font-semibold text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
          >
            {isGridVisible ? 'Show Less' : 'Show All'}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeFilter === tech
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div ref={scrollContainerRef} className={containerClasses}>
          {filteredPrototypes.map((prototype) => (
            <div
              key={prototype.id}
              className={`${cardClasses} bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out flex flex-col h-full`}
            >
              <img src={prototype.image} alt={prototype.title} className="w-full h-40 object-cover border-b border-gray-200 dark:border-gray-700 flex-shrink-0" />
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white leading-tight">{prototype.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 h-16 line-clamp-3">
                  {prototype.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {prototype.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/project/${prototype.id}`}
                  className="mt-auto inline-block bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-2 rounded-full hover:from-indigo-700 hover:to-purple-800 transition duration-300 ease-in-out text-sm font-semibold w-full text-center"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>

        {!isGridVisible && (
          <>
            <button onClick={scrollLeft} className={`absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 z-10 focus:outline-none hidden md:block ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Scroll Left"><i className="fas fa-chevron-left text-gray-800 dark:text-white"></i></button>
            <button onClick={scrollRight} className={`absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 z-10 focus:outline-none hidden md:block ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Scroll Right"><i className="fas fa-chevron-right text-gray-800 dark:text-white"></i></button>
          </>
        )}
      </div>
    </section>
  );
};

export default Portfolio;