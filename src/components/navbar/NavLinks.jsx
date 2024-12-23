import React from "react";
import Link from "next/link";

export const NavLinks = () => {
  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-9 py-4 md:py-0">
      <li>
        <Link href="/#inicio" className="text-sm text-zinc-200 hover:underline">Inicio</Link>
      </li>
      <li>
        <Link href="/#nosotros" className="text-sm text-zinc-200 hover:underline">Nosotros</Link>
      </li>
      <li>
        <Link href="/#servicios" className="text-sm text-zinc-200 hover:underline">Servicios</Link>
      </li>
      <li>
        <Link href="/#contacto" className="text-sm text-zinc-200 hover:underline">Contacto</Link>
      </li>
    </ul>
  );
};

