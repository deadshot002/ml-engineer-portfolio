"use client";

import SectionHeader from "../ui/SectionHeader";
import { Terminal } from "../terminal";
import type { TerminalCommand } from "../terminal";

const navigationCommands: Record<string, string> = {
  home: "home",
  projects: "projects",
  ml: "ml-lab",
  "ml-lab": "ml-lab",
  about: "about",
  experience: "experience",
  terminal: "command-center",
  contact: "contact",
};

const aliases: Record<string, string> = {
  h: "home",
  p: "projects",
  m: "ml",
  lab: "ml",
  a: "about",
  e: "experience",
  t: "terminal",
  c: "contact",
};

const portfolioCommands: TerminalCommand[] = [
  {
    name: "help",
    description: "Show available commands",

    execute: () => ({
      output: [
        "Available commands:",
        "",
        "  home        Navigate home",
        "  projects    View projects",
        "  ml          Open ML Lab",
        "  about       About me",
        "  experience  Experience",
        "  terminal    Command center",
        "  contact     Contact",
        "  whoami      Show user information",
        "  ls          List sections",
        "  pwd         Show current path",
        "  clear       Clear terminal",
      ],
    }),
  },

  {
    name: "whoami",

    execute: () => ({
      output: [
        "lokesh",
        "ML Engineer / Electrical Engineer",
      ],
    }),
  },

  {
    name: "pwd",

    execute: () => ({
      output: "/home/lokesh/portfolio",
    }),
  },

  {
    name: "ls",

    execute: () => ({
      output:
        "about/   projects/   ml-lab/   experience/   command-center/   contact/",
    }),
  },

  // Navigation commands
  ...Object.entries(navigationCommands).map(
    ([name, sectionId]) => ({
      name,

      aliases: Object.entries(aliases)
        .filter(
          ([, target]) => target === name
        )
        .map(([alias]) => alias),

      execute: () => {
        const element =
          document.getElementById(sectionId);

        if (!element) {
          return {
            type: "error" as const,
            output: `bash: ${sectionId}: section not found`,
          };
        }

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return {
          type: "success" as const,
          output: `→ cd ${sectionId}`,
        };
      },
    })
  ),
];

export default function CommandCenter() {
  return (
    <section
      id="command-center"
      className="
        py-24
        border-t
        border-slate-800/70
        scroll-mt-24
      "
    >
      <SectionHeader
        number="05"
        title="COMMAND CENTER"
        subtitle="INTERACTIVE TERMINAL / NAVIGATION"
      />

      <div className="mt-12 max-w-5xl mx-auto">
        <Terminal
          title="lokesh@portfolio: ~"
          username="lokesh"
          hostname="portfolio"
          path="~"
          commands={portfolioCommands}
        />
      </div>

      <div
        className="
          max-w-5xl
          mx-auto
          mt-3
          flex
          justify-between
          text-[9px]
          font-mono
          text-slate-700
          uppercase
          tracking-widest
        "
      >
        <span>
          bash-compatible interface
        </span>

        <span>
          interactive navigation enabled
        </span>
      </div>
    </section>
  );
}