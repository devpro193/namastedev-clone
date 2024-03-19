import Hero from "@/components/home-components/new-hero";
import Companies from "@/components/new-cohort/companies";
import Course from "@/components/new-cohort/course";
import Highlights from "@/components/new-cohort/highligths";
import Mentor from "@/components/new-cohort/mentor";
import Testimonials from "@/components/new-cohort/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "30 Days Coding - Learn Live",
  description:
    "A well organised platform for multiple development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "https://30dc.graphy.com/logo.png?v=2",
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
    <main className={`font-jakarta bg-bg min-h-svh`}>
      <Hero
        title="25000+ Students Learning DSA, React, MERN, Next JS, Blockchain, AI"
        desc="The most affordable premium courses. Projects, Guides, and Certificates included."
        heroImage="bg-[url('/main/hero_section_fullstack.png')]"
        subTitle="Lifetime Validity Courses + Certificates"
        subDesc="Whether you're a beginner looking to dive into programming or an experienced developer seeking to enhance your skills, our courses & mentors helps to all levels of proficiency."
        ytId="dao2HaGzc3M"
      />
      <Course course={course} />
      <Mentor />
      <Companies />
      <Highlights />
      <Testimonials />
    </main>
  );
}
