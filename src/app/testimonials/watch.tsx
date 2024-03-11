import { VideoTestimony } from "./hero";

export default function Watch() {
  return (
    <div className="grid place-items-center gap-8">
      <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
        Watch more stories
      </h1>
      <div className="relative flex flex-wrap gap-8 justify-center">
        <VideoTestimony
          name="Aryan Singh"
          designation="Application Engineer @National Instruments"
          linkedinUrl="https://www.linkedin.com/in/singh1aryan/"
          imageUrl="/instructor.jpg"
          videoId="FVHtu6tuA9E"
        />
        <VideoTestimony
          name="Aryan Singh"
          designation="@Google SWE"
          linkedinUrl="https://www.linkedin.com/in/singh1aryan/"
          imageUrl="/instructor.jpg"
          videoId="dao2HaGzc3M"
        />
        <VideoTestimony
          name="Aryan Singh"
          designation="Application Engineer @National Instruments"
          linkedinUrl="https://www.linkedin.com/in/singh1aryan/"
          imageUrl="/instructor.jpg"
          videoId="i4aoHmGJwsA"
        />
        <VideoTestimony
          name="Aryan Singh"
          designation="@Google SWE"
          linkedinUrl="https://www.linkedin.com/in/singh1aryan/"
          imageUrl="/instructor.jpg"
          videoId="i4aoHmGJwsA"
        />
        <VideoTestimony
          name="Aryan Singh"
          designation="Application Engineer @National Instruments"
          linkedinUrl="https://www.linkedin.com/in/singh1aryan/"
          imageUrl="/instructor.jpg"
          videoId="FVHtu6tuA9E"
        />
        <VideoTestimony
          name="Aryan Singh"
          designation="@Google SWE"
          linkedinUrl="https://www.linkedin.com/in/singh1aryan/"
          imageUrl="/instructor.jpg"
          videoId="dao2HaGzc3M"
        />
      </div>
      <button className="border rounded-md border-white px-4 py-2 font-semibold text-base">
        Show more
      </button>
    </div>
  );
}
