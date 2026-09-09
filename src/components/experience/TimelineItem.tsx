interface TimelineItemProps {
  period: string;
  title: string;
  company: string;
  description: string;
}

export default function TimelineItem({
  period,
  title,
  company,
  description,
}: TimelineItemProps) {
  return (
    <div
      className="
        group
        relative
        grid
        grid-cols-1
        md:grid-cols-[220px_1fr]
        gap-4
        md:gap-6
        min-h-[220px]
        pb-10
      "
    >
      {/* Timeline line */}
      <div
        className="
          absolute
          left-[6px]
          top-4
          bottom-0
          w-px
          bg-slate-800
          transition-all
          duration-500
          group-hover:bg-cyan-400/40
        "
      />

      {/* Timeline node */}
      <div
        className="
          absolute
          left-[2px]
          top-4
          z-10
          w-[9px]
          h-[9px]
          rounded-full
          border
          border-cyan-400/60
          bg-[#030308]
          shadow-[0_0_10px_rgba(34,211,238,0.15)]
          transition-all
          duration-500
          group-hover:border-cyan-300
          group-hover:bg-cyan-400
          group-hover:scale-125
          group-hover:shadow-[0_0_18px_rgba(34,211,238,0.7)]
        "
      />

      {/* Period */}
      <div
        className="
          relative
          pl-8
          md:pl-0
          pt-0
          text-[10px]
          tracking-[0.2em]
          text-cyan-400
          transition-all
          duration-300
          group-hover:text-cyan-300
        "
      >
        <span className="opacity-70">[</span>
        {period}
        <span className="opacity-70">]</span>
      </div>

      {/* Content */}
      <div
        className="
          relative
          pl-8
          transition-transform
          duration-500
          group-hover:translate-x-1
        "
      >
        {/* Company */}
        <div
          className="
            flex
            items-center
            gap-2
            text-[9px]
            tracking-[0.25em]
            text-slate-600
            transition-colors
            duration-300
            group-hover:text-slate-400
          "
        >
          <span className="text-cyan-400/40">›</span>
          {company}
        </div>

        {/* Title */}
        <h3
          className="
            mt-4
            text-xl
            md:text-2xl
            font-bold
            tracking-[0.08em]
            text-white
            transition-all
            duration-300
            group-hover:text-cyan-100
            group-hover:text-shadow-[0_0_12px_rgba(34,211,238,0.3)]
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-4xl
            text-sm
            md:text-base
            leading-8
            text-slate-500
            transition-colors
            duration-300
            group-hover:text-slate-400
          "
        >
          {description}
        </p>

        {/* System metadata */}
        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-x-5
            gap-y-2
            text-[8px]
            tracking-[0.2em]
            text-slate-700
            transition-colors
            duration-300
            group-hover:text-slate-600
          "
        >
          <span>STATUS: COMPLETED</span>
          <span>MODE: ONSITE</span>
          <span>TYPE: ENGINEERING</span>
        </div>
      </div>

      {/* Bottom scan line */}
      <div
        className="
          absolute
          left-8
          right-0
          bottom-0
          h-px
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-cyan-400/50
          via-purple-400/20
          to-transparent
          transition-transform
          duration-700
          group-hover:scale-x-100
        "
      />

      {/* Right HUD indicator */}
      <div
        className="
          absolute
          right-0
          top-0
          hidden
          md:block
          text-[8px]
          tracking-[0.2em]
          text-slate-800
          transition-colors
          duration-300
          group-hover:text-cyan-400/40
        "
      >
        EXP_NODE
      </div>
    </div>
  );
}