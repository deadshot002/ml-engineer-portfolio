import { projects } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 scroll-mt-12"
    >
      {/* SECTION HEADING */}
      <ScrollReveal y={40}>
        <SectionHeader
          number="01"
          title="SELECTED PROJECTS"
          subtitle="ENGINEERING WORK / EXPERIMENTS / BUILDS"
        />
      </ScrollReveal>

      {/* PROJECT CARDS */}
      <StaggerContainer>
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {projects.map((project) => (
            <StaggerItem key={project.number}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}