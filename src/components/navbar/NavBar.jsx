// NavBar.jsx
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router"; 
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const menuRef = useRef(null);
  const router = useRouter();

  // Detecta el scroll para cambiar el estilo del navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 150);
  });

  // Abre y cierra el menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Detecta clics fuera del menú móvil para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    // Añade el listener al documento
    document.addEventListener("mousedown", handleClickOutside);

    // Limpia el listener al desmontar
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cierra el menú móvil al cambiar la ruta (es decir, al hacer clic en un enlace)
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // Limpia el listener al desmontar
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 1.25, ease: "easeInOut" }}
      className={`fixed left-0 right-0 top-0 z-50 bg-zinc-950/0 py-3 transition-colors ${
        scrolled && "bg-zinc-950/80 backdrop-blur"
      }`}
    >
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLogo />

          {/* Links de navegación (versión escritorio) */}
          <div className="hidden md:flex items-center gap-6">
            <NavLinks />

            {/* Íconos de redes (solo desktop) */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61571943795010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-zinc-50 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/sinergia_telecomunicaciones/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-zinc-50 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/+524772660380"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-zinc-50 transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden text-zinc-200 hover:text-zinc-50"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Cerrar menú móvil" : "Abrir menú móvil"} // Accesibilidad mejorada
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </MaxWidthWrapper>

      {/* Menú móvil con animación */}
      {mobileMenuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:hidden bg-zinc-900 overflow-hidden mt-2 relative"
        >
          <MaxWidthWrapper>
            {/* Links versión móvil */}
            <NavLinks />

            {/* Íconos de redes (solo móvil) */}
            <div className="flex gap-4 mt-4 pb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61571943795010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-zinc-50 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/sinergia_telecomunicaciones/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-zinc-50 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/+524772660380"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-zinc-50 transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </MaxWidthWrapper>
        </motion.div>
      )}
    </motion.nav>
  );
};
