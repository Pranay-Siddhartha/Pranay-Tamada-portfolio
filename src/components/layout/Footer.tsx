"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:pranay.tamada@gmail.com",
    label: "Email",
  },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto py-8 px-6 flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-lg glass flex items-center justify-center"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Icon className="w-4 h-4 text-text-tertiary hover:text-text-primary transition-premium" />
            </motion.a>
          ))}
        </div>

        {/* Sign-off text */}
        <p className="text-text-tertiary text-sm text-center">
          © {currentYear} · Built with React + Next.js + Tailwind + Framer
          Motion
        </p>
      </div>
    </footer>
  );
}
