'use client'

import { motion } from 'framer-motion'

import { 
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFastapi,
  SiSqlite,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit 
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'SQLite', icon: SiSqlite },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: SiGit },
] as const

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const pillVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [] as any },
  },
}

const labelVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [] as any },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 lg:py-40">
      {/* Subtle dot background */}
      <div className="absolute inset-0 dot-bg opacity-40 mask-fade-bottom pointer-events-none" />

      <motion.div
        className="relative max-w-4xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section label */}
        <motion.div
          variants={labelVariants}
          className="flex items-center justify-center gap-2"
        >
          <span className="block h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-widest text-text-tertiary">
            Skills
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          variants={labelVariants}
          className="mt-4 text-center text-3xl md:text-4xl font-bold text-gradient"
        >
          Areas of expertise
        </motion.h2>

        {/* Skills pills */}
        <motion.div
          variants={containerVariants}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill.name}
              variants={pillVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: 'spring', stiffness: 400, damping: 15 },
              }}
              className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-text-secondary
                cursor-default select-none
                hover:border-accent/30 hover:text-accent hover:glow-accent
                transition-premium"
            >
              <skill.icon className="w-4 h-4" />
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
