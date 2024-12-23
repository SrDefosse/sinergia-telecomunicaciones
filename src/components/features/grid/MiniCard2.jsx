import React from "react";
import { Card } from "../../utils/Card";
import { CalloutChip } from "../../utils/CalloutChip";
import { BubbleButton } from "@/components/buttons/BubbleButton";

export const MiniCard2 = () => {
  return (
    <div className="col-span-2 h-[375px] md:col-span-1">
      <Card className="flex flex-col justify-center items-center h-full shadow-lg transition-transform transform hover:scale-105">
        <div className="mx-auto w-fit">
          <CalloutChip>RESULTADOS QUE HABLAN POR SÍ MISMOS</CalloutChip>
        </div>
        <p className="mb-1.5 text-center text-2xl">Construyendo confianza, impulsando el futuro</p>
        <p className="mb-6 text-center text-zinc-400">
          Cada solución que entregamos no solo resuelve problemas, sino que eleva estándares.
          Nuestro compromiso es proporcionar resultados tangibles que transformen su negocio.
        </p>
        <BubbleButton className="mx-auto" onClick={() => {
          window.location.href = "#contacto";
        }}>
          Contáctanos
        </BubbleButton>
      </Card>
    </div>
  );
};

export default MiniCard2;
