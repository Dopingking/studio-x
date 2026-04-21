import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 px-6 md:px-12 text-center border-t border-white/10">

      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-white/20 blur-sm"></div>

      <div className="max-w-3xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light leading-tight tracking-wide"
        >
          We Capture <br />
          <span className="font-semibold">Moments</span> That Matter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-400 text-sm md:text-lg"
        >
          Premium photography for Event | Branding | Lifestlye . <br></br>
          Turning real-life moments into timeless visual stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex  sm:flex-row gap-6 justify-center"
        >
          <button className="bg-white text-black px-6 py-3 text-sm tracking-widest hover:opacity-80 transition">
            VIEW PORTFOLIO
          </button>

          <button className="border border-white px-6 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition">
            BOOK SESSION
          </button>
        </motion.div>

      </div>

    {/* Bottom fade */}
<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black" />
    </section>
    
    
  );
}