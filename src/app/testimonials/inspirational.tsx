import Image from "next/image";

type TestimonialType = {
  name: string;
  profile: string;
  review: string;
  social: "instagram" | "linkedin" | "facebook" | "youtube";
  link: string;
};

export let testimonials: TestimonialType[] = [
  {
    review:
      "I just purchased course. This is the best price I could get the course compared to market. It is very nice to know that you just want to educate people, don't want to make money out of them. Really value for money.",
    name: "Parth",
    profile: "/profile.webp",
    social: "instagram",
    link: "https://www.instagram.com/p/C4Pv59ZuauW/?igsh=MzRlODBiNWFlZA%3D%3D&img_index=1",
  },

  {
    review:
      "Sir, you have done a wonderful word. Mene MERN course me enroll kia hai muje mja araha hai.",
    name: "Akshay",
    profile: "/profile2.jpg",
    social: "linkedin",
    link: "https://www.instagram.com/p/C4Pv59ZuauW/?igsh=MzRlODBiNWFlZA%3D%3D&img_index=2",
  },

  {
    review:
      "Really helpful! I got exposed to new avenues and currently I am building a micro SAAS on my own via python, GCP, flutterflow, firebase",
    name: "Abhisek De",
    profile: "/profile3.webp",
    social: "facebook",
    link: "https://www.instagram.com/p/C4Pv59ZuauW/?igsh=MzRlODBiNWFlZA%3D%3D&img_index=3",
  },
  {
    review:
      "Very good person got to learn new new things about the web development and how to prepare for the future and amazing content for education purpose as well as for the entertainment also.",
    name: "Punit",
    profile: "/profile2.jpg",
    social: "youtube",
    link: "https://www.instagram.com/p/C4Pv59ZuauW/?igsh=MzRlODBiNWFlZA%3D%3D&img_index=4",
  },
  {
    review:
      "I have purchased 10 courses bundle 2 days ago. I know MERN but bought for other things this bundle offers. I am amazed witht the amount of content and variety on variety of tech. Thanks",
    name: "Jaydeep",
    profile: "/profile3.webp",
    social: "youtube",
    link: "https://www.instagram.com/p/C4Pv59ZuauW/?igsh=MzRlODBiNWFlZA%3D%3D&img_index=4",
  },
];

function Testimonial({ name, review, profile }: TestimonialType) {
  return (
    <div className="flex flex-col p-6 gap-3 h-fit bg-second w-[23.75rem] rounded-lg">
      <section className="font-jakarta flex items-center gap-2">
        <Image
          src={profile}
          alt="instrutor"
          width={60}
          height={60}
          className="rounded-full object-cover h-10 w-10"
        />
        <span className="font-bold">{name}</span>
      </section>

      <p className="leading-6 text-base font-normal">{review}</p>
    </div>
  );
}

export default function Inspirational() {
  return (
    <div className="grid place-items-center gap-8">
      <span className="flex items-center gap-4 relative">
        <div className="absolute h-full w-full bg-gradient-to-r z-10 from-bg from-0% via-50% via-transparent to-100% to-bg"></div>
        <hr className="h-0.5 w-60 max-w-60 rounded bg-prime" />
        <h2 className="font-jakarta shrink-0 text-[2.5rem] font-extrabold">
          Inspiring journeys and wins!
        </h2>
        <hr className="h-0.5 w-60 max-w-60 rounded bg-prime" />
      </span>

      <div className="relative gap-8 grid xl:grid-cols-3 lg:grid-cols-2 place-content-center">
        {testimonials.map((e, i) => (
          <Testimonial
            key={i}
            name={e.name}
            review={e.review}
            profile={e.profile}
            social={e.social}
            link={e.link}
          />
        ))}
        <div className="absolute bottom-0 h-20 w-full bg-gradient-to-b z-10 from-transparent from-0% via-50% via-transparent to-50% blur-md to-bg/70"></div>
      </div>

      <button className="border rounded-md border-white px-4 py-2 font-semibold text-base">
        Show more reviews
      </button>
    </div>
  );
}
