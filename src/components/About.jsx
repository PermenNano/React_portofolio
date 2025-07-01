import React from 'react';

const About = ({ profilePic }) => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          
          {/* --- CORRECTED H2 --- */}
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">Me</span>
          </h2>
          
          {/* --- CORRECTED PARAGRAPH --- */}
          <p className="mt-4 max-w-2xl mx-auto text-lg font-bold text-gray-800 dark:text-white">
            A little more about my journey, passions, and what drives me.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Image with Decorative Blob --- */}
          <div className="relative flex justify-center items-center">
            <div className="absolute -inset-2">
              <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-20 blur-3xl bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
            </div>
            <img 
              src={profilePic} 
              alt="Profile" 
              className="relative z-10 rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-white dark:border-gray-800 shadow-2xl" 
            />
          </div>

          {/* --- Text Content Section --- */}
          <div className="text-left text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-md backdrop-blur-sm p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Turning Vision into Reality with Code
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              I'm a developer who transforms complex problems into elegant and intuitive digital solutions. My journey from simple curiosity to a full-fledged passion for code drives me to build web applications that are not only powerful but also a pleasure to use.
            </p>

            {/* --- Key Passions with Icons --- */}
            <ul className="space-y-5 text-lg">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <i className="fas fa-rocket text-purple-500 mr-4 mt-1"></i>
                </div>
                <span>
                  <strong>Efficient Solutions:</strong> I'm passionate about writing clean, efficient, and scalable code that stands the test of time.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <i className="fas fa-users text-purple-500 mr-4 mt-1"></i>
                </div>
                <span>
                  <strong>Collaborative Spirit:</strong> I thrive in team environments, believing that the best products are built through shared knowledge and open communication.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <i className="fas fa-lightbulb text-purple-500 mr-4 mt-1"></i>
                </div>
                <span>
                  <strong>Continuous Learning:</strong> The tech world is always evolving, and I'm committed to constantly learning and adapting to new technologies and challenges.
                </span>
              </li>
            </ul>

            {/* --- Call to Action Button with Gradient --- */}
            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-lg"
              >
                Let's Talk
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;