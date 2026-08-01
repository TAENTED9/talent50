interface SectionHeadingProps { eyebrow: string; title: string; body?: string; theme?: 'light' | 'dark'; titleClassName?: string; bodyClassName?: string; }

export function SectionHeading({ eyebrow, title, body, theme = 'dark', titleClassName = '', bodyClassName = '' }: SectionHeadingProps) {
  const isDarkSection = theme === 'dark';
  return <>
    <div className={`mb-[26px] text-xs uppercase tracking-[0.16em] ${isDarkSection ? 'text-text-light/50' : 'text-ink/50'}`}>{eyebrow}</div>
    <h2 className={`mb-6 max-w-[20ch] font-display text-[clamp(34px,5vw,72px)] font-bold leading-[1.04] tracking-[-0.02em] ${isDarkSection ? 'text-text-light' : 'text-ink'} ${titleClassName}`}>{title}</h2>
    {body ? <p className={`max-w-[32ch] text-[clamp(16px,1.2vw,18px)] font-light leading-[1.55] ${isDarkSection ? 'text-muted-light' : 'text-muted-dark'} ${bodyClassName}`}>{body}</p> : null}
  </>;
}