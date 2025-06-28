import React from 'react';

// --- DATA FOR YOUR SKILLS ---
// You can customize all your skills and proficiency levels here.
const technicalSkills = [
  { name: 'HTML5 / CSS3', level: 95 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Vue.js', level: 80 },
  { name: 'PHP', level: 90 },
  { name: 'Laravel Framework', level: 85 },
  { name: 'MySQL / PostgreSQL', level: 80 },
  { name: 'Git & Version Control', level: 90 },
  { name: 'Docker', level: 75 },
  { name: 'API Design (RESTful)', level: 85 },
  { name: 'Unit Testing', level: 70 },
];

const softSkills = [
  { name: 'Problem-Solving', description: 'Adept at analyzing complex issues and implementing effective, scalable solutions.' },
  { name: 'Team Collaboration', description: 'Experienced in Agile environments, using tools like Git and Jira for seamless teamwork.' },
  { name: 'Communication', description: 'Clearly articulate technical concepts to both technical and non-technical stakeholders.' },
  { name: 'Adaptability', description: 'Quickly learn and apply new technologies and frameworks to meet project requirements.' },
  { name: 'Time Management', description: 'Efficiently prioritize tasks to meet deadlines in fast-paced development cycles.' },
];


const Skills = () => {
  return (
    <section id="skills" className="py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">My Skills</h2>
      
      <div className="bg-gray-100/50 dark:bg-black/20 p-8 rounded-lg shadow-lg backdrop-blur-sm">
        
        {/* --- TECHNICAL SKILLS SECTION --- */}
        <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white border-b-2 border-purple-500 dark:border-purple-400 pb-2">
            Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {technicalSkills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                    className="bg-purple-600 dark:bg-purple-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- SOFT SKILLS SECTION --- */}
        <h3 className="text-3xl font-semibold mt-16 mb-8 text-gray-800 dark:text-white border-b-2 border-green-500 dark:border-green-400 pb-2">
            Soft Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softSkills.map((skill) => (
            <div key={skill.name} className="flex items-start space-x-4">
              <div>
                <i className="fas fa-check-circle text-green-500 dark:text-green-400 mt-1"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">{skill.name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;