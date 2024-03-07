import Hero from "./hero";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main className="bg-background dark:bg-indigo-950 h-svh">
      <Navbar />
      <div className="flex flex-col px-32 py-10">
        <Hero />
      </div>
    </main>
  );
}
