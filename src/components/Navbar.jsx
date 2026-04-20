import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "Portfolio", "About", "Contact"];

  const services = [
    "Photography",
    "Film Making",
    "Live Broadcasting",
    "Live Streaming",
    "Content Creation",
    "Podcast Video",
    "Drone Piloting",
    "Web Development",
    "Training",
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
          : "bg-black/50 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4 text-white">

        {/* Logo */}
        <a href="#home" className="tracking-[0.25em] font-semibold">
          SDK Studio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider">

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="cursor-pointer">Services</span>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute top-8 left-0 bg-black/95 backdrop-blur-xl p-6 rounded-xl shadow-xl grid grid-cols-2 gap-4 min-w-[300px]"
                >
                  {services.map((item, i) => (
                    <a
                      key={i}
                      href="#services"
                      className="text-sm hover:text-gray-300 transition"
                    >
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Other Links */}
          {navItems.map((item, i) => (
            <li key={i}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-gray-300">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block border border-white px-4 py-2 text-xs hover:bg-white hover:text-black transition"
        >
          BOOK NOW
        </a>

        {/* Mobile Toggle */}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-black/95 text-white px-6 py-8 space-y-6"
          >

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left uppercase text-sm mb-3"
              >
                Services
              </button>

              {servicesOpen && (
                <div className="pl-4 space-y-2 text-sm text-gray-300">
                  {services.map((item, i) => (
                    <a
                      key={i}
                      href="#services"
                      onClick={() => setOpen(false)}
                      className="block hover:text-white"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block uppercase text-sm"
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className="block border border-white text-center py-2 mt-4 hover:bg-white hover:text-black transition"
            >
              BOOK NOW
            </a>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}