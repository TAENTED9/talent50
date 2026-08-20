import { targetItems } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';
import { StatCard } from './ui/StatCard';
import Image from 'next/image';

export default function Impact() {
	return (
		<section id="impact" className="bg-paper py-[clamp(84px,13vh,170px)] text-ink">
			<div className="mx-auto grid max-w-content gap-[clamp(36px,5vw,72px)] px-5 md:grid-cols-[1.45fr_.8fr] md:px-[5vw] lg:px-[72px]">
				<div>
					<SectionHeading eyebrow="05 — Impact" title="A talent platform is a jobs engine." body="Every category we build employs far more people off the pitch than on it: scouts, coaches, creators, editors, league and event operators, physios, agents and administrators, and keeps that value in the communities that create it." theme="light" />
				</div>

				<div>
					<div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">Targets — next 3 years</div>
					{targetItems.map((item) => (
						<StatCard key={item.value + item.text} item={item} variant="target" />
					))}
					<div className="mt-5 text-[12.5px] font-light text-muted-dark">SDG 8 · SDG 10 · SDG 11 · SDG 4 · IRIS+ aligned KPIs</div>

					<div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
						<Image src="/assets/impact.jpg" alt="Coaching and community impact" fill quality={90} sizes="(max-width: 768px) 100vw, 35vw" className="object-cover" />
					</div>
				</div>
			</div>
		</section>
	);
}
