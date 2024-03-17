import Achievements from "@/components/course-components/achievements";
import Companies from "@/components/course-components/companies";
import Course from "@/components/course-components/course";
import Faq from "@/components/course-components/faq";
import Footer from "@/components/course-components/footer";
import Hero from "@/components/home-components/hero";
import Instructor from "@/components/course-components/instructor";
import Mission from "@/components/course-components/mission";
import Projects from "@/components/course-components/projects";
import Testimonials from "@/components/course-components/testimonials";
import { inter } from "@/lib/font";
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
    <main className={`font-jakarta bg-bg min-h-svh`}>
      <Hero />
    </main>
  );
}
