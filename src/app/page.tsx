import Achievements from "./achievements";
import Course from "./course";
import Hero from "./hero";
import Instructor from "./instructor";
import Mission from "./mission";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main className="bg-background dark:bg-indigo-950 min-h-svh transition-all">
      <Navbar />
      <div className="max-w-[1800px] m-auto flex flex-col lg:px-20 lg:py-10 px-6 py-5 gap-10">
        <Hero />
        <Achievements />
        <Mission />
        <Course />
        <Instructor />
      </div>
    </main>
  );
}
