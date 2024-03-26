import Link from "next/link";
import Unveal from "../framer/unvel";

export default function Banner() {
  return (
    <Unveal>
      <div className={`relative font-jakarta tab:min-h-10 max-lg:hidden`}>
        <div className="min-h-8" />
        <Link
          href={"https://courses.30dayscoding.com/s/store"}
          target="_blank"
          className={`bg-gradient-to-r from-second via-head to-second animate-gradient bg-[length:200%_auto] font-bold flex items-center justify-center text-lg text-white min-h-8 fixed top-0 w-full z-20 py-2`}
        >
          <p className="tracking-wide text-center">
            Apply now and get our Docker crash course for FREE 🎁
            <span className="underline mx-2">Apply now!</span>
          </p>

          {/* <section className="container">
            <p className="loop-text">
              ✨ Flat 50% off on all Crash courses and Self-paced programs
            </p>
            <p className="loop-text">
              ✨ Flat 50% off on all Crash courses and Self-paced programs
            </p>
            <p className="loop-text">
              ✨ Flat 50% off on all Crash courses and Self-paced programs
            </p>
          </section> */}
        </Link>
      </div>
    </Unveal>
  );
}
