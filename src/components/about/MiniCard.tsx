interface MiniCardProps {
  title: string;
  text: string;
}

export default function MiniCard({
  title,
  text,
}: MiniCardProps) {
  return (
    <div className="border border-slate-800 bg-[#06060d] p-5">
      <div className="text-[10px] tracking-[0.2em] text-cyan-400">
        {title}
      </div>

      <div className="mt-4 text-[11px] leading-6 text-slate-600">
        {text}
      </div>
    </div>
  );
}