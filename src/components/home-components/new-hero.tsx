import Reveal from "@/components/framer/reveal";
import Button from "@/components/home-components/button";
import Video from "@/components/new-cohort/video";
import { ArrowRight, GraduationCap, Radio, School } from "lucide-react";
import Link from "next/link";

export default function Hero({
  title,
  desc,
  subTitle,
  subDesc,
  ytId,
  heroImage,
}: {
  title?: string;
  desc?: string;
  subTitle: string;
  subDesc: string;
  ytId: string;
  heroImage?: string;
}) {
  return (
    <Reveal>
      <div className={`w-full grid ${heroImage} min-h-96 bg-repeat-x`}>
        <div className="tab:p-[11.5rem_2.5rem_5.75rem] max-tab:pt-[5rem] max-tab:pb-[4.5rem] m-auto max-w-4xl grid gap-5 place-items-center phone:text-center text-white">
          <h1
            className={`font-jakarta phone:text-[3.5rem] text-[2.5rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight px-2 max-phone:px-6`}
          >
            {title}
          </h1>

          <p className="tab:max-w-[43rem] max-tab:px-11 max-phone:px-6 text-lg max-tab:text-[1.05rem] max-tab:leading-6">
            {desc}
          </p>

          <div className="p-[.5rem_1.75rem_.5rem_1.00rem] rounded-[3.125rem] flex max-lg:flex-col max-lg:w-full lg:flex-wrap items-center gap-5 my-2 mb-1">
            <Link
              href={"/course/mern-cohort"}
              className={`font-jakarta flex items-center justify-between font-semibold gap-3 hover:bg-prime/80 border-2 border-prime/60 transition-all px-4 py-3 rounded-full max-lg:w-full`}
            >
              <span className="text-sm">Mentorship</span>
              <GraduationCap className="max-lg:hidden w-4 h-4" />
              <ArrowRight className="lg:hidden w-4 h-4" />
            </Link>
            <Link
              href={"/course/dsa-live-placement-ready-course"}
              className={`font-jakarta flex items-center justify-between font-semibold gap-3 hover:bg-prime/80 border-2 border-prime/60 transition-all px-4 py-3 rounded-full max-lg:w-full`}
            >
              <span className="text-sm">Live Cohort</span>
              <Radio className="max-lg:hidden w-4 h-4" />
              <ArrowRight className="lg:hidden w-4 h-4" />
            </Link>
            <Link
              target="_blank"
              href={"https://courses.30dayscoding.com/s/store"}
              className={`font-jakarta flex items-center justify-between font-semibold gap-3 hover:bg-prime/80 border-2 border-prime/60 transition-all px-4 py-3 rounded-full max-lg:w-full`}
            >
              <span className="text-sm">Courses</span>
              <School className="max-lg:hidden w-4 h-4" />
              <ArrowRight className="lg:hidden w-4 h-4" />
            </Link>
            {/* <Button>
              <span className="px-5 flex gap-2 items-center">
                Mentorship <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <Button>
              <span className="px-5 flex gap-2 items-center">
                Live Cohort <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <Button>
              <span className="px-5 flex gap-2 items-center">
                Courses <ArrowRight className="w-4 h-4" />
              </span>
            </Button> */}
          </div>

          {/* <Link
            href={"https://courses.30dayscoding.com/s/store"}
          
          >
            <Button>
              <span className="px-5 flex gap-2 items-center">
                Apply Now <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </Link> */}
        </div>
      </div>
      <Video title={subTitle} desc={subDesc} youtubeId={ytId} />
    </Reveal>
  );
}
