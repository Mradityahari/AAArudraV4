import React, { useState } from 'react';
import { Search, ArrowRight, Zap, Shield, Timer } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: Array<{
    value: string;
    label: string;
    icon?: React.ReactNode;
  }>;
}

const questions: Question[] = [
  {
    id: 'industry',
    question: 'What industry are you in?',
    options: [
      { value: 'agriculture', label: 'Agriculture', icon: <span>🌾</span> },
      { value: 'mining', label: 'Mining', icon: <span>⛏️</span> },
      { value: 'solar', label: 'Solar', icon: <span>☀️</span> },
      { value: 'utilities', label: 'Utilities', icon: <span>⚡</span> },
      { value: 'construction', label: 'Construction', icon: <span>🏗️</span> },
      { value: 'safety', label: 'Public Safety', icon: <span>🚨</span> }
    ]
  },
  {
    id: 'use_case',
    question: 'What\'s your primary use case?',
    options: [
      { value: 'mapping', label: 'Mapping & Surveying' },
      { value: 'inspection', label: 'Asset Inspection' },
      { value: 'monitoring', label: 'Site Monitoring' },
      { value: 'emergency', label: 'Emergency Response' }
    ]
  },
  {
    id: 'area_size',
    question: 'What area size do you typically cover?',
    options: [
      { value: 'small', label: 'Under 50 hectares' },
      { value: 'medium', label: '50-500 hectares' },
      { value: 'large', label: '500+ hectares' }
    ]
  }
];

const ProductFinder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = {
      ...answers,
      [questions[currentStep].id]: value
    };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendation = () => {
    // Simple recommendation logic based on answers
    if (answers.industry === 'agriculture' && answers.area_size === 'large') {
      return {
        title: 'AgroMax Pro Series',
        description: 'High-endurance agricultural drone with precision spraying capabilities',
        features: ['40L tank capacity', '60-min flight time', 'RTK GPS', 'Automated spraying']
      };
    } else if (answers.use_case === 'inspection') {
      return {
        title: 'InspectAir Advanced',
        description: 'Professional inspection drone with thermal and zoom cameras',
        features: ['4K thermal camera', 'zoom payload', '45-min flight time', 'IP65 rating']
      };
    } else {
      return {
        title: 'MapPro Survey Drone',
        description: 'Precision mapping drone for surveying and construction',
        features: ['Survey-grade accuracy', 'PPK capability', '50MP camera', 'Weather resistant']
      };
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
            <Search className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 font-medium">Product Finder</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Drone Solution
          </h2>
          <p className="text-xl text-gray-600">
            Answer a few questions to get personalized recommendations
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {!showResults ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Question {currentStep + 1} of {questions.length}</span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {questions[currentStep].question}
                </h3>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="group p-6 bg-gray-50 rounded-xl border-2 border-transparent hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-left"
                  >
                    <div className="flex items-center space-x-3">
                      {option.icon && (
                        <span className="text-2xl">{option.icon}</span>
                      )}
                      <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {option.label}
                      </span>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 ml-auto transition-all group-hover:translate-x-1" />
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Perfect Match Found!
                </h3>
                <p className="text-gray-600">Based on your requirements, we recommend:</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  {getRecommendation().title}
                </h4>
                <p className="text-gray-700 mb-6">
                  {getRecommendation().description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {getRecommendation().features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                    View Product Details
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>

              <button
                onClick={resetQuiz}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductFinder;