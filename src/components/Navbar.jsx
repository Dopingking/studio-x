import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const services = useMemo(() => [
    "Photography",
    "Film Making",
    "Live Broadcasting",
    "Live Streaming",
    "Content Creation",
    "Podcast Video Production",
    "Digital Printing",
    "Drone Piloting",
    "Web Development",
    "Training",
  ], []);

  const handleScroll = useCallback(() => {
    const shouldScroll = window.scrollY > 50;
    setScrolled(prev => (prev !== shouldScroll ? shouldScroll : prev));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMobile = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-black/50 backdrop-blur-md"
      }`}
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-6 md:px-10 py-5 md:py-4 text-white">

        {/* LOGO */}
        <a href="#home" className="tracking-[0.15em] text-lg md:text-xl font-semibold">
          SDK Studio
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm uppercase tracking-wider">

          <li><a href="#home" className="hover:text-gray-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>

          {/* SERVICES */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 uppercase hover:text-gray-300 transition">
              SERVICES
              <FiChevronDown
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 bg-black/95 border border-white/10 rounded-lg w-56 py-2 shadow-xl"
                >
                  {services.map((item) => (
                    <a
                      key={item}
                      href="#services"
                      className="block px-4 py-2 text-sm hover:bg-white hover:text-black transition"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li><a href="#portfolio" className="hover:text-gray-300 transition">Portfolio</a></li>
          <li><a href="#product" className="hover:text-gray-300 transition">Product</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block border border-white px-5 py-2 text-sm rounded-md hover:bg-white hover:text-black transition"
        >
          BOOK NOW
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(prev => !prev)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 border-t border-white/10 px-6 pt-10 pb-12 space-y-8 text-lg min-h-screen"
          >

            <a onClick={closeMobile} href="#home" className="block py-3 font-medium">Home</a>
            <a onClick={closeMobile} href="#about" className="block py-3 font-medium">About</a>

            {/* MOBILE SERVICES */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(prev => !prev)}
                className="flex items-center justify-between w-full uppercase text-lg py-3 font-medium"
              >
                SERVICES
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 mt-4 space-y-4 text-base text-gray-300 overflow-hidden"
                  >
                    {services.map((item) => (
                      <a
                        key={item}
                        href="#services"
                        onClick={closeMobile}
                        className="block py-2 hover:text-white transition"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a onClick={closeMobile} href="#portfolio" className="block py-3 font-medium">Portfolio</a>
            <a onClick={closeMobile} href="#product" className="block py-3 font-medium">Product</a>
            <a onClick={closeMobile} href="#contact" className="block py-3 font-medium">Contact</a>

            <a
              href="#contact"
              onClick={closeMobile}
              className="block border border-white text-center py-4 mt-8 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition"
            >
              BOOK NOW
            </a>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}