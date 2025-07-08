import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { prototypes } from './Portfolio';

const ProjectDetailPage = ({ theme, toggleTheme }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = prototypes.find(p => p.id === parseInt(projectId));

  const currentIndex = prototypes.findIndex(p => p.id === parseInt(projectId));
  const previousProject = currentIndex > 0 ? prototypes[currentIndex - 1] : null;
  const nextProject = currentIndex < prototypes.length - 1 ? prototypes[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-lg text-purple-600 dark:text-purple-400 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
        
        <div className="mb-8">
            <Link 
              to="/"
              className="text-lg font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-2"
            >
              <i className="fas fa-arrow-left"></i>
              Back to Portfolio
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg object-cover shadow-2xl" />
          </div>
          <div className="md:col-span-1 flex flex-col">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 flex-grow">{project.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              {project.link && project.link !== '#' && (
                 <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-md hover:from-purple-700 hover:to-indigo-700 transition duration-300 flex items-center justify-center"
                >
                  Visit Live Site
                </a>
              )}
              {project.repoUrl && project.repoUrl !== '#' && (
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center bg-gray-800 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white transition duration-300 flex items-center justify-center gap-2"
                >
                  <i className="fab fa-github"></i>
                  Repository
                </a>
              )}
            </div>

          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div>
            {previousProject && (
              <Link to={`/project/${previousProject.id}`} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                <i className="fas fa-chevron-left mr-2"></i>
                <span className="font-bold">Previous Project</span>
                <p className="text-sm text-gray-500">{previousProject.title}</p>
              </Link>
            )}
          </div>
          
          <div className="text-right">
            {nextProject && (
              <Link to={`/project/${nextProject.id}`} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                <span className="font-bold">Next Project</span>
                <i className="fas fa-chevron-right ml-2"></i>
                <p className="text-sm text-gray-500">{nextProject.title}</p>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;