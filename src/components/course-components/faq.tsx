import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/framer/reveal";

function Collapsible({ title, answer }: { title: string; answer: string }) {
  return (
    <Reveal>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="dark:bg-background rounded-md border-2 p-3 font-semibold text-lg">
            {title}
          </AccordionTrigger>
          <AccordionContent className="dark:bg-second rounded-b-md bg-indigo-100/50 p-4 items-start text-foreground/70">
            {answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Reveal>
  );
}

export default function Faq() {
  return (
    <div className={"grid grid-cols-1 gap-3"}>
      <Reveal>
        <span className="flex gap-4 lg:justify-center items-center">
          <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
          <h2 className={"font-mono text-4xl"}>Frequently Asked Questions</h2>
          <hr className="h-1 max-lg:w-40 w-20 rounded bg-primary/40" />
        </span>
      </Reveal>

      <div className="flex flex-col justify-start w-full py-4">
        <Collapsible
          title={"Question 1 ?"}
          answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse dolor, dolores enim, architecto saepe impedit vitae quam earum doloribus, voluptate sit delectus reprehenderit mollitia non placeat. Ullam, quisquam facere!"
        />
        <Collapsible
          title={"Question 2 ?"}
          answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse dolor, dolores enim, architecto saepe impedit vitae quam earum doloribus, voluptate sit delectus reprehenderit mollitia non placeat. Ullam, quisquam facere!"
        />
        <Collapsible
          title={"Question 3 ?"}
          answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse dolor, dolores enim, architecto saepe impedit vitae quam earum doloribus, voluptate sit delectus reprehenderit mollitia non placeat. Ullam, quisquam facere!"
        />
        <Collapsible
          title={"Question 4 ?"}
          answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse dolor, dolores enim, architecto saepe impedit vitae quam earum doloribus, voluptate sit delectus reprehenderit mollitia non placeat. Ullam, quisquam facere!"
        />
      </div>
    </div>
  );
}
