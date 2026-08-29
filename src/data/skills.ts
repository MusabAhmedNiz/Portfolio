export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js / Express", "Go", "PostgreSQL", "Redis"],
  },
  {
    title: "Tools",
    skills: ["Docker / Kubernetes", "AWS / GCP", "Git / GitHub Actions", "Linux / Bash"],
  },
];
