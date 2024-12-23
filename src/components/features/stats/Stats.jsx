import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { CornerBlur } from "@/components/utils/CornerBlur";

export const Stats = () => {
  return (
    <div className="relative overflow-hidden">
      <CornerBlur/>
      <div className="relative z-20 mx-auto max-w-5xl px-4 py-12">
        <h2 className="mx-auto mb-9 block w-fit bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-lg text-transparent">
          Compromiso y Resultados en Números
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center">
          <Stat
            num={5000}
            suffix="+"
            subheading="Proyectos Desarrollados"
          />
          <Stat
            num={1500}
            suffix="+"
            subheading="Enlaces Instalados"
          />
          <Stat
            num={1000}
            suffix="+"
            subheading="Kms de Fibra Óptica Instalada"
          />
          <Stat
            num={10000}
            suffix="+"
            subheading="Nodos de Red Instalados"
          />
          <Stat
            num={20}
            suffix="+"
            subheading="Años de Experiencia"
          />
        </div>
      </div>

    </div>
  );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex flex-col items-center">
      <p className="mb-2 text-center text-7xl font-semibold text-zinc-50 sm:text-6xl">
        <span ref={ref}></span>
        <span className="text-emerald-500">{suffix}</span>
      </p>
      <p className="max-w-48 text-center text-zinc-500">{subheading}</p>
    </div>
  );
};
