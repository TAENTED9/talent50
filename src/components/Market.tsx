import { marketStats } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';
import { StatCard } from './ui/StatCard';
import Image from 'next/image';

export default function Market() {
	return (
		<section id="market" className="bg-paper py-[clamp(84px,13vh,170px)] text-ink">
			<div className="mx-auto max-w-content px-5 md:px-[5vw] lg:px-[72px]">
				<SectionHeading eyebrow="03 — The market" title="A continent-sized audience almost entirely unmonetised across the stack." body="Africa is the last major untapped sports market." theme="light" />

				<div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
					<div>
						<div className="mt-10 grid gap-[clamp(28px,3.5vw,56px)] sm:grid-cols-2">
							{marketStats.map((item, index) => (
								<StatCard key={item.value} item={item} index={index} />
							))}
						</div>
					</div>

					<div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft lg:aspect-auto lg:h-full lg:min-h-[420px]">
						<Image src="/assets/market.jpg" alt="African sports audience" fill quality={90} sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
					</div>
				</div>
			</div>
		</section>
	);
}
