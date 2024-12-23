import { FiArrowRight } from "react-icons/fi";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { motion } from "framer-motion";
import { SplashButton } from "../buttons/SplashButton";
import { GhostButton } from "../buttons/GhostButton";
import { GlowingChip } from "../utils/GlowingChip";
import { useRouter } from "next/router";
import { Logos } from "@/components/logos/Logos";

export const Content = () => {
  const router = useRouter();
  return (
    <MaxWidthWrapper className="min-h-screen relative z-20 flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center pt-24 md:pt-36">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{
              y: 25,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.25,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <GlowingChip>20+ años en el mercado</GlowingChip>
          </motion.div>
          <motion.h1
            initial={{
              y: 25,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.25,
              delay: 0.25,
              ease: "easeInOut",
            }}
            className="mb-3 text-center text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-8xl lg:leading-tight"
          >
            Conectividad sin límites
          </motion.h1>
          <motion.p
            initial={{
              y: 25,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.25,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="mb-6 max-w-2xl text-center text-base text-zinc-400 sm:text-lg md:text-xl"
          >
            Lleva tu conectividad al siguiente nivel con nuestras soluciones avanzadas, optimizadas para adaptarse a cualquier necesidad.
          </motion.p>
          <motion.div
            initial={{
              y: 25,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.25,
              delay: 0.75,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <SplashButton
              onClick={() => router.push("/#contacto")}
              className="flex items-center gap-2"
            >
              Contáctanos
              <FiArrowRight />
            </SplashButton>
            <GhostButton
              onClick={() => router.push("/#nosotros")}
              className="rounded-md px-4 py-2 text-lg text-zinc-100"
            >
              Quiero saber más
            </GhostButton>
          </motion.div>
        </div>
      </div>
      <div className="w-full mt-auto">
        <Logos />
      </div>
    </MaxWidthWrapper>
  );
};
