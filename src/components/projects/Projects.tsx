import { projects } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 scroll-mt-12"
    >
      <SectionHeader
        number="01"
        title="SELECTED PROJECTS"
        subtitle="ENGINEERING WORK / EXPERIMENTS / BUILDS"
      />

      <div className="grid md:grid-cols-2 gap-5 mt-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}