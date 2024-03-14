import Footer from "@/components/course-components/footer";
import Hero from "./hero";
import type { Metadata } from "next";
import YoutubeEmbed from "@/components/yotube-embed";
import Video from "@/components/new-cohort/video";

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
      <Footer />
    </main>
  );
}
