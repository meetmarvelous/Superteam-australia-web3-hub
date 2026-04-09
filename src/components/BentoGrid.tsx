import React from 'react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4', className)}>
      {children}
    </div>
  );
}

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
}

export function BentoItem({ children, className, colSpan = 'col-span-1' }: BentoItemProps) {
  return (
    <div className={cn(colSpan, className)}>
      {children}
    </div>
  );
}
