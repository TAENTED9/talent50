import { groupLinks } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';
import Image from 'next/image';

export default function About() {
  return <section id="about" className="bg-paper py-[clamp(84px,13vh,170px)] text-ink"><div className="mx-auto grid max-w-content gap-[clamp(36px,5vw,72px)] px-5 md:grid-cols-[1.45fr_.8fr] md:px-[5vw] lg:px-[72px]"><div><SectionHeading eyebrow="WhO we are" title="We build the missing middle: the layer between world-class, grassroots talent and the global stage." body="We are a bridge between passion and professionalism, turning raw talent into global success stories, across every sport we touch." theme="light" titleClassName="max-w-[22ch]" bodyClassName="max-w-[58ch]" /></div><div className="border-t border-ink pt-6"><div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">The group — all live</div>{groupLinks.map((item) => <div key={item.label} className="flex justify-between gap-3 border-b border-ink/15 py-3.5"><span className="font-display text-[clamp(16px,1.2vw,18.5px)]">{item.label}</span><span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55">{item.value}</span></div>)}</div></div>
    <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[260px] sm:grid-cols-2 lg:grid-cols-4">
      {[
        { src: '/assets/about-1.jpg', alt: 'F1 Racing', span: 'sm:col-span-2' },
        { src: '/assets/about-2.jpg', alt: 'Training session' },
        { src: '/assets/about-3.jpg', alt: 'Community program' },
      ].map((p) => (
        <div key={p.src} className={`relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-ink/5 ${p.span ?? ''}`}>
          <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 hover:scale-105" />
        </div>
      ))}
    </div>
  </section>;
}
