import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";
import TimelineItem from "./TimelineItem";

const experience = [
  {
    period: "MAY 2025 — JUL 2025",
    title: "ENGINEERING INTERN",
    company: "POWER GRID CORPORATION OF INDIA LIMITED",
    description:
      "Completed an onsite engineering internship with Power Grid Corporation of India Limited, gaining practical exposure to high-voltage power transmission systems, substations, grid management, and electrical protection systems.",
  },
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
    company: "NIT Silchar / TECHNICAL WORK",
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
      {/* SECTION HEADER */}
      <ScrollReveal y={40}>
        <SectionHeader
          number="04"
          title="EXPERIENCE"
          subtitle="ENGINEERING / DEVELOPMENT / CONTINUOUS LEARNING"
        />
      </ScrollReveal>

      {/* TIMELINE */}
      <StaggerContainer>
        <div className="mt-14 space-y-2">
          {experience.map((item) => (
            <StaggerItem key={`${item.period}-${item.title}`}>
              <TimelineItem
                period={item.period}
                title={item.title}
                company={item.company}
                description={item.description}
              />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}