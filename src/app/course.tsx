import { Collapsible } from "@/components/collabsible";
import { Button } from "@/components/ui/button";
import { satisfy } from "@/lib/font";
import {
  Atom,
  BookOpen,
  Bookmark,
  Briefcase,
  Clock7,
  Code2,
  HelpCircle,
  Timer,
  Video,
} from "lucide-react";
import Image from "next/image";

function CoursePerks({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <span className="flex items-start gap-2 font-semibold text-foreground/70">
      {children}
      {title}
    </span>
  );
}

export default function Course() {
  return (
    <div className={`grid grid-cols-1 gap-3`}>
      <span className="flex gap-4 lg:justify-center items-center">
        <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
        <h2 className={`${satisfy.className} text-4xl`}>Course</h2>
        <hr className="h-1 max-lg:w-full w-20 rounded bg-primary/40" />
      </span>

      <div className="flex gap-4">
        <div className="flex flex-col justify-start w-full max-lg:grid-col-1 shadow-md h-fit">
          <Collapsible title={"Name React Web Series"} />
          <Collapsible title={"Bonus"} />
          <Collapsible title={"Assignments"} />
          <Collapsible title={"Extra Episodes"} />
        </div>

        <div className="max-lg:hidden min-w-44 relative h-full">
          <div className="sticky top-0 p-3 flex flex-col gap-3 shadow-lg dark:bg-indigo-900 rounded-lg h-fit">
            <Image
              className="h-32 rounded shadow-md hover:scale-105 transition-transform "
              alt="course"
              src={
                "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
              }
              width={300}
              height={300}
            />
            <span
              className={`${satisfy.className} flex text-muted-foreground items-end leading-3 gap-2`}
            >
              <Timer className="h-5 w-5" />
              1099 Days Validity
            </span>

            <section className="flex items-end gap-2">
              <span className={`${satisfy.className} text-lg`}>
                ₹<span className="text-2xl">2499</span>
                <span className="text-sm text-muted-foreground ml-1 line-through">
                  ₹3000
                </span>
              </span>

              <span
                className={`${satisfy.className} text-secondary-foreground rounded py-0`}
              >
                17% off
              </span>
            </section>

            <div className="group relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
              <Button variant={"outline"} className={`relative w-full`}>
                Buy Now
              </Button>
            </div>

            <div className="grid grid-col-1 gap-5 text-sm py-3">
              <CoursePerks title={"50+ hours of video content"}>
                <Video className="h-5 w-5" />
              </CoursePerks>

              <CoursePerks title={"Machine Coding round tips"}>
                <Bookmark className="h-5 w-5" />
              </CoursePerks>

              <CoursePerks title={"3 Major project"}>
                <Briefcase className="h-5 w-5" />
              </CoursePerks>

              <CoursePerks title={"Resume building sessions"}>
                <Code2 className="h-5 w-5" />
              </CoursePerks>
              <CoursePerks title={"Interviews Questions covered"}>
                <HelpCircle className="h-5 w-5" />
              </CoursePerks>

              <CoursePerks title={"Latest React Practices"}>
                <Atom className="h-5 w-5" />
              </CoursePerks>

              <CoursePerks title={"3 years of access"}>
                <Clock7 className="h-5 w-5" />
              </CoursePerks>

              <CoursePerks title={"Learn everything from scratch"}>
                <BookOpen className="h-5 w-5" />
              </CoursePerks>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
