import React from "react";
import {
  FiGlobe,
  FiClock,
  FiTool,
  FiTrendingUp,
  FiHeadphones,
  FiCpu,
} from "react-icons/fi";

export const SimpleGrid = () => (
  <div className="relative z-10 grid grid-cols-2 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
    <Item
      Icon={FiGlobe}
      title="Conectividad Sólida"
      subtitle="Disfruta de una infraestructura de telecomunicaciones confiable y robusta, diseñada para soportar las demandas de tu negocio sin interrupciones."
    />
    <Item
      Icon={FiClock}
      title="Ahorro de Tiempo"
      subtitle="Con nuestra experiencia y procesos optimizados, reducimos los tiempos de instalación y configuración para que puedas empezar a operar más rápido."
    />
    <Item
      Icon={FiHeadphones}
      title="Soporte Continuo"
      subtitle="Nuestro equipo de expertos está disponible para resolver cualquier problema técnico, asegurando que tu conectividad nunca se vea afectada."
    />
    <Item
      Icon={FiTrendingUp}
      title="Optimización de Recursos"
      subtitle="Maximiza el rendimiento de tu inversión en telecomunicaciones, aprovechando soluciones personalizadas que se ajustan a tu presupuesto y necesidades."
    />
    <Item
      Icon={FiTool}
      title="Instalación Eficiente"
      subtitle="Llevamos a cabo instalaciones con precisión y eficiencia, para que tu infraestructura esté lista y funcionando en el menor tiempo posible."
    />
    <Item
      Icon={FiCpu}
      title="Tecnología de Vanguardia"
      subtitle="Contamos con equipos y tecnología de última generación, lo que nos permite ofrecer soluciones innovadoras y de alto rendimiento."
    />
  </div>
);

const Item = ({ Icon, title, subtitle }) => {
  return (
    <div>
      <h4 className="mb-1.5 flex items-start text-lg font-medium md:text-xl">
        <Icon className="mr-1.5 h-[26px] text-emerald-300" />
        {title}
      </h4>
      <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p>
    </div>
  );
};
