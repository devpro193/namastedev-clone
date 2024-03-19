"use client";

import {
  NewTabsTrigger,
  Tabs,
  TabsContent,
  TabsList,
} from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../framer/reveal";

export function CourseTabMenu({
  data,
}: {
  data: {
    title: string;
    courses: {
      title: string;
      imgSrc: string;
    }[];
  }[];
}) {
  return (
    <Tabs
      defaultValue="chapter1"
      className="flex shrink-0 max-lg:flex-col gap-2"
    >
      <TabsList className="text-muted-foreground lg:grid lg:place-items-start flex flex-wrap justify-center gap-3 h-fit">
        {data.map(({ title }, i) => (
          <Reveal key={i}>
            <NewTabsTrigger key={i} value={`chapter${i + 1}`}>
              <span>{title}</span>
            </NewTabsTrigger>
          </Reveal>
        ))}
      </TabsList>
      {/* <TabsContent value="account">Tab 1</TabsContent>
      <TabsContent value="password">Tab 2</TabsContent> */}
      <div className="mx-auto">
        {data.map(({ courses }, i) => (
          <TabsContent
            key={i}
            className="lg:max-w-96 w-full px-4"
            value={`chapter${i + 1}`}
          >
            <Reveal>
              <div className="grid lg:grid-rows-2 lg:grid-flow-col max-lg:grid-cols-1 gap-4 max-lg:text-center max-lg:place-items-center lg:w-[640px] overflow-x-scroll horizontal-scroll p-3">
                {courses.map(({ title, imgSrc }, index) => (
                  <Link
                    key={index}
                    href={"/mern-cohort"}
                    className="flex-1 lg:w-[300px] max-lg:max-w-[550px] shadow-[0_2px_40px_0_rgba(0,0,0,.2)]"
                  >
                    <div className="max-lg:m-auto flex lg:flex-col max-lg:items-center max-lg:justify-center lg:p-[2rem_1.5rem_2.5rem] p-8 gap-4 rounded-t-xl bg-second h-fit">
                      <Image
                        src={imgSrc}
                        width={35}
                        height={35}
                        alt="fullstack"
                      />
                      <span className="text-lg font-semibold">{title}</span>
                    </div>
                    <div className="max-lg:m-auto flex flex-wrap items-center p-4 gap-4 rounded-b-xl bg-second h-fit text-sm">
                      <span>140+ Hrs of Content</span>
                      <span>300+ Problems</span>
                      <span>10k+ Learners</span>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
