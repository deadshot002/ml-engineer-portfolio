import Link from "next/link";
import TerminalWindow from "./TerminalWindow";
import Stat from "../ui/Stat";
import { ArrowRightIcon } from "../ui/icons";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-7rem)] flex items-center py-0">
      <div className="w-full grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* System status */}
          <div className="inline-flex items-center gap-3 px-3 py-2 border border-cyan-400/20 bg-cyan-400/[0.04] text-cyan-400 text-[10px] tracking-[0.25em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>

            SYSTEM ONLINE

            <span className="text-slate-600">/</span>

            AVAILABLE FOR WORK
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-[-0.06em] leading-[0.9] text-white">
            LOKESH
          </h1>

          {/* Role */}
          <div className="mt-5 text-3xl sm:text-4xl md:text-6xl font-black tracking-[-0.04em]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
              ML ENGINEER
            </span>
          </div>

          <div className="mt-2 text-xl sm:text-2xl md:text-4xl font-bold text-slate-600">
            × ELECTRICAL ENGINEER
          </div>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-sm md:text-base leading-8 text-slate-400 border-l border-cyan-400/40 pl-5">
            I build intelligent systems at the intersection of
            <span className="text-cyan-300"> software</span>,
            <span className="text-purple-300"> machine learning</span>,
            and
            <span className="text-fuchsia-300">
              {" "}
              electrical engineering
            </span>
            .
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group flex items-center gap-4 px-6 py-3 bg-cyan-400 text-black text-xs font-black tracking-[0.2em] hover:bg-cyan-300 transition-all"
            >
              VIEW PROJECTS

              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#about"
              className="px-6 py-3 border border-slate-700 text-slate-400 text-xs font-bold tracking-[0.2em] hover:border-cyan-400/50 hover:text-cyan-300 transition-all"
            >
              ABOUT ME
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-14 grid grid-cols-3 max-w-lg border-t border-slate-800 pt-6">
            <Stat value="ML" label="FOCUS" />
            <Stat value="EE" label="DOMAIN" />
            <Stat value="∞" label="BUILD" />
          </div>
        </div>

        {/* RIGHT TERMINAL */}
        <div className="hidden lg:block">
          <TerminalWindow />
        </div>

      </div>
    </section>
  );
}