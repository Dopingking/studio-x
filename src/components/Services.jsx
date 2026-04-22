import { motion } from "framer-motion";
import {
  FaCamera,
  FaFilm,
  FaBroadcastTower,
  FaStream,
  FaPlaneArrival,
  FaCode,
  FaChalkboardTeacher,
  FaDigitalTachograph,
} from "react-icons/fa";
import { FaPodcast, FaRecordVinyl } from "react-icons/fa6";

const services = [
  {
    title: "Photography",
    desc: "Professional photography for portraits, events, branding, and corporate needs.",
    icon: <FaCamera />,
  },
  {
    title: "FILM-MAKING",
    desc: "High-quality cinematic productions including commercials, events, and brand storytelling.",
    icon: <FaFilm />,
  },
  {
    title: "LIVE BROADCASTING",
    desc: "Reliable live coverage for events, conferences, and productions.",
    icon: <FaBroadcastTower />,
  },
  {
    title: "Live Streaming",
    desc: "Seamless streaming solutions for global real-time audience engagement.",
    icon: <FaStream />,
  },
  {
    title: "Content Creation",
    desc: "Creative digital content for brands, campaigns, and social media growth.",
    icon: <FaRecordVinyl />,
  },
  {
    title: "Podcast Production",
    desc: "Professional podcast video and audio production for engaging content.",
    icon: <FaPodcast />,
  },
  {
    title: "Drone Services",
    desc: "Aerial photography and video with cinematic precision.",
    icon: <FaPlaneArrival />,
  },
  {
    title: "Web Development",
    desc: "Fast, responsive, and modern websites tailored to your business.",
    icon: <FaCode />,
  },
  {
    title: "Training Academy",
    desc: "Hands-on training in photography, filmmaking, and production.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Digital Printing",
    desc: "High-quality prints for branding, marketing, and business needs.",
    icon: <FaDigitalTachograph />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 border-t border-white/10"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-wide">
          Our Services
        </h2>
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Premium services designed to capture and elevate your brand.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
        {services.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative border border-white/10 p-6 sm:p-7 rounded-xl overflow-hidden text-center hover:border-white/30 transition"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

            {/* Icon */}
            <div className="text-3xl sm:text-4xl md:text-5xl flex justify-center mb-4 text-white/70 group-hover:text-white transition-transform duration-300 group-hover:scale-110">
              {s.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 tracking-wide">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {s.desc}
            </p>

            {/* Line */}
            <div className="mt-5 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300 mx-auto" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}