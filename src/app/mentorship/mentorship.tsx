import Reveal from "@/components/framer/reveal";

export default function Mentorship() {
  let mentorsipPath = [
    {
      title: "Stage 1: Planning your preparation",
      topics: [
        "Help in Goal Setting",
        "Sharing Roadmap",
        "Sharing Important Resourses",
        "Regular Check-in",
      ],
      svg: (
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
      ),
    },
    {
      title: "Stage 2: Getting your up to speed in your technical skills",
      topics: [
        "DSA",
        "Front-end Architecture",
        "Teamwork",
        "Next JS",
        "React JS",
        "Git",
        "UI",
        "User Experience",
        "JavaScript",
        "Problem Solving",
        "REST",
        "APIs",
        "Servers",
        "DSA",
        "Redis",
        "PubSub",
        "Elastic Search",
      ],
      svg: (
        <svg
          width="21"
          height="21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.999 11.917a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Z"
            fill="#6CE9A6"
          ></path>
          <path
            d="M13.999 4.833 15.665 6.5 19 3.167m0 7.5V15c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.093c-.535.272-1.235.272-2.635.272H6.332c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.092-1.093C2.332 17.1 2.332 16.4 2.332 15V6.333c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092c.535-.273 1.235-.273 2.635-.273h4.333M2.453 17.272a3.335 3.335 0 0 1 3.212-2.439h5.833c.775 0 1.162 0 1.484.064a3.333 3.333 0 0 1 2.62 2.62c.063.321.063.709.063 1.483M12.332 8.583a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      title: "Stage 3: Getting Up to Speed",
      topics: [
        "Provide Mock Interview Practice",
        "Help in Answering Structure",
      ],
      svg: (
        <svg
          width="21"
          height="21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.999 18.167c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093c-.535-.272-1.235-.272-2.635-.272H6.332c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.092 1.093c-.273.535-.273 1.235-.273 2.635v7c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.092c.535.273 1.235.273 2.635.273h8.667Z"
            fill="#D6BBFB"
          ></path>
          <path
            d="m12.332 15.25 2.083-2.083-2.083-2.084M8.999 11.083l-2.084 2.084L9 15.25"
            fill="#D6BBFB"
          ></path>
          <path
            d="M18.999 8.167H2.332m10 7.083 2.083-2.083-2.083-2.084m-3.333 0-2.084 2.084L9 15.25M2.332 7.167v7c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.092c.535.273 1.235.273 2.635.273h8.667c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093c-.535-.272-1.235-.272-2.635-.272H6.332c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.092 1.093c-.273.535-.273 1.235-.273 2.635Z"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      title: "Stage 4: Getting your profile optimized for visibility",
      topics: ["Resume Review"],
      svg: (
        <svg
          width="21"
          height="21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.999 10.667a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM10.57 15.582c.036-.123.053-.185.08-.243a.833.833 0 0 1 .086-.146c.037-.05.083-.096.174-.187l5.38-5.38a1.473 1.473 0 1 1 2.084 2.083l-5.381 5.38c-.091.091-.136.137-.188.174a.833.833 0 0 1-.145.086c-.058.026-.12.044-.244.08l-2.584.738.738-2.585Z"
            fill="#FEC84B"
          ></path>
          <path
            d="M8.165 13.583h-1.25c-1.163 0-1.744 0-2.217.144a3.334 3.334 0 0 0-2.222 2.222c-.144.473-.144 1.055-.144 2.218m10.417-11.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Zm-2.917 11.25 2.584-.739c.124-.035.186-.053.244-.08a.833.833 0 0 0 .145-.085c.052-.037.097-.083.188-.174l5.38-5.38a1.473 1.473 0 1 0-2.083-2.084l-5.38 5.38c-.091.092-.137.137-.174.188a.833.833 0 0 0-.086.146c-.027.058-.044.12-.08.243l-.738 2.585Z"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      title: "Stage 5: Applying for jobs and getting the right offer",
      topics: ["Job Application Strategy"],
      svg: (
        <svg
          width="21"
          height="21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.332 9.167c0-.934 0-1.4.182-1.757.16-.314.414-.568.728-.728.357-.182.823-.182 1.757-.182h11.333c.933 0 1.4 0 1.757.182.313.16.568.414.728.728.182.357.182.823.182 1.757V15.5c0 .933 0 1.4-.182 1.757-.16.313-.415.568-.728.728-.357.182-.823.182-1.757.182H4.999c-.934 0-1.4 0-1.757-.182a1.667 1.667 0 0 1-.728-.728c-.182-.357-.182-.824-.182-1.757V9.167Z"
            fill="#7CD4FD"
          ></path>
          <path
            d="M7.332 18.167V6.5c0-.775 0-1.162.085-1.48a2.5 2.5 0 0 1 1.768-1.768c.318-.085.705-.085 1.48-.085s1.163 0 1.48.085a2.5 2.5 0 0 1 1.769 1.768c.085.318.085.705.085 1.48v11.667m-9 0h11.333c.933 0 1.4 0 1.757-.182.313-.16.568-.415.728-.728.182-.357.182-.824.182-1.757V9.167c0-.934 0-1.4-.182-1.757a1.666 1.666 0 0 0-.728-.728c-.357-.182-.823-.182-1.757-.182H4.999c-.934 0-1.4 0-1.757.182-.314.16-.569.414-.728.728-.182.357-.182.823-.182 1.757V15.5c0 .933 0 1.4.182 1.757.16.313.414.568.728.728.357.182.823.182 1.757.182Z"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
    },
  ];
  return (
    <div className="m-auto grid grid-cols-1 place-items-center px-10 lg:px-20 max-w-[75rem]">
      <div className="relative flex flex-col items-start gap-5 rounded-xl border border-prime bg-second p-5 lg:p-8">
        <div className="flex flex-col items-start gap-3 self-stretch">
          <Reveal>
            <span className="self-stretch text-xl font-semibold leading-[30px]">
              One-on-One Long Term Mentorship Program Path
            </span>
          </Reveal>
          <Reveal>
            <p className="self-stretch text-sm leading-[22px] text-muted-foreground">
              You might work on ALL or a few selected areas based on your
              current preparation level. (Don&apos;t worry if you are not sure.
              Your mentor will personalize everything for you. 1 on 1
              personalized mentorship for a reason)
            </p>
          </Reveal>
        </div>

        <div className="relative ml-10 flex w-[calc(100%-40px)] flex-col items-start gap-5 divide-y divide-prime pb-5">
          {mentorsipPath.map(({ title, topics, svg }, i) => (
            <Reveal key={i}>
              <div className="flex w-full items-start gap-3 pt-5 lg:gap-4">
                <section className=" z-10 -ml-10 flex items-center justify-center rounded-full bg-prime p-1">
                  {svg}
                </section>

                <div className="flex w-full flex-col items-start gap-4">
                  <p className="text-sm font-semibold leading-5 text-muted-foreground">
                    {title}
                  </p>

                  <section className="flex flex-wrap items-start gap-3 self-stretch">
                    {topics.map((e, i) => (
                      <button
                        key={i}
                        className="flex items-center justify-center gap-2 rounded-md border px-3 py-2 duration-200 border-prime bg-second box-border"
                      >
                        {e}
                      </button>
                    ))}
                  </section>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="absolute -left-[26px] top-0 h-full w-px bg-prime/70"></div>
        </div>
      </div>
    </div>
  );
}
