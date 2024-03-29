import Reveal from "@/components/framer/reveal";
import { ModeToggle } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <Reveal>
      <div className="flex justify-between border-b p-2 border-gray-300/30">
        <Link href={"/"}>
          <Image
            className=""
            src={"/logo.png"}
            alt="name-pic"
            width={50}
            height={50}
          />
        </Link>
        <div className="flex items-center px-2 lg:gap-6 gap-3">
          <ModeToggle />
          <Button
            asChild
            size={"sm"}
            variant={"ghost"}
            className="hover:bg-background/20 text-foreground/50"
          >
            <Link href={"/courses/mern-full-stack-developer-course"}>
              Course
            </Link>
          </Button>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="hover:bg-background/20 text-foreground/50"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
