import type { Metadata } from "next";
import Testimonials from "@/components/new-cohort/testimonials";
import Companies from "@/components/new-cohort/companies";
import Course from "@/components/new-cohort/course";
import Highlights from "@/components/new-cohort/highligths";
import Video from "@/components/new-cohort/video";
import Mentor from "@/components/new-cohort/mentor";
import Hero from "./hero";

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
      <Hero
        title=" Join 30DC Private Mentorship Community"
        desc="Learn from Aryan, Abhinav, Deepanshu, and the 30DC team to get placed this season."
        heroImage="/main/hero_section_mentor.png"
      />
      <Mentor />
      <Video
        title={"1:1 Live Session with our Mentors"}
        desc={
          "Learn all the latest technologies from experts themselves with live interation and dobut clear session"
        }
        youtubeId={"gIx8D2pyXVI"}
      />
      <Companies />
      {/* <Highlights /> */}
      <Testimonials />
    </main>
  );
}
