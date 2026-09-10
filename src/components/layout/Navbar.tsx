"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ML LAB", href: "#ml-lab" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "TERMINAL", href: "#command-center" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[#02040a]/80 backdrop-blur-xl border-b border-cyan-400/[0.08]" />

      <nav className="relative max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative w-9 h-9 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/70 transition-colors">
            <span className="text-sm font-black text-cyan-300">
              L
            </span>

            <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-cyan-300" />

            <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-cyan-300" />
          </div>

          <div className="hidden sm:block">
            <div className="text-[11px] font-bold tracking-[0.2em] text-white">
              LOKESH
            </div>

            <div className="text-[7px] tracking-[0.25em] text-slate-600 mt-0.5">
              ENGINEERING SYSTEM
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative px-3 py-2 text-[8px] tracking-[0.18em] text-slate-500 hover:text-cyan-300 transition-colors"
            >
              <span className="text-slate-700 mr-1">
                {String(index + 1).padStart(2, "0")}
              </span>

              {item.label}

              <span className="absolute bottom-0 left-3 right-3 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>

        {/* Status */}

        <div className="hidden md:flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          <span className="text-[8px] tracking-[0.2em] text-slate-500">
            OPEN_TO_WORK
          </span>
        </div>

        {/* Mobile menu button */}

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-9 h-9 border border-slate-800 flex flex-col items-center justify-center gap-1.5 hover:border-cyan-400/40 transition-colors"
        >
          <span
            className={`w-4 h-px bg-cyan-400 transition-transform ${
              menuOpen
                ? "translate-y-[4px] rotate-45"
                : ""
            }`}
          />

          <span
            className={`w-4 h-px bg-cyan-400 transition-opacity ${
              menuOpen
                ? "opacity-0"
                : ""
            }`}
          />

          <span
            className={`w-4 h-px bg-cyan-400 transition-transform ${
              menuOpen
                ? "-translate-y-[4px] -rotate-45"
                : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile navigation */}

      <div
        className={`relative lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-b border-cyan-400/[0.08] bg-[#02040a]/95 backdrop-blur-xl px-5 py-4">

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border border-slate-800 px-3 py-3 text-[8px] tracking-[0.18em] text-slate-500 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors"
              >
                <span className="text-cyan-500 mr-2">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-[8px] tracking-[0.2em] text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

            SYSTEM ONLINE // OPEN_TO_WORK
          </div>

        </div>
      </div>
    </header>
  );
}