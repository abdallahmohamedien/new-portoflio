import Navbar from "../components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
}