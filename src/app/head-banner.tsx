import Image from "next/image";

export default function HeadBanner() {
  return (
    <div className="flex p-3 bg-headBanner">
      <Image
        src={"/discount.webp"}
        alt="discount-pic"
        width={200}
        height={200}
      />
    </div>
  );
}
