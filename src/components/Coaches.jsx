import { motion } from 'framer-motion';
import Navbar from './Navbar';

import coach1 from '../assets/our-coaches/ajay-ratra.png';
import coach2 from '../assets/our-coaches/sharma.jpg';
import coach3 from '../assets/our-coaches/vineet-jain.jpg';
import coach4 from '../assets/our-coaches/Vishal-Bhatia-1024x1024.jpg';

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

const cardHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300
    }
  }
};

const coaches = [
    {
        name: " Sandeep Sharma",
        designation: "Head of Coaching Dept.",
        image: coach2,
        description: "Expert in cricket fundamentals and player development with extensive coaching experience."
      },
  {
    name: "Ajay Ratra",
    designation: "Head Coach",
    image: coach1,
    description: "Former Indian cricketer and experienced coach, specializing in wicket-keeping and batting techniques."
  },

  {
    name: "Vishal Bhatia",
    designation: "Performance Coach",
    image: coach3,
    description: "Specialized in strength and conditioning, focusing on athletic performance enhancement."
  },
  {
    name: " Vineet Jain",
    designation: "Technical Coach",
    image: coach4,
    description: "Technical specialist focusing on batting mechanics and game strategy development."
  }
];

const Coaches = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Cricket Ball Animation */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-gray-900/90" />
        
        {/* Animated cricket ball seam pattern */}
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
              Our Coaches
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Meet the mentors shaping cricket excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-16 h-16 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">🎯</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Coaching Philosophy</h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="prose prose-lg max-w-none text-gray-700"
            >
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl mb-12">
                <p className="text-lg leading-relaxed mb-8">
                  Leaders are crucial to success, especially in shaping the path of an emerging sportsperson. The challenge of finding and nurturing effective leadership is one we embrace at the Yuvraj Singh Centre of Excellence. Our team, from management to daily mentors, is dedicated to elevating your child's potential.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {["ACCOUNTABILITY", "SYNERGY", "TEAMWORK", "PROFESSIONALISM", "INTEGRITY", "RESPECT"].map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-yellow-400 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow-md border-2 border-gray-100 text-center font-bold text-gray-800 z-10">
                      {value}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg border border-yellow-100">
                <p className="text-lg leading-relaxed text-gray-700">
                  These core values are the foundation of our approach, ensuring every young athlete not only excels in their sport but also learns the importance of character and teamwork.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-50/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coaches.map((coach, index) => (
              <motion.div
                key={index}
                variants={{
                  ...fadeInUp,
                  hover: cardHover.hover,
                  rest: cardHover.rest
                }}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                  <motion.img 
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <motion.div 
                  className="p-6 relative"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{coach.name}</h3>
                  <p className="text-yellow-600 font-medium mb-4">{coach.designation}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{coach.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default Coaches; 