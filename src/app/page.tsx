import Achievements from "@/components/course-components/achievements";
import Companies from "@/components/course-components/companies";
import Course from "@/components/course-components/course";
import Faq from "@/components/course-components/faq";
import Footer from "@/components/course-components/footer";
import Hero from "@/components/course-components/hero";
import Instructor from "@/components/course-components/instructor";
import Mission from "@/components/course-components/mission";
import Navbar from "@/components/course-components/navbar";
import Projects from "@/components/course-components/projects";
import Testimonials from "@/components/course-components/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "Landing Page In Progress",
  description:
    "A complete mern full stack development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "/mern.jpg",
  },
};

export default function Home() {
  return (
    <main className="bg-background dark:bg-indigo-950 min-h-svh transition-all">
      <Navbar />
      <div className="max-w-[1800px] m-auto flex flex-col lg:px-20 lg:py-10 px-6 py-5 gap-10">
        <Hero
          courseLink="https://courses.30dayscoding.com/s/store"
          title="MERN Full Stack Development Course"
          youtube="dao2HaGzc3M"
        />
        <Achievements />
        <Mission />
        <Course
          courseLink="https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d"
          imageSrc="/mern.jpg"
        />
        <Instructor />
        <Projects />
        <Companies />
        <Testimonials />
        <Faq />
      </div>
      <Footer />
    </main>
  );
}
