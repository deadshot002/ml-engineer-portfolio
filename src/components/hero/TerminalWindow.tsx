"use client";

import { Terminal } from "../terminal";
import type { TerminalCommand } from "../terminal";
import { useState } from "react";

const heroCommands: TerminalCommand[] = [
  {
    name: "whoami",
    execute: () => ({
      type: "success",
      output: "root 1000 LOKESH",
    }),
  },

  {
    name: "role",
    execute: () => ({
      output: "ML ENGINEER × ELECTRICAL ENGINEER",
    }),
  },

  {
    name: "focus",
    execute: () => ({
      output: "AI / ML / SOFTWARE / EE",
    }),
  },

  {
    name: "status",
    execute: () => ({
      type: "success",
      output: "OPEN_TO_OPPORTUNITIES",
    }),
  },

  {
    name: "help",
    execute: () => ({
      output: [
        "Available commands:",
        "",
        "  whoami    Identity",
        "  role      Current role",
        "  focus     Technical focus",
        "  status    Current status",
        "  help      Show commands",
      ],
    }),
  },
];

const startupLines = [
  "[ OK ] Initializing LOKESH_OS...",
  "[ OK ] Loading machine-learning modules",
  "[ OK ] Loading computer-vision modules",
  "[ OK ] Loading software-engineering modules",
  "[ OK ] Loading electrical-systems modules",
  "",
  "System ready.",
  "Session: lokesh@lokesh-os",
];

export default function TerminalWindow() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Outer glow */}
      <div className="absolute -inset-5 bg-cyan-500/5 blur-3xl" />

      <div className="relative">

        {/* ================================= */}
        {/* MOBILE TOGGLE */}
        {/* ================================= */}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="
            lg:hidden
            w-full
            mb-3
            flex
            items-center
            justify-between
            border
            border-cyan-400/20
            bg-[#02040a]/90
            px-4
            py-3
            text-[9px]
            font-mono
            font-bold
            tracking-[0.18em]
            text-cyan-300
            transition-all
            duration-300
            hover:border-cyan-400/50
          "
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            SYSTEM TERMINAL
          </span>

          <span
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {/* ================================= */}
        {/* TERMINAL + MODULES */}
        {/* ================================= */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            lg:max-h-none
            lg:opacity-100
            ${
              open
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
            }
          `}
        >

          {/* ================================= */}
          {/* TERMINAL */}
          {/* ================================= */}

          <Terminal
            title="lokesh@lokesh-os: ~"
            username="lokesh"
            hostname="lokesh-os"
            path="~"
            commands={heroCommands}
            variant="compact"
            showBoot={false}
            showHint={false}
            startupLines={startupLines}
            animateStartup={true}
            startupDelay={1200}
          />

          {/* ================================= */}
          {/* SYSTEM MODULES */}
          {/* ================================= */}

          <div className="mt-5 border-t border-slate-800 pt-5">
            <div className="text-[10px] font-mono tracking-[0.2em] text-slate-600">
              SYSTEM MODULES
            </div>

            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-[10px] font-mono">

              <div className="group flex items-center gap-2 text-slate-500 transition-colors hover:text-cyan-400">
                <span className="text-cyan-500/60 group-hover:text-cyan-400">
                  →
                </span>
                <span>machine-learning</span>
              </div>

              <div className="group flex items-center gap-2 text-slate-500 transition-colors hover:text-cyan-400">
                <span className="text-cyan-500/60 group-hover:text-cyan-400">
                  →
                </span>
                <span>computer-vision</span>
              </div>

              <div className="group flex items-center gap-2 text-slate-500 transition-colors hover:text-cyan-400">
                <span className="text-cyan-500/60 group-hover:text-cyan-400">
                  →
                </span>
                <span>software-engineering</span>
              </div>

              <div className="group flex items-center gap-2 text-slate-500 transition-colors hover:text-cyan-400">
                <span className="text-cyan-500/60 group-hover:text-cyan-400">
                  →
                </span>
                <span>electrical-systems</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}