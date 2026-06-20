import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'muted';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  animate?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
  secondary: 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30',
  success: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  danger: 'bg-red-500/20 text-red-400 border border-red-500/30',
  warning: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
  muted: 'bg-slate-700/40 text-slate-400 border border-slate-700/50',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'muted',
  className = '',
  animate = false,
}) => {
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider ${variantStyles[variant]} ${animate ? 'badge-bounce' : ''} ${className}`}
    >
      {children}
    </span>
  );
};
