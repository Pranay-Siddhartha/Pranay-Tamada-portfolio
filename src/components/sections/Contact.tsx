"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

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

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [] as any,
    },
  },
};

interface ContactLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  variant: "glass" | "accent";
}

const contactLinks: ContactLink[] = [
  {
    href: "https://github.com/Pranay-Siddhartha",
    icon: Github,
    label: "GitHub",
    variant: "glass",
  },
  {
    href: "https://www.linkedin.com/in/pranay-siddhartha-tamada-573837322/",
    icon: Linkedin,
    label: "LinkedIn",
    variant: "glass",
  },
  {
    href: "mailto:pranay.tamada@gmail.com",
    icon: Mail,
    label: "Email",
    variant: "glass",
  },
  {
    href: "\Resume - Pranay Siddhartha Tamada.pdf",
    icon: FileText,
    label: "Resume",
    variant: "accent",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Gradient glow blob behind heading */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 w-[480px] h-[320px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,140,255,0.18)_0%,rgba(120,80,255,0.08)_40%,transparent_70%)] blur-3xl"
        />

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary relative"
        >
          Let&apos;s build{" "}
          <span className="text-gradient-accent">something amazing.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-text-secondary mt-6 max-w-xl mx-auto"
        >
          Have a project in mind? I&apos;d love to hear about it.
        </motion.p>

        {/* Contact links row */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center gap-4 flex-wrap"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={(link.href.startsWith("http") || link.href.endsWith(".pdf")) ? "_blank" : undefined}
                rel={
                  (link.href.startsWith("http") || link.href.endsWith(".pdf"))
                    ? "noopener noreferrer"
                    : undefined
                }
                download={link.label === "Resume" ? "Resume - Pranay Siddhartha Tamada.pdf" : undefined}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={
                  link.variant === "accent"
                    ? "flex items-center gap-2 bg-accent text-white rounded-xl px-6 py-3 text-sm font-medium transition-premium hover:shadow-[0_0_24px_rgba(79,140,255,0.3)]"
                    : "flex items-center gap-2 glass rounded-xl px-6 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-border-hover transition-premium"
                }
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
