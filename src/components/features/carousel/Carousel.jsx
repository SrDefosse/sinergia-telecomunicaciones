import { Card } from "@/components/utils/Card";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionSubheading } from "@/components/utils/SectionSubheading";
import { SimpleGrid } from "../grid/SimpleGrid";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiRadio,
  FiWifi,
  FiActivity,
  FiTool,
  FiServer,
  FiMonitor,
  FiNavigation,
  FiZap,
} from "react-icons/fi";
import useMeasure from "react-use-measure";
import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Carousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (features.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section
      className="relative overflow-hidden py-12"
      ref={ref}
    >
      <div className="relative z-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-3">
              <SectionHeading>Servicios para Carriers y Telcos</SectionHeading>
              <SectionSubheading>
                Cada solución está diseñada pensando en las necesidades específicas de nuestros clientes. 
                Nos enorgullece ofrecer un servicio confiable y personalizado, respaldado por años de experiencia en el sector.
              </SectionSubheading>
            </div>
            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-zinc-700 bg-zinc-900 p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-zinc-700 bg-zinc-900 p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${features.length}, 1fr)`,
            }}
          >
            {features.map((post) => {
              return <Feature key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
        <MaxWidthWrapper className="relative z-20 pb-20 pt-20 md:pb-28 md:pt-40">
        <SimpleGrid />
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

const Feature = ({ title, description, Icon }) => {
  return (
    <Card
      className="shrink-0"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <Icon className="size-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 p-3 text-emerald-50" />
      <p className="mb-1.5 mt-3 text-lg font-medium">{title}</p>
      <p className="text-sm text-zinc-400">{description}</p>
    </Card>
  );
};

export default Carousel;

const features = [
  {
    id: 1,
    Icon: FiRadio,
    title: "Estudios de Línea de Vista",
    description:
      "Realizamos estudios preliminares y completos de Línea de Vista para enlaces de Microondas (Site and Path Survey), asegurando una instalación eficiente.",
  },
  {
    id: 2,
    Icon: FiWifi,
    title: "Instalación de Enlaces y Antenas",
    description:
      "Instalación de enlaces de Microondas, antenas de RF para celulares y líneas de transmisión.",
  },
  {
    id: 3,
    Icon: FiActivity,
    title: "Ingeniería de Fibra Óptica",
    description:
      "Ofrecemos servicios de ingeniería, instalación y reparación de fibra óptica para conexiones de alta velocidad y estabilidad.",
  },
  {
    id: 4,
    Icon: FiTool,
    title: "Adecuaciones de Sitios",
    description:
      "Realizamos adecuaciones de sitios (site & facility conditioning) para optimizar el entorno y garantizar un rendimiento óptimo.",
  },
  {
    id: 5,
    Icon: FiServer,
    title: "Proyectos de Redes de Telecomunicaciones",
    description:
      "Desarrollamos proyectos de ingeniería en redes de telecomunicaciones para una infraestructura robusta.",
  },
  {
    id: 6,
    Icon: FiMonitor,
    title: "Consultoría y Diseño de Redes Digitales",
    description:
      "Consultoría y diseño de redes digitales de telecomunicaciones PDH, SONET/SDH y DWDM.",
  },
  {
    id: 7,
    Icon: FiNavigation,
    title: "Venta e Instalación de Torres",
    description:
      "Proveemos venta e instalación de torres de comunicaciones para mejorar la conectividad en el área deseada.",
  },
  {
    id: 8,
    Icon: FiZap,
    title: "Sistemas de Puesta a Tierra y Pararrayos",
    description:
      "Ofrecemos venta e instalación de sistemas de puesta a tierra y pararrayos para protección de la infraestructura.",
  },
];
