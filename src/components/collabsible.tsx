import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Video } from "lucide-react";

function SubCourse({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex transition-all dark:hover:bg-indigo-900 hover:bg-indigo-100 gap-3 p-4 items-start text-foreground/70">
      {children}
      <section className="grid grid-cols-1 gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{description}</p>
      </section>
    </div>
  );
}

export function Collapsible({ title }: { title: string }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="dark:bg-indigo-900 p-3">
          {title}
        </AccordionTrigger>
        <AccordionContent className="dark:bg-indigo-900/50 bg-indigo-100/50">
          <SubCourse
            title={"Important Guildlines - Namaste React"}
            description={
              "Some important Guidelines, before you start with your React journey with Namaste React."
            }
          >
            <FileText className="h-6 w-6 shrink-0" />
          </SubCourse>

          <SubCourse
            title={"Episode 01 - Init"}
            description={
              "Some important Guidelines, before you start with your React journey with Namaste React."
            }
          >
            <Video className="h-6 w-6 shrink-0" />
          </SubCourse>

          <SubCourse
            title={"Episode 02 - Second"}
            description={
              "Some important Guidelines, before you start with your React journey with Namaste React."
            }
          >
            <Video className="h-6 w-6 shrink-0" />
          </SubCourse>

          <SubCourse
            title={"Episode 02 - Second"}
            description={
              "Some important Guidelines, before you start with your React journey with Namaste React."
            }
          >
            <Video className="h-6 w-6 shrink-0" />
          </SubCourse>

          <SubCourse
            title={"Episode 02 - Second"}
            description={
              "Some important Guidelines, before you start with your React journey with Namaste React."
            }
          >
            <Video className="h-6 w-6 shrink-0" />
          </SubCourse>

          <SubCourse
            title={"Episode 02 - Second"}
            description={
              "Some important Guidelines, before you start with your React journey with Namaste React."
            }
          >
            <Video className="h-6 w-6 shrink-0" />
          </SubCourse>

          <SubCourse
            title={"Episode 02 - Second"}
            description={
              "Some important Guidelines, before you start with your React journey with Namaste React."
            }
          >
            <Video className="h-6 w-6 shrink-0" />
          </SubCourse>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
