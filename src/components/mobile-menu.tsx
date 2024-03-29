"use client";

import { navbarState } from "@/lib/jotai";
import { useAtomValue, useSetAtom } from "jotai";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { href, navTitles } from "./nav-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CollapsibleMenu({
  title,
  href,
}: {
  title: string;
  href: string | href[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (typeof href === "string")
    return (
      <span>
        <Link href={href} className="font-semibold text-lg">
          {title}
        </Link>
      </span>
    );

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center">
        <CollapsibleTrigger className="font-semibold items-center flex gap-3">
          <span className="text-lg">{title}</span>
          <ChevronDown
            className={`h-4 w-4 ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          />
        </CollapsibleTrigger>
      </div>

      {isOpen && (
        <CollapsibleContent className="flex flex-col gap-5 py-5 overflow-hidden">
          {href.map(({ title, href }, i) => {
            return (
              <Link
                key={i}
                href={href}
                className="font-semibold text-muted-foreground"
              >
                {title}
              </Link>
            );
          })}
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}

export default function MobileMenu() {
  const state = useAtomValue(navbarState);
  const setState = useSetAtom(navbarState);

  const pathName = usePathname();

  useEffect(() => {
    setState(true);
    // console.log("Hello");
  }, [pathName]);

  return (
    <div
      className={`tab:hidden fixed z-30 overflow-hidden ${
        state ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      <div
        className={`flex flex-col gap-4 transition-all duration-300 w-screen h-screen bg-bg p-6 relative ${
          state ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <button
          onClick={() => setState(true)}
          className="hover:bg-prime/30 rounded-lg p-1 h-fit transition-all absolute top-5 right-5 flex flex-col"
        >
          <X className="tab:hidden max-tab:h-5 max-tab:w-5 h-6 w-6 stroke-[1.5]" />
        </button>
        <span className="uppercase mb-3 text-lg font-semibold text-muted-foreground">
          Menu
        </span>
        {navTitles.map(({ title, href }, i) => {
          return <CollapsibleMenu key={i} title={title} href={href} />;
        })}
      </div>
    </div>
  );
}
