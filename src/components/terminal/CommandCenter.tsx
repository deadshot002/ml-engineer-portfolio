import SectionHeader from "../ui/SectionHeader";
import { terminalCommands } from "../../data/terminal";

export default function CommandCenter() {
  return (
    <section
      id="command-center"
      className="py-24 border-t border-slate-800/70 scroll-mt-20"
    >
      <SectionHeader
        number="05"
        title="COMMAND CENTER"
        subtitle="INTERACTIVE TERMINAL / NAVIGATION"
      />

      <div className="mt-12 max-w-4xl mx-auto border border-slate-800 bg-[#05050a] shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />

          <span className="ml-3 text-[9px] text-slate-600 tracking-widest">
            LOKESH_OS_TERMINAL
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-6 text-xs leading-8">
          <div className="text-emerald-400">
            lokesh@portfolio:~$
            <span className="text-slate-300 ml-2">
              help
            </span>
          </div>

          <div className="mt-3 grid sm:grid-cols-2 gap-x-8 text-slate-500">
            {terminalCommands.map((command) => (
              <div
                key={command}
                className="hover:text-cyan-400 transition-colors"
              >
                <span className="text-cyan-500">→</span>{" "}
                {command}
              </div>
            ))}
          </div>

          <div className="mt-6 text-slate-700">
            ───────────────────────────────────────
          </div>

          <div className="text-slate-500">
            Type a command to navigate the system.
          </div>
        </div>
      </div>
    </section>
  );
}