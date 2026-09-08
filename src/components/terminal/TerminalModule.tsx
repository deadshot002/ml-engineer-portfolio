interface TerminalModuleProps {
  text: string;
}

export default function TerminalModule({
  text,
}: TerminalModuleProps) {
  return (
    <div className="border border-slate-800 px-3 py-2 text-slate-600 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors">
      <span className="text-cyan-500">›</span> {text}
    </div>
  );
}