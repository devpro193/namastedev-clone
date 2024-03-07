import { satisfy } from "@/lib/font";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

function CheckTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex gap-2 items-start justify-start font-semibold text-foreground/70">
      <CheckCircle className="h-5 w-5 shrink-0" />
      <p>{children}</p>
    </span>
  );
}

export default function Projects() {
  return (
    <div className={`grid grid-cols-1 gap-6`}>
      <span className="flex gap-4 lg:justify-center items-center">
        <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
        <h2 className={`${satisfy.className} text-3xl`}>
          Awesome Projects covered in Namaste React 🚀
        </h2>
        <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
        {/* <hr className="h-1 max-lg:w-full w-20 rounded bg-primary/40" /> */}
      </span>

      <div className="flex flex-col gap-2 p-3 rounded-md dark:bg-indigo-900 bg-gray-200/90 shadow-lg">
        <h4 className="text-xl text-foreground/90 font-semibold text-center">
          `NetflixGPT` - a movie recommendation App with GPT-3.5 turbo
          integration🔥
        </h4>

        <div className="flex max-xl:flex-col items-center justify-center gap-4 p-5">
          <Image
            className="rounded-md max-lg:w-full object-cover"
            src={"/project1.webp"}
            alt="project-1"
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
      </div>

      <div className="flex flex-col gap-2 p-3 rounded-md dark:bg-indigo-900 bg-gray-200/90 shadow-lg">
        <h4 className="text-xl text-foreground/90 font-semibold text-center">
          `Namaste YouTube` - Our own YouTube like webApp with Live chat
          feature🔥
        </h4>

        <div className="flex max-xl:flex-col items-center justify-center gap-4 p-5">
          <Image
            className="rounded-md max-lg:w-full object-cover"
            src={"/project2.png"}
            alt="project-2"
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
      </div>

      <div className="flex flex-col gap-2 p-3 rounded-md dark:bg-indigo-900 bg-gray-200/90 shadow-lg">
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
      </div>
    </div>
  );
}
