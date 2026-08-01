import type { AnchorHTMLAttributes } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> { variant?: 'solid' | 'ghost'; }

export function Button({ variant = 'solid', className = '', children, ...props }: ButtonProps) {
  const styles = variant === 'solid' ? 'bg-accent text-ink shadow-[0_10px_30px_-10px_rgba(200,242,78,0.45)] hover:shadow-[0_16px_40px_-12px_rgba(200,242,78,0.55)] hover:-translate-y-0.5' : 'border-2 border-paper/25 text-paper hover:border-accent hover:text-accent';
  return <a className={`inline-flex items-center justify-center gap-2 rounded-full font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 active:scale-[0.97] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2 px-7 py-4 ${styles} ${className}`} {...props}>{children}</a>;
}