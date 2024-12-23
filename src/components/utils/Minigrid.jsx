import { Beams } from "@/components/utils/Beams";
import React from "react";

export const Minigrid = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-grid-emerald-900/50">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/0 to-emerald-950/80" />
      <Beams />
    </div>
  );
};
