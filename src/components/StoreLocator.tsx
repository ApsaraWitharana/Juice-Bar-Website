import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export const StoreLocator: React.FC = () => {
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
  
  const locations = [
    {
      id: 1,
      name: "Downtown",
      address: "123 Main Street, City Center",
      hours: "Mon-Fri: 7am-7pm, Sat-Sun: 8am-6pm",
      phone: "(555) 123-4567",
      image: "https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      maps_url: "https://maps.google.com/?q=123+Main+Street+City+Center"
    },
    {
      id: 2,
      name: "Westside",
      address: "456 Ocean Avenue, Westside District",
      hours: "Mon-Fri: 7am-7pm, Sat-Sun: 8am-6pm",
      phone: "(555) 987-6543",
      image: "https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      maps_url: "https://maps.google.com/?q=456+Ocean+Avenue+Westside+District"
    },
    {
      id: 3,
      name: "Northside Mall",
      address: "789 Shopping Center Blvd, Northside",
      hours: "Mon-Sun: 10am-9pm",
      phone: "(555) 456-7890",
      image: "https://images.pexels.com/photos/279574/pexels-photo-279574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      maps_url: "https://maps.google.com/?q=789+Shopping+Center+Blvd+Northside"
    }
  ];

  const handleGetDirections = (mapsUrl: string) => {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="locations" className="section bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="stagger-children">
          <h2 className="section-title">Find a JuiceBar Near You</h2>
          <p className="section-subtitle">
            Visit one of our convenient locations to experience the freshest juices and smoothies.
            Each of our stores offers the same high-quality products and friendly service.
          </p>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.id} className="card h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={location.image}
                    alt={`${location.name} location`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg py-1 px-3">
                    <span className="font-medium text-green-600">{location.name}</span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{location.address}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{location.hours}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{location.phone}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleGetDirections(location.maps_url)}
                    className="btn-primary w-full mt-6"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="max-w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              {/* Replace with an actual map component in a production environment */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl text-gray-400 mb-4">
                    <MapPin className="w-12 h-12 mx-auto" />
                  </div>
                  <p className="text-gray-600">Interactive map would be displayed here</p>
                  <p className="text-sm text-gray-500 mt-2">Showing all 3 JuiceBar locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};