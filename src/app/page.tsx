"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const waveAnimation = {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "linear",
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center py-20 min-h-[70vh] px-4"
    >
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Hi, I&apos;m Kauê{" "}
          <motion.span
            animate={waveAnimation}
            style={{ display: "inline-block", transformOrigin: "70% 70%" }}
          >
            👋
          </motion.span>
        </h1>

        <div className="space-y-4">
          <p className="text-xl text-gray-400">
            a full-stack developer with a passion for creating solutions
          </p>

          <Button
            variant="ghost"
            className="group transition-all duration-300 ease-in-out"
          >
            <p className="text-sm text-muted-foreground flex items-center space-x-2 group-hover:text-foreground transition-colors duration-300">
              <span>Press</span>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <span className="text-xs">ctrl</span>
              </kbd>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <span className="text-xs">K</span>
              </kbd>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </p>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
