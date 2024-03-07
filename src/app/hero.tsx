import YoutubeEmbed from "@/components/yotube-embed";
import { space_mono, satisfy } from "@/lib/font";
import { CheckCircle } from "lucide-react";

function CheckTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex gap-1 items-center">
      <CheckCircle className="h-5 w-5" />
      <p>{children}</p>
    </span>
  );
}

export default function Hero() {
  return (
    <div className="flex justify-between px-32 py-10">
      <div className="grid gap-6">
        <section className="flex flex-col leading-5">
          <h1 className={`${satisfy.className} text-4xl font-semibold`}>
            Namaste React🚀
          </h1>
          <span
            className={`${space_mono.className} text-foreground/70 font-light`}
          >
            From Zero to Hero🔥
          </span>
        </section>

        <div
          className={`${space_mono.className} grid gap-1 text-foreground/70 font-light`}
        >
          <CheckTitle>In depth High Quality Videos</CheckTitle>
          <CheckTitle>Project Based Learning</CheckTitle>
          <CheckTitle>Assignments/Projects</CheckTitle>
          <CheckTitle>Premium community of Developers</CheckTitle>
          <CheckTitle>Namaste React Course Certificate</CheckTitle>
          <CheckTitle>Three Year Access to all Course Content</CheckTitle>
        </div>
      </div>

      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
  );
}
