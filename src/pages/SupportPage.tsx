import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, FileText, MapPin, MessageCircle } from 'lucide-react';

const SupportPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the warranty period for AAARUDRA drones?',
      answer: 'All AAARUDRA drones come with a comprehensive 2-year warranty covering manufacturing defects, hardware failures, and software issues. Extended warranty options are available for up to 5 years.'
    },
    {
      question: 'How do I register for DGCA training?',
      answer: 'You can register for our DGCA-certified training programs through our training portal. We offer both online theory classes and hands-on practical training at our certified facilities across India.'
    },
    {
      question: 'What is the typical data delivery timeframe?',
      answer: 'We guarantee data delivery within 24 hours for standard processing. Complex analytics and custom processing may take 48-72 hours depending on the project scope.'
    },
    {
      question: 'Do you provide on-site technical support?',
      answer: 'Yes, we offer on-site technical support through our network of certified technicians. Emergency support is available 24/7 for critical operations.'
    },
    {
      question: 'Can I integrate AAARUDRA Cloud with existing systems?',
      answer: 'Absolutely! Our platform offers comprehensive APIs and integrations with popular GIS software, ERP systems, and custom applications. Our technical team can assist with integration planning.'
    },
    {
      question: 'What are the regulatory requirements for commercial drone operations?',
      answer: 'Commercial drone operations in India require DGCA certification, operator permits, and compliance with airspace regulations. We provide complete regulatory advisory services to ensure compliance.'
    }
  ];

  const supportCategories = [
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: 'Knowledge Base',
      description: 'Comprehensive guides, tutorials, and documentation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Warranty Registration',
      description: 'Register your products and access warranty services',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Dealer Locator',
      description: 'Find authorized dealers and service centers near you',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Contact Support',
      description: 'Get in touch with our technical support team',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Support Hub
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Get the help you need with our comprehensive support resources and expert assistance
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mb-6 group-hover:scale-110 transition-transform text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions about our products and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-colors">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-600">
              Our support team is here to assist you with any questions or technical issues
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Technical Support',
                description: 'Get help with product issues, software problems, and technical questions',
                action: 'Open Ticket',
                color: 'from-blue-600 to-blue-700'
              },
              {
                title: 'Sales Inquiries',
                description: 'Questions about products, pricing, or custom solutions',
                action: 'Contact Sales',
                color: 'from-green-600 to-green-700'
              },
              {
                title: 'Training Support',
                description: 'Help with training programs, certification, and course materials',
                action: 'Training Help',
                color: 'from-red-600 to-red-700'
              }
            ].map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{contact.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{contact.description}</p>
                <button className={`w-full px-6 py-3 bg-gradient-to-r ${contact.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200`}>
                  {contact.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;