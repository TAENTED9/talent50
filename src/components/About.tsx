import { groupLinks } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';

export default function About() {
  return <section id="about" className="bg-paper py-[clamp(84px,13vh,170px)] text-ink"><div className="mx-auto grid max-w-content gap-[clamp(36px,5vw,72px)] px-5 md:grid-cols-[1.45fr_.8fr] md:px-[5vw] lg:px-[72px]"><div><SectionHeading eyebrow="WhO we are" title="We build the missing middle: the layer between world-class, grassroots talent and the global stage." body="We are a bridge between passion and professionalism, turning raw talent into global success stories, across every sport we touch." theme="light" titleClassName="max-w-[22ch]" bodyClassName="max-w-[58ch]" /></div><div className="border-t border-ink pt-6"><div className="mb-4 text-[11px] uppercase tracking-[0.14em] text-ink/50">The group — all live</div>{groupLinks.map((item) => <div key={item.label} className="flex justify-between gap-3 border-b border-ink/15 py-3.5"><span className="font-display text-[clamp(16px,1.2vw,18.5px)] font-semibold">{item.label}</span><span className="text-[10.5px] uppercase tracking-[0.1em] text-ink/55">{item.value}</span></div>)}</div></div></section>;
}
