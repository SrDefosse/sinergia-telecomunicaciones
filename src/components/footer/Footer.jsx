import React from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { NavLogo } from "../navbar/NavLogo";
import { SiInstagram, SiX } from "react-icons/si";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10">
          <LogoColumn />
          <GenericColumn
            title="Sinergia"
            links={[
              { title: "Nosotros", href: "/#nosotros" },
              { title: "Servicios", href: "/#servicios" },
              { title: "Contacto", href: "/#contacto" },
            ]}
          />
          <GenericColumn
            title="Legal"
            links={[
              { title: "Política de Privacidad", href: "/politica-de-privacidad" },
            ]}
          />
          <GenericColumn
            title="Redes Sociales"
            links={[
              { title: "Twitter", href: "/#", Icon: SiX },
              { title: "Instagram", href: "/#", Icon: SiInstagram },
            ]}
          />
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

const LogoColumn = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="max-w-[160px]">
        <NavLogo />
      </div>
      <div className="flex flex-col space-y-4 text-sm text-zinc-400">
        <p>© Sinergia Telecomunicaciones - Todos los derechos reservados.</p>
        <a
          href="https://blinksites.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-200 transition-colors duration-200"
        >
          By BlinkSites ;)
        </a>
      </div>
    </div>
  );
};

const GenericColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col space-y-6">
      <h3 className="text-zinc-50 font-semibold">{title}</h3>
      <ul className="flex flex-col space-y-4">
        {links.map((l) => (
          <li key={l.title}>
            <Link
              href={l.href}
              className="group flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
            >
              {l.Icon && (
                <l.Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
              )}
              <span className="hover:underline">{l.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;