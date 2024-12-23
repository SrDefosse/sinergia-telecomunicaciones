import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  SiAtlassian,
  SiDribbble,
  SiGrubhub,
  SiKaggle,
  SiSlack,
  SiNike,
  SiAirbnb,
  SiAmazon,
  SiApple,
  SiMicrosoft
} from "react-icons/si";

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.section 
      className="py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4">
        <h3 className="text-5xl font-semibold text-white mb-4">Lo que opinan nuestros clientes</h3>
        <p className="text-zinc-300 my-4 text-lg">
          Descubre por qué nuestros clientes confían en nosotros para sus necesidades de desarrollo web y diseño.
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </motion.section>
  );
};

const SelectBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex gap-2 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-2 w-full bg-zinc-700 relative rounded-full overflow-hidden"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-white"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-white"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({ testimonials, selected, setSelected }) => {
  return (
    <div className="relative h-[450px] lg:h-[500px] shadow-xl bg-zinc-900/50 rounded-lg backdrop-blur-sm overflow-hidden">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  Icon,
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "bg-zinc-800" : "bg-zinc-100";
  const color = position % 2 ? "text-white" : "text-zinc-900";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className={`absolute top-0 left-0 w-full h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between rounded-lg shadow-lg ${background} ${color}`}
    >
      <Icon className="text-7xl mx-auto opacity-20" />
      <p className="text-lg lg:text-xl font-light italic my-8 relative z-10">
        "{description}"
      </p>
      <div className="relative z-10">
        <span className="block font-semibold text-lg">{name}</span>
        <span className="block text-sm opacity-75">{title}</span>
      </div>
    </motion.div>
  );
};

const testimonials = [
  {
    Icon: SiNike,
    description:
      "El equipo de desarrollo web superó nuestras expectativas. Entregaron un sitio web impresionante que ha aumentado significativamente nuestras conversiones en línea.",
    name: "María González",
    title: "Directora de Marketing, SportFit",
  },
  {
    Icon: SiAtlassian,
    description:
      "Su enfoque en la experiencia del usuario es excepcional. Nuestro nuevo sitio web no solo se ve genial, sino que también es increíblemente fácil de usar.",
    name: "Carlos Rodríguez",
    title: "Gerente de Producto, TechSolutions",
  },
  {
    Icon: SiAirbnb,
    description:
      "El diseño creativo y la atención al detalle en nuestro proyecto fueron impresionantes. Realmente capturaron la esencia de nuestra marca.",
    name: "Ana Martínez",
    title: "Directora Creativa, DesignHub",
  },
  {
    Icon: SiAmazon,
    description:
      "La implementación de nuestra plataforma de comercio electrónico fue impecable. Nuestras ventas en línea han aumentado un 200% desde el lanzamiento.",
    name: "Pedro Sánchez",
    title: "CEO, FoodExpress",
  },
  {
    Icon: SiApple,
    description:
      "Su experiencia en desarrollo web y análisis de datos nos ayudó a crear una plataforma robusta y escalable para nuestros usuarios.",
    name: "Laura Fernández",
    title: "CTO, DataInsights",
  },
  {
    Icon: SiMicrosoft,
    description:
      "La comunicación y la gestión del proyecto fueron excelentes. Entregaron a tiempo y dentro del presupuesto, superando todas nuestras expectativas.",
    name: "Javier López",
    title: "Gerente de Proyectos, CollabTech",
  },
];

export default StackedCardTestimonials;

