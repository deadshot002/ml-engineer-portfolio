interface TerminalLineProps {
  command: string;
  result: string;
}

export default function TerminalLine({
  command,
  result,
}: TerminalLineProps) {
  return (
    <div>
      <div>
        <span className="text-emerald-400">lokesh@os</span>
        <span className="text-slate-700">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-slate-700">$</span>{" "}
        <span className="text-slate-300">{command}</span>
      </div>

      <div className="pl-4 text-cyan-400/80">
        {result}
      </div>
    </div>
  );
}