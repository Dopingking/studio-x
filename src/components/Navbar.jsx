import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4 text-white">
        
        {/* Logo */}
        <h1 className="text-lg md:text-xl font-semibold tracking-[0.2em] cursor-pointer">
          STUDIOX
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider">
          {["Home", "Portfolio", "About", "Contact", "Services", "Product"].map((item, i) => (
            <li key={i} className="relative group cursor-pointer">
              <a href={`#${item.toLowerCase()}`}>
                {item}
              </a>

              {/* Underline hover effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block border border-white px-4 py-2 text-xs tracking-widest hover:bg-white hover:text-black transition duration-300">
          BOOK NOW
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: open ? "auto" : 0 }}
        className="overflow-hidden md:hidden bg-black/90 text-white"
      >
        <div className="flex flex-col items-center gap-6 py-6 text-sm uppercase tracking-wider">
          {["Home", "Portfolio", "About", "Contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:text-gray-300 transition"
            >
              {item}
            </a>
          ))}

          <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition">
            BOOK NOW
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}