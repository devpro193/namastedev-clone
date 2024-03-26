import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { localJakarta } from "@/lib/font";
import MobileMenu from "@/components/mobile-menu";
import Banner from "@/components/home-components/banner";
import Navbar from "@/components/home-components/navbar";
import Footer from "@/components/new-cohort/footer";
import Clarity from "@/util/clarity";
import Pixel from "@/util/pixel";
import GoogleAnalytics from "@/util/ga";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "MERN Full Stack Development Course",
  description:
    "A complete mern full stack development course for 30 days coding challenge. Checkout on www.course.30dayscoding.com",
  openGraph: {
    images: "/mern.jpg",
  },
  keywords:
    "Coding, Computer science, 30 days coding, 30 days, Hackerrank, leetcode, coding challenge, Frontend, Backend, Angular, React , Full stack ,Deepanshu Udhwani , Aryan Singh",
  authors: { name: "30 Days Coding" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${localJakarta.variable} font-jakarta bg-bg`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MobileMenu />
          <Banner />
          <Navbar />
          {children}
          <Footer />
          {/* <Whatsapp /> */}
        </ThemeProvider>
      </body>
      <Pixel />
      <Clarity />
      <GoogleAnalytics gaId={"G-BCTWV4GBCY"} />
    </html>
  );
}
