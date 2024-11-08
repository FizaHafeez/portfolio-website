import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
     <Hero/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </div>
  );
}
