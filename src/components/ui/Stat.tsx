interface StatProps {
  value: string;
  label: string;
}

export default function Stat({ value, label }: StatProps) {
  return (
    <div className="border-r border-slate-800 last:border-r-0">
      <div className="text-lg md:text-xl font-bold text-cyan-300">
        {value}
      </div>

      <div className="mt-1 text-[8px] tracking-[0.2em] text-slate-600">
        {label}
      </div>
    </div>
  );
}