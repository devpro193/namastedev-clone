import Reveal from "@/components/framer/reveal";
import Button from "@/components/home-components/button";
import Video from "@/components/new-cohort/video";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
  title,
  desc,
  subTitle,
  subDesc,
  ytId,
  heroImage,
}: {
  title: string;
  desc: string;
  subTitle: string;
  subDesc: string;
  ytId: string;
  heroImage: string;
}) {
  return (
    <Reveal>
      <div
        className={`w-full grid relative overflow-hidden min-h-[500px] bg-zinc-950`}
      >
        <Image
          alt="community image"
          fill
          src={heroImage}
          className="object-cover opacity-10 pointer-events-none"
        />
        <div className="relative tab:p-[6.5rem_5.5rem_6.75rem] max-tab:pt-[5rem] max-tab:pb-[4.5rem] m-auto max-w-4xl grid gap-7 place-items-center phone:text-center max-phone:place-items-start text-white bg-transparent">
          <h1
            className={`font-jakarta phone:text-[3.5rem] text-[2.5rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight px-2 max-phone:px-6`}
          >
            {title}
          </h1>

          <p className="tab:max-w-[43rem] max-tab:px-11 max-phone:px-6 text-lg max-tab:text-[1.05rem] max-tab:leading-6">
            {desc}
          </p>

          {/* <div className="p-[.5rem_1.75rem_.5rem_1.00rem] rounded-[3.125rem] flex items-center gap-2 my-2 mb-1 bg-gradient-to-r from-[rgba(67,173,28,0.7)] to-[rgba(10,106,53,0.3)]">
            <ShieldCheck className="h-7 w-7" />
            <p className={`font-jakarta font-medium line-clamp-1`}>
              Guaranteed interviews from our hiring network!
            </p>
          </div> */}

          <Link
            className="max-phone:mx-6"
            href={"https://courses.30dayscoding.com/s/store"}
            target="_blank"
          >
            <Button>
              <span className="px-5 flex gap-2 items-center">
                Apply Now <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <Video title={subTitle} desc={subDesc} youtubeId={ytId} />
    </Reveal>
  );
}
