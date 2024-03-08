import Achievements from "./achievements";
import Companies from "./companies";
import Course from "./course";
import Faq from "./faq";
import Footer from "./footer";
import Hero from "./hero";
import Instructor from "./instructor";
import Mission from "./mission";
import Navbar from "./navbar";
import Projects from "./projects";
import Testimonials from "./testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "MERN Full Stack Development Course",
  description:
    "A complete mern full stack development course for 30 days coding challenge. Checkout on www.course.30dayscoding.com",
  openGraph: {
    images: "/mern.jpg",
  },
};

export default function Home() {
  return (
    <main className="bg-background dark:bg-indigo-950 min-h-svh transition-all">
      <Navbar />
      <div className="max-w-[1800px] m-auto flex flex-col lg:px-20 lg:py-10 px-6 py-5 gap-10">
        <Hero />
        <Achievements />
        <Mission />
        <Course />
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
