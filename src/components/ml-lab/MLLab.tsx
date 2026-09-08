import SectionHeader from "../ui/SectionHeader";
import LabCard from "./LabCard";

const labExperiments = [
  {
    title: "MODEL TRAINING",
    description:
      "Experimenting with model architectures, training pipelines, optimization strategies, and evaluation workflows.",
    tags: ["PYTORCH", "TRAINING", "OPTIMIZATION"],
    status: "EXPERIMENT_01",
  },
  {
    title: "COMPUTER VISION",
    description:
      "Exploring image processing, object detection, feature extraction, and real-time computer vision systems.",
    tags: ["OPENCV", "YOLO", "VISION"],
    status: "EXPERIMENT_02",
  },
  {
    title: "DATA PIPELINES",
    description:
      "Building practical data preparation and preprocessing workflows for machine learning applications.",
    tags: ["PYTHON", "PANDAS", "NUMPY"],
    status: "EXPERIMENT_03",
  },
  {
    title: "MODEL INFERENCE",
    description:
      "Testing model deployment, inference performance, and integration of trained models into software systems.",
    tags: ["INFERENCE", "API", "DEPLOYMENT"],
    status: "EXPERIMENT_04",
  },
];

export default function MLLab() {
  return (
    <section
      id="ml-lab"
      className="py-24 scroll-mt-12"
    >
      <SectionHeader
        number="02"
        title="ML LAB"
        subtitle="EXPERIMENTS / RESEARCH / PROTOTYPES"
      />

      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {labExperiments.map((experiment) => (
          <LabCard
            key={experiment.status}
            title={experiment.title}
            description={experiment.description}
            tags={experiment.tags}
            status={experiment.status}
          />
        ))}
      </div>
    </section>
  );
}