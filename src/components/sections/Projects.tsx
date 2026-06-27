"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17 0-1.5-.5-2.8-1.5-3.8.15-.45.65-1.8-.15-3.8 0 0-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4-.8 2-.3 3.35-.15 3.8-1 1-1.5 2.3-1.5 3.8 0 5.75 3.35 6.75 6.5 7.17A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

interface ProjectData {
  featured?: boolean;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: ProjectData[] = [
  {
    featured: true,
    title: "Conversational SIEM Copilot",
    description:
      "AI-powered cybersecurity assistant that performs natural language security log analysis, attack timeline visualization, and multi-incident threat segmentation.",
    tags: ["Next.js", "FastAPI", "SQLite"],
    liveUrl: "https://conversational-siem-copilot-ten.vercel.app/",
    githubUrl: "https://github.com/Pranay-Siddhartha/Conversational-SIEM-Copilot",
  },
  {
    featured: false,
    title: "Caramel Bakery",
    description:
      "Premium bakery website with a custom TasteFinder chatbot that recommends products based on flavor preferences.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://caramel-web-app.netlify.app/",
    githubUrl: "https://github.com/Pranay-Siddhartha/Caramel-Web-App-Project",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [] as any,
    },
  },
};

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [] as any }}
      className="group relative glass rounded-2xl overflow-hidden"
    >
      {/* Accent gradient bar */}
      <div className="h-1 bg-gradient-to-r from-accent via-blue-400 to-accent" />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-accent" />

      <div className={project.featured ? "p-8 md:p-12" : "p-8 md:p-10"}>
        {/* Featured badge */}
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-block mb-6"
          >
            <span className="glass-accent rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
              Featured Project
            </span>
          </motion.div>
        )}

        {/* Title */}
        <h3
          className={`font-bold text-text-primary ${
            project.featured
              ? "text-2xl md:text-3xl"
              : "text-xl md:text-2xl"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={`text-text-secondary leading-relaxed mt-4 max-w-2xl ${
            project.featured ? "text-lg" : "text-base"
          }`}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2.5 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="glass rounded-lg px-3 py-1.5 text-xs font-mono text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-accent text-white rounded-xl px-6 py-3 text-sm font-semibold transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(79,140,255,0.35)]"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>

          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold border border-border text-text-secondary hover:border-border-hover hover:text-text-primary transition-all duration-300"
          >
            <span>GitHub</span>
            <Github className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 lg:py-40 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [] as any }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-text-tertiary flex items-center gap-2 mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            Featured Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Selected work
          </h2>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
