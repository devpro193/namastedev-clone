"use client";

import Reveal from "@/components/framer/reveal";
import { useState } from "react";

type TestimonialType = {
  name: string;
  time?: string;
  email?: string;
  // profile: string;
  review: string;
  // social: "instagram" | "linkedin" | "facebook" | "youtube";
  // link: string;
};

export let testimonials: TestimonialType[] = [
  {
    time: "3/6/2024 22:49:19",
    name: "Abhisek De",
    email: "abhisekde96@gmail.com",
    review:
      "Really helpful! I got exposed to new avenues and currently I am building a micro SAAS on my own via python, GCP, flutterflow, firebase",
  },
  {
    time: "3/6/2024 22:59:38",
    name: "Akshay",
    email: "akshaypoonia00000@gmail.com",
    review:
      "Sir, you have done a wonderful word. Mene MEFN course me enroll kia hai muje mja araha hai. ",
  },
  {
    time: "3/6/2024 23:08:28",
    name: "Aashish kumar",
    email: "jis2k0001@gmail.com",
    review: "Yes I have purchased you MERN STACK course",
  },
  {
    time: "3/6/2024 23:48:09",
    name: "Prathamesh Bhangre ",
    email: "bhangrep23@gmail.com",
    review:
      "Course is really good but need to work on website speed, it loads very slow which is quiet irritating.",
  },
  {
    time: "3/6/2024 23:48:49",
    name: "Kompal",
    email: "kompalthakur1134@gmail.com",
    review: "Satisfied product ",
  },
  {
    time: "3/7/2024 1:38:21",
    name: "Parth Sankpal ",
    email: "psankpal87@gmail.com",
    review:
      "I just purchased course.This is the best price i could get the course compared to market.It is very nice to know that you just want to educate people,don't want to make money out of them. Really value for money.\n\nAlso please share community links to join",
  },
  {
    time: "3/7/2024 6:01:15",
    name: "Syed Zainuddin Gousuddin Kirmani",
    email: "itzzain9@gmail.com",
    review: "The Couse is very good i have learn my skills ",
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
    time: "3/10/2024 16:20:46",
    name: "Zubair Zabir",
    email: "zzabir@rollins.edu",
    review:
      "Tbh I found Aryan Bhai inspiring. Before talking to him, I was doing a lot of things together. Java, Python, JavaScript, DSA, R and what not. After our first virtual call, he made a guideline for me to follow. Two simple things that I need to complete within the next one month learn JavaScript and Python fully and build small projects. It’s been 10 days into following his guidance and I have a better idea of the codes I am writing. His guidance increased my focus and also my interest in learning programming. For someone who is trying to break into tech, Aryan Bhai is a good resource. Before him, I talked to other mentors. Many from the FAANG and all of them were great. What separates him from the others is his interest in seeing you grow and succeed. All of them gave me the same answer but Aryan Bhai is one of the few that responds to your text when you hit a snag. ",
  },
  {
    time: "3/10/2024 19:40:20",
    name: "Aniket Kumar",
    email: "kraniket123654@gmail.com",
    review: "Awesome Courses especially DSA Master Course",
  },
  {
    time: "3/10/2024 19:43:46",
    name: "Nehal Panchal",
    email: "nehalpanchal40@gmail.com",
    review:
      "I have been started following you since past few days ago and you are always on the fleek. The IT students who are in job hunts like me need your guidance at first to shape professional career. I already joined your community with the minimum fees. I am originally from India but currently in Toronto, Canada. I need your guidance to start my career so please allow me to grow under your guidance. Thank you Sir for all your efforts. ",
  },
  {
    time: "3/10/2024 19:46:01",
    name: "Jitesh ",
    email: "Jitesh957@gmail.com ",
    review: "Your hs videos were good",
  },
  {
    time: "3/10/2024 19:46:06",
    name: "Pavan Reddy",
    email: "pavanmedipally1412@gmail.com",
    review: "I have started mern stack and completed html css part",
  },
  {
    time: "3/10/2024 20:08:55",
    name: "Aryan Oardeshi",
    email: "pardeshiaryanon@gmail.com",
    review: "Dsa revision cource is best ",
  },
  {
    time: "3/10/2024 20:09:16",
    name: "Aditya Singh ",
    email: "adityasinghji2807@gmail.com",
    review: "Great MERN package ",
  },
  {
    time: "3/10/2024 20:16:56",
    name: "Ahmed Raza Khan ",
    email: "ark372004@gmail.com",
    review:
      "Best roadmap course for MNCs and service based companies, detailed roadmap ",
  },
  {
    time: "3/10/2024 20:48:05",
    name: "Muhammad Naeem ",
    email: "muhammadnaeem6663@gmail.com",
    review:
      "Participating in a 30-day coding challenge was an incredibly rewarding experience. It pushed me to dedicate consistent time each day to honing my coding skills and tackling new problems. By the end of the challenge, I noticed significant improvement in my coding proficiency, problem-solving abilities, and overall confidence. Moreover, the sense of accomplishment after completing the challenge was truly gratifying. I highly recommend taking on a 30-day coding challenge to anyone looking to enhance their programming skills and challenge themselves to reach new heights in their coding journey.",
  },
  {
    time: "3/10/2024 21:19:31",
    name: "Altaf Hussain",
    email: "ah8783070@gmail.com",
    review:
      "I have taken MERN course from you and i think it is a best end to end tutorial for new  developers.Best!",
  },
  {
    time: "3/10/2024 21:25:20",
    name: "Abhishek Ojha ",
    email: "abhishekojha3061414@gmail.com",
    review:
      "Sir jab main apka reel dekhta hu to nhi bhi padhne ka man hota hai fir bhi motivation mil jati hai padhne ke liye\nAise hi reels bnate rahiye ",
  },
  {
    time: "3/10/2024 21:32:30",
    name: "Manoj Dasari ",
    email: "dasarimanoj265@gmail.com",
    review:
      "Hi Aryan Bhayya, I've been following almost one year and I've seen a lot of growth via people noticing your page and content. Your reels, your experiences really motivate me a lot and it keeps my drive going stronger day by day. The knowledge I got from the course is really unique and has various ways to view and build a project. I even shared your site to few of my friends and they benefitted a lot with such a minimal price bhayya. No other job surity program can match your courses bhayya. Thanks a lot for giving such value to the community",
  },
  {
    time: "3/10/2024 21:53:08",
    name: "Utsav Bansal",
    email: "ubansal1996@gmail.com",
    review:
      "Truly supportive mentors, Through regular one-on-one sessions and constructive feedback, Aryan has helped me refine my technical skills, Their unwavering support and encouragement have empowered me to overcome obstacles and seize new opportunities.\n",
  },
  {
    time: "3/10/2024 22:04:05",
    name: "Darshan ",
    email: "darsingh07@yahoo.com",
    review:
      "I have taken a mern stack course ,its a veey good course for professional as well as beginner,deep learning concepts plenty of projects. Interview question etc lot of things its a job ready course in such a small amount. \nThankyou",
  },
  {
    time: "3/10/2024 22:09:11",
    name: "Mohit",
    email: "mohitpatil.np@gmail.com",
    review:
      "Amazing courses with diverse topics and very well taught. And the highlight is the price compared to the others. Learning MERN rn, going to go for nextjs course afterwards. ",
  },
  {
    time: "3/11/2024 12:01:53",
    name: "Shubham Kumar Singh ",
    email: "shubhamkr2299@gmail.com",
    review: "Great to be honoured with your advice ",
  },
  {
    time: "3/10/2024 23:09:03",
    name: "Nimish Sharma",
    email: "snimish123@gmail.com",
    review:
      "content across 30days coding is great and its really easy to understand, and best part about it is project based learning which starts with beginner to intermediate to hard and handholding support by aryan and his team is impeccable. ",
  },
  {
    time: "3/10/2024 23:53:02",
    name: "Aditya Nitin Pawar",
    email: "adityanitinpawar9@gmail.com",
    review:
      "Love the courses and the personal advice. Definitely most practical courses in terms of learning things from first principles and then slowly increasing the application part along the course.",
  },
  {
    time: "3/11/2024 0:40:56",
    name: "Himanshu",
    email: "Himyadav.yh@gmail.com",
    review:
      "Sir, I am really grateful for the mentorship I am receiving from you. It means a lot to me that you work in my dream company. Your straightforward approach, without any nonsense, is highly appreciated. Your DSA Revision Guide is truly a gem for mastering data structures and algorithms. Your guidance is invaluable to me, especially during these challenging times as a fresher. You come across more like a big brother to me, and I'm grateful to have found you on Instagram",
  },
  {
    time: "3/11/2024 1:58:04",
    name: "R.Karthik raja",
    email: "kkblue22m2@gmail.com",
    review:
      "I have just started two courses dsa and mern stack and love the mern stack one its has so many good things that I can learn and give a good growth to my technical career.",
  },
  {
    time: "3/11/2024 3:07:13",
    name: "Ruhan Ataraut ",
    email: "virtualruhan@gmail.com",
    review:
      "I have taken the Mern stack course , I just started with it and I wanted to say that it's on point course , currently I am doing internship in production support in a fintech but I want to go to development so do I brought the course and I ll crack devlopment asap.",
  },
  {
    time: "3/11/2024 4:05:38",
    name: "Abindith M",
    email: "abindith@gmail.con",
    review:
      "I find the contents produced by Aryan Singh very much useful . Every one follows the curriculum and a structure, but we can’t find what the reality in industry is . With Aryan it’s different , he shares with his heart his knowledge and his insights about industry is very much different . He is one who genuinely cares about others .",
  },
  {
    time: "3/10/2024 22:12:04",
    name: "Adheesh Sharma",
    email: "19cs006adheesh@gmail.com",
    review:
      "Through this mentorship, I've gained invaluable insights, refined my skills, and developed a clearer vision for my career trajectory. The main USP is their 1:1 session, which many big institutes fail to deliver consistently, and the quality of content and customized guidance based on a person's skill set is yet another added advantage. The most liked thing about this community is that mentor's push you to achieve your own goals and create your online presence or identity as well, thereby emphasizing succeeding together. Also, they don't force anyone to take their courses; rather, they motivate one to explore other resources and go with the one suitable for oneself. Be if FAANG/MAANG of any GANG, they would provide you with realistic conditions of the market and different organizations. With all of this package, you get complimentary humor and satirical reels. So, if anyone wants to build in public, I would highly recommend them (Tech main tagde hone pr dhyaan do bs). \n\nThanks a lot for guiding us so far and taking us in your 30DC-verse.\nLastly, there's a suggestion that the mentorship program could be stretched for longer period of time as well.",
  },
  {
    time: "3/11/2024 9:43:05",
    name: "Dolly Sharma ",
    email: "24dollysharma@gmail.com",
    review:
      "Aaj se ten days phle mene jab start kiya mujhe YouTube pr videos bhi smj mai nahi aa rhe the two hours ke video dekhne ke baad bhi bs time waste ho rha hai..mene bhut saare famous influencer se 1:1 session liya guidence ke liye vo bhi wastage of time  or money tha mujhe genioun lgne lga tha ye sab apne followers ke followers bdane ke liye fake baate kr rhe hai ..phir mere yha MERN full stack course liya mene socha yha se consult krke mujhe kya Krna hai ye deside kr lunge...phir only 20 percent course complete Kiya hai or jo mene YouTube pr videos dekhe the unka use or sence smj mai aa rha hai...agr mai youtube se hi complete krte toh definitely mera interest zero percent ho jata abhi tak ye such mai 400 rs mai worth it hai ",
  },
  {
    time: "3/10/2024 22:15:29",
    name: "Akshat Rai",
    email: "akshatrai21@gmail.com",
    review:
      "Taking guidance from Aryan bhaiya is just like receiving guidance from your own elder brother. You can DM him round the clock with any query, no matter how big or small, and he replies within a few minutes. Now, I don't have to waste time deciding which course to take, which tech stack to learn, or in which order I should cover DSA topics. I just have to complete the tasks given by Aryan bhaiya, and I'm done. Under his guidance, I have already secured an internship of 25k. Now, with my placement in the next 6 months, I'm all set for success under his guidance. Thank you, Aryan bhaiya, for bringing this 1:1 guidance program.",
  },
  {
    time: "3/11/2024 11:06:15",
    name: "Madhav gaur ",
    email: "gaurmadhav1234@gmail.com",
    review:
      "Bhaiya next level motivation for coding as you threaten us about no jobs for average coders that spirit pushing me to high level to develop interest for Deep learning.",
  },
  {
    time: "3/11/2024 7:32:11",
    name: "Sagnik Tarafder",
    email: "sagnik.tarafder@gmail.com",
    review: "Very helpful, insightful...and bhaiya is very kind. ",
  },
];

function Testimonial({ name, review }: TestimonialType) {
  return (
    <div className="hidden flex-col p-6 gap-3 h-fit bg-second w-[23.75rem] rounded-lg">
      <span className="font-jakarta font-bold">{name}</span>
      <p className="leading-6 text-base font-normal">{review}</p>
    </div>
  );
}

export default function Inspirational() {
  return (
    <div className="grid place-items-center gap-8">
      <Reveal>
        <span className="flex items-center gap-4 relative">
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
          <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
            Inspiring journeys and wins!
          </h2>
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
        </span>
      </Reveal>

      <div className="relative flex items-start gap-8">
        <Reveal>
          <div className="flex flex-col max-[800px]:[&>*:nth-child(n)]:flex max-xl:[&>*:nth-child(odd)]:flex xl:[&>*:nth-child(3n-2)]:flex gap-8 items-start">
            {testimonials.map((e, i) => (
              <Testimonial key={i} name={e.name} review={e.review} />
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="max-[800px]:hidden flex flex-col max-xl:[&>*:nth-child(even)]:flex xl:[&>*:nth-child(3n-1)]:flex gap-8 items-start">
            {testimonials.map((e, i) => (
              <Testimonial key={i} name={e.name} review={e.review} />
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="max-xl:hidden flex flex-col [&>*:nth-child(3n)]:flex gap-8 items-start">
            {testimonials.map((e, i) => (
              <Testimonial key={i} name={e.name} review={e.review} />
            ))}
          </div>
        </Reveal>
        <div className="absolute bottom-0 h-20 w-full bg-gradient-to-b z-10 from-transparent from-0% via-50% via-transparent to-50% blur-md to-bg/70"></div>
      </div>
    </div>
  );
}
