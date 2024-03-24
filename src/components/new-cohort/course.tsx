"use client";

import Reveal from "@/components/framer/reveal";
import Link from "next/link";
import { TabMenu } from "../tabs";
import { Key, MapIcon } from "lucide-react";
import AnimatedButton from "../animated-button";

export default function Course({
  course,
}: {
  course: {
    title: string;
    topics: string[];
  }[];
}) {
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
        <div className="flex max-lg:flex-col gap-3 max-lg:items-center max-lg:gap-10 min-h-96">
          <TabMenu course={course} />

          <div className="max-lg:p-8">
            <Reveal width="fit-content">
              <div className="lg:ml-[2.5rem] max-lg:m-auto flex flex-col items-start lg:p-[2rem_1.5rem_2.5rem] p-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-8 rounded-xl bg-second h-fit">
                <section className="flex flex-col gap-2">
                  <span className="bg-gradient-to-t from-bg to-second/80 rounded-lg p-4 w-fit">
                    <MapIcon className="h-10 w-10 stroke-prime" />
                  </span>
                  <span className="text-lg font-semibold">
                    Explore our detailed curriculum!
                  </span>
                  <p className="text-sm max-w-sm">
                    Understand the in depth concepts and tools you will learn
                    throughout the program.
                  </p>
                </section>
                <span className="max-lg:mx-auto">
                  {/* <NewRazorpay id={"buy-course"} /> */}
                  <AnimatedButton link="https://rzp.io/l/kZPObNXZ">
                    <section className="flex gap-2 items-center">
                      <span className="tracking-wide">Buy Full Course</span>
                      <Key className="h-5 w-5" />
                    </section>
                  </AnimatedButton>
                </span>
                {/* <div
                      className="razorpay-embed-btn"
                      data-url="https://pages.razorpay.com/pl_NlXmnJkIOZFVcc/view"
                      data-text="Pay Now"
                      data-color="#254246"
                      data-size="large"
                    ></div> */}
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <Link
          className="text-sm"
          href={"https://courses.30dayscoding.com/s/store"}
        >
          <button
            className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
          >
            Check More Courses
          </button>
        </Link>
      </Reveal>
    </div>
  );
}
