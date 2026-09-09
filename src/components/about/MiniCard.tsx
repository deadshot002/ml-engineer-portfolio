interface MiniCardProps {
  title: string;
  text: string;
}

export default function MiniCard({
  title,
  text,
}: MiniCardProps) {
  return (
    <div
      className="
        group
        relative
        h-full
        overflow-hidden
        border
        border-slate-800
        bg-[#06060d]
        p-5
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:shadow-[0_0_25px_rgba(34,211,238,0.06)]
      "
    >
      {/* Top HUD line */}
      <div
        className="
          absolute
          top-0
          left-0
          h-px
          w-0
          bg-cyan-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Title */}
      <div
        className="
          text-[10px]
          tracking-[0.2em]
          text-cyan-400
          transition-colors
          duration-300
          group-hover:text-cyan-300
        "
      >
        {title}
      </div>

      {/* Description */}
      <div
        className="
          mt-4
          text-[11px]
          leading-6
          text-slate-600
          transition-colors
          duration-300
          group-hover:text-slate-400
        "
      >
        {text}
      </div>

      {/* Bottom indicator */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-2
          w-2
          border-b
          border-r
          border-cyan-400/50
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </div>
  );
}