import Link from "next/link";
import Image from "next/image";
import { CourseTabMenu } from "./course-tabs";
import Reveal from "../framer/reveal";

export default function Store() {
  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto py-8">
      <Reveal>
        <span className="text-prime font-semibold uppercase">Courses</span>
      </Reveal>
      <div className="flex w-full max-lg:flex-col lg:gap-6 max-lg:items-center max-lg:gap-10 max-lg:max-w-[550px] max-lg:px-10 lg:max-w-[925px]">
        <CourseTabMenu
          data={[
            {
              title: "All Courses",
              courses: [
                {
                  title: "All 10 courses package -  (Lifetime Validity)",
                  imgSrc: "/courses/course1.jpg",
                  link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
                },
                {
                  title:
                    "Full stack package - MERN, Next JS, Projects (Lifetime Validity)",
                  imgSrc: "/courses/course2.jpg",
                  link: "https://courses.30dayscoding.com/courses/Full-stack-package-652a0a17e4b0db14394522ed",
                },
                {
                  title: "DSA Complete Placement Course",
                  imgSrc: "/courses/dsa.jpg",
                  link: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
                },
                {
                  title: "MERN FullStack Web Development",
                  imgSrc: "/courses/mern.jpg",
                  link: "https://courses.30dayscoding.com/courses/AI-full-stack-project-development-course-64eebe76e4b002b964b5645d",
                },
                {
                  title:
                    "Idea to MVP, India builder, Saas, Solopreneur course - (Lifetime Validity)",
                  imgSrc: "/courses/cohort.jpg",
                  link: "https://courses.30dayscoding.com/courses/Idea-to-MVP-full-stack-project-course-6525cb14e4b07ef99d14b75b",
                },
                {
                  title: "Next JS FullStack Web Development",
                  imgSrc: "/courses/nextjs.jpg",
                  link: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
                },
                {
                  title: "Complete Blockchain and Web3 course",
                  imgSrc: "/courses/blockchain.jpg",
                  link: "https://courses.30dayscoding.com/courses/Blockchain-developer-course-64eec408e4b002b964b568be",
                },
                {
                  title: "ChatGPT Full Stack Course",
                  imgSrc: "/courses/ai.jpg",
                  link: "https://courses.30dayscoding.com/courses/AI-full-stack-project-development-course-64eebe76e4b002b964b5645d",
                },
                {
                  title: "Complete JavaScript Course - (Lifetime Validity)",
                  imgSrc: "/courses/javascript.jpg",
                  link: "https://courses.30dayscoding.com/courses/Complete-Javascript-course-for-developers-652da487e4b0dce56ddde296",
                },
                {
                  title: "Complete Python Course - (Lifetime Validity)",
                  imgSrc: "/courses/python.jpg",
                  link: "https://courses.30dayscoding.com/courses/Complete-Python-course-for-developers-652da4c5e4b010a575e0254b",
                },
                {
                  title: "Complete Java Course - (Lifetime Validity)",
                  imgSrc: "/courses/java.jpg",
                  link: "https://courses.30dayscoding.com/courses/Complete-Java-course-659ef388e4b0f601f93531b8",
                },
              ],
            },
            {
              title: "AI and Blockchain",
              courses: [
                {
                  title: "Complete Blockchain and Web3 Course",
                  imgSrc: "/courses/blockchain.jpg",
                  link: "https://courses.30dayscoding.com/courses/Blockchain-developer-course-64eec408e4b002b964b568be",
                },
                {
                  title: "ChatGPT Full Stack Course",
                  imgSrc: "/courses/ai.jpg",
                  link: "https://courses.30dayscoding.com/courses/AI-full-stack-project-development-course-64eebe76e4b002b964b5645d",
                },
              ],
            },
            {
              title: "Full Stack Development",
              courses: [
                {
                  title: "MERN FullStack Web Development",
                  imgSrc: "/courses/mern.jpg",
                  link: "https://courses.30dayscoding.com/courses/AI-full-stack-project-development-course-64eebe76e4b002b964b5645d",
                },
                {
                  title:
                    "Idea to MVP, India builder, Saas, Solopreneur course - (Lifetime Validity)",
                  imgSrc: "/courses/cohort.jpg",
                  link: "https://courses.30dayscoding.com/courses/Idea-to-MVP-full-stack-project-course-6525cb14e4b07ef99d14b75b",
                },
                {
                  title: "Next JS FullStack Web Development",
                  imgSrc: "/courses/nextjs.jpg",
                  link: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
                },
              ],
            },
            {
              title: "Job",
              courses: [
                {
                  title: "DSA Complete Placement Course",
                  imgSrc: "/courses/dsa.jpg",
                  link: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
                },
              ],
            },
            {
              title: "Package",
              courses: [
                {
                  title: "All 10 courses package -  (Lifetime Validity)",
                  imgSrc: "/courses/course1.jpg",
                  link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
                },
                {
                  title:
                    "Full stack package - MERN, Next JS, Projects - (Lifetime Validity)",
                  imgSrc: "/courses/course2.jpg",
                  link: "https://courses.30dayscoding.com/courses/Full-stack-package-652a0a17e4b0db14394522ed",
                },
              ],
            },
            {
              title: "Programming language",
              courses: [
                {
                  title: "Complete JavaScript Course - (Lifetime Validity)",
                  imgSrc: "/courses/javascript.jpg",
                  link: "https://courses.30dayscoding.com/courses/Complete-Javascript-course-for-developers-652da487e4b0dce56ddde296",
                },
                {
                  title: "Complete Python Course - (Lifetime Validity)",
                  imgSrc: "/courses/python.jpg",
                  link: "https://courses.30dayscoding.com/courses/Complete-Python-course-for-developers-652da4c5e4b010a575e0254b",
                },
                {
                  title: "Complete Java Course - (Lifetime Validity)",
                  imgSrc: "/courses/java.jpg",
                  link: "https://courses.30dayscoding.com/courses/Complete-Java-course-659ef388e4b0f601f93531b8",
                },
              ],
            },
            {
              title: "Project",
              courses: [
                {
                  title:
                    "Idea to MVP, India builder, Saas, Solopreneur course - (Lifetime Validity)",
                  imgSrc: "/courses/cohort.jpg",
                  link: "https://courses.30dayscoding.com/courses/Idea-to-MVP-full-stack-project-course-6525cb14e4b07ef99d14b75b",
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
