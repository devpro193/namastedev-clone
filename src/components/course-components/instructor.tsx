import Reveal from "@/components/framer/reveal";
import Image from "next/image";
import Link from "next/link";

export default function Instructor() {
  return (
    <div className={"grid grid-cols-1 gap-3"}>
      <Reveal>
        <span className="flex gap-4 lg:justify-center items-center">
          <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
          <h2 className={"$font-mulish text-4xl"}>Instructor</h2>
          <hr className="h-1 max-lg:w-full w-20 rounded bg-primary/40" />
        </span>
      </Reveal>

      <Reveal>
        <div className="flex overflow-hidden max-lg:flex-col gap-10 max-lg:gap-5 max-lg:my-6 my-3 bg-gray-200/90 dark:bg-background shadow-lg rounded-md">
          <Image
            src={"/instructor.jpg"}
            alt="profile-pic"
            height={700}
            width={250}
            className="max-lg:h-80 max-lg:w-full object-cover max-lg:object-center"
          />
          <div className="flex flex-col gap-10 p-10 grid-cols-1">
            <Reveal>
              <section className="flex flex-col">
                <h4 className={"$font-mulish text-3xl"}>Aryan Singh</h4>
                <span className="text-sm font-semibold text-foreground/70">
                  @Google SWE
                </span>
              </section>
            </Reveal>
            <Reveal>
              <p className="font-semibold text-lg text-foreground/70">
                Akshay Saini, founder of NamasteDev.com, who previously worked
                as a software engineer at Uber & Paytm. Akshay has over 8+ years
                of experience in the software industry and has been guiding
                students to become a better software Engineer. Well known for
                his famous playlist named Namaste JavaScript, he has taught over
                3 lakhs+ students across the globe. All the concepts in this
                course are taught by Akshay himself.
              </p>
            </Reveal>
            <Reveal>
              <section className="flex gap-3">
                <Link href={"https://www.linkedin.com/in/singh1aryan/"}>
                  <svg
                    className="h-8 w-8 fill-sky-500 dark:hover:fill-sky-500 dark:fill-foreground transition-all hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </Link>

                <Link
                  href={"https://www.instagram.com/singh.aryan.45/"}
                  target="_blank"
                >
                  <svg
                    className="h-8 w-8 fill-pink-600 dark:hover:fill-pink-600 dark:fill-foreground transition-all hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>

                <Link
                  href={
                    "https://www.youtube.com/channel/UCdu8HnchmMbDqbbC4GdPrjw"
                  }
                  target="_blank"
                >
                  <svg
                    className="h-8 w-8 fill-red-700 dark:hover:fill-red-700 dark:fill-foreground transition-all hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </Link>
              </section>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
