import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black  text-gray-400 pt-20 pb-10 px-6 md:px-12 border-t border-white/10">

      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl tracking-widest mb-4 cursor-pointer">
            SDK Studio
          </h2>
          <p className="text-sm leading-relaxed">
            Luxury photography studio capturing timeless moments with elegance and precision.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white mb-4 text-sm uppercase tracking-wider">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {["Weddings", "Portraits", "Events", "Studio"].map((item, i) => (
              <li key={i}>
                <a href="#services" className="hover:text-white transition cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Portfolio", "About", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-white mb-4 text-sm uppercase tracking-wider">
            Contact
          </h3>

          <p className="text-sm mb-3">
            📞 +234 XXX XXX XXXX
          </p>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            className="inline-block text-sm text-white border border-white px-4 py-2 mb-4 hover:bg-white hover:text-black transition"
          >
            Chat on WhatsApp
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mt-2">
            <a href="#" className="hover:scale-110 transition cursor-pointer">
              <FaInstagram />
            </a>
            <a href="#" className="hover:scale-110 transition cursor-pointer">
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/234XXXXXXXXXX"
              className="hover:scale-110 transition cursor-pointer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center mt-12 text-xs text-gray-500 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} SDK Studio Photography. All rights reserved.
      </div>
    </footer>
  );
}