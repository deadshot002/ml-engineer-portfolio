export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: "cyan" | "purple" | "fuchsia" | "yellow";
  github: string;
  link: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "ML / AI PROJECT",
    category: "MACHINE LEARNING",
    description:
      "Machine learning system focused on building intelligent, data-driven solutions with practical engineering constraints.",
    tags: ["PYTHON", "PYTORCH", "SCIKIT-LEARN"],
    color: "cyan",
    github: "#",
    link: "https://deadshot002.github.io/Projects-ML-Lab/",
  },

  {
    number: "02",
    title: "COMPUTER VISION",
    category: "DEEP LEARNING",
    description:
      "Computer vision pipeline for image processing, object detection, model evaluation, and real-time inference.",
    tags: ["PYTHON", "OPENCV", "YOLO", "PYTORCH"],
    color: "purple",
    github: "#",
    link: "https://deadshot002.github.io/Projects-ML-Lab/",
  },

  {
    number: "03",
    title: "ELECTRICAL SYSTEM",
    category: "ELECTRICAL ENGINEERING",
    description:
      "Engineering project involving electrical systems, simulation, analysis, control, and system-level problem solving.",
    tags: ["MATLAB", "SIMULINK", "CONTROL", "POWER"],
    color: "fuchsia",
    github: "#",
    link: "https://deadshot002.github.io/Projects-ML-Lab/",
  },

  {
    number: "04",
    title: "FULL STACK SYSTEM",
    category: "SOFTWARE ENGINEERING",
    description:
      "Modern web application designed around scalable architecture, responsive interfaces, APIs, and automation.",
    tags: ["REACT", "NEXT.JS", "TYPESCRIPT", "API"],
    color: "yellow",
    github: "#",
    link: "https://deadshot002.github.io/Projects-ML-Lab/",
  },
];