import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const bodyFont = Hanken_Grotesk({ variable: '--font-body', display: 'swap', subsets: ['latin'] });
const displayFont = Bricolage_Grotesque({ variable: '--font-display', display: 'swap', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://talent50.com'),
  title: 'Talent50 Group | Building the Missing Middle of African Sport',
  description:
    'Talent50 Group unlocks the value of African sports by building teams, media, and technology that keep value on the continent.',
  keywords: ['Talent50', 'African sport', 'sports tech', 'sports media'],
  icons: { icon: '/assets/logo-ink.png' },
  openGraph: {
    title: 'Talent50 Group',
    description: 'Building the missing middle of African sport.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talent50 Group',
    description: 'Building the missing middle of African sport.',
  },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0e0f0d' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
