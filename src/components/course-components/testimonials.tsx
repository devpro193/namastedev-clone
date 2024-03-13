import Carousal from "@/components/carousal";
import Reveal from "@/components/framer/reveal";
import Image from "next/image";
import Link from "next/link";

type TestimonialType = {
  name: string;
  profile: string;
  review: string;
  social: "instagram" | "linkedin" | "facebook" | "youtube";
  link: string;
};

export let testimonials: TestimonialType[] = [
  {
    review:
      "I just purchased course. This is the best price I could get the course compared to market. It is very nice to know that you just want to educate people, don't want to make money out of them. Really value for money.",
    name: "Parth",
    profile: "/profile.webp",
    social: "instagram",
    link: "https://www.instagram.com/p/C4Pv59ZuauW/?igsh=MzRlODBiNWFlZA%3D%3D&img_index=1",
  },

  {
    review:
      "Sir, you have done a wonderful word. Mene MERN course me enroll kia hai muje mja araha hai.",
    name: "Akshay",
    profile: "/profile2.jpg",
    social: "linkedin",
    link: "https://www.instagram.com/p/C4Pv59ZuauW/?igsh=MzRlODBiNWFlZA%3D%3D&img_index=2",
  },

  {
    review:
      "Really helpful! I got exposed to new avenues and currently I am building a micro SAAS on my own via python, GCP, flutterflow, firebase",
    name: "Abhisek De",
    profile: "/profile3.webp",
    social: "facebook",
    link: "https://www.instagram.com/p/C4Pv59ZuauW/?igsh=MzRlODBiNWFlZA%3D%3D&img_index=3",
  },

  {
    review:
      "Very good person got to learn new new things about the web development and how to prepare for the future and amazing content for education purpose as well as for the entertainment also.",
    name: "Punit",
    profile: "/profile2.jpg",
    social: "youtube",
    link: "https://www.instagram.com/p/C4Pv59ZuauW/?igsh=MzRlODBiNWFlZA%3D%3D&img_index=4",
  },
];

export function Testimonial({
  name,
  profile,
  review,
  social,
  link,
}: TestimonialType) {
  function Social() {
    if (social === "linkedin")
      return (
        <svg
          className={`fill-sky-500 dark:hover:fill-sky-500 dark:fill-white h-8 w-8 transition-all hover:scale-110`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>
      );

    if (social === "instagram")
      return (
        <svg
          className={`fill-pink-600 dark:hover:fill-pink-600 dark:fill-white h-8 w-8 transition-all hover:scale-110`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      );

    if (social === "facebook")
      return (
        <svg
          className={`fill-blue-600 dark:hover:fill-blue-600 dark:fill-white h-8 w-8 transition-all hover:scale-110`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
        </svg>
      );

    if (social === "youtube")
      return (
        <svg
          className={`fill-red-700 dark:hover:fill-red-700 dark:fill-white h-8 w-8 transition-all hover:scale-110`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
        </svg>
      );
  }

  return (
    <Reveal>
      <div className="flex flex-col bg-background p-4 rounded-md shadow-md">
        <section className="flex justify-between">
          <div className="flex gap-3">
            <Reveal>
              <Image
                alt=""
                src={`${profile}`}
                className="w-14 h-14 rounded-full object-cover"
                width={50}
                height={50}
              />
            </Reveal>

            <Reveal>
              <div className="flex flex-col gap-0">
                <span className={`text-xl font-semibold`}>{name}</span>
                <span
                  className={`font-spaceMono text-sm font-bold text-lime-600`}
                >
                  Customer
                </span>
                {/* <span className="text-orange-600 text-xs">Cognizant</span> */}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <Link href={link} target="_blank">
              <Social />
            </Link>
          </Reveal>
        </section>

        <Reveal>
          <p className="text-foreground/70 text-sm font-semibold leading-5 px-5 py-3">
            {review}
          </p>
        </Reveal>
      </div>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <div className={`flex flex-col gap-3`}>
      <Reveal>
        <span className="flex gap-4 lg:justify-center items-center mb-5">
          <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
          <h2 className={`font-jakarta text-4xl`}>Our Testimonials</h2>
          <hr className="h-1 w-20 rounded bg-primary/40" />
        </span>
      </Reveal>

      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:hidden gap-6">
        {testimonials.map((e, i) => (
          <Testimonial
            key={i}
            name={e.name}
            review={e.review}
            profile={e.profile}
            social={e.social}
            link={e.link}
          />
        ))}
      </div>

      <Carousal />
    </div>
  );
}
