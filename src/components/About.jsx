import React from 'react';

const educationData = [
  {
    institution: 'President University',
    degree: 'Bachelor of Science in Computer Science',
    years: '2023 - Current',
    icon: 'fas fa-university',
  },
  {
    institution: 'SMK Taruna Bhakti',
    degree: 'Software Engineering Major',
    years: '2020 - 2023',
    icon: 'fas fa-school',
  },
];

const About = ({ profilePic }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl text-gray-900 dark:text-white">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">Me</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-2xl text-gray-700 dark:text-gray-300">
            A little more about my journey, passions, and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

          <div className="text-left text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 rounded-2xl shadow-xl backdrop-blur-sm p-8">
            <h3 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Turning Vision into Reality
            </h3>
            <p className="text-2xl leading-relaxed mb-6">
              I'm a developer who transforms complex problems into elegant and intuitive digital solutions. My journey from simple curiosity to a full-fledged passion for code drives me to build web applications that are not only powerful but also a pleasure to use.
            </p>
            <ul className="space-y-6 text-2xl">
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
                  <strong>Collaborative Spirit:</strong> I thrive in team environments, believing that the best products are built through shared knowledge.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <i className="fas fa-lightbulb text-purple-500 mr-4 mt-1"></i>
                </div>
                <span>
                  <strong>Continuous Learning:</strong> I'm committed to constantly learning and adapting to new technologies.
                </span>
              </li>
            </ul>
            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-10 rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-lg text-xl"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">My Journey</h3>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
            
            <div className="space-y-16">
              {educationData.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                    <i className={`${item.icon} text-white text-lg`}></i>
                  </div>
                  
                  <div className={`w-[calc(50%-2.5rem)] p-8 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg ${index % 2 === 0 ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{item.institution}</p>
                    <p className="text-xl text-gray-600 dark:text-gray-300">{item.degree}</p>
                    <p className="text-lg text-purple-500 dark:text-purple-400 font-semibold mt-1">{item.years}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;