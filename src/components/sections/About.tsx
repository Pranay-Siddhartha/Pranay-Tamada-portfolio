'use client'

import { motion } from 'framer-motion'
import { Code2, Brain, Palette, Award } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface StatCard {
  icon: LucideIcon
  label: string
  sublabel: string
}

const stats: StatCard[] = [
  { icon: Code2, label: 'Full Stack', sublabel: 'End-to-end' },
  { icon: Brain, label: 'AI/ML', sublabel: 'Integrated' },
  { icon: Palette, label: 'UI/UX', sublabel: 'Obsessed' },
  { icon: Award, label: 'IBM Certified', sublabel: 'Professional' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [] as any },
  },
}

export default function About() {
  return (
    <section id="about" className="py-32 lg:py-40">
      <motion.div
        className="max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <span className="block h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-widest text-text-tertiary">
            About
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          variants={itemVariants}
          className="mt-4 text-3xl md:text-4xl font-bold text-gradient"
        >
          A bit about me
        </motion.h2>

        {/* Content paragraphs */}
        <div className="mt-12 space-y-6">
          <motion.p
            variants={itemVariants}
            className="text-lg text-text-secondary leading-relaxed"
          >
            I&apos;m a Computer Science student with a deep passion for building
            modern web applications. With an IBM Full Stack Professional
            Certificate under my belt, I combine strong engineering fundamentals
            with a keen eye for UI/UX design.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-text-secondary leading-relaxed"
          >
            I thrive on solving complex problems and turning ideas into polished,
            production-ready products. From crafting pixel-perfect interfaces to
            architecting scalable backends, I approach every project with
            curiosity and attention to detail.
          </motion.p>
        </div>

        {/* Stat highlights */}
        <motion.div
          variants={containerVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass rounded-2xl p-6 text-center"
            >
              <stat.icon className="mx-auto h-6 w-6 text-accent" />
              <p className="mt-3 font-semibold text-text-primary">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-text-tertiary">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
