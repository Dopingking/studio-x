// src/components/WhatsAppFloat.jsx
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2348135629616"
     className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white shadow-xl hover:scale-110 transition"
    >
      <FaWhatsapp />
    </a>
  );
}