import { motion } from 'framer-motion';
import Navbar from './Navbar';

import teamMember1 from '../assets/our team photo/Screen-Shot-2020-12-27-at-12.27.15-PM-1024x1024.png';
import teamMember2 from '../assets/our team photo/Screen-Shot-2020-12-27-at-12.19.56-PM-1024x1024.png';
import teamMember3 from '../assets/our team photo/Screen-Shot-2020-12-27-at-12.22.27-PM-1024x1024.png';
import teamMember4 from '../assets/our team photo/sandy-1024x1024.jpg';

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
  hover: { 
    y: -10,
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

const iconContainerVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  hover: {
    scale: 1.1,
    rotate: [-5, 5, -5, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const teamMembers = [
  {
    name: "Yuvraj Singh",
    designation: "Founder & Director",
    image: teamMember3
  },
  {
    name: "Shabnam Singh",
    designation: "Co-Founder",
    image: teamMember2
  },
  {
    name: "Sandeep Sharma",
    designation: "Vice President",
    image: teamMember4
  },
  {
    name: "Simarjeet Singh",
    designation: "COO",
    image: teamMember1
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-gray-900/90" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
          >
            About YSCE Academy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed"
          >
            Transforming cricket aspirations into professional excellence through world-class training and innovative coaching methodologies.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-50/50 transform skew-x-12" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 p-10 rounded-xl shadow-lg"
            >
              <motion.div 
                variants={iconContainerVariants}
                className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-8 flex items-center justify-center shadow-lg"
              >
                <span className="text-4xl">🎯</span>
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To nurture cricket talent through personalized coaching, state-of-the-art facilities, and a holistic approach to player development, creating not just skilled cricketers but well-rounded sports professionals.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-xl shadow-lg"
            >
              <motion.div 
                variants={iconContainerVariants}
                className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl mb-8 flex items-center justify-center shadow-lg"
              >
                <span className="text-4xl">🌟</span>
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the premier cricket academy that sets new standards in cricket education and training, producing the next generation of cricket stars who excel both on and off the field.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Led by cricket legend Yuvraj Singh, our team brings together expertise, passion, and commitment to cricket excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-w-1 aspect-h-1 relative">
                  <motion.img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-medium text-lg">{member.designation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values create a sense of purpose to ensure that we succeed as a world leading organization.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: "⚡", 
                title: "Excellence",
                text: "Striving for the highest standards in everything we do, pushing boundaries and setting new benchmarks in cricket training.",
                gradient: "from-yellow-400 to-amber-500"
              },
              { 
                icon: "📊", 
                title: "Accountability",
                text: "We are accountable for using and developing our individual and collective capabilities to achieve outstanding results both for the individual and for the community.",
                gradient: "from-blue-400 to-indigo-500"
              },
              { 
                icon: "🤝", 
                title: "Synergy & Teamwork",
                text: "Our mission is to develop well-trained sport champions providing multidimensional training. We intend to foster the Indian society by realizing the need of healthy and active lifestyle.",
                gradient: "from-green-400 to-emerald-500"
              },
              { 
                icon: "🌟", 
                title: "Respect",
                text: "We honor sensitively the values, rights, and needs of others and embrace the diversity provided by each individual irrespective of culture, orientation, race, class or gender",
                gradient: "from-purple-400 to-violet-500"
              },
              { 
                icon: "⚖️", 
                title: "Integrity",
                text: "We build trust through loyalty, honesty, ethical standards and fairness. We never take advantage of a privileged position of personal gain",
                gradient: "from-red-400 to-rose-500"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <motion.div 
                  variants={iconContainerVariants}
                  className={`w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center bg-gradient-to-br ${value.gradient} shadow-lg`}
                >
                  <span className="text-4xl text-white">{value.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg text-center leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutUs; 