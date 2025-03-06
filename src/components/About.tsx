"use client";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "MongoDB",
    "SQL",
    "RESTful APIs",
    "Docker",
    "Git",
    "TailwindCSS",
    "Framer Motion",
    "Jest",
    "Shad-cn",
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 bg-accent/20 rounded-full filter blur-3xl -top-48 -right-48"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }} // Ensures animation happens only once
          >
            <Badge variant="outline" className="mb-4">
              About me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Full Stack Developer with a passion for creating innovative
              solutions
            </h2>
            <p className="text-foreground/70 mb-6">
              I&apos;m a dedicated full stack developer with expertise in
              JavaScript, React.js, Next.js, and Python. My journey in
              development is driven by a passion for building efficient,
              user-friendly applications that solve real-world problems.
            </p>
            <p className="text-foreground/70 mb-8">
              With a strong foundation in both frontend and backend
              technologies, I enjoy taking projects from concept to completion.
              I&apos;m constantly learning and adapting to new technologies to
              stay at the forefront of web development.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "Frontend Development",
                  desc: "Creating intuitive user interfaces with React, Next.js, and modern CSS frameworks",
                },
                {
                  title: "Backend Development",
                  desc: "Building robust server-side applications with Node.js, Express, and Python",
                },
                {
                  title: "Database Management",
                  desc: "Designing and optimizing database solutions with SQL and NoSQL technologies",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-foreground/70 mt-0.5" />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-foreground/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-accent/50 text-foreground px-3 py-1.5 rounded-full text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
