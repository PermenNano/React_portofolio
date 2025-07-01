import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data (kept in one file as requested) ---
const technicalSkills = {
  frontend: [
    { name: 'Next.js', level: 90 },
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 98 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Laravel', level: 90 },
    { name: 'MySQL', level: 90 },
    { name: 'PostgreSQL', level: 80 },
  ],
  tools: [
    { name: 'Git', level: 95 },
    { name: 'Docker', level: 75 },
    { name: 'Figma', level: 85 },
    // --- ADDED TOOLS ---
    { name: 'VS Code', level: 95 },
    { name: 'Postman', level: 90 },
    { name: 'Android Studio', level: 80 },
  ],
  iot: [
    { name: 'Arduino', level: 85 },
    { name: 'Raspberry Pi', level: 80 },
    { name: 'MQTT', level: 70 },
    { name: 'C++', level: 75 },
  ],
};

const softSkills = [
  { name: 'Problem-Solving', icon: 'fas fa-brain', description: 'Adept at analyzing complex issues and implementing effective, scalable solutions.' },
  { name: 'Team Collaboration', icon: 'fas fa-users', description: 'Experienced in Agile environments, using tools like Git and Jira for seamless teamwork.' },
  { name: 'Communication', icon: 'fas fa-comments', description: 'Clearly articulating technical concepts to both technical and non-technical stakeholders.' },
  { name: 'Adaptability', icon: 'fas fa-sync-alt', description: 'Quickly learning and applying new technologies to meet project requirements.' },
];

// --- Helper component for the animated skill bars ---
const SkillBar = ({ name, level }) => {
  const variants = {
    initial: { width: 0 },
    animate: {
      width: `${level}%`,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }
    }
  };
  return (
    <div className="mb-4 px-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-gray-700 dark:text-gray-200">{name}</span>
        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

// --- Accordion Item Component ---
const AccordionItem = ({ category, skills, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center p-4 text-left text-xl font-bold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
            >
                <span className="capitalize">{category}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <i className="fas fa-chevron-down text-sm"></i>
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 pb-2">
                            {skills.map(skill => (
                                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Skills = () => {
  const [openAccordion, setOpenAccordion] = useState('frontend');

  const handleAccordionClick = (categoryKey) => {
    setOpenAccordion(openAccordion === categoryKey ? null : categoryKey);
  };

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            My Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">Abilities</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            A look at my technical proficiency and professional strengths.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* --- LEFT COLUMN: HARD SKILLS (with accordion) --- */}
          <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white py-6">Technical Skills</h3>
            <div className="border-t border-gray-200 dark:border-gray-700">
              {Object.entries(technicalSkills).map(([key, skills]) => (
                <AccordionItem
                  key={key}
                  category={key}
                  skills={skills}
                  isOpen={openAccordion === key}
                  onClick={() => handleAccordionClick(key)}
                />
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: SOFT SKILLS --- */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Soft Skills</h3>
            {softSkills.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-purple-500 border-l-4 border-transparent">
                <div className="flex items-center">
                  <div className="text-purple-500 dark:text-purple-400 text-3xl mr-5 flex-shrink-0">
                    <i className={skill.icon}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{skill.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;