import { ModeToggle } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between border-b p-2 border-gray-300/30">
      <Image
        className=""
        src={"/name.webp"}
        alt="name-pic"
        width={200}
        height={200}
      />
      <div className="flex items-center lg:gap-6">
        <ModeToggle />
        <Button
          size={"sm"}
          variant={"ghost"}
          className="hover:bg-background/20 text-foreground/50"
        >
          Course
        </Button>
        <Button
          size={"sm"}
          variant={"ghost"}
          className="hover:bg-background/20 text-foreground/50"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
