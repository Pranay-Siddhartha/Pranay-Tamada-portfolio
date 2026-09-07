"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss,
  SiDjango, SiNodedotjs, SiExpress, SiFastapi,
  SiMongodb, SiSqlite,
  SiDocker, SiKubernetes,
  SiPython, SiC
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

const techConfig: Record<string, { icon: React.ElementType, colorClass: string }> = {
  "React": { icon: SiReact, colorClass: "group-hover:text-[#61DAFB]" },
  "Next.js": { icon: SiNextdotjs, colorClass: "group-hover:text-white" },
  "Tailwind CSS": { icon: SiTailwindcss, colorClass: "group-hover:text-[#38B2AC]" },
  "JavaScript": { icon: SiJavascript, colorClass: "group-hover:text-[#F7DF1E]" },
  "HTML": { icon: SiHtml5, colorClass: "group-hover:text-[#E34F26]" },
  "CSS": { icon: SiCss, colorClass: "group-hover:text-[#1572B6]" },
  "Django": { icon: SiDjango, colorClass: "group-hover:text-[#092E20]" },
  "Node.js": { icon: SiNodedotjs, colorClass: "group-hover:text-[#339933]" },
  "Express": { icon: SiExpress, colorClass: "group-hover:text-white" },
  "FastAPI": { icon: SiFastapi, colorClass: "group-hover:text-[#009688]" },
  "MongoDB": { icon: SiMongodb, colorClass: "group-hover:text-[#47A248]" },
  "SQL": { icon: FaDatabase, colorClass: "group-hover:text-[#336791]" },
  "SQLite": { icon: SiSqlite, colorClass: "group-hover:text-[#003B57]" },
  "Docker": { icon: SiDocker, colorClass: "group-hover:text-[#2496ED]" },
  "Kubernetes": { icon: SiKubernetes, colorClass: "group-hover:text-[#326CE5]" },
  "Python": { icon: SiPython, colorClass: "group-hover:text-[#3776AB]" },
  "Java": { icon: FaJava, colorClass: "group-hover:text-[#007396]" },
  "C": { icon: SiC, colorClass: "group-hover:text-[#A8B9CC]" },
};

interface TechCategory {
  name: string;
  items: string[];
}

const categories: TechCategory[] = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Backend",
    items: ["Django", "Node.js", "Express", "FastAPI"],
  },
  {
    name: "Database",
    items: ["MongoDB", "SQL", "SQLite"],
  },
  {
    name: "DevOps",
    items: ["Docker", "Kubernetes"],
  },
  {
    name: "Languages",
    items: ["Python", "Java", "C"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [] as any,
    },
  },
};

/** Column count mapping based on category item count for responsive grid */
function gridColsClass(count: number): string {
  if (count >= 6) return "grid-cols-2 sm:grid-cols-3 xl:grid-cols-6";
  if (count >= 4) return "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4";
  if (count >= 3) return "grid-cols-2 sm:grid-cols-3";
  return "grid-cols-2 sm:grid-cols-3";
}

export default function TechStack() {
  return (
    <section id="stack" className="py-32 lg:py-40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [] as any }}
          className="mb-4"
        >
          <span className="text-xs tracking-widest text-text-tertiary uppercase flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            TECH STACK
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [] as any }}
          className="text-3xl md:text-4xl font-bold text-gradient"
        >
          Technologies I work with
        </motion.h2>

        {/* Categories */}
        <div className="mt-16 space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
            >
              {/* Category label */}
              <motion.h3
                variants={cardVariants}
                className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4"
              >
                {category.name}
              </motion.h3>

              {/* Tech cards grid */}
              <motion.div
                className={`grid ${gridColsClass(category.items.length)} gap-4 md:gap-5 justify-items-stretch`}
                variants={containerVariants}
              >
                {category.items.map((tech) => (
                  <motion.div
                    key={tech}
                    variants={cardVariants}
                    whileHover={{
                      y: -4,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                    className="glass flex h-full min-h-[132px] md:min-h-[150px] w-full flex-col items-center justify-center gap-3 rounded-2xl p-5 text-center cursor-default transition-premium hover:border-glow hover:glow-accent group"
                  >
                    {(() => {
                      const config = techConfig[tech];
                      if (!config) return null;
                      const { icon: Icon, colorClass } = config;
                      return (
                        <Icon className={`h-8 w-8 md:h-9 md:w-9 text-text-secondary transition-colors duration-300 ${colorClass}`} />
                      );
                    })()}
                    <span className="font-mono text-sm md:text-[0.95rem] font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
