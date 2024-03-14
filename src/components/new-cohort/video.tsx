import Reveal from "../framer/reveal";

export default function Video({ youtubeId }: { youtubeId: string }) {
  return (
    <div className="m-auto flex max-lg:flex-col items-start justify-between p-10 lg:p-20 max-lg:gap-10 gap-6 max-w-[75rem]">
      <div className="lg:w-3/5 grid gap-5 shrink">
        <Reveal>
          <span className="text-prime font-semibold uppercase">In 30-Days</span>
        </Reveal>
        <Reveal>
          <span className="text-4xl font-bold">
            Build fullstack engineering skills with confidence
          </span>
        </Reveal>
        <Reveal>
          <p>
            Achieve mastery in fullstack engineering through practical projects
            and expert feedback from industry professionals in this
            comprehensive program.
          </p>
        </Reveal>
      </div>
      <div className="lg:w-2/5 w-full shrink-0 flex-1">
        <Reveal>
          <div
            className={`relative overflow-hidden min-h-64 bg-background/20 rounded-md shadow-inner transition-all duration-500`}
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
