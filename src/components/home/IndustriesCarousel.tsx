import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Mountain, Sun, Zap, Building, Droplets, Shield, TreePine } from 'lucide-react';

interface Industry {
  icon: React.ReactNode;
  name: string;
  description: string;
  benefits: string[];
  image: string;
}

const industries: Industry[] = [
  {
    icon: <Leaf className="h-12 w-12" />,
    name: 'Agriculture',
    description: 'Precision crop monitoring, pest detection, and automated spraying solutions',
    benefits: ['30% yield increase', '50% pesticide reduction', 'Real-time crop health'],
    image: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: <Mountain className="h-12 w-12" />,
    name: 'Mining',
    description: 'Volumetric analysis, safety monitoring, and environmental compliance',
    benefits: ['95% survey accuracy', '80% time savings', 'Enhanced safety protocols'],
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: <Sun className="h-12 w-12" />,
    name: 'Solar',
    description: 'Panel inspection, thermal analysis, and maintenance optimization',
    benefits: ['Defect detection', 'Performance optimization', 'Reduced downtime'],
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: <Zap className="h-12 w-12" />,
    name: 'Utilities',
    description: 'Power line inspection, vegetation management, and infrastructure monitoring',
    benefits: ['Preventive maintenance', 'Outage reduction', 'Safety compliance'],
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: <Building className="h-12 w-12" />,
    name: 'Construction',
    description: 'Site surveying, progress monitoring, and quality assurance',
    benefits: ['Project tracking', 'Cost control', 'Timeline optimization'],
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: <Droplets className="h-12 w-12" />,
    name: 'Oil & Gas',
    description: 'Pipeline inspection, leak detection, and facility monitoring',
    benefits: ['Early leak detection', 'Safety compliance', 'Environmental protection'],
    image: 'https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: <Shield className="h-12 w-12" />,
    name: 'Public Safety',
    description: 'Emergency response, search & rescue, and crowd monitoring',
    benefits: ['Rapid deployment', 'Real-time intel', 'Enhanced response'],
    image: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: <TreePine className="h-12 w-12" />,
    name: 'Forestry',
    description: 'Forest health monitoring, fire detection, and conservation planning',
    benefits: ['Early fire detection', 'Health assessment', 'Conservation insights'],
    image: 'https://images.pexels.com/photos/441174/pexels-photo-441174.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const IndustriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(industries.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(industries.length / 3)) % Math.ceil(industries.length / 3));
  };

  const visibleIndustries = industries.slice(currentIndex * 3, (currentIndex * 3) + 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored drone solutions for diverse sectors, delivering measurable results across industries
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white">
                      {industry.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2 mb-4">
                    {industry.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 transform group-hover:scale-105">
                    Learn More
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-500/10 pointer-events-none transition-all duration-300"></div>
                )}
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(industries.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCarousel;