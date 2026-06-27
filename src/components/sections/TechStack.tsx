"use client";

import React from "react";
import { motion } from "framer-motion";

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
  if (count >= 6) return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";
  if (count >= 4) return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";
  if (count >= 3) return "grid-cols-2 sm:grid-cols-3";
  return "grid-cols-2";
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
                className={`grid ${gridColsClass(category.items.length)} gap-3`}
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
                    className="glass rounded-xl p-4 text-center cursor-default transition-premium hover:border-glow hover:glow-accent group"
                  >
                    <span className="font-mono font-medium text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
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
