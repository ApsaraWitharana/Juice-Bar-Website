import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';


export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Nutrition', href: '#nutrition' },
    { name: 'Locations', href: '#locations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              JuiceBar
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-green-500' : 'text-gray-800 hover:text-green-500'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              className="btn-outline py-2 px-4 relative"

            >
              <ShoppingBag className="w-5 h-5 mr-2" />

            </button>
          </div>

          <button
            className="md:hidden text-gray-500 hover:text-gray-700 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 transform ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-green-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <button 
              className="btn-outline w-full py-2 justify-center"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />

            </button>
          </div>
        </div>
      </header>

    </>
  );
};