import { Button } from './ui/Button';
import { SectionHeading } from './ui/SectionHeading';
import Image from 'next/image';

export default function Contact() {
	return (
		<section id="contact" className="border-t border-text-light/10 bg-ink py-[clamp(84px,13vh,170px)]">
			<div className="mx-auto max-w-content px-5 md:px-[5vw] lg:px-[72px]">
				<div className="rounded-4xl p-7 shadow-glow md:p-12">
					<SectionHeading eyebrow="" title="Built here. Owned here." body="A movement that empowers communities, inspires youth, and showcases Africa's potential on the global stage." titleClassName="max-w-[16ch]" bodyClassName="max-w-[52ch]" />

					<div className="mt-10 flex flex-wrap items-center gap-[18px]">
						<div className="flex items-center gap-6">
							<div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-accent/30 shadow-soft-lg">
								<Image src="/assets/stephanie.png" alt="Stephanie" fill sizes="80px" className="object-cover" />
							</div>
							<div>
								<div className="flex items-center gap-[18px]">
									<Button href="mailto:hello@thetalent50company.com">Let's talk</Button>
									<a href="mailto:hello@thetalent50company.com" className="border-b border-paper/30 pb-0.5 text-sm text-muted-light transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2">hello@thetalent50company.com</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
