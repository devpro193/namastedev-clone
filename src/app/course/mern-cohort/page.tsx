import Achievements from "@/components/course-components/achievements";
import Companies from "@/components/course-components/companies";
import Course from "@/components/course-components/course";
import Faq from "@/components/course-components/faq";
import Footer from "@/components/course-components/footer";
import Hero from "@/components/course-components/hero";
import Instructor from "@/components/course-components/instructor";
import Mission from "@/components/course-components/mission";
import Navbar from "@/components/home-components/navbar";
import Projects from "@/components/course-components/projects";
import Testimonials from "@/components/course-components/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "LIVE MERN Stack Web Development Cohort",
  description:
    "A live mern stack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "/cohort.jpg",
  },
};

export default function Home() {
  return (
    <main className="bg-background dark:bg-bg min-h-svh transition-all">
      <Navbar />
      <div className="max-w-[1800px] m-auto flex flex-col lg:px-20 lg:py-10 px-6 py-5 gap-10">
        <Hero
          title="LIVE MERN Stack Web Development Cohort"
          courseLink="https://courses.30dayscoding.com/s/store"
          youtube="iQR3fb3yJko"
        />
        <Achievements />
        <Mission />
        <Course
          courseLink="https://courses.30dayscoding.com/courses/Idea-to-MVP-full-stack-project-course-6525cb14e4b07ef99d14b75b"
          imageSrc="/cohort.jpg"
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
