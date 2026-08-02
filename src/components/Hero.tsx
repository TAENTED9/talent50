import { Button } from './ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden bg-ink pb-[clamp(48px,7vh,96px)]">
      <div className="absolute -top-[12%] left-0 right-0 bottom-0 relative">
        <Image src="/assets/hero.jpg" alt="Talent50 Group — African sport" fill priority sizes="100vw" className="object-cover grayscale-[.25] rounded-4xl shadow-soft-lg" />
      </div>
      <div className="absolute inset-0 bg-hero-overlay" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 z-0 h-96 w-96 animate-float rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/3 z-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex h-[530px] w-full max-w-content animate-fade-up flex-col justify-end px-5 md:px-[5vw] lg:px-[72px]">
        <div className="mb-[26px] font-mono text-[11px] uppercase tracking-[0.14em] text-text-light/60">Talent50 Group</div>
        <h1 className="mb-[30px] max-w-[17ch] font-display text-[clamp(42px,7vw,110px)] leading-[.98] tracking-[-0.02em] text-text-light">Building the <span className="text-accent">missing middle</span> of African sport.</h1>
        <p className="mb-10 max-w-[58ch] text-[clamp(17px,1.4vw,21px)] font-light leading-[1.55] text-muted-light">The Talent50 Group unlocks the value of African sports, turning potential into assets.</p>
        <div className="flex flex-wrap items-center gap-[18px]"><Button href="#contact">Partner with us</Button><Button href="#engine" variant="ghost">See how it works</Button></div>
      </div>

      <a href="#about" className="absolute bottom-8 right-5 z-10 font-mono text-[11px] uppercase tracking-[0.14em] text-text-light/60 transition-colors duration-300 hover:text-accent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2">Scroll <span className="ml-2 inline-block animate-float text-lg">↓</span></a>
    </section>
  );
}
