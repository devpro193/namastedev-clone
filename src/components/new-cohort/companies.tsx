import Reveal from "@/components/framer/reveal";
import Image from "next/image";

let companyImg = [
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/64197485c9609eca1327200a_LinkedIn%20svg.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/6419f7a1a05ce52679a5d78f_Group%2048097659.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/64148a3216f5ef8433b541a2_Meta_Platforms_Inc._logo%203.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641485680a2bea5e2dbcd28b_Razorpay%20svg%20(1).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/6419f7586297a7156ba925d0_Microsoft%20svg%20(1).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641c036bac9e365468c36d55_Frame%201430102672%20(2).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/64148aaaab4ce5338ca7d7e7_Swiggy.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfcf494d12bcd88f4a152_Frame%201430102671%20(4).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641484a419171017f6b54513_Google%20svg%20(1).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfc2ac17bb1bfb438bd8f_Frame%201430102671%20(1).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/64197485c9609eca1327200a_LinkedIn%20svg.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/6419f7a1a05ce52679a5d78f_Group%2048097659.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/64148a3216f5ef8433b541a2_Meta_Platforms_Inc._logo%203.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641485680a2bea5e2dbcd28b_Razorpay%20svg%20(1).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/6419f7586297a7156ba925d0_Microsoft%20svg%20(1).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641c036bac9e365468c36d55_Frame%201430102672%20(2).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/64148aaaab4ce5338ca7d7e7_Swiggy.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfcf494d12bcd88f4a152_Frame%201430102671%20(4).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641484a419171017f6b54513_Google%20svg%20(1).svg",
];

let companyImg2 = [
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641c0497c240b1be1b31ec11_Frame%201430102672%20(3).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/64149378ab4ce51422a87095_NVIDIA%20svg%20(3).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf7f702e8cc4d3498b5b4_Walmart%20svg.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf40774e09707a8fc2ef5_Expedia%20svg.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf3c3ab258130428e0d63_Licious.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf343523aa2c8804e16fb_hotstar.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfbe2683a5868a8b058d1_Frame%201430102671.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf2e30d93075fc53d83c3_Ogilvy%20svg.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfdb90d930737f73e2daa_Frame%201430102672%20(1).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfca3200c82f7563e4df6_Frame%201430102671%20(3).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641c0497c240b1be1b31ec11_Frame%201430102672%20(3).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/64149378ab4ce51422a87095_NVIDIA%20svg%20(3).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf7f702e8cc4d3498b5b4_Walmart%20svg.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf40774e09707a8fc2ef5_Expedia%20svg.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf3c3ab258130428e0d63_Licious.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf343523aa2c8804e16fb_hotstar.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfbe2683a5868a8b058d1_Frame%201430102671.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf2e30d93075fc53d83c3_Ogilvy%20svg.svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfdb90d930737f73e2daa_Frame%201430102672%20(1).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfca3200c82f7563e4df6_Frame%201430102671%20(3).svg",
  "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfc2ac17bb1bfb438bd8f_Frame%201430102671%20(1).svg",
];

function NewImage({ src = "/company1.png" }: { src?: string }) {
  return (
    <Image
      className="invert opacity-60 dark:invert-0"
      alt="company"
      src={src}
      width={100}
      height={100}
    />
  );
}

export default function Companies() {
  return (
    <div className={"grid grid-cols-1 gap-3 py-10 max-w-[90rem] m-auto"}>
      <Reveal>
        <span className="flex items-center justify-center gap-4 relative">
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
          <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
            Get Hired Here
          </h2>
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
        </span>
      </Reveal>

      <div className="py-12 relative flex flex-col gap-7 overflow-hidden bg-gradient-to-tr">
        <Reveal>
          <div className="relative flex space-x-16 animate-loop-scroll">
            {companyImg.map((e, i) => (
              <NewImage key={i} src={e} />
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="flex space-x-16 animate-loop-scroll-reverse">
            {companyImg2.map((e, i) => (
              <NewImage key={i} src={e} />
            ))}
          </div>
        </Reveal>
        <div className="h-full w-full absolute z-10 bg-gradient-to-r dark:from-bg from-background max-lg:from-0% from-5% dark:via-bg/10 via-background/10 via-50% dark:to-bg to-background max-lg:to-100% to-95%"></div>
      </div>
    </div>
  );
}
