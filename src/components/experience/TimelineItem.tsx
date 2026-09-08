interface TimelineItemProps {
  period: string;
  title: string;
  company: string;
  description: string;
}

export default function TimelineItem({
  period,
  title,
  company,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative grid grid-cols-[220px_1fr] gap-6 min-h-[220px]">
      

      {/* Timeline line */}
      <div className="absolute left-[6px] top-4 bottom-0 w-px bg-slate-800" />

      {/* Period */}
      <div className="text-[10px] tracking-[0.2em] text-cyan-400">
        {period}
      </div>

      {/* Content */}
      <div className="pl-8">
        <div className="text-[9px] tracking-[0.25em] text-slate-600">
          {company}
        </div>

        <h3 className="mt-4 text-xl md:text-2xl font-bold tracking-[0.08em] text-white">
          {title}
        </h3>

        <p className="mt-6 max-w-4xl text-sm md:text-base leading-8 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}