import Link from "next/link";
import { ArrowUpRightIcon } from "../ui/icons";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const styles = {
    cyan: {
      border: "group-hover:border-cyan-400/40",
      glow: "group-hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]",
      title: "group-hover:text-cyan-300",
      number: "text-cyan-400",
    },

    purple: {
      border: "group-hover:border-purple-400/40",
      glow: "group-hover:shadow-[0_0_35px_rgba(168,85,247,0.08)]",
      title: "group-hover:text-purple-300",
      number: "text-purple-400",
    },

    fuchsia: {
      border: "group-hover:border-fuchsia-400/40",
      glow: "group-hover:shadow-[0_0_35px_rgba(232,121,249,0.08)]",
      title: "group-hover:text-fuchsia-300",
      number: "text-fuchsia-400",
    },

    yellow: {
      border: "group-hover:border-yellow-400/40",
      glow: "group-hover:shadow-[0_0_35px_rgba(250,204,21,0.08)]",
      title: "group-hover:text-yellow-300",
      number: "text-yellow-400",
    },
  };

  const style = styles[project.color];

  return (
    <Link
      href={project.github}
      className={`group relative block p-6 md:p-7 border border-slate-800 bg-[#06060d]/90 transition-all duration-500 ${style.border} ${style.glow}`}
    >
      {/* Number */}
      <div className="flex items-start justify-between">
        <span className={`text-xs font-bold ${style.number}`}>
          {project.number}
        </span>

        <ArrowUpRightIcon
          className={`w-5 h-5 text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${style.title}`}
        />
      </div>

      <div className="mt-8">
        <div className="text-[9px] tracking-[0.25em] text-slate-600">
          {project.category}
        </div>

        <h3
          className={`mt-2 text-xl md:text-2xl font-bold tracking-wide text-white transition-colors ${style.title}`}
        >
          {project.title}
        </h3>

        <p className="mt-5 text-sm leading-7 text-slate-500">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-7 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 border border-slate-800 text-[8px] tracking-[0.15em] text-slate-600 group-hover:border-slate-700 group-hover:text-slate-400 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 group-hover:w-full transition-all duration-700" />
    </Link>
  );
}