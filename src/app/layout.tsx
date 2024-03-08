import type { Metadata } from "next";
import "./globals.css";
import HeadBanner from "./head-banner";
import { ThemeProvider } from "@/components/theme-provider";
import { mont } from "@/lib/font";
import Floating from "./floating";
import LoadingLogo from "@/components/framer/logo-loading";

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
      <body className={mont.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <HeadBanner />
          {children}
          <Floating />
          <LoadingLogo />
        </ThemeProvider>
      </body>
    </html>
  );
}
