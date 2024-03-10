import Image from "next/image";
import { AlignJustify, ArrowRight, Gift } from "lucide-react";
import { NavMenu } from "../nav-menu";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center">
      <div
        className={`p-[.875rem_6.25rem] max-phone:p-[0.5rem_1rem] text-white flex gap-6 justify-between items-center w-full max-w-[90rem]`}
      >
        <section className="flex gap-12">
          <span className="flex gap-1">
            <Image
              src={"/main/logo.svg"}
              alt="logo"
              width={40}
              height={40}
              className="max-phone:h-6 max-phone:w-6"
            />
            <span className="max-phone:hidden text-[1.6rem] font-medium">
              Airtribe
            </span>
          </span>

          <div className="max-tab:hidden font-jakarta flex items-center font-medium gap-8">
            <NavMenu />
          </div>
        </section>

        <section className="flex items-center gap-2">
          <button className="hover:bg-prime/30 rounded-lg p-1 transition-all">
            <Gift className="max-phone:h-5 max-phone:w-5 h-6 w-6 stroke-[1.5]" />
          </button>
          <button className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 max-phone:py-2 rounded-md">
            <span className="text-sm max-phone:text-xs">Log in</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="hover:bg-prime/30 rounded-lg p-1 transition-all">
            <AlignJustify className="tab:hidden max-tab:h-5 max-tab:w-5 h-6 w-6 stroke-[1.5]" />
          </button>
        </section>
      </div>
    </div>
  );
}
