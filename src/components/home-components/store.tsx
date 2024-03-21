import Link from "next/link";
import Image from "next/image";
import { CourseTabMenu } from "./course-tabs";
import Reveal from "../framer/reveal";

export default function Store() {
  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto py-8">
      <Reveal>
        <span className="text-prime font-semibold uppercase">More Course</span>
      </Reveal>
      <div className="flex w-full max-lg:flex-col lg:gap-6 max-lg:items-center max-lg:gap-10 max-lg:max-w-[550px] max-lg:px-10 lg:max-w-[925px]">
        <CourseTabMenu
          data={[
            {
              title: "AI and Blockchain",
              courses: [
                {
                  title: "Complete BLOCKCHAIN  and WEB3 course",
                  imgSrc: "/courses/blockchain.jpg",
                },
                {
                  title: "AI - CHAT GPT FULL stack course",
                  imgSrc: "/courses/ai.jpg",
                },
              ],
            },
            {
              title: "Full Stack Development",
              courses: [
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
              ],
            },
            {
              title: "Job",
              courses: [
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
              ],
            },
            {
              title: "Package",
              courses: [
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
              ],
            },
            {
              title: "Programming language",
              courses: [
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
              ],
            },
            {
              title: "Project",
              courses: [
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
              ],
            },
          ]}
        />
      </div>

      <Reveal>
        <Link
          className="text-sm"
          href={"https://courses.30dayscoding.com/s/store"}
        >
          <button
            className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
          >
            Check More Courses
          </button>
        </Link>
      </Reveal>
    </div>
  );
}
