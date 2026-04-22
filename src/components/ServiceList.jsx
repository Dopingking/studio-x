import { motion } from "framer-motion";

const events = [
  { title: "Wedding Ceremony", img: "https://images.unsplash.com/photo-1519741497674-611481863552" },
  { title: "Birthday Ceremony", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d" },
  { title: "Naming Ceremony", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e" },
  { title: "School Activities", img: "https://images.unsplash.com/photo-1588072432836-e10032774350" },
  { title: "Documentaries", img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },
  { title: "Biography Shoot", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  { title: "Corporate Events", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df" },
  { title: "Seminars / Conferences", img: "https://images.unsplash.com/photo-1515169067868-5387ec356754" },
  { title: "House Warming", img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0" },
  { title: "Burial Ceremony", img: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde" },
];

export default function EventCoverage() {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 border-t border-white/10">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-light tracking-wide">
          Event Coverage for Every Occasion
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          We capture every moment, no matter the event or celebration.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between bg-white/5 border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 transition"
          >
            <span className="text-sm md:text-base">{event.title}</span>

            <img
              src={event.img}
              alt={event.title}
              className="w-10 h-10 rounded-full object-cover ml-4"
            />
          </motion.div>
        ))}

      </div>

      {/* CTA */}
      <div className="flex justify-center mt-16">
        <a
          href="#contact"
          className="bg-white text-black px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition"
        >
          Get an Instant Quote
        </a>
      </div>

    </section>
  );
}