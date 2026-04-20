import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    title: "Elegant Portrait",
    category: "Portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Wedding Bliss",
    category: "Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "Urban Story",
    category: "Lifestyle",
  },
  {
    src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    title: "Golden Hour",
    category: "Outdoor",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    title: "Nature Frame",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    title: "Adventure Shot",
    category: "Travel",
  },
];

const categories = ["All", "Wedding", "Portrait", "Lifestyle", "Outdoor"];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Auto slideshow
  useEffect(() => {
    if (selected === null) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selected, filteredImages.length]);

  const openImage = (img, index) => {
    setSelected(img);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="bg-black text-white py-24 px-6 md:px-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-light">Our Portfolio</h2>
        <p className="text-gray-400 mt-3">
          Explore our work across different styles and moments.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm border ${
              activeCategory === cat
                ? "bg-white text-black"
                : "border-white text-white"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <AnimatePresence>
          {filteredImages.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.03 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => openImage(img, i)}
            >
              <img
                src={img.src}
                className="w-full h-60 md:h-80 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                <h3 className="text-sm">{img.title}</h3>
                <p className="text-xs text-gray-300">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white text-2xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* Prev */}
            <button
              className="absolute left-6 text-3xl"
              onClick={prevImage}
            >
              ‹
            </button>

            {/* Image */}
            <motion.img
              key={currentIndex}
              src={filteredImages[currentIndex].src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="max-h-[80%] rounded-xl shadow-2xl"
            />

            {/* Next */}
            <button
              className="absolute right-6 text-3xl"
              onClick={nextImage}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}