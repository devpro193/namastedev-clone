import Reveal from "@/components/framer/reveal";
import HoverInfo from "@/components/hover-info";
import Image from "next/image";

type Career = {
  latest: string;
  joined: string;
  duration: string;
  designation: string;
  company: string;
  imgSrc?: string;
};

export default function Career({ details }: { details: Career[] }) {
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-second px-5 lg:px-8 w-full">
      <Reveal>
        <span className="self-stretch text-xl font-semibold leading-[30px] lg:pb-6">
          Career Journey
        </span>
      </Reveal>

      <div>
        {details.map(
          ({ joined, latest, duration, designation, imgSrc, company }, i) => (
            <Reveal key={i}>
              <div className="flex flex-col  border-b border-prime/70 pb-4 pt-6 lg:flex-row lg:border-t lg:pb-0 lg:pt-0">
                <section className="relative flex min-w-[100px] items-center border-prime/70 text-base sm:min-w-[120px] md:py-5 lg:justify-end lg:border-r lg:py-3 xl:min-w-[160px]">
                  <div className="absolute bottom-[42%] right-[-6px] hidden h-[12px] w-[12px] rounded-full border-head bg-prime/70 lg:block" />
                  <div className="hidden items-end pr-6 lg:flex lg:flex-col">
                    <span className="whitespace-nowrap text-right ">
                      {latest}
                    </span>
                    <span className="whitespace-nowrap text-right text-[13px]">
                      {joined}
                    </span>
                    {/* <span className="whitespace-nowrap text-right text-[10px] font-semibold leading-[15px] text-muted-foreground">
                      {duration}
                    </span> */}
                  </div>
                </section>

                <div className="flex flex-col justify-center lg:pl-6 ">
                  <p className="line-clamp-1 self-stretch font-medium leading-6">
                    {designation}
                  </p>
                  <section className="flex gap-2 items-center py-1">
                    {imgSrc && (
                      <HoverInfo info={company}>
                        <Image
                          src={imgSrc}
                          width={25}
                          height={25}
                          alt={`${company}'s logo`}
                          className="rounded-md"
                        />
                      </HoverInfo>
                    )}
                    <span className="text-sm leading-5 text-muted-foreground">
                      {company}
                    </span>
                  </section>
                </div>

                <section className="flex items-end gap-2 pr-6 lg:hidden lg:flex-col">
                  <span className="whitespace-nowrap text-right text-[13px]">
                    {joined}
                  </span>
                  -
                  <span className="whitespace-nowrap text-right text-[13px]">
                    {latest}
                  </span>
                  {/* <span className="whitespace-nowrap text-right text-[10px] pb-0.5 pl-1 font-semibold leading-[15px] text-muted-foreground">
                    ( {duration} )
                  </span> */}
                </section>
              </div>
            </Reveal>
          )
        )}
      </div>
    </div>
  );
}
