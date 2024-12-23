import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

export const WAButton = () => {
  return (
    <a
      href="https://wa.me/524772660380"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
};

export default WAButton;