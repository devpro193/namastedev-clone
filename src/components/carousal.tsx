"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Testimonial, testimonials } from "./course-components/testimonials";

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
          {testimonials.map((e) => (
            <CarouselItem>
              <Testimonial
                name={e.name}
                review={e.review}
                profile={e.profile}
                social={e.social}
                link={e.link}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
