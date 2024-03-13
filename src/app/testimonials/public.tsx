import Reveal from "@/components/framer/reveal";
import Image from "next/image";

function TestimonyImages({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-[23.75rem] p-6 bg-second rounded-lg min-h-72 relative grid gap-4">
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

export default function Public() {
  const images = [
    "linkedin1.PNG",
    "linkedin2.PNG",
    "linkedin3.PNG",
    "linkedin4.PNG",
    "linkedin5.PNG",
    "linkedin6.PNG",
    "linkedin7.PNG",
    "linkedin8.PNG",
    "linkedin9.PNG",
    "linkedin10.PNG",
    "linkedin11.PNG",
    "linkedin12.PNG",
    "linkedin13.PNG",
    "linkedin14.PNG",
    "linkedin15.PNG",
  ];
  return (
    <div className="grid place-items-center gap-8">
      <Reveal>
        <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
          More people are building in public with us
        </h1>
      </Reveal>
      <div className="relative flex flex-wrap gap-8 justify-center">
        {images.map((e, i) => (
          <Reveal>
            <TestimonyImages key={i} imageUrl={`/testimonials/${e}`} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}