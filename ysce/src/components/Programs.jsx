import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const programs = [
  {
    title: "Advanced Training Program",
    description: "High-performance training for skilled players, focusing on advanced techniques and strategic gameplay.",
    icon: "🎯",
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Coaching Sessions",
    description: "Regular practice sessions with specialized coaching, emphasizing fundamental skill development and technique refinement.",
    icon: "🏏",
    color: "from-green-600 to-green-800"
  },
  {
    title: "Domestic Camps",
    description: "Short-term intensive training camps within India, providing focused skill development and performance enhancement.",
    icon: "🏕️",
    color: "from-yellow-600 to-yellow-800"
  },
  {
    title: "International Camps",
    description: "Training programs conducted at international venues, offering exposure to diverse playing conditions and coaching methods.",
    icon: "🌏",
    color: "from-purple-600 to-purple-800"
  },
  {
    title: "High-Performance Camp with Yuvraj Singh",
    description: "Exclusive elite camp led by Yuvraj Singh and senior coaches, providing direct mentorship from cricket legends.",
    icon: "⭐",
    color: "from-red-600 to-red-800"
  },
  {
    title: "Domestic Tours",
    description: "Competitive exposure across India, participating in matches and tournaments throughout the country.",
    icon: "🗺️",
    color: "from-indigo-600 to-indigo-800"
  },
  {
    title: "International Tours",
    description: "Global exposure through overseas matches, experiencing different cricket cultures and playing styles.",
    icon: "✈️",
    color: "from-teal-600 to-teal-800"
  },
  {
    title: "Tournaments",
    description: "Regular competitive matches for skill enhancement, providing real-game experience and pressure handling.",
    icon: "🏆",
    color: "from-orange-600 to-orange-800"
  }
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-gray-900/90" />
        
        {/* Cricket pattern background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-[200%] h-[200%] -left-1/2 -top-1/2"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(255,255,255,0.1) 20px,
                rgba(255,255,255,0.1) 40px
              )`
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
            >
              Our Programs
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive cricket training programs designed for excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1
                    }
                  }
                }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className={`bg-gradient-to-r ${program.color} p-6 flex items-center justify-between`}>
                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                    <span className="text-3xl">{program.icon}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-6"
                    >
                      <button className="text-sm font-semibold text-gray-900 flex items-center group-hover:text-yellow-600 transition-colors duration-200">
                        Learn More
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs; 