import React from 'react';
import { Eye, Download, ShoppingCart, Star, Zap, Shield, Clock } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
  rating: number;
  reviews: number;
  features: string[];
  specs: {
    flightTime: string;
    maxSpeed: string;
    payload: string;
    range: string;
  };
  industries: string[];
}

const products: Product[] = [
  {
    id: '1',
    name: 'AgroMax Pro X1',
    category: 'Agriculture',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: '₹4,99,000',
    rating: 4.8,
    reviews: 127,
    features: ['Precision Spraying', 'Multispectral Camera', 'RTK GPS', 'Auto Navigation'],
    specs: {
      flightTime: '60 min',
      maxSpeed: '15 m/s',
      payload: '40L tank',
      range: '5 km'
    },
    industries: ['Agriculture', 'Research']
  },
  {
    id: '2',
    name: 'SurveyMaster Elite',
    category: 'Surveying',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: '₹7,99,000',
    rating: 4.9,
    reviews: 89,
    features: ['LiDAR Mapping', 'PPK Capability', 'Weather Resistant', 'Real-time Processing'],
    specs: {
      flightTime: '55 min',
      maxSpeed: '20 m/s',
      payload: '2.5 kg',
      range: '8 km'
    },
    industries: ['Mining', 'Construction', 'Utilities']
  },
  {
    id: '3',
    name: 'InspectAir Thermal',
    category: 'Inspection',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: '₹6,49,000',
    rating: 4.7,
    reviews: 156,
    features: ['Thermal Imaging', 'Zoom Camera', 'Obstacle Avoidance', 'Night Vision'],
    specs: {
      flightTime: '45 min',
      maxSpeed: '18 m/s',
      payload: '1.8 kg',
      range: '6 km'
    },
    industries: ['Solar', 'Oil & Gas', 'Utilities', 'Public Safety']
  },
  {
    id: '4',
    name: 'CompactPro Mini',
    category: 'Portable',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: '₹2,99,000',
    rating: 4.6,
    reviews: 203,
    features: ['Ultra Portable', '4K Camera', 'Smart Tracking', 'Quick Deploy'],
    specs: {
      flightTime: '35 min',
      maxSpeed: '16 m/s',
      payload: '0.8 kg',
      range: '4 km'
    },
    industries: ['Public Safety', 'Research', 'Security']
  }
];

interface ProductCardProps {
  viewMode: 'grid' | 'list';
  searchTerm: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ viewMode, searchTerm }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.industries.some(industry => industry.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (viewMode === 'list') {
    return (
      <div className="space-y-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-2">
                      {product.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{product.price}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      <div className="font-semibold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 flex items-center justify-center space-x-2">
                    <Eye className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Quote</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 group">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-sm font-medium rounded-full">
                {product.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                <Download className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center space-x-2 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviews})</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-gray-600">{product.specs.flightTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-green-600" />
                <span className="text-gray-600">{product.specs.maxSpeed}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-red-600" />
                <span className="text-gray-600">{product.specs.payload}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span className="text-gray-600">{product.specs.range}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {product.features.slice(0, 3).map((feature) => (
                <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                  {feature}
                </span>
              ))}
              {product.features.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                  +{product.features.length - 3} more
                </span>
              )}
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl font-bold text-green-600">{product.price}</div>
              <div className="text-sm text-gray-500">Starting price</div>
            </div>

            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 transform group-hover:scale-105">
                View Details
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Add to Quote
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;