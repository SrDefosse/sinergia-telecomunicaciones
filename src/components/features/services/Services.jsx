import React from "react";
import Link from "next/link";

const services = [
  { 
    title: "Sistemas de Energía Solar", 
    href: "/servicios#energia-solar", 
    src: "/images/servicios/energia-solar.jpg",
    description: "Instalación y mantenimiento de sistemas solares."
  },
  { 
    title: "Climatización y Enfriamiento", 
    href: "/servicios#climatizacion", 
    src: "/images/servicios/climatizacion.jpg",
    description: "Soluciones de climatización eficientes."
  },
  { 
    title: "Plantas de Emergencia", 
    href: "/servicios#plantas-emergencia", 
    src: "/images/servicios/plantas-emergencia.jpg",
    description: "Sistemas de respaldo para sistemas eléctricos."
  },
  { 
    title: "Fibra Optica", 
    href: "/servicios#fibra-optica", 
    src: "/images/servicios/fibra-optica.jpg",
    description: "Instalación y mantenimiento de redes de fibra óptica."
  },
  { 
    title: "CCTV y Seguridad", 
    href: "/servicios#cctv-seguridad", 
    src: "/images/servicios/cctv-seguridad.jpg",
    description: "Instalación y mantenimiento de sistemas de CCTV y seguridad."
  },
  { 
    title: "Wi-Fi", 
    href: "/servicios#wifi", 
    src: "/images/servicios/wifi.jpg",
    description: "Instalación y mantenimiento de sistemas Wi-Fi."
  },
  { 
    title: "Torres de Comunicaciones", 
    href: "/servicios#torres-telecomunicaciones", 
    src: "/images/servicios/torres-telecomunicaciones.jpg",
    description: "Construcción y mantenimiento de torres de comunicaciones."
  },
  { 
    title: "Telefonía", 
    href: "/servicios#telefonia", 
    src: "/images/servicios/telefonia.jpg",
    description: "Instalación y mantenimiento de sistemas de telefonía."
  },
  { 
    title: "UPS", 
    href: "/servicios#ups", 
    src: "/images/servicios/ups.jpg",
    description: "Instalación y mantenimiento de sistemas de respaldo."
  },
  { 
    title: "Control de Acceso", 
    href: "/servicios#control-acceso", 
    src: "/images/servicios/control-acceso.jpg",
    description: "Instalación y mantenimiento de sistemas de control de acceso."
  },
  { 
    title: "Equipo Activo", 
    href: "/servicios#equipo-activo", 
    src: "/images/servicios/equipo-activo.jpg",
    description: "Instalación y mantenimiento de equipos activos."
  },
  { 
    title: "Redes de Voz y Datos Certificados", 
    href: "/servicios#redes-voz-datos", 
    src: "/images/servicios/redes-voz-datos.jpg",
    description: "Instalación y mantenimiento de redes de voz y datos certificados."
  },
  { 
    title: "Detección de Incendio", 
    href: "/servicios#deteccion-incendio", 
    src: "/images/servicios/deteccion-incendio.jpg",
    description: "Instalación y mantenimiento de sistemas de detección de incendio."
  },
  { 
    title: "Tierras Físicas y Pararrayos", 
    href: "/servicios#tierras-fisicas", 
    src: "/images/servicios/tierras-fisicas.jpg",
    description: "Instalación y mantenimiento de tierras físicas y pararrayos."
  },
  { 
    title: "Internet de las Cosas", 
    href: "/servicios#internet-cosas", 
    src: "/images/servicios/internet-cosas.jpg",
    description: "Instalación y mantenimiento de sistemas de internet de las cosas."
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="mt-4 relative w-full overflow-hidden py-6 sm:py-8">
      <div className="p-4 text-neutral-50 md:p-12">
        {/* Rectángulo superior que ocupa las 3 columnas */}
        <div className="mx-auto mb-4 grid max-w-5xl grid-cols-1 border border-neutral-700 md:grid-cols-3 md:divide-x rounded-lg">
          <TitleCard />
        </div>

        {/* Cuadrícula 3x5 de servicios */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 border-x border-b border-neutral-700 md:grid-cols-3 md:grid-rows-5 rounded-lg">
          {services.map((service) => (
            <Card
              key={service.title}
              href={service.href}
              title={service.title}
              src={service.src}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ href, title, src, description }) => {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-end overflow-hidden p-6 transition-transform hover:scale-105 aspect-square"
    >
      {/* Título del servicio */}
      <h2 className="relative z-10 text-lg md:text-xl font-bold leading-tight transition-transform duration-500 group-hover:-translate-y-3">
        {title}
      </h2>
      {/* Descripción del servicio */}
      <p className="relative z-10 text-sm text-neutral-200">{description}</p>

      {/* Imagen de fondo: menos visible al inicio, completamente visible al hacer hover */}
      <div
        className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Esquinas verdes */}
      <Corners />
    </Link>
  );
};

const TitleCard = () => {
  return (
    <Link
      href="/servicios"
      target="_blank"
      className="group relative flex h-32 items-center justify-center bg-neutral-900 md:col-span-3"
    >
      <span className="relative z-10 text-2xl text-neutral-200 transition-colors duration-500 group-hover:text-emerald-300">
        Nuestros Servicios
      </span>
      <Corners />
    </Link>
  );
};

const Corners = () => (
  <>
    <span className="absolute left-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute left-[1px] top-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] right-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] right-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] left-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] left-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-[1px] top-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
  </>
);
