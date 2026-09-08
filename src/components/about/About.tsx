import Image from "next/image";

import SectionHeader from "../ui/SectionHeader";
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
      <SectionHeader
        number="03"
        title="ABOUT SYSTEM"
        subtitle="PROFILE / STACK / ENGINEERING APPROACH"
      />

      {/* Profile + About */}
      <div className="grid lg:grid-cols-12 gap-10 mt-12">

        {/* ───────── PROFILE IMAGE ───────── */}
        <div className="lg:col-span-4">
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
          </div>
        </div>

        {/* ───────── ABOUT TEXT ───────── */}
        <div className="lg:col-span-8">
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

          {/* Engineering principles */}
          <div className="grid sm:grid-cols-3 gap-3 mt-10">
            <MiniCard
              title="BUILD"
              text="Turn ideas into working systems."
            />

            <MiniCard
              title="MEASURE"
              text="Evaluate results with evidence."
            />

            <MiniCard
              title="ITERATE"
              text="Learn, optimize and improve."
            />
          </div>
        </div>
      </div>

      {/* ───────── TECHNICAL STACK ───────── */}
      <div className="mt-20">
        <div className="text-[10px] tracking-[0.25em] text-cyan-400 mb-6">
          TECHNICAL_STACK
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <SkillPanel
              key={skill.title}
              title={skill.title}
              items={skill.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}