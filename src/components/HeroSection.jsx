import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import motivationalVideo from '../assets/Yuvraj Singh Motivational Story–START AGAIN _Motivational video_ Yuvraj Singh _Life Story _MotivateX.mp4';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById('hero-video');
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  const handleJoinNowClick = () => {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Loading placeholder */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      )}
      
      {/* Video background */}
      <video
        id="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        poster={`${motivationalVideo}?blur=200`}
      >
        <source src={motivationalVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <motion.div 
        className="relative h-full flex flex-col items-center justify-center text-white text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to YSCE
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Empowering young cricketers with world-class training and facilities
        </p>
        <motion.button
          className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
