import React from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({ className, children, style = {} }) => {
  return (
    <div
      style={style}
      className={twMerge(
        "relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6",
        className
      )}
    >
      {children}
    </div>
  );
};
