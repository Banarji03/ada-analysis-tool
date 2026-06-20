import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label?: string;
  active?: boolean;
  size?: 'sm' | 'md';
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  active = false,
  size = 'md',
  className = '',
  ...props
}) => {
  const sizeClass = size === 'sm' ? 'w-6 h-6' : 'w-8 h-8';

  return (
    <button
      title={label}
      aria-label={label}
      className={`inline-flex items-center justify-center rounded transition-all duration-150 focus-ring ${sizeClass} ${
        active
          ? 'text-cyan-400 bg-cyan-500/10'
          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
      } disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};
