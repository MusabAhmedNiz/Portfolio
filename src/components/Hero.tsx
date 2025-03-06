"use client";

import { ArrowDown, Code, Database, Layout, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Musab from "../../public/img.png";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-10"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50 pointer-events-none" />

      {/* Background animations */}
      <motion.div
        className="absolute w-96 h-96 bg-accent/30 rounded-full filter blur-3xl top-1/4 -left-48"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-primary/5 rounded-full filter blur-3xl bottom-1/4 -right-48"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block glass rounded-full px-3 py-1 text-sm mb-6">
                <span className="text-foreground/70">Full Stack Developer</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Building{" "}
              <span className="text-foreground/80">digital experiences</span>{" "}
              <br className="hidden md:block" />
              with precision.
            </motion.h1>

            <motion.p
              className="max-w-lg text-foreground/70 mb-10 text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              I&apos;m Musab Nizamani, a full stack developer specializing in
              building exceptional digital experiences with JavaScript, React,
              Next.js, and Python.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {[
                { icon: Code, text: "JavaScript" },
                { icon: Laptop, text: "React.js" },
                { icon: Layout, text: "Next.js" },
                { icon: Database, text: "Python" },
              ].map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={text}
                  className="glass py-3 px-4 rounded-lg flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
                >
                  <Icon size={18} className="text-foreground/70" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-accent/20 rounded-full filter blur-3xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-full max-w-[500px] ">
                <Image
                  src={Musab}
                  alt="Musab Nizamani"
                  priority
                  className="rounded-2xl object-cover glass  p-2 shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.a
            href="#about"
            className="flex items-center justify-center w-12 h-12 rounded-full glass"
            aria-label="Scroll to About section"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
