import React from 'react';
import { Link } from 'react-router-dom';
import { Bone as Drone, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
                <Drone className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">AAARUDRA</span>
                <p className="text-sm text-gray-400">Aerial intelligence. Real results.</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of enterprise drone solutions and aerial data platforms for agriculture, 
              mining, utilities, and industrial applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products & Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products & Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Drone Catalog</Link></li>
              <li><Link to="/platform" className="text-gray-300 hover:text-white transition-colors">AAArudra Cloud</Link></li>
              <li><Link to="/solutions/agriculture" className="text-gray-300 hover:text-white transition-colors">Agriculture</Link></li>
              <li><Link to="/solutions/mining" className="text-gray-300 hover:text-white transition-colors">Mining</Link></li>
              <li><Link to="/solutions/solar" className="text-gray-300 hover:text-white transition-colors">Solar</Link></li>
              <li><Link to="/solutions/utilities" className="text-gray-300 hover:text-white transition-colors">Utilities</Link></li>
              <li><Link to="/solutions/construction" className="text-gray-300 hover:text-white transition-colors">Construction</Link></li>
            </ul>
          </div>

          {/* Services & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/training" className="text-gray-300 hover:text-white transition-colors">DGCA Training</Link></li>
              <li><Link to="/services/amc" className="text-gray-300 hover:text-white transition-colors">AMC & Repairs</Link></li>
              <li><Link to="/services/managed-ops" className="text-gray-300 hover:text-white transition-colors">Managed Operations</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white transition-colors">Become a Dealer</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-white transition-colors">Knowledge Base</Link></li>
              <li><Link to="/support/warranty" className="text-gray-300 hover:text-white transition-colors">Warranty Registration</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">info@aaarudra.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-300">Innovation Hub, Bangalore, India</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>ISO 9001:2015 Certified</span>
              <span>DGCA Approved</span>
              <span>Make in India</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>&copy; 2025 AAARUDRA. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;