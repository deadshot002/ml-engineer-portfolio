interface SkillPanelProps {
  title: string;
  items: string[];
}

export default function SkillPanel({
  title,
  items,
}: SkillPanelProps) {
  return (
    <div className="border border-slate-800 bg-[#06060d] p-5">
      <div className="text-[10px] tracking-[0.2em] text-cyan-400 mb-4">
        {title}
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-2 py-1 border border-slate-800 text-[9px] text-slate-500"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}