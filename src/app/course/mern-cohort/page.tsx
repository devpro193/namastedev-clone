import Hero from "@/components/new-cohort/hero";
import type { Metadata } from "next";
import Testimonials from "@/components/mentorship-comp/testimonials";
import Companies from "@/components/new-cohort/companies";
import Course from "@/components/new-cohort/course";
import Highlights from "@/components/new-cohort/highligths";
import NewMentor from "@/components/new-cohort/new-mentor";
import Faqs from "@/components/mentorship-comp/faq";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "LIVE Full Stack Web Development (MERN & NEXT) Cohort",
  description:
    "A live mern stack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "/cohort.jpg",
  },
};

export default function Home() {
  const course = [
    {
      title: "Introduction to MERN Stack",
      topics: [
        "Welcome to our course. DM me for any help!",
        "We have EVERYTHING you need in this course.",
        "What is MERN stack ?",
        "Role of Every Component of MERN",
      ],
    },
    {
      title: "Introduction to the world of Web development",
      topics: [
        "Introduction of HTML, CSS and JS",
        "CSS, Tailwind CSS, Shadcn, Styling (must watch)",
      ],
    },
    {
      title: "Everything about HTML, CSS",
      topics: [
        "Introduction of HTML, CSS and JS",
        "CSS, Tailwind CSS, Shadcn, Styling (must watch)",
        "HTML: Intro, Tags, elements, headings",
        "HTML: Lists , Tables , Forms",
        "HTML: div, classes , id ,styles",
        "CSS: Flexbox and Gridbox",
        "Tailwind CSS complete project ",
        "Tailwind CSS generic projects ",
      ],
    },
    {
      title: "Everything about Javascript",
      topics: [
        "Inroduction to JavaScript - basics , Looping",
        "JavaScript - Functions, Arrays",
        "JavaScript - promises, async, await, and objects",
        "JavaScript - proto , prototype and class",
        "JavaScript - DOM manipulation and apps",
        "JavaScript - Asynchronous, Set Timeout , Callback, Callback Hell",
        "JavaScript - live class - async await, promises, callback",
        "Portfolio project with JavaScript",
        "Form Validation project in JS",
      ],
    },
  ];

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="LIVE Full Stack Web Development (MERN & NEXT) Cohort"
        desc="Learn from Aryan, Abhinav, Deepanshu, and the 30DC team to get placed this season."
        subTitle="Build fullstack engineering skills with confidence"
        subDesc="Achieve mastery in fullstack engineering through practical projects and expert feedback from industry professionals in this comprehensive program."
        ytId="iQR3fb3yJko"
        heroImage="bg-[url('/main/hero_section_course.webp')]"
      />
      <Course course={course} />
      <NewMentor />
      <Companies />
      <Highlights />
      <Testimonials />
      <Faqs />
    </main>
  );
}
