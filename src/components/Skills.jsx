import React from 'react';

// --- DATA FOR YOUR SKILLS ---
const technicalSkills = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'React', 'Vue.js', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Git', 'Docker', 'RESTful APIs', 'Unit Testing'
];

const softSkills = [
  { 
    name: 'Problem-Solving', 
    icon: 'fas fa-brain', 
    description: 'Adept at analyzing complex issues and implementing effective, scalable solutions.' 
  },
  { 
    name: 'Team Collaboration', 
    icon: 'fas fa-users', 
    description: 'Experienced in Agile environments, using tools like Git and Jira for seamless teamwork.' 
  },
  { 
    name: 'Communication', 
    icon: 'fas fa-comments', 
    description: 'Clearly articulating technical concepts to both technical and non-technical stakeholders.' 
  },
  { 
    name: 'Adaptability', 
    icon: 'fas fa-sync-alt', 
    description: 'Quickly learning and applying new technologies to meet project requirements.' 
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">

          {/* --- UPDATED HEADING --- */}
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            <span className="text-gray-900 dark:text-white">My</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
              Professional Skillset
            </span>
          </h2>
          
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            A blend of technical expertise and collaborative strengths to build great products.
          </p>
        </div>

        {/* --- TECHNICAL SKILLS SECTION (Tag Cloud) --- */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Technical Skills</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {technicalSkills.map((skill) => (
              <div key={skill} className="bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-purple-300 font-medium px-5 py-3 rounded-lg shadow-sm transform transition duration-300 hover:scale-110 hover:shadow-md hover:bg-purple-100 dark:hover:bg-purple-900/50">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* --- SOFT SKILLS SECTION (Cards) --- */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softSkills.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-purple-500 dark:text-purple-400 text-4xl mb-4 inline-block">
                  <i className={skill.icon}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{skill.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;