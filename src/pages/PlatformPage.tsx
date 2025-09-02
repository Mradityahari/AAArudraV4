import React from 'react';
import { Cloud, Map, Users, Shield, Zap, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const PlatformPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                <Cloud className="h-5 w-5" />
                <span className="font-medium">AAArudra Cloud Platform</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Complete Aerial Data Platform
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From mission planning to data delivery - manage your entire drone operations workflow 
                with enterprise-grade security and 24-hour turnaround promise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <img
                  src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Platform Dashboard"
                  className="w-full rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                  24hr Turnaround
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Workflow Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to plan, execute, and analyze drone missions in one integrated platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Map className="h-8 w-8" />,
                title: 'Mission Planning',
                description: 'Intelligent flight path optimization with weather integration and regulatory compliance checks',
                features: ['Automated flight plans', 'Weather integration', 'Regulatory compliance', 'Route optimization']
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Fleet Management',
                description: 'Monitor and manage your entire drone fleet with real-time status, maintenance tracking, and pilot coordination',
                features: ['Real-time tracking', 'Maintenance schedules', 'Pilot management', 'Asset optimization']
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Compliance Center',
                description: 'Ensure regulatory compliance with automated documentation, audit trails, and certification management',
                features: ['Audit trails', 'DGCA compliance', 'Documentation', 'Certification tracking']
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: 'Data Processing',
                description: 'AI-powered image processing for orthomosaic generation, 3D modeling, and analytical insights',
                features: ['Orthomosaic maps', '3D point clouds', 'DSM/DTM generation', 'AI analytics']
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: '24hr Delivery',
                description: 'Guaranteed data delivery within 24 hours with multiple output formats and quality assurance',
                features: ['Fast processing', 'Quality assurance', 'Multiple formats', 'Delivery tracking']
              },
              {
                icon: <Cloud className="h-8 w-8" />,
                title: 'Cloud Storage',
                description: 'Secure cloud storage with enterprise-grade security, backup, and collaboration features',
                features: ['Secure storage', 'Team collaboration', 'Version control', 'API access']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intuitive Dashboard Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor your operations, track performance, and access insights through our user-friendly interface
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <img
              src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Platform Dashboard"
              className="w-full rounded-xl shadow-lg mb-8"
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24hrs</div>
                <div className="text-gray-600">Data Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">256bit</div>
                <div className="text-gray-600">SSL Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your operational needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹9,999',
                period: '/month',
                description: 'Perfect for small operations',
                features: ['5 missions/month', 'Basic processing', 'Email support', '7-day data retention'],
                cta: 'Start Free Trial',
                popular: false
              },
              {
                name: 'Professional',
                price: '₹24,999',
                period: '/month',
                description: 'Ideal for growing businesses',
                features: ['25 missions/month', 'Advanced processing', 'Priority support', '30-day data retention', 'API access'],
                cta: 'Start Free Trial',
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For large-scale operations',
                features: ['Unlimited missions', 'Custom processing', 'Dedicated support', 'Unlimited storage', 'On-premise option'],
                cta: 'Contact Sales',
                popular: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white hover:from-blue-700 hover:to-green-600 shadow-lg hover:shadow-xl'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;