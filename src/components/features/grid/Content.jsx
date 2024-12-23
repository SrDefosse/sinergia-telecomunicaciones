import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import React from "react";
import { Tower } from "./Tower";
import { MiniCard1 } from "./MiniCard1";
import { MiniCard2 } from "./MiniCard2";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionSubheading } from "@/components/utils/SectionSubheading";
import { SectionHeadingSpacing } from "@/components/utils/SectionHeadingSpacing";
import { Certifications } from "@/components/features/certifications/Certifications";

export const Content = () => {
  return (
    <section>
      <MaxWidthWrapper className="relative z-20 pb-10 pt-10 md:pb-16 md:pt-16">
        <SectionHeadingSpacing>
          <SectionHeading>
            Transformando la Conectividad
            <br />
            <span className="bg-gradient-to-br from-emerald-400 to-emerald-700 bg-clip-text text-transparent">
              para un Futuro Mejor
            </span>
          </SectionHeading>
          <SectionSubheading>
            En Sinergia Telecomunicaciones, contamos con una sólida trayectoria en soluciones de telecomunicaciones, adaptándonos a las necesidades de cada cliente con innovación y profesionalismo.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <Grid />
        <Certifications />
        <div className="my-6 h-[1px] w-full bg-gradient-to-r from-emerald-800/0 via-emerald-400/50 to-emerald-800/0 md:my-8" />
      </MaxWidthWrapper>
    </section>
  );
};

const Grid = () => (
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
    <div className="lg:col-span-7 flex flex-col">
      <Tower />
    </div>
    <div className="col-span-1 grid grid-cols-1 gap-6 lg:col-span-5 flex flex-col">
      <MiniCard1 />
      <MiniCard2 />
    </div>
  </div>
);
