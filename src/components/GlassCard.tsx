import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  key?: string | number;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.01, translateY: -4 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={cn(
        'glass rounded-3xl p-6 relative group transition-all duration-500',
        hover && 'hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)]',
        className
      )}
    >
      {/* Internal Stroke / Highlight */}
      <div className="absolute inset-0 rounded-3xl border border-black/[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
