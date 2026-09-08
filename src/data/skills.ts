export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "MACHINE LEARNING",
    items: [
      "Python",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },

  {
    title: "COMPUTER VISION",
    items: [
      "OpenCV",
      "YOLO",
      "Image Processing",
      "Deep Learning",
    ],
  },

  {
    title: "SOFTWARE",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Git",
    ],
  },

  {
    title: "ELECTRICAL",
    items: [
      "MATLAB",
      "Simulink",
      "Control Systems",
      "Power Systems",
    ],
  },
];