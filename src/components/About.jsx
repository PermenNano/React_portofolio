import React from 'react';

const About = ({ profilePic }) => {
  return (
    <section id="about" className="py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">About <span className="text-purple-500 dark:text-purple-400">Me</span></h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex-shrink-0">
          <img src={profilePic} alt="Profile" className="rounded-full w-60 h-60 object-cover border-4 border-indigo-500 dark:border-indigo-400 shadow-lg transform transition duration-500 rotate-[-3deg] hover:scale-105 hover:rotate-6" />
        </div>
        <div className="md:w-2/3 text-lg leading-relaxed text-left text-gray-700 dark:text-gray-300">
          <p className="mb-4">Hello! I'm a passionate developer with a knack for building clean, efficient, and user-friendly web applications. My journey in programming started with a simple curiosity and has grown into a full-fledged passion for solving complex problems with code.</p>
          <p>I thrive in collaborative environments and am always eager to learn new technologies and methodologies to enhance my skill set and deliver high-quality products.</p>
        </div>
      </div>
    </section>
  );
};

export default About;