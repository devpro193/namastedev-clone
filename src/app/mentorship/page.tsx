import type { Metadata } from "next";
import Testimonials from "@/components/mentorship-comp/testimonials";
import Video from "@/components/new-cohort/video";
import Hero from "./hero";
import Profile from "./profile";
import Faqs from "@/components/mentorship-comp/faq";
import Mentorship from "./mentorship";
import JoinUs from "./joinus";

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
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title=" Join 30DC Private Mentorship Community"
        desc="Learn from Aryan, Deepanshu, and the 30DC team to get placed this season."
        heroImage="/main/hero_section_mentor.png"
      />
      <Profile />
      <Video
        title={"1:1 Live Query Seesions"}
        desc={
          "Resolve all your queries related to the industry and latest jobs with the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"ylUk7kImBeE"}
      />
      <Mentorship />
      <Video
        title={"Best Practices for Developers by Our Mentors"}
        desc={
          "Explore the latest technologies wit the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"KMufzzSF6SE"}
      />
      <JoinUs />
      <Video
        title={"1:1 Live Session with our Mentors"}
        desc={
          "Explore the latest technologies with the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"gIx8D2pyXVI"}
      />
      <Testimonials />
      <Faqs />
      {/* <Highlights /> */}
      {/* <Testimonials /> */}
    </main>
  );
}
