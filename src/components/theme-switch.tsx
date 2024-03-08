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
        className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 stroke-foreground/70 hover:bg-slate-200/20 rounded-full cursor-pointer "
      />
      <Moon
        onClick={() => setTheme("light")}
        className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 stroke-foreground/70 hover:bg-slate-200/20 rounded-full cursor-pointer "
      />
    </>
  );
}
