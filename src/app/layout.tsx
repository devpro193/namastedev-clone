import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { inter, localJakarta, mont, mulish, space_mono } from "@/lib/font";

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
      <body
        className={`${mont.variable} ${localJakarta.variable} ${space_mono.variable} ${mulish.variable} ${inter.variable} font-mont`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
