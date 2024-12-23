import React, { useState } from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      animate={{
        opacity: 1,
        y: "0%",
      }}
      transition={{
        duration: 1.25,
        ease: "easeInOut",
      }}
      className={`fixed left-0 right-0 top-0 z-50 bg-zinc-950/0 py-3 transition-colors ${
        scrolled && "bg-zinc-950/80 backdrop-blur"
      }`}
    >
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <NavLogo />
          <div className="hidden md:block">
            <NavLinks />
          </div>
          <button
            className="md:hidden text-zinc-200 hover:text-zinc-50"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </MaxWidthWrapper>
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 mt-2">
          <MaxWidthWrapper>
            <NavLinks />
          </MaxWidthWrapper>
        </div>
      )}
    </motion.nav>
  );
};

