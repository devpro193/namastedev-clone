import Hero from "./hero";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main className="dark:bg-slate-800 h-svh">
      <Navbar />
      <Hero />
    </main>
  );
}
