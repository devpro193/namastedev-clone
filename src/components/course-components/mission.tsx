import Reveal from "@/components/framer/reveal";
import { satisfy } from "@/lib/font";

export default function Mission() {
  return (
    <div className={`grid grid-cols-1 gap-3`}>
      <Reveal>
        <span className="flex gap-4 lg:justify-center items-center">
          <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
          <h2 className={`${satisfy.className} text-4xl`}>Mission</h2>
          <hr className="h-1 max-lg:w-full w-20 rounded bg-primary/40" />
        </span>
      </Reveal>
      <Reveal>
        <p className="text-foreground/70 text-base">
          The mission of this series is to take you from Zero to Hero in React.
          During this journey, you will learn everything by watching videos and
          then implement it by building projects.
        </p>
      </Reveal>
      <Reveal>
        <p className="text-foreground/70 text-base">
          The curriculum is designed with the principle of `learn by building`,
          so there will be a lot of Assignments/Projects you will work on. So
          only register if you are ready for a grind.
        </p>
      </Reveal>
      <Reveal>
        <p className="text-foreground/70 text-base">
          After this series, you will be able to develop production-ready React
          frontend web applications from scratch. Limited seats. Register Now.
          ✌️
        </p>
      </Reveal>
    </div>
  );
}
