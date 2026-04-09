import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export function StatsCounter({ value, label, suffix = '' }: StatsCounterProps) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold tracking-tighter text-primary mb-1">
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{label}</div>
    </div>
  );
}
