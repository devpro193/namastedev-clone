import Image from "next/image";
import Reveal from "../framer/reveal";
import Link from "next/link";
import Button from "../home-components/button";
import HoverInfo from "../hover-info";

function Profile({
  name,
  company,
  link,
  profile,
  position,
  desc,
}: {
  name: string;
  company: { name: string; path: string }[];
  link: string;
  profile: string;
  position: string;
  desc: string;
}) {
  return (
    <div className="mx-auto flex flex-col rounded-2xl text-center justify-between bg-second relative z-[1] w-64 max-phone:w-full max-phone:max-w-96">
      <div className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] absolute p-2 bg-gradient-to-t from-prime/80 to-second/80 rounded-full">
        <div className="h-36 w-36 overflow-hidden rounded-full flex items-center justify-center">
          <Image src={profile} alt="mentor profile" height={220} width={220} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-10 pt-24 h-full">
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xl">{name}</span>
          <span className="text-muted-foreground text-sm font-semibold">
            {position}
          </span>
          <div className="flex gap-3 py-2">
            {company.map(({ name, path }, i) => (
              <HoverInfo info={name}>
                <Image
                  className="rounded-md"
                  key={i}
                  src={path}
                  alt="companies logo"
                  height={35}
                  width={35}
                />
              </HoverInfo>
            ))}
          </div>
        </div>

        <p className="text-sm p-3 px-6">{desc}</p>

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

export default function NewMentor() {
  return (
    <div className="m-auto flex flex-col items-center justify-evenly p-10 lg:p-20 gap-10 max-w-[90rem]">
      {/* Heading */}
      <div className="lg:hidden flex flex-col gap-5 text-center max-w-2xl mx-auto">
        <Reveal>
          <span className="text-4xl font-bold text-center">
            Most affordable courses + Experts from{" "}
            <span className="text-prime">FAANG</span> and Big tech
          </span>
        </Reveal>
        <Reveal>
          <p className="text-lg text-center">
            From the Software Engineers of{" "}
            <span className="font-semibold text-prime px-1 text-xl">
              Google
            </span>{" "}
            and
            <span className="font-semibold text-prime px-1 text-xl">
              Alibaba Express
            </span>
          </p>
        </Reveal>
      </div>

      <div className="flex max-phone:flex-col max-phone:gap-28 phone:h-full gap-2 justify-evenly w-full pt-24">
        <Reveal>
          <Profile
            name="Aryan Singh"
            profile="/instructor.jpg"
            position="SDE @Google"
            link="https://www.linkedin.com/in/singh1aryan/"
            company={[
              { name: "Google", path: "/company3.png" },
              { name: "Arrow Electronics", path: "/arrow_logo.jfif" },
              {
                name: "Massachusetts Amherst",
                path: "/umassamherst_logo.jfif",
              },
            ]}
            desc="Our lead mentor Aryan Singh, a visionary software engineer at Google, leading 30 Days Coding. With roles in tech giants and projects like Blocktrain and DSA Revision, Aryan combines professional expertise with a passion for mentoring."
          />
        </Reveal>
        <div className="max-lg:hidden flex flex-col gap-5 items-center text-center max-w-2xl px-8">
          <Reveal>
            <span className="text-4xl font-bold">
              Most affordable courses + Experts from{" "}
              <span className="text-prime">FAANG</span> and Big tech
            </span>
          </Reveal>
          <Reveal>
            <p className="text-lg">
              From the Software Engineers of{" "}
              <span className="font-semibold text-prime px-1 text-xl">
                Google
              </span>{" "}
              and
              <span className="font-semibold text-prime px-1 text-xl">
                Alibaba Express
              </span>
            </p>
          </Reveal>
          <div className="py-2" />
          <Reveal>
            <Button>Join Community</Button>
          </Reveal>
        </div>
        <Reveal>
          <Profile
            name="Deepanshu Udhwani"
            profile="/instructor2.jfif"
            position="Founder"
            link="https://www.linkedin.com/in/deepanshu-udhwani/"
            company={[
              { name: "MakeMyTrip", path: "/makemytrip_logo.jfif" },
              { name: "Alibaba Cloud", path: "/alibaba.jfif" },
              { name: "Thapar Institute of Engineering", path: "/thapar.jfif" },
            ]}
            desc="Deepanshu Udhwani, drawing from experience at MakeMyTrip, Alibaba Cloud, and startups, founded 30 Days Coding. With a background in Computer Science and an MBA in Information Systems."
          />
        </Reveal>
      </div>

      <div className="lg:hidden">
        <Reveal>
          <Button>Chat with Us</Button>
        </Reveal>
      </div>
    </div>
  );
}
