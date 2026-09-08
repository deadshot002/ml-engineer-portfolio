import Link from "next/link";

const footerLinks = [
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "TERMINAL", href: "#command-center" },
  { label: "CONTACT", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyan-400/[0.08]">
      {/* Top system line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Main footer */}
        <div className="py-14 grid md:grid-cols-[1.5fr_1fr_1fr] gap-12">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 border border-cyan-400/30 flex items-center justify-center">
                <span className="text-sm font-black text-cyan-300">L</span>

                <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-cyan-300" />
                <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-cyan-300" />
              </div>

              <div>
                <div className="text-sm font-bold tracking-[0.2em] text-white">
                  LOKESH
                </div>
                <div className="text-[7px] tracking-[0.25em] text-slate-600 mt-1">
                  ENGINEERING SYSTEM
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-md text-xs leading-7 text-slate-600">
              Machine learning, software engineering and electrical systems —
              building practical solutions through experimentation and
              continuous iteration.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[9px] tracking-[0.25em] text-cyan-400 mb-5">
              NAVIGATION
            </div>

            <div className="space-y-3">
              {footerLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 text-[9px] tracking-[0.15em] text-slate-600 hover:text-cyan-300 transition-colors"
                >
                  <span className="text-slate-800 group-hover:text-cyan-500 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* System */}
          <div>
            <div className="text-[9px] tracking-[0.25em] text-cyan-400 mb-5">
              SYSTEM STATUS
            </div>

            <div className="border border-slate-800 bg-[#05050a] p-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[9px] tracking-[0.15em] text-emerald-400">
                  SYSTEM ONLINE
                </span>
              </div>

              <div className="mt-4 space-y-2 text-[8px] tracking-[0.12em] text-slate-600">
                <div className="flex justify-between">
                  <span>STATUS</span>
                  <span className="text-slate-400">ACTIVE</span>
                </div>

                <div className="flex justify-between">
                  <span>MODE</span>
                  <span className="text-slate-400">OPEN_TO_WORK</span>
                </div>

                <div className="flex justify-between">
                  <span>STACK</span>
                  <span className="text-slate-400">AI × WEB × EE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-[8px] tracking-[0.2em] text-slate-700">
            © {new Date().getFullYear()} LOKESH // ALL SYSTEMS OPERATIONAL
          </div>

          <div className="flex items-center gap-4 text-[8px] tracking-[0.15em] text-slate-700">
            <span>BUILT WITH NEXT.JS</span>
            <span className="text-cyan-500/40">×</span>
            <span>REACT</span>
            <span className="text-cyan-500/40">×</span>
            <span>TYPESCRIPT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}