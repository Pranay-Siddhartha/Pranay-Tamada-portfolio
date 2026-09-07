'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import CardSwap, { Card } from '@/components/ui/CardSwap';
import { SiReact, SiPython, SiNodedotjs, SiMongodb } from 'react-icons/si';

export { Hero };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [] as any },
  },
};

const codeLines = [
  { type: 'comment', content: '// app.tsx' },
  { type: 'blank', content: '' },
  { type: 'keyword', prefix: 'export default ', keyword: 'function', name: ' App', bracket: '() {' },
  { type: 'return', content: '  return (' },
  { type: 'jsx-open', content: '    <main className="portfolio">' },
  { type: 'jsx-nested', content: '      <Hero' },
  { type: 'prop', content: '        title=' , value: '"Building the future"' },
  { type: 'prop', content: '        animated=' , value: '{true}' },
  { type: 'jsx-close-self', content: '      />' },
  { type: 'jsx-close', content: '    </main>' },
  { type: 'return-close', content: '  );' },
  { type: 'bracket-close', content: '}' },
];

function CodeEditorMockup() {
  return (
    <div className="relative">
      {/* Glow behind editor */}
      <div className="absolute -inset-8 bg-accent/10 rounded-full blur-3xl" />

      <motion.div
        className="relative animate-float"
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: -1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [] as any }}
      >
        <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-black/50 min-w-[340px]">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="ml-2 text-xs text-text-tertiary font-mono">app.tsx</span>
          </div>

          {/* Code content */}
          <div className="p-5 font-mono text-[13px] leading-relaxed">
            {codeLines.map((line, i) => (
              <div key={i} className="whitespace-pre">
                {line.type === 'comment' && (
                  <span className="text-text-tertiary">{line.content}</span>
                )}
                {line.type === 'blank' && <span>&nbsp;</span>}
                {line.type === 'keyword' && (
                  <>
                    <span className="text-accent">{line.prefix}</span>
                    <span className="text-accent">{line.keyword}</span>
                    <span className="text-[#FFBD2E]">{line.name}</span>
                    <span className="text-text-primary">{line.bracket}</span>
                  </>
                )}
                {line.type === 'return' && (
                  <span className="text-accent">
                    {'  '}
                    <span className="text-accent">return</span>
                    <span className="text-text-primary"> {'('}</span>
                  </span>
                )}
                {line.type === 'jsx-open' && (
                  <span>
                    <span className="text-text-primary">{'    '}&lt;</span>
                    <span className="text-accent">main</span>
                    <span className="text-text-primary"> </span>
                    <span className="text-text-secondary">className</span>
                    <span className="text-text-primary">=</span>
                    <span className="text-[#22C55E]">&quot;portfolio&quot;</span>
                    <span className="text-text-primary">&gt;</span>
                  </span>
                )}
                {line.type === 'jsx-nested' && (
                  <span>
                    <span className="text-text-primary">{'      '}&lt;</span>
                    <span className="text-[#FFBD2E]">Hero</span>
                  </span>
                )}
                {line.type === 'prop' && (
                  <span>
                    <span className="text-text-secondary">{line.content}</span>
                    <span className="text-[#22C55E]">{line.value}</span>
                  </span>
                )}
                {line.type === 'jsx-close-self' && (
                  <span className="text-text-primary">{line.content}</span>
                )}
                {line.type === 'jsx-close' && (
                  <span>
                    <span className="text-text-primary">{'    '}&lt;/</span>
                    <span className="text-accent">main</span>
                    <span className="text-text-primary">&gt;</span>
                  </span>
                )}
                {line.type === 'return-close' && (
                  <span className="text-text-primary">{line.content}</span>
                )}
                {line.type === 'bracket-close' && (
                  <span className="text-text-primary">{line.content}</span>
                )}
              </div>
            ))}
            {/* Typing cursor */}
            <span
              className="inline-block w-[2px] h-4 bg-accent ml-0.5 align-middle"
              style={{ animation: 'typing-cursor 1s steps(1) infinite' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Effects ── */}
      <div className="absolute inset-0 grid-bg mask-fade-bottom pointer-events-none" />

      {/* Blue blob – top right */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 pointer-events-none"
        animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Purple blob – bottom left */}
      <motion.div
        className="absolute -bottom-16 -left-16 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 pointer-events-none"
        animate={{ x: [0, -20, 25, 0], y: [0, 20, -15, 0] }}
        transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          {/* ── Left Side ── */}
          <motion.div
            className="flex-[0_0_60%] max-w-2xl text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pill badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 glass-accent rounded-full px-4 py-1.5 text-sm text-accent font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                Full Stack Developer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-text-primary mb-6"
            >
              Hi, I'm 
              <span className="text-gradient-accent"> Pranay&nbsp;Tamada.</span> 
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Full Stack Developer crafting AI‑powered applications and polished user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(79,140,255,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl transition-premium"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Pranay_Siddhartha_Resume.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 border border-border text-text-secondary font-semibold px-7 py-3.5 rounded-xl hover:text-text-primary hover:border-border-hover transition-premium"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right Side – Card Swap ── */}
          <div className="hidden lg:flex flex-[0_0_40%] items-center justify-center relative min-h-[500px]">
            <div className="absolute inset-0 bg-accent/15 rounded-full blur-[120px] pointer-events-none" />
            <CardSwap
              width={360}
              height={250}
              cardDistance={62}
              verticalDistance={40}
              delay={4000}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
            >
              <Card className="!bg-gradient-to-br !from-[#0d1117] !to-[#161b22] !border-[#61DAFB]/30 p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(97,218,251,0.15)]">
                <SiReact className="w-10 h-10 text-[#61DAFB]" />
                <div className="mt-4">
                  <h4 className="text-white font-bold text-lg">React & Next.js</h4>
                  <p className="text-gray-400 text-sm mt-1">Building modern, performant UIs</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <span className="text-[10px] font-mono bg-[#61DAFB]/10 text-[#61DAFB] px-2 py-1 rounded-md">React</span>
                  <span className="text-[10px] font-mono bg-[#61DAFB]/10 text-[#61DAFB] px-2 py-1 rounded-md">Next.js</span>
                  <span className="text-[10px] font-mono bg-[#61DAFB]/10 text-[#61DAFB] px-2 py-1 rounded-md">TypeScript</span>
                </div>
              </Card>

              <Card className="!bg-gradient-to-br !from-[#0d1117] !to-[#161b22] !border-[#3776AB]/30 p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(55,118,171,0.15)]">
                <SiPython className="w-10 h-10 text-[#3776AB]" />
                <div className="mt-4">
                  <h4 className="text-white font-bold text-lg">Python & AI Integration</h4>
                  <p className="text-gray-400 text-sm mt-1">AI‑powered apps & automation</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <span className="text-[10px] font-mono bg-[#3776AB]/10 text-[#3776AB] px-2 py-1 rounded-md">Python</span>
                  <span className="text-[10px] font-mono bg-[#3776AB]/10 text-[#3776AB] px-2 py-1 rounded-md">FastAPI</span>
                  <span className="text-[10px] font-mono bg-[#3776AB]/10 text-[#3776AB] px-2 py-1 rounded-md">Django</span>
                </div>
              </Card>

              <Card className="!bg-gradient-to-br !from-[#0d1117] !to-[#161b22] !border-[#339933]/30 p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(51,153,51,0.15)]">
                <SiNodedotjs className="w-10 h-10 text-[#339933]" />
                <div className="mt-4">
                  <h4 className="text-white font-bold text-lg">Node.js & Express</h4>
                  <p className="text-gray-400 text-sm mt-1">Scalable backend services</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <span className="text-[10px] font-mono bg-[#339933]/10 text-[#339933] px-2 py-1 rounded-md">Node.js</span>
                  <span className="text-[10px] font-mono bg-[#339933]/10 text-[#339933] px-2 py-1 rounded-md">Express</span>
                  <span className="text-[10px] font-mono bg-[#339933]/10 text-[#339933] px-2 py-1 rounded-md">REST API</span>
                </div>
              </Card>

              <Card className="!bg-gradient-to-br !from-[#0d1117] !to-[#161b22] !border-[#47A248]/30 p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(71,162,72,0.15)]">
                <SiMongodb className="w-10 h-10 text-[#47A248]" />
                <div className="mt-4">
                  <h4 className="text-white font-bold text-lg">Database & DevOps</h4>
                  <p className="text-gray-400 text-sm mt-1">Data modeling & deployment</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <span className="text-[10px] font-mono bg-[#47A248]/10 text-[#47A248] px-2 py-1 rounded-md">MongoDB</span>
                  <span className="text-[10px] font-mono bg-[#47A248]/10 text-[#47A248] px-2 py-1 rounded-md">Docker</span>
                  <span className="text-[10px] font-mono bg-[#47A248]/10 text-[#47A248] px-2 py-1 rounded-md">SQL</span>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
