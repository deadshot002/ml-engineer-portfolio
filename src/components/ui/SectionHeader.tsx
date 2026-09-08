interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({
  number,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-slate-800 pb-5">
      <div className="flex items-center gap-4">
        <span className="text-[10px] text-cyan-500/60">
          {number}
        </span>

        <h2 className="text-xl md:text-2xl font-bold tracking-[0.08em] text-white">
          {title}
        </h2>
      </div>

      <span className="text-[9px] tracking-[0.2em] text-slate-600">
        {subtitle}
      </span>
    </div>
  );
}