import React, { useState } from 'react';
import { Users, Award, Globe, TrendingUp, CheckCircle, Star } from 'lucide-react';

const PartnershipsPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    gstin: '',
    region: '',
    fleetSize: '',
    serviceCapabilities: [],
    experience: '',
    message: ''
  });

  const partnerTiers = [
    {
      tier: 'Authorized Dealer',
      icon: <Users className="h-8 w-8" />,
      description: 'Entry-level partnership for local market presence',
      requirements: [
        'Valid business registration',
        'Technical support capability',
        'Local market presence',
        'Basic training completion'
      ],
      benefits: [
        'Product discounts up to 15%',
        'Marketing support',
        'Technical training',
        'Lead generation support'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      tier: 'Premium Partner',
      icon: <Award className="h-8 w-8" />,
      description: 'Advanced partnership with enhanced benefits and support',
      requirements: [
        'Proven sales track record',
        'Service center capability',
        'Regional coverage',
        'Advanced certification'
      ],
      benefits: [
        'Product discounts up to 25%',
        'Co-marketing opportunities',
        'Priority support',
        'Exclusive territory rights'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      tier: 'Strategic Alliance',
      icon: <Globe className="h-8 w-8" />,
      description: 'Elite partnership for market leaders and technology integrators',
      requirements: [
        'Market leadership position',
        'R&D capabilities',
        'Multi-state presence',
        'Technology integration'
      ],
      benefits: [
        'Product discounts up to 35%',
        'Joint product development',
        'Executive relationship',
        'Global expansion support'
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Partnership Program
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join our growing network of authorized dealers and partners to bring cutting-edge drone solutions to your region
          </p>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership level that aligns with your business goals and capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-r ${tier.color} p-6 text-white`}>
                  <div className="flex items-center space-x-3 mb-4">
                    {tier.icon}
                    <h3 className="text-xl font-bold">{tier.tier}</h3>
                  </div>
                  <p className="text-white/90">{tier.description}</p>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                    <div className="space-y-2">
                      {tier.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-700">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <div className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 transform group-hover:scale-105">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-600">
              Fill out this form to start your partnership journey with AAARUDRA
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GSTIN *
                  </label>
                  <input
                    type="text"
                    name="gstin"
                    required
                    value={formData.gstin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Region *
                  </label>
                  <select
                    name="region"
                    required
                    value={formData.region}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Region</option>
                    <option value="north">North India</option>
                    <option value="south">South India</option>
                    <option value="east">East India</option>
                    <option value="west">West India</option>
                    <option value="central">Central India</option>
                    <option value="northeast">Northeast India</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Fleet Size
                  </label>
                  <select
                    name="fleetSize"
                    value={formData.fleetSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Fleet Size</option>
                    <option value="0">No existing fleet</option>
                    <option value="1-5">1-5 drones</option>
                    <option value="6-15">6-15 drones</option>
                    <option value="16-50">16-50 drones</option>
                    <option value="50+">50+ drones</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Experience</option>
                    <option value="new">New to drone industry</option>
                    <option value="basic">1-2 years experience</option>
                    <option value="intermediate">3-5 years experience</option>
                    <option value="advanced">5+ years experience</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Capabilities (Check all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                  {['Sales', 'Training', 'Repairs', 'Data Processing', 'Pilot Services', 'Consultation'].map((capability) => (
                    <label key={capability} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{capability}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business goals, target markets, and any specific requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Save as Draft
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with AAARUDRA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join India's fastest-growing drone technology company and accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8 text-green-600" />,
                title: 'Market Growth',
                description: 'Tap into the rapidly expanding drone market worth ₹30,000 crores by 2026',
                stat: '40% CAGR'
              },
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: 'Quality Products',
                description: 'Industry-leading drone technology with proven reliability and performance',
                stat: '99.5% Uptime'
              },
              {
                icon: <Users className="h-8 w-8 text-red-600" />,
                title: 'Expert Support',
                description: 'Comprehensive training, marketing, and technical support from our team',
                stat: '24/7 Support'
              },
              {
                icon: <Globe className="h-8 w-8 text-green-600" />,
                title: 'Market Access',
                description: 'Access to enterprise clients and government contracts across industries',
                stat: '500+ Clients'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-blue-600">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our partners are growing their businesses with AAARUDRA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'TechWings Solutions',
                location: 'Mumbai, Maharashtra',
                growth: '300% revenue growth',
                story: 'Expanded from 2 to 25 employees and established 3 regional offices within 18 months of partnership.',
                avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
              },
              {
                name: 'AeroVision Systems',
                location: 'Hyderabad, Telangana',
                growth: '250% client base increase',
                story: 'Secured major mining and solar contracts, becoming the regional leader in aerial surveying services.',
                avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600">{story.location}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-green-600 mb-3">{story.growth}</div>
                <p className="text-gray-700 leading-relaxed mb-6">"{story.story}"</p>
                
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 group">
                  <span>Read Full Story</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipsPage;