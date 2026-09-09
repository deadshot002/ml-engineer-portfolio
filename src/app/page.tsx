import Background from "../components/layout/Background";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import MLLab from "../components/ml-lab/MLLab";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import CommandCenter from "../components/command-center/CommandCenter";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030308] text-cyan-50 font-mono selection:bg-cyan-400/30 selection:text-cyan-100 overflow-x-hidden">
      <Background />

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-20">

        {/* HERO */}
        <section id="hero">
          <Hero />
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="scroll-section section-glow"
        >
          <Projects />
        </section>

        {/* ML LAB */}
        <section
          id="ml-lab"
          className="scroll-section section-glow"
        >
          <ScrollReveal y={60} delay={0.08}>
            <MLLab />
          </ScrollReveal>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-section section-glow"
        >
          <ScrollReveal y={50} delay={0.05}>
            <About />
          </ScrollReveal>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="scroll-section section-glow"
        >
          <ScrollReveal y={50} delay={0.05}>
            <Experience />
          </ScrollReveal>
        </section>

        {/* COMMAND CENTER */}
        <section
          id="command-center"
          className="scroll-section section-glow"
        >
          <ScrollReveal y={50} delay={0.05}>
            <CommandCenter />
          </ScrollReveal>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-section section-glow"
        >
          <ScrollReveal y={50} delay={0.05}>
            <Contact />
          </ScrollReveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}