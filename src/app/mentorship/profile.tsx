import Reveal from "@/components/framer/reveal";
import Image from "next/image";
import Link from "next/link";
import Career from "./career";

type Profile = {
  name: string;
  designation: string;
  description: string;
  image: string;
  company: {
    name: string;
    path: string;
  }[];
  social: {
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
  };
  career: {
    latest: string;
    joined: string;
    duration: string;
    designation: string;
    company: string;
    imgSrc?: string;
  }[];
  exp: number;
  skills: string[];
  cover: string;
};

function ProfileCard({
  name,
  designation,
  description,
  company,
  image,
  social,
  career,
  exp,
  skills,
  cover,
}: Profile) {
  return (
    <Reveal>
      <div
        className={`relative flex flex-col border-prime bg-second rounded-lg overflow-hidden shadow-inner transition-all duration-500 w-full items-start gap-7 border pb-6`}
      >
        <div
          className={`w-full relative max-md:min-h-30 max-lg:min-h-40 lg:min-h-44 bg-[${cover}] flex items-end justify-end`}
        >
          <Reveal>
            <section className="flex gap-2 p-3 max-phone:grid max-phone:grid-cols-2">
              {social.linkedin && (
                <Link
                  href={social.linkedin ?? "#"}
                  
                  className="rounded-md p-1.5 bg-prime/30 h-fit"
                >
                  <svg
                    className="h-4 w-4 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </Link>
              )}

              {social.instagram && (
                <Link
                  href={social.instagram ?? "#"}
                  
                  className="rounded-md p-1.5 bg-prime/30 h-fit"
                >
                  <svg
                    className="h-4 w-4 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>
              )}

              {social.youtube && (
                <Link
                  href={social.youtube ?? "#"}
                  
                  className="rounded-md p-1.5 bg-prime/30 h-fit"
                >
                  <svg
                    className="h-4 w-4 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </Link>
              )}

              {social.twitter && (
                <Link
                  href={social.twitter ?? "#"}
                  
                  className="rounded-md p-1.5 bg-prime/30 h-fit"
                >
                  <svg
                    className="h-4 w-4 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </Link>
              )}
            </section>
          </Reveal>
        </div>
        <div className="relative flex flex-col items-start gap-2 self-stretch px-5 lg:px-8 bg-second">
          <Reveal>
            <div className="absolute left-2 top-[-104px] h-32 w-32 rounded-md shadow-md shadow-black drop-shadow-xl border-4 object-cover lg:left-3 lg:top-[-110px] lg:h-40 lg:w-40 overflow-hidden">
              <Image
                src={image}
                fill
                alt={`${name} profile`}
                className="rounded-md bg-second"
              />
            </div>
          </Reveal>

          <div className="mt-7 flex flex-col justify-between gap-4 self-stretch md:mt-[75px] md:flex-row">
            <div className="flex max-w-[480px] flex-col items-start gap-4">
              <Reveal>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[20px] font-semibold md:text-2xl">
                    {name}
                  </span>
                  <p className="font-normal text-sm leading-5 text-muted-foreground">
                    {designation}
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="md:hidden flex w-full flex-col gap-2">
                  <p className="text-xs">{exp}+ years of experience</p>
                  {company.map(({ name, path }, i) => {
                    return (
                      <section
                        key={i}
                        className="flex items-center gap-2 md:max-w-[216px]"
                      >
                        <Image
                          className="rounded-md"
                          src={path}
                          alt={`${name} logo`}
                          height={28}
                          width={28}
                        />
                        <span className="text-sm">{name}</span>
                      </section>
                    );
                  })}
                </div>
              </Reveal>

              <Reveal>
                <p className="self-stretch whitespace-pre-line text-sm leading-5 md:min-h-[80px]">
                  {description}
                </p>
              </Reveal>
            </div>

            <Reveal>
              <div className="hidden md:block">
                <div className="flex w-full flex-col gap-2">
                  <p className="text-xs">{exp}+ years of experience</p>
                  {company.map(({ name, path }, i) => {
                    return (
                      <section
                        key={i}
                        className="flex items-center gap-2 md:max-w-[216px]"
                      >
                        <Image
                          className="rounded-md"
                          src={path}
                          alt={`${name} logo`}
                          height={28}
                          width={28}
                        />
                        <span className="text-sm">{name}</span>
                      </section>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Skills */}
        <div className="max-lg:hidden flex flex-col gap-5 rounded-xl bg-second px-5 lg:px-8 w-full">
          <Reveal>
            <span className="self-stretch text-xl font-semibold leading-[30px] lg:pb-6">
              Skills
            </span>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, i) => (
                <button
                  key={i}
                  className="flex items-center justify-center gap-2 rounded-full border px-3 py-2 duration-200 border-prime bg-second box-border"
                >
                  {skill}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Career */}
        <Career details={career} />
      </div>
    </Reveal>
  );
}

export default function Profile() {
  let mentors: Profile[] = [
    {
      name: "Aryan Singh",
      designation: "SWE @ Google",
      image: "https://i.ibb.co/YRBGz7v/instructor.jpg",
      description:
        "Our lead mentor Aryan Singh, a visionary software engineer at Google, leads 30 Days Coding with a resilience hardly seen before. With roles in tech giants and projects like Blocktrain and DSA Revision, Aryan combines professional expertise with a passion for mentoring. His zeal to impart guidance to people stuck in the 'How do I brush my technical skills for this job?' phase, has led to him joining hands with Deepanshu Udhwani, resulting in the birth of 30 Days Coding.",
      company: [
        { name: "Google", path: "/company3.png" },
        { name: "Arrow Electronics", path: "/arrow_logo.jfif" },
        {
          name: "Massachusetts Amherst",
          path: "/umassamherst_logo.jfif",
        },
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/singh1aryan/",
        instagram: "https://www.instagram.com/singh.aryan.45/",
      },
      career: [
        {
          latest: "Present",
          joined: "August, 2020",
          duration: "3y 8m",
          company: "Google",
          designation: "Software Engineer",
          imgSrc: "/google.jfif",
        },
        {
          latest: "August, 2020",
          joined: "May, 2020",
          duration: "4m",
          company: "Google",
          designation: "Software Engineer Intern",
          imgSrc: "/google.jfif",
        },
        {
          latest: "May, 2020",
          joined: "January, 2019",
          duration: "1y 5m",
          company: "University of Massachusetts Amherst",
          designation: "Software Engineer",
          imgSrc: "/umassamherst_logo.jfif",
        },
        {
          latest: "August, 2019",
          joined: "June, 2019",
          duration: "3m",
          company: "Arrow Electronics",
          designation: "Software Engineer Intern",
          imgSrc: "/arrow_logo.jfif",
        },
      ],
      exp: 5,
      skills: [
        "Algorithms",
        "Full-Stack Development",
        // "User Experience",
        // "Artificial Intelligence ",
        // "User Interface Design",
        // "Statistics",
        "Data Structures",
        "Web Applications",
        "Object-Oriented Programming",
        "Machine Learning",
        // "Data Analysis",
        "Java",
        "JavaScript",
        // "Android",
        "Python ",
        "HTML5",
        "CSS",
        // "XML",
        "Node.js",
        "Kotlin",
        "React Native",
        // "Ruby on Rails",
        // "Github",
        "React.js",
        "Next.js",
        // "Ruby",
        // "Firebase",
        // "RESTful WebServices",
        // "Flutter",
        "SQL",
        "MongoDB",
        // "PHP",
        // "MySQL",
        // "Git",
        // "REST",
        // "Matlab",
        // "Retrofit",
        // "Mobile Experiences",
        // "Android StudioAndroid Studio",
        // "Back-End Web Development",
      ],
      cover: "url('/main/hero_section_fullstack.png')",
    },
    {
      name: "Deepanshu Udhwani",
      image: "https://i.ibb.co/8mFwp1C/instructor2.jpg",
      designation: "Founder",
      social: {
        linkedin: "https://www.linkedin.com/in/deepanshu-udhwani/",
        instagram: "https://www.instagram.com/itsudhwani/",
      },
      company: [
        { name: "MakeMyTrip", path: "/makemytrip_logo.jfif" },
        { name: "Alibaba Cloud", path: "/alibaba.jfif" },
        { name: "Thapar Institute of Engineering", path: "/thapar.jfif" },
      ],
      description:
        "Deepanshu Udhwani, drawing from experience at MakeMyTrip, Alibaba Cloud, and various startups, founded 30 Days Coding to solve a simple problem faced by engineers across the globe - 'How do I prepare for this interview?' With a background in Computer Science and Marketing, he knows the exact composition of techical and non-technical aspects required for getting to your dream job.",
      career: [
        {
          latest: "Present",
          joined: "July, 2023",
          duration: "9m",
          company: "30 Days Coding",
          designation: "Founder",
          imgSrc: "/30days_logo.jfif",
        },
        {
          latest: "February, 2024",
          joined: "June, 2021",
          duration: "2y 9m",
          company: "MakeMyTrip",
          designation: "Senior Software Engineer",
          imgSrc: "/makemytrip_logo.jfif",
        },
        {
          latest: "September, 2020",
          joined: "July, 2020",
          duration: "3m",
          company: "Alibaba Cloud",
          designation: "Software Development Intern",
          imgSrc: "/alibaba.jfif",
        },
        {
          latest: "March, 2020",
          joined: "December, 2019",
          duration: "4m",
          company: "Ancient Vedic Roots",
          designation: "Software Engineer",
        },
      ],
      exp: 6,
      skills: [
        "MySQL",
        "MongoDB",
        "Django",
        "Product Development",
        "Python",
        "C++",
        "HTML5",
        "JavaScript",
        "Blockchain",
        "Cloud Computing",
        "Artificial Intelligence",
        "Java",
        "Node.js",
        "React.js",
        "Go",
        "Full-Stack Development",
        "DSA",
        "Data Structures",
        "Software Development",
      ],
      cover: "url('/main/hero_section_fullstack.png')",
    },
  ];

  return (
    <div className="m-auto grid grid-cols-1 place-items-center px-10 pt-10 lg:pt-20 lg:px-20 gap-10 max-w-[75rem]">
      <Reveal>
        <span className="flex items-center justify-center gap-4 relative">
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
          <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
            Our Elite Mentors
          </h2>
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
        </span>
      </Reveal>

      <div className="w-full grid grid-cols-1 gap-10 lg:gap-20">
        {mentors.map(
          (
            {
              company,
              description,
              name,
              designation,
              social,
              image,
              career,
              exp,
              skills,
              cover,
            },
            i
          ) => (
            <Reveal key={i}>
              <ProfileCard
                name={name}
                image={image}
                description={description}
                designation={designation}
                company={company}
                social={social}
                career={career}
                exp={exp}
                skills={skills}
                cover={cover}
              />
            </Reveal>
          )
        )}
      </div>
    </div>
  );
}
