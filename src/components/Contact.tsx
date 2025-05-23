import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.querySelectorAll('.stagger-children')[0].classList.add('animate');
          }
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-green-50" ref={sectionRef}>
      <div className="container-custom">
        <div className="stagger-children">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions or feedback? We'd love to hear from you. 
            Reach out using the form below or connect with us on social media.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800">
                  Thank you for your message! We'll get back to you shortly.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-800">
                  Something went wrong. Please try again later.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </button>
              </form>
            </div>
            
            <div>
              <div className="glass-card p-8 mb-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">Email Us</div>
                      <a href="mailto:hello@juicebar.com" className="text-green-600 hover:underline">
                        hello@juicebar.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">Live Chat</div>
                      <div className="text-gray-600">
                        Available 9am-6pm, Monday to Friday
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                      { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
                      { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 p-3 rounded-full transition-colors"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter for seasonal promotions, health tips, and more.
                </p>
                
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="btn-primary rounded-l-none"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};