"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export type href = { title: string; href: string; description: string };

export const navTitles: {
  title: string;
  href: string | href[];
}[] = [
  {
    title: "Courses",
    href: [
      // {
      //   title: "Mern FullStack Course",
      //   href: "/course/mern-full-stack-developer-course",
      //   description:
      //     "A complete mern full stack development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
      // },
      {
        title: "Live Mern Cohort",
        href: "/course/mern-cohort",
        description:
          "A live mern stack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com",
      },
      {
        title: "DSA Live Placement",
        href: "/course/dsa-live-placement-ready-course",
        description:
          "A live dsa placement ready course from 30 days coding. Checkout on www.courses.30dayscoding.com",
      },
      {
        title: "MERN FullStack Course",
        href: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
        description:
          "A complete mern full stack development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
      },
      {
        title: "DSA Mastery Course",
        href: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
        description:
          "A full dsa mastry course from 30 days coding. Checkout on www.courses.30dayscoding.com",
      },
      {
        title: "Next JS FullStack",
        href: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
        description:
          "A live next js fullstack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com",
      },
      {
        title: "All Courses Package",
        href: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
        description:
          "Get a course from 30 days coding. Checkout on www.courses.30dayscoding.com",
      },
    ],
  },
  {
    title: "Resources",
    href: [
      {
        title: "DSA Sheets",
        href: "http://dsa.30dayscoding.com/",
        description:
          "Explore our comprehensive Data Structures and Algorithms (DSA) sheet, meticulously curated to aid your journey through our DSA courses.",
      },
      {
        title: "Resume Builder",
        href: "http://resume.30dayscoding.com/",
        description:
          "Create your best resume ever with our All-in-one AI Builder, Reviewer, and Optimizer.",
      },
      {
        title: "Premium Guides",
        href: "https://courses.30dayscoding.com/products",
        description:
          "Elevate your coding skills with our premium guide, meticulously crafted to propel you towards mastery in programming. Dive deep into advanced concepts, best practices, and insider tips curated by industry experts.",
      },
    ],
  },
  {
    title: "Reviews",
    href: [
      {
        title: "Testimonials",
        href: "/testimonials",
        description:
          "Work reviews and words of people how they felt working with us.",
      },
      {
        title: "Wall of Love",
        href: "/wall-of-love",
        description:
          "A whole page dedicated for the kind of love we recieves from the people.",
      },
    ],
  },
  {
    title: "Mentorship",
    href: "/mentorship",
  },
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
