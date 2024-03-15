import Reveal from "@/components/framer/reveal";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Floating() {
  return (
    <div className="lg:hidden fixed bottom-0 z-20 flex justify-between items-center gap-2 p-4 px-6 bg-background/40 bg- w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
      <Reveal>
        <section className="flex flex-col gap-1">
          <span className={`font-jakarta text-lg`}>
            ₹<span className="text-2xl">2499</span>
          </span>

          <div className="flex gap-2 text-sm font-semibold">
            <span className="text-muted-foreground ml-1 line-through">
              ₹3000
            </span>
            <span
              className={`font-jakarta text-secondary-foreground rounded py-0`}
            >
              17% off
            </span>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <Link href={"https://courses.30dayscoding.com/s/store"} target="_blank">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-500 via-lime-500 to-emerald-500 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
            <Button
              variant={"outline"}
              className={`relative w-full text-lg font-semibold text-foreground/70`}
            >
              Enroll Today
            </Button>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}
