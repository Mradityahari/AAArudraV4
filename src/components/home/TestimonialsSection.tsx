import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    title: 'Agricultural Manager',
    company: 'Green Valley Farms',
    content: 'AAARUDRA\'s precision spraying drones have revolutionized our farming operations. We\'ve seen a 30% increase in yield while reducing pesticide usage by 50%.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Dr. Priya Sharma',
    title: 'Mining Operations Director',
    company: 'Apex Mining Ltd',
    content: 'The volumetric analysis and safety monitoring capabilities have been game-changing. We\'ve improved safety protocols while achieving 95% survey accuracy.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Amit Patel',
    title: 'Infrastructure Manager',
    company: 'Solar Energy Corp',
    content: 'Regular thermal inspections of our solar installations have helped us identify issues early, resulting in 20% improvement in overall efficiency.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

const pressLogos = [
  { name: 'TechCrunch', logo: 'TC' },
  { name: 'Economic Times', logo: 'ET' },
  { name: 'Business Standard', logo: 'BS' },
  { name: 'The Hindu', logo: 'TH' },
  { name: 'Mint', logo: 'M' }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies across industries are achieving remarkable results with our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-200 group-hover:text-blue-300 transition-colors" />
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Coverage */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {pressLogos.map((press) => (
              <div
                key={press.name}
                className="group flex items-center justify-center w-20 h-20 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
              >
                <span className="text-xl font-bold text-gray-600 group-hover:text-blue-600 transition-colors">
                  {press.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;