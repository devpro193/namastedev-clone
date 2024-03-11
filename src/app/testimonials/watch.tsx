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

export default function Watch() {
  const images = [
    "review1.jpeg",
    "review2.jpeg",
    "review3.jpeg",
    "review4.jpeg",
    "review5.jpeg",
  ];
  return (
    <div className="grid place-items-center gap-8">
      <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
        Highlights
      </h1>
      <div className="relative flex flex-wrap gap-8 justify-center">
        {images.map((e, i) => (
          <TestimonyImages key={i} imageUrl={`/testimonials/${e}`} />
        ))}
      </div>
      <button className="border rounded-md border-white px-4 py-2 font-semibold text-base">
        Show more
      </button>
    </div>
  );
}
