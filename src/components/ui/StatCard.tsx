import type { StatItem } from '@/lib/data';

interface StatCardProps { item: StatItem; variant?: 'market' | 'target'; index?: number; }

export function StatCard({ item, variant = 'market', index = 0 }: StatCardProps) {
  if (variant === 'target') return <div className="flex items-baseline justify-between gap-4 rounded-2xl bg-ink/5 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"><div className="font-display text-[clamp(38px,4.2vw,66px)] leading-[.9] tracking-[-0.02em] text-ink">{item.value}</div><div className="max-w-[18ch] text-right text-[14.5px] font-light leading-[1.55] text-muted-dark">{item.text}</div></div>;
  return <div className={`rounded-2xl p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg ${index % 2 === 1 ? 'bg-accent/10' : 'bg-ink/5'}`}><div className="font-display text-[clamp(44px,5vw,80px)] leading-[.9] tracking-[-0.02em] text-ink">{item.value}</div><p className="mt-4 text-[14.5px] font-light leading-[1.55] text-muted-dark">{item.text}</p></div>;
}