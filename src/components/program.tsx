import { LucideCheckCircle } from "lucide-react";
import Reveal from "./framer/reveal";
import Button from "./home-components/button";
import { Button as Btn } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Program() {
  let title = [
    "Front-end engineers",
    "Back-end engineers",
    "Junior software developers",
    "Recent computer science graduates",
    "QA engineers who want to switch to development",
    "Engineers & leaders who want to revisit the concepts",
  ];
  return (
    <div className="w-full relative">
      <div className="m-auto flex max-lg:flex-col items-start max-lg:items-center justify-between p-10 lg:p-20 gap-10 max-w-[90rem]">
        <div className="lg:w-2/5 grid gap-5 shrink">
          <Reveal>
            <span className="text-4xl max-tab:text-3xl font-bold">
              Is this program for you ?
            </span>
          </Reveal>
          <Reveal>
            <p className="text-lg max-tab:text-[1.05rem]">
              Whether you&apos;re a beginner or an intermediate professional
              seeking to upskill, transition, or broaden your horizons in the
              field, our program is designed to help you succeed.
            </p>
          </Reveal>
          <div className="flex flex-wrap py-3 gap-3 max-lg:hidden">
            <Reveal>
              <Button>
                <Link
                  className="flex items-center gap-2 px-12"
                  href={"https://courses.30dayscoding.com/s/store"}
                >
                  Buy Courses
                </Link>
              </Button>
            </Reveal>
            <Reveal>
              <span className="max-w-96">
                <AnimatedButton link={"/mentorship"}>
                  <span className="flex gap-2 px-10 items-center">
                    Join Mentorship
                  </span>
                </AnimatedButton>
              </span>
            </Reveal>
          </div>
        </div>

        <div className="lg:w-3/5 w-full shrink-0 flex-1 flex flex-col gap-2">
          {title.map((e, i) => (
            <Reveal>
              <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-head/40 to-transparent rounded-lg shadow-inner">
                <LucideCheckCircle className="w-4 h-4 translate-y-2 stroke-prime shrink-0" />
                <p className="text-lg" key={i}>
                  {e}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5 lg:hidden">
          <Reveal>
            <Button>
              <Link
                className="flex items-center gap-2 px-12"
                href={"https://courses.30dayscoding.com/s/store"}
              >
                Buy Courses
              </Link>
            </Button>
          </Reveal>
          <Reveal>
            <AnimatedButton link="/mentorship">
              <span className="flex gap-2 px-10 items-center">
                Join Mentorship
              </span>
            </AnimatedButton>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function AnimatedButton({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    // <Link href={link} target={type == "ext" ? "_blank" : "_self"}>
    <Link href={link} target="_blank" className="group relative">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r h-9 from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
      <Btn
        variant={"outline"}
        className={`font-semibold text-foreground/80 hover:text-foreground relative px-6`}
      >
        {children}
      </Btn>
    </Link>
    // </Link>
  );
}
