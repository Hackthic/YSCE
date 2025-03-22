import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import teamMember1 from '../assets/our team photo/Screen-Shot-2020-12-27-at-12.27.15-PM-1024x1024.png';
import teamMember2 from '../assets/our team photo/Screen-Shot-2020-12-27-at-12.19.56-PM-1024x1024.png';
import teamMember3 from '../assets/our team photo/Screen-Shot-2020-12-27-at-12.22.27-PM-1024x1024.png';
import teamMember4 from '../assets/our team photo/sandy-1024x1024.jpg';

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

const teamMembers = [
  {
    name: "Yuvraj Singh",
    designation: "Founder & Director",
    image: teamMember3,
    description: "Former Indian cricketer and YSCE founder, bringing his extensive experience and vision to cricket development."
  },
  {
    name: "Shabnam Singh",
    designation: "Co-Founder",
    image: teamMember2,
    description: "Co-founder and key strategist in developing YSCE's comprehensive training programs."
  },
  {
    name: "Sandeep Sharma",
    designation: "Vice President (Hon.)",
    image: teamMember4,
    description: "Experienced sports administrator overseeing YSCE's operational excellence."
  },
  {
    name: "Simarjeet Singh",
    designation: "COO",
    image: teamMember1,
    description: "Leading YSCE's day-to-day operations and strategic implementation."
  }
];

const OurManagement = () => {
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
              Our Management
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Meet the visionary leaders behind YSCE's success
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section with Cricket Theme */}
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
                <span className="text-2xl">🏏</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About YSCE Management</h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="prose prose-lg max-w-none text-gray-700"
            >
              <p className="text-lg leading-relaxed mb-8 bg-white/80 p-6 rounded-xl shadow-sm">
                The Yuvraj Singh Centre of Excellence (YSCE) is the culmination of many years of toil & sweat from a passionate dedicated cricketer YUVRAJ SINGH who has become one of the India's cricketing icons. Conceptualized by the man himself, YSCE is not just another academy but an integrated 360 degree sports development institute created to be an outstanding base for player development where all players have the maximum possibilities to reach their full potential.
              </p>
              <p className="text-lg leading-relaxed bg-white/80 p-6 rounded-xl shadow-sm">
                YSCE's out of the box strategy focuses on developing the sporting ecosystem of the country via a multi faceted approach which includes setting up high quality cricket academies across the country, identifying and supporting technology solutions for the enhancement of the sports, pitch intelligence, character building and event the full understanding of the laws.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section with Enhanced Cards */}
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
            {teamMembers.map((member, index) => (
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
                    src={member.image}
                    alt={member.name}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-4">{member.designation}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurManagement; 