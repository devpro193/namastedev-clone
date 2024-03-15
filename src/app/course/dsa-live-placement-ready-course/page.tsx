import Hero from "@/components/new-cohort/hero";
import type { Metadata } from "next";
import Testimonials from "@/components/new-cohort/testimonials";
import Companies from "@/components/new-cohort/companies";
import Course from "@/components/new-cohort/course";
import NewMentor from "@/components/new-cohort/new-mentor";
import Highlights from "@/components/new-cohort/highligths";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "LIVE DSA Placement Ready Course",
  description:
    "A live dsa placement ready course from 30 days coding. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "/dsa.jpg",
  },
};

export default function Home() {
  return (
    <main className="bg-background dark:bg-bg min-h-svh transition-all">
      <Hero
        title="Live DSA Placement Ready Course"
        desc="Learn from Aryan, Abhinav, Deepanshu, and the 30DC team to get placed this season."
        subTitle="Learn dsa and get ready for placement"
        subDesc="Master dsa through practicing algorithms under expert's guidance from industry professionals. A placement driven course."
        ytId="tJkZA9JoZCw"
        heroImage="bg-[url('/main/hero_section_dsa.png')]"
      />
      <Course />
      <NewMentor />
      <Companies />
      <Highlights />
      <Testimonials />
    </main>
  );
}
