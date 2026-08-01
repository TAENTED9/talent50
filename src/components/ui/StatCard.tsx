import type { StatItem } from '@/lib/data';

interface StatCardProps { item: StatItem; variant?: 'market' | 'target'; }

export function StatCard({ item, variant = 'market' }: StatCardProps) {
  if (variant === 'target') return <div className="flex items-baseline justify-between gap-4 border-y border-ink/15 py-[22px]"><div className="font-display text-[clamp(38px,4.2vw,66px)] font-bold leading-[.9] tracking-[-0.02em] text-ink">{item.value}</div><div className="max-w-[18ch] text-right text-[14.5px] font-light leading-[1.55] text-muted-dark">{item.text}</div></div>;
  return <div className="border-t border-ink pt-[22px] transition-all duration-300 hover:border-accent"><div className="font-display text-[clamp(44px,5vw,80px)] font-bold leading-[.9] tracking-[-0.02em] text-ink">{item.value}</div><p className="mt-4 text-[14.5px] font-light leading-[1.55] text-muted-dark">{item.text}</p></div>;
}