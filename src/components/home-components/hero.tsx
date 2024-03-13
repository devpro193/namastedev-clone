import { ArrowRight, ShieldCheck } from "lucide-react";
import Button from "./button";
import Reveal from "../framer/reveal";

export default function Hero() {
  return (
    <Reveal>
      <div className="w-full grid bg-[url('/main/hero_section_fullstack.png')] min-h-96 bg-repeat-x">
        <div className="tab:p-[11.5rem_5.5rem_5.75rem] max-tab:pt-[5rem] max-tab:pb-[4.5rem] m-auto max-w-4xl grid gap-7 place-items-center phone:text-center text-white">
          <h1
            className={`font-jakarta phone:text-[3.5rem] text-[2.5rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight px-2 max-phone:px-6`}
          >
            Master Full-stack Development
          </h1>

          <p className="tab:max-w-[43rem] max-tab:px-11 max-phone:px-6 text-lg max-tab:text-[1.05rem] max-tab:leading-6">
            Broaden your skillsets and unlock more opportunities by mastering
            full-stack development. Our comprehensive course equips you with the
            expertise to build scalable and complex products.
          </p>

          <div className="p-[.5rem_1.75rem_.5rem_1.00rem] rounded-[3.125rem] flex items-center gap-2 w-fit my-2 mb-1 bg-gradient-to-r from-[rgba(67,173,28,0.7)] to-[rgba(10,106,53,0.3)]">
            <ShieldCheck className="h-7 w-7" />
            <p className={`font-jakarta font-medium`}>
              Guaranteed interviews from our hiring network!
            </p>
          </div>

          <Button>
            <span className="px-5 flex gap-2 maxtext-lg items-center">
              Apply Now <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
