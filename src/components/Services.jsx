import { motion } from "framer-motion";
import {
  FaCamera,
  FaUser,
  FaCalendarAlt,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    title: "Weddings",
    desc: "Elegant storytelling of your special day with timeless visuals.",
    icon: <FaCamera />,
  },
  {
    title: "Portraits",
    desc: "Professional portraits that capture personality and emotion.",
    icon: <FaUser />,
  },
  {
    title: "Events",
    desc: "From corporate to celebrations, we cover every moment.",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Studio",
    desc: "Creative indoor sessions with controlled lighting perfection.",
    icon: <FaLightbulb />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white py-24 px-6 md:px-12"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-light tracking-wide">
          Our Services
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Premium photography services designed to capture your most important moments.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="group relative border border-white/10 p-8 rounded-2xl overflow-hidden backdrop-blur-sm text-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

            {/* Icon */}
            <div className="text-4xl md:text-6xl flex justify-center mb-5 text-white/80 group-hover:text-white transition-transform duration-300 group-hover:scale-110">
              {s.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 tracking-wide">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {s.desc}
            </p>

            {/* Line */}
            <div className="mt-6 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300 mx-auto" />
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}