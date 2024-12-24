import { motion } from "framer-motion";
import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";

const certifications = [
  { id: 1, src: "/images/certificaciones/certificacion1.png", alt: "Certificación 1" },
  { id: 2, src: "/images/certificaciones/certificacion2.png", alt: "Certificación 2" },
  { id: 3, src: "/images/certificaciones/certificacion3.png", alt: "Certificación 3" },
  { id: 4, src: "/images/certificaciones/certificacion4.png", alt: "Certificación 4" },
  { id: 5, src: "/images/certificaciones/certificacion5.png", alt: "Certificación 5" },
  { id: 6, src: "/images/certificaciones/certificacion6.png", alt: "Certificación 6" },
  { id: 7, src: "/images/certificaciones/certificacion7.png", alt: "Certificación 7" },
  { id: 8, src: "/images/certificaciones/certificacion8.png", alt: "Certificación 8" },
  { id: 9, src: "/images/certificaciones/certificacion9.png", alt: "Certificación 9" },
  { id: 10, src: "/images/certificaciones/certificacion10.png", alt: "Certificación 10" },
  { id: 11, src: "/images/certificaciones/certificacion11.png", alt: "Certificación 11" },
  { id: 12, src: "/images/certificaciones/certificacion12.png", alt: "Certificación 12" },
  { id: 13, src: "/images/certificaciones/certificacion13.png", alt: "Certificación 13" },
  { id: 14, src: "/images/certificaciones/certificacion14.png", alt: "Certificación 14" },
  { id: 15, src: "/images/certificaciones/certificacion15.png", alt: "Certificación 15" },
  { id: 16, src: "/images/certificaciones/certificacion16.png", alt: "Certificación 16" },
  { id: 17, src: "/images/certificaciones/certificacion17.png", alt: "Certificación 17" },
  { id: 18, src: "/images/certificaciones/certificacion18.png", alt: "Certificación 18" },
  { id: 19, src: "/images/certificaciones/certificacion19.png", alt: "Certificación 19" },
  { id: 20, src: "/images/certificaciones/certificacion20.png", alt: "Certificación 20" },
  { id: 21, src: "/images/certificaciones/certificacion21.png", alt: "Certificación 21" },
];

export const Certifications = () => {
  return (
    <section className="mt-16 relative w-full overflow-hidden py-12 sm:py-16">
      <div className="flex flex-col items-center justify-center">
          <span className="mb-8 bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-2xl sm:text-3xl font-bold text-transparent">
            Nuestras Certificaciones
          </span>
          <p className="mb-12 text-center text-base text-zinc-400">
            Estamos certificados a nivel nacional e internacional, asegurando que nuestros servicios cumplan con los más altos estándares del mercado.
          </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-8 flex w-full overflow-hidden">
          <TranslateWrapper>
            <CertificationItems />
          </TranslateWrapper>
          <TranslateWrapper>
            <CertificationItems />
          </TranslateWrapper>
          <TranslateWrapper>
            <CertificationItems />
          </TranslateWrapper>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />
    </section>
  );
};

const TranslateWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ translateX: "0%" }}
      animate={{ translateX: "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-12 px-6 min-w-max"
    >
      {children}
    </motion.div>
  );
};

const CertificationItems = () => (
  <div className="flex gap-12">
    {certifications.map(cert => (
      <CertificationItem key={cert.id} src={cert.src} alt={cert.alt} />
    ))}
  </div>
);

const CertificationItem = ({ src, alt }) => (
  <div className="flex items-center">
    <img 
      src={src} 
      alt={alt} 
      className="h-16 w-auto sm:h-20 md:h-24 lg:h-32" 
    />
  </div>
);
