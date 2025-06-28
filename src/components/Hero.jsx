import React from 'react';
import FadeInSection from './FadeInSection'; // Re-import for self-contained animation

const Hero = ({ myName }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-6 z-10">
        <FadeInSection>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">{myName}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            I create stellar web experiences with modern technologies. Specializing in front-end development, I build interfaces that are both beautiful and functional.
          </p>
          <a href="#portfolio" className="bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
            View My Work
          </a>
        </FadeInSection>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white animate-bounce-down cursor-pointer">
            <i className="fas fa-chevron-down text-2xl"></i>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;