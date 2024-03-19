import Hero from "@/components/home-components/new-hero";
import Companies from "@/components/new-cohort/companies";
import Course from "@/components/home-components/course";
import Highlights from "@/components/new-cohort/highligths";
import Mentor from "@/components/new-cohort/mentor";
import Testimonials from "@/components/new-cohort/testimonials";
import type { Metadata } from "next";
import Store from "@/components/home-components/store";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "30 Days Coding - Learn Live",
  description:
    "A well organised platform for multiple development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "https://30dc.graphy.com/logo.png?v=2",
  },
};

export default function Home() {
  return (
    <main className={`font-jakarta bg-bg min-h-svh`}>
      <Hero
        title="25000+ Students Learning DSA, React, MERN, Next JS, Blockchain, AI"
        desc="The most affordable premium courses. Projects, Guides, and Certificates included."
        heroImage="bg-[url('/main/hero_section_fullstack.png')]"
        subTitle="Lifetime Validity Courses + Certificates"
        subDesc="Whether you're a beginner looking to dive into programming or an experienced developer seeking to enhance your skills, our courses & mentors helps to all levels of proficiency."
        ytId="dao2HaGzc3M"
      />
      <Course />
      <Store />
      <Mentor />
      <Companies />
      <Highlights />
      <Testimonials />
    </main>
  );
}
