"use client";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Lightbulb,
  TerminalSquare,
  Wand2,
} from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
      ],
      color: "bg-[#9b87f5]/10 text-[#9b87f5]",
    },
    {
      category: "Backend",
      icon: <TerminalSquare className="h-5 w-5" />,
      skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs"],
      color: "bg-[#0EA5E9]/10 text-[#0EA5E9]",
    },
    {
      category: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB", "SQL", "Firebase"],
      color: "bg-[#F97316]/10 text-[#F97316]",
    },
    {
      category: "DevOps",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        "Docker",
        "Git",
        "GitHub Actions",
        "Vercel",
        "Netlify",
      ],
      color: "bg-[#D946EF]/10 text-[#D946EF]",
    },
    {
      category: "Tools & Frameworks",
      icon: <Wand2 className="h-5 w-5" />,
      skills: [
        "Redux",
        "Zustand",
        "Jest",
        "React Testing Library",
        "Storybook",
        "Webpack",
        "Vite",
      ],
      color: "bg-[#E5DEFF]/50 text-foreground",
    },
    {
      category: "Other Skills",
      icon: <Lightbulb className="h-5 w-5" />,
      skills: [
        "Responsive Design",
        "UI/UX",
        "Problem Solving",
        "Team Collaboration",
      ],
      color: "bg-[#FDE1D3]/50 text-foreground",
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -bottom-48 -left-48"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            My Expertise
          </Badge>
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I've worked with a wide range of technologies in the web development
            world. Here's a comprehensive overview of my technical skills and
            areas of expertise.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              className="glass p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`inline-flex items-center justify-center p-2 rounded-lg ${category.color} mb-4`}
              >
                {category.icon}
              </div>

              <h3 className="text-xl font-medium mb-4">{category.category}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="bg-accent/30 text-foreground/90 px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-4">
            Always Expanding My Skill Set
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            The tech landscape is always evolving, and so am I. I'm constantly
            learning new technologies and frameworks to stay ahead of the curve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
