import Reveal from "@/components/framer/reveal";

export default function Mentorship() {
  let mentorsipPath = [
    {
      title: "Stage 1: Planning your preparation",
      topics: [
        "Help in Goal Setting",
        "Sharing Roadmap",
        "Sharing Important Resourse",
        "Regular Check-in",
      ],
    },
    {
      title: "Stage 2: Getting your up to speed in your technical skills",
      topics: ["DSA", "Frontend Architecture", "Teamwork", "HTML"],
    },
    {
      title: "Stage 3: Practicing and improving your interview skills",
      topics: [
        "Provide Mock Interview Practice",
        "Help in Answering Structure",
      ],
    },
    {
      title: "Stage 4: Getting your profile optimized for visibility",
      topics: ["Resume Review"],
    },
    {
      title: "Stage 5: Applying for jobs and getting the correct offer",
      topics: ["Job Application Strategy"],
    },
  ];
  return (
    <div className="m-auto grid grid-cols-1 place-items-center px-10 lg:px-20 max-w-[75rem]">
      <div className="relative flex flex-col items-start gap-5 rounded-xl border border-[#e4e7ec] dark:border-prime bg-white dark:bg-second p-5 lg:p-8">
        <div className="flex flex-col items-start gap-3 self-stretch">
          <Reveal>
            <span className="self-stretch text-xl font-semibold leading-[30px]">
              1:1 Long Term Mentorship Program Path
            </span>
          </Reveal>
          <Reveal>
            <p className="self-stretch text-sm leading-[22px] text-muted-foreground">
              You might work on ALL or a few selected areas based on your
              current preparation level. (Don't worry if you are not sure. Your
              mentor will personalize everything for you. 1 on 1 personalized
              mentorship for a reason)
            </p>
          </Reveal>
        </div>

        <div className="relative ml-10 flex w-[calc(100%-40px)] flex-col items-start gap-5 divide-y divide-[#E4E7EC] dark:divide-prime pb-5">
          {mentorsipPath.map(({ title, topics }, i) => (
            <Reveal key={i}>
              <div className="flex w-full items-start gap-3 pt-5 lg:gap-4">
                <section className=" z-10 -ml-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-prime p-1">
                  <svg
                    width="21"
                    height="21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.332 6.667c0-.934 0-1.4.182-1.757.16-.313.414-.568.728-.728C3.599 4 4.065 4 4.999 4h.333c1.867 0 2.8 0 3.513.363.628.32 1.137.83 1.457 1.457.363.713.363 1.647.363 3.513v8H5c-.934 0-1.4 0-1.757-.181a1.667 1.667 0 0 1-.728-.729c-.182-.356-.182-.823-.182-1.756v-8ZM18.999 6.667c0-.934 0-1.4-.182-1.757a1.666 1.666 0 0 0-.728-.728C17.732 4 17.266 4 16.332 4h-.333c-1.867 0-2.8 0-3.514.363-.627.32-1.137.83-1.456 1.457-.364.713-.364 1.647-.364 3.513v8h5.667c.933 0 1.4 0 1.757-.181.313-.16.568-.415.728-.729.182-.356.182-.823.182-1.756v-8Z"
                      fill="#FEB273"
                    ></path>
                    <path
                      d="M10.665 17.334H5c-.934 0-1.4 0-1.757-.182a1.667 1.667 0 0 1-.728-.729c-.182-.356-.182-.823-.182-1.756v-8c0-.934 0-1.4.182-1.757.16-.313.414-.568.728-.728C3.599 4 4.065 4 4.999 4h.333c1.867 0 2.8 0 3.513.363.628.32 1.137.83 1.457 1.457.363.713.363 1.647.363 3.513m0 8v-8m0 8h5.667c.933 0 1.4 0 1.757-.181.313-.16.568-.415.728-.729.182-.356.182-.823.182-1.756v-8c0-.934 0-1.4-.182-1.757a1.666 1.666 0 0 0-.728-.728C17.732 4 17.266 4 16.332 4h-.333c-1.867 0-2.8 0-3.514.363-.627.32-1.137.83-1.456 1.457-.364.713-.364 1.647-.364 3.513"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </section>

                <div className="flex w-full flex-col items-start gap-4">
                  <p className="text-sm font-semibold leading-5 text-muted-foreground">
                    {title}
                  </p>

                  <section className="flex flex-wrap items-start gap-3 self-stretch">
                    {topics.map((e, i) => (
                      <button
                        key={i}
                        className="flex items-center justify-center gap-2 rounded-md border px-3 py-2 duration-200 border-[#e4e7ec] dark:border-prime dark:bg-second bg-white box-border"
                      >
                        {e}
                      </button>
                    ))}
                  </section>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="absolute -left-[26px] top-0 h-full w-[1px] bg-[#edeef2]"></div>
        </div>
      </div>
    </div>
  );
}
