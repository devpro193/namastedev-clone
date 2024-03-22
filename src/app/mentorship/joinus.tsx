import Reveal from "@/components/framer/reveal";

export default function JoinUs() {
  let program = [
    {
      title: "If you're targeting:",
      topics: [
        "Frontend Developer",
        "Backend Developer",
        "FullStack Developer",
        "Software Engineer",
      ],
    },
    {
      title: "If you're a:",
      topics: ["🌞 Fresher", "🚀 Working Professional"],
    },
    {
      title: "And Targeting Companies Like:",
      topics: [
        " 💪MAANG",
        " 📦 Product Based",
        "✊ Service Based",
        "🦄Startups",
      ],
    },
  ];

  return (
    <div className="m-auto grid grid-cols-1 place-items-center px-10 lg:px-20 max-w-[75rem]">
      <div className="flex flex-col items-start gap-6 rounded-xl border border-prime bg-second p-5 lg:px-8 lg:py-7">
        <div className="flex flex-col items-start gap-3 self-stretch">
          <Reveal>
            <span className="self-stretch text-xl font-semibold leading-[1.875rem]">
              Who can join my Long Term Mentorship Program?
            </span>
          </Reveal>
          <Reveal>
            <p className="self-stretch text-sm leading-[1.375rem] text-muted-foreground">
              I expect mentees to be motivated, dedicated, and open to learning.
              They should actively engage in lessons, ask questions, and apply
              feedback to their projects.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col items-start gap-6 self-stretch rounded-xl border-t bg-prime/40 border-prime/70 divide-y-2 divide-prime lg:border px-4 py-6">
          {program.map(({ title, topics }, i) => (
            <div
              key={i}
              className="flex flex-col items-start justify-between w-full gap-4 self-stretch lg:flex-row pt-4"
            >
              <Reveal>
                <span className="pt-5 text-sm font-semibold leading-5 lg:pb-0 lg:pt-2">
                  {title}
                </span>
              </Reveal>
              <section className="flex flex-wrap justify-start gap-3 lg:justify-end">
                {topics.map((e, i) => (
                  <Reveal key={i}>
                    <button className="flex items-center gap-2 py-[10px] px-3 rounded-md border border-prime bg-second text-muted-foreground text-[12px] font-medium leading-[18px] whitespace-nowrap">
                      {e}
                    </button>
                  </Reveal>
                ))}
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
