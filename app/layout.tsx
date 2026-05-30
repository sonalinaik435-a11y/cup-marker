import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cup Marker - Cup Position Tracking for Thimble',
  description: 'Master the Thimble cup game with our advanced real-time cup position tracking system. Track cup movements and improve your prediction accuracy.',
  keywords: 'Cup Tracking, Thimble Game, Cup Position Tracker, Game Prediction',
  authors: [{ name: 'sonalinaik435-a11y' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Cup Marker - Cup Position Tracker',
    description: 'Advanced cup position tracking for Thimble online game',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}