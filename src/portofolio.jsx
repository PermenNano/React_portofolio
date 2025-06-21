import React, { useEffect, useState, useRef } from 'react';
import profilePic from './assets/kucing.jpeg'; // Make sure this path is correct
import './portofolio.css';
import { useInView } from 'react-intersection-observer';

// Animation wrapper component - UPDATED
const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    // We remove triggerOnce to make the animation repeat
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      // We change the animation to come from the left
      className={`transition-all duration-700 ease-out transform ${
        inView
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-8'
      }`}
    >
      {children}
    </div>
  );
};


function Portofolio() {
  // --- STATE MANAGEMENT ---
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  // --- EFFECTS ---
  useEffect(() => {
    const sections = ['about', 'skills', 'portfolio', 'contact'];
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setIsScrolled(scrollTop > 50);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
      let currentSection = '';
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollTop >= sectionTop - 150) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  // --- HANDLERS ---
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    console.log('Form data submitted:', formData);
    setTimeout(() => {
      setIsSending(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  // --- DATA ---
  const navLinks = [
    { href: '#about', label: 'About Me' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];
  const technicalSkills = [
    { name: 'HTML5 / CSS3', level: 95 }, { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'Tailwind CSS', level: 90 }, { name: 'React', level: 85 },
    { name: 'Vue.js', level: 80 }, { name: 'PHP', level: 90 },
    { name: 'Laravel Framework', level: 85 }, { name: 'MySQL / PostgreSQL', level: 80 },
    { name: 'Git & Version Control', level: 90 }, { name: 'Docker', level: 75 },
    { name: 'API Design (RESTful)', level: 85 }, { name: 'Unit Testing', level: 70 },
  ];
  const softSkills = [
    { name: 'Problem-Solving', description: 'Adept at analyzing complex issues and implementing effective, scalable solutions.' },
    { name: 'Team Collaboration', description: 'Experienced in Agile environments, using tools like Git and Jira for seamless teamwork.' },
    { name: 'Communication', description: 'Clearly articulate technical concepts to both technical and non-technical stakeholders.' },
    { name: 'Adaptability', description: 'Quickly learn and apply new technologies and frameworks to meet project requirements.' },
    { name: 'Time Management', description: 'Efficiently prioritize tasks to meet deadlines in fast-paced development cycles.' },
  ];
  const prototypes = [
    { id: 1, image: 'https://via.placeholder.com/600x400?text=E-commerce+Checkout', title: 'E-commerce Checkout Flow', description: 'An interactive prototype demonstrating a streamlined checkout process for optimal user experience.', link: '#' },
    { id: 2, image: 'https://via.placeholder.com/600x400?text=Mobile+Onboarding', title: 'Mobile App Onboarding', description: 'A conceptual design for a user-friendly mobile app onboarding experience to enhance user engagement.', link: '#' },
    { id: 3, image: 'https://via.placeholder.com/600x400?text=Dashboard+UI', title: 'Analytics Dashboard UI', description: 'A prototype showcasing an intuitive, data-rich dashboard interface for analytics visualization.', link: '#' },
    { id: 4, image: 'https://via.placeholder.com/600x400?text=Recipe+App', title: 'Interactive Recipe App', description: 'A prototype for a mobile recipe application with advanced search and filtering capabilities.', link: '#' },
    { id: 5, image: 'https://via.placeholder.com/600x400?text=Booking+System', title: 'Event Booking System', description: 'A full-featured prototype for an event booking platform with an interactive calendar and seat selection.', link: '#' },
  ];
  const contactInfo = { email: 'hello@gmail.com', phone: '+1 (123) 456-7890', location: 'Vancouver, BC, Canada' };
  const socialLinks = [
    { icon: 'fab fa-linkedin-in', href: '#' }, { icon: 'fab fa-github', href: '#' },
    { icon: 'fab fa-twitter', href: '#' }, { icon: 'fab fa-instagram', href: '#' },
  ];
  const yourName = 'Anggara';
  const currentYear = new Date().getFullYear();

  // --- JSX RENDER ---
  return (
    <div className="font-sans leading-relaxed" style={{ color: '#E5E7EB', backgroundColor: '#030014' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      
      <header className={`navbar bg-gradient-to-r from-gray-900 to-black text-white shadow-lg py-4 fixed w-full z-20 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <h1 className="text-2xl font-extrabold tracking-wide mb-2 md:mb-0">
            Anggara<span className="text-purple-400">Web</span>
          </h1>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-lg">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={`pb-1 transition duration-300 ease-in-out hover:text-purple-400 hover:border-purple-400 ${activeSection === link.href.substring(1) ? 'text-purple-400 border-b-2 border-purple-400' : 'text-white border-b-2 border-transparent'}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <div className="pt-24">
          <section id="about" className="content-card-bg-white shadow-md">
            <FadeInSection>
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 text-white">About <span className="text-purple-400">Me</span></h2>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
                  <div className="flex-shrink-0">
                    <img src={profilePic} alt="Profile" className="rounded-full w-60 h-60 object-cover border-4 border-indigo-500 shadow-lg" />
                  </div>
                  <div className="md:w-2/3 text-lg leading-relaxed text-left text-gray-300">
                    <p className="mb-4">Hello! I'm a passionate developer with a knack for building clean, efficient, and user-friendly web applications. My journey in programming started with a simple curiosity and has grown into a full-fledged passion for solving complex problems with code.</p>
                    <p>I thrive in collaborative environments and am always eager to learn new technologies and methodologies to enhance my skill set and deliver high-quality products.</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </section>

          <section id="skills" className="content-card-bg-white shadow-md">
            <FadeInSection>
              <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-10 text-center text-white">My Skills</h2>
                <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-semibold mb-8 text-white border-b-2 border-purple-500 pb-2">Technical Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {technicalSkills.map((skill) => (
                      <div key={skill.name} className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-lg font-medium text-gray-300">{skill.name}</span>
                          <span className="text-sm font-medium text-purple-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-green-500 pb-2">Soft Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {softSkills.map((skill) => (
                      <div key={skill.name} className="flex items-start space-x-4">
                        <div><i className="fas fa-check-circle text-green-400 mt-1"></i></div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-200">{skill.name}</h4>
                          <p className="text-gray-400">{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </section>

          <section id="portfolio" className="content-card-bg-white shadow-md">
            <FadeInSection>
              <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-10 text-center text-white">Portfolio</h2>
                <div className="relative">
                  <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
                    {prototypes.map((prototype) => (
                      <div key={prototype.id} className="min-w-[320px] md:min-w-[350px] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out flex flex-col h-full" style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)' }}>
                        <img src={prototype.image} alt={prototype.title} className="w-full h-48 object-cover border-b border-gray-700 flex-shrink-0" />
                        <div className="p-6 flex flex-col flex-grow">
                          <h4 className="text-xl font-bold mb-3 text-white leading-tight">{prototype.title}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">{prototype.description}</p>
                          <div className="mt-auto">
                            <a href={prototype.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out text-sm font-semibold w-full text-center">View Project</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={scrollLeft} className={`absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 p-2 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none md:block ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Scroll Left">
                    <i className="fas fa-chevron-left text-white w-6 h-6"></i>
                  </button>
                  <button onClick={scrollRight} className={`absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 p-2 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none md:block ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Scroll Right">
                    <i className="fas fa-chevron-right text-white w-6 h-6"></i>
                  </button>
                </div>
              </div>
            </FadeInSection>
          </section>

          <section id="contact" className="content-card-bg-white shadow-md">
            <FadeInSection>
              <div className="container mx-auto px-6">
                <div className="text-left max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold mb-4 text-white text-center">Contact <span className='text-purple-400'>Me</span></h2>
                  <p className="text-lg mb-12 text-gray-400 text-center">Have a project in mind or want to collaborate? I'm always open to discussing new opportunities. Feel free to send me a message!</p>
                  <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                      <h3 className="text-2d font-semibold mb-6 text-white">Contact Information</h3>
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="bg-gray-800 p-3 rounded-full"><i className="fas fa-envelope text-xl text-purple-400"></i></div>
                          <div>
                            <p className="text-gray-400">Email</p>
                            <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-purple-400 transition-colors">{contactInfo.email}</a>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="bg-gray-800 p-3 rounded-full"><i className="fas fa-phone text-xl text-purple-400"></i></div>
                          <div>
                            <p className="text-gray-400">Phone</p>
                            <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-purple-400 transition-colors">{contactInfo.phone}</a>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="bg-gray-800 p-3 rounded-full"><i className="fas fa-map-marker-alt text-xl text-purple-400"></i></div>
                          <div>
                            <p className="text-gray-400">Location</p>
                            <p className="text-white">{contactInfo.location}</p>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mt-10 mb-4 text-white">Connect With Me</h3>
                      <div className="flex space-x-4">
                        {socialLinks.map(social => (
                          <a key={social.icon} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-2xl">
                            <i className={social.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-1/2 bg-gray-900 bg-opacity-50 p-8 rounded-lg">
                      <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
                      <form onSubmit={handleFormSubmit}>
                        <div className="mb-5">
                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-400">Your Name</label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} required className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-5">
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">Your Email</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} required className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-5">
                          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Your Message</label>
                          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleFormChange} required className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"></textarea>
                        </div>
                        <button type="submit" disabled={isSending} className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex items-center justify-center disabled:opacity-50">
                          {isSending ? 'Sending...' : 'Send Message'}
                          <i className="fas fa-paper-plane ml-2"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6 text-center text-sm relative z-10">
        <div className="container mx-auto px-6">
          <p>&copy; {currentYear} {yourName}. All rights reserved.</p>
          <p>Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default Portofolio;