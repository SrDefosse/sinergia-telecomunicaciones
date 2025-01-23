// TextParallaxContent.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BubbleButton } from "@/components/buttons/BubbleButton";

const IMG_PADDING = 12;

export const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
  description = "Descripcion del servicio",
  id,
  extraContent,
}) => {
  return (
    <div
      id={id}
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      {/* Contenedor ajustado para mobile y desktop */}
      <div className="relative h-[60vh] md:h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>

      {/* Descripción y contenido extra */}
      <div className="mx-auto max-w-5xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {extraContent && (
          <div className="md:col-span-1 text-sm sm:text-lg md:text-xl font-bold mb-4">
            {extraContent}
          </div>
        )}

        <div className="md:col-span-2">
          <p className="text-lg text-white leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Botón para WhatsApp */}
      <div className="flex justify-center mb-8">
        <BubbleButton
          onClick={() => {
            const message = "Hola! Me gustaría saber más sobre sus servicios";
            const encodedMessage = encodeURIComponent(message);
            window.open(
              `https://wa.me/524772660380?text=${encodedMessage}`,
              "_blank"
            );
          }}
        >
          Más Información
        </BubbleButton>
      </div>

      {/* Contenido adicional (hijos) */}
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  // Animaciones de Framer Motion
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="sticky top-[12px] z-0 w-full h-full overflow-hidden rounded-3xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${imgUrl})`,
        scale,
      }}
    >
      {/* Capa de oscurecimiento */}
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Animaciones de Framer Motion
  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="absolute inset-0 flex items-center justify-center w-full h-full text-white text-center"
      style={{
        y,
        opacity,
      }}
    >
      <div>
        <p className="mb-2 text-xl md:mb-4 md:text-3xl">{subheading}</p>
        <p className="text-4xl font-bold md:text-7xl">{heading}</p>
      </div>
    </motion.div>
  );
};
