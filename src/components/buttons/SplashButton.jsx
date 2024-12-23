import React from "react";
import { twMerge } from "tailwind-merge";

export const SplashButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "rounded-md bg-gradient-to-br from-emerald-400 to-emerald-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-emerald-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-emerald-500/70",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
