import React, { useState, useEffect, useRef } from 'react';
import { Target, Camera, Map, Users } from 'lucide-react';

interface CounterData {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
}

const counters: CounterData[] = [
  {
    icon: <Target className="h-8 w-8" />,
    value: 10000,
    label: 'Missions Flown',
    suffix: '+'
  },
  {
    icon: <Camera className="h-8 w-8" />,
    value: 50000000,
    label: 'Images Processed',
    suffix: '+'
  },
  {
    icon: <Map className="h-8 w-8" />,
    value: 25000,
    label: 'Sites Mapped',
    suffix: '+'
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: 500,
    label: 'Certified Pilots',
    suffix: '+'
  }
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <div ref={counterRef} className="text-3xl font-bold text-gray-900">
      {formatNumber(count)}{suffix}
    </div>
  );
};

const KPICounters = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself - delivering reliable aerial intelligence solutions at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {counter.icon}
                </div>
              </div>
              <AnimatedCounter value={counter.value} suffix={counter.suffix} />
              <p className="text-gray-600 font-medium mt-2">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPICounters;