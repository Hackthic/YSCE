import { motion } from 'framer-motion';
import bgImage from '../assets/2-2048x1152.png';

const InquirySection = () => {
  return (
    <section id="inquiry-section" className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Cricket Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="flex justify-end">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <form className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Join YSCE Academy</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                />
                <select
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                >
                  <option value="" disabled selected>Select your role</option>
                  <option value="batsman">🏏 Batsman</option>
                  <option value="bowler">🎯 Bowler</option>
                  <option value="wicketkeeper">🧤 Wicket Keeper</option>
                  <option value="fielder">🏃 Fielder</option>
                </select>
                <select
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                >
                  <option value="" disabled selected>Select program</option>
                  <option value="high-performance">High Performance Camp</option>
                  <option value="regular-training">Regular Training</option>
                  <option value="summer-camp">Summer Camp</option>
                  <option value="personal-coaching">Personal Coaching</option>
                </select>
                <textarea
                  placeholder="Brief cricket experience..."
                  rows="3"
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 py-3 px-4 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-all"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection; 