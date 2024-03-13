import { space_mono } from "@/lib/font";
import { Button } from "./ui/button";
import React from "react";
import Link from "next/link";

type EnrollButton = {
  children: React.ReactNode;
  link?: string;
  type?: "int" | "ext";
};

export default function AnimatedButton({
  children,
  link = "#",
  type = "int",
}: EnrollButton) {
  return (
    <Link href={link} target={type == "ext" ? "_blank" : "_self"}>
      <div className="group relative">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
        <Button
          variant={"outline"}
          className={`font-spaceMono font-semibold lg:text-lg text-foreground/80 hover:text-foreground relative w-full`}
        >
          {children}
        </Button>
      </div>
    </Link>
  );
}
