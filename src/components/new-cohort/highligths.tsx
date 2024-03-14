import Reveal from "@/components/framer/reveal";
import Image from "next/image";
import Link from "next/link";

function TestimonyImages({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-[23.75rem] p-6 bg-second rounded-lg min-h-72 relative grid gap-4 max-phone:scale-90 transition-all">
      <Image
        src={imageUrl}
        alt="instrutor"
        width={600}
        height={600}
        className="object-cover h-full w-full"
      />
    </div>
  );
}

export default function Highlights() {
  const images = [
    "review1.jpeg",
    "review2.jpeg",
    "review3.jpeg",
    "review4.jpeg",
    "review5.jpeg",
  ];
  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto py-8">
      <Reveal>
        <span className="flex items-center gap-4 relative">
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
          <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
            Highlights
          </h2>
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
        </span>
      </Reveal>
      <div className="relative flex flex-wrap items-start justify-center phone:gap-8 pt-5 lg:pt-10">
        {images.map((e, i) => (
          <Reveal key={i}>
            <TestimonyImages imageUrl={`/testimonials/${e}`} />
          </Reveal>
        ))}
        <div className="absolute bottom-0 h-20 w-full bg-gradient-to-b z-10 from-transparent from-0% via-50% via-transparent to-50% blur-md to-bg/70 translate-y-6"></div>
      </div>

      <Reveal>
        <button
          className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
        >
          <Link className="text-sm" href={"/testimonials"}>
            Show More Highlights
          </Link>
        </button>
      </Reveal>
    </div>
  );
}
