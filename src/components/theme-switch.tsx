"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <Sun
        onClick={() => setTheme("dark")}
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 stroke-slate-400 hover:bg-slate-200/20 rounded-full cursor-pointer "
      />
      <Moon
        onClick={() => setTheme("light")}
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 stroke-slate-400 hover:bg-slate-200/20 rounded-full cursor-pointer "
      />
    </>
  );
}
