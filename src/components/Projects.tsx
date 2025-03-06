"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Social Networking Platform",
      description:
        "Nizamani Social is an AI-powered platform that enhances content discovery with smart post suggestions. Users can share, follow, and engage seamlessly while staying updated with relevant discussions. Built with Next.js and MongoDB, it ensures a fast and smooth experience.",
      image: "/Light.png", // ✅ Use absolute path
      darkImage: "/Dark.png", // ✅ Use absolute path
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "Python",
        "Auth.js",
        "Firebase",
        "MongoDB",
        "Framer Motion",
        "Tailwind CSS",
      ],
      demoLink: "#",
      githubLink: "#",
    },

    {
      title: "Music School App",
      description:
        "The Music School Website is a modern, responsive site built with Next.js and Aceternity UI. It features a clean design, smooth animations, and well-structured pages for courses, instructors, and testimonials. The site ensures a seamless user experience with fast performance and intuitive navigation.",
      image: "/MLight.png", // ✅ Use absolute path
      darkImage: "/MDark.png", // ✅ Use absolute path
      technologies: ["Next", "React", "Node", "Tailwind CSS", "Aceternity ui"],
      demoLink: "https://music-school-3njs.vercel.app/",
      githubLink: "https://github.com/MusabAhmedNiz/Music-School",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -bottom-48 -left-48"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Projects
          </Badge>
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Selected works
          </motion.h2>
          <motion.p
            className="text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Here are some of the projects I&apos;ve worked on. Each project
            represents a unique challenge and solution, showcasing my skills as
            a full stack developer.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="glass rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <motion.img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="w-full h-full object-cover block dark:hidden"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <motion.img
                src={projects[currentProject].darkImage}
                alt={projects[currentProject].title}
                className="w-full h-full object-cover hidden dark:block"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex space-x-2 mb-4">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentProject === index
                      ? "w-8 bg-foreground"
                      : "bg-foreground/30"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>

            <motion.h3
              className="text-2xl font-display font-bold mb-4"
              key={currentProject}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {projects[currentProject].title}
            </motion.h3>

            <motion.p
              className="text-foreground/70 mb-6"
              key={`desc-${currentProject}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {projects[currentProject].description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              key={`tech-${currentProject}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {projects[currentProject].technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="bg-accent/50 text-foreground px-3 py-1 rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button variant="outline" size="sm" asChild>
                <a
                  href={projects[currentProject].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={16} />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href={projects[currentProject].demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
