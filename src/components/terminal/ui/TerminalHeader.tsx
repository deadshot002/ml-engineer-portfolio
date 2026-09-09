type Props = {
  title?: string;
};

export default function TerminalHeader({
  title = "lokesh@portfolio: ~",
}: Props) {
  return (
    <div className="relative h-11 flex items-center px-4 border-b border-slate-800 bg-[#080b11]">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <span className="text-[11px] text-slate-500 font-mono tracking-wide">
          {title}
        </span>
      </div>
    </div>
  );
}