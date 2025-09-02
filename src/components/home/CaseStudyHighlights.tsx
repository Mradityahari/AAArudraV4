import React from 'react';
import { ArrowRight, TrendingUp, Clock, Award } from 'lucide-react';

interface CaseStudy {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  metrics: {
    improvement: string;
    timeSaved: string;
    costReduction: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Precision Agriculture at Scale',
    industry: 'Agriculture',
    challenge: 'Large farm needed efficient crop monitoring and targeted pesticide application',
    solution: 'Deployed fleet of agri-drones with multispectral sensors and precision spraying',
    results: [
      '35% increase in crop yield',
      '60% reduction in pesticide usage',
      'Real-time crop health monitoring'
    ],
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    metrics: {
      improvement: '35%',
      timeSaved: '80%',
      costReduction: '45%'
    }
  },
  {
    title: 'Mining Safety Revolution',
    industry: 'Mining',
    challenge: 'Hazardous terrain mapping and volumetric analysis with safety constraints',
    solution: 'Autonomous drone surveys with LiDAR and photogrammetry for precise 3D mapping',
    results: [
      '99% survey accuracy achieved',
      'Zero safety incidents during surveys',
      'Monthly progress tracking implemented'
    ],
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    metrics: {
      improvement: '99%',
      timeSaved: '90%',
      costReduction: '70%'
    }
  },
  {
    title: 'Solar Farm Optimization',
    industry: 'Solar Energy',
    challenge: 'Detecting panel defects and optimizing maintenance across 500-acre facility',
    solution: 'Thermal imaging drones with AI-powered defect detection and maintenance scheduling',
    results: [
      'Early defect detection implemented',
      '25% improvement in energy output',
      'Predictive maintenance program'
    ],
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    metrics: {
      improvement: '25%',
      timeSaved: '75%',
      costReduction: '40%'
    }
  }
];

const CaseStudyHighlights = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <Award className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how organizations are transforming their operations with our aerial intelligence solutions
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Results</h4>
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{study.metrics.improvement}</div>
                    <div className="text-sm text-gray-600">Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{study.metrics.timeSaved}</div>
                    <div className="text-sm text-gray-600">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{study.metrics.costReduction}</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                </div>

                <button className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <ArrowRight className="h-8 w-8 text-white ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHighlights;