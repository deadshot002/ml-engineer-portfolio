import Background from "../components/layout/Background";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import MLLab from "../components/ml-lab/MLLab";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import CommandCenter from "../components/terminal/CommandCenter";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030308] text-cyan-50 font-mono selection:bg-cyan-400/30 selection:text-cyan-100 overflow-x-hidden">
      <Background />

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-20">
        <Hero />

        <Projects />

        <MLLab />

        <About />

        <Experience />

        <CommandCenter />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}