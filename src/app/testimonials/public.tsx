import Reveal from "@/components/framer/reveal";
import Image from "next/image";

function TestimonyImages({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="max-w-[23.75rem] w-full p-6 bg-second rounded-lg lg:min-h-72 relative grid gap-4">
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
    "https://i.ibb.co/vhX2GJ4/linkedin1.jpg",
    "https://i.ibb.co/WcCx9hn/linkedin2.jpg",
    "https://i.ibb.co/zXGgPxS/linkedin3.jpg",
    "https://i.ibb.co/Bj0F1BS/linkedin4.jpg",
    "https://i.ibb.co/3dgLfHg/linkedin5.jpg",
    "https://i.ibb.co/qxYYvSh/linkedin6.jpg",
    "https://i.ibb.co/3R61d67/linkedin7.jpg",
    "https://i.ibb.co/Rz2MzV2/linkedin8.jpg",
    "https://i.ibb.co/YWNZDpN/linkedin9.jpg",
    "https://i.ibb.co/cc8L54K/linkedin10.jpg",
    "https://i.ibb.co/C8Xtq0G/linkedin11.jpg",
    "https://i.ibb.co/6HnQy38/linkedin12.jpg",
    "https://i.ibb.co/YymwwZ9/linkedin13.jpg",
    "https://i.ibb.co/1btWRkn/linkedin14.jpg",
    "https://i.ibb.co/x3cMF2B/linkedin15.jpg",
    "https://i.ibb.co/pv99N4L/linkedin16.jpg",
    "https://i.ibb.co/9pydRcw/linkedin17.jpg",
    "https://i.ibb.co/XYp5Dbm/linkedin18.jpg",
    "https://i.ibb.co/9crgVhD/linkedin19.jpg",
  ];
  return (
    <div className="grid place-items-center gap-8">
      <Reveal>
        <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
          More people are building in public with us
        </h1>
      </Reveal>
      <div className="relative flex flex-wrap gap-8 justify-center p-3">
        {images.map((e, i) => (
          <Reveal key={i}>
            <TestimonyImages imageUrl={e} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
