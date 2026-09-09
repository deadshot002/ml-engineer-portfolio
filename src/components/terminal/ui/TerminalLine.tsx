import type { TerminalLine as TerminalLineType } from "../core/terminalTypes";

type Props = {
  line: TerminalLineType;
};

export default function TerminalLine({ line }: Props) {
  if (line.type === "command") {
    return (
      <div className="text-emerald-400">
        lokesh@portfolio:~$
        <span className="ml-2 text-slate-300">
          {line.text}
        </span>
      </div>
    );
  }

  if (line.type === "error") {
    return (
      <div className="text-red-400/90">
        <span className="mr-2">✕</span>
        {line.text}
      </div>
    );
  }

  if (line.type === "success") {
    return (
      <div className="text-emerald-400">
        <span className="mr-2">✓</span>
        {line.text}
      </div>
    );
  }

  if (line.type === "system") {
    return (
      <div className="text-slate-600">
        {line.text}
      </div>
    );
  }

  return (
    <div className="text-slate-400 whitespace-pre-wrap">
      {line.text}
    </div>
  );
}