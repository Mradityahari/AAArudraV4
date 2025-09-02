import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    areaSize: 100, // hectares
    surveyFrequency: 4, // times per year
    manualCostPerHectare: 500, // INR
    droneServiceCost: 200, // INR per hectare
    dronePurchaseCost: 500000, // INR
    timeSaved: 75 // percentage
  });

  const calculations = useMemo(() => {
    const annualManualCost = inputs.areaSize * inputs.surveyFrequency * inputs.manualCostPerHectare;
    const annualDroneCost = inputs.areaSize * inputs.surveyFrequency * inputs.droneServiceCost;
    const annualSavings = annualManualCost - annualDroneCost;
    const paybackPeriod = inputs.dronePurchaseCost / annualSavings;
    const threeYearSavings = (annualSavings * 3) - inputs.dronePurchaseCost;
    const roi = ((threeYearSavings / inputs.dronePurchaseCost) * 100);

    return {
      annualManualCost,
      annualDroneCost,
      annualSavings,
      paybackPeriod,
      threeYearSavings,
      roi,
      timeSaved: inputs.timeSaved
    };
  }, [inputs]);

  const handleInputChange = (key: string, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
            <Calculator className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 font-medium">ROI Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Drone ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much you can save by switching from manual surveying to drone-based aerial intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Panel */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Parameters</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area Size (Hectares)
                </label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  value={inputs.areaSize}
                  onChange={(e) => handleInputChange('areaSize', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10 ha</span>
                  <span className="font-medium text-blue-600">{inputs.areaSize} ha</span>
                  <span>1000 ha</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Survey Frequency (Times/Year)
                </label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={inputs.surveyFrequency}
                  onChange={(e) => handleInputChange('surveyFrequency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1x</span>
                  <span className="font-medium text-blue-600">{inputs.surveyFrequency}x</span>
                  <span>12x</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Manual Survey Cost (₹/hectare)
                </label>
                <input
                  type="range"
                  min="200"
                  max="1000"
                  value={inputs.manualCostPerHectare}
                  onChange={(e) => handleInputChange('manualCostPerHectare', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>₹200</span>
                  <span className="font-medium text-blue-600">₹{inputs.manualCostPerHectare}</span>
                  <span>₹1000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Your Savings</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    ₹{calculations.annualSavings.toLocaleString()}
                  </div>
                  <p className="text-gray-600 font-medium">Annual Savings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {calculations.roi.toFixed(1)}%
                  </div>
                  <p className="text-gray-600 font-medium">3-Year ROI</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">Time Savings</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">{calculations.timeSaved}%</div>
                <p className="text-gray-600 text-sm">Faster data collection</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-gray-900">Payback Period</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {calculations.paybackPeriod.toFixed(1)} years
                </div>
                <p className="text-gray-600 text-sm">Break-even timeline</p>
              </div>
            </div>

            <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Detailed ROI Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;