"use client";

import { TestimonialType } from "@/app/testimonials/inspirational";
import Reveal from "@/components/framer/reveal";
import Link from "next/link";

function Testimonial({ name, review }: TestimonialType) {
  return (
    <div className="flex flex-col p-6 gap-4 h-fit bg-second w-[23.75rem] rounded-lg">
      <span className="font-jakarta font-bold">{name}</span>
      <p className="leading-6 text-sm font-normal">{review}</p>
    </div>
  );
}

const testimonials: TestimonialType[] = [
  {
    time: "3/7/2024 7:00:59",
    name: "Punit ",
    email: "Punitmistr@gmail.com",
    review:
      "Very good person got to learn new new things about the web development and how to prepare for the future and amazing content for education purpose as well as for the entertainment also ",
  },
  {
    time: "3/8/2024 0:23:51",
    name: "Jaydeep Bariya",
    email: "jaydeepbariya.dev@gmail.com",
    review:
      "I have purchased 10 courses bundle 2 days ago. I know MERN, but bought for other things this bundle offers. I am amazed with the amount of content and variety on veriety of tech. Thanks. ",
  },
  {
    time: "3/10/2024 22:04:05",
    name: "Darshan ",
    email: "darsingh07@yahoo.com",
    review:
      "I have taken a mern stack course ,its a veey good course for professional as well as beginner,deep learning concepts plenty of projects. Interview question etc lot of things its a job ready course in such a small amount. \nThankyou",
  },
  {
    time: "3/7/2024 1:38:21",
    name: "Parth Sankpal ",
    email: "psankpal87@gmail.com",
    review:
      "I just purchased course.This is the best price i could get the course compared to market.It is very nice to know that you just want to educate people,don't want to make money out of them. Really value for money.\n\nAlso please share community links to join",
  },
  {
    time: "3/10/2024 23:09:03",
    name: "Nimish Sharma",
    email: "snimish123@gmail.com",
    review:
      "content across 30days coding is great and its really easy to understand, and best part about it is project based learning which starts with beginner to intermediate to hard and handholding support by aryan and his team is impeccable. ",
  },
  {
    time: "3/7/2024 7:00:59",
    name: "Punit ",
    email: "Punitmistr@gmail.com",
    review:
      "Very good person got to learn new new things about the web development and how to prepare for the future and amazing content for education purpose as well as for the entertainment also ",
  },
  {
    time: "3/8/2024 0:23:51",
    name: "Jaydeep Bariya",
    email: "jaydeepbariya.dev@gmail.com",
    review:
      "I have purchased 10 courses bundle 2 days ago. I know MERN, but bought for other things this bundle offers. I am amazed with the amount of content and variety on veriety of tech. Thanks. ",
  },
  {
    time: "3/10/2024 22:04:05",
    name: "Darshan ",
    email: "darsingh07@yahoo.com",
    review:
      "I have taken a mern stack course ,its a veey good course for professional as well as beginner,deep learning concepts plenty of projects. Interview question etc lot of things its a job ready course in such a small amount. \nThankyou",
  },
  {
    time: "3/7/2024 1:38:21",
    name: "Parth Sankpal ",
    email: "psankpal87@gmail.com",
    review:
      "I just purchased course.This is the best price i could get the course compared to market.It is very nice to know that you just want to educate people,don't want to make money out of them. Really value for money.\n\nAlso please share community links to join",
  },
  {
    time: "3/10/2024 23:09:03",
    name: "Nimish Sharma",
    email: "snimish123@gmail.com",
    review:
      "content across 30days coding is great and its really easy to understand, and best part about it is project based learning which starts with beginner to intermediate to hard and handholding support by aryan and his team is impeccable. ",
  },
];

export default function Testimonials() {
  return (
    <div className={"grid grid-cols-1 gap-3 py-10 max-w-[90rem] m-auto"}>
      <Reveal>
        <span className="flex items-center justify-center gap-4 relative">
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
          <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
            Reviews from our students
          </h2>
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
        </span>
      </Reveal>

      <div className="py-12 relative flex flex-col gap-7 overflow-hidden bg-gradient-to-tr">
        <Reveal>
          <div className="relative flex gap-5 animate-loop-scroll w-fit">
            {testimonials.map(({ name, review }, i) => (
              <Testimonial key={i} name={name} review={review} />
            ))}
          </div>
        </Reveal>

        <div className="h-full w-full absolute z-10 bg-gradient-to-r from-bg max-lg:from-0% from-5% via-bg/10 via-50% to-bg max-lg:to-100% to-95%"></div>
      </div>

      <div className="m-auto">
        <Reveal>
          <Link className="text-sm" href={"/testimonials"}>
            <button
              className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
            >
              Show More
            </button>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
