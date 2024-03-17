import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { inter, localJakarta, mont, mulish } from "@/lib/font";
import Whatsapp from "@/components/whatsapp";
import MobileMenu from "@/components/mobile-menu";
import Banner from "@/components/home-components/banner";
import Navbar from "@/components/home-components/navbar";
import Footer from "@/components/new-cohort/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "MERN Full Stack Development Course",
  description:
    "A complete mern full stack development course for 30 days coding challenge. Checkout on www.course.30dayscoding.com",
  openGraph: {
    images: "/mern.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${localJakarta.variable} font-jakarta`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MobileMenu />
          <Banner />
          <Navbar />
          {children}
          <Footer />
          <Whatsapp />
        </ThemeProvider>
      </body>
    </html>
  );
}
