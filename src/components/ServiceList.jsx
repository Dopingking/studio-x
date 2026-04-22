import { motion } from "framer-motion";

const events = [
  { title: "Wedding Ceremony", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=300&auto=format&fit=crop" },
  { title: "Birthday Ceremony", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=300&auto=format&fit=crop" },
  { title: "Naming Ceremony", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=300&auto=format&fit=crop" },
  { title: "School Activities", img: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=300&auto=format&fit=crop" },
  { title: "Documentaries", img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=300&auto=format&fit=crop" },
  { title: "Biography Shoot", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=300&auto=format&fit=crop" },
  { title: "Corporate Events", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=300&auto=format&fit=crop" },
  { title: "Seminars / Conferences", img: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=300&auto=format&fit=crop" },
  { title: "House Warming", img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=300&auto=format&fit=crop" },
  { title: "Burial Ceremony", img: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=300&auto=format&fit=crop" },
];

export default function EventCoverage() {
  return (
    <section className="bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 border-t border-white/10">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-wide">
          Event Coverage for Every Occasion
        </h2>
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          We capture every moment, no matter the event or celebration.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">

        {events.map((event) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between bg-white/5 border border-white/10 rounded-full px-4 py-3 hover:bg-white/10 transition"
          >
            <span className="text-xs sm:text-sm md:text-base truncate">
              {event.title}
            </span>

            <img
              src={event.img}
              alt={event.title}
              loading="lazy"
              decoding="async"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ml-3 flex-shrink-0"
            />
          </motion.div>
        ))}

      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12 sm:mt-16">
        <a
          href="#contact"
          className="bg-white text-black px-6 py-3 rounded-full text-sm sm:text-base hover:bg-gray-200 transition"
        >
          Get an Instant Quote
        </a>
      </div>

    </section>
  );
}