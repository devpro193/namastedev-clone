import Reveal from "@/components/framer/reveal";
import YoutubeEmbed from "@/components/yotube-embed";
import { CheckCircle, TimerReset } from "lucide-react";
import AnimatedButton from "../animated-button";

type Props = {
  title: string;
  youtube: string;
  courseLink: string;
};

function CheckTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex gap-2 items-center">
      <CheckCircle className="h-5 w-5" />
      <p className="font-semibold">{children}</p>
    </span>
  );
}

export default function Hero({ title, courseLink, youtube }: Props) {
  return (
    <div className="flex max-xl:flex-col-reverse justify-between gap-10 mt-5">
      <div className="flex flex-col gap-6">
        <Reveal>
          <section className="flex flex-col">
            <h1 className={"font-jakarta text-4xl font-semibold pb-0"}>
              {title}
            </h1>
            <span className={"text-foreground/70 font-light font-jakarta"}>
              30 Days Coding From Zero to Hero🔥
            </span>
          </section>
        </Reveal>

        <div className={"grid gap-1 text-foreground/70 font-light"}>
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
                <span className={"font-jakarta text-xl"}>
                  ₹<span className="text-3xl">2999</span>
                  <span className="text-sm text-muted-foreground ml-1 line-through">
                     ₹7500
                  </span>
                </span>

                <span
                  className={
                    "font-jakarta text-secondary-foreground rounded py-0"
                  }
                >
                  17% off
                </span>
              </section>
            </Reveal>

            <Reveal>
              <span
                className={"font-jakarta flex items-center leading-3 gap-2"}
              >
                <TimerReset className="animate-bounce h-5 w-5" />
                1099 Days Validity
              </span>
            </Reveal>
          </div>
        </div>

        <Reveal width="100%" overflow="unset">
          <AnimatedButton type="ext" link={courseLink}>
            Enroll Now
          </AnimatedButton>
        </Reveal>
      </div>

      <YoutubeEmbed embedId={youtube} />
    </div>
  );
}
