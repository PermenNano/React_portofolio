import React from 'react';
import { useNavigate } from 'react-router-dom';
import FadeInSection from './FadeInSection';

const certificates = [
  { id: 'cert1', image: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Certificate+1', title: 'Advanced React Development', issuer: 'React Institute', date: 'June 2023' },
  { id: 'cert2', image: 'https://via.placeholder.com/300/C70039/FFFFFF?text=Certificate+2', title: 'UI/UX Design Mastery', issuer: 'Design Academy', date: 'March 2023' },
  { id: 'cert3', image: 'https://via.placeholder.com/300/900C3F/FFFFFF?text=Certificate+3', title: 'Cloud Architecture', issuer: 'Cloud Experts', date: 'January 2023' },
];

const CertificatesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Portfolio
        </button>

        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
          <FadeInSection>My Certificates</FadeInSection>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map(cert => (
            <FadeInSection key={cert.id}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    <span className="font-semibold">Issuer:</span> {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold">Date:</span> {cert.date}
                  </p>
                  <a 
                    href={cert.image} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    View Full Certificate
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;