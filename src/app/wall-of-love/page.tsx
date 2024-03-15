import Reveal from "@/components/framer/reveal";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "Wall of Love | 30DaysCoding",
  description:
    "A page dedicated for our love and support for our work and what everything we achieved of till date.",
  openGraph: {
    images: "/mern.jpg",
  },
};

function TestimonyImages({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="max-w-[23.75rem] w-full p-6 bg-second rounded-lg lg:max-h-[23.75rem] relative grid gap-4">
      <Image
        src={imageUrl}
        alt="instrutor"
        width={600}
        height={600}
        className="object-cover h-full w-full overflow-hidden"
      />
    </div>
  );
}

const reviews = [
  "2023-09-28_17-23-43_UTC.jpg",
  "2023-10-03_19-57-09_UTC.jpg",
  "2023-10-04_19-58-59_UTC.jpg",
  "2023-10-09_23-43-10_UTC.jpg",
  "2023-10-10_10-12-14_UTC.jpg",
  "2023-10-16_21-27-12_UTC.jpg",
  "2023-10-21_00-55-04_UTC.jpg",
  "2023-10-24_23-13-12_UTC.jpg",
  "2023-10-25_23-44-12_UTC.jpg",
  "2023-10-31_04-40-15_UTC.jpg",
  "2023-10-31_07-43-06_UTC.jpg",
  "2023-11-02_16-42-12_UTC.jpg",
  "2023-11-25_00-21-17_UTC.jpg",
  "2023-12-15_03-31-20_UTC.jpg",
  "2023-12-31_05-35-57_UTC.jpg",
  "2024-01-21_05-47-46_UTC.jpg",
  "2024-01-24_18-06-30_UTC.jpg",
  "2024-01-27_00-11-56_UTC.jpg",
  "2024-01-28_02-24-41_UTC.jpg",
  "2024-02-07_20-30-15_UTC.jpg",
  "2024-02-07_20-31-09_UTC.jpg",
  "2024-02-07_20-33-44_UTC.jpg",
  "2024-02-07_20-34-04_UTC.jpg",
  "2024-02-14_08-59-57_UTC.jpg",
  "2024-02-14_09-03-43_UTC.jpg",
  "2024-02-14_09-04-14_UTC.jpg",
  "2024-02-14_23-09-14_UTC.jpg",
  "2024-02-15_08-23-36_UTC.jpg",
  "2024-02-17_17-33-22_UTC.jpg",
  "2024-02-20_16-00-08_UTC.jpg",
  "2024-02-21_18-30-28_UTC.jpg",
  "2024-02-23_11-29-33_UTC.jpg",
  "2024-02-26_02-13-30_UTC.jpg",
  "2024-02-27_02-27-27_UTC.jpg",
  "2024-02-27_17-37-17_UTC.jpg",
  "2024-03-03_17-16-12_UTC.jpg",
  "2024-03-07_00-07-32_UTC.jpg",
  "2024-03-07_20-28-53_UTC.jpg",
  "2024-03-07_20-29-34_UTC.jpg",
  "2024-03-08_00-19-11_UTC.jpg",
  "2024-03-08_08-14-40_UTC.jpg",
  "2024-03-08_08-15-31_UTC.jpg",
  "2024-03-09_00-21-30_UTC.jpg",
  "2024-03-09_22-03-20_UTC.jpg",
  "2024-03-09_22-07-08_UTC.jpg",
  "2024-03-09_22-11-48_UTC.jpg",
  "2024-03-10_06-47-05_UTC.jpg",
  "2024-03-10_07-04-06_UTC.jpg",
  "2024-03-10_20-06-15_UTC.jpg",
  "2024-03-10_21-39-49_UTC.jpg",
  "2024-03-11_02-25-42_UTC.jpg",
  "2024-03-11_04-46-51_UTC.jpg",
  "2024-03-11_05-50-01_UTC.jpg",
  "2024-03-11_07-05-20_UTC.jpg",
  "2024-03-11_07-07-56_UTC.jpg",
  "2024-03-11_10-16-26_UTC.jpg",
  "2024-03-11_21-39-22_UTC.jpg",
  "2024-03-12_00-19-28_UTC.jpg",
  "2024-03-12_01-44-50_UTC.jpg",
  "2024-03-12_01-45-06_UTC.jpg",
  "2024-03-12_08-09-41_UTC.jpg",
  "2024-03-13_06-23-08_UTC.jpg",
  "2024-03-13_10-22-10_UTC.jpg",
  "2024-03-14_22-35-00_UTC.jpg",
  "2024-03-14_22-35-56_UTC.jpg",
  "2024-03-15_17-03-38_UTC.jpg",
];

export default function Testimonial() {
  return (
    <main
      className={`font-inter bg-bg min-h-svh text-white p-[3.75rem_0_6.5rem] overflow-hidden`}
    >
      <div className="mx-auto w-full max-w-[90rem] max-phone:p-[0_0_3.5rem] p-[0_min(6rem,_6.66%)] flex flex-col gap-20">
        <div className="grid place-items-center gap-8">
          <Reveal>
            <span className="flex items-center gap-4 relative">
              <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
              <h2 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
                Wall of Love
              </h2>
              <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
            </span>
          </Reveal>
          {/* <Reveal> */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-center p-3">
            {reviews.map((e, i) => (
              <Reveal key={i}>
                <TestimonyImages imageUrl={`/social/${e}`} />
              </Reveal>
            ))}
          </div>
          {/* </Reveal> */}
        </div>
      </div>
    </main>
  );
}
