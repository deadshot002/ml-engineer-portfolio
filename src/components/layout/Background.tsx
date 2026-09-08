export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Base */}
      <div className="absolute inset-0 bg-[#02040a]" />

      {/* Ambient cyan light */}
      <div
        className="
          absolute
          -top-[35%]
          left-[15%]
          w-[900px]
          h-[900px]
          rounded-full
          bg-cyan-500/[0.045]
          blur-[180px]
        "
      />

      {/* Ambient purple light */}
      <div
        className="
          absolute
          top-[45%]
          -right-[20%]
          w-[850px]
          h-[850px]
          rounded-full
          bg-purple-600/[0.04]
          blur-[190px]
        "
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34,211,238,0.22) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,0.22) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Secondary smaller grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(148,163,184,0.25) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148,163,184,0.25) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "14px 14px",
        }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "100% 6px",
        }}
      />

      {/* Edge vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_center,
            transparent_35%,
            rgba(0,0,0,0.35)_100%
          )]
        "
      />

      {/* Top/bottom fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-32
          bg-gradient-to-b
          from-[#02040a]
          to-transparent
          opacity-70
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-[#02040a]
          to-transparent
          opacity-70
        "
      />
    </div>
  );
}