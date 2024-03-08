import type { Metadata } from "next";
import "./globals.css";
import HeadBanner from "./head-banner";
import { ThemeProvider } from "@/components/theme-provider";
import { mont } from "@/lib/font";
import Floating from "./floating";

export const metadata: Metadata = {
  title: "MERN Full Stack Development Course",
  description:
    "A complete mern full stack development course for 30 days coding challenge. Checkout on www.course.30dayscoding.com",
  openGraph: {
    images: "https://namastedev-clone.vercel.app/mern.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <HeadBanner />
          {children}
          <Floating />
        </ThemeProvider>
      </body>
    </html>
  );
}
