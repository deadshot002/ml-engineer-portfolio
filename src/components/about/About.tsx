import Image from "next/image";

import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";
import SkillPanel from "./SkillPanel";
import MiniCard from "./MiniCard";

import { skills } from "../../data/skills";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/gfbs3-portfolio-demo"
    : "";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 border-t border-slate-800/70 scroll-mt-12"
    >
      {/* SECTION HEADER */}
      <ScrollReveal y={40}>
        <SectionHeader
          number="03"
          title="ABOUT SYSTEM"
          subtitle="PROFILE / STACK / ENGINEERING APPROACH"
        />
      </ScrollReveal>

      {/* Profile + About */}
      <div className="grid lg:grid-cols-12 gap-10 mt-12">

        {/* ───────── PROFILE IMAGE ───────── */}
        <div className="lg:col-span-4">
          <ScrollReveal
            y={0}
            delay={0.05}
          >
            <div className="relative aspect-[4/5] border border-slate-800 bg-[#07070d] overflow-hidden group">

              {/* Dark gradient */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute top-4 left-4 z-20 text-[9px] tracking-widest text-cyan-400">
                USER_PROFILE // 001
              </div>

              {/* Profile image */}
              <Image
                src={`${basePath}/me.png`}
                alt="Lokesh profile"
                fill
                priority
                className="object-cover opacity-50 grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Profile information */}
              <div className="absolute bottom-5 left-5 z-20">
                <div className="text-xl font-bold text-white">
                  LOKESH
                </div>

                <div className="text-[10px] text-cyan-400 tracking-widest mt-1">
                  ML ENGINEER × EE
                </div>
              </div>

              {/* HUD corners */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-cyan-400/60 z-20" />

              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-cyan-400/60 z-20" />
            </div>
          </ScrollReveal>
        </div>

        {/* ───────── ABOUT TEXT ───────── */}
        <div className="lg:col-span-8">
          <ScrollReveal
            y={0}
            delay={0.12}
          >
            <div className="max-w-3xl space-y-7 text-sm md:text-base leading-8 text-slate-400">

              <p>
                I am an engineering-focused developer interested in
                <span className="text-cyan-300">
                  {" "}machine learning
                </span>
                ,
                <span className="text-purple-300">
                  {" "}artificial intelligence
                </span>
                {" "}and
                <span className="text-fuchsia-300">
                  {" "}electrical engineering
                </span>
                .
              </p>

              <p>
                My goal is to build systems that are not only technically
                interesting, but also useful, measurable and engineered for
                real-world constraints.
              </p>

              <p>
                This portfolio is designed as an engineering interface:
                projects, experiments, technical notes and the systems I
                build.
              </p>
            </div>
          </ScrollReveal>

          {/* Engineering principles */}
          <StaggerContainer>
            <div className="grid sm:grid-cols-3 gap-3 mt-10">
              <StaggerItem>
                <MiniCard
                  title="BUILD"
                  text="Turn ideas into working systems."
                />
              </StaggerItem>

              <StaggerItem>
                <MiniCard
                  title="MEASURE"
                  text="Evaluate results with evidence."
                />
              </StaggerItem>

              <StaggerItem>
                <MiniCard
                  title="ITERATE"
                  text="Learn, optimize and improve."
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </div>

      {/* ───────── TECHNICAL STACK ───────── */}
      <ScrollReveal y={40} delay={0.05}>
        <div className="mt-20">

          <div className="text-[10px] tracking-[0.25em] text-cyan-400 mb-6">
            TECHNICAL_STACK
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <StaggerItem key={skill.title}>
                  <SkillPanel
                    title={skill.title}
                    items={skill.items}
                  />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

        </div>
      </ScrollReveal>
    </section>
  );
}