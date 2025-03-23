import { useState } from 'react';
import { motion } from 'framer-motion';

const CenterImage = ({ image, name, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Image */}
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
        
        {/* Center Name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-2xl font-bold text-center px-4">
            {name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default CenterImage; 