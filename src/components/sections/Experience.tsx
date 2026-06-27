'use client'

import { motion } from 'framer-motion'

interface TimelineItem {
  role: string
  organization: string
  period: string
  bullets: string[]
}

interface Certification {
  title: string
  issuer: string
  tags: string[]
}

const experiences: TimelineItem[] = [
  {
    role: 'Technical Lead',
    organization: 'CodeHub JBIET',
    period: '2024 — Present',
    bullets: [
      'Organized technical workshops and hands-on coding sessions',
      'Led competitive programming contests and hackathons',
      'Mentored junior students in web development and problem solving',
    ],
  },
]

const certifications: Certification[] = [
  {
    title: 'IBM Professional Full Stack Software Developer',
    issuer: 'IBM',
    tags: ['React', 'Node.js', 'Django', 'SQL'],
  },
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

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [] as any },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 lg:py-40">
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
            Experience
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          variants={itemVariants}
          className="mt-4 text-3xl md:text-4xl font-bold text-gradient"
        >
          Where I&apos;ve contributed
        </motion.h2>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp) => (
            <motion.div
              key={`${exp.role}-${exp.organization}`}
              variants={containerVariants}
              className="relative pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <motion.div
                variants={dotVariants}
                className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent glow-accent"
              />

              {/* Content */}
              <div className="pl-10">
                <motion.h3
                  variants={itemVariants}
                  className="text-xl font-semibold text-text-primary"
                >
                  {exp.role}
                </motion.h3>

                <motion.p
                  variants={itemVariants}
                  className="mt-1 text-sm font-medium text-accent"
                >
                  {exp.organization}
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="mt-1 text-sm text-text-tertiary"
                >
                  {exp.period}
                </motion.p>

                <motion.ul
                  variants={containerVariants}
                  className="mt-4 space-y-2"
                >
                  {exp.bullets.map((bullet) => (
                    <motion.li
                      key={bullet}
                      variants={itemVariants}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                      {bullet}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div variants={containerVariants} className="mt-20">
          <motion.h3
            variants={itemVariants}
            className="text-xl font-semibold text-text-primary"
          >
            Certifications
          </motion.h3>

          <div className="mt-6 space-y-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h4 className="text-lg font-semibold text-text-primary">
                  {cert.title}
                </h4>
                <p className="mt-1 text-sm text-text-tertiary">
                  {cert.issuer}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass rounded-lg px-3 py-1 text-xs font-mono text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
