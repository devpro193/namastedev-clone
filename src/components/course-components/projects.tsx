import Reveal from "@/components/framer/reveal";
import { satisfy } from "@/lib/font";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import AnimatedButton from "../animated-button";

function CheckTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <span className="flex gap-2 items-start justify-start font-semibold text-foreground/70">
        <CheckCircle className="h-5 w-5 shrink-0" />
        <p>{children}</p>
      </span>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <div className={`grid grid-cols-1 gap-6`}>
      <Reveal>
        <span className="flex gap-4 lg:justify-center items-center mb-6">
          <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
          <h2 className={`font-mulish text-4xl`}>Awesome Premium Courses 🚀</h2>
          <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
          {/* <hr className="h-1 max-lg:w-full w-20 rounded bg-primary/40" /> */}
        </span>
      </Reveal>

      <Reveal>
        <div className="flex flex-col gap-2 p-3 rounded-md dark:bg-background bg-gray-200/90 shadow-lg">
          <Reveal>
            <h4 className="text-xl text-foreground/90 font-semibold text-center">
              All 10 courses package - DSA, MERN, AI, Blockchain, Chat GPT
              (LIFETIME Validity) 🔥
            </h4>
          </Reveal>

          <Reveal>
            <div className="flex max-xl:flex-col max-xl:items-center justify-center gap-8 p-5">
              <Image
                className="rounded-md max-lg:w-full object-cover"
                src={"/course1.jpg"}
                alt="project-1"
                width={600}
                height={1200}
              />

              <div className="flex flex-col max-lg:gap-5 justify-between py-2">
                <div className="flex flex-col gap-2">
                  <CheckTitle>
                    GPT Search, using the latest GPT-3.5 Turbo API 🚀.
                  </CheckTitle>
                  <CheckTitle>
                    Authentication - Sign Up, Log In, Sign Out.
                  </CheckTitle>
                  <CheckTitle>Form Handling, and Form validations</CheckTitle>
                  <CheckTitle>Advanced Tailwind.</CheckTitle>
                  <CheckTitle>useRef hook.</CheckTitle>
                  <CheckTitle>covered the concept of Memoization.</CheckTitle>
                  <CheckTitle>Build Multi-Language support.</CheckTitle>
                  <CheckTitle>
                    Advanced data handling with Redux Toolkit.
                  </CheckTitle>
                  <CheckTitle>
                    Use of .env files to secure secret API keys
                  </CheckTitle>
                </div>
                <Reveal>
                  <AnimatedButton
                    type="ext"
                    link="https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0"
                  >
                    Buy Now
                  </AnimatedButton>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-col gap-2 p-3 rounded-md dark:bg-background bg-gray-200/90 shadow-lg">
          <Reveal>
            <h4 className="text-xl text-foreground/90 font-semibold text-center">
              Full stack package - MERN, Next JS, Projects (LIFETIME Validity)
            </h4>
          </Reveal>

          <Reveal>
            <div className="flex max-xl:flex-col max-xl:items-center justify-center gap-8 p-5">
              <Image
                className="rounded-md max-lg:w-full object-cover"
                src={"/course2.jpg"}
                alt="project-2"
                width={600}
                height={1200}
              />

              <div className="flex flex-col max-lg:gap-5 justify-between py-2">
                <div className="flex flex-col gap-2">
                  <CheckTitle>
                    GPT Search, using the latest GPT-3.5 Turbo API 🚀.
                  </CheckTitle>
                  <CheckTitle>
                    Authentication - Sign Up, Log In, Sign Out.
                  </CheckTitle>
                  <CheckTitle>Form Handling, and Form validations</CheckTitle>
                  <CheckTitle>Advanced Tailwind.</CheckTitle>
                  <CheckTitle>useRef hook.</CheckTitle>
                  <CheckTitle>covered the concept of Memoization.</CheckTitle>
                  <CheckTitle>Build Multi-Language support.</CheckTitle>
                  <CheckTitle>
                    Advanced data handling with Redux Toolkit.
                  </CheckTitle>
                  <CheckTitle>
                    Use of .env files to secure secret API keys
                  </CheckTitle>
                </div>

                <Reveal>
                  <AnimatedButton
                    type="ext"
                    link="https://courses.30dayscoding.com/courses/Full-stack-package-652a0a17e4b0db14394522ed"
                  >
                    Buy Now
                  </AnimatedButton>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      {/* <div className="flex flex-col gap-2 p-3 rounded-md dark:bg-indigo-900 bg-gray-200/90 shadow-lg">
        <h4 className="text-xl text-foreground/90 font-semibold text-center">
          Namaste YouTube: Our own YouTube like webApp, Live chat feature🔥
        </h4>

        <div className="flex max-xl:flex-col items-center justify-center gap-4 p-5">
          <Image
            className="rounded-md max-lg:w-full object-cover"
            src={"/project3.png"}
            alt="project-3"
            width={600}
            height={1200}
          />

          <div className="flex flex-col gap-2 py-3">
            <CheckTitle>
              GPT Search, using the latest GPT-3.5 Turbo API 🚀.
            </CheckTitle>
            <CheckTitle>Authentication - Sign Up, Log In, Sign Out.</CheckTitle>
            <CheckTitle>Form Handling, and Form validations</CheckTitle>
            <CheckTitle>Advanced Tailwind.</CheckTitle>
            <CheckTitle>useRef hook.</CheckTitle>
            <CheckTitle>covered the concept of Memoization.</CheckTitle>
            <CheckTitle>Build Multi-Language support.</CheckTitle>
            <CheckTitle>Advanced data handling with Redux Toolkit.</CheckTitle>
            <CheckTitle>Use of .env files to secure secret API keys</CheckTitle>
          </div>
        </div>
      </div> */}
    </div>
  );
}
