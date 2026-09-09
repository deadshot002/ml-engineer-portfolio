interface SkillPanelProps {
  title: string;
  items: string[];
}

export default function SkillPanel({
  title,
  items,
}: SkillPanelProps) {
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
        hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]
      "
    >
      {/* Top scan line */}
      <div
        className="
          absolute
          top-0
          left-0
          h-px
          w-0
          bg-cyan-400
          transition-all
          duration-700
          group-hover:w-full
        "
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
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

        <div
          className="
            text-[8px]
            tracking-widest
            text-slate-700
            transition-colors
            duration-300
            group-hover:text-cyan-400/60
          "
        >
          [{items.length.toString().padStart(2, "0")}]
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="
              group/skill
              relative
              px-2
              py-1
              border
              border-slate-800
              text-[9px]
              text-slate-500
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:text-cyan-300
              hover:bg-cyan-400/[0.03]
            "
          >
            {item}

            {/* Tiny indicator */}
            <span
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-cyan-400
                transition-all
                duration-300
                group-hover/skill:w-full
              "
            />
          </span>
        ))}
      </div>

      {/* Bottom HUD corner */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-3
          w-3
          border-b
          border-r
          border-cyan-400/40
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </div>
  );
}