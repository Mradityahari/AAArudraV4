import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Bone as Drone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Products',
      href: '/products',
      dropdown: [
        { name: 'Agri Drones', href: '/products/agriculture' },
        { name: 'Survey & Mapping', href: '/products/surveying' },
        { name: 'Inspection Drones', href: '/products/inspection' },
        { name: 'Payloads', href: '/products/payloads' },
        { name: 'Accessories', href: '/products/accessories' }
      ]
    },
    {
      name: 'Platform',
      href: '/platform',
      dropdown: [
        { name: 'Overview', href: '/platform' },
        { name: 'Mapping Suite', href: '/platform/mapping' },
        { name: 'Fleet Management', href: '/platform/fleet' },
        { name: 'Compliance', href: '/platform/compliance' },
        { name: 'Pricing', href: '/platform/pricing' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Agriculture', href: '/solutions/agriculture' },
        { name: 'Mining', href: '/solutions/mining' },
        { name: 'Solar', href: '/solutions/solar' },
        { name: 'Utilities', href: '/solutions/utilities' },
        { name: 'Construction', href: '/solutions/construction' },
        { name: 'Oil & Gas', href: '/solutions/oil-gas' },
        { name: 'Public Safety', href: '/solutions/public-safety' }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Managed Operations', href: '/services/managed-ops' },
        { name: 'AMC & Repairs', href: '/services/amc' },
        { name: 'Training', href: '/services/training' },
        { name: 'R&D Services', href: '/services/rd' }
      ]
    },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Support', href: '/support' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg group-hover:scale-105 transition-transform">
              <Drone className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">AAARUDRA</span>
              <p className="text-xs text-gray-600 hidden sm:block">Aerial intelligence. Real results.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    location.pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              Book Demo
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 shadow-md hover:shadow-lg">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors border border-blue-600 rounded-lg">
                Book Demo
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;