import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://talent50.com'),
  title: 'Talent50 Group | Building the Missing Middle of African Sport',
  description:
    'Talent50 Group unlocks the value of African sports by building teams, media, and technology that keep value on the continent.',
  keywords: ['Talent50', 'African sport', 'sports tech', 'sports media'],
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
