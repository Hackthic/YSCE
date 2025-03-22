import { motion } from 'framer-motion';

const ContentSection = ({ icon, content }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-16 h-16 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-2xl">{icon}</span>
            </motion.div>
            <div className="prose prose-lg max-w-none">
              {Array.isArray(content) ? (
                content.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed mb-8 bg-white/80 p-6 rounded-xl shadow-sm">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-lg leading-relaxed bg-white/80 p-6 rounded-xl shadow-sm">
                  {content}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection; 