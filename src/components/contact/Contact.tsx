import SocialLink from "./SocialLink";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 border-t border-slate-800/70 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Protocol */}
        <div className="text-[10px] tracking-[0.3em] text-cyan-400 mb-7">
          CONNECTION_PROTOCOL
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-7xl font-black tracking-[-0.05em] text-white">
          LET&apos;S BUILD
          <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500">
            SOMETHING
          </span>
        </h2>

        {/* Description */}
        <p className="mt-7 text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-7">
          Interested in machine learning, AI, software engineering or
          electrical engineering? Let&apos;s connect and build something
          useful.
        </p>

        {/* Social links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <SocialLink
            href="https://github.com"
            label="GITHUB"
          />

          <SocialLink
            href="https://linkedin.com"
            label="LINKEDIN"
          />

          <SocialLink
            href="mailto:your@email.com"
            label="EMAIL"
          />
        </div>

      </div>
    </section>
  );
}