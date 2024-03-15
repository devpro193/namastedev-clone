import Hero from "@/components/new-cohort/hero";
import type { Metadata } from "next";
import Testimonials from "@/components/new-cohort/testimonials";
import Companies from "@/components/new-cohort/companies";
import Course from "@/components/new-cohort/course";
import Highlights from "@/components/new-cohort/highligths";
import NewMentor from "@/components/new-cohort/new-mentor";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "LIVE Full Stack Web Development (MERN & NEXT) Cohort",
  description:
    "A live mern stack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "/cohort.jpg",
  },
};

export default function Home() {
  return (
    <main className="bg-background dark:bg-bg min-h-svh transition-all">
      <Hero
        title="LIVE Full Stack Web Development (MERN & NEXT) Cohort"
        desc="A live mern stack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com"
        subTitle="Build fullstack engineering skills with confidence"
        subDesc="Achieve mastery in fullstack engineering through practical projects and expert feedback from industry professionals in this comprehensive program."
        ytId="iQR3fb3yJko"
        heroImage="bg-[url('/main/hero_section_course.webp')]"
      />
      <Course />
      <NewMentor />
      <Companies />
      <Highlights />
      <Testimonials />
    </main>
  );
}
