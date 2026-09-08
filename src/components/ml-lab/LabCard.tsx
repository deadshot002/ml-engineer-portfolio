interface LabCardProps {
  title: string;
  description: string;
  tags: string[];
  status: string;
}

export default function LabCard({
  title,
  description,
  tags,
  status,
}: LabCardProps) {
  return (
    <div className="group relative border border-slate-800 bg-[#06060d]/80 p-6 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.06)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[9px] tracking-[0.25em] text-slate-600">
            {status}
          </div>

          <h3 className="mt-2 text-lg font-bold tracking-wide text-white transition-colors group-hover:text-cyan-300">
            {title}
          </h3>
        </div>

        <div className="h-2 w-2 shrink-0 rounded-full bg-cyan-400/70 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-500">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-slate-800 px-2 py-1 text-[8px] tracking-[0.15em] text-slate-600 transition-colors group-hover:border-slate-700 group-hover:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />
    </div>
  );
}