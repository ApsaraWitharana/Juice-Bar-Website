import React, { useEffect, useRef } from 'react';
import { Leaf, Droplets, ThumbsUp } from 'lucide-react';

export const About: React.FC = () => {
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
  
  return (
    <section id="about" className="section bg-green-50" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our juice bar" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute top-10 -right-10 md:right-10 w-60 h-60 rounded-2xl transform rotate-12 border-8 border-white shadow-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fresh produce" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-5 md:left-10 w-48 h-48 rounded-full border-8 border-white shadow-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/162825/healthy-food-fruit-grapes-162825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fresh fruits" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="stagger-children">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Fresh, Organic, and Full of Life</h2>
            <p className="text-gray-600 mb-6">
              At JuiceBar, we believe that what you put into your body matters. That's why we source only the freshest, 
              organic ingredients for our juices, supporting local farmers whenever possible.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey began in 2018 with a simple mission: to provide delicious, nutrient-rich juices that help people 
              feel their best every day. Since then, we've expanded to multiple locations while maintaining our commitment 
              to quality and sustainability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <Leaf className="w-8 h-8 text-green-500 mb-4" />,
                  title: "Organic",
                  description: "100% organic ingredients, locally sourced when possible"
                },
                {
                  icon: <Droplets className="w-8 h-8 text-green-500 mb-4" />,
                  title: "Cold-Pressed",
                  description: "Maximum nutrition preserved through cold-pressing"
                },
                {
                  icon: <ThumbsUp className="w-8 h-8 text-green-500 mb-4" />,
                  title: "No Additives",
                  description: "No preservatives, sugars, or artificial ingredients"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};