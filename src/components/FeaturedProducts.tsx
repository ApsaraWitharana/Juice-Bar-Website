import React, { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const FeaturedProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  
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
  
  const categories = [
    { id: 'all', name: 'All Juices' },
    { id: 'fruit', name: 'Fruit Juices' },
    { id: 'vegetable', name: 'Vegetable Juices' },
    { id: 'smoothie', name: 'Smoothies' },
    { id: 'cleanse', name: 'Cleanses' },
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="menu" className="section bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="stagger-children">
          <h2 className="section-title">Our Premium Juice Selection</h2>
          <p className="section-subtitle">
            Discover our handcrafted juices made fresh daily with organic ingredients. 
            Each bottle is packed with nutrients to fuel your body and mind.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="card group overflow-hidden h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm font-medium mb-2">{product.ingredients.join(', ')}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-1 text-xs">
                      {product.tags.map((tag, idx) => (
                        <span key={idx} className="inline-block px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="ml-auto btn-primary py-1 px-3 text-sm"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#contact" className="btn-outline">
              View Full Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};