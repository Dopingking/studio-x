import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Photography",
    subtitle: "Capturing timeless moments with precision and creativity.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Film Making",
    subtitle: "Bringing stories to life through cinematic visuals.",
    image: "https://d2b6aloc836m7p.cloudfront.net/wp-content/uploads/2025/05/The-Science-of-Filmmaking-813X451-1.png",
  },
  {
    title: "Live Streaming",
    subtitle: "Seamless streaming for events and productions.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Content Creation",
    subtitle: "Creative visuals tailored for brands and businesses.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Drone Piloting",
    subtitle: "Stunning aerial shots that elevate your story.",
    image: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleDragEnd = (e, info) => {
    if (info.offset.x < -60) nextSlide();
    if (info.offset.x > 60) prevSlide();
  };

  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[90vh] overflow-hidden pt-20 md:pt-24">

      {/* IMAGE */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current].image}
          alt={slides[current].title}
          loading={current === 0 ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-5 sm:px-8 md:px-16">
        <div className="max-w-2xl">

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
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-300"
          >
            {slides[current].subtitle}
          </motion.p>

        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${
              current === i
                ? "w-8 h-1.5 bg-white"
                : "w-4 h-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}