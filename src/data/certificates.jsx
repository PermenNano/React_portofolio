// import React, { useState, useRef, useCallback, useEffect } from 'react';

// const prototypes = [
//   { 
//     id: 1, 
//     image: 'https://via.placeholder.com/600x400/333333/FFFFFF?text=E-commerce+Checkout+Flow', 
//     title: 'E-commerce Checkout Flow', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
//     link: '#',
//     certificates: [
//       { id: 'cert1', image: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Cert+1', link: '/certificate/1' },
//       { id: 'cert2', image: 'https://via.placeholder.com/150/C70039/FFFFFF?text=Cert+2', link: '/certificate/2' }
//     ]
//   },
//   { 
//     id: 2, 
//     image: 'https://via.placeholder.com/600x400/333333/FFFFFF?text=Mobile+App+Onboarding+Screens', 
//     title: 'Mobile App Onboarding', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
//     link: '#',
//     certificates: [
//       { id: 'cert3', image: 'https://via.placeholder.com/150/900C3F/FFFFFF?text=Cert+3', link: '/certificate/3' }
//     ]
//   },
//   { 
//     id: 3, 
//     image: 'https://via.placeholder.com/600x400/333333/FFFFFF?text=Dashboard+UI+Concept', 
//     title: 'Analytics Dashboard UI', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
//     link: '#',
//     certificates: [
//       { id: 'cert4', image: 'https://via.placeholder.com/150/581845/FFFFFF?text=Cert+4', link: '/certificate/4' },
//       { id: 'cert5', image: 'https://via.placeholder.com/150/4A0D67/FFFFFF?text=Cert+5', link: '/certificate/5' },
//       { id: 'cert6', image: 'https://via.placeholder.com/150/2E86C1/FFFFFF?text=Cert+6', link: '/certificate/6' }
//     ]
//   },
//   { 
//     id: 4, 
//     image: 'https://via.placeholder.com/600x400/333333/FFFFFF?text=Interactive+Recipe+App', 
//     title: 'Interactive Recipe App', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
//     link: '#',
//     certificates: []
//   },
//   { 
//     id: 5, 
//     image: 'https://via.placeholder.com/600x400/333333/FFFFFF?text=Event+Booking+System', 
//     title: 'Event Booking System', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
//     link: '#',
//     certificates: [
//       { id: 'cert7', image: 'https://via.placeholder.com/150/17A589/FFFFFF?text=Cert+7', link: '/certificate/7' }
//     ]
//   },
// ];

// const Portfolio = () => {
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
//   const scrollContainerRef = useRef(null);

//   const checkScrollPosition = useCallback(() => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const { scrollLeft, scrollWidth, clientWidth } = container;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
//     }
//   }, []);
  
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener('scroll', checkScrollPosition);
//       window.addEventListener('resize', checkScrollPosition);
//       checkScrollPosition(); // Initial check
//       return () => {
//         container.removeEventListener('scroll', checkScrollPosition);
//         window.removeEventListener('resize', checkScrollPosition);
//       };
//     }
//   }, [checkScrollPosition]);

//   const scrollLeft = useCallback(() => scrollContainerRef.current?.scrollBy({ left: -350, behavior: 'smooth' }), []);
//   const scrollRight = useCallback(() => scrollContainerRef.current?.scrollBy({ left: 350, behavior: 'smooth' }), []);

//   return (
//     <section id="portfolio" className="py-16 max-w-7xl mx-auto">
//       <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">Portfolio</h2>
//       <div className="relative">
//         <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
//           {prototypes.map((prototype) => (
//             <div key={prototype.id} className="min-w-[320px] md:min-w-[350px] bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out flex flex-col h-full">
//               <img src={prototype.image} alt={prototype.title} className="w-full h-48 object-cover border-b border-gray-200 dark:border-gray-700 flex-shrink-0" />
//               <div className="p-6 flex flex-col flex-grow">
//                 <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">{prototype.title}</h4>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">{prototype.description}</p>
//                 <a href={prototype.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-3 rounded-full hover:from-indigo-700 hover:to-purple-800 transition duration-300 ease-in-out text-sm font-semibold w-full text-center">View Project</a>
                
//                 {/* Certificates Section */}
//                 {prototype.certificates.length > 0 && (
//                   <div className="mt-4">
//                     <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Certificates:</h5>
//                     <div className="flex flex-wrap gap-2">
//                       {prototype.certificates.map(cert => (
//                         <a 
//                           key={cert.id} 
//                           href={cert.link} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="w-12 h-12 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-200"
//                         >
//                           <img 
//                             src={cert.image} 
//                             alt={`Certificate ${cert.id}`} 
//                             className="w-full h-full object-cover"
//                           />
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         <button onClick={scrollLeft} className={`absolute left-[-15px] top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 z-10 focus:outline-none md:block ${ canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none' }`} aria-label="Scroll Left"><i className="fas fa-chevron-left text-gray-800 dark:text-white"></i></button>
//         <button onClick={scrollRight} className={`absolute right-[-15px] top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 z-10 focus:outline-none md:block ${ canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none' }`} aria-label="Scroll Right"><i className="fas fa-chevron-right text-gray-800 dark:text-white"></i></button>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;