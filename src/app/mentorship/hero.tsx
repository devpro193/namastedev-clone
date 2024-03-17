import Reveal from "@/components/framer/reveal";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Button from "@/components/home-components/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero({
  title,
  desc,
  heroImage,
}: {
  title: string;
  desc: string;
  heroImage: string;
}) {
  return (
    <Reveal>
      <div
        className={`w-full grid relative overflow-hidden min-h-[500px] bg-footer`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible">
          <Image
            src={"/main/ep2.png"}
            alt="mentor hero"
            width={1000}
            height={1000}
            className="object-cover opacity-35 animate-rotate-clock max-tab:h-[500px] max-tab:w-[500px] h-[800px] w-[800px] overflow-visible"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible">
          <Image
            src={"/main/ep1.png"}
            alt="mentor hero"
            width={650}
            height={650}
            className="object-cover opacity-35 max-tab:h-96 max-tab:w-96 h-[500px] w-[500px] animate-rotate-anitclock overflow-visible"
          />
        </div>
        <div className="tab:p-[11.5rem_5.5rem_5.75rem] max-tab:pt-[5rem] max-tab:pb-[4.5rem] m-auto max-w-4xl grid gap-7 place-items-center phone:text-center text-white">
          <h1
            className={`font-jakarta phone:text-[3.5rem] text-[2.5rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight px-2 max-phone:px-6`}
          >
            {title}
          </h1>

          <p className="tab:max-w-[43rem] max-tab:px-11 max-phone:px-6 text-lg max-tab:text-[1.05rem] max-tab:leading-6">
            {desc}
          </p>

          <div className="p-[.5rem_1.75rem_.5rem_1.00rem] rounded-[3.125rem] flex items-center gap-2 my-2 mb-1 bg-gradient-to-r from-[rgba(67,173,28,0.7)] to-[rgba(10,106,53,0.3)]">
            <ShieldCheck className="h-7 w-7" />
            <p className={`font-jakarta font-medium line-clamp-1`}>
              Guaranteed interviews from our hiring network!
            </p>
          </div>

          <Link
            href={
              "https://nas.io/checkout-global?communityId=645b3af827dc2f33a1b21449&communityCode=30DAYSCODINGDISCORD&requestor=signupRequestor&fromWidget=1"
            }
            target="_blank"
          >
            <Button>
              <span className="px-5 flex gap-2 items-center">
                Join Now <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
