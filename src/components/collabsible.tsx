import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookmarkIcon,
  CodeSquare,
  DownloadCloud,
  FileText,
  Laptop2,
  Link2,
  TimerIcon,
  Video,
} from "lucide-react";

const icons = {
  video: <Video className="h-6 w-6 shrink-0" />,
  file: <FileText className="h-6 w-6 shrink-0" />,
  cloud: <DownloadCloud className="h-6 w-6 shrink-0" />,
  code: <CodeSquare className="h-6 w-6 shrink-0" />,
  link: <Link2 className="h-6 w-6 shrink-0" />,
};

export function SubCourse({
  title,
  time,
  type,
}: {
  title: string;
  time?: string;
  type: "video" | "file" | "cloud" | "code" | "link";
}) {
  return (
    <div className="flex lg:items-center max-lg:flex-col justify-between transition-all dark:hover:bg-indigo-900 hover:bg-indigo-100 gap-3 p-4 text-foreground/70 border-t">
      <div className="flex items-start gap-2">
        {icons[type ?? "video"]}{" "}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {time && (
        <section className="flex gap-2 items-end">
          <span className="flex items-end font-semibold gap-1.5 lg:mr-10 max-lg:px-2 max-lg:py-1 max-lg:bg-slate-300/30 rounded-lg">
            <TimerIcon className="h-5 w-5" />
            {time}
          </span>
        </section>
      )}
    </div>
  );
}

export function Collapsible({
  title,
  session = 0,
  time,
  children,
}: {
  title: string;
  session?: number;
  time?: string;
  children: React.ReactNode;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="dark:bg-indigo-900 lg:hover:opacity-70 px-3 py-5 border-b">
          <div className="flex items-center gap-2">
            <BookmarkIcon className="h-8 w-8 stroke-1" />
            <div className="flex flex-col items-start justify-start gap-1">
              <span className="font-semibold text-lg text-start">{title}</span>
              <div className="flex gap-2 font-semibold text-foreground/70 text-sm items-center">
                <span className="flex items-center gap-1.5">
                  <Laptop2 className="h-5 w-5" />
                  {session}
                </span>
                {time && (
                  <>
                    <hr className="rotate-90 w-3 border border-foreground/70" />
                    <span className="flex items-center gap-1.5">
                      <TimerIcon className="h-5 w-5" />
                      {time}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="dark:bg-indigo-900/50 bg-indigo-100/50">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
