"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucideCheckCircle } from "lucide-react";

type Course = {
  title: string;
  content: string[];
};

const courseList: Course[] = [
  {
    title: "Introduction to MERN Stack",
    content: [
      "Welcome to our course. DM me for any help!",
      "We have EVERYTHING you need in this course.",
      "What is MERN stack ?",
      "Role of Every Component of MERN",
    ],
  },
  {
    title: "Introduction to the world of Web development",
    content: [
      "Introduction of HTML, CSS and JS",
      "CSS, Tailwind CSS, Shadcn, Styling (must watch)",
    ],
  },
  {
    title: "Everything about HTML, CSS",
    content: [
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
    content: [
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

export function TabMenu() {
  return (
    <Tabs
      defaultValue="chapter1"
      className="flex max-lg:flex-col gap-2 text-lg h-full"
    >
      <TabsList className="text-muted-foreground lg:grid lg:place-items-start flex flex-wrap gap-3 h-fit">
        {courseList.map((_, i) => (
          <TabsTrigger key={i} value={`chapter${i + 1}`}>
            <span>Chapter {i + 1}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="w-px mx-1 bg-gradient-to-t from-0% from-transparent to-100% to-prime"></div>
      {/* <TabsContent value="account">Tab 1</TabsContent>
      <TabsContent value="password">Tab 2</TabsContent> */}
      <div className="mx-auto">
        {courseList.map(({ title, content }, i) => (
          <TabsContent
            key={i}
            className="lg:max-w-96 w-full overflow-y-scroll scroll px-4"
            value={`chapter${i + 1}`}
          >
            <div className="flex flex-col gap-5 max-w-[26rem]">
              <h3 className="text-3xl text-prime font-bold">{title}</h3>
              {content.map((e, index) => (
                <span className="flex gap-2 items-start">
                  <LucideCheckCircle className="h-6 w-6 stroke-prime shrink-0" />
                  <p className="text-base">{e}</p>
                </span>
              ))}
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
