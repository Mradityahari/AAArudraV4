import React from 'react';
import { Leaf, Mountain, Sun, Zap, Building, Droplets, Shield, TreePine } from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      icon: <Leaf className="h-12 w-12" />,
      title: 'Agriculture',
      description: 'Precision farming solutions with crop monitoring, spraying, and yield optimization',
      image: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['30% yield increase', 'Pesticide reduction', 'Real-time monitoring'],
      href: '/solutions/agriculture'
    },
    {
      icon: <Mountain className="h-12 w-12" />,
      title: 'Mining',
      description: 'Volumetric analysis, safety monitoring, and environmental compliance solutions',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['95% accuracy', 'Safety protocols', 'Environmental monitoring'],
      href: '/solutions/mining'
    },
    {
      icon: <Sun className="h-12 w-12" />,
      title: 'Solar',
      description: 'Panel inspection, thermal analysis, and performance optimization',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Defect detection', 'Performance insights', 'Maintenance optimization'],
      href: '/solutions/solar'
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'Utilities',
      description: 'Power line inspection, vegetation management, and infrastructure monitoring',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Outage prevention', 'Safety compliance', 'Predictive maintenance'],
      href: '/solutions/utilities'
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: 'Construction',
      description: 'Site surveying, progress monitoring, and quality assurance',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Progress tracking', 'Cost control', 'Quality assurance'],
      href: '/solutions/construction'
    },
    {
      icon: <Droplets className="h-12 w-12" />,
      title: 'Oil & Gas',
      description: 'Pipeline inspection, leak detection, and facility monitoring',
      image: 'https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Leak detection', 'Safety compliance', 'Asset monitoring'],
      href: '/solutions/oil-gas'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Public Safety',
      description: 'Emergency response, search & rescue, and crowd monitoring',
      image: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Rapid response', 'Real-time intelligence', 'Enhanced safety'],
      href: '/solutions/public-safety'
    },
    {
      icon: <TreePine className="h-12 w-12" />,
      title: 'Forestry',
      description: 'Forest health monitoring, fire detection, and conservation planning',
      image: 'https://images.pexels.com/photos/441174/pexels-photo-441174.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Fire detection', 'Health monitoring', 'Conservation insights'],
      href: '/solutions/forestry'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored drone solutions designed to address specific challenges across diverse industries, 
            delivering measurable results and operational excellence.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-3"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white">
                    {solution.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 transform group-hover:scale-105 shadow-md hover:shadow-lg">
                    Explore Solution
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our experts help you design the perfect drone solution for your specific industry needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Download Solutions Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;