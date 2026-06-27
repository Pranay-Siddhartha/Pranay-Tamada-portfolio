"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      {/* Grid pattern with bottom fade */}
      <div className="absolute inset-0 grid-bg mask-fade-bottom" />

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #09090B 100%)",
        }}
      />

      {/* Blue accent orb – top right area */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent opacity-5 blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Purple orb – bottom left area */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-purple-500 opacity-5 blur-3xl"
        animate={{
          x: [0, -20, 25, 0],
          y: [0, 20, -15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
