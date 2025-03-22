import React from 'react';
import YuvrajVideo from '../assets/Yuvraj Singh Motivational Story–START AGAIN _Motivational video_ Yuvraj Singh _Life Story _MotivateX.mp4';

const HeroSection = () => {
  const handleJoinNowClick = () => {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={YuvrajVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 md:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to YSCE Cricket Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Train with the legends, become a champion
          </p>
          <button 
            onClick={handleJoinNowClick}
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
