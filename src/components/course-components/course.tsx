import { Collapsible, SubCourse } from "@/components/collabsible";
import Reveal from "@/components/framer/reveal";
import {
  Atom,
  BookOpen,
  Bookmark,
  Briefcase,
  Clock7,
  Code2,
  Folder,
  HelpCircle,
  Laptop2,
  Timer,
  Video,
} from "lucide-react";
import Image from "next/image";
import AnimatedButton from "../animated-button";

type Props = {
  imageSrc: string;
  courseLink: string;
};

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

export default function Course({ imageSrc, courseLink }: Props) {
  return (
    <div className={"grid grid-cols-1 gap-3"}>
      <Reveal>
        <span className="flex gap-4 lg:justify-center items-center mb-5">
          <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
          <h2 className={"font-jakarta text-4xl"}>Course</h2>
          <hr className="h-1 max-lg:w-full w-20 rounded bg-primary/40" />
        </span>
      </Reveal>

      <div className="flex lg:gap-4">
        <div className="flex flex-col justify-start w-full max-lg:grid-col-1 shadow-md h-fit">
          <Reveal>
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
          </Reveal>

          <Reveal>
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
          </Reveal>
          <Reveal>
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
          </Reveal>
          <Reveal>
            <Collapsible
              title={"Everything about HTML, CSS"}
              session={7}
              time="2 hour 20 min 49 sec"
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

              <SubCourse
                title={"HTML: Intro, Tags, elements, headings"}
                time="31 min 15 sec"
                type="video"
              />

              <SubCourse
                title={"HTML: Lists , Tables , Forms"}
                time="25 min 52 sec"
                type="video"
              />

              <SubCourse
                title={"HTML: div, classes , id ,styles"}
                time="12 min 42 sec"
                type="video"
              />

              <SubCourse
                title={"CSS: Flexbox and Gridbox"}
                time="33 min 4 sec"
                type="video"
              />

              <SubCourse
                title={"Tailwind CSS complete project "}
                time="33 min 33 sec"
                type="video"
              />

              <SubCourse
                title={"Tailwind CSS generic projects "}
                time="4 min 20 sec"
                type="video"
              />

              <SubCourse
                title={"planet-selling-main (code zip file)"}
                type="cloud"
              />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible
              title={"Everything about Javascript"}
              session={9}
              time="4 hour 56 min 8"
            >
              <SubCourse
                title={"Inroduction to JavaScript - basics , Looping"}
                time="31 min 40 sec"
                type="video"
              />
              <SubCourse
                title={"JavaScript - Functions, Arrays"}
                time="12 min 38 sec"
                type="video"
              />
              <SubCourse
                title={"JavaScript - promises, async, await, and objects"}
                time="21 min"
                type="video"
              />
              <SubCourse
                title={"JavaScript - proto , prototype and class"}
                time="25 min 22 sec"
                type="video"
              />
              <SubCourse
                title={"JavaScript - DOM manipulation and apps"}
                time="6 min 22 sec"
                type="video"
              />
              <SubCourse
                title={
                  "JavaScript - Asynchronous, Set Timeout , Callback, Callback Hell"
                }
                time="36 min 56 sec"
                type="video"
              />
              <SubCourse
                title={
                  "JavaScript - live class - async await, promises, callback"
                }
                time="1 hour 37 min 49 sec"
                type="video"
              />
              <SubCourse
                title={"Portfolio project with JavaScript"}
                time="29 min 26 sec"
                type="video"
              />
              <SubCourse
                title={"Form Validation project in JS"}
                time="34 min 52 sec"
                type="video"
              />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible
              title={"Deep understanding of React js"}
              session={9}
              time="5 hour 10 min 50"
            >
              <SubCourse
                title={"React - Introduction and Folder structure"}
                time="13 min 29 sec"
                type="video"
              />

              <SubCourse
                title={"React - Components"}
                time="8 min 4 sec"
                type="video"
              />

              <SubCourse
                title={"Introduction to JSX"}
                time="9 min 8 sec"
                type="video"
              />

              <SubCourse
                title={"Introduction to Components, Props, Projects"}
                time="28 min 53 sec"
                type="video"
              />

              <SubCourse
                title={"Everything about Hooks - useState, useEffect, Custom"}
                time="1 hour 6 min 16 sec"
                type="video"
              />

              <SubCourse
                title={
                  "Introduction to state management - Context API, useContext"
                }
                time="19 min 26 sec"
                type="video"
              />

              <SubCourse
                title={"Introduction to useReducer"}
                time="34 min 30 sec"
                type="video"
              />

              <SubCourse
                title={"React router, error #404, and Form Validation"}
                time="1 hour 6 min 20 sec"
                type="video"
              />

              <SubCourse
                title={"Redux Toolkit explained"}
                time="1 hour 4 min 39 sec"
                type="video"
              />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible
              title={"JS and React mini projects"}
              session={5}
              time="5 hour 21 min 56"
            >
              <SubCourse
                title={"JavaScript 5 Beginners Project in One Video"}
                time="1 hour 10 min 41 sec"
                type="video"
              />
              <SubCourse
                title={"JavaScript 5 Intermediate Project in One Video"}
                time="2 hour 43 min 38 sec"
                type="video"
              />
              <SubCourse
                title={"Portfolio Site with JavaScript"}
                time="29 min 26 sec"
                type="video"
              />
              <SubCourse
                title={"Weather App with React JS"}
                time="37 min 52 sec"
                type="video"
              />
              <SubCourse
                title={"BMI Calculator with React JS"}
                time="20 min 17 sec"
                type="video"
              />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible
              title={"Build a complete Youtube clone with React JS"}
              session={9}
              time="4 hour 2 min 28"
            >
              <SubCourse
                title={"Project setup, Home Navbar"}
                time="38 min 32 sec"
                type="video"
              />
              <SubCourse
                title={"Add a Sidebar to the UI"}
                time="23 min 5 sec"
                type="video"
              />
              <SubCourse
                title={"Youtube Api Setup, Redux Toolkit"}
                time="12 min 17 sec"
                type="video"
              />
              <SubCourse
                title={"useDispatch, useSelector, getHomePage"}
                time="27 min 16 sec"
                type="video"
              />
              <SubCourse
                title={"parseData, parseVideo Duration, convertRawtoString"}
                time="34 min 28 sec"
                type="video"
              />
              <SubCourse
                title={"timeSince, Spinner Loading, Card"}
                time="33 min 36 sec"
                type="video"
              />
              <SubCourse
                title={"Search, Search Card"}
                time="32 min 12 sec"
                type="video"
              />
              <SubCourse
                title={"Scrollbar, Watch, Additional features"}
                time="40 min 59 sec"
                type="video"
              />
              <SubCourse title="Complete code zip file" type="cloud" />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible
              title={"React + JS Interview exercises"}
              session={7}
              time="11 hour 25 min 7"
            >
              <SubCourse
                title="50+ JavaScript Practice Exercises - Beginners to Advanced"
                time="4 hour 8 min 8 sec"
                type="video"
              />

              <SubCourse
                title="5 React JS Beginners Projects"
                time="3 hour 2 min 51 sec"
                type="video"
              />

              <SubCourse
                title="30 + React JS Practice Exercises in Hindi part 1"
                time="2 hour 6 min 35 sec"
                type="video"
              />

              <SubCourse
                title="30 + React JS Practice Exercises - part 2"
                time="2 hour 6 min 35 sec"
                type="video"
              />

              <SubCourse
                title="Practice frontend and react problems - AlgoChurn.com"
                time="55 sec"
                type="video"
              />

              <SubCourse
                title="JS practice questions (code zip)"
                type="cloud"
              />

              <SubCourse
                title="React practice questions (code zip)"
                type="cloud"
              />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible
              title={"Everything about Node JS"}
              session={4}
              time="1 hour 16 min 23"
            >
              <SubCourse
                title="Introduction to Node JS , Modules , Local Modules"
                time="15 min 13 sec"
                type="video"
              />

              <SubCourse
                title="Built-in Modules in Node JS"
                time="17 min 15 sec"
                type="video"
              />

              <SubCourse
                title="Npm, nodemon, package.json etc"
                time="5 min 2 sec"
                type="video"
              />

              <SubCourse
                title="Event Loop, Events , Streams"
                time="38 min 51 sec"
                type="video"
              />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible
              title={"Backend development: Node JS + Express JS"}
              session={4}
              time="1 hour 10 min 12"
            >
              <SubCourse
                title="Creating server using Express , Express Routes"
                time="19 min 48 sec"
                type="video"
              />
              <SubCourse
                title="Json , params , quesry"
                time="25 min 18 sec"
                type="video"
              />
              <SubCourse
                title="CRUD Operations - backend"
                time="25 min 5 sec"
                type="video"
              />
              <SubCourse
                title="Full stack interview questions (bonus) (1 pages)"
                type="file"
              />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible
              title={"Database: Working with MongoDB and other DBs"}
              session={3}
              time="2 hour 36 min 32"
            >
              <SubCourse
                title="Introduction to MongoDB and NoSQL database"
                time="13 min 14 sec"
                type="video"
              />

              <SubCourse
                title="Login and Registration using MERN"
                time="1 hour 1 min 39 sec"
                type="video"
              />

              <SubCourse
                title="Performing CRUD operations using MongoDB"
                time="1 hour 21 min 38 sec"
                type="video"
              />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible
              title={"Firebase: auth, db, functions"}
              session={3}
              time="1 hour 27 min 23"
            >
              <SubCourse
                title="Firebase overview and speedrun"
                time="14 min 6 sec"
                type="video"
              />

              <SubCourse
                title="Authentication using React and Firebase"
                time="36 min 11 sec"
                type="video"
              />

              <SubCourse
                title="CRUD using React and Firebase"
                time="36 min 5 sec"
                type="video"
              />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible
              title={"Build a full stack E-Commerce App (from scratch)"}
              session={12}
              time="4 hour 47 min 57"
            >
              <SubCourse
                title="Ecommerce app part 1 - Setup , Server , Mongodb and userModel"
                time="18 min 1 sec"
                type="video"
              />
              <SubCourse
                title="Ecommerce app part 2 - userctrl , userrouter , cokkies , jwt token"
                time="31 min 2 sec"
                type="video"
              />
              <SubCourse
                title="Ecommerce app part 3 - register , login , logout ,authorization"
                time="23 min 26 sec"
                type="video"
              />
              <SubCourse
                title="Ecommerce app part 4 - define a category (CRUD)"
                time="28 min 16 sec"
                type="video"
              />
              <SubCourse
                title="Ecommerce app part 5 - define a product (CRUD)"
                time="33 min"
                type="video"
              />
              <SubCourse
                title="Ecommerce app part 6 - filtering , pagination , sorting , limitations"
                time="20 min 38 sec"
                type="video"
              />
              <SubCourse
                title="Ecommerce app part 7 - client side - navbar"
                time="23 min 59 sec"
                type="video"
              />
              <SubCourse
                title="Ecommerce app part 8 - client side (products), context api , fetching"
                time="36 min 11 sec"
                type="video"
              />
              <SubCourse
                title="Ecommerce app part 9 - client side (details page)"
                time="16 min 51 sec"
                type="video"
              />
              <SubCourse
                title="Ecommerce app part 10 - client side (login , logout , admin features)"
                time="35 min 14 sec"
                type="video"
              />
              <SubCourse
                title="Ecommerce app part 11 - client side (Add to cart)"
                time="21 min 14 sec"
                type="video"
              />
              <SubCourse
                title="mern-stack-ecommerce (code zip file)"
                type="cloud"
              />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible
              title={"FULL STACK PROJECTS - JS, React, MERN"}
              session={11}
              time="3 hour 9 min 15"
            >
              <SubCourse title="React Ecommerce app" type="code" />
              <SubCourse
                title="E-commerce project part 1"
                time="1 hour 18 min 51 sec"
                type="video"
              />
              <SubCourse
                title="E-commerce project part 2"
                type="video"
                time="47 min 44 sec"
              />
              <SubCourse
                title="Ecommerce project (download code)"
                type="cloud"
              />
              <SubCourse
                title="Basic and authentication MERN app"
                type="code"
              />
              <SubCourse
                title="Login, Registration using MERN stack (video)"
                type="video"
                time="1 hour 1 min 39 sec"
              />
              <SubCourse title="Code snippets" type="code" />
              <SubCourse
                title="Basic MERN stack app (download code)"
                type="cloud"
              />
              <SubCourse
                title="Youtube clone project (download code)"
                type="cloud"
              />
              <SubCourse
                title="Social media MERN app (download code)"
                type="cloud"
              />
              <SubCourse
                title="Code and notes for live classes (download code)"
                type="link"
              />
            </Collapsible>
          </Reveal>
          <Reveal>
            <Collapsible title={"Interview guides (download pdf)"} session={4}>
              <SubCourse
                title="Full stack interview questions (1 pages)"
                type="file"
              />

              <SubCourse
                title="Complete tech job guide (26 pages)"
                type="file"
              />

              <SubCourse
                title="Behaviour interview guide (15 pages)"
                type="file"
              />

              <SubCourse
                title="Cold emailing networking guide (12 pages)"
                type="file"
              />
            </Collapsible>
          </Reveal>
        </div>

        {/* <Reveal> */}
        <div className="max-lg:hidden min-w-44 relative h-full">
          <div className="sticky top-7 p-3 flex flex-col gap-3 shadow-lg dark:bg-second rounded-lg h-fit">
            <Image
              className="h-36 rounded shadow-md hover:scale-105 transition-transform object-cover"
              alt="course"
              src={imageSrc}
              width={300}
              height={300}
            />
            <span
              className={
                "font-jakarta flex text-muted-foreground items-center leading-3 gap-1"
              }
            >
              <Timer className="h-5 w-5" />
              1099 Days Validity
            </span>

            <section className="flex items-end gap-2">
              <span className={"font-jakarta text-lg"}>
                ₹<span className="text-2xl">2999</span>
                <span className="text-sm text-muted-foreground ml-1 line-through">
                   ₹7500
                </span>
              </span>

              <span
                className={
                  "font-jakarta text-secondary-foreground rounded py-0"
                }
              >
                17% off
              </span>
            </section>

            <AnimatedButton type="ext" link={courseLink}>
              Buy Now
            </AnimatedButton>

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
        {/* </Reveal> */}
      </div>
    </div>
  );
}
