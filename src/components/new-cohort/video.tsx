import Reveal from "../framer/reveal";

export default function Video({
  title,
  desc,
  youtubeId,
}: {
  title: string;
  desc: string;
  youtubeId: string;
}) {
  return (
    <div className="m-auto flex max-lg:flex-col items-start justify-between p-10 lg:p-20 gap-10 max-w-[75rem]">
      <div className="lg:w-2/4 grid gap-5 shrink">
        <Reveal>
          <span className="text-prime font-semibold uppercase">
            In 3-Months
          </span>
        </Reveal>
        <Reveal>
          <span className="text-4xl font-bold">{title}</span>
        </Reveal>
        <Reveal>
          <p className="text-lg max-tab:text-[1.05rem]">{desc}</p>
        </Reveal>
      </div>
      <div className="lg:w-2/4 w-full shrink-0 flex-1">
        <Reveal>
          <div
            className={`relative overflow-hidden max-md:min-h-60 max-lg:min-h-80 lg:min-h-64 bg-background/20 rounded-md shadow-inner transition-all duration-500`}
          >
            <iframe
              className="h-full w-full left-0 top-0 absolute"
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
