import React from "react";
import { Card } from "../../utils/Card";
import { CalloutChip } from "../../utils/CalloutChip";
import { BubbleButton } from "@/components/buttons/BubbleButton";

export const MiniCard1 = () => {
  return (
    <div className="col-span-2 h-[375px] md:col-span-1">
      <Card className="flex flex-col justify-center items-center h-full shadow-lg transition-transform transform hover:scale-105">
        <div className="mx-auto w-fit">
          <CalloutChip>SOLUCIONES INTEGRALES DE CONECTIVIDAD</CalloutChip>
        </div>
        <p className="mb-1.5 text-center text-2xl">Resaltamos soluciones completas</p>
        <p className="mb-6 text-center text-zinc-400">
          Desde la instalación de infraestructura hasta el despliegue de fibra óptica y la configuración de redes,
          cubrimos cada detalle para asegurar que nuestros clientes reciban una solución adaptada a sus necesidades.
        </p>
        <BubbleButton className="mx-auto" onClick={() => {
          window.location.href = "#servicios";
        }}>
          Conoce Más
        </BubbleButton>
      </Card>
    </div>
  );
};
