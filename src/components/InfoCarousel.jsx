import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const carouselData = [
  {
    title: "Center of Excellence",
    description: "YSCE is a state-of-the-art cricket academy dedicated to nurturing young talent and creating future cricket stars. Our world-class facilities and expert coaching staff provide comprehensive training programs designed to develop all aspects of cricket skills.",
    bgPattern: "🏏",
    accent: "⚾"
  },
  {
    title: "Our Mission",
    description: "To create a platform that transforms passionate cricketers into professional athletes through expert guidance, advanced training methodologies, and comprehensive development programs. We aim to instill discipline, sportsmanship, and excellence in every aspiring cricketer.",
    bgPattern: "🎯",
    accent: "🏆"
  },
  {
    title: "Our Vision",
    description: "To be the leading cricket academy that sets new standards in cricket training and produces world-class cricketers who represent their nation with pride. We envision creating a sustainable ecosystem that nurtures cricket talent from grassroots to professional levels.",
    bgPattern: "⭐",
    accent: "🌟"
  }
];

const InfoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-white py-24 overflow-hidden">
      {/* Animated cricket field lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 border-[40px] border-gray-900 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 border-[30px] border-gray-900 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 border-[20px] border-gray-900 rounded-full"></div>
        </motion.div>

        {/* Floating cricket elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-[0.07]"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{
                y: [null, Math.random() * -100],
                scale: [1, 0.8],
                opacity: [0.07, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 5
              }}
            >
              {carouselData[currentSlide].bgPattern}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Content */}
          <motion.div 
            className="relative h-[300px] overflow-hidden rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-yellow-200/50"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {carouselData.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform 
                  ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
              >
                <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                  <motion.h2 
                    className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-200 border border-yellow-200/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-200 border border-yellow-200/50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 backdrop-blur-sm
                  ${index === currentSlide ? 'bg-yellow-400' : 'bg-gray-300/70'}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCarousel; 