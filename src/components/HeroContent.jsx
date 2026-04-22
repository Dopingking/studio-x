import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 text-center border-t border-white/10">

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-white/20 blur-sm"></div>

      <div className="max-w-3xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // ✅ performance boost
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-6xl font-light leading-snug tracking-wide"
        >
          We Capture <br />
          <span className="font-semibold">Moments</span> That Matter
        </motion.h1>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Premium photography for Event | Branding | Lifestyle. <br />
          Turning real-life moments into timeless visual stories.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 sm:mt-8 flex flex-row gap-4 justify-center flex-wrap"
        >
          <button className="bg-white text-black px-5 py-3 text-sm sm:text-base tracking-wide whitespace-nowrap hover:opacity-80 transition">
            VIEW PORTFOLIO
          </button>

          <button className="border border-white px-5 py-3 text-sm sm:text-base tracking-wide whitespace-nowrap hover:bg-white hover:text-black transition">
            BOOK SESSION
          </button>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}