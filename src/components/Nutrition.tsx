import React, { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';

export const Nutrition: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
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
  
  const nutritionInfo = {
    calories: 120,
    protein: 2,
    carbs: 26,
    sugar: 22,
    fat: 0.5,
    fiber: 3
  };
  
  const benefits = [
    "Boosts immune system",
    "Improves digestion",
    "Increases energy levels",
    "Helps detoxify the body",
    "Rich in antioxidants",
    "Supports skin health"
  ];

  return (
    <section id="nutrition" className="section bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="stagger-children">
          <h2 className="section-title">Nutrition Transparency</h2>
          <p className="section-subtitle">
            We believe in complete transparency about what's in our juices. 
            Explore the nutritional content and health benefits of each of our products.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Select a Juice</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className={`w-full flex items-center p-3 rounded-lg transition-all ${
                        selectedProduct.id === product.id
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-12 h-12 object-cover rounded-md mr-3"
                      />
                      <div className="text-left">
                        <div className="font-medium">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.category}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="glass-card p-8">
                <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full sm:w-48 h-48 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
                    <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                    <div className="text-sm text-gray-700">
                      <strong>Ingredients:</strong> {selectedProduct.ingredients.join(', ')}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Nutrition Facts</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="p-4 border-b bg-gray-50">
                        <div className="text-lg font-bold">Serving Size: 12 fl oz</div>
                      </div>
                      
                      <div className="divide-y">
                        {Object.entries(nutritionInfo).map(([key, value]) => (
                          <div key={key} className="p-3 flex justify-between">
                            <div className="capitalize">{key}</div>
                            <div className="font-semibold">
                              {value}
                              {key === 'calories' ? '' : 'g'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Health Benefits</h4>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="rounded-full bg-green-100 p-1 mr-3 mt-0.5">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="text-lg font-semibold mb-3">Dietary Information</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Vegan', 'Gluten-Free', 'No Added Sugar', 'Non-GMO'].map((diet) => (
                          <span key={diet} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                            {diet}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};