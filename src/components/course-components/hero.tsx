import Reveal from "@/components/framer/reveal";
import { Button } from "@/components/ui/button";
import YoutubeEmbed from "@/components/yotube-embed";
import { space_mono, satisfy } from "@/lib/font";
import { CheckCircle, TimerReset } from "lucide-react";
import AnimatedButton from "../animated-button";

function CheckTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex gap-2 items-center">
      <CheckCircle className="h-5 w-5" />
      <p className="font-semibold">{children}</p>
    </span>
  );
}

export default function Hero() {
  return (
    <div className="flex max-xl:flex-col-reverse justify-between gap-10 mt-5">
      <div className="flex flex-col gap-6">
        <Reveal>
          <section className="flex flex-col">
            <h1 className={`${satisfy.className} text-4xl font-semibold pb-0`}>
              MERN Full Stack Development Course
            </h1>
            <span className={`text-foreground/70 font-light`}>
              30 Days Coding From Zero to Hero🔥
            </span>
          </section>
        </Reveal>

        <div className={`grid gap-1 text-foreground/70 font-light`}>
          <Reveal>
            <CheckTitle>In depth High Quality Videos</CheckTitle>
          </Reveal>
          <Reveal>
            <CheckTitle>Project Based Learning</CheckTitle>
          </Reveal>
          <Reveal>
            <CheckTitle>Assignments/Projects</CheckTitle>
          </Reveal>
          <Reveal>
            <CheckTitle>Premium community of Developers</CheckTitle>
          </Reveal>
          <Reveal>
            <CheckTitle>Namaste React Course Certificate</CheckTitle>
          </Reveal>
          <Reveal>
            <CheckTitle>Three Year Access to all Course Content</CheckTitle>
          </Reveal>
        </div>

        <div className="grid gap-1">
          <div className="flex justify-between items-end">
            <Reveal>
              <section className="flex items-end gap-2">
                <span className={`${satisfy.className} text-xl`}>
                  ₹<span className="text-3xl">2499</span>
                  <span className="text-sm text-muted-foreground ml-1 line-through">
                    ₹3000
                  </span>
                </span>

                <span
                  className={`${satisfy.className} text-secondary-foreground rounded py-0`}
                >
                  17% off
                </span>
              </section>
            </Reveal>

            <Reveal>
              <span
                className={`${satisfy.className} flex items-center leading-3 gap-2`}
              >
                <TimerReset className="animate-bounce h-5 w-5" />
                1099 Days Validity
              </span>
            </Reveal>
          </div>
        </div>

        <Reveal width="100%" overflow="unset">
          <AnimatedButton
            type="ext"
            link="https://courses.30dayscoding.com/s/store"
          >
            Enroll Now
          </AnimatedButton>
        </Reveal>
      </div>

      <YoutubeEmbed embedId="dao2HaGzc3M" />
    </div>
  );
}
