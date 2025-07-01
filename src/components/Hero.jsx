import React from 'react';
import FadeInSection from './FadeInSection';
import { TypeAnimation } from 'react-type-animation'; // <-- Import the animation component


const Hero = ({ myName }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-6 z-10">
        <FadeInSection>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">{myName}</span>
          </h1>
          
          {/* --- This is the new typing animation --- */}
          <TypeAnimation
            sequence={[
              'a Software Engineer.',
              2000, // wait 2s
              'an IoT Engineer.',
              2000,
              'a Full-Stack Developer.',
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-2xl md:text-4xl text-gray-200 mb-8"
            repeat={Infinity}
          />

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          I build full-stack solutions that connect intuitive web and mobile apps to smart, automated devices. My skills range from modern front-end development to IoT and microcontroller engineering
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