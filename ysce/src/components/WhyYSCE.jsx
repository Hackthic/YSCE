import { motion } from 'framer-motion';
import { useState } from 'react';

const features = [
  {
    icon: "🎯",
    title: "Professional Coaching",
    description: "Learn from experienced coaches who have played at national and international levels",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: "🏟️",
    title: "World-Class Facilities",
    description: "State-of-the-art training facilities including indoor nets, bowling machines, and analysis tools",
    color: "from-green-500 to-green-700"
  },
  {
    icon: "📊",
    title: "Performance Analysis",
    description: "Advanced video analysis and performance tracking to monitor your progress",
    color: "from-purple-500 to-purple-700"
  },
  {
    icon: "👥",
    title: "Personalized Training",
    description: "Customized training programs tailored to your skill level and goals",
    color: "from-red-500 to-red-700"
  },
  {
    icon: "🌍",
    title: "Global Exposure",
    description: "Opportunities to play in international tournaments and train abroad",
    color: "from-yellow-500 to-yellow-700"
  },
  {
    icon: "🎓",
    title: "Holistic Development",
    description: "Focus on mental conditioning, fitness, and nutrition alongside cricket skills",
    color: "from-pink-500 to-pink-700"
  }
];

const WhyYSCE = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-600/5" />

        {/* Cricket field lines */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[80%] w-[1px] bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] w-[1px] bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose YSCE?
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join the academy that transforms cricket enthusiasts into professional players through world-class training and facilities
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div 
                className="h-full bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.2 }}
                />
                
                <motion.div
                  className="text-5xl mb-4 relative"
                  animate={hoveredIndex === index ? {
                    y: [0, -10, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  } : {}}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyYSCE; 