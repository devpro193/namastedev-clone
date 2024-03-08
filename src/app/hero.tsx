import { Button } from "@/components/ui/button";
import YoutubeEmbed from "@/components/yotube-embed";
import { space_mono, satisfy } from "@/lib/font";
import { CheckCircle, TimerReset } from "lucide-react";

function CheckTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex gap-2 items-center">
      <CheckCircle className="h-5 w-5" />
      <p>{children}</p>
    </span>
  );
}

export default function Hero() {
  return (
    <div className="flex max-lg:flex-col-reverse justify-between gap-10">
      <div className="flex flex-col gap-6">
        <section className="flex flex-col">
          <h1
            className={`${satisfy.className} text-4xl font-semibold leading-7 pb-0`}
          >
            MERN Full Stack Development Course
          </h1>
          <span className={`text-foreground/70 font-light`}>
            30 Days Coding From Zero to Hero🔥
          </span>
        </section>

        <div className={` grid gap-1 text-foreground/70 font-light`}>
          <CheckTitle>In depth High Quality Videos</CheckTitle>
          <CheckTitle>Project Based Learning</CheckTitle>
          <CheckTitle>Assignments/Projects</CheckTitle>
          <CheckTitle>Premium community of Developers</CheckTitle>
          <CheckTitle>Namaste React Course Certificate</CheckTitle>
          <CheckTitle>Three Year Access to all Course Content</CheckTitle>
        </div>

        <div className="grid gap-1">
          <div className="flex justify-between">
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

            <span
              className={`${satisfy.className} flex items-center leading-3 gap-2`}
            >
              <TimerReset className="animate-bounce h-5 w-5" />
              1099 Days Validity
            </span>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
          <Button
            variant={"outline"}
            className={`${space_mono.className} relative w-full`}
          >
            Enroll Today
          </Button>
        </div>
      </div>

      <YoutubeEmbed embedId="dao2HaGzc3M" />
    </div>
  );
}
