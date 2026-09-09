interface LabCardProps {
  title: string;
  description: string;
  tags: string[];
  status: string;
}

export default function LabCard({
  title,
  description,
  tags,
  status,
}: LabCardProps) {
  return (
    <div
      className="
        group
        relative
        h-full
        overflow-hidden
        border
        border-slate-800
        bg-[#06060d]/80
        p-6
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]
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
      <div className="flex items-start justify-between gap-4">
        <div>
          {/* Status */}
          <div
            className="
              text-[9px]
              tracking-[0.25em]
              text-slate-600
              transition-colors
              duration-300
              group-hover:text-cyan-400/70
            "
          >
            {status}
          </div>

          {/* Title */}
          <h3
            className="
              mt-2
              text-lg
              font-bold
              tracking-wide
              text-white
              transition-colors
              duration-300
              group-hover:text-cyan-300
            "
          >
            {title}
          </h3>
        </div>

        {/* Status indicator */}
        <div
          className="
            relative
            h-2
            w-2
            shrink-0
            rounded-full
            bg-cyan-400/70
            shadow-[0_0_10px_rgba(34,211,238,0.5)]
            transition-all
            duration-300
            group-hover:scale-125
            group-hover:bg-cyan-300
            group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]
          "
        />
      </div>

      {/* Description */}
      <p
        className="
          mt-5
          text-sm
          leading-7
          text-slate-500
          transition-colors
          duration-300
          group-hover:text-slate-400
        "
      >
        {description}
      </p>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              relative
              overflow-hidden
              border
              border-slate-800
              px-2
              py-1
              text-[8px]
              tracking-[0.15em]
              text-slate-600
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:text-cyan-300
              hover:bg-cyan-400/[0.03]
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom scan line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-cyan-400
          transition-all
          duration-700
          group-hover:w-full
        "
      />

      {/* HUD corner */}
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