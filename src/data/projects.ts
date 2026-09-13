export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "LearnHub",
    description:
      "A modern full-stack learning management system and course platform featuring authentication, course enrollment, media hosting, and payment processing.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Polar",
      "Better-Auth",
      "Tailwind CSS",
    ],
    liveUrl: "https://learnhub-eight-phi.vercel.app/",
    repoUrl: "https://github.com/MusabAhmedNiz/learnhub",
  },
];
