import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Cricket-themed SVG patterns
const CricketPatterns = () => (
  <div className="absolute inset-0 opacity-[0.03]">
    {/* Cricket Ball Pattern */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <pattern id="cricket-ball" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="15" fill="currentColor" />
        <path d="M30 15 C 30 30, 45 30, 45 30" stroke="white" fill="none" strokeWidth="2" />
        <path d="M30 45 C 30 30, 15 30, 15 30" stroke="white" fill="none" strokeWidth="2" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#cricket-ball)" />
    </svg>
    
    {/* Cricket Bat Pattern */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <pattern id="cricket-bat" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <path d="M60 30 L70 40 L45 65 L35 55 Z" fill="currentColor" opacity="0.5" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#cricket-bat)" />
    </svg>
    
    {/* Stumps Pattern */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <pattern id="stumps" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
        <g opacity="0.3">
          <rect x="70" y="40" width="4" height="80" fill="currentColor" />
          <rect x="78" y="40" width="4" height="80" fill="currentColor" />
          <rect x="86" y="40" width="4" height="80" fill="currentColor" />
          <rect x="65" y="35" width="30" height="5" fill="currentColor" />
        </g>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#stumps)" />
    </svg>
  </div>
);

const stats = [
  {
    number: 2500,
    suffix: "+",
    label: "Students Enrolled",
    icon: "👨‍🎓",
    color: "from-blue-400 to-blue-600"
  },
  {
    number: 112,
    suffix: "+",
    label: "Certified Trainers",
    icon: "🎯",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    number: 141,
    suffix: "+",
    label: "Medals Won",
    icon: "🏆",
    color: "from-red-400 to-red-600"
  },
  {
    number: 500,
    suffix: "+",
    label: "Represented National",
    icon: "🌏",
    color: "from-green-400 to-green-600"
  }
];

// Simple Counter Component
const Counter = ({ end, suffix = "", isVisible }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const cyclesRef = useRef(0);
  const maxCycles = 3;

  useEffect(() => {
    if (!isVisible) return;

    const startCounting = () => {
      if (cyclesRef.current >= maxCycles) {
        setCount(end);
        return;
      }

      let start = 0;
      const duration = 2000; // 2 seconds to count up
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          countRef.current = requestAnimationFrame(step);
        } else {
          // Pause at the maximum value for 5 seconds
          setTimeout(() => {
            if (cyclesRef.current < maxCycles - 1) {
              setCount(0);
              cyclesRef.current++;
              startCounting();
            } else {
              cyclesRef.current = maxCycles;
              setCount(end);
            }
          }, 5000);
        }
      };

      countRef.current = requestAnimationFrame(step);
    };

    startCounting();

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [end, isVisible]);

  return <>{count}{suffix}</>;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Cricket-themed Background Patterns */}
      <CricketPatterns />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <div className="w-28 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg border border-gray-700 overflow-hidden transform transition-transform duration-300 hover:scale-102">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative text-center">
                  <div className="text-5xl md:text-6xl mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    <Counter 
                      end={stat.number} 
                      suffix={stat.suffix} 
                      isVisible={isVisible} 
                    />
                  </div>
                  <div className="text-sm md:text-base text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 