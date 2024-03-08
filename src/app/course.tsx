import { Collapsible, SubCourse } from "@/components/collabsible";
import { Button } from "@/components/ui/button";
import { satisfy } from "@/lib/font";
import {
  Atom,
  BookOpen,
  Bookmark,
  Briefcase,
  Clock7,
  Code2,
  FileText,
  Folder,
  HelpCircle,
  Laptop2,
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
          <section className="flex items-center gap-2 px-2 font-semibold text-sm text-foreground/70 mb-2">
            <span className="flex items-center gap-1">
              <Folder className="w-4 h-4 stroke-[3]" /> 15 Modules
            </span>
            <hr className="w-3 rotate-90 border border-foreground/70" />
            <span className="flex items-center gap-1">
              <Laptop2 className="w-4 h-4 stroke-[3]" /> 93 Sessions
            </span>
            <hr className="w-3 rotate-90 border border-foreground/70" />
            <span className="flex items-center gap-1">
              <Timer className="w-4 h-4 stroke-[3]" /> 48 hour 11 min 20 sec
            </span>
          </section>
          <Collapsible
            title={"Introduction to MERN Stack"}
            session={4}
            time="8 min 44 sec"
          >
            <SubCourse
              title={"Welcome to our course. DM me for any help!"}
              type="video"
            />
            <SubCourse
              title={"We have EVERYTHING you need in this course."}
              type="file"
              time="1 min"
            />
            <SubCourse
              title={"What is MERN stack ?"}
              type="video"
              time="2 min 15 sec"
            />
            <SubCourse
              title={"Role of Every Component of MERN"}
              type="video"
              time="5 min 28 sec"
            />
          </Collapsible>
          <Collapsible
            title={"Introduction to the world of Web development"}
            session={2}
            time="17 min 31 sec"
          >
            <SubCourse
              title={"Introduction of HTML, CSS and JS"}
              type="video"
              time="5 min 9 sec"
            />
            <SubCourse
              title={"CSS, Tailwind CSS, Shadcn, Styling (must watch)"}
              type="video"
              time="12 min 22 sec"
            />
          </Collapsible>
          <Collapsible
            title={"Everything about HTML, CSS"}
            session={7}
            time="2 hour 20 min 49 sec"
          >
            <></>
          </Collapsible>

          <Collapsible
            title={"Everything about Javascript"}
            session={9}
            time="4 hour 56 min 8"
          >
            <></>
          </Collapsible>

          <Collapsible
            title={"Deep understanding of React js"}
            session={9}
            time="5 hour 10 min 50"
          >
            <></>
          </Collapsible>

          <Collapsible
            title={"JS and React mini projects"}
            session={5}
            time="5 hour 21 min 56"
          >
            <></>
          </Collapsible>

          <Collapsible
            title={"Build a complete Youtube clone with React JS"}
            session={9}
            time="4 hour 2 min 28"
          >
            <></>
          </Collapsible>

          <Collapsible
            title={"React + JS Interview exercises"}
            session={7}
            time="11 hour 25 min 7"
          >
            <></>
          </Collapsible>

          <Collapsible
            title={"Everything about Node JS"}
            session={4}
            time="1 hour 16 min 23"
          >
            <></>
          </Collapsible>

          <Collapsible
            title={"Backend development: Node JS + Express JS"}
            session={4}
            time="1 hour 10 min 12"
          >
            <></>
          </Collapsible>

          <Collapsible
            title={"Database: Working with MongoDB and other DBs"}
            session={3}
            time="2 hour 36 min 32"
          >
            <></>
          </Collapsible>

          <Collapsible
            title={"Firebase: auth, db, functions"}
            session={3}
            time="1 hour 27 min 23"
          >
            <></>
          </Collapsible>

          <Collapsible
            title={"Build a full stack E-Commerce App (from scratch)"}
            session={1}
            time="4 hour 47 min 57"
          >
            <></>
          </Collapsible>

          <Collapsible
            title={"FULL STACK PROJECTS - JS, React, MERN"}
            session={1}
            time="3 hour 9 min 15"
          >
            <></>
          </Collapsible>

          <Collapsible title={"Interview guides (download pdf)"} session={4}>
            <></>
          </Collapsible>
        </div>

        <div className="max-lg:hidden min-w-44 relative h-full">
          <div className="sticky top-0 p-3 flex flex-col gap-3 shadow-lg dark:bg-indigo-900 rounded-lg h-fit">
            <Image
              className="h-36 rounded shadow-md hover:scale-105 transition-transform object-cover"
              alt="course"
              src={"/mern.jpg"}
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
