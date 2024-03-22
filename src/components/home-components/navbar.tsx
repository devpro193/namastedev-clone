"use client";

import Image from "next/image";
import { AlignJustify, Gift } from "lucide-react";
import { NavMenu } from "../nav-menu";
import Unveal from "../framer/unvel";
import Link from "next/link";
import { useAtom, useSetAtom } from "jotai";
import { navbarState } from "@/lib/jotai";
import { ModeToggle } from "../theme-switch";

export default function Navbar() {
  const setState = useSetAtom(navbarState);

  return (
    <Unveal>
      <div className="w-full flex justify-center bg-bg">
        <div
          className={`p-[.875rem_6.25rem] max-sm:p-[0.5rem_1rem] text-white flex gap-6 justify-between items-center w-full max-w-[90rem]`}
        >
          <section className="flex gap-12">
            <Link href={"/"} className="flex items-center gap-1">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={50}
                height={50}
                className="max-phone:h-6 max-phone:w-6"
              />
              <span className="max-phone:hidden text-[1.6rem] font-medium">
                30DC
              </span>
            </Link>

            <div className="max-tab:hidden font-jakarta flex items-center font-medium gap-8">
              <NavMenu />
            </div>
          </section>

          <section className="flex items-center gap-3">
            {/* <ModeToggle /> */}
            {/* <button className="hover:bg-prime/30 rounded-lg p-1 transition-all">
              <Gift className="max-phone:h-5 max-phone:w-5 h-6 w-6 stroke-[1.5] stroke-black dark:stroke-white" />
            </button> */}
            <Link
              href={"/mentorship"}
              className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 max-phone:py-2 rounded-md"
            >
              <span className="text-sm max-phone:text-xs">Join Mentorship</span>
              {/* <ArrowRight className="max-md:hidden h-4 w-4" /> */}
            </Link>
            <button
              onClick={() => setState(false)}
              className="hover:bg-prime/30 rounded-lg p-1 transition-all"
            >
              <AlignJustify className="tab:hidden max-tab:h-5 max-tab:w-5 h-6 w-6 stroke-[1.5]" />
            </button>
          </section>
        </div>
      </div>
    </Unveal>
  );
}
