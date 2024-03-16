import Hero from "@/components/new-cohort/hero";
import type { Metadata } from "next";
import Testimonials from "@/components/new-cohort/testimonials";
import Companies from "@/components/new-cohort/companies";
import Course from "@/components/new-cohort/course";
import Highlights from "@/components/new-cohort/highligths";
import NewMentor from "@/components/new-cohort/new-mentor";
import Video from "@/components/new-cohort/video";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "Mentorship | 30dayscoding",
  description:
    "A live mern stack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "/cohort.jpg",
  },
};

export default function Home() {
  return (
    <main className="bg-background dark:bg-bg min-h-svh transition-all">
      <NewMentor />
      {/* <Hero
        title="LIVE Full Stack Web Development (MERN & NEXT) Cohort"
        desc="Learn from Aryan, Abhinav, Deepanshu, and the 30DC team to get placed this season."
        subTitle="Build fullstack engineering skills with confidence"
        subDesc="Achieve mastery in fullstack engineering through practical projects and expert feedback from industry professionals in this comprehensive program."
        ytId="iQR3fb3yJko"
        heroImage="bg-[url('/main/hero_section_course.webp')]"
      /> */}
      <Course />
      <Video
        title={"1:1 Live Session with our Mentors"}
        desc={
          "Learn all the latest technologies from experts themselves with live interation and dobut clear session"
        }
        youtubeId={"gIx8D2pyXVI"}
      />
      <Companies />
      <Highlights />
      <Testimonials />
    </main>
  );
}
