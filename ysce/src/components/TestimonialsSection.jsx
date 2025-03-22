import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Arjun Patel",
    role: "Former Student",
    quote: "YSCE transformed my cricket journey. The professional coaching and world-class facilities helped me achieve my dreams.",
    videoId: "your_video_id_1", // Replace with actual YouTube video IDs
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Current Student",
    quote: "The personalized training approach and performance analysis helped me improve significantly in just 6 months.",
    videoId: "your_video_id_2",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    role: "Parent",
    quote: "The holistic development approach ensures my child grows not just as a cricketer but as a complete athlete.",
    videoId: "your_video_id_3",
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 10000); // Change testimonial every 10 seconds if video is not playing
      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L45 30L30 60L15 30z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Video and Content Container */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 items-center bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Video Section */}
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${testimonials[currentIndex].videoId}?enablejsapi=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Content Section */}
              <div className="text-center md:text-left">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="text-yellow-400 font-bold text-lg mb-2">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 