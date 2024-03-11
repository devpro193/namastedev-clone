import type { Metadata } from "next";
import Navbar from "@/components/home-components/navbar";
import Hero from "./hero";
import Inspirational from "./inspirational";
import Watch from "./watch";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "Testimonial | 30DaysCoding",
  description:
    "A testimonial page for our development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "/mern.jpg",
  },
};

export default function Testimonial() {
  return (
    <main className={`font-inter bg-bg min-h-svh text-white`}>
      <Navbar />
      <div className="p-[3.75rem_0_6.5rem] overflow-hidden">
        <div className="mx-auto w-full max-w-[90rem] max-phone:p-[0_0_3.5rem] p-[0_min(6rem,_6.66%)] flex flex-col gap-20">
          <Hero />
          <Inspirational />
          {/* <Watch /> */}
        </div>
      </div>
    </main>
  );
}
