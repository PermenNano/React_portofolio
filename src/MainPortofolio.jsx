import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Asset and Style Imports
import profilePic from './assets/kucing.jpeg';
import './portofolio.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Component Imports
import AnimatedGradientBackground from './components/AnimatedGradientBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';
import CertificatesPage from './components/Certificates';
import ProjectDetailPage from './components/ProjectDetailPage'; // <-- 1. IMPORT THE NEW PAGE

function MainPortofolio() {
  // --- All state and logic remains the same ---
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState('light');
  const myName = 'Anggara';
  const navLinks = [
    { href: '/#hero', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#contact', label: 'Contact' },
  ];

  // Theme logic remains the same
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
  }, []);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => { setTheme(prev => prev === 'light' ? 'dark' : 'light'); };
  
  // Scroll and navigation effects logic remains the same
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'portfolio', 'contact'];
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsHidden(scrollTop > lastScrollTop && scrollTop > 50);
      setIsScrolled(scrollTop > 50);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
      let currentSection = '';
      const triggerPoint = 151;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= triggerPoint) {
          currentSection = sectionId;
          break;
        }
      }
      setActiveSection(currentSection || 'hero');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <BrowserRouter>
      <AnimatedGradientBackground />
      <Routes>
        
        {/* ROUTE 1: The Main Page ("/") */}
        <Route path="/" element={
            <>
              <Header 
                isHidden={isHidden}
                isScrolled={isScrolled}
                myName={myName}
                navLinks={navLinks}
                activeSection={activeSection}
                theme={theme}
                toggleTheme={toggleTheme}
              />
              <main className="relative z-10">
              <link rel="icon" type="image/png" href="main.png" />
              
              <title>Web Portofolio</title>
                <Hero myName={myName} />
                <div className="bg-white dark:bg-gray-900">
                  <div className="px-4 md:px-10 py-10">
                    <FadeInSection><About profilePic={profilePic} /></FadeInSection>
                    <FadeInSection><Skills /></FadeInSection>
                    <FadeInSection><Portfolio /></FadeInSection>
                    <FadeInSection><Contact /></FadeInSection>
                  </div>
                </div>
              </main>
              <Footer myName={myName} />
            </>
          } 
        />

        {/* ROUTE 2: The Certificates Page ("/certificates") */}
        <Route 
          path="/certificates" 
          element={<CertificatesPage theme={theme} toggleTheme={toggleTheme} />} 
        />

        {/* --- 2. ADD THE NEW DYNAMIC ROUTE FOR PROJECTS --- */}
        <Route 
          path="/project/:projectId" 
          element={<ProjectDetailPage theme={theme} toggleTheme={toggleTheme} />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default MainPortofolio;