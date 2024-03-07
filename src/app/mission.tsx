import { satisfy } from "@/lib/font";

export default function Mission() {
  return (
    <div className={`grid grid-cols-1 gap-3`}>
      <h2 className={`${satisfy.className} text-4xl`}>Mission</h2>
      <p className="text-foreground/70">
        The mission of this series is to take you from Zero to Hero in React.
        During this journey, you will learn everything by watching videos and
        then implement it by building projects.
      </p>
      <p className="text-foreground/70">
        The curriculum is designed with the principle of `learn by building`, so
        there will be a lot of Assignments/Projects you will work on. So only
        register if you are ready for a grind.
      </p>
      <p className="text-foreground/70">
        After this series, you will be able to develop production-ready React
        frontend web applications from scratch. Limited seats. Register Now. ✌️
      </p>
    </div>
  );
}
