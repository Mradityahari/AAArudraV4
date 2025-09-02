import React from 'react';
import { Settings, Wrench, GraduationCap, FileText, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Settings className="h-12 w-12" />,
      title: 'Managed Operations',
      description: 'End-to-end drone operations management with certified pilots and equipment',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Certified pilot deployment',
        'Equipment management',
        'Mission planning & execution',
        'Real-time monitoring',
        'Data processing & delivery',
        'Compliance management'
      ],
      benefits: [
        'No upfront investment',
        'Immediate deployment',
        'Expert operations',
        'Guaranteed results'
      ]
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: 'AMC & Repairs',
      description: 'Comprehensive maintenance and repair services to keep your fleet operational',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Preventive maintenance',
        'Emergency repairs',
        'Genuine spare parts',
        'Firmware updates',
        'Performance optimization',
        '24/7 support hotline'
      ],
      benefits: [
        '99% uptime guarantee',
        'Fast turnaround',
        'Cost-effective',
        'Extended warranty'
      ]
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: 'DGCA Training',
      description: 'Comprehensive pilot training programs aligned with DGCA regulations',
      image: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'DGCA-certified courses',
        'Practical flight training',
        'Simulator sessions',
        'Regulatory compliance',
        'Continuing education',
        'Certification support'
      ],
      benefits: [
        'Industry certification',
        'Expert instructors',
        'Hands-on training',
        'Job placement support'
      ]
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: 'Regulatory Advisory',
      description: 'Navigate complex drone regulations with expert guidance and compliance support',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Regulatory consultation',
        'Permit assistance',
        'Compliance audits',
        'Documentation support',
        'Policy updates',
        'Risk assessment'
      ],
      benefits: [
        'Regulatory compliance',
        'Risk mitigation',
        'Expert guidance',
        'Time savings'
      ]
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: 'Custom R&D',
      description: 'Tailored research and development for specialized drone applications',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Custom development',
        'Prototype building',
        'Testing & validation',
        'Technology integration',
        'Performance optimization',
        'IP development'
      ],
      benefits: [
        'Innovative solutions',
        'Competitive advantage',
        'Tailored technology',
        'IP ownership'
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support services to maximize your drone investment and operational efficiency
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl text-white mb-6">
                    {service.icon}
                  </div>
                  
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                      Request Quote
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Custom Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of experts can design tailored service packages to meet your specific operational requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 shadow-lg">
              Discuss Custom Solutions
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Download Services Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;