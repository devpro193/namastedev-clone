import HeadBanner from "./head-banner";
import Floating from "./floating";
import LoadingLogo from "@/components/framer/logo-loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <LoadingLogo />
      <Floating />
    </div>
  );
}
