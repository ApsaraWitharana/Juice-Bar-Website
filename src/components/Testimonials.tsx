import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
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
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fitness Instructor",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "I've been starting my mornings with JuiceBar's Green Machine for the past 6 months, and I've never felt better! My energy levels are through the roof, and my clients have noticed the difference in my training sessions.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Software Developer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "As someone who spends hours in front of a computer, I needed something to boost my focus and energy. JuiceBar's Brain Boost smoothie has become my afternoon ritual. It's delicious and keeps me productive throughout the day.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Yoga Instructor",
      image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "The Detox Cleanse program at JuiceBar has been transformative for my practice and my students. The quality of ingredients and the attention to nutritional balance is unmatched. Highly recommended!",
      rating: 5
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-gradient-to-b from-green-50 to-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="stagger-children">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our community of juice lovers
            who have experienced the benefits of our products.
          </p>
          
          <div className="mt-12 relative">
            <div className="max-w-4xl mx-auto">
              <div 
                ref={testimonialRef}
                className="overflow-hidden relative"
              >
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id}
                      className="min-w-full px-4"
                    >
                      <div className="glass-card p-8 md:p-12 text-center">
                        <div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-md">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        
                        <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6">
                          "{testimonial.text}"
                        </blockquote>
                        
                        <div className="font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-green-600">{testimonial.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeIndex === index ? 'bg-green-500 w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4">
                <button
                  onClick={prevTestimonial}
                  className="bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-green-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-green-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};