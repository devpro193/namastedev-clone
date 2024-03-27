"use client";

import {
  NewTabsTrigger,
  Tabs,
  TabsContent,
  TabsList,
} from "@/components/ui/tabs";
import { LucideCheckCircle } from "lucide-react";

export function TabMenu({
  course,
}: {
  course: {
    title: string;
    topics: string[];
  }[];
}) {
  return (
    <Tabs
      defaultValue="chapter1"
      className="flex shrink-0 max-lg:flex-col gap-2 text-lg"
    >
      <TabsList className="text-muted-foreground lg:grid lg:place-items-start flex justify-start mx-auto max-w-[90vw] gap-3 h-fit max-h-80 lg:overflow-y-scroll scroll max-lg:overflow-x-scroll horizontal-scroll">
        {course.map((_, i) => (
          <NewTabsTrigger key={i} value={`chapter${i + 1}`}>
            <span>Week {i + 1}</span>
          </NewTabsTrigger>
        ))}
      </TabsList>
      <div className="w-px mx-1 bg-gradient-to-t from-0% from-transparent to-100% to-prime"></div>
      {/* <TabsContent value="account">Tab 1</TabsContent>
      <TabsContent value="password">Tab 2</TabsContent> */}
      <div className="mx-auto">
        {course.map(({ title, topics }, i) => (
          <TabsContent
            key={i}
            className="lg:max-w-96 w-full overflow-y-scroll scroll px-4 lg:max-h-96"
            value={`chapter${i + 1}`}
          >
            <div className="flex flex-col gap-5 max-w-[26rem]">
              <h3 className="text-3xl text-prime font-bold">{title}</h3>
              {topics.map((e, index) => (
                <span key={index} className="flex gap-2 lg:items-start">
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
