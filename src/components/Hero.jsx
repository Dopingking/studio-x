import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-24 md:pt-28">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
        alt="Photography"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light leading-tight tracking-wide"
        >
          We Capture <br />
          <span className="font-semibold">Moments</span> That Matter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-300 text-sm md:text-lg"
        >
          Premium photography for weddings, portraits, and brands.  
          Turning real-life moments into timeless visual stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-white text-black px-6 py-3 text-sm tracking-widest hover:opacity-80 transition">
            VIEW PORTFOLIO
          </button>

          <button className="border border-white px-6 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition">
            BOOK SESSION
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 flex flex-col items-center text-gray-400 text-xs tracking-widest"
      >
        <span>SCROLL</span>
        <div className="w-[1px] h-10 bg-gray-500 mt-2"></div>
      </motion.div>

    </section>
  );
}