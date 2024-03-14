import Image from "next/image";
import Reveal from "../framer/reveal";
import Link from "next/link";

function Profile({
  name,
  company,
  link,
  profile,
  position,
}: {
  name: string;
  company: string;
  link: string;
  profile: string;
  position: string;
}) {
  return (
    <div className="flex flex-col p-[5.625rem_1rem_0rem] rounded-2xl text-center justify-between bg-second relative z-[1] w-56">
      <div className="-top-1/3 translate-x-4 translate-y-3 z-[2] absolute p-2 bg-gradient-to-t from-prime/80 to-second/80 rounded-full">
        <div className="h-36 w-36 overflow-hidden rounded-full flex items-center justify-center">
          <Image src={profile} alt="mentor profile" height={220} width={220} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between p-[1.625rem_0rem_1rem] h-full">
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xl">{name}</span>
          <span className="text-muted-foreground text-sm">{position}</span>
          <Image src={company} alt="google logo" height={90} width={90} />
        </div>
        <Link href={link} target="_blank">
          <svg
            className="h-6 w-6 fill-white stroke-white my-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function Mentor() {
  return (
    <div className="m-auto flex flex-col items-start justify-between p-10 lg:p-20 gap-10 max-w-[75rem]">
      <div className="grid gap-5">
        <Reveal>
          <span className="text-4xl font-bold">Mentor</span>
        </Reveal>
        <Reveal>
          <p className="max-w-xl">
            Our mentors are hand-picked and feature throughout the program
            duration to help you with projects, timely feedback and mock
            interviews.
          </p>
        </Reveal>
      </div>
      <div className="flex max-lg:justify-center flex-wrap gap-10 pt-24 max-sm:gap-28">
        <Reveal>
          <Profile
            name="Aryan Singh"
            profile="/instructor.jpg"
            position="SDE I"
            link="https://www.linkedin.com/in/singh1aryan/"
            company="/google.png"
          />
        </Reveal>
        <Reveal>
          <Profile
            name="Deepanshu Udhwani"
            profile="/instructor2.jfif"
            position="EX"
            link="https://www.linkedin.com/in/deepanshu-udhwani/"
            company="/alibaba.png"
          />
        </Reveal>
      </div>
    </div>
  );
}
