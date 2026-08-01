import { marketStats } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';
import { StatCard } from './ui/StatCard';

export default function Market() { return <section id="market" className="bg-paper py-[clamp(84px,13vh,170px)] text-ink"><div className="mx-auto max-w-content px-5 md:px-[5vw] lg:px-[72px]"><SectionHeading eyebrow="03 — The market" title="A continent-sized audience, almost entirely unmonetised." body="Africa is the last major untapped sports market." theme="light" /><div className="mt-10 grid gap-[clamp(28px,3.5vw,56px)] sm:grid-cols-2 lg:grid-cols-4">{marketStats.map((item, index) => <StatCard key={item.value} item={item} index={index} />)}</div></div></section>; }
