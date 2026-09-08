import SectionHeader from "../ui/SectionHeader";
import TimelineItem from "./TimelineItem";

const experience = [
  {
    period: "2024 — PRESENT",
    title: "ML / SOFTWARE ENGINEERING",
    company: "INDEPENDENT / PROJECT WORK",
    description:
      "Building machine learning and software systems while developing practical experience across AI, computer vision, full-stack development, and engineering workflows.",
  },
  {
    period: "ENGINEERING",
    title: "ELECTRICAL ENGINEERING",
    company: "ACADEMIC / TECHNICAL WORK",
    description:
      "Working with electrical systems, simulation, control systems, and engineering analysis while connecting hardware concepts with software and intelligent systems.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 border-t border-slate-800/70 scroll-mt-20"
    >
      <SectionHeader
        number="04"
        title="EXPERIENCE"
        subtitle="ENGINEERING / DEVELOPMENT / CONTINUOUS LEARNING"
      />

     <div className="mt-14 space-y-2">
  {experience.map((item) => (
    <TimelineItem
      key={`${item.period}-${item.title}`}
      period={item.period}
      title={item.title}
      company={item.company}
      description={item.description}
    />
  ))}
</div>
    </section>
  );
}