import Link from "next/link";
import Image from "next/image";
import { CourseTabMenu } from "./course-tabs";

export default function Store() {
  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto py-8 pb-14">
      <div className="flex w-full max-lg:flex-col lg:gap-6 max-lg:items-center max-lg:gap-10 max-lg:max-w-[550px] max-lg:px-10 lg:max-w-[925px]">
        <CourseTabMenu
          data={[
            {
              title: "Popular courses",
              courses: [
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
                {
                  title: "Java Spring Boot 2",
                  imgSrc: "/fullstack.png",
                },
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
                {
                  title: "Java Spring Boot 2",
                  imgSrc: "/fullstack.png",
                },
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
                {
                  title: "Java Spring Boot 2",
                  imgSrc: "/fullstack.png",
                },
              ],
            },
            {
              title: "New Courses",
              courses: [
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
              ],
            },
            {
              title: "New Courses",
              courses: [
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
              ],
            },
            {
              title: "New Courses",
              courses: [
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
              ],
            },
            {
              title: "New Courses",
              courses: [
                {
                  title: "Basic of Web Developments",
                  imgSrc: "/fullstack.png",
                },
              ],
            },
            {
              title: "New Courses",
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
    </div>
  );
}
