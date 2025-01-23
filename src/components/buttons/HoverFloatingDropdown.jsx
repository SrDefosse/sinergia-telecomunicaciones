import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function HoverFloatingDropdown() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group inline-block">
      {/* Contenedor relativo para posicionar el menú */}
      <div className="relative">
        {/* Botón principal flotante (cuadrado, esquinas redondeadas) */}
        <button
          className="
            w-14 
            h-14 
            bg-gradient-to-br from-emerald-400 to-emerald-600
            hover:bg-gradient-to-br from-emerald-500 to-emerald-700 
            text-white 
            rounded-lg 
            shadow-lg
            flex 
            items-center 
            justify-center 
            transition-all 
            duration-300
          "
        >
          <FaWhatsapp size={25} />
        </button>

        {/* Menú de íconos (se muestra al hacer hover sobre el contenedor "group") */}
        <div
          className="
            absolute 
            bottom-16 
            right-0 
            flex 
            flex-col 
            items-end 
            space-y-2
            transform 
            opacity-0 
            scale-0 
            group-hover:opacity-100 
            group-hover:scale-100
            origin-bottom-right 
            transition-all 
            duration-300
          "
        >
          {/* Ícono de Instagram (ahora en rojo) */}
          <a
            href="https://www.instagram.com/sinergia_telecomunicaciones/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-10 
              h-10 
              bg-red-500 
              hover:bg-red-600 
              rounded-lg 
              flex 
              items-center 
              justify-center 
              text-white 
              shadow-lg 
              transition-colors
            "
          >
            <FaInstagram />
          </a>

          {/* Ícono de Facebook (sin cambios) */}
          <a
            href="https://www.facebook.com/profile.php?id=61571943795010"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-10 
              h-10 
              bg-blue-800 
              hover:bg-blue-900 
              rounded-lg 
              flex 
              items-center 
              justify-center 
              text-white 
              shadow-lg 
              transition-colors
            "
          >
            <FaFacebookF />
          </a>

          {/* Ícono de WhatsApp (sin cambios) */}
          <a
            href="https://wa.me/524772660380"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-10 
              h-10 
              bg-green-500 
              hover:bg-green-600 
              rounded-lg 
              flex 
              items-center 
              justify-center 
              text-white 
              shadow-lg 
              transition-colors
            "
          >
            <FaWhatsapp />
          </a>

          {/* Ícono de Correo (ahora en azul) */}
          <a
            href="mailto:rtovar@sinergia-telecomunicaciones.com.mx"
            className="
              w-10 
              h-10 
              bg-blue-500
              hover:bg-blue-600 
              rounded-lg 
              flex 
              items-center 
              justify-center 
              text-white 
              shadow-lg 
              transition-colors
            "
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HoverFloatingDropdown;
