"use client";

import { satisfy } from "@/lib/font";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

function Testimonial({ name, profile }: { name: string; profile: string }) {
  return (
    <div className="flex flex-col bg-background p-4 rounded-md shadow-md">
      <section className="flex justify-between">
        <div className="flex gap-3">
          <Image
            alt=""
            src={`/${profile}`}
            className="w-14 h-14 rounded-full object-cover"
            width={50}
            height={50}
          />
          <div className="flex flex-col gap-0">
            <span className={`${satisfy.className} text-xl`}>{name}</span>
            <span className="text-sm text-foreground/70 font-semibold">
              Senior Software Developer
            </span>
            <span className="text-orange-600 text-xs">Cognizant</span>
          </div>
        </div>

        <svg
          className="fill-sky-500 dark:fill-white h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>
      </section>

      <p className="text-foreground/70 text-sm font-semibold leading-5 px-5 py-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia
        beatae quis magni rerum? Minus magni aliquam esse libero, dicta ipsa
        dolores deserunt aut voluptates distinctio ab fugit blanditiis! Debitis?
      </p>
    </div>
  );
}

export default function Carousal() {
  return (
    <div className={`md:hidden grid grid-cols-1 gap-3`}>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Testimonial name="Jasper Knight" profile="profile.webp" />
          </CarouselItem>
          <CarouselItem>
            <Testimonial name="James Bond" profile="profile3.webp" />
          </CarouselItem>
          <CarouselItem>
            <Testimonial name="Black Bro" profile="profile2.jpg" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
