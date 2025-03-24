import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './shared/HeroSection';
import CenterImage from './shared/CenterImage';
import centerImage from '../assets/our-center/Copy-of-Yellow-Minimalist-Travel-Vlog-Youtube-Thumbnail-1.png';

const centers = [
  {
    name: "YSCE Mumbai",
    image: centerImage,
    slug: "mumbai"
  },
  {
    name: "YSCE Delhi",
    image: centerImage,
    slug: "delhi"
  },
  {
    name: "YSCE Bangalore",
    image: centerImage,
    slug: "bangalore"
  },
  {
    name: "YSCE Chandigarh",
    image: centerImage,
    slug: "chandigarh"
  }
];

const InquiryForm = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Inquiry Form</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent h-32"></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const OurCenter = () => {
  const navigate = useNavigate();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleCenterClick = (slug) => {
    // Navigate to individual center page when implemented
    console.log(`Navigating to center: ${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <HeroSection 
        title="Our Centers"
        subtitle="Excellence in Cricket Training Across India"
      />

      {/* Centers Image Grid Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any center to learn more about our world-class facilities
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {centers.map((center, index) => (
              <motion.div
                key={center.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CenterImage
                  image={center.image}
                  name={center.name}
                  onClick={() => setIsInquiryOpen(true)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InquiryForm 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
      />

     
    </div>
  );
};

export default OurCenter; 