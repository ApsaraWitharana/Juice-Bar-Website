import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.querySelectorAll('.stagger-children')[0].classList.add('animate');
    }
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen pt-28 pb-20 flex items-center relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(74, 222, 128, 0.2), transparent)',
      }}
    >
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="stagger-children">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              Fresh • Organic • Healthy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revitalize Your Day With Fresh Pressed Juice
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Handcrafted juices made with organic ingredients. Boost your energy, 
              support your immune system, and enjoy the delicious taste of nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="btn-primary">
                Explore Our Menu <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#nutrition" className="btn-outline">
                Nutrition Facts
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src="https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fresh juice in glass bottles" 
                className="rounded-2xl shadow-2xl max-w-md mx-auto"
              />
            </div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-green-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { number: '100%', text: 'Fresh Organic Ingredients' },
            { number: '30+', text: 'Unique Juice Recipes' },
            { number: '3', text: 'Cleanse Programs' },
            { number: '1000+', text: 'Happy Customers Daily' },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};