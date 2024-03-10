import Link from "next/link";

export default function Banner() {
  return (
    <div className={`relative font-jakarta tab:min-h-16`}>
      <div className="tab:hidden tab:min-h-16" />
      <Link
        href={"https://courses.30dayscoding.com/s/store"}
        target="_blank"
        className={`bg-head font-bold flex items-center justify-center text-lg max-tab:text-sm text-white tab:min-h-16 max-tab:p-4 fixed tab:top-0 max-tab:bottom-0 w-full z-20`}
      >
        <p className="tracking-wide text-center">
          Apply now and get our Docker crash course for FREE 🎁
          <span className="underline mx-2">Apply now!</span>
        </p>
      </Link>
    </div>
  );
}
