import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Import all partner logos
import logo1 from '../assets/partnerlogo/Untitled-design-2.png';
import logo2 from '../assets/partnerlogo/Untitled-design-1.png';
import logo3 from '../assets/partnerlogo/Untitled-285-x-127-px.png';
import logo4 from '../assets/partnerlogo/Logo-1-2.png';
import logo5 from '../assets/partnerlogo/Logo-1-3.png';
import logo6 from '../assets/partnerlogo/Logo-1-5.png';
import logo7 from '../assets/partnerlogo/Log-2-1.png';
import logo8 from '../assets/partnerlogo/Untitled-285-x-127-px-1.png';
import logo9 from '../assets/partnerlogo/Log-2-3.png';

const PartnerLogoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const partners = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo6 },
    { logo: logo7 },
    { logo: logo8 },
    { logo: logo9 },
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (partners.length - 3));
    }, 3000);
    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black/90 to-gray-900 py-16">
      <div className="overflow-hidden max-w-7xl mx-auto px-4">
        <motion.div
          animate={{ x: `-${currentSlide * 33.333}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex gap-4"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="min-w-[calc(33.333%-1rem)] rounded-xl p-8 flex items-center justify-center bg-white/95 hover:bg-white shadow-lg"
            >
              <img
                src={partner.logo}
                alt="Partner logo"
                className="w-44 h-28 object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(partners.length - 3)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index 
                ? 'bg-yellow-400 w-6' 
                : 'bg-gray-400/50 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoCarousel; 