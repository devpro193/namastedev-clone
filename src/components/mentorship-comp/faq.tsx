import Reveal from "@/components/framer/reveal";

type Faq = { question: string; answer: string };

function Faq({ question, answer }: Faq) {
  return (
    <div className=" flex flex-col items-start justify-center gap-5 rounded-xl border border-[#e4e7ec] dark:border-head bg-white dark:bg-second p-5 lg:px-8 lg:py-7">
      <section className="flex flex-col items-start gap-4 self-stretch">
        <Reveal>
          <span className="flex items-start gap-4 self-stretch text-base font-semibold leading-6 text-[#101828] dark:text-white">
            {question}
          </span>
        </Reveal>
        <hr className="h-px w-full border-[#f2f4f7] dark:border-prime" />
        <Reveal>
          <p className="w-full text-sm leading-5 text-muted-foreground">
            {answer}
          </p>
        </Reveal>
      </section>
    </div>
  );
}

export default function Faqs() {
  let faqs: Faq[] = [
    {
      question:
        " I have an upcoming interview. Can I take this long-term mentorship package?",
      answer:
        "Yes, absolutely. This program is highly suitable for you if you have an interview coming up. As this mentorship is 1:1 and completely personalised, there are no restrictions on the timeline. Be it 15 days or 1 month, your mentor will plan the timeline and preparation based on your upcoming interview schedule and help you crack it in the best possible manner. If you want to enrol right away to prepare for an upcoming interview, you may select your mentor, make the payment and get started in an instant. For any doubts related to enrolment, please get in touch with us at mentee-support@preplaced.in. We’d be happy to help you.",
    },
    {
      question: "Who are 30dayscoding mentors?",
      answer:
        "Our mentors are top industry experts who are associated with global brands and companies across tiers. They are selected to work as mentors after a thorough screening process. We, at Preplaced, ensure that you always get the best-qualified mentors to guide you.",
    },
    {
      question: "What does mentorship till you get your dream job mean?",
      answer:
        "It means your mentor will handhold you till you achieve your goal of getting into your dream job. That is what makes your mentor happy. Your mentor will take complete responsibility to prepare you in every aspect. Not leaving your hand till you achieve your goal.",
    },
    {
      question: "For whom is the long-term 1:1 interview preparation suitable?",
      answer:
        "This long-term interview preparation mentorship is suitable for people who want to upgrade their careers and get into their dream job in a strategic manner. Whether you’re a fresher or someone with 10 years of experience, we have the suitable mentors and resources to pave the path for your interview success. Preplaced is India’s first platform that focuses on practising through personalised and customisable mentorship programs that aim at complete and all-rounded interview preparation.",
    },
    {
      question: " Do you provide any student discount?",
      answer:
        "We offer a 30% discount for students. Just shoot us an email at mentee-support@preplaced.in before purchasing! Make sure you use your student email or attach a valid student ID/proof.",
    },
    {
      question:
        " What are the advantages of interview preparation through mentorship",
      answer:
        "Your mentors can accurately pinpoint your skill gaps and correct them. They encourage and empower you to do better in your career. You can define your career goals clearly with their astute guidance. Moreover, you can build your network, learn the industry nitty-gritty, and also win referrals and recommendations from your mentors who will be truly rooting for your success",
    },
  ];

  return (
    <div className="gap-5 lg:gap-7 m-auto grid grid-cols-1 place-items-center p-10 lg:p-20 max-w-[75rem]">
      <Reveal>
        <span className="flex items-center justify-center gap-4 relative">
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
          <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
            FAQs
          </h2>
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
        </span>
      </Reveal>
      <div className="flex flex-col items-start gap-4 self-stretch">
        {faqs.map(({ answer, question }, i) => (
          <Reveal key={i}>
            <Faq question={question} answer={answer} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
