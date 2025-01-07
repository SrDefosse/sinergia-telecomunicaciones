import { CalloutChip } from "../../utils/CalloutChip";
import { Card } from "../../utils/Card";
import { PulseLine } from "@/components/utils/PulseLine";

export const Tower = () => {
  return (
    <div className="flex-grow">
      <Card className="shadow-lg transition-transform transform hover:scale-105 h-full">
        <PulseLine />
        <CalloutChip>Experiencia y Confiabilidad</CalloutChip>
        <p className="mb-2 text-2xl">Líder en el sector de soluciones de telecomunicaciones</p>
        <p className="mb-8 text-zinc-400">
          Con años de experiencia, Sinergia Telecomunicaciones se ha convertido en un socio confiable para empresas que buscan soluciones de calidad en conectividad. 
          Cada proyecto refleja nuestro compromiso con la estabilidad, seguridad y satisfacción del cliente.
        </p>
        <img 
          src="/images/feature1.jpg" 
          alt="Torre de telecomunicaciones"
          className="w-full h-auto rounded-lg"
        />
      </Card>
    </div>
  );
};
