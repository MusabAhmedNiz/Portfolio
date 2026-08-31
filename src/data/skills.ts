export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "TanStack Form"],
  },
  {
    title: "Backend",
    skills: ["Prisma", "Better Auth", "Polar / Stripe", "RBAC"],
  },
  {
    title: "Tooling",
    skills: ["S3 / ImageKit", "Vercel", "pnpm", "Docker", "Linux"],
  },
];
