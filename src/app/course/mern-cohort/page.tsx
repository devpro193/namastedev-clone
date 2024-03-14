import Footer from "@/components/course-components/footer";
import Hero from "@/components/new-cohort/hero";
import type { Metadata } from "next";
import Testimonials from "@/components/new-cohort/testimonials";
import Companies from "@/components/new-cohort/companies";
import Course from "@/components/new-cohort/course";
import NewMentor from "@/components/new-cohort/new-mentor";
import Highlights from "@/components/new-cohort/highligths";

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
      <Hero />
      <Course />
      <NewMentor />
      <Companies />
      <Testimonials />
      <Highlights />
      <Footer />
    </main>
  );
}
