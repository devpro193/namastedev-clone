import Link from "next/link";
import Image from "next/image";
import Reveal from "../framer/reveal";

export default function Course() {
  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto pt-8 pb-4">
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
        <span className="text-prime font-semibold uppercase">
          Premium Course
        </span>
      </Reveal>

      <div className="flex w-full max-lg:flex-col lg:gap-6 justify-center max-lg:items-center max-lg:gap-10 max-lg:max-w-[550px] px-10">
        <Link
          href={"/mern-cohort"}
          className="flex-1 max-lg:w-full lg:max-w-[450px] hover:opacity-90"
        >
          <Reveal>
            <div className="max-lg:m-auto flex items-center lg:p-[2rem_1.5rem_2.5rem] p-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-4 rounded-t-xl bg-second h-fit">
              <span className="rounded-full p-4 w-fit">
                {/* <MapIcon className="h-10 w-10 stroke-prime" /> */}
                <Image
                  src={"/fullstack.png"}
                  width={35}
                  height={35}
                  alt="fullstack"
                />
              </span>
              <span className="text-xl font-semibold">
                Full Stack Web Developement
              </span>
            </div>
            <div className="max-lg:m-auto flex items-center justify-between p-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-4 rounded-b-xl bg-prime/60 h-fit text-xs">
              <span>140+ Hrs of Content</span>
              <span>300+ Problems</span>
              <span>10k+ Learners</span>
            </div>
          </Reveal>
        </Link>

        <Link
          href={"/dsa-live-placement-ready-course"}
          className="flex-1 max-lg:w-full lg:max-w-[450px] hover:opacity-90"
        >
          <Reveal>
            <div className="max-lg:m-auto flex items-center lg:p-[2rem_1.5rem_2.5rem] p-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-4 rounded-t-xl bg-second h-fit">
              <span className="bg-gradient-to-t from-bg to-second/80 rounded-full p-4 w-fit">
                <Image src={"/data.webp"} width={35} height={35} alt="dsa" />
              </span>
              <span className="text-xl font-semibold">DSA Mastery Course</span>
            </div>
            <div className="max-lg:m-auto flex items-center justify-between p-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-4 rounded-b-xl bg-prime/60 h-fit text-xs">
              <span>140+ Hrs of Content</span>
              <span>300+ Problems</span>
              <span>10k+ Learners</span>
            </div>
          </Reveal>
        </Link>
      </div>

      {/* <Link
        className="text-sm"
        href={"https://courses.30dayscoding.com/s/store"}
      >
        <button
          className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
        >
          Check More Courses
        </button>
      </Link> */}
    </div>
  );
}
