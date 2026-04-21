import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Photography",
    subtitle: "Capturing timeless moments with precision and creativity.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    title: "Film Making",
    subtitle: "Bringing stories to life through cinematic visuals.",
    image: "https://d2b6aloc836m7p.cloudfront.net/wp-content/uploads/2025/05/The-Science-of-Filmmaking-813X451-1.png",
  },
  {
    title: "Live Streaming",
    subtitle: "Seamless streaming for events and productions.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Content Creation",
    subtitle: "Creative visuals tailored for brands and businesses.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Drone Piloting",
    subtitle: "Stunning aerial shots that elevate your story.",
    image: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // SWIPE HANDLING
  const handleDragEnd = (e, info) => {
    if (info.offset.x < -50) nextSlide();
    if (info.offset.x > 50) prevSlide();
  };

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden pt-20 md:pt-24">

      {/* IMAGE */}
      <AnimatePresence>
        <motion.img
          key={current}
          src={slides[current].image}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16">
        <div className="max-w-xl">

          <motion.h1
            key={slides[current].title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight"
          >
            {slides[current].title}
          </motion.h1>

          <motion.p
            key={slides[current].subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-xs sm:text-base md:text-lg text-gray-300"
          >
            {slides[current].subtitle}
          </motion.p>

          {/* <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-white text-black px-5 py-2 text-xs sm:text-sm tracking-widest hover:opacity-80 transition">
              VIEW PORTFOLIO
            </button>

            <button className="border border-white px-5 py-2 text-xs sm:text-sm tracking-widest hover:bg-white hover:text-black transition">
              BOOK SESSION
            </button>
          </div> */}

        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`cursor-pointer transition-all duration-300 ${
              current === i
                ? "w-8 h-1 bg-white"
                : "w-4 h-1 bg-white/40"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
}