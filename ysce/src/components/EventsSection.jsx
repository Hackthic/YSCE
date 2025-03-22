import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const events = [
  {
    title: "YSCE Summer Cricket Camp 2024",
    date: "June 1-30, 2024",
    location: "YSCE Main Ground",
    time: "6:00 AM - 10:00 AM",
    capacity: "50 spots",
    description: "Intensive cricket training camp focusing on batting, bowling, and fielding techniques. Special sessions on mental preparation and fitness.",
    category: "Camp",
    emoji: "🏏"
  },
  {
    title: "Under-19 Cricket Trials",
    date: "May 15-16, 2024",
    location: "YSCE Academy Nets",
    time: "7:00 AM - 2:00 PM",
    capacity: "Open Registration",
    description: "Selection trials for YSCE's Under-19 cricket team. Comprehensive assessment of batting, bowling, and fielding skills.",
    category: "Trials",
    emoji: "🎯"
  },
  {
    title: "YSCE T20 Youth Tournament",
    date: "July 10-20, 2024",
    location: "YSCE Stadium",
    time: "8:00 AM - 6:00 PM",
    capacity: "8 Teams",
    description: "Annual T20 tournament featuring top youth teams. Cash prizes and opportunities for talent scouting.",
    category: "Tournament",
    emoji: "🏆"
  }
];

const EventsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join us for exciting cricket events at YSCE Academy. From intensive training camps to competitive tournaments, take your game to the next level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{event.emoji}</span>
                <span className="px-3 py-1 text-sm font-medium text-yellow-400 bg-yellow-400/10 rounded-full">
                  {event.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
              <p className="text-gray-400 mb-6">{event.description}</p>
              
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-yellow-400" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-yellow-400" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2 text-yellow-400" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-2 text-yellow-400" />
                  {event.capacity}
                </div>
              </div>

              <button className="w-full mt-6 bg-yellow-400 text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Register Now
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 py-3 px-8 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors">
            View All Events
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection; 