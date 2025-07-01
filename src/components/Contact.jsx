import React, { useState, useCallback, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// --- DATA (You can customize your details here) ---
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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
        'service_90xp2lf',
        'template_jtdclkp',
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        'mILxhvMUMYIyj23EC'
    )
    .then(() => {
        setShowSuccess(true); 
        setFormData({ name: '', email: '', message: '' });
    }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send the message, please try again.');
    })
    .finally(() => {
        setIsSending(false);
    });
  }, [formData]);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => { setShowSuccess(false); }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);


  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
      
      {/* --- Success Modal --- */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${showSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-8 sm:p-12 text-center transform transition-all duration-300 ease-in-out ${showSuccess ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="w-20 h-20 bg-green-100 dark:bg-green-800/50 rounded-full mx-auto flex items-center justify-center mb-6">
            <i className="fas fa-check text-4xl text-green-500 dark:text-green-400"></i>
          </div>
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Thank You!</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Your message has been sent successfully.</p>
          <p className="text-xs text-gray-400 dark:text-gray-500">(This will close automatically)</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Get In <span className="text-purple-500 dark:text-purple-400">Touch</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* --- Contact Info Side --- */}
          <div className="space-y-8">
            <InfoItem icon="fas fa-envelope" label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
            <InfoItem icon="fas fa-phone" label="Phone" value={contactInfo.phone} href={`tel:${contactInfo.phone}`} />
            <InfoItem icon="fas fa-map-marker-alt" label="Location" value={contactInfo.location} />

            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Connect With Me</h3>
                <div className="flex space-x-6">
                    {socialLinks.map(social => (
                        <a key={social.icon} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-transform duration-300 hover:scale-110 text-3xl">
                            <i className={social.icon}></i>
                        </a>
                    ))}
                </div>
            </div>
          </div>

          {/* --- Form Side --- */}
          {/* UPDATED THIS LINE for new background color and border radius */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
            <form ref={form} onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} required className="form-input" placeholder="e.g., Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} required className="form-input" placeholder="e.g., jane.doe@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleFormChange} required className="form-input" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" disabled={isSending} className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-lg text-md px-5 py-3 text-center flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300">
                {isSending ? 'Sending...' : 'Send Message'}
                <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- A more attractive InfoItem sub-component ---
const InfoItem = ({ icon, label, value, href }) => (
    <a href={href || '#'} target={href ? '_blank' : '_self'} rel="noopener noreferrer" className="flex items-center p-4 rounded-lg transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 group">
        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110">
            <i className={icon}></i>
        </div>
        <div className="ml-4">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{label}</p>
            <p className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{value}</p>
        </div>
    </a>
);

export default Contact;