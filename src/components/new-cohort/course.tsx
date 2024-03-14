"use client";

import Reveal from "@/components/framer/reveal";
import Link from "next/link";
import { TabMenu } from "../tabs";
import Button from "../home-components/button";
import { DownloadIcon, MapIcon } from "lucide-react";
import AnimatedButton from "../animated-button";

export default function Course() {
  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto py-8">
      <Reveal>
        <span className="flex items-center gap-4 relative">
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
          <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
            Course Glance
          </h2>
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
        </span>
      </Reveal>

      <Reveal>
        <div className="flex max-lg:flex-col gap-3 max-lg:gap-10 min-h-96">
          <TabMenu />

          <Reveal>
            <div className="lg:ml-[4.5rem] max-lg:m-auto min-w-[10rem] max-w-[25rem] flex flex-col items-start lg:p-[2rem_1.5rem_2.5rem] p-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-8 rounded-xl bg-second max-lg:w-full h-fit">
              <section className="flex flex-col gap-2">
                <span className="bg-gradient-to-t from-bg to-second/80 rounded-lg p-4 w-fit">
                  <MapIcon className="h-10 w-10 stroke-prime" />
                </span>
                <span className="sm:text-lg font-semibold">
                  Explore our detailed curriculum!
                </span>
                <p className="text-xs sm:text-sm">
                  Understand the in depth concepts and tools you will learn
                  throughout the program.
                </p>
              </section>
              <AnimatedButton>
                <section className="flex gap-2 items-center">
                  Purcase detailed course <DownloadIcon className="h-5 w-6" />
                </section>
              </AnimatedButton>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal>
        <button
          className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
        >
          <Link className="text-sm" href={"/testimonials"}>
            Check More Courses
          </Link>
        </button>
      </Reveal>
    </div>
  );
}
