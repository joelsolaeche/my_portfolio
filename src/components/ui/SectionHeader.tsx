'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ number, title, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 mb-3">
        <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, rgba(21,93,252,0.5))' }} />
        <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase" style={{ color: 'rgba(152,16,250,0.7)' }}>
          {number}
        </span>
        <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, rgba(21,93,252,0.5))' }} />
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        <span className="gradient-text-blue">{title}</span>
      </h2>

      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(21,93,252,0.4), transparent)' }} />
        <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(152,16,250,0.6)' }} />
        <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(21,93,252,0.4), transparent)' }} />
      </div>

      {subtitle && (
        <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
