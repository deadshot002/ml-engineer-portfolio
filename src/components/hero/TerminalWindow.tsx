import TerminalLine from "../terminal/TerminalLine";
import TerminalModule from "../terminal/TerminalModule";

export default function TerminalWindow() {
  return (
    <div className="relative">
      {/* Outer glow */}
      <div className="absolute -inset-5 bg-cyan-500/5 blur-3xl" />

      <div className="relative border border-cyan-400/20 bg-[#05050b]/90 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
        
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-cyan-400/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />

          <span className="ml-3 text-[9px] tracking-widest text-slate-600">
            lokesh@lokesh-os
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-6 text-[11px] leading-8">

          <TerminalLine
            command="whoami"
            result="LOKESH"
          />

          <TerminalLine
            command="role"
            result="ML ENGINEER × ELECTRICAL ENGINEER"
          />

          <TerminalLine
            command="focus"
            result="AI / ML / SOFTWARE / EE"
          />

          <TerminalLine
            command="status"
            result="OPEN_TO_OPPORTUNITIES"
          />

          {/* Modules */}
          <div className="mt-5 border-t border-slate-800 pt-5 text-slate-600">
            SYSTEM MODULES
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2 text-[10px]">
            <TerminalModule text="machine-learning" />
            <TerminalModule text="computer-vision" />
            <TerminalModule text="software-engineering" />
            <TerminalModule text="electrical-systems" />
          </div>

          {/* Cursor */}
          <div className="mt-6 text-emerald-400">
            lokesh@lokesh-os:~$

            <span className="inline-block ml-2 w-2 h-4 bg-cyan-400 animate-pulse align-middle" />
          </div>

        </div>
      </div>
    </div>
  );
}