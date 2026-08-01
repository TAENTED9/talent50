'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';

const links = [{ label: 'What we do', href: '#about' }, { label: 'The group', href: '#group' }, { label: 'Market', href: '#market' }, { label: 'Impact', href: '#impact' }];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  return <header className={`fixed inset-x-0 top-0 z-50 border-b py-3.5 transition-all duration-300 ${scrolled ? 'border-text-light/10 bg-ink/80 shadow-header backdrop-blur-[14px]' : 'border-transparent bg-transparent'}`}>
    <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-5 md:px-[5vw]">
      <a href="#home" aria-label="Talent50 home" onClick={() => setOpen(false)} className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"><Image src="/assets/logo-white.png" alt="Talent 50" width={140} height={38} priority className="h-[34px] w-auto" /></a>
      <nav className="hidden items-center gap-[38px] text-[13.5px] font-medium uppercase tracking-[0.02em] lg:flex" aria-label="Primary navigation">{links.map((link) => <a key={link.href} href={link.href} className="text-text-light/70 transition-colors duration-300 hover:text-accent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2">{link.label}</a>)}<Button href="#contact" className="bg-paper px-5 py-[11px] text-ink hover:bg-accent" onClick={() => setOpen(false)}>Partner with us</Button></nav>
      <button type="button" className="relative flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-text-light lg:hidden focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)}><span className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} /><span className={`block h-px w-6 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} /><span className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} /><span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span></button>
    </div>
    <div id="mobile-menu" className={`overflow-hidden px-5 transition-all duration-300 lg:hidden ${open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'}`}><nav className="mx-auto flex max-w-content flex-col gap-1 border-t border-text-light/10 py-5" aria-label="Mobile navigation">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-3 text-sm uppercase tracking-[0.08em] text-text-light/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2">{link.label}</a>)}<Button href="#contact" onClick={() => setOpen(false)} className="mt-3 self-start">Partner with us</Button></nav></div>
  </header>;
}