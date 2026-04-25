import { getResumeData } from "@/lib/api";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";

export default async function Home() {
  const data = await getResumeData();

  return (
    <>
      <Nav />
      <Hero data={data} />
      <hr className="div" />
      <About data={data} />
      <hr className="div" />
      <Skills data={data} />
      <hr className="div" />
      <Experience data={data} />
      <hr className="div" />
      <Credentials data={data} />
      <hr className="div" />
      <ResumeCTA />
      <hr className="div" />
      <Contact data={data} />
    </>
  );
}