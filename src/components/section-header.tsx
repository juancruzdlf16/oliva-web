"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tagline?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  tagline,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={centered ? "text-center" : ""}
    >
      {tagline && (
        <span className="mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase text-olive">
          {tagline}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
