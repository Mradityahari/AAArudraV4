import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSection {
  title: string;
  options: Array<{
    value: string;
    label: string;
    count?: number;
  }>;
}

const filterSections: FilterSection[] = [
  {
    title: 'Industry',
    options: [
      { value: 'agriculture', label: 'Agriculture', count: 12 },
      { value: 'mining', label: 'Mining', count: 8 },
      { value: 'solar', label: 'Solar', count: 6 },
      { value: 'utilities', label: 'Utilities', count: 9 },
      { value: 'construction', label: 'Construction', count: 7 },
      { value: 'safety', label: 'Public Safety', count: 5 }
    ]
  },
  {
    title: 'Flight Time',
    options: [
      { value: '30-45', label: '30-45 minutes', count: 15 },
      { value: '45-60', label: '45-60 minutes', count: 18 },
      { value: '60+', label: '60+ minutes', count: 8 }
    ]
  },
  {
    title: 'Payload Capacity',
    options: [
      { value: '0-1', label: '0-1 kg', count: 12 },
      { value: '1-5', label: '1-5 kg', count: 16 },
      { value: '5-20', label: '5-20 kg', count: 9 },
      { value: '20+', label: '20+ kg', count: 6 }
    ]
  },
  {
    title: 'IP Rating',
    options: [
      { value: 'ip54', label: 'IP54', count: 8 },
      { value: 'ip65', label: 'IP65', count: 12 },
      { value: 'ip67', label: 'IP67', count: 6 }
    ]
  },
  {
    title: 'Price Range',
    options: [
      { value: '0-300k', label: 'Under ₹3 Lakhs', count: 8 },
      { value: '300k-500k', label: '₹3-5 Lakhs', count: 12 },
      { value: '500k-1m', label: '₹5-10 Lakhs', count: 15 },
      { value: '1m+', label: '₹10+ Lakhs', count: 8 }
    ]
  }
];

const ProductFilters = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Industry', 'Flight Time']));
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  const handleFilterChange = (section: string, value: string) => {
    const currentFilters = selectedFilters[section] || [];
    const newFilters = currentFilters.includes(value)
      ? currentFilters.filter(f => f !== value)
      : [...currentFilters, value];
    
    setSelectedFilters({
      ...selectedFilters,
      [section]: newFilters
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
  };

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).flat().length;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900">Filters</h3>
        {getActiveFilterCount() > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear All ({getActiveFilterCount()})
          </button>
        )}
      </div>

      <div className="space-y-6">
        {filterSections.map((section) => (
          <div key={section.title} className="border-b border-gray-200 pb-4 last:border-b-0">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex justify-between items-center w-full text-left"
            >
              <h4 className="font-semibold text-gray-900">{section.title}</h4>
              {expandedSections.has(section.title) ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {expandedSections.has(section.title) && (
              <div className="mt-3 space-y-2">
                {section.options.map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedFilters[section.title]?.includes(option.value) || false}
                      onChange={() => handleFilterChange(section.title, option.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="flex-1 text-sm text-gray-700 group-hover:text-gray-900">
                      {option.label}
                    </span>
                    {option.count && (
                      <span className="text-xs text-gray-500">({option.count})</span>
                    )}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 mb-3">
          Apply Filters
        </button>
        <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
          Compare Selected
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;