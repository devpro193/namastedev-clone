import Reveal from "@/components/framer/reveal";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  let cousre = {
    title: "Courses",
    href: [
      // {
      //   title: "Mern FullStack Course",
      //   href: "/course/mern-full-stack-developer-course",
      //   description:
      //     "A complete mern full stack development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
      // },
      {
        title: "Live Mern Cohort",
        href: "/course/mern-cohort",
        description:
          "A live mern stack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com",
      },
      {
        title: "Solve, Save, and Revise DSA",
        href: "/course/dsa-live-placement-ready-course",
        description:
          "A live dsa placement ready course from 30 days coding. Checkout on www.courses.30dayscoding.com",
      },
      {
        title: "MERN FullStack Course",
        href: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
        description:
          "A complete mern full stack development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
      },
      {
        title: "DSA Mastery Course",
        href: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
        description:
          "A full dsa mastry course from 30 days coding. Checkout on www.courses.30dayscoding.com",
      },
      {
        title: "Next JS FullStack",
        href: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
        description:
          "A live next js fullstack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com",
      },
      {
        title: "All Courses Package",
        href: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
        description:
          "Get a course from 30 days coding. Checkout on www.courses.30dayscoding.com",
      },
    ],
  };

  return (
    <Reveal>
      <div className="bg-footer w-full">
        <div
          className={`flex max-lg:flex-col items-start p-[4rem_min(6.25rem,_7%)] max-w-[90rem] mx-auto gap-4`}
        >
          <section className="flex-1 flex flex-col gap-3">
            <Reveal>
              <Link href={"/"} className="flex gap-1 items-center">
                <Image src={"/logo.png"} alt="name" width={40} height={40} />
                <span className="text-xl">30DC</span>
              </Link>
            </Reveal>

            <Reveal>
              <span className="max-w-lg">
                Transforming the way individuals learn and network for
                professional excellence!
              </span>
            </Reveal>

            <Reveal>
              <section className="flex gap-4">
                <svg
                  className="h-6 w-6 fill-white stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>

                <svg
                  className="h-6 w-6 fill-white stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>

                <svg
                  className="h-6 w-6 fill-white stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>

                <svg
                  className="h-6 w-6 fill-white stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                </svg>

                <svg
                  className="h-6 w-6 fill-white stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </section>
            </Reveal>
          </section>

          <section className="flex max-md:flex-col flex-[2] lg:justify-around font-semibold lg:p-5 py-5 w-full max-lg:gap-8">
            <Reveal>
              <div className="flex text-sm gap-4 flex-col max-w-64">
                <span className="text-muted-foreground uppercase">
                  LIVE COURSES
                </span>
                {cousre.href.map(({ title, href }, i) => (
                  <Link
                    key={i}
                    className="lg:hover:text-head transition-all"
                    href={href}
                  >
                    {title}
                  </Link>
                ))}

                {/* <Link
                  className="lg:hover:text-head transition-all"
                  href={"/course/mern-cohort"}
                >
                  Live FullStack Web Development MERN & NEXT
                </Link> */}
              </div>
            </Reveal>
            <Reveal>
              <div className="flex text-sm gap-4 flex-col max-w-64">
                <span className="text-muted-foreground uppercase">
                  Resourse
                </span>
                <Link
                  className="lg:hover:text-head transition-all"
                  href={"http://dsa.30dayscoding.com/"}
                >
                  DSA Sheets
                </Link>
                <Link
                  className="lg:hover:text-head transition-all"
                  href={"http://resume.30dayscoding.com/"}
                >
                  Resume Builder
                </Link>
                <Link
                  className="lg:hover:text-head transition-all"
                  href={"https://courses.30dayscoding.com/products"}
                >
                  Premium Guides
                </Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex text-sm gap-4 flex-col max-w-64">
                <span className="text-muted-foreground uppercase">
                  About Us
                </span>
                <span>Privacy Policy</span>
                <span>Contact Us</span>
                <span>Term & Conditions</span>
              </div>
            </Reveal>
          </section>
        </div>
        <Reveal>
          <div className="p-4 flex gap-1 text-xs font-semibold items-center justify-center bg-zinc-950">
            <span>© 2023</span>
            <span>30DayCoding</span>
            <span>Inc.</span>
          </div>
        </Reveal>
      </div>
      <div className="lg:hidden h-20 bg-zinc-950" />
    </Reveal>
  );
}
