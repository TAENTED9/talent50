import type { Metadata, Viewport } from 'next';
import { Anton, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const displayFont = Anton({ subsets: ['latin'], weight: '400', variable: '--font-display', display: 'swap' });
const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const monoFont = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

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
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
