import { satisfy } from "@/lib/font";
import Image from "next/image";

export default function Instructor() {
  return (
    <div className={`grid grid-cols-1 gap-3`}>
      <span className="flex gap-4 lg:justify-center items-center">
        <hr className="h-1 max-lg:w-full max-lg:hidden w-20 rounded bg-primary/40" />
        <h2 className={`${satisfy.className} text-4xl`}>Instructor</h2>
        <hr className="h-1 max-lg:w-full w-20 rounded bg-primary/40" />
      </span>

      <div className="flex overflow-hidden max-lg:flex-col gap-10 max-lg:gap-5 bg-gray-200/90 dark:bg-background rounded-md">
        <Image
          src={"/public.avif"}
          alt="profile-pic"
          height={700}
          width={250}
          className="max-lg:h-80 max-lg:w-full object-cover max-lg:object-center"
        />
        <div className="flex flex-col gap-10 p-10 grid-cols-1">
          <section className="flex flex-col">
            <h4 className={`${satisfy.className} text-3xl`}>Akshay Saini</h4>
            <span className="text-sm font-semibold text-foreground/70">
              Founder - NamasteDev.com
            </span>
          </section>

          <p className="font-semibold text-lg text-foreground/70">
            Akshay Saini, founder of NamasteDev.com, who previously worked as a
            software engineer at Uber & Paytm. Akshay has over 8+ years of
            experience in the software industry and has been guiding students to
            become a better software Engineer. Well known for his famous
            playlist named Namaste JavaScript, he has taught over 3 lakhs+
            students across the globe. All the concepts in this course are
            taught by Akshay himself.
          </p>
        </div>
      </div>
    </div>
  );
}
