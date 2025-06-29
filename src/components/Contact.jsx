import React, { useState, useCallback, useRef } from 'react';
import emailjs from '@emailjs/browser';

const contactInfo = { 
  email: 'hello@gmail.com', 
  phone: '+1 (123) 456-7890', 
  location: 'Depok, West Java, Indonesia' 
};

const socialLinks = [
  { icon: 'fab fa-linkedin-in', href: `https://www.linkedin.com/in/your-linkedin-username` },
  { icon: 'fab fa-github', href: `https://github.com/your-github-username` },
  { icon: 'fab fa-twitter', href: '#' },
];

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
    };

    emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       alert('Message sent successfully!');
       setFormData({ name: '', email: '', message: '' });
    }, (error) => {
       console.log('FAILED...', error);
       alert('Failed to send the message, please try again.');
    })
    .finally(() => {
        setIsSending(false);
    });
  }, [formData]);

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-left max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white text-center">Contact <span className='text-purple-500 dark:text-purple-400'>Me</span></h2>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 text-center">Have a project in mind or want to collaborate? I'm always open to discussing new opportunities. Feel free to send me a message!</p>
          
          <div className="flex flex-col md:flex-row gap-16 bg-gray-100/50 dark:bg-black/20 p-8 rounded-lg shadow-lg backdrop-blur-sm">
            
            {/* --- THIS IS THE MISSING CODE BLOCK --- */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                <InfoItem icon="fas fa-envelope" label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
                <InfoItem icon="fas fa-phone" label="Phone" value={contactInfo.phone} href={`tel:${contactInfo.phone}`} />
                <InfoItem icon="fas fa-map-marker-alt" label="Location" value={contactInfo.location} />
              </div>
              <h3 className="text-xl font-semibold mt-10 mb-4 text-gray-800 dark:text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a key={social.icon} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-2xl">
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            {/* --- END OF MISSING CODE BLOCK --- */}

            {/* Form Side */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
              <form ref={form} onSubmit={handleFormSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} required className="bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5" />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} required className="bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5" />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Your Message</label>
                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleFormChange} required className="bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"></textarea>
                </div>
                <button type="submit" disabled={isSending} className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex items-center justify-center disabled:opacity-50">
                  {isSending ? 'Sending...' : 'Send Message'}
                  <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// This sub-component is required for the contact info to display
const InfoItem = ({ icon, label, value, href }) => (
    <div className="flex items-center space-x-4">
        <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full"><i className={`${icon} text-xl text-purple-600 dark:text-purple-400`}></i></div>
        <div>
            <p className="text-gray-600 dark:text-gray-400">{label}</p>
            {href ? (
                <a href={href} className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors">{value}</a>
            ) : (
                <p className="text-gray-800 dark:text-white">{value}</p>
            )}
        </div>
    </div>
);


export default Contact;