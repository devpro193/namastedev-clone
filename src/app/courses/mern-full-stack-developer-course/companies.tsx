import { satisfy } from "@/lib/font";
import Image from "next/image";

export default function Companies() {
  return (
    <div className={`grid grid-cols-1 gap-3`}>
      <span className="flex gap-4 lg:justify-center items-center">
        <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
        <h2 className={`${satisfy.className} text-4xl`}>
          Top Companies Where Our Students Work
        </h2>
        <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
        {/* <hr className="h-1 max-lg:w-full w-20 rounded bg-primary/40" /> */}
      </span>

      <div className="py-12 flex gap-3 overflow-hidden">
        <div className="flex space-x-16 animate-loop-scroll">
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
          <Image alt="company" src={"/company1.png"} width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
