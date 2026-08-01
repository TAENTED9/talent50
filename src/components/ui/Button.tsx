import type { AnchorHTMLAttributes } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> { variant?: 'solid' | 'ghost'; }

export function Button({ variant = 'solid', className = '', children, ...props }: ButtonProps) {
  const styles = variant === 'solid' ? 'bg-paper text-ink px-7 py-4 hover:bg-accent' : 'border-b border-paper/40 px-1 pb-0.5 text-text-light hover:border-accent hover:text-accent';
  return <a className={`inline-flex items-center gap-2 text-[15.5px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2 ${styles} ${className}`} {...props}>{children}</a>;
}