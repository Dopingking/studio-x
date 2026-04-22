import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const services = [
    "Photography",
    "Film Making",
    "Live Broadcasting",
    "Live Streaming",
    "Content Creation",
    "Podcast Video",
    "Digital Printing",
    "Drone Piloting",
    "Web Development",
    "Training",
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close all menus cleanly
  const closeMobile = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
          : "bg-black/50 backdrop-blur-md"
      }`}
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4 text-white">

        {/* LOGO */}
        <a href="#home" className="tracking-[0.25em] font-semibold">
          SDK Studio
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider">

          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>

          {/* SERVICES */}
        <li
  className="relative"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>
  <button className="flex items-center gap-1 uppercase hover:text-gray-300">
    Services
    <FiChevronDown
      className={`transition-transform ${
        servicesOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  <AnimatePresence>
    {servicesOpen && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute top-10 left-0 bg-black/95 border border-white/10 rounded-lg w-56 py-3"
      >
        {services.map((item, i) => (
          <a
            key={i}
            href="#services"
            className="block px-4 py-2 text-sm hover:bg-white hover:text-black"
            onClick={() => setServicesOpen(false)}
          >
            {item}
          </a>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</li>

          <li><a href="#portfolio" className="hover:text-gray-300">Portfolio</a></li>
          <li><a href="#product" className="hover:text-gray-300">Product</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block border border-white px-4 py-2 text-xs hover:bg-white hover:text-black transition"
        >
          BOOK NOW
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
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
            className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 space-y-5"
          >

            <a onClick={closeMobile} href="#home" className="block">Home</a>
            <a onClick={closeMobile} href="#about" className="block">About</a>

            {/* MOBILE SERVICES */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full uppercase text-sm"
              >
                Services
                <FiChevronDown
                  className={`transition-transform ${
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
                    className="pl-4 mt-3 space-y-2 text-sm text-gray-300 overflow-hidden"
                  >
                    {services.map((item, i) => (
                      <a
                        key={i}
                        href="#services"
                        onClick={closeMobile}
                        className="block hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a onClick={closeMobile} href="#portfolio" className="block">Portfolio</a>
            <a onClick={closeMobile} href="#product" className="block">Product</a>
            <a onClick={closeMobile} href="#contact" className="block">Contact</a>

            <a
              href="#contact"
              onClick={closeMobile}
              className="block border border-white text-center py-2 mt-4 hover:bg-white hover:text-black"
            >
              BOOK NOW
            </a>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}