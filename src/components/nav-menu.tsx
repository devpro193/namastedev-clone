"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HomeIcon } from "lucide-react";

type href = { title: string; href: string; description: string };

// const components = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
// ];

const navTitles: {
  title: string;
  href: string | href[];
}[] = [
  {
    title: "Courses",
    href: [
      {
        title: "Mern FullStack Course",
        href: "/courses/mern-full-stack-developer-course",
        description:
          "A complete mern full stack development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
      },
      {
        title: "Live Mern Cohort",
        href: "/courses/mern-cohort",
        description:
          "A live mern stack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com",
      },
    ],
  },
  { title: "Events", href: "/" },
  { title: "Upskill for free", href: "/" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Job board", href: "/" },
];

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navTitles.map(({ title, href }, i) => (
          <NavigationMenuItem key={i}>
            {typeof href === "string" ? (
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {title}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="bg-head/20 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {href.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-prime/30 hover:text-accent-foreground focus:bg-prime/30 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
