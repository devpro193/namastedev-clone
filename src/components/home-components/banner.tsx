import Link from "next/link";
import Unveal from "../framer/unvel";

export default function Banner() {
  return (
    <Unveal>
      <div className={`relative font-jakarta tab:min-h-16`}>
        <div className="tab:hidden tab:min-h-16" />
        <Link
          href={"https://courses.30dayscoding.com/s/store"}
          target="_blank"
          className={`bg-gradient-to-r from-second via-head to-second animate-gradient bg-[length:200%_auto] font-bold flex items-center justify-center text-lg max-tab:hidden text-white tab:min-h-16 fixed tab:top-0 w-full z-20`}
        >
          <p className="tracking-wide text-center">
            Apply now and get our Docker crash course for FREE 🎁
            <span className="underline mx-2">Apply now!</span>
          </p>
        </Link>
      </div>
    </Unveal>
  );
}
