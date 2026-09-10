import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Section } from "@/components/section";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section
          id="home"
          className="flex items-center"
        >
          <Hero />
        </Section>
        <Section id="work">
          <Projects />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}