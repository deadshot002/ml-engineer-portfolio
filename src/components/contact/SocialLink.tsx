import { ArrowUpRightIcon } from "../ui/icons";

interface SocialLinkProps {
  href: string;
  label: string;
}

export default function SocialLink({
  href,
  label,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-2 px-4 py-2 border border-slate-800 text-[9px] tracking-[0.2em] text-slate-500 hover:border-cyan-400/30 hover:text-cyan-300 transition-all"
    >
      {label}

      <ArrowUpRightIcon
        className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}