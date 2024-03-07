"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function HeadBanner() {
  const [hide, setHide] = useState(false);
  return (
    <div
      className={`${
        hide ? "hidden" : "flex"
      } relative p-3 items-end lg:justify-center max-lg:justify-between text-white shadow-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600  animate-gradient bg-[length:200%_auto]`}
    >
      <div className="flex max-lg:flex-col lg:items-center justify-center lg:gap-6">
        <Image
          className="max-lg:hidden"
          src={"/discount.webp"}
          alt="discount-pic"
          width={50}
          height={50}
        />

        <section className="grid gap-0">
          <span className="lg:font-semibold max-lg:text-sm">
            Namaste Frontend System Design is here 🚀
          </span>
          <span className="font-bold">
            Coupon Code :{" "}
            <Badge
              className="rounded bg-primary-foreground/75"
              variant={"secondary"}
            >
              EARLYBIRD
            </Badge>
          </span>
        </section>

        <section className="flex items-center gap-3">
          <div className="grid place-items-center">
            <span className="font-bold text-lg">0</span>
            <span className="uppercase text-xs">Days</span>
          </div>
          <span>:</span>
          <div className="grid place-items-center">
            <span className="font-bold text-lg">11</span>
            <span className="uppercase text-xs">Hours</span>
          </div>
          <span>:</span>
          <div className="grid place-items-center">
            <span className="font-bold text-lg">18</span>
            <span className="uppercase text-xs">mins</span>
          </div>
          <span>:</span>
          <div className="grid place-items-center">
            <span className="font-bold text-lg">49</span>
            <span className="uppercase text-xs">Secs</span>
          </div>
        </section>

        {/* <button className="rounded-3xl bg-bannerButton uppercase py-3 px-5 text-sm">
        Enroll Now
    </button> */}

        <Button className="bg-emerald-500/75 max-lg:hidden text-white hover:bg-emerald-700 font-semibold">
          Enroll Now
        </Button>
      </div>

      <Button
        size={"sm"}
        className="bg-emerald-500/75 lg:hidden text-white hover:bg-emerald-700 font-semibold"
      >
        Enroll Now
      </Button>

      <X
        onClick={() => setHide(true)}
        className="absolute right-2 top-2 w-4 h-4 cursor-pointer transition-all hover:scale-125"
      />
    </div>
  );
}
