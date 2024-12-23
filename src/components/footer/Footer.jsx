import React from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { NavLogo } from "../navbar/NavLogo";
import { SiInstagram, SiX } from "react-icons/si";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12">
      <MaxWidthWrapper className="relative z-20 grid grid-cols-12 gap-x-1.5 gap-y-6">
        <LogoColumn />
        <GenericColumn
          title="Sinergia"
          links={[
            {
              title: "Nosotros",
              href: "/#nosotros",
            },
            {
              title: "Servicios",
              href: "/#servicios",
            },
            {
              title: "Contacto",
              href: "/#contacto",
            },
          ]}
        />
        <GenericColumn
          title="Legal"
          links={[
            {
              title: "Política de Privacidad",
              href: "/politica-de-privacidad",
            },
          ]}
        />
        <GenericColumn
          title="Redes Sociales"
          links={[
            {
              title: "Twitter",
              href: "/#",
              Icon: SiX,
            },
            {
              title: "Instagram",
              href: "/#",
              Icon: SiInstagram,
            },
          ]}
        />
      </MaxWidthWrapper>
    </footer>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <NavLogo />
      <span className="mt-3 inline-block text-xs text-zinc-400">
        © Sinergia Telecomunicaciones - Todos los derechos reservados.<br/>
      </span>
      <span className="mt-3 inline-block text-xs text-zinc-400">
        <a 
          href="https://blinksites.mx" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-400 hover:text-zinc-200"
        >
          By BlinkSites ;)
        </a>
      </span>
    </div>
  );
};

const GenericColumn = ({ title, links }) => {
  return (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <span className="block text-zinc-50">{title}</span>
      {links.map((l) => (
        <Link
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </Link>
      ))}
    </div>
  );
};
